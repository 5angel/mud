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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: \\\"Tahoma\\\";\\r\\n  font-size: 24px;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  -webkit-user-drag: none;\\r\\n  -khtml-user-drag: none;\\r\\n  -moz-user-drag: none;\\r\\n  -o-user-drag: none;\\r\\n}\\r\\n\\r\\n#container {\\r\\n  -webkit-user-select: none;\\r\\n  -khtml-user-select: none;\\r\\n  -moz-user-select: none;\\r\\n  -o-user-select: none;\\r\\n  user-select: none;\\r\\n}\\r\\n\\r\\n#container {\\r\\n  width: 800px;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n#container.alert {\\r\\n  background-color: greenyellow;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n#container.alert:hover,\\r\\n#container.alert:active {\\r\\n  background-color: black;\\r\\n  color: greenyellow;\\r\\n}\\r\\n\\r\\nspan {\\r\\n  white-space: nowrap;\\r\\n  background-color: yellow;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nspan:hover,\\r\\nspan:active {\\r\\n  background-color: black;\\r\\n  color: yellow;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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
/*! exports provided: room, box, photo, door, bathroom, washer, closed, opened, end, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"room\\\":[\\\"Уличный фонарь освещает мою комнату. Пожелтевшие обои, почерневший паркет, потолок в странных пятнах.\\\",{\\\"text\\\":\\\"Дверь в ванную приоткрыта, на ручке видна кровь.\\\",\\\"highlight\\\":\\\"Дверь в ванную\\\",\\\"move\\\":\\\"bathroom\\\"},{\\\"text\\\":\\\"Похоже, что этой же кровью был нарисован странный глаз на входной двери, прямо вокруг глазка. Капли крови остались и на придверном коврике.\\\",\\\"highlight\\\":\\\"входной двери\\\",\\\"move\\\":\\\"door\\\"},\\\"Рядом приставлен покосившийся шкаф.\\\",{\\\"text\\\":\\\"На нём лежит картонная коробка, почти под потолком.\\\",\\\"highlight\\\":\\\"картонная коробка\\\",\\\"move\\\":\\\"box\\\"},\\\"В углу зажат столик со старым комплюктером. Возле него опрокинут стул без ноги.\\\",{\\\"text\\\":\\\"Оторванная ножка от стула лежит посреди комнаты.\\\",\\\"name\\\":\\\"leg\\\",\\\"condition\\\":[\\\"leg\\\",false],\\\"highlight\\\":\\\"ножка от стула\\\",\\\"item\\\":true,\\\"change\\\":true},\\\"Свободную стену занимает огромный персидский ковёр.\\\"],\\\"box\\\":[{\\\"text\\\":\\\"У меня получилось дотянутся до коробки. Наверное, её надо открыть.\\\",\\\"name\\\":\\\"box_opened\\\",\\\"highlight\\\":\\\"открыть\\\",\\\"condition\\\":[\\\"box_opened\\\",false],\\\"change\\\":true},{\\\"text\\\":\\\"В коробке лежат неиспользованные ручки, черный маркер, скотч, упаковкa стикеров и старая фотография.\\\",\\\"condition\\\":[\\\"box_opened\\\",true],\\\"highlight\\\":\\\"старая фотография\\\",\\\"move\\\":\\\"photo\\\"},{\\\"text\\\":\\\"Можно вернуться в комнату.\\\",\\\"highlight\\\":\\\"в комнату\\\",\\\"move\\\":\\\"room\\\"}],\\\"photo\\\":[\\\"На фотографии группа людей в баре, включая меня. Лица у всех замазаны черным маркером. Кроме моего. Когда была сделана эта фотография?\\\",\\\"Я не помню их лица и не помню их имена. Я улыбаюсь на фотографии. Тогда почему мне так грустно смотреть на неё?\\\",{\\\"text\\\":\\\"Можно вернуться в комнату.\\\",\\\"highlight\\\":\\\"в комнату\\\",\\\"move\\\":\\\"room\\\"}],\\\"door\\\":[\\\"Входная дверь заперта. \\\",{\\\"text\\\":\\\"Нужен ключ. Обычно я ношу ключи в кармане штанов. Теперь бы вспомнить, где я оставил штаны.\\\",\\\"condition\\\":[\\\"keys\\\",false]},{\\\"text\\\":\\\"Можно открыть ключами.\\\",\\\"condition\\\":[\\\"keys\\\",true],\\\"highlight\\\":\\\"открыть ключами\\\",\\\"move\\\":\\\"end\\\"},{\\\"text\\\":\\\"Можно вернуться в комнату.\\\",\\\"highlight\\\":\\\"в комнату\\\",\\\"move\\\":\\\"room\\\"}],\\\"bathroom\\\":[\\\"В ванной комнате сыро и холодно. На грязном зеркале можно с трудом опознать своё отражение. Вся раковина заляпана кровью.\\\",{\\\"text\\\":\\\"В углу стоит старая стиральная машинка.\\\",\\\"highlight\\\":\\\"стиральная машинка\\\",\\\"move\\\":\\\"washer\\\"},{\\\"text\\\":\\\"Можно вернуться в комнату.\\\",\\\"highlight\\\":\\\"в комнату\\\",\\\"move\\\":\\\"room\\\"}],\\\"washer\\\":[\\\"Это старая стиральная машинка. Внутри барабана скомканы грязные штаны, все в крови.\\\",{\\\"text\\\":\\\"У дверцы сломан замок, она свободно болтается.\\\",\\\"condition\\\":[\\\"keys\\\",true]},{\\\"text\\\":\\\"Можно попробовать открыть дверцу машинки.\\\",\\\"highlight\\\":\\\"открыть\\\",\\\"condition\\\":[\\\"keys\\\",false],\\\"move\\\":\\\"closed\\\"},{\\\"text\\\":\\\"Можно вернуться к раковине.\\\",\\\"highlight\\\":\\\"к раковине\\\",\\\"move\\\":\\\"bathroom\\\"}],\\\"closed\\\":[{\\\"text\\\":\\\"Заклинило. Руками не открыть.\\\",\\\"condition\\\":[\\\"keys\\\",false]},{\\\"text\\\":\\\"Может, сломать замок ножкой от стула?\\\",\\\"highlight\\\":\\\"ножкой от стула\\\",\\\"name\\\":\\\"leg\\\",\\\"condition\\\":[[\\\"leg\\\",true],[\\\"keys\\\",false]],\\\"move\\\":\\\"opened\\\"},{\\\"text\\\":\\\"Можно вернуться к раковине.\\\",\\\"highlight\\\":\\\"к раковине\\\",\\\"move\\\":\\\"bathroom\\\"}],\\\"opened\\\":[\\\"Со второго раза получилось выломать замок. Теперь придётся стирать бельё руками.\\\",\\\"Зато я нашёл штаны. Посмотрим, что там в карманах.\\\",{\\\"text\\\":\\\"Ага, вот и ключи от входной двери!\\\",\\\"name\\\":\\\"keys\\\",\\\"highlight\\\":\\\"ключи\\\",\\\"item\\\":true,\\\"change\\\":true,\\\"move\\\":\\\"bathroom\\\"}],\\\"end\\\":[\\\"You Died.\\\"]}\");\n\n//# sourceURL=webpack:///./src/data/scenes.json?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\r\nvar scene_1 = __webpack_require__(/*! ./scene */ \"./src/scene.ts\");\r\nfunction main() {\r\n    var scene = scene_1.default.getInstance();\r\n    scene.init();\r\n    scene.render();\r\n}\r\nmain();\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/scene.ts":
/*!**********************!*\
  !*** ./src/scene.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\r\nvar source = __webpack_require__(/*! ./data/scenes.json */ \"./src/data/scenes.json\");\r\nvar Scene = /** @class */ (function () {\r\n    function Scene() {\r\n        var _this = this;\r\n        this.container = utils_1.createElement(\"container\");\r\n        this.config = null;\r\n        this.inventory = [];\r\n        this.condition = {};\r\n        this.handleClick = function (_a) {\r\n            var target = _a.target;\r\n            if (target instanceof HTMLElement && target.tagName === \"SPAN\") {\r\n                var text_1 = target.innerText;\r\n                var action = _this.config.find(function (item) {\r\n                    return typeof item === \"string\" ? false : item.highlight === text_1;\r\n                });\r\n                if (action != null) {\r\n                    _this.handleAction(action);\r\n                }\r\n            }\r\n        };\r\n        if (Scene.instance != null) {\r\n            throw new TypeError(\"Can't instantiate a singleton.\");\r\n        }\r\n    }\r\n    Scene.getInstance = function () {\r\n        return this.instance;\r\n    };\r\n    Scene.prototype.init = function () {\r\n        document.body.append(this.container);\r\n    };\r\n    Scene.prototype.handleAction = function (_a) {\r\n        var change = _a.change, item = _a.item, name = _a.name, title = _a.highlight, move = _a.move;\r\n        if (change != null) {\r\n            this.condition[name] = change;\r\n        }\r\n        if (item) {\r\n            this.inventory.push({\r\n                name: name,\r\n                title: title,\r\n            });\r\n            this.showInventoryAlert(title, move);\r\n            return;\r\n        }\r\n        if (move != null) {\r\n            this.render(source[move]);\r\n            return;\r\n        }\r\n        this.render();\r\n    };\r\n    Scene.prototype.showInventoryAlert = function (title, target) {\r\n        var _this = this;\r\n        var handleClick = function () {\r\n            _this.container.removeEventListener(\"click\", handleClick);\r\n            _this.container.classList.remove(\"alert\");\r\n            if (target != null) {\r\n                _this.render(source[target]);\r\n                return;\r\n            }\r\n            _this.render();\r\n        };\r\n        this.container.innerHTML = \"\\u0422\\u0435\\u043F\\u0435\\u0440\\u044C \\u0443 \\u0442\\u0435\\u0431\\u044F \\u0435\\u0441\\u0442\\u044C \\u00AB\" + title + \"\\u00BB\";\r\n        this.container.classList.add(\"alert\");\r\n        this.container.addEventListener(\"click\", handleClick);\r\n    };\r\n    Scene.prototype.checkCondition = function (condition) {\r\n        var _this = this;\r\n        if (Array.isArray(condition[0])) {\r\n            var array = condition;\r\n            return array.every(function (value) { return _this.checkCondition(value); });\r\n        }\r\n        if (typeof condition[0] === \"string\") {\r\n            var name_1 = condition[0], value = condition[1];\r\n            var target = this.condition[name_1];\r\n            if (target != null) {\r\n                return target === value;\r\n            }\r\n            return !value;\r\n        }\r\n        throw new TypeError(\"invalid condition\");\r\n    };\r\n    Scene.prototype.render = function (config) {\r\n        var _this = this;\r\n        if (config != null) {\r\n            this.config = config;\r\n        }\r\n        if (this.config == null) {\r\n            this.config = source[\"room\"];\r\n        }\r\n        var html = this.config.reduce(function (result, value) {\r\n            if (typeof value === \"string\") {\r\n                return result + \"<p>\" + value + \"</p>\";\r\n            }\r\n            var condition = value.condition, name = value.name, text = value.text, highlight = value.highlight;\r\n            // Условие не выполнено\r\n            if (condition != null && !_this.checkCondition(condition)) {\r\n                return result;\r\n            }\r\n            if (highlight != null) {\r\n                return result + \"<p>\" + text.replace(highlight, \"<span>\" + highlight + \"</span>\") + \"</p>\";\r\n            }\r\n            return result + \"<p>\" + text + \"</p>\";\r\n        }, \"\");\r\n        this.container.innerHTML = html;\r\n        this.container.addEventListener(\"click\", this.handleClick);\r\n    };\r\n    Scene.instance = new Scene();\r\n    return Scene;\r\n}());\r\nexports.default = Scene;\r\n\n\n//# sourceURL=webpack:///./src/scene.ts?");

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