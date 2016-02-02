webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var React = __webpack_require__(2);
	var ReactDom = __webpack_require__(159);
	var App_1 = __webpack_require__(160);
	ReactDom.render(React.createElement(App_1.default), document.getElementById("appPane"));


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Index.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 160:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var AppPane_1 = __webpack_require__(161);
	var CommonActionCreators_1 = __webpack_require__(172);
	__webpack_require__(180);
	var App = (function (_super) {
	    __extends(App, _super);
	    function App() {
	        _super.apply(this, arguments);
	    }
	    App.prototype.render = function () {
	        return React.createElement("div", null, React.createElement(AppPane_1.default, null));
	    };
	    App.prototype.componentDidMount = function () {
	        CommonActionCreators_1.default.loadApp();
	    };
	    return App;
	})(React.Component);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = App;
	;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "App.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	var AppStore_1 = __webpack_require__(162);
	var CommonActionCreators_1 = __webpack_require__(172);
	var ContentPane_1 = __webpack_require__(173);
	var LaunchPaneArray_1 = __webpack_require__(174);
	var AppPane = (function (_super) {
	    __extends(AppPane, _super);
	    function AppPane() {
	        var _this = this;
	        _super.call(this);
	        this.onChange = function () {
	            _this.setState(_this.getStateFromStores());
	        };
	        this.state = this.getStateFromStores();
	    }
	    AppPane.prototype.render = function () {
	        var _this = this;
	        return (React.createElement("div", {"className": "pane-columns", "id": "paneModules"}, React.createElement(LaunchPaneArray_1.default, null), React.createElement("div", null, React.createElement(ContentPane_1.default, {"title": "TITLE", "summary": "SUMMARY"}), "Say Something!", React.createElement("div", null, React.createElement("button", {"onClick": function () { return _this.onButtonClick(); }}, "Say Hello!")))));
	    };
	    AppPane.prototype.componentDidMount = function () {
	        AppStore_1.default.addListener(this.onChange);
	    };
	    AppPane.prototype.componentWillUnmount = function () {
	        AppStore_1.default.removeListener(this.onChange);
	    };
	    AppPane.prototype.onButtonClick = function () {
	        CommonActionCreators_1.default.sayHello();
	    };
	    AppPane.prototype.getStateFromStores = function () {
	        return {
	            bodyTitle: "TypeScript/React Client/Server Demo App"
	        };
	    };
	    return AppPane;
	})(React.Component);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AppPane;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppPane.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var BaseStore_1 = __webpack_require__(163);
	var Dispatcher_1 = __webpack_require__(164);
	var AppLoadedAction_1 = __webpack_require__(168);
	var SetLaunchPaneAction_1 = __webpack_require__(170);
	var SayHelloAction_1 = __webpack_require__(171);
	var AppStore = (function (_super) {
	    __extends(AppStore, _super);
	    function AppStore() {
	        var _this = this;
	        _super.call(this);
	        this.launchPaneActive = 0;
	        Dispatcher_1.default.register(function (action) { return _this.processActions(action); });
	    }
	    AppStore.prototype.getLaunchPaneActive = function () {
	        return this.launchPaneActive;
	    };
	    ;
	    AppStore.prototype.processActions = function (action) {
	        if (action instanceof AppLoadedAction_1.default) {
	        }
	        else if (action instanceof SetLaunchPaneAction_1.default) {
	            this.launchPaneActive = action.activePane;
	            this.emitChange();
	        }
	        else if (action instanceof SayHelloAction_1.default) {
	            this.emitChange();
	        }
	    };
	    ;
	    return AppStore;
	})(BaseStore_1.default);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = new AppStore();


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppStore.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 163:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var BaseStore = (function () {
	    function BaseStore() {
	        this.listeners = null;
	        this.listeners = [];
	    }
	    BaseStore.prototype.addListener = function (listener) {
	        this.listeners.push(listener);
	    };
	    BaseStore.prototype.removeListener = function (listener) {
	        var index = this.listeners.indexOf(listener);
	        if (index > -1) {
	            this.listeners.splice(index, 1);
	        }
	    };
	    BaseStore.prototype.emitChange = function () {
	        for (var i = 0; i < this.listeners.length; i++) {
	            this.listeners[i]();
	        }
	    };
	    return BaseStore;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = BaseStore;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "BaseStore.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var Flux = __webpack_require__(165);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = new Flux.Dispatcher();


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Dispatcher.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 168:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var ActionLogEntry_1 = __webpack_require__(169);
	var AppLoadedAction = (function () {
	    function AppLoadedAction(bodyTitle) {
	        this.bodyTitle = bodyTitle;
	    }
	    AppLoadedAction.prototype.toLogEntry = function () {
	        return new ActionLogEntry_1.default("AppLoadedAction", {
	            "bodyTitle": this.bodyTitle
	        });
	    };
	    return AppLoadedAction;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AppLoadedAction;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "AppLoadedAction.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 169:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var ActionLogEntry = (function () {
	    function ActionLogEntry(name, logProperties) {
	        this.name = name;
	        this.logProperties = logProperties;
	    }
	    ActionLogEntry.prototype.toString = function () {
	        if (this.logProperties)
	            return this.name + " | " + JSON.stringify(this.logProperties);
	        else
	            return "" + this.name;
	    };
	    return ActionLogEntry;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ActionLogEntry;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ActionLogEntry.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var ActionLogEntry_1 = __webpack_require__(169);
	var SetLaunchPaneAction = (function () {
	    function SetLaunchPaneAction(activePane) {
	        this.activePane = activePane;
	    }
	    SetLaunchPaneAction.prototype.toLogEntry = function () {
	        return new ActionLogEntry_1.default("SetLaunchPaneAction", { "activePane": this.activePane.toString() });
	    };
	    return SetLaunchPaneAction;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SetLaunchPaneAction;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SetLaunchPaneAction.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 171:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var ActionLogEntry_1 = __webpack_require__(169);
	var SayHelloAction = (function () {
	    function SayHelloAction() {
	    }
	    SayHelloAction.prototype.toLogEntry = function () {
	        return new ActionLogEntry_1.default("SayHelloAction");
	    };
	    return SayHelloAction;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = SayHelloAction;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "SayHelloAction.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var Dispatcher_1 = __webpack_require__(164);
	var AppLoadedAction_1 = __webpack_require__(168);
	var SetLaunchPaneAction_1 = __webpack_require__(170);
	var SayHelloAction_1 = __webpack_require__(171);
	var CommonActionCreators = (function () {
	    function CommonActionCreators() {
	    }
	    CommonActionCreators.prototype.loadApp = function () {
	        var bodyTitle = "TypeScript/React Client/Server Demo App";
	        Dispatcher_1.default.dispatch(new AppLoadedAction_1.default(bodyTitle));
	    };
	    CommonActionCreators.prototype.setLaunchPaneActive = function (pane) {
	        Dispatcher_1.default.dispatch(new SetLaunchPaneAction_1.default(pane));
	    };
	    CommonActionCreators.prototype.sayHello = function () {
	        Dispatcher_1.default.dispatch(new SayHelloAction_1.default());
	    };
	    return CommonActionCreators;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = new CommonActionCreators();


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "CommonActionCreators.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(2);
	;
	var ContentPane = (function (_super) {
	    __extends(ContentPane, _super);
	    function ContentPane() {
	        _super.apply(this, arguments);
	    }
	    ContentPane.prototype.render = function () {
	        return (React.createElement("div", null, React.createElement("div", null, this.props.title), React.createElement("span", null, "Summary: "), React.createElement("div", {"ref": "summaryRef"}, this.props.summary), this.props.children));
	    };
	    return ContentPane;
	})(React.Component);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ContentPane;
	;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ContentPane.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var classNames = __webpack_require__(175);
	var React = __webpack_require__(2);
	var LaunchPane_1 = __webpack_require__(176);
	var AppStore_1 = __webpack_require__(162);
	var CommonActionCreators_1 = __webpack_require__(172);
	var LaunchPaneTab_1 = __webpack_require__(177);
	var LaunchPaneSectLoader_1 = __webpack_require__(178);
	var LaunchPaneSectSettings_1 = __webpack_require__(179);
	;
	var LaunchPaneArray = (function (_super) {
	    __extends(LaunchPaneArray, _super);
	    function LaunchPaneArray(props) {
	        var _this = this;
	        _super.call(this, props);
	        this.onChange = function () {
	            _this.setState(_this.getStateFromStores());
	            _this.setLaunchPaneState();
	            _this.setLaunchPaneDom();
	        };
	        this.LaunchPanes = [
	            new LaunchPane_1.LaunchPane("launch-loader", "Loader", "fa fa-sitemap", false, LaunchPane_1.LaunchPaneType.BLEEDING, LaunchPaneSectLoader_1.default),
	            new LaunchPane_1.LaunchPane("launch-resource", "Resource", "fa fa-file", false, LaunchPane_1.LaunchPaneType.BUFFERED, LaunchPaneSectSettings_1.default),
	            new LaunchPane_1.LaunchPane("launch-user", "User", "fa fa-user", false, LaunchPane_1.LaunchPaneType.BUFFERED, LaunchPaneSectSettings_1.default),
	            new LaunchPane_1.LaunchPane("launch-settings", "Settings", "fa fa-cogs", false, LaunchPane_1.LaunchPaneType.BUFFERED, LaunchPaneSectSettings_1.default)
	        ];
	        this.state = this.getStateFromStores();
	        this.setLaunchPaneState();
	    }
	    LaunchPaneArray.prototype.componentDidMount = function () {
	        AppStore_1.default.addListener(this.onChange);
	    };
	    LaunchPaneArray.prototype.componentWillUnmount = function () {
	        AppStore_1.default.removeListener(this.onChange);
	    };
	    /** Sets properties in LaunchPanes array according to AppStore */
	    LaunchPaneArray.prototype.setLaunchPaneState = function () {
	        var activeLaunchPane = AppStore_1.default.getLaunchPaneActive();
	        this.LaunchPanes.map(function (pane, i) {
	            pane.active = (activeLaunchPane === i) ? true : false; // sets pane's active state (t/f)
	        }.bind(this));
	    };
	    /** Sets display properties of LaunchPanes elements */
	    LaunchPaneArray.prototype.setLaunchPaneDom = function () {
	        this.LaunchPanes.map(function (pane, i) {
	            this.refs[pane.getTabRef()].className = pane.getTabClassName();
	            this.refs[pane.getSectRef()].style.display = pane.getSectStyleDisplay();
	        }.bind(this));
	    };
	    LaunchPaneArray.prototype.onClickTab = function (e) {
	        var activeLaunchPane = AppStore_1.default.getLaunchPaneActive();
	        if (activeLaunchPane !== e) {
	            CommonActionCreators_1.default.setLaunchPaneActive(e);
	        }
	    };
	    LaunchPaneArray.prototype.render = function () {
	        return (React.createElement("div", {"className": "pane-launch"}, React.createElement("div", {"className": "sect-left"}, React.createElement("div", {"className": "side-bar"}, React.createElement("a", {"href": "?module=none"}, React.createElement("i", {"className": "fa fa-wrench fa-logo", "title": "/tools"})), React.createElement("ul", {"className": "side-nav"}, this.LaunchPanes.map(function (pane, i) {
	            return (React.createElement("li", {"ref": pane.getTabRef(), "key": i, "onClick": this.onClickTab.bind(this, i), "className": pane.getTabClassName()}, React.createElement(LaunchPaneTab_1.default, {"icon": pane.icon})));
	        }.bind(this))))), React.createElement("div", {"className": "sect-right"}, this.LaunchPanes.map(function (pane, i) {
	            var comp = React.createElement(pane.comp, { "def": pane });
	            return (React.createElement("div", {"ref": pane.getSectRef(), "key": i, "className": pane.getSectClassName(), "style": { display: pane.getSectStyleDisplay() }}, comp));
	        }.bind(this)))));
	    };
	    LaunchPaneArray.prototype.getStateFromStores = function () {
	        return {};
	    };
	    return LaunchPaneArray;
	})(React.Component);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = LaunchPaneArray;
	;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "LaunchPaneArray.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },

/***/ 176:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	(function (LaunchPaneType) {
	    LaunchPaneType[LaunchPaneType["BLEEDING"] = 0] = "BLEEDING";
	    LaunchPaneType[LaunchPaneType["BUFFERED"] = 1] = "BUFFERED"; // area styling for common control over layout
	})(exports.LaunchPaneType || (exports.LaunchPaneType = {}));
	var LaunchPaneType = exports.LaunchPaneType;
	;
	;
	var LaunchPane = (function () {
	    function LaunchPane(ref, label, icon, active, type, comp) {
	        this.ref = ref;
	        this.label = label;
	        this.icon = icon;
	        this.active = active;
	        this.type = type;
	        this.comp = comp;
	        // init
	    }
	    ;
	    LaunchPane.prototype.getTabRef = function () {
	        return this.ref + "_tab";
	    };
	    LaunchPane.prototype.getSectRef = function () {
	        return this.ref + "_sect";
	    };
	    LaunchPane.prototype.getTabClassName = function () {
	        if (this.active)
	            return "active";
	        else
	            return undefined;
	    };
	    LaunchPane.prototype.getSectClassName = function () {
	        switch (this.type) {
	            case LaunchPaneType.BLEEDING:
	                return "area-bleeding disp-fade";
	            case LaunchPaneType.BUFFERED:
	                return "area-buffered disp-fade scroll-mini scroll-y";
	        }
	    };
	    LaunchPane.prototype.getSectStyleDisplay = function () {
	        if (this.active)
	            return "block";
	        else
	            return "none";
	    };
	    return LaunchPane;
	})();
	exports.LaunchPane = LaunchPane;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "LaunchPane.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var classNames = __webpack_require__(175);
	var React = __webpack_require__(2);
	var LaunchPaneTab = (function (_super) {
	    __extends(LaunchPaneTab, _super);
	    function LaunchPaneTab() {
	        _super.apply(this, arguments);
	    }
	    LaunchPaneTab.prototype.render = function () {
	        return (React.createElement("div", {"className": "side-nav-tab"}, React.createElement("div", {"className": "icon-box"}, React.createElement("div", {"className": this.props.icon}))));
	    };
	    return LaunchPaneTab;
	})(React.Component);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = LaunchPaneTab;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "LaunchPaneTab.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var classNames = __webpack_require__(175);
	var React = __webpack_require__(2);
	// mocking root's parent node to provide context and eliminate null checking
	// var rootParentNode = CreateRootNode("tree", "/", )
	var LaunchPaneSectLoader = (function (_super) {
	    __extends(LaunchPaneSectLoader, _super);
	    function LaunchPaneSectLoader(props) {
	        _super.call(this, props);
	    }
	    LaunchPaneSectLoader.prototype.setState = function (state) { _super.prototype.setState.call(this, state); };
	    LaunchPaneSectLoader.prototype.render = function () {
	        return (React.createElement("div", {"className": "vert"}, React.createElement("div", {"className": "zone-head", "ng-class": "{ 'zone-shadow' : (format.selected != 'INV') }"}, React.createElement("div", {"className": "h4 launch-header"}, React.createElement("span", {"className": "launch-header-title"}, "Directory")), React.createElement("div", {"className": "flex-tank"}, React.createElement("div", {"className": "flex-tabs", "data-model": "format.selected", "data-options": "format.options"}))), React.createElement("div", {"className": "zone-sect"}, React.createElement("div", {"className": "zone-list top-pad disp-fade scroll-mini scroll-x scroll-y", "ng-show": "(format.selected == 'TDF')"}, React.createElement("div", {"className": "nav-pick scroll-buf", "ng-repeat": "sect in navsSectsCat"}, " ")))));
	    };
	    return LaunchPaneSectLoader;
	})(React.Component);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = LaunchPaneSectLoader;
	;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "LaunchPaneSectLoader.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var classNames = __webpack_require__(175);
	var React = __webpack_require__(2);
	var LaunchPaneSectSettings = (function (_super) {
	    __extends(LaunchPaneSectSettings, _super);
	    function LaunchPaneSectSettings() {
	        _super.apply(this, arguments);
	    }
	    LaunchPaneSectSettings.prototype.render = function () {
	        return (React.createElement("div", {"className": "vert"}, React.createElement("div", {"className": "h4"}, this.props.def.label), React.createElement("p", null, "This is a reusable panel"), React.createElement("div", null, React.createElement("h5", null, "Output Levels"), React.createElement("div", {"className": "flex-spread"}, React.createElement("div", {"className": "flex-field"}, React.createElement("span", {"className": "h6"}, "Options")), React.createElement("div", {"className": "flex-field"}, React.createElement("div", {"className": "btn-group", "role": "group", "aria-label": "First group"}, React.createElement("button", {"type": "button", "className": "btn btn-default"}, "0"), React.createElement("button", {"type": "button", "className": "btn btn-default"}, "1"), React.createElement("button", {"type": "button", "className": "btn btn-default"}, "2"), React.createElement("button", {"type": "button", "className": "btn btn-default"}, "3")))), React.createElement("div", null, "Note: Logging will impact performance and any added delays are omitted from totals.")), React.createElement("br", null), React.createElement("div", null, React.createElement("h5", null, "Testing"), React.createElement("div", {"className": "flex-spread"}, React.createElement("span", {"className": "flex-field"}, React.createElement("button", {"className": "btn btn-default btn-func"}, "Add Field")), React.createElement("div", {"className": "flex-field"}, React.createElement("input", {"type": "text"}))), React.createElement("div", {"className": "flex-spread"}, React.createElement("span", {"className": "flex-field"}, React.createElement("button", {"className": "btn btn-default btn-func"}, "Add Group")), React.createElement("div", {"className": "flex-field"}, React.createElement("input", {"type": "text"}))), React.createElement("br", null))));
	    };
	    return LaunchPaneSectSettings;
	})(React.Component);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = LaunchPaneSectSettings;
	;


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "LaunchPaneSectSettings.tsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	var Dispatcher_1 = __webpack_require__(164);
	/**
	 * Logger that logs all actions
	 */
	var ActionLogger = (function () {
	    function ActionLogger() {
	        var _this = this;
	        this.processActions = function (action) {
	            _this.log(action);
	        };
	        Dispatcher_1.default.register(this.processActions);
	    }
	    ActionLogger.prototype.log = function (action) {
	        var logEntry = action.toLogEntry();
	        if (logEntry != null) {
	            console.log("ActionLogger: " + logEntry.toString());
	        }
	    };
	    return ActionLogger;
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = new ActionLogger();


	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("c:\\acme\\Athena\\base\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ActionLogger.ts" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }

});