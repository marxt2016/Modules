/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/calcDatesDiff.js":
/*!*****************************!*\
  !*** ./js/calcDatesDiff.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var https_cdn_jsdelivr_net_npm_luxon_2_0_2_build_global_luxon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! https://cdn.jsdelivr.net/npm/luxon@2.0.2/build/global/luxon.js */ \"https://cdn.jsdelivr.net/npm/luxon@2.0.2/build/global/luxon.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([https_cdn_jsdelivr_net_npm_luxon_2_0_2_build_global_luxon_js__WEBPACK_IMPORTED_MODULE_0__]);\nhttps_cdn_jsdelivr_net_npm_luxon_2_0_2_build_global_luxon_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(dateFromString, dateToString) {\r\n    if (dateFromString < dateToString) {\r\n        [dateFromString, dateToString] = [dateToString, dateFromString]\r\n    }\r\n\r\n    const dateFrom = https_cdn_jsdelivr_net_npm_luxon_2_0_2_build_global_luxon_js__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(dateFromString);\r\n    const dateTo = https_cdn_jsdelivr_net_npm_luxon_2_0_2_build_global_luxon_js__WEBPACK_IMPORTED_MODULE_0__.DateTime.fromISO(dateToString);\r\n\r\n    const diff = dateFrom.diff(dateTo, ['years', 'months', 'days']).toObject();\r\n    console.log(diff);\r\n    return diff\r\n}\n});\n\n//# sourceURL=webpack://lesson2/./js/calcDatesDiff.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _output_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./output.js */ \"./js/output.js\");\n/* harmony import */ var _calcDatesDiff_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calcDatesDiff.js */ \"./js/calcDatesDiff.js\");\n/* harmony import */ var _switchTabs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switchTabs.js */ \"./js/switchTabs.js\");\n/* harmony import */ var _timer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timer.js */ \"./js/timer.js\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_calcDatesDiff_js__WEBPACK_IMPORTED_MODULE_1__]);\n_calcDatesDiff_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\n\r\nconst form = document.getElementById('calcDate');\r\n\r\nform.onsubmit = function (event) {\r\n    event.preventDefault();\r\n    const formData = new FormData(event.target);\r\n    const dateFrom = formData.get('dateFrom');\r\n    const dateTo = formData.get('dateTo');\r\n\r\n    if (!dateFrom || !dateTo) {\r\n        (0,_output_js__WEBPACK_IMPORTED_MODULE_0__.printError)(\"Введите дату\");\r\n        return\r\n    }\r\n    const datesDiff = (0,_calcDatesDiff_js__WEBPACK_IMPORTED_MODULE_1__.default)(dateFrom, dateTo);\r\n\r\n    (0,_output_js__WEBPACK_IMPORTED_MODULE_0__.printResult)(datesDiff);\r\n}\r\n\r\nconst tablink = document.getElementsByClassName(\"tablink\");\r\nfor (let i = 0; i < tablink.length; i++) {\r\n    tablink[i].onclick = function (event) {\r\n        (0,_output_js__WEBPACK_IMPORTED_MODULE_0__.deleteError)();\r\n        (0,_switchTabs_js__WEBPACK_IMPORTED_MODULE_2__.openTab)(event, tablink[i].innerHTML);\r\n    }\r\n}\r\n\r\n\r\nconst startButton = document.getElementById('start');\r\nconst stopButton = document.getElementById('stop');\r\nconst resetButton = document.getElementById('reset');\r\n\r\nstartButton.onclick = _timer_js__WEBPACK_IMPORTED_MODULE_3__.start;\r\n\r\nstopButton.onclick = _timer_js__WEBPACK_IMPORTED_MODULE_3__.stop;\r\n\r\nresetButton.onclick = _timer_js__WEBPACK_IMPORTED_MODULE_3__.reset;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n});\n\n//# sourceURL=webpack://lesson2/./js/main.js?");

/***/ }),

/***/ "./js/output.js":
/*!**********************!*\
  !*** ./js/output.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printError\": () => (/* binding */ printError),\n/* harmony export */   \"deleteError\": () => (/* binding */ deleteError),\n/* harmony export */   \"printResult\": () => (/* binding */ printResult)\n/* harmony export */ });\nconst paragraph = document.getElementById('output');\r\n\r\nfunction printError(errorText) {\r\n    paragraph.innerHTML = errorText;\r\n\r\n}\r\n\r\nfunction deleteError() {\r\n    paragraph.innerHTML = \"\";\r\n\r\n}\r\n\r\nconst printResult = ({ years, months, days }) => {\r\n    paragraph.innerHTML = `\r\n        год: ${years}\r\n        месяц: ${months}\r\n        день: ${days}\r\n    `\r\n}\r\n\n\n//# sourceURL=webpack://lesson2/./js/output.js?");

/***/ }),

/***/ "./js/switchTabs.js":
/*!**************************!*\
  !*** ./js/switchTabs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openTab\": () => (/* binding */ openTab)\n/* harmony export */ });\nfunction openTab(event, tabName) {\r\n    // Declare all variables\r\n    let tabcontent, tablink;\r\n\r\n    // Get all elements with class=\"tabcontent\" and hide them\r\n    tabcontent = document.getElementsByClassName(\"tabcontent\");\r\n    for (let i = 0; i < tabcontent.length; i++) {\r\n        tabcontent[i].style.display = \"none\";\r\n    }\r\n\r\n    // Get all elements with class=\"tablinks\" and remove the class \"active\"\r\n    tablink = document.getElementsByClassName(\"tablink\");\r\n    for (let i = 0; i < tablink.length; i++) {\r\n        tablink[i].className = tablink[i].className.replace(\" active\", \"\");\r\n    }\r\n\r\n    // Show the current tab, and add an \"active\" class to the button that opened the tab\r\n    document.getElementById(tabName).style.display = \"block\";\r\n    event.currentTarget.className += \" active\";\r\n}\n\n//# sourceURL=webpack://lesson2/./js/switchTabs.js?");

/***/ }),

/***/ "./js/timer.js":
/*!*********************!*\
  !*** ./js/timer.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"start\": () => (/* binding */ start),\n/* harmony export */   \"stop\": () => (/* binding */ stop),\n/* harmony export */   \"reset\": () => (/* binding */ reset)\n/* harmony export */ });\n/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! howler */ \"./node_modules/howler/dist/howler.js\");\n/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _output_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./output.js */ \"./js/output.js\");\n/* harmony import */ var _audio_sound_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../audio/sound.mp3 */ \"./audio/sound.mp3\");\n\r\n\r\n\r\nlet userInput = document.getElementById('input');\r\nlet seconds = document.getElementById('second');\r\nlet minutes = document.getElementById('minute');\r\nlet totalSeconds = 0;\r\nlet countdown = null;\r\n\r\n\r\nconst sound = new howler__WEBPACK_IMPORTED_MODULE_0__.Howl({\r\n    src: ['./audio/sound.mp3'],\r\n    volume: 0.5\r\n});\r\n\r\nfunction start() {\r\n\r\n    if (userInput.value > 0) {\r\n        (0,_output_js__WEBPACK_IMPORTED_MODULE_1__.deleteError)();\r\n        showInput(userInput.value);\r\n        totalSeconds = +userInput.value;\r\n        countdown = setInterval(timer, 1000);\r\n\r\n    }\r\n    else {\r\n        (0,_output_js__WEBPACK_IMPORTED_MODULE_1__.printError)(\"Введите число\");\r\n    }\r\n};\r\n\r\nfunction stop() {\r\n    clearInterval(countdown);\r\n    sound.stop();\r\n};\r\n\r\nfunction reset() {\r\n    clearInterval(countdown);\r\n    showInput(0);\r\n    userInput.value = 0;\r\n};\r\n\r\n\r\nfunction timer() {\r\n    totalSeconds--;\r\n    if (totalSeconds > 0) {\r\n        showInput(totalSeconds);\r\n        if (totalSeconds < 10 && !sound.playing()) {\r\n            sound.play();\r\n        }\r\n    } else {\r\n        showInput(0);\r\n        clearInterval(countdown);\r\n        sound.stop();\r\n    }\r\n}\r\n\r\n\r\nfunction format(val) {\r\n    let valString = val + '';\r\n    if (valString.length < 2) {\r\n        return \"0\" + valString;\r\n    } else {\r\n        return valString;\r\n    }\r\n}\r\n\r\nfunction showInput(value) {\r\n    seconds.innerHTML = format(Math.floor(+(value % 60)));\r\n    minutes.innerHTML = format(Math.floor(+(value / 60)));\r\n}\n\n//# sourceURL=webpack://lesson2/./js/timer.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".tab {\\r\\n    overflow: hidden;\\r\\n    border: 1px solid #ccc;\\r\\n    background-color: #f1f1f1;\\r\\n}\\r\\n\\r\\n/* Style the buttons that are used to open the tab content */\\r\\n.tab button {\\r\\n    float: left;\\r\\n    border: none;\\r\\n    outline: none;\\r\\n    cursor: pointer;\\r\\n    padding: 14px 16px;\\r\\n    transition: 0.3s;\\r\\n}\\r\\n\\r\\n/* Change background color of buttons on hover */\\r\\n.tab button:hover {\\r\\n    background-color: #ddd;\\r\\n}\\r\\n\\r\\n/* Create an active/current tablink class */\\r\\n.tab button.active {\\r\\n    background-color: #ccc;\\r\\n}\\r\\n\\r\\n/* Style the tab content */\\r\\n.tabcontent {\\r\\n    display: none;\\r\\n    padding: 6px 12px;\\r\\n    border: 1px solid #ccc;\\r\\n    border-top: none;\\r\\n}\\r\\n.default {\\r\\n    display: block;\\r\\n}\\r\\n.timerbtn,\\r\\n.timerresult {\\r\\n    padding-top: 20px;\\r\\n}\\r\\n.input {\\r\\n    display: flex;\\r\\n    flex-wrap: wrap;\\r\\n    align-content: flex-start;\\r\\n}\\r\\n.field {\\r\\n    outline: none;\\r\\n    border-radius: 5px;\\r\\n    margin: 5px;\\r\\n    padding: 2px;\\r\\n    border: solid 1px #ccc;\\r\\n    width: 40px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://lesson2/./css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./audio/sound.mp3":
/*!*************************!*\
  !*** ./audio/sound.mp3 ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/sound.mp3\");\n\n//# sourceURL=webpack://lesson2/./audio/sound.mp3?");

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://lesson2/./css/style.css?");

/***/ }),

/***/ "https://cdn.jsdelivr.net/npm/luxon@2.0.2/build/global/luxon.js":
/*!*********************************************************************************!*\
  !*** external "https://cdn.jsdelivr.net/npm/luxon@2.0.2/build/global/luxon.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = import("https://cdn.jsdelivr.net/npm/luxon@2.0.2/build/global/luxon.js");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 												obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep.catch(reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 								ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 								ret[webpackExports] = dep;
/******/ 								return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise.catch(rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				if(!deps) return outerResolve();
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn, result;
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(result = currentDeps.map((d) => (d[webpackExports]))));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : result;
/******/ 			}).then(outerResolve, reject);
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklesson2"] = self["webpackChunklesson2"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_howler_dist_howler_js-node_m-df9da1"], () => (__webpack_require__("./js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;