var __CML__GLOBAL = require("../../manifest.js");
__CML__GLOBAL.webpackJsonp([3],{

/***/ "../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"D:\\\\Program Files\\\\nodejs\\\\node_global\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index/index.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Index = function () {
  function Index() {
    _classCallCheck(this, Index);

    this.data = {
      message: 'HelloCML',
      array: [{
        city: '北京'
      }, {
        city: '上海'
      }, {
        city: '广州'
      }],
      showlist: true
    };
    this.computed = {
      message2: function message2() {
        return 'computed' + this.message;
      }
    };
    this.watch = {
      showlist: function showlist(newVal, oldVal) {
        console.log('showlist changed:' + newVal);
      }
    };
    this.methods = {
      changeShow: function changeShow() {
        this.showlist = !this.showlist;
      }
    };
  }

  _createClass(Index, [{
    key: 'created',
    value: function created() {
      console.log('生命周期');
    }
  }]);

  return Index;
}();

exports.default = new Index();


module.exports = function () {
  _chameleonRuntime2.default.createPage(exports.default).getOptions();
};

/***/ }),

/***/ "../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"D:\\\\Program Files\\\\nodejs\\\\node_global\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\wx\\\\.postcssrc.js\"}}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index/index.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/pages/index/index.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"D:\\\\Program Files\\\\nodejs\\\\node_global\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\wx\\\\.postcssrc.js\"}}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index/index.cml");
var __cml__script = __webpack_require__("../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"D:\\\\Program Files\\\\nodejs\\\\node_global\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index/index.cml");

      __CML__GLOBAL.__CMLCOMPONNETS__['pages/index/index'] = __cml__script;


/***/ })

},["./src/pages/index/index.cml"])
module.exports = __CML__GLOBAL.__CMLCOMPONNETS__['pages/index/index'];