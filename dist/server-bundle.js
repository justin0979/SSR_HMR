!function(e){var t={};function _(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,_),a.l=!0,a.exports}_.m=e,_.c=t,_.d=function(e,t,r){_.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},_.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,t){if(1&t&&(e=_(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(_.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)_.d(r,a,function(t){return e[t]}.bind(null,a));return r},_.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return _.d(t,"a",t),t},_.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},_.p="",_(_.s=39)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,_){"use strict";(function(e){var r;_.d(t,"b",(function(){return n})),_.d(t,"c",(function(){return l})),_.d(t,"a",(function(){return c})),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var a,o,n="fetch_users",l="INCREMENT",c="DECREMENT";(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(a.register(n,"FETCH_USERS","/home/scrat/SSR_HMR/src/client/actions/types.js"),a.register(l,"INCREMENT","/home/scrat/SSR_HMR/src/client/actions/types.js"),a.register(c,"DECREMENT","/home/scrat/SSR_HMR/src/client/actions/types.js")),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)}).call(this,_(1)(e))},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-router-dom")},function(e,t,_){"use strict";(function(e){_.d(t,"b",(function(){return p})),_.d(t,"c",(function(){return f})),_.d(t,"a",(function(){return E}));var r,a=_(18),o=_.n(a),n=(_(54),_(25)),l=_.n(n),c=_(26),s=_.n(c),i=_(2);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var u,d,p=function(){return function(){var e=l()(o.a.mark((function e(t){var _;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get("http://react-ssr-api.herokuapp.com/users");case 2:_=e.sent,t({type:i.b,payload:_});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(e){return{type:i.c,payload:e+1}},E=function(e){return{type:i.a,payload:e-1}};(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(u.register(p,"fetchUsers","/home/scrat/SSR_HMR/src/client/actions/index.js"),u.register(f,"increment","/home/scrat/SSR_HMR/src/client/actions/index.js"),u.register(E,"decrement","/home/scrat/SSR_HMR/src/client/actions/index.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,_(1)(e))},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("webpack")},function(e,t){e.exports=require("react-router-config")},function(e,t,_){"use strict";(function(e){_(45),_(46),_(47),_(48),_(49),_(50),_(51),_(52),_(53);var r,a=_(10),o=_.n(a),n=_(24),l=_(27);function c(e,t){var _=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),_.push.apply(_,r)}return _}function s(e){for(var t=1;t<arguments.length;t++){var _=null!=arguments[t]?arguments[t]:{};t%2?c(_,!0).forEach((function(t){o()(e,t,_[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(_)):c(_).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(_,t))}))}return e}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var i,u,d=[s({path:"/"},n.a,{exact:!0}),s({path:"/users"},l.a)];t.a=d,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&i.register(d,"default","/home/scrat/SSR_HMR/src/client/Routes.js"),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(e)}).call(this,_(1)(e))},function(e,t){e.exports=require("@babel/runtime/helpers/defineProperty")},function(e,t){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,t){e.exports=require("@babel/runtime/helpers/createClass")},function(e,t){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,t){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,t){e.exports=require("@babel/runtime/helpers/inherits")},function(e,t){e.exports=require("express")},function(e,t,_){e.exports=_.p+"src/client/images/field-1.jpg"},function(e,t){e.exports=require("@babel/runtime/regenerator")},function(e,t,_){(function(t){"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r=_(56),a=_(57),o=_(58),n=_(59),l=_(7);e.exports=o(n,{name:"client",target:"web",mode:"development",entry:{client:["react-hot-loader/patch","webpack-hot-middleware/client?reload=true&name=client&timeout=2000","./src/client/client.js"]},output:{filename:"[name]-bundle.js",path:r.resolve(t,"../public"),publicPath:"/"},resolve:{alias:{"react-dom":"@hot-loader/react-dom"}},module:{rules:[{test:/\.s?css$/,use:[{loader:a.loader,options:{hmr:!0}},"css-loader","postcss-loader","sass-loader"]}]},plugins:[new a({filename:"style.css"}),new l.HotModuleReplacementPlugin]})}).call(this,"/")},function(e,t){e.exports=require("core-js/modules/es.array.map")},function(e,t){e.exports=require("core-js/modules/es.array.concat")},function(e,t){e.exports=require("webpack-dev-middleware")},function(e,t){e.exports=require("webpack-hot-middleware")},function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(14),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(15),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),react_redux__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(3),react_redux__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__),react_router_dom__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(4),react_router_dom__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__),_images_field_1__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(17),_images_field_1__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_images_field_1__WEBPACK_IMPORTED_MODULE_8__),_actions__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(5),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},HomePage=function(_React$Component){function HomePage(){return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this,HomePage),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(HomePage).apply(this,arguments))}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(HomePage,_React$Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(HomePage,[{key:"render",value:function(){var e=this,t=this.props.count;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"app"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"story"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("figure",{className:"story__pic"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img",{src:_images_field_1__WEBPACK_IMPORTED_MODULE_8___default.a,alt:"field1"})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("figure",{className:"story__pic2"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img",{src:_images_field_1__WEBPACK_IMPORTED_MODULE_8___default.a,alt:"field1"})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"story__text"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",null,"Field Pic"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",null,"I made sure that the hot module replacement code had been properly used. So far, everything is updating as expected. Now, I am going to take some time to finish some CSS courses and continue to check out how to have HMR implemented so that mini-css-extract-plugin can be used; that way, when I turn off javascript on the browser, all CSS is still applied."),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p",{className:"update"},"UPDATE: external css files now work and JSX updates are being applied with and without JS applied to browser"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"update"},"UPDATE TO ABOVE UPDATE: Well, JSX and CSS saves only activate browser refreshes when JS is allowed in browser. Not sure what I did differently within a span of two hours, but now, when JS is blocked on browser, changes do not show and browser doesn't refresh (have to stop and npm start to see changes). At least with JS allowed in browser, saves auto refresh and are applied to browser. With JS blocked, initial CSS and JSX are still applied. Good enough for development...for now."))),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link,{className:"link",to:"/users"},"Check out the users page"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"count"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"buttons"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn btn--increment",onClick:function(){return e.props.increment(t)}},"increment"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"btn btn--decrement",onClick:function(){return e.props.decrement(t)}},"decrement")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1",{className:"count__value"},this.props.count)))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),HomePage}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),mapStateToProps=function(e){return{count:e.count}},_default={component:Object(react_redux__WEBPACK_IMPORTED_MODULE_6__.connect)(mapStateToProps,{increment:_actions__WEBPACK_IMPORTED_MODULE_9__.c,decrement:_actions__WEBPACK_IMPORTED_MODULE_9__.a})(HomePage)},reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(HomePage,"HomePage","/home/scrat/SSR_HMR/src/client/components/HomePage.jsx"),reactHotLoader.register(mapStateToProps,"mapStateToProps","/home/scrat/SSR_HMR/src/client/components/HomePage.jsx"),reactHotLoader.register(_default,"default","/home/scrat/SSR_HMR/src/client/components/HomePage.jsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(1)(module))},function(e,t){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("axios")},function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(21),core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(55),core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(11),_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(12),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(13),_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(14),_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(28),_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(15),_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(10),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__),react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__),react_redux__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(3),react_redux__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__),react_router_dom__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(4),react_router_dom__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_12__),_actions__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(5),enterModule;enterModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0,enterModule&&enterModule(module);var __signature__="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},UsersListPage=function(_React$Component){function UsersListPage(){var e,t;_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this,UsersListPage);for(var _=arguments.length,r=new Array(_),a=0;a<_;a++)r[a]=arguments[a];return t=_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this,(e=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(UsersListPage)).call.apply(e,[this].concat(r))),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(t),"renderList",(function(){return t.props.users.map((function(e){return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li",{key:e.id},e.name)}))})),t}return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(UsersListPage,_React$Component),_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(UsersListPage,[{key:"componentDidMount",value:function(){this.props.fetchUsers()}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1",null,"Big List of Users:"),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul",null,this.renderList()),react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.Link,{className:"link",to:"/"},"Really, Really boring still, but go back home"))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),UsersListPage}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component),loadData=function(e){return e.dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_13__.b)())},mapStateToProps=function(e){return{users:e.users}},_default={loadData:loadData,component:Object(react_redux__WEBPACK_IMPORTED_MODULE_11__.connect)(mapStateToProps,{fetchUsers:_actions__WEBPACK_IMPORTED_MODULE_13__.b})(UsersListPage)},reactHotLoader,leaveModule;__webpack_exports__.a=_default,reactHotLoader="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0,reactHotLoader&&(reactHotLoader.register(UsersListPage,"UsersListPage","/home/scrat/SSR_HMR/src/client/components/UsersListPage.jsx"),reactHotLoader.register(loadData,"loadData","/home/scrat/SSR_HMR/src/client/components/UsersListPage.jsx"),reactHotLoader.register(mapStateToProps,"mapStateToProps","/home/scrat/SSR_HMR/src/client/components/UsersListPage.jsx"),reactHotLoader.register(_default,"default","/home/scrat/SSR_HMR/src/client/components/UsersListPage.jsx")),leaveModule="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0,leaveModule&&leaveModule(module)}).call(this,__webpack_require__(1)(module))},function(e,t){e.exports=require("@babel/runtime/helpers/assertThisInitialized")},function(e,t,_){"use strict";(function(e){_(21);var r,a=_(0),o=_.n(a),n=_(30),l=_(3),c=_(4),s=_(31),i=_.n(s),u=_(32);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var d,p,f=function(e,t){var _=Object(n.renderToString)(o.a.createElement(l.Provider,{store:t},o.a.createElement(c.StaticRouter,{location:e.path,context:{}},o.a.createElement(u.a,null))));return"\n  <!DOCTYPE html>\n  <html lang='en'>\n    <head>\n      <meta charset='utf-8'>\n      <meta name='viewport' content='width=device-width, initial-scale=1'>\n      <link rel='stylesheet' href='style.css'>\n      <title>SSR from renderer.js</title>\n    </head>\n    <body>\n      <div id='root'>".concat(_,"</div>\n      <script>\n        window.__INITIAL_STATE__ = ").concat(i()(t.getState()),"\n      <\/script>\n      <script src='client-bundle.js'><\/script>\n    </body>\n  </html>\n  ")};t.a=f,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&d.register(f,"default","/home/scrat/SSR_HMR/server/helpers/renderer.js"),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,_(1)(e))},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("serialize-javascript")},function(e,t,_){"use strict";(function(e){var r,a=_(33),o=_(0),n=_.n(o),l=_(8),c=_(9);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var s,i,u=function(){return n.a.createElement("div",null,Object(l.renderRoutes)(c.a))},d=Object(a.hot)(u);t.a=d,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(u,"App","/home/scrat/SSR_HMR/src/client/App.jsx"),s.register(d,"default","/home/scrat/SSR_HMR/src/client/App.jsx")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)}).call(this,_(1)(e))},function(e,t){e.exports=require("react-hot-loader/root")},function(e,t,_){"use strict";(function(e){var r,a=_(6),o=_(35),n=_.n(o),l=_(36);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,s,i=function(){return Object(a.createStore)(l.a,{},Object(a.applyMiddleware)(n.a))};t.a=i,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&c.register(i,"default","/home/scrat/SSR_HMR/server/helpers/createStore.js"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,_(1)(e))},function(e,t){e.exports=require("redux-thunk")},function(e,t,_){"use strict";(function(e){var r,a=_(6),o=_(37),n=_(38);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var l,c,s=Object(a.combineReducers)({count:o.a,users:n.a});t.a=s,(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&l.register(s,"default","/home/scrat/SSR_HMR/src/client/reducers/index.js"),(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&c(e)}).call(this,_(1)(e))},function(e,t,_){"use strict";(function(e){var r,a=_(2);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,n,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.c:case a.a:return t.payload;default:return e}};t.a=l,(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&o.register(l,"default","/home/scrat/SSR_HMR/src/client/reducers/countReducer.js"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,_(1)(e))},function(e,t,_){"use strict";(function(e){var r,a=_(2);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var o,n,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.b:return t.payload.data;default:return e}};t.a=l,(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&o.register(l,"default","/home/scrat/SSR_HMR/src/client/reducers/usersReducer.js"),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&n(e)}).call(this,_(1)(e))},function(e,t,_){"use strict";_.r(t),function(e){_(40),_(20),_(41),_(42),_(43),_(44);var t,r=_(16),a=_.n(r),o=_(22),n=_.n(o),l=_(23),c=_.n(l),s=_(7),i=_.n(s),u=_(8),d=_(9),p=_(29),f=_(19),E=_.n(f),b=_(34);(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var P=a()(),M=i()(E.a);P.use(n()(M,{publicPath:E.a.output.publicPath})),P.use(c()(M)),P.use(a.a.static("public")),P.get("*",(function(e,t,_){var r=Object(b.a)(),a=Object(u.matchRoutes)(d.a,e.path).map((function(e){var t=e.route;return t.loadData?t.loadData(r):null}));Promise.all(a).then((function(){t.send(Object(p.a)(e,r))}))}));var m,O,D=process.env.PORT||3e3;P.listen(D,(function(){return console.log("Server listening on http://localhost:".concat(D))})),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(P,"app","/home/scrat/SSR_HMR/server/index.js"),m.register(M,"compiler","/home/scrat/SSR_HMR/server/index.js"),m.register(D,"PORT","/home/scrat/SSR_HMR/server/index.js")),(O="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&O(e)}.call(this,_(1)(e))},function(e,t){e.exports=require("core-js/modules/es.array.iterator")},function(e,t){e.exports=require("core-js/modules/es.object.to-string")},function(e,t){e.exports=require("core-js/modules/es.promise")},function(e,t){e.exports=require("core-js/modules/es.string.iterator")},function(e,t){e.exports=require("core-js/modules/web.dom-collections.iterator")},function(e,t){e.exports=require("core-js/modules/es.symbol")},function(e,t){e.exports=require("core-js/modules/es.array.filter")},function(e,t){e.exports=require("core-js/modules/es.array.for-each")},function(e,t){e.exports=require("core-js/modules/es.object.define-properties")},function(e,t){e.exports=require("core-js/modules/es.object.define-property")},function(e,t){e.exports=require("core-js/modules/es.object.get-own-property-descriptor")},function(e,t){e.exports=require("core-js/modules/es.object.get-own-property-descriptors")},function(e,t){e.exports=require("core-js/modules/es.object.keys")},function(e,t){e.exports=require("core-js/modules/web.dom-collections.for-each")},function(e,t){e.exports=require("regenerator-runtime/runtime")},function(e,t){e.exports=require("core-js/modules/es.function.name")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("mini-css-extract-plugin")},function(e,t){e.exports=require("webpack-merge")},function(e,t,_){"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var r=_(7),a=_(60).CleanWebpackPlugin;e.exports={resolve:{extensions:[".js",".jsx",".css",".scss",".jpg",".jpeg",".png",".gif",".svg",".json"]},module:{rules:[{test:/\.jsx?$/,use:"babel-loader",exclude:/node_modules/},{test:/\.(jpe?g|png|gif|svg)$/,use:[{loader:"file-loader",options:{name:"[path][name].[ext]"}},"image-webpack-loader"]}]},plugins:[new r.DefinePlugin({"process.env.NODE_ENV":JSON.stringify("development")}),new a({cleanStaleWebpackAssets:!1})]}},function(e,t){e.exports=require("clean-webpack-plugin")}]);