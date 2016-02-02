webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	__webpack_require__(181);
	__webpack_require__(182);
	// var hierarchy = new Hierarchy();


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Index.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	/**
	  * Example of extending native JS components
	  */
	if (typeof String.format === 'function') {
	    throw "name conflict";
	}
	else {
	    String.format = function () {
	        var s = arguments[0];
	        for (var i = 0; i < arguments.length - 1; i++) {
	            var reg = new RegExp("\\{" + i + "\\}", "gm");
	            s = s.replace(reg, arguments[i + 1]);
	        }
	        return s;
	    };
	}
	//
	// String extensions
	// Generates a 32 bit FNV-1a hash, the results should match the equivalent C# version
	if (typeof String.prototype.HashFnv32u === 'function') {
	    throw "prototype conflict";
	}
	else {
	    String.prototype.HashFnv32u = function (asHex) {
	        var hval = 0x811c9dc5; // 2166136261
	        // TODO: This damned this is too slow..native strings as keys were much faster
	        // Strips unicode bits, only the lower 8 bits of the values are used
	        for (var i = 0; i < this.length; i++) {
	            hval = hval ^ (this.charCodeAt(i) & 0xFF);
	            hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
	        }
	        if (asHex)
	            return ("0000000" + (hval >>> 0).toString(16)).substr(-8);
	        return hval >>> 0;
	    };
	}
	if (typeof String.prototype.atozOnly === 'function') {
	    throw "prototype conflict";
	}
	else {
	    String.prototype.atozOnly = function () {
	        return this.search(/[^a-zA-Z]+/) === -1;
	    };
	}
	if (typeof String.prototype.atozPlusNumAndPeriodOnly === 'function') {
	    throw "prototype conflict";
	}
	else {
	    String.prototype.atozPlusNumAndPeriodOnly = function () {
	        return this.search(/[^a-zA-Z0-9.]+/) === -1;
	    };
	}
	// pads a string with a provided char (must use toString() on numbers first)
	if (typeof String.prototype.lpad === 'function') {
	    throw "prototype conflict";
	}
	else {
	    String.prototype.lpad = function (char, length) {
	        var str = this;
	        while (str.length < length)
	            str = char + str;
	        return str;
	    };
	}
	// returns the pad for a string with a provided char (must use toString() on numbers first)
	if (typeof String.prototype.gpad === 'function') {
	    throw "prototype conflict";
	}
	else {
	    String.prototype.gpad = function (char, length) {
	        var str = '';
	        while (str.length < (length - this.length))
	            str = char + str;
	        return str;
	    };
	}
	// does a case insensitive comparison
	if (typeof String.prototype.idEquals === 'function') {
	    throw "prototype conflict";
	}
	else {
	    String.prototype.idEquals = function (str) {
	        if (this.toLowerCase() === str.toLowerCase())
	            return true;
	        return false;
	    };
	}
	if (typeof String.prototype.lastPathSegment === 'function') {
	    throw "prototype conflict";
	}
	else {
	    String.prototype.lastPathSegment = function () {
	        return /[^/]*$/.exec(this)[0];
	    };
	}
	if (typeof String.prototype.convPath === 'function') {
	    throw "prototype conflict";
	}
	else {
	    String.prototype.convPath = function () {
	        return this.replace("/", "_");
	    };
	}
	if (typeof String.prototype.joinPath === 'function') {
	    throw "prototype conflict";
	}
	else {
	    String.prototype.joinPath = function (end) {
	        // TODO: performance of this?
	        var beg = this.replace("/*", "");
	        if (!end)
	            return beg;
	        if ((typeof end !== 'string') && (typeof end !== 'number'))
	            throw new Error("String.prototype.joinPath: Expected a string or number and got " + typeof end);
	        if (typeof end === 'number') {
	            return beg + "/" + end;
	        }
	        if (beg.endsWith("/") || end.startsWith("/"))
	            return beg + end;
	        return beg + "/" + end;
	    };
	}
	// Adds shybreaks after paths
	if (typeof String.prototype.breakOnPaths === 'function') {
	    throw "prototype conflict";
	}
	else {
	    String.prototype.breakOnPaths = function () {
	        var shyguys = this.split("/");
	        return shyguys.join("/&shy;");
	    };
	}
	// Adds shybreaks after paths and splits segments > 40 into xxx..xxx
	if (typeof String.prototype.splitPaths === 'function') {
	    throw "prototype conflict";
	}
	else {
	    String.prototype.splitPaths = function (maxLength) {
	        if (!maxLength)
	            maxLength = 50;
	        var shyWords = this.split(' ');
	        var shyFixed = [];
	        var halfLength = Math.floor(maxLength / 2);
	        var quarLength = Math.floor(maxLength / 4);
	        for (var i = 0; i < shyWords.length; i++) {
	            var word = shyWords[i];
	            var pathFixed = [];
	            var paths = word.split("/");
	            // processes paths or otherwise just whole words
	            for (var p = 0; p < paths.length; p++) {
	                var path = paths[p];
	                // breaks paths that are too long
	                if (path.length > maxLength) {
	                    var front = path.substr(0, quarLength);
	                    var back = path.substr(path.length - (quarLength * 3));
	                    path = front + ".." + back;
	                }
	                pathFixed.push(path);
	            }
	            shyFixed.push(pathFixed.join("/&shy;"));
	        }
	        return shyFixed.join(' ');
	    };
	}


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "String.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Array.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }

});