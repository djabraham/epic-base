/**
  * Example of extending native JS components
  */
if (!Array.prototype['find']) {
    Array.prototype['find'] = function (predicate) {
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;
        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}
//
// Array extensions
// http://davidwalsh.name/combining-js-arrays
if (typeof Array.prototype.tack === 'function') {
    throw "prototype conflict";
}
else {
    Array.prototype.tack = function (array) {
        for (var i = 0; i < array.length; i++) {
            this.push(array[i]);
        }
    };
}
if (typeof Array.prototype.append === 'function') {
    throw "prototype conflict";
}
else {
    Array.prototype.append = function (array) {
        this.push.apply(this, array);
    };
}
if (typeof Array.prototype.insertAt === 'function') {
    throw "prototype conflict";
}
else {
    Array.prototype.insertAt = function (index, item) {
        this.splice(index, 0, item);
    };
}
if (typeof Array.prototype.insertAtUniqueByProp === 'function') {
    throw "prototype conflict";
}
else {
    Array.prototype.insertAtUniqueByProp = function (index, item, prop) {
        for (var i = 0; i < this.length; i++) {
            if (this[i][prop] === item[prop])
                return false;
        }
        this.splice(index, 0, item);
    };
}
if (typeof Array.prototype.pushUnique === 'function') {
    throw "prototype conflict";
}
else {
    Array.prototype.pushUnique = function (item) {
        if (typeof Array.prototype.indexOf !== 'function')
            throw ("JavaScript engine lacks Array.indexOf() support");
        if (this.indexOf(item) == -1) {
            // if(jQuery.inArray(item, this) == -1) {         // alternative compatible version
            this.push(item);
            return true;
        }
        return false;
    };
}
if (typeof Array.prototype.mergeUnique === 'function') {
    throw "prototype conflict";
}
else {
    Array.prototype.mergeUnique = function (source) {
        for (var v = 0; v < source.length; v++) {
            if (this.indexOf(source[v]) === -1) {
                this.push(source[v]);
            }
        }
    };
}
if (typeof Array.prototype.sortByProp === 'function') {
    throw "prototype conflict";
}
else {
    Array.prototype.sortByProp = function (p) {
        return this.sort(function (a, b) {
            return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
        });
    };
}
if (typeof Array.prototype.alphanumSort === 'function') {
    throw "prototype conflict";
}
else {
    Array.prototype.alphanumSort = function (caseInsensitive) {
        for (var z = 0, t; t = this[z]; z++) {
            this[z] = [];
            var x = 0, y = -1, n = false, i, j;
            while (i = (j = t.charAt(x++)).charCodeAt(0)) {
                var m = (i == 46 || (i >= 48 && i <= 57));
                if (m !== n) {
                    this[z][++y] = "";
                    n = m;
                }
                this[z][y] += j;
            }
        }
        this.sort(function (a, b) {
            for (var x = 0, aa, bb; (aa = a[x]) && (bb = b[x]); x++) {
                if (caseInsensitive) {
                    aa = aa.toLowerCase();
                    bb = bb.toLowerCase();
                }
                if (aa !== bb) {
                    var c = Number(aa), d = Number(bb);
                    if (c == aa && d == bb) {
                        return c - d;
                    }
                    else
                        return (aa > bb) ? 1 : -1;
                }
            }
            return a.length - b.length;
        });
        for (var z = 0; z < this.length; z++)
            this[z] = this[z].join("");
    };
}
if (typeof Array.prototype.toCsvList === 'function') {
    throw "prototype conflict";
}
else {
    Array.prototype.toCsvList = function () {
        return this.join(', ');
    };
}
if (typeof Array.prototype.toHtmlList === 'function') {
    throw "prototype conflict";
}
else {
    Array.prototype.toHtmlList = function () {
        return '<ul><li>' + this.join('</li><li>') + '</li></ul>';
    };
}
//# sourceMappingURL=Array.js.map