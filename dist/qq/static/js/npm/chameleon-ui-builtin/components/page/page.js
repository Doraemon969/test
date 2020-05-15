var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([2],{

/***/ "../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"D:\\\\Program Files\\\\nodejs\\\\node_global\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/page/page.qq.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/setTitle/index.js");

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CPage = function () {
  function CPage() {
    _classCallCheck(this, CPage);

    this.props = {
      title: {
        required: true,
        type: String,
        default: ''
      },
      full: {
        type: Boolean,
        default: false
      }
    };
    this.watch = {
      title: function title(v) {
        this.setTitle(v);
      }
    };
    this.methods = {
      setTitle: function setTitle(v) {
        (0, _index2.default)(v);
      },
      back: function back() {
        this.$cmlEmit('back');
      }
    };
  }

  _createClass(CPage, [{
    key: 'created',
    value: function created() {
      this.setTitle(this.title);
    }
  }]);

  return CPage;
}();

exports.default = new CPage();


module.exports = function () {
  _chameleonRuntime2.default.createComponent(exports.default).getOptions();
};

/***/ }),

/***/ "../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"D:\\\\Program Files\\\\nodejs\\\\node_global\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\qq\\\\.postcssrc.js\"}}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/page/page.qq.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/setTitle/index.interface":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "D:/projects/chameleonTEST/cmlTest/node_modules/chameleon-api/src/interfaces/setTitle/index.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = "";
var __CHECK__DEFINES__ = {
  "types": {},
  "interfaces": {
    "setTitleInterface": {
      "setTitle": {
        "input": ["String"],
        "output": "Undefined"
      }
    }
  },
  "classes": {
    "Method": ["setTitleInterface"]
  }
};
var __OBJECT__WRAPPER__ = __webpack_require__("../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/interface-loader/node_modules/mvvm-interface-parser/runtime/checkWrapper.js");

var Method = function () {
  function Method() {
    _classCallCheck(this, Method);
  }

  _createClass(Method, [{
    key: "setTitle",
    value: function setTitle(title) {
      qq.setNavigationBarTitle({
        title: title
      });
    }
  }]);

  return Method;
}();

exports.default = __OBJECT__WRAPPER__(new Method(), __CML_ERROR__, __enableTypes__, __CHECK__DEFINES__);


var copyProtoProperty = __webpack_require__("../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/interface-loader/node_modules/mvvm-interface-parser/runtime/copyProto.js");
copyProtoProperty(exports.default);

/***/ }),

/***/ "./node_modules/chameleon-api/src/interfaces/setTitle/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setTitle;

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/setTitle/index.interface");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setTitle() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  _index2.default.setTitle(title);
}

/***/ }),

/***/ "./node_modules/chameleon-ui-builtin/components/page/page.qq.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"D:\\\\Program Files\\\\nodejs\\\\node_global\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\qq\\\\.postcssrc.js\"}}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/page/page.qq.cml");
var __cml__script = __webpack_require__("../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"D:\\\\Program Files\\\\nodejs\\\\node_global\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!../../../Program Files/nodejs/node_global/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/page/page.qq.cml");

      __CML__GLOBAL.__CMLCOMPONNETS__['npm/chameleon-ui-builtin/components/page/page'] = __cml__script;


/***/ })

},["./node_modules/chameleon-ui-builtin/components/page/page.qq.cml"])
module.exports = __CML__GLOBAL.__CMLCOMPONNETS__['npm/chameleon-ui-builtin/components/page/page'];