var chai = require("chai");
var Hierarchy_1 = require("../src/Data/Hierarchy");
function loadTests() {
    //
    // Setup test data
    // IHierarchyNode implementation with required properties (children/depth) and custom properties (name/value)
    // 	 children/depth properties are set by Hierarchy.Hierarchy
    var HierarchyTestNode = (function () {
        function HierarchyTestNode(name, value) {
            if (value === void 0) { value = 0; }
            this.name = name;
            this.value = value;
            this.depth = 0;
            this.children = null;
            // Constructor logic
        }
        return HierarchyTestNode;
    })();
    // Shared list of nodes for test purposes
    var testNodes = {
        nodeRoot: new HierarchyTestNode("root node", 0),
        nodeA: new HierarchyTestNode("node A", 1),
        nodeB: new HierarchyTestNode("node B", 2),
        nodeC: new HierarchyTestNode("node C", 3),
        nodeD: new HierarchyTestNode("node D", 4)
    };
    // A valid hierarchy is dynamically formed by this child accessor callback
    var childAccessor = function (node, depth, traversal) {
        var normalizedNodes = [];
        // returning 2 children for nodeRoot
        if (node.name === testNodes.nodeRoot.name) {
            normalizedNodes.push(testNodes.nodeA);
            normalizedNodes.push(testNodes.nodeB);
        }
        // returning 2 children for nodeB
        if (node.name === testNodes.nodeB.name) {
            normalizedNodes.push(testNodes.nodeC);
            normalizedNodes.push(testNodes.nodeD);
        }
        return normalizedNodes;
    };
    // An invalid hierarchy with self-referencing node is formed by this child accessor callback
    var childAccessorRecursive = function (node, depth, traversal) {
        var retval = [];
        if (node.name === testNodes.nodeRoot.name) {
            retval.push(testNodes.nodeA);
            retval.push(testNodes.nodeB);
            retval.push(testNodes.nodeC);
        }
        if (node.name === testNodes.nodeB.name) {
            retval.push(testNodes.nodeRoot); // deliberate self-referencing node (graft)
            retval.push(testNodes.nodeD);
        }
        return retval;
    };
    // An invalid hierarchy with duplicate node is formed by this child accessor callback
    var childAccessorDuplicate = function (node, depth, traversal) {
        var retval = [];
        if (node.name === testNodes.nodeRoot.name) {
            retval.push(testNodes.nodeA);
            retval.push(testNodes.nodeB);
            retval.push(testNodes.nodeC);
        }
        if (node.name === testNodes.nodeB.name) {
            retval.push(testNodes.nodeC); // deliberate duplicate node
            retval.push(testNodes.nodeD);
        }
        return retval;
    };
    //
    // Run Tests
    describe("Data.Hierarchy", function () {
        this.timeout(0);
        describe("Initialization", function () {
            var hierarchy = undefined;
            before(function () {
                hierarchy = new Hierarchy_1.Hierarchy(childAccessor, null);
            });
            it("should instantiate hierarchy", function () {
                chai.should().exist(hierarchy);
            });
            it("should support a provided child accessor", function () {
                chai.expect(hierarchy.getChildren).to.equal(childAccessor);
            });
        });
        describe("Generator", function () {
            var hierarchy = new Hierarchy_1.Hierarchy(childAccessor, null);
            var normalizedNodes = hierarchy.getHierarchy(testNodes.nodeRoot);
            it("should generate a flat list of nodes", function () {
                chai.expect(normalizedNodes).to.be.a.instanceof(Array);
            });
            it("should output same number of nodes", function () {
                chai.expect(normalizedNodes.length).to.equal(5);
            });
        });
        describe("Sorting", function () {
            it("should be in low-high order when sorting smallest to largest", function () {
                var sortDelegate = function (a, b) { return (a.value - b.value); };
                var normalizedNodes = new Hierarchy_1.Hierarchy(childAccessor, sortDelegate).getHierarchy(testNodes.nodeRoot);
                var nodeB = normalizedNodes.find(function (n) { return n.name == testNodes.nodeB.name; });
                chai.expect(normalizedNodes[0]).to.equal(testNodes.nodeRoot); // rootNode
                chai.expect(nodeB.children[0]).to.equal(testNodes.nodeC); // nodeC.value = 3
                chai.expect(nodeB.children[1]).to.equal(testNodes.nodeD); // nodeD.value = 4
            });
            it("should be in high-low order when sorting largest to smallest", function () {
                var sortDelegate = function (a, b) { return (b.value - a.value); };
                var normalizedNodes = new Hierarchy_1.Hierarchy(childAccessor, sortDelegate).getHierarchy(testNodes.nodeRoot);
                var nodeB = normalizedNodes.find(function (n) { return n.name == testNodes.nodeB.name; });
                chai.expect(normalizedNodes[0]).to.equal(testNodes.nodeRoot); // rootNode
                chai.expect(nodeB.children[0]).to.equal(testNodes.nodeD); // nodeD.value = 4
                chai.expect(nodeB.children[1]).to.equal(testNodes.nodeC); // nodeC.value = 3
            });
        });
        describe("Exceptions", function () {
            it("should not allow grafted nodes", function () {
                // self-referencing parent nodes will cause endless recursion
                var hierarchy = new Hierarchy_1.Hierarchy(childAccessorRecursive, null);
                chai.expect(function () {
                    var normalizedNodes = hierarchy.getHierarchy(testNodes.nodeRoot);
                }).to.throw();
            });
            it("should not allow duplicate nodes", function () {
                // duplicate nodes may result in identity problems and cause instability
                var hierarchy = new Hierarchy_1.Hierarchy(childAccessorDuplicate, null);
                chai.expect(function () {
                    var normalizedNodes = hierarchy.getHierarchy(testNodes.nodeRoot);
                }).to.throw();
            });
        });
    });
}
exports.loadTests = loadTests;
//# sourceMappingURL=HierarchyTests.js.map