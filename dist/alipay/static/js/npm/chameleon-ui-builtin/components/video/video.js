var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([11],{

/***/ "../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"D:\\\\Program Files\\\\nodejs\\\\node_global\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/video/video.alipay.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Video = function Video() {
  _classCallCheck(this, Video);

  this.props = {
    controls: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    loop: {
      type: Boolean,
      default: false
    },
    src: {
      type: String,
      default: ''
    },
    cstyle: {
      type: String,
      default: ''
    }
  };
  this.computed = {
    computedStyle: function computedStyle() {
      // props 必须经过计算属性，否则没有经过 cpx 转换
      return this.cstyle;
    }
  };
  this.methods = {
    onstart: function onstart(e) {
      this.$cmlEmit('start');
      this.$cmlEmit('customstart');
    },
    onpause: function onpause(e) {
      this.$cmlEmit('pause');
      this.$cmlEmit('custompause');
    },
    onfinish: function onfinish(e) {
      this.$cmlEmit('finish');
      this.$cmlEmit('customfinish');
    },
    onfail: function onfail(e) {
      this.$cmlEmit('fail');
      this.$cmlEmit('customfail');
    }
  };
};

exports.default = new Video();


module.exports = function () {
  _chameleonRuntime2.default.createComponent(exports.default).getOptions();
};

/***/ }),

/***/ "../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"D:\\\\Program Files\\\\nodejs\\\\node_global\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\alipay\\\\.postcssrc.js\"}}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/video/video.alipay.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/chameleon-ui-builtin/components/video/video.alipay.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"alipay\"}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"D:\\\\Program Files\\\\nodejs\\\\node_global\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\alipay\\\\.postcssrc.js\"}}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"alipay\"}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/video/video.alipay.cml");
var __cml__script = __webpack_require__("../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"D:\\\\Program Files\\\\nodejs\\\\node_global\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=alipay&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/video/video.alipay.cml");

      __CML__GLOBAL.__CMLCOMPONNETS__['npm/chameleon-ui-builtin/components/video/video'] = __cml__script;


/***/ })

},["./node_modules/chameleon-ui-builtin/components/video/video.alipay.cml"])
module.exports = __CML__GLOBAL.__CMLCOMPONNETS__['npm/chameleon-ui-builtin/components/video/video'];