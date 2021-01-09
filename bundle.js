/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/bg.jpg":
/*!***********************!*\
  !*** ./assets/bg.jpg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/bg.jpg\");\n\n//# sourceURL=webpack:///./assets/bg.jpg?");

/***/ }),

/***/ "./assets/sticker.png":
/*!****************************!*\
  !*** ./assets/sticker.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/sticker.png\");\n\n//# sourceURL=webpack:///./assets/sticker.png?");

/***/ }),

/***/ "./assets/symbols.png":
/*!****************************!*\
  !*** ./assets/symbols.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/symbols.png\");\n\n//# sourceURL=webpack:///./assets/symbols.png?");

/***/ }),

/***/ "./fonts/BalsamiqSans-Bold.ttf":
/*!*************************************!*\
  !*** ./fonts/BalsamiqSans-Bold.ttf ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/BalsamiqSans-Bold.ttf\");\n\n//# sourceURL=webpack:///./fonts/BalsamiqSans-Bold.ttf?");

/***/ }),

/***/ "./fonts/BalsamiqSans-Regular.ttf":
/*!****************************************!*\
  !*** ./fonts/BalsamiqSans-Regular.ttf ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/BalsamiqSans-Regular.ttf\");\n\n//# sourceURL=webpack:///./fonts/BalsamiqSans-Regular.ttf?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fonts_BalsamiqSans_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/BalsamiqSans-Regular.ttf */ \"./fonts/BalsamiqSans-Regular.ttf\");\n/* harmony import */ var _fonts_BalsamiqSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts/BalsamiqSans-Bold.ttf */ \"./fonts/BalsamiqSans-Bold.ttf\");\n/* harmony import */ var _assets_sticker_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/sticker.png */ \"./assets/sticker.png\");\n/* harmony import */ var _assets_symbols_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/symbols.png */ \"./assets/symbols.png\");\n/* harmony import */ var _assets_bg_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/bg.jpg */ \"./assets/bg.jpg\");\n// Imports\n\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_BalsamiqSans_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_BalsamiqSans_Bold_ttf__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_sticker_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_symbols_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_bg_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@font-face {\\r\\n  font-family: \\\"Balsamiq Sans\\\";\\r\\n  font-style: normal;\\r\\n  font-weight: normal;\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: \\\"Balsamiq Sans\\\";\\r\\n  font-style: normal;\\r\\n  font-weight: bold;\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: black;\\r\\n  color: #ccccb3;\\r\\n  font-family: \\\"Balsamiq Sans\\\", serif;\\r\\n  letter-spacing: 0.01em;\\r\\n  font-size: 24px;\\r\\n}\\r\\n\\r\\np {\\r\\n  text-align: left;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\np.sticker {\\r\\n  position: relative;\\r\\n  z-index: 0;\\r\\n  width: 200px;\\r\\n  height: 200px;\\r\\n  margin: 0 auto;\\r\\n  margin-bottom: 20px;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n}\\r\\n\\r\\np[class^=\\\"image_\\\"]:after {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  z-index: 1;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\r\\n  background-repeat: no-repeat;\\r\\n}\\r\\n\\r\\n.image_card:after {\\r\\n  background-position: -200px 0;\\r\\n}\\r\\n\\r\\n.image_eye:after {\\r\\n  background-position: -400px 0;\\r\\n}\\r\\n\\r\\n.image_eye2:after {\\r\\n  background-position: -600px 0;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  -webkit-user-drag: none;\\r\\n  -khtml-user-drag: none;\\r\\n  -moz-user-drag: none;\\r\\n  -o-user-drag: none;\\r\\n}\\r\\n\\r\\n#container {\\r\\n  -webkit-user-select: none;\\r\\n  -khtml-user-select: none;\\r\\n  -moz-user-select: none;\\r\\n  -o-user-select: none;\\r\\n  user-select: none;\\r\\n}\\r\\n\\r\\n#container {\\r\\n  overflow: auto;\\r\\n  position: relative;\\r\\n  width: 800px;\\r\\n  height: 100vh;\\r\\n  margin: 0 auto;\\r\\n  background-color: #333;\\r\\n  background-repeat: repeat-y;\\r\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\r\\n  background-attachment: local;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#scene {\\r\\n  height: 100%;\\r\\n  padding: 40px;\\r\\n  padding: 80px 0;\\r\\n  text-shadow: 0 0 2px black;\\r\\n}\\r\\n\\r\\n#container.alert {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#alert {\\r\\n  position: absolute;\\r\\n  top: 50%;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 80px;\\r\\n  line-height: 80px;\\r\\n  margin-top: -40px;\\r\\n  background-color: #eee;\\r\\n  text-align: center;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\nspan {\\r\\n  display: inline-block;\\r\\n  position: relative;\\r\\n  z-index: 0;\\r\\n  margin: 0 -4px;\\r\\n  padding: 0 4px;\\r\\n  white-space: nowrap;\\r\\n  color: #ffff66;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nspan:hover,\\r\\nspan:active {\\r\\n  background-color: black;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n@keyframes Shake {\\r\\n  0% {\\r\\n    transform: rotate(4deg);\\r\\n  }\\r\\n  25% {\\r\\n    transform: rotate(-2deg);\\r\\n  }\\r\\n  50% {\\r\\n    transform: rotate(2deg);\\r\\n  }\\r\\n  100% {\\r\\n    transform: rotate(-4deg);\\r\\n  }\\r\\n}\\r\\n\\r\\nspan:hover:after {\\r\\n  content: \\\"\\\";\\r\\n  position: absolute;\\r\\n  z-index: -1;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background-color: black;\\r\\n  animation: Shake 200ms steps(4) infinite;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 800px) {\\r\\n  #container {\\r\\n    width: 100%;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/data/scenes.json":
/*!******************************!*\
  !*** ./src/data/scenes.json ***!
  \******************************/
/*! exports provided: intro, intro2, intro3, intro4, start, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"intro\\\":[{\\\"image\\\":\\\"face\\\"},\\\"Мне знакомо это лицо. Я помню его имя. Или это её имя?\\\",\\\"Оно вертится на кончике языка, но я не могу разжать губы, чтобы сказать.\\\",{\\\"text\\\":\\\"Падаю на колени, но не чувствую боли.\\\",\\\"condition\\\":[\\\"dream_where\\\",false]},{\\\"text\\\":\\\"Вокруг всё как будто в тумане. Где я?\\\",\\\"highlight\\\":\\\"Где я?\\\",\\\"condition\\\":[\\\"dream_where\\\",false],\\\"change\\\":[\\\"dream_where\\\",true]},{\\\"text\\\":\\\"Я смотрю по сторонам, и вижу перед собой город. Каждый день я ходил по этой улице. Теперь она другая.\\\",\\\"condition\\\":[\\\"dream_where\\\",true]},{\\\"text\\\":\\\"Под ногами валяется пропуск. Я не заметил, как выронил его.\\\",\\\"item\\\":\\\"card\\\",\\\"highlight\\\":\\\"пропуск.\\\",\\\"condition\\\":[\\\"dream_where\\\",true],\\\"move\\\":\\\"intro2\\\"}],\\\"intro2\\\":[{\\\"image\\\":\\\"card\\\"},\\\"Этот кусок пластика почти ничего не весит.\\\",{\\\"text\\\":\\\"Осмотреть пропуск.\\\",\\\"highlight\\\":\\\"Осмотреть пропуск.\\\",\\\"change\\\":[\\\"card_seen\\\",true],\\\"condition\\\":[\\\"card_seen\\\",false]},{\\\"text\\\":\\\"Я не узнаю себя на фотографии, не могу прочитать своё имя. Буквы расплываются и стекают на мои пальцы.\\\",\\\"condition\\\":[\\\"card_seen\\\",true]},{\\\"text\\\":\\\"Я опаздываю. Мне надо идти.\\\",\\\"highlight\\\":\\\"надо идти.\\\",\\\"condition\\\":[[\\\"card_seen\\\",true],[\\\"dream_home\\\",false]],\\\"change\\\":[\\\"dream_home\\\",true]},{\\\"text\\\":\\\"Я иду на работу, как ходил много лет. Захожу в подъед, поднимаюсь на свой этаж.\\\",\\\"condition\\\":[\\\"dream_home\\\",true]},{\\\"text\\\":\\\"Я у себя дома. Здесь уже кто-то есть.\\\",\\\"condition\\\":[\\\"dream_home\\\",true]},{\\\"text\\\":\\\"Кто ты?\\\",\\\"highlight\\\":\\\"Кто ты?\\\",\\\"condition\\\":[\\\"dream_home\\\",true],\\\"move\\\":\\\"intro3\\\"}],\\\"intro3\\\":[{\\\"image\\\":\\\"eye\\\"},\\\"Мой собеседник молчит.\\\",\\\"Я помню эти глаза. Мне стыдно в них смотреть.\\\",{\\\"text\\\":\\\"Можно отвернуться.\\\",\\\"highlight\\\":\\\"Можно отвернуться.\\\",\\\"condition\\\":[\\\"dream_turn\\\",false],\\\"change\\\":[\\\"dream_turn\\\",true]},{\\\"condition\\\":[\\\"dream_turn\\\",true],\\\"text\\\":\\\"Я поворачиваю голову и вижу очертания комнаты. Жмурюсь от яркого света. Поворачиваюсь обратно, и снова ловлю чужой взгляд.\\\"},{\\\"condition\\\":[\\\"dream_turn\\\",true],\\\"text\\\":\\\"От лица остался один глаз. Он продолжает смотреть на меня.\\\"},{\\\"text\\\":\\\"Можно смотреть на него в ответ.\\\",\\\"highlight\\\":\\\"смотреть на него\\\",\\\"condition\\\":[\\\"dream_turn\\\",true],\\\"move\\\":\\\"intro4\\\"}],\\\"intro4\\\":[{\\\"image\\\":\\\"eye\\\",\\\"condition\\\":[\\\"dream_blink\\\",false]},{\\\"image\\\":\\\"eye2\\\",\\\"condition\\\":[\\\"dream_blink\\\",true]},\\\"Тёплый ламповый свет заливает всю квартиру: потолок в странных пятнах, пожелтевшие обои, почерневший паркет.\\\",{\\\"text\\\":\\\"Глаз по-прежнему тут. Кажется, я всё ещё сплю.\\\",\\\"condition\\\":[\\\"dream_blink\\\",false]},{\\\"text\\\":\\\"На входной двери кровью нарисован причудливый глаз, прямо вокруг глазка.\\\",\\\"condition\\\":[\\\"dream_blink\\\",true]},{\\\"text\\\":\\\"Капли крови остались и на придверном коврике.\\\",\\\"condition\\\":[\\\"dream_blink\\\",true]},{\\\"text\\\":\\\"Надо проморгаться.\\\",\\\"highlight\\\":\\\"Надо проморгаться.\\\",\\\"condition\\\":[\\\"dream_blink\\\",false],\\\"change\\\":[\\\"dream_blink\\\",true]},{\\\"text\\\":\\\"Пора вставать.\\\",\\\"highlight\\\":\\\"Пора вставать.\\\",\\\"condition\\\":[[\\\"dream_blink\\\",true],[\\\"dream_stand\\\",false]],\\\"change\\\":[\\\"dream_stand\\\",true]},{\\\"text\\\":\\\"Ноги подгибаются, едва коснувшись пола.\\\",\\\"condition\\\":[\\\"dream_stand\\\",true]},{\\\"text\\\":\\\"Можно попытаться ещё раз.\\\",\\\"highlight\\\":\\\"попытаться ещё раз.\\\",\\\"condition\\\":[\\\"dream_stand\\\",true],\\\"move\\\":\\\"start\\\"}],\\\"start\\\":[{\\\"image\\\":\\\"eye2\\\"},\\\"Тёплый ламповый свет заливает всю квартиру: потолок в странных пятнах, пожелтевшие обои, почерневший паркет.\\\",\\\"На входной двери кровью нарисован причудливый глаз, прямо вокруг глазка.\\\",\\\"Капли крови остались и на придверном коврике.\\\",\\\"Дверь в ванную приоткрыта, на ручке тоже видна кровь.\\\",\\\"Проводка ветвится по стене к выключателю.\\\",\\\"Тут всего одна комната, но шкаф отделяет подобие прихожей от подобия кабинета.\\\"]}\");\n\n//# sourceURL=webpack:///./src/data/scenes.json?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\r\nvar scene_1 = __webpack_require__(/*! ./scene */ \"./src/scene.ts\");\r\nfunction main() {\r\n    var scene = scene_1.default.getInstance();\r\n    scene.init();\r\n    scene.render(\"intro\");\r\n}\r\nmain();\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/scene.ts":
/*!**********************!*\
  !*** ./src/scene.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\r\nvar source = __webpack_require__(/*! ./data/scenes.json */ \"./src/data/scenes.json\");\r\nvar Scene = /** @class */ (function () {\r\n    function Scene() {\r\n        var _this = this;\r\n        this.container = utils_1.createElement(\"container\");\r\n        this.scene = utils_1.createElement(\"scene\");\r\n        this.target = null;\r\n        this.inventory = [];\r\n        this.condition = {};\r\n        this.handleClick = function (_a) {\r\n            var target = _a.target;\r\n            if (target instanceof HTMLElement && target.tagName === \"SPAN\") {\r\n                var config = source[_this.target];\r\n                var text_1 = target.innerText;\r\n                var action = config.find(function (item) {\r\n                    return typeof item === \"string\" ? false : item.highlight === text_1;\r\n                });\r\n                if (action != null) {\r\n                    _this.handleAction(action);\r\n                }\r\n            }\r\n        };\r\n        this.renderLine = function (previous, config) {\r\n            if (typeof config === \"string\") {\r\n                return previous + \"<p>\" + config + \"</p>\";\r\n            }\r\n            var text = config.text, image = config.image, condition = config.condition, highlight = config.highlight;\r\n            if (!_this.checkCondition(condition)) {\r\n                return previous;\r\n            }\r\n            if (image != null) {\r\n                return previous + \"<p class=\\\"image_\" + image + \" sticker \\\"></p>\";\r\n            }\r\n            if (highlight != null) {\r\n                return previous + \"<p>\" + text.replace(highlight, \"<span>\" + highlight + \"</span>\") + \"</p>\";\r\n            }\r\n            return previous + \"<p>\" + text + \"</p>\";\r\n        };\r\n        if (Scene.instance != null) {\r\n            throw new TypeError(\"Can't instantiate a singleton.\");\r\n        }\r\n    }\r\n    Scene.getInstance = function () {\r\n        return this.instance;\r\n    };\r\n    Scene.prototype.init = function () {\r\n        document.body.appendChild(this.container);\r\n        this.container.appendChild(this.scene);\r\n    };\r\n    Scene.prototype.setCondition = function (_a) {\r\n        var name = _a[0], value = _a[1];\r\n        this.condition[name] = value;\r\n    };\r\n    Scene.prototype.addItemToInventory = function (name, title) {\r\n        this.inventory.push({\r\n            name: name,\r\n            title: title,\r\n        });\r\n    };\r\n    Scene.prototype.handleAction = function (_a) {\r\n        var change = _a.change, item = _a.item, highlight = _a.highlight, move = _a.move;\r\n        if (change != null) {\r\n            this.setCondition(change);\r\n        }\r\n        if (item != null) {\r\n            this.addItemToInventory(item, highlight);\r\n            this.showInventoryAlert(highlight, move);\r\n            return;\r\n        }\r\n        this.render(move != null ? move : this.target);\r\n    };\r\n    Scene.prototype.showInventoryAlert = function (title, target) {\r\n        var _this = this;\r\n        var alert = utils_1.createElement(\"alert\");\r\n        alert.innerHTML = \"\\u0422\\u0435\\u043F\\u0435\\u0440\\u044C \\u0443 \\u0442\\u0435\\u0431\\u044F \\u0435\\u0441\\u0442\\u044C \" + title;\r\n        var handleClick = function () {\r\n            _this.container.removeEventListener(\"click\", handleClick);\r\n            _this.container.classList.remove(\"alert\");\r\n            alert.parentNode.removeChild(alert);\r\n            _this.render(target != null ? target : _this.target);\r\n            _this.container.appendChild(_this.scene);\r\n        };\r\n        this.container.classList.add(\"alert\");\r\n        this.scene.parentNode.removeChild(this.scene);\r\n        this.container.addEventListener(\"click\", handleClick);\r\n        this.container.appendChild(alert);\r\n    };\r\n    Scene.prototype.checkCondition = function (condition) {\r\n        var _this = this;\r\n        if (condition != null) {\r\n            if (Array.isArray(condition[0])) {\r\n                var array = condition;\r\n                return array.every(function (value) { return _this.checkCondition(value); });\r\n            }\r\n            var name_1 = condition[0], value = condition[1];\r\n            var target = this.condition[name_1];\r\n            if (target != null) {\r\n                return target === value;\r\n            }\r\n            return !value;\r\n        }\r\n        return true;\r\n    };\r\n    Scene.prototype.render = function (target) {\r\n        this.target = target;\r\n        var config = source[target];\r\n        var html = config.reduce(this.renderLine, \"\");\r\n        this.scene.innerHTML = html;\r\n        this.container.addEventListener(\"click\", this.handleClick);\r\n    };\r\n    Scene.instance = new Scene();\r\n    return Scene;\r\n}());\r\nexports.default = Scene;\r\n\n\n//# sourceURL=webpack:///./src/scene.ts?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.createElement = void 0;\r\nfunction createElement(id, tag) {\r\n    if (tag === void 0) { tag = \"div\"; }\r\n    var element = document.createElement(tag);\r\n    element.id = id;\r\n    return element;\r\n}\r\nexports.createElement = createElement;\r\n\n\n//# sourceURL=webpack:///./src/utils.ts?");

/***/ })

/******/ });