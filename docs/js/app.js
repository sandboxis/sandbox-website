/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _styles = __webpack_require__(/*! ../css/styles.scss */ 1);
	
	var _styles2 = _interopRequireDefault(_styles);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (document.getElementById('store')) window.location.href = 'https://sandbox-store.squarespace.com/'; // Grab styles

/***/ }),
/* 1 */
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !../../~/css-loader!../../~/sass-loader!../../~/postcss-loader!./styles.scss */ 2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ../../~/style-loader/addStyles.js */ 4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!../../node_modules/postcss-loader/index.js!./styles.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!../../node_modules/postcss-loader/index.js!./styles.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/*!*******************************************************************************!*\
  !*** ./~/css-loader!./~/sass-loader!./~/postcss-loader!./src/css/styles.scss ***!
  \*******************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 3)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto:300);", ""]);
	
	// module
	exports.push([module.id, "/* Font */\n/* Global style rules */\na {\n  color: #08b7e4;\n  text-decoration: none; }\n\n.row {\n  max-width: 100%; }\n\n.page #logo {\n  margin-bottom: 50px; }\n\nbody {\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  display: flex;\n  min-height: 100vh;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  background: #efefef; }\n\nmain {\n  flex: 1 0 auto;\n  display: flex;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-pack: center;\n  justify-content: center;\n  padding: 50px 0; }\n\n#footer {\n  text-align: center;\n  padding: 10px;\n  opacity: 0.6;\n  font-size: 13px; }\n\n/* Widespread rules */\n#logo {\n  transition: 0.3s; }\n  #logo:hover {\n    transition: 0.3s;\n    filter: drop-shadow(2px 8px 5px rgba(0, 0, 0, 0.2)); }\n\n/* Import grid system */\n/* Adapted from https://github.com/Dogfalo/materialize */\n.flow-text {\n  font-weight: 300; }\n  @media only screen and (min-width: 360px) {\n    .flow-text {\n      font-size: 1rem;\n      line-height: 1.7rem; } }\n  @media only screen and (min-width: 369.8px) {\n    .flow-text {\n      font-size: 1.002rem;\n      line-height: 1.7034rem; } }\n  @media only screen and (min-width: 379.6px) {\n    .flow-text {\n      font-size: 1.004rem;\n      line-height: 1.7068rem; } }\n  @media only screen and (min-width: 389.4px) {\n    .flow-text {\n      font-size: 1.006rem;\n      line-height: 1.7102rem; } }\n  @media only screen and (min-width: 399.2px) {\n    .flow-text {\n      font-size: 1.008rem;\n      line-height: 1.7136rem; } }\n  @media only screen and (min-width: 409px) {\n    .flow-text {\n      font-size: 1.01rem;\n      line-height: 1.717rem; } }\n  @media only screen and (min-width: 418.8px) {\n    .flow-text {\n      font-size: 1.012rem;\n      line-height: 1.7204rem; } }\n  @media only screen and (min-width: 428.6px) {\n    .flow-text {\n      font-size: 1.014rem;\n      line-height: 1.7238rem; } }\n  @media only screen and (min-width: 438.4px) {\n    .flow-text {\n      font-size: 1.016rem;\n      line-height: 1.7272rem; } }\n  @media only screen and (min-width: 448.2px) {\n    .flow-text {\n      font-size: 1.018rem;\n      line-height: 1.7306rem; } }\n  @media only screen and (min-width: 458px) {\n    .flow-text {\n      font-size: 1.02rem;\n      line-height: 1.734rem; } }\n  @media only screen and (min-width: 467.8px) {\n    .flow-text {\n      font-size: 1.022rem;\n      line-height: 1.7374rem; } }\n  @media only screen and (min-width: 477.6px) {\n    .flow-text {\n      font-size: 1.024rem;\n      line-height: 1.7408rem; } }\n  @media only screen and (min-width: 487.4px) {\n    .flow-text {\n      font-size: 1.026rem;\n      line-height: 1.7442rem; } }\n  @media only screen and (min-width: 497.2px) {\n    .flow-text {\n      font-size: 1.028rem;\n      line-height: 1.7476rem; } }\n  @media only screen and (min-width: 507px) {\n    .flow-text {\n      font-size: 1.03rem;\n      line-height: 1.751rem; } }\n  @media only screen and (min-width: 516.8px) {\n    .flow-text {\n      font-size: 1.032rem;\n      line-height: 1.7544rem; } }\n  @media only screen and (min-width: 526.6px) {\n    .flow-text {\n      font-size: 1.034rem;\n      line-height: 1.7578rem; } }\n  @media only screen and (min-width: 536.4px) {\n    .flow-text {\n      font-size: 1.036rem;\n      line-height: 1.7612rem; } }\n  @media only screen and (min-width: 546.2px) {\n    .flow-text {\n      font-size: 1.038rem;\n      line-height: 1.7646rem; } }\n  @media only screen and (min-width: 556px) {\n    .flow-text {\n      font-size: 1.04rem;\n      line-height: 1.768rem; } }\n  @media only screen and (min-width: 565.8px) {\n    .flow-text {\n      font-size: 1.042rem;\n      line-height: 1.7714rem; } }\n  @media only screen and (min-width: 575.6px) {\n    .flow-text {\n      font-size: 1.044rem;\n      line-height: 1.7748rem; } }\n  @media only screen and (min-width: 585.4px) {\n    .flow-text {\n      font-size: 1.046rem;\n      line-height: 1.7782rem; } }\n  @media only screen and (min-width: 595.2px) {\n    .flow-text {\n      font-size: 1.048rem;\n      line-height: 1.7816rem; } }\n  @media only screen and (min-width: 605px) {\n    .flow-text {\n      font-size: 1.05rem;\n      line-height: 1.785rem; } }\n  @media only screen and (min-width: 614.8px) {\n    .flow-text {\n      font-size: 1.052rem;\n      line-height: 1.7884rem; } }\n  @media only screen and (min-width: 624.6px) {\n    .flow-text {\n      font-size: 1.054rem;\n      line-height: 1.7918rem; } }\n  @media only screen and (min-width: 634.4px) {\n    .flow-text {\n      font-size: 1.056rem;\n      line-height: 1.7952rem; } }\n  @media only screen and (min-width: 644.2px) {\n    .flow-text {\n      font-size: 1.058rem;\n      line-height: 1.7986rem; } }\n  @media only screen and (min-width: 654px) {\n    .flow-text {\n      font-size: 1.06rem;\n      line-height: 1.802rem; } }\n  @media only screen and (min-width: 663.8px) {\n    .flow-text {\n      font-size: 1.062rem;\n      line-height: 1.8054rem; } }\n  @media only screen and (min-width: 673.6px) {\n    .flow-text {\n      font-size: 1.064rem;\n      line-height: 1.8088rem; } }\n  @media only screen and (min-width: 683.4px) {\n    .flow-text {\n      font-size: 1.066rem;\n      line-height: 1.8122rem; } }\n  @media only screen and (min-width: 693.2px) {\n    .flow-text {\n      font-size: 1.068rem;\n      line-height: 1.8156rem; } }\n  @media only screen and (min-width: 703px) {\n    .flow-text {\n      font-size: 1.07rem;\n      line-height: 1.819rem; } }\n  @media only screen and (min-width: 712.8px) {\n    .flow-text {\n      font-size: 1.072rem;\n      line-height: 1.8224rem; } }\n  @media only screen and (min-width: 722.6px) {\n    .flow-text {\n      font-size: 1.074rem;\n      line-height: 1.8258rem; } }\n  @media only screen and (min-width: 732.4px) {\n    .flow-text {\n      font-size: 1.076rem;\n      line-height: 1.8292rem; } }\n  @media only screen and (min-width: 742.2px) {\n    .flow-text {\n      font-size: 1.078rem;\n      line-height: 1.8326rem; } }\n  @media only screen and (min-width: 752px) {\n    .flow-text {\n      font-size: 1.08rem;\n      line-height: 1.836rem; } }\n  @media only screen and (max-width: 360px) {\n    .flow-text {\n      font-size: 1.2rem; } }\n\n.container {\n  margin: 0 auto;\n  max-width: 1280px;\n  width: 90%; }\n\n@media only screen and (min-width: 601px) {\n  .container {\n    width: 85%; } }\n\n@media only screen and (min-width: 993px) {\n  .container {\n    width: 70%; } }\n\n.container .row {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem; }\n\n.section {\n  padding-top: 1rem;\n  padding-bottom: 1rem; }\n  .section.no-pad {\n    padding: 0; }\n  .section.no-pad-bot {\n    padding-bottom: 0; }\n  .section.no-pad-top {\n    padding-top: 0; }\n\n.row {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px; }\n  .row:after {\n    content: \"\";\n    display: table;\n    clear: both; }\n  .row .col {\n    float: left;\n    box-sizing: border-box;\n    padding: 0 0.75rem;\n    min-height: 1px; }\n    .row .col[class*=\"push-\"], .row .col[class*=\"pull-\"] {\n      position: relative; }\n    .row .col.s1, .row .col.m1, .row .col.l1, .row .col.xl1 {\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s2, .row .col.m2, .row .col.l2, .row .col.xl2 {\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s3, .row .col.m3, .row .col.l3, .row .col.xl3 {\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s4, .row .col.m4, .row .col.l4, .row .col.xl4 {\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s5, .row .col.m5, .row .col.l5, .row .col.xl5 {\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s6, .row .col.m6, .row .col.l6, .row .col.xl6 {\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s7, .row .col.m7, .row .col.l7, .row .col.xl7 {\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s8, .row .col.m8, .row .col.l8, .row .col.xl8 {\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s9, .row .col.m9, .row .col.l9, .row .col.xl9 {\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s10, .row .col.m10, .row .col.l10, .row .col.xl10 {\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s11, .row .col.m11, .row .col.l11, .row .col.xl11 {\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s12, .row .col.m12, .row .col.l12, .row .col.xl12 {\n      margin-left: auto;\n      left: auto;\n      right: auto; }\n    .row .col.s1 {\n      width: 8.33333%; }\n    .row .col.s2 {\n      width: 16.66667%; }\n    .row .col.s3 {\n      width: 25%; }\n    .row .col.s4 {\n      width: 33.33333%; }\n    .row .col.s5 {\n      width: 41.66667%; }\n    .row .col.s6 {\n      width: 50%; }\n    .row .col.s7 {\n      width: 58.33333%; }\n    .row .col.s8 {\n      width: 66.66667%; }\n    .row .col.s9 {\n      width: 75%; }\n    .row .col.s10 {\n      width: 83.33333%; }\n    .row .col.s11 {\n      width: 91.66667%; }\n    .row .col.s12 {\n      width: 100%; }\n    .row .col.offset-s1 {\n      margin-left: 8.33333%; }\n    .row .col.pull-s1 {\n      right: 8.33333%; }\n    .row .col.push-s1 {\n      left: 8.33333%; }\n    .row .col.offset-s2 {\n      margin-left: 16.66667%; }\n    .row .col.pull-s2 {\n      right: 16.66667%; }\n    .row .col.push-s2 {\n      left: 16.66667%; }\n    .row .col.offset-s3 {\n      margin-left: 25%; }\n    .row .col.pull-s3 {\n      right: 25%; }\n    .row .col.push-s3 {\n      left: 25%; }\n    .row .col.offset-s4 {\n      margin-left: 33.33333%; }\n    .row .col.pull-s4 {\n      right: 33.33333%; }\n    .row .col.push-s4 {\n      left: 33.33333%; }\n    .row .col.offset-s5 {\n      margin-left: 41.66667%; }\n    .row .col.pull-s5 {\n      right: 41.66667%; }\n    .row .col.push-s5 {\n      left: 41.66667%; }\n    .row .col.offset-s6 {\n      margin-left: 50%; }\n    .row .col.pull-s6 {\n      right: 50%; }\n    .row .col.push-s6 {\n      left: 50%; }\n    .row .col.offset-s7 {\n      margin-left: 58.33333%; }\n    .row .col.pull-s7 {\n      right: 58.33333%; }\n    .row .col.push-s7 {\n      left: 58.33333%; }\n    .row .col.offset-s8 {\n      margin-left: 66.66667%; }\n    .row .col.pull-s8 {\n      right: 66.66667%; }\n    .row .col.push-s8 {\n      left: 66.66667%; }\n    .row .col.offset-s9 {\n      margin-left: 75%; }\n    .row .col.pull-s9 {\n      right: 75%; }\n    .row .col.push-s9 {\n      left: 75%; }\n    .row .col.offset-s10 {\n      margin-left: 83.33333%; }\n    .row .col.pull-s10 {\n      right: 83.33333%; }\n    .row .col.push-s10 {\n      left: 83.33333%; }\n    .row .col.offset-s11 {\n      margin-left: 91.66667%; }\n    .row .col.pull-s11 {\n      right: 91.66667%; }\n    .row .col.push-s11 {\n      left: 91.66667%; }\n    .row .col.offset-s12 {\n      margin-left: 100%; }\n    .row .col.pull-s12 {\n      right: 100%; }\n    .row .col.push-s12 {\n      left: 100%; }\n    @media only screen and (min-width: 601px) {\n      .row .col.m1 {\n        width: 8.33333%; }\n      .row .col.m2 {\n        width: 16.66667%; }\n      .row .col.m3 {\n        width: 25%; }\n      .row .col.m4 {\n        width: 33.33333%; }\n      .row .col.m5 {\n        width: 41.66667%; }\n      .row .col.m6 {\n        width: 50%; }\n      .row .col.m7 {\n        width: 58.33333%; }\n      .row .col.m8 {\n        width: 66.66667%; }\n      .row .col.m9 {\n        width: 75%; }\n      .row .col.m10 {\n        width: 83.33333%; }\n      .row .col.m11 {\n        width: 91.66667%; }\n      .row .col.m12 {\n        width: 100%; }\n      .row .col.offset-m1 {\n        margin-left: 8.33333%; }\n      .row .col.pull-m1 {\n        right: 8.33333%; }\n      .row .col.push-m1 {\n        left: 8.33333%; }\n      .row .col.offset-m2 {\n        margin-left: 16.66667%; }\n      .row .col.pull-m2 {\n        right: 16.66667%; }\n      .row .col.push-m2 {\n        left: 16.66667%; }\n      .row .col.offset-m3 {\n        margin-left: 25%; }\n      .row .col.pull-m3 {\n        right: 25%; }\n      .row .col.push-m3 {\n        left: 25%; }\n      .row .col.offset-m4 {\n        margin-left: 33.33333%; }\n      .row .col.pull-m4 {\n        right: 33.33333%; }\n      .row .col.push-m4 {\n        left: 33.33333%; }\n      .row .col.offset-m5 {\n        margin-left: 41.66667%; }\n      .row .col.pull-m5 {\n        right: 41.66667%; }\n      .row .col.push-m5 {\n        left: 41.66667%; }\n      .row .col.offset-m6 {\n        margin-left: 50%; }\n      .row .col.pull-m6 {\n        right: 50%; }\n      .row .col.push-m6 {\n        left: 50%; }\n      .row .col.offset-m7 {\n        margin-left: 58.33333%; }\n      .row .col.pull-m7 {\n        right: 58.33333%; }\n      .row .col.push-m7 {\n        left: 58.33333%; }\n      .row .col.offset-m8 {\n        margin-left: 66.66667%; }\n      .row .col.pull-m8 {\n        right: 66.66667%; }\n      .row .col.push-m8 {\n        left: 66.66667%; }\n      .row .col.offset-m9 {\n        margin-left: 75%; }\n      .row .col.pull-m9 {\n        right: 75%; }\n      .row .col.push-m9 {\n        left: 75%; }\n      .row .col.offset-m10 {\n        margin-left: 83.33333%; }\n      .row .col.pull-m10 {\n        right: 83.33333%; }\n      .row .col.push-m10 {\n        left: 83.33333%; }\n      .row .col.offset-m11 {\n        margin-left: 91.66667%; }\n      .row .col.pull-m11 {\n        right: 91.66667%; }\n      .row .col.push-m11 {\n        left: 91.66667%; }\n      .row .col.offset-m12 {\n        margin-left: 100%; }\n      .row .col.pull-m12 {\n        right: 100%; }\n      .row .col.push-m12 {\n        left: 100%; } }\n    @media only screen and (min-width: 993px) {\n      .row .col.l1 {\n        width: 8.33333%; }\n      .row .col.l2 {\n        width: 16.66667%; }\n      .row .col.l3 {\n        width: 25%; }\n      .row .col.l4 {\n        width: 33.33333%; }\n      .row .col.l5 {\n        width: 41.66667%; }\n      .row .col.l6 {\n        width: 50%; }\n      .row .col.l7 {\n        width: 58.33333%; }\n      .row .col.l8 {\n        width: 66.66667%; }\n      .row .col.l9 {\n        width: 75%; }\n      .row .col.l10 {\n        width: 83.33333%; }\n      .row .col.l11 {\n        width: 91.66667%; }\n      .row .col.l12 {\n        width: 100%; }\n      .row .col.offset-l1 {\n        margin-left: 8.33333%; }\n      .row .col.pull-l1 {\n        right: 8.33333%; }\n      .row .col.push-l1 {\n        left: 8.33333%; }\n      .row .col.offset-l2 {\n        margin-left: 16.66667%; }\n      .row .col.pull-l2 {\n        right: 16.66667%; }\n      .row .col.push-l2 {\n        left: 16.66667%; }\n      .row .col.offset-l3 {\n        margin-left: 25%; }\n      .row .col.pull-l3 {\n        right: 25%; }\n      .row .col.push-l3 {\n        left: 25%; }\n      .row .col.offset-l4 {\n        margin-left: 33.33333%; }\n      .row .col.pull-l4 {\n        right: 33.33333%; }\n      .row .col.push-l4 {\n        left: 33.33333%; }\n      .row .col.offset-l5 {\n        margin-left: 41.66667%; }\n      .row .col.pull-l5 {\n        right: 41.66667%; }\n      .row .col.push-l5 {\n        left: 41.66667%; }\n      .row .col.offset-l6 {\n        margin-left: 50%; }\n      .row .col.pull-l6 {\n        right: 50%; }\n      .row .col.push-l6 {\n        left: 50%; }\n      .row .col.offset-l7 {\n        margin-left: 58.33333%; }\n      .row .col.pull-l7 {\n        right: 58.33333%; }\n      .row .col.push-l7 {\n        left: 58.33333%; }\n      .row .col.offset-l8 {\n        margin-left: 66.66667%; }\n      .row .col.pull-l8 {\n        right: 66.66667%; }\n      .row .col.push-l8 {\n        left: 66.66667%; }\n      .row .col.offset-l9 {\n        margin-left: 75%; }\n      .row .col.pull-l9 {\n        right: 75%; }\n      .row .col.push-l9 {\n        left: 75%; }\n      .row .col.offset-l10 {\n        margin-left: 83.33333%; }\n      .row .col.pull-l10 {\n        right: 83.33333%; }\n      .row .col.push-l10 {\n        left: 83.33333%; }\n      .row .col.offset-l11 {\n        margin-left: 91.66667%; }\n      .row .col.pull-l11 {\n        right: 91.66667%; }\n      .row .col.push-l11 {\n        left: 91.66667%; }\n      .row .col.offset-l12 {\n        margin-left: 100%; }\n      .row .col.pull-l12 {\n        right: 100%; }\n      .row .col.push-l12 {\n        left: 100%; } }\n    @media only screen and (min-width: 1201px) {\n      .row .col.xl1 {\n        width: 8.33333%; }\n      .row .col.xl2 {\n        width: 16.66667%; }\n      .row .col.xl3 {\n        width: 25%; }\n      .row .col.xl4 {\n        width: 33.33333%; }\n      .row .col.xl5 {\n        width: 41.66667%; }\n      .row .col.xl6 {\n        width: 50%; }\n      .row .col.xl7 {\n        width: 58.33333%; }\n      .row .col.xl8 {\n        width: 66.66667%; }\n      .row .col.xl9 {\n        width: 75%; }\n      .row .col.xl10 {\n        width: 83.33333%; }\n      .row .col.xl11 {\n        width: 91.66667%; }\n      .row .col.xl12 {\n        width: 100%; }\n      .row .col.offset-xl1 {\n        margin-left: 8.33333%; }\n      .row .col.pull-xl1 {\n        right: 8.33333%; }\n      .row .col.push-xl1 {\n        left: 8.33333%; }\n      .row .col.offset-xl2 {\n        margin-left: 16.66667%; }\n      .row .col.pull-xl2 {\n        right: 16.66667%; }\n      .row .col.push-xl2 {\n        left: 16.66667%; }\n      .row .col.offset-xl3 {\n        margin-left: 25%; }\n      .row .col.pull-xl3 {\n        right: 25%; }\n      .row .col.push-xl3 {\n        left: 25%; }\n      .row .col.offset-xl4 {\n        margin-left: 33.33333%; }\n      .row .col.pull-xl4 {\n        right: 33.33333%; }\n      .row .col.push-xl4 {\n        left: 33.33333%; }\n      .row .col.offset-xl5 {\n        margin-left: 41.66667%; }\n      .row .col.pull-xl5 {\n        right: 41.66667%; }\n      .row .col.push-xl5 {\n        left: 41.66667%; }\n      .row .col.offset-xl6 {\n        margin-left: 50%; }\n      .row .col.pull-xl6 {\n        right: 50%; }\n      .row .col.push-xl6 {\n        left: 50%; }\n      .row .col.offset-xl7 {\n        margin-left: 58.33333%; }\n      .row .col.pull-xl7 {\n        right: 58.33333%; }\n      .row .col.push-xl7 {\n        left: 58.33333%; }\n      .row .col.offset-xl8 {\n        margin-left: 66.66667%; }\n      .row .col.pull-xl8 {\n        right: 66.66667%; }\n      .row .col.push-xl8 {\n        left: 66.66667%; }\n      .row .col.offset-xl9 {\n        margin-left: 75%; }\n      .row .col.pull-xl9 {\n        right: 75%; }\n      .row .col.push-xl9 {\n        left: 75%; }\n      .row .col.offset-xl10 {\n        margin-left: 83.33333%; }\n      .row .col.pull-xl10 {\n        right: 83.33333%; }\n      .row .col.push-xl10 {\n        left: 83.33333%; }\n      .row .col.offset-xl11 {\n        margin-left: 91.66667%; }\n      .row .col.pull-xl11 {\n        right: 91.66667%; }\n      .row .col.push-xl11 {\n        left: 91.66667%; }\n      .row .col.offset-xl12 {\n        margin-left: 100%; }\n      .row .col.pull-xl12 {\n        right: 100%; }\n      .row .col.push-xl12 {\n        left: 100%; } }\n\n/* Get the index styling */\n#index #intro {\n  margin-top: 50px; }\n  #index #intro p {\n    text-align: center;\n    margin-top: 50px; }\n\n#index #links {\n  text-align: center; }\n  #index #links span {\n    color: #d0d0d0;\n    margin: 10px; }\n\n/* Get history page styling */\n/* Import join/application styling */\n#join p {\n  text-align: center; }\n\n#join #links {\n  text-align: center; }\n  #join #links a {\n    padding: 15px 10px;\n    display: inline-block; }\n\n/* Contact */\n#contact p {\n  text-align: center; }\n\n/* Members */\n#members #logo {\n  margin-bottom: 50px; }\n", ""]);
	
	// exports


/***/ }),
/* 3 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ (function(module, exports) {

	"use strict";
	
	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ }),
/* 4 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map