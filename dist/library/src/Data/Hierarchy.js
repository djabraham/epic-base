//
// This class accepts an initial IHierarchyNode and FChildAccessor function, then walks
// the nodes, sets properties of children and depth in them, then returns them as a flat array.
// Essentialy, this flattens and normalizes the hierarchial data, making it easier to consume.
//
// If an IHierarchyNode needs to fetch remote data, then the FChildAccessor can return
// IPromiseChildren instead of an array of IHierarchyNode. An IDeferredChildren is needed
// at the onset when promises are used, so it can fall through and signal completion.
//
// Normalizer
var Hierarchy = (function () {
    // Accessor overrides are optional
    function Hierarchy(getChildren, sortDelegate) {
        this.getChildren = getChildren;
        this.sortDelegate = sortDelegate;
        this._processedNodes = [];
    }
    // A deferred is passed in so that hierarchy can signal completion, custom data is optional
    Hierarchy.prototype.getHierarchy = function (root, deferred, data) {
        var stack = [root], nodes = [], promise;
        var self = this;
        this._processedNodes.push(root);
        root.depth = 0;
        // Child processor was split into two forms in order to accommodate
        //   asynchronous operations in the event that a nodes data was incomplete
        self.processChildren(stack, nodes, deferred, data);
        // end game with and without optional deferred
        if (deferred) {
            promise = deferred.promise;
            return promise.then(function (nodes) {
                visitAfter(root, function (node) {
                    var childList, parent;
                    if (self.sortDelegate && (childList = node.children))
                        childList.sort(self.sortDelegate);
                });
                return nodes;
            });
        }
        else {
            visitAfter(root, function (node) {
                var childList, parent;
                if (self.sortDelegate && (childList = node.children))
                    childList.sort(self.sortDelegate);
            });
            return nodes;
        }
    };
    // Handles children synchronously, unless a promise is detected
    Hierarchy.prototype.processChildren = function (stack, nodes, deferred, data) {
        var self = this;
        var node;
        while ((node = stack.pop()) != null) {
            nodes.push(node);
            var childList = self.getChildren.call(self.getHierarchy, node, node.depth, data);
            // Break out of synchronous processing if a promise is encountered
            if (childList && (typeof childList.then === 'function')) {
                self.processPromise(stack, nodes, deferred, childList, data);
                return;
            }
            if (childList && childList.length) {
                var child;
                var n = childList.length;
                while (--n >= 0) {
                    stack.push(child = childList[n]);
                    child.parent = node;
                    child.depth = node.depth + 1;
                    if (this._processedNodes.indexOf(child) > -1)
                        throw ("Self referencing or duplicate node detected");
                    this._processedNodes.push(child);
                }
                node.children = childList;
            }
            else {
                delete node.children;
            }
        }
        // Synchronous is complete so results are ready
        if (deferred)
            deferred.resolve(nodes);
    };
    // Handles children asynchronously, whenever a promise is returned
    Hierarchy.prototype.processPromise = function (stack, nodes, deferred, promise, data) {
        var self = this;
        // Promise populates the node stack within a callback
        //   the async callback returns the children with the parent node for reference
        promise.then(function (results) {
            if (results.children && results.children.length) {
                var child;
                var n = results.children.length;
                while (--n >= 0) {
                    stack.push(child = results.children[n]);
                    child.parent = results.node;
                    child.depth = results.node.depth + 1;
                    if (this._processedNodes.indexOf(child) > -1)
                        throw ("Self referencing or duplicate node detected");
                    this._processedNodes.push(child);
                }
                results.node.children = results.children;
            }
            else {
                delete results.node.children;
            }
            // Resumes synchronous operation after nodes are loaded
            self.processChildren(stack, nodes, deferred, data);
            return results;
        });
    };
    return Hierarchy;
})();
exports.Hierarchy = Hierarchy;
;
// Pre-order traversal.
function visitBefore(node, callback) {
    var nodes = [node];
    while ((node = nodes.pop()) != null) {
        callback(node);
        var children, n;
        if ((children = node.children) && (n = children.length)) {
            while (--n >= 0)
                nodes.push(children[n]);
        }
    }
}
// Post-order traversal.
function visitAfter(node, callback) {
    var nodes = [node], nodes2 = [];
    while ((node = nodes.pop()) != null) {
        nodes2.push(node);
        var children, n;
        if ((children = node.children) && (n = children.length)) {
            var i = -1;
            while (++i < n)
                nodes.push(children[i]);
        }
    }
    while ((node = nodes2.pop()) != null) {
        callback(node);
    }
}
// Combines multiple arrays into one
function merge(arrays) {
    var n = arrays.length, m, i = -1, j = 0, merged, array;
    while (++i < n)
        j += arrays[i].length;
    merged = new Array(j);
    while (--n >= 0) {
        array = arrays[n];
        m = array.length;
        while (--m >= 0) {
            merged[--j] = array[m];
        }
    }
    return merged;
}
;
// Returns an array of source + target objects for the specified nodes.
function getLinks(nodes) {
    return merge(nodes.map(function (parent) {
        return (parent.children || []).map(function (child) {
            return { source: parent, target: child };
        });
    }));
}
exports.getLinks = getLinks;
//# sourceMappingURL=Hierarchy.js.map