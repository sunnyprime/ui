module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const env = "development" || false;
const config = {
  development: {
    IS_DEV_ENV: true,
    USE_CUSTOM_API_ENDPOINT: true,
    API_ENDPOINT: 'http://localhost:4000',
    ENVIRONMENT: 'development'
  },
  staging: {
    IS_DEV_ENV: false,
    GA_HOST: 'www.bricknbolt.com',
    USE_CUSTOM_API_ENDPOINT: false,
    ENVIRONMENT: 'staging'
  },
  production: {
    IS_DEV_ENV: false,
    GA_HOST: 'www.bricknbolt.com',
    USE_CUSTOM_API_ENDPOINT: false,
    ENVIRONMENT: 'production'
  }
};
module.exports = config[env];

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/js/common/containers/ReducerInjectorHOC.jsx":
/*!*********************************************************!*\
  !*** ./src/js/common/containers/ReducerInjectorHOC.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/brickbolt/React/bricknbolt/updated/foundation-react-ui/src/js/common/containers/ReducerInjectorHOC.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable @typescript-eslint/explicit-function-return-type */

/*
this file is always supposed to be a .jsx file converting it to .tsx will break reducer injection!  -pranjalk 2019-12-23
*/



const ReducerInjectorHOC = (key, reducer) => WrappedComponent => {
  const ReducerInjector = props => __jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["ReactReduxContext"].Consumer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, ({
    store
  }) => {
    store.injectReducer(key, reducer);
    return __jsx(WrappedComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }));
  });

  ReducerInjector.displayName = `ReducerInjected${key}`;
  return ReducerInjector;
};

/* harmony default export */ __webpack_exports__["default"] = (ReducerInjectorHOC);

/***/ }),

/***/ "./src/js/common/utils/apiClient.ts":
/*!******************************************!*\
  !*** ./src/js/common/utils/apiClient.ts ***!
  \******************************************/
/*! exports provided: apiClient, customApiCaller, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiClient", function() { return apiClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customApiCaller", function() { return customApiCaller; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! debug */ "debug");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./server */ "./src/js/common/utils/server.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_10__);








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

/* eslint-disable @typescript-eslint/no-explicit-any */



 // eslint-disable-next-line no-underscore-dangle

const debug = debug__WEBPACK_IMPORTED_MODULE_8___default()('fr-ui:api');
const GET = 'get';
const POST = 'post';
const DELETE = 'delete';
const PUT = 'put';
function apiClient(apiLib) {
  const defaultOptions = {
    method: GET,
    url: '',
    params: {},
    data: null
  };
  return useCustom => apiEndpoint => ({
    get(url, params = {}) {
      const urlEndpoint = useCustom ? apiEndpoint : apiEndpoint();
      const absoluteUrl = urlEndpoint + url;
      debug('GET request to url: ', absoluteUrl);
      return apiLib(_objectSpread({}, defaultOptions, {
        method: GET,
        url: absoluteUrl,
        params,
        headers: {// any custom headers go here
        }
      }));
    },

    delete(url, params = {}) {
      const urlEndpoint = useCustom ? apiEndpoint : apiEndpoint();
      const absoluteUrl = urlEndpoint + url;
      debug('DELETE request to url: ', absoluteUrl);
      return apiLib(_objectSpread({}, defaultOptions, {
        method: DELETE,
        url: absoluteUrl,
        params,
        headers: {// any custom headers go here
        },
        xsrfCookieName: 'add csrf cookie name here',
        xsrfHeaderName: 'add csrf header name'
      }));
    },

    put(url, params = {}, data = {}) {
      const urlEndpoint = useCustom ? apiEndpoint : apiEndpoint();
      const absoluteUrl = urlEndpoint + url;
      return apiLib(_objectSpread({}, defaultOptions, {
        method: PUT,
        url: absoluteUrl,
        params,
        data,
        headers: {// any custom headers go here
        },
        xsrfCookieName: 'add csrf cookie name here',
        xsrfHeaderName: 'add csrf header name'
      }));
    },

    post(url, params = {}, data = {}) {
      const urlEndpoint = useCustom ? apiEndpoint : apiEndpoint();
      const absoluteUrl = urlEndpoint + url;
      debug('POST request to url:', absoluteUrl);
      return apiLib(_objectSpread({}, defaultOptions, {
        method: POST,
        url: absoluteUrl,
        params,
        data,
        headers: {// any custom headers go here
        },
        xsrfCookieName: 'add csrf cookie name here',
        xsrfHeaderName: 'add csrf header name'
      }));
    },

    multiPart(url, params = {}, data = {}) {
      const urlEndpoint = useCustom ? apiEndpoint : apiEndpoint();
      const absoluteUrl = urlEndpoint + url;
      debug('Attempting multi-part request to url:', absoluteUrl);
      return apiLib(_objectSpread({}, defaultOptions, {
        method: POST,
        url: absoluteUrl,
        params,
        data,
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        xsrfCookieName: 'add csrf cookie name here',
        xsrfHeaderName: 'add csrf header name'
      }));
    },

    blob(url, params = {}) {
      const urlEndpoint = useCustom ? apiEndpoint : apiEndpoint();
      const absoluteUrl = urlEndpoint + url;
      debug('Attempting blob download of file:', absoluteUrl);
      return apiLib(_objectSpread({}, defaultOptions, {
        method: GET,
        url: absoluteUrl,
        params,
        headers: {// any custom headers go here
        },
        responseType: 'blob' // this is what makes it go in download mode

      }));
    }

  });
}
const customApiCaller = apiClient(axios__WEBPACK_IMPORTED_MODULE_7___default.a)(true);

const computeApiEndpoint = () => {
  if (_config_config__WEBPACK_IMPORTED_MODULE_10___default.a.USE_CUSTOM_API_ENDPOINT) {
    return _config_config__WEBPACK_IMPORTED_MODULE_10___default.a.API_ENDPOINT;
  }

  return Object(_server__WEBPACK_IMPORTED_MODULE_9__["getHostName"])(_server__WEBPACK_IMPORTED_MODULE_9__["isServer"])();
};

const api = apiClient(axios__WEBPACK_IMPORTED_MODULE_7___default.a)(false)(computeApiEndpoint);
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./src/js/common/utils/iterateArrayToCamelCase.ts":
/*!********************************************************!*\
  !*** ./src/js/common/utils/iterateArrayToCamelCase.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _iterateObjectToCamelCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iterateObjectToCamelCase */ "./src/js/common/utils/iterateObjectToCamelCase.ts");
/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable import/no-cycle */


const iterateArrayToCamelCase = input => {
  if (input.constructor === Array) {
    return input.map(data => {
      if (data !== null) {
        if (data.constructor === Object) {
          return Object(_iterateObjectToCamelCase__WEBPACK_IMPORTED_MODULE_0__["default"])(data);
        }

        if (data.constructor === Array) {
          return iterateArrayToCamelCase(data);
        }

        return data;
      }

      return data;
    });
  }

  return input;
};

/* harmony default export */ __webpack_exports__["default"] = (iterateArrayToCamelCase);

/***/ }),

/***/ "./src/js/common/utils/iterateObjectToCamelCase.ts":
/*!*********************************************************!*\
  !*** ./src/js/common/utils/iterateObjectToCamelCase.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "lodash/camelCase");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iterateArrayToCamelCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iterateArrayToCamelCase */ "./src/js/common/utils/iterateArrayToCamelCase.ts");


/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable import/no-cycle */



const iterateObjectToCamelCase = input => {
  if (input.constructor === Object) {
    const newObj = {};

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(input).forEach(key => {
      if (input[key] !== null) {
        if (input[key].constructor === Array) {
          newObj[lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(key)] = Object(_iterateArrayToCamelCase__WEBPACK_IMPORTED_MODULE_2__["default"])(input[key]);
        } else if (input[key].constructor === Object) {
          newObj[lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(key)] = iterateObjectToCamelCase(input[key]);
        } else {
          newObj[lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(key)] = input[key];
        }
      } else {
        newObj[lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(key)] = input[key];
      }
    });

    return newObj;
  }

  return input;
};

/* harmony default export */ __webpack_exports__["default"] = (iterateObjectToCamelCase);

/***/ }),

/***/ "./src/js/common/utils/iterateToCamelCase.ts":
/*!***************************************************!*\
  !*** ./src/js/common/utils/iterateToCamelCase.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/camelCase */ "lodash/camelCase");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iterateArrayToCamelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterateArrayToCamelCase */ "./src/js/common/utils/iterateArrayToCamelCase.ts");
/* harmony import */ var _iterateObjectToCamelCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iterateObjectToCamelCase */ "./src/js/common/utils/iterateObjectToCamelCase.ts");
/* eslint-disable @typescript-eslint/no-explicit-any */




const iterateToCamelCase = data => {
  if (data !== null) {
    if (data.constructor === Object) {
      return Object(_iterateObjectToCamelCase__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
    }

    if (data.constructor === Array) {
      return Object(_iterateArrayToCamelCase__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
    }

    if (data.constructor === String) {
      return lodash_camelCase__WEBPACK_IMPORTED_MODULE_0___default()(data);
    }

    return data;
  }

  return data;
};

/* harmony default export */ __webpack_exports__["default"] = (iterateToCamelCase);

/***/ }),

/***/ "./src/js/common/utils/server.ts":
/*!***************************************!*\
  !*** ./src/js/common/utils/server.ts ***!
  \***************************************/
/*! exports provided: isServer, getHostName, withHostGetUrl, getOtherAppHost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHostName", function() { return getHostName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withHostGetUrl", function() { return withHostGetUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOtherAppHost", function() { return getOtherAppHost; });
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable @typescript-eslint/no-explicit-any */

const isServer = !( false && false);
const getHostName = onServer => () => {
  const defaultHost = '';

  if (onServer) {
    return _config_config__WEBPACK_IMPORTED_MODULE_0___default.a.HOSTNAME || defaultHost;
  }

  return `${window.location.protocol}//${window.location.hostname}`;
};
const withHostGetUrl = endpoint => {
  if (_config_config__WEBPACK_IMPORTED_MODULE_0___default.a.USE_CUSTOM_API_ENDPOINT) return _config_config__WEBPACK_IMPORTED_MODULE_0___default.a.API_ENDPOINT;
  const hostName = getHostName(isServer)();
  return `${hostName}${endpoint}`;
};
const getOtherAppHost = appDomain => {
  if (_config_config__WEBPACK_IMPORTED_MODULE_0___default.a.IS_DEV_ENV) return 'http://localhost:4000'; // Assuming that the proxy server is running on 4000 port

  return getHostName(isServer)().replace('projects', appDomain);
};

/***/ }),

/***/ "./src/js/desktop/pages/index.tsx":
/*!****************************************!*\
  !*** ./src/js/desktop/pages/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/brickbolt/React/bricknbolt/updated/foundation-react-ui/src/js/desktop/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Index() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Welcome to BricknBolts");
}

/***/ }),

/***/ "./src/js/redux/actions/basicActions.ts":
/*!**********************************************!*\
  !*** ./src/js/redux/actions/basicActions.ts ***!
  \**********************************************/
/*! exports provided: GET_BASIC_TEST, GET_BASIC_TEST_REQUEST, GET_BASIC_TEST_FAILURE, GET_BASIC_TEST_FINALLY, getBasicApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_BASIC_TEST", function() { return GET_BASIC_TEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_BASIC_TEST_REQUEST", function() { return GET_BASIC_TEST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_BASIC_TEST_FAILURE", function() { return GET_BASIC_TEST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_BASIC_TEST_FINALLY", function() { return GET_BASIC_TEST_FINALLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBasicApi", function() { return getBasicApi; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _common_utils_apiClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/utils/apiClient */ "./src/js/common/utils/apiClient.ts");
/* harmony import */ var _transformers_basicTransformer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../transformers/basicTransformer */ "./src/js/redux/transformers/basicTransformer.ts");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

/* eslint-disable @typescript-eslint/no-explicit-any */
// Import actual files

 // Import type definitions

const GET_BASIC_TEST = 'GET_BASIC_TEST';
const GET_BASIC_TEST_REQUEST = `${GET_BASIC_TEST}_REQUEST`;
const GET_BASIC_TEST_FAILURE = `${GET_BASIC_TEST}_FAILURE`;
const GET_BASIC_TEST_FINALLY = `${GET_BASIC_TEST}_FINALLY`;
function getBasicApi(payload) {
  return {
    type: GET_BASIC_TEST,
    promise: _common_utils_apiClient__WEBPACK_IMPORTED_MODULE_7__["default"].get('/api/v1/ping', _objectSpread({}, payload)),
    transformer: _transformers_basicTransformer__WEBPACK_IMPORTED_MODULE_8__["default"]
  };
}

/***/ }),

/***/ "./src/js/redux/reducers/basicReducer.ts":
/*!***********************************************!*\
  !*** ./src/js/redux/reducers/basicReducer.ts ***!
  \***********************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return basicReducer; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_basicActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/basicActions */ "./src/js/redux/actions/basicActions.ts");








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }

/* eslint-disable @typescript-eslint/no-explicit-any */

const initialState = {
  status: null,
  error: false,
  isLoading: false
};
function basicReducer(state = initialState, action) {
  switch (action.type) {
    case _actions_basicActions__WEBPACK_IMPORTED_MODULE_7__["GET_BASIC_TEST_REQUEST"]:
      {
        return _objectSpread({}, state, {
          isLoading: true
        });
      }

    case _actions_basicActions__WEBPACK_IMPORTED_MODULE_7__["GET_BASIC_TEST"]:
      {
        return _objectSpread({}, state, {
          status: action.status
        });
      }

    case _actions_basicActions__WEBPACK_IMPORTED_MODULE_7__["GET_BASIC_TEST_FAILURE"]:
      {
        return _objectSpread({}, state, {
          status: action.status
        });
      }

    case _actions_basicActions__WEBPACK_IMPORTED_MODULE_7__["GET_BASIC_TEST_FINALLY"]:
      {
        return _objectSpread({}, state, {
          isLoading: false
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}

/***/ }),

/***/ "./src/js/redux/transformers/basicTransformer.ts":
/*!*******************************************************!*\
  !*** ./src/js/redux/transformers/basicTransformer.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_utils_iterateToCamelCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/utils/iterateToCamelCase */ "./src/js/common/utils/iterateToCamelCase.ts");
/* eslint-disable @typescript-eslint/no-explicit-any */
 // This is just an example of a transformer,
// do not ever iterate entire payloads to camelcase as it is very heavy operation - pranjalk 2019-12-23

const basicTransformer = input => Object(_common_utils_iterateToCamelCase__WEBPACK_IMPORTED_MODULE_0__["default"])(input);

/* harmony default export */ __webpack_exports__["default"] = (basicTransformer);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_common_containers_ReducerInjectorHOC__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/common/containers/ReducerInjectorHOC */ "./src/js/common/containers/ReducerInjectorHOC.jsx");
/* harmony import */ var _js_desktop_pages_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/desktop/pages/index */ "./src/js/desktop/pages/index.tsx");
/* harmony import */ var _js_redux_reducers_basicReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/redux/reducers/basicReducer */ "./src/js/redux/reducers/basicReducer.ts");



/* harmony default export */ __webpack_exports__["default"] = (Object(_js_common_containers_ReducerInjectorHOC__WEBPACK_IMPORTED_MODULE_0__["default"])('basic', _js_redux_reducers_basicReducer__WEBPACK_IMPORTED_MODULE_2__["default"])(_js_desktop_pages_index__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./src/pages/index.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/brickbolt/React/bricknbolt/updated/foundation-react-ui/src/pages/index.tsx */"./src/pages/index.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),

/***/ "lodash/camelCase":
/*!***********************************!*\
  !*** external "lodash/camelCase" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/camelCase");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map