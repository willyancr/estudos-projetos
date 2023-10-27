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

/***/ "./js/modules/fetchBitcoin.js":
/*!************************************!*\
  !*** ./js/modules/fetchBitcoin.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\n  fetch('https://blockchain.info/ticker').then(function (data) {\n    return data.json();\n  }).then(function (bitcoin) {\n    var btcPreco = document.querySelector('.btc-preco');\n    btcPreco.textContent = (100000 / bitcoin.BRL.buy).toFixed(4);\n  });\n}\n\n//# sourceURL=webpack://site-animais-fantasticos/./js/modules/fetchBitcoin.js?");

/***/ }),

/***/ "./js/modules/menuDropdown.js":
/*!************************************!*\
  !*** ./js/modules/menuDropdown.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuDropdown)\n/* harmony export */ });\nfunction initMenuDropdown() {\n  var dropdownMenus = document.querySelectorAll('[data-dropdown]');\n  dropdownMenus.forEach(function (menu) {\n    //eventos de click e touch click pra mobile\n    ['click', 'touchstart'].forEach(function (usedEvent) {\n      menu.addEventListener(usedEvent, handleMenu);\n    });\n  });\n  function handleMenu(event) {\n    var _this = this;\n    event.preventDefault();\n    this.classList.add('active');\n    outsideClick(this, function () {\n      _this.classList.remove('active');\n    });\n  }\n  function outsideClick(element, callback) {\n    var html = document.documentElement;\n    html.addEventListener('click', clickHTML);\n    function clickHTML(event) {\n      if (!element.contains(event.target)) callback();\n    }\n  }\n}\n\n//# sourceURL=webpack://site-animais-fantasticos/./js/modules/menuDropdown.js?");

/***/ }),

/***/ "./js/modules/menuMobile.js":
/*!**********************************!*\
  !*** ./js/modules/menuMobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _menuDropdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuDropdown.js */ \"./js/modules/menuDropdown.js\");\n\nfunction initMenuMobile() {\n  var buttonMenu = document.querySelector('.button-menu');\n  var listMenu = document.querySelector('#menu');\n  buttonMenu.addEventListener('click', toggleMenu);\n  function toggleMenu() {\n    listMenu.classList.toggle('active');\n    buttonMenu.classList.toggle('active');\n  }\n  //verificar se clicou fora do botão e lista do menu\n  document.addEventListener('click', function (event) {\n    var isListMenu = listMenu.contains(event.target);\n    var isButtonMenu = buttonMenu.contains(event.target);\n    if (!isListMenu && !isButtonMenu) {\n      listMenu.classList.remove('active');\n      buttonMenu.classList.remove('active');\n    }\n  });\n}\n\n//# sourceURL=webpack://site-animais-fantasticos/./js/modules/menuMobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\n//login\nfunction initModal() {\n  var btnAbrir = document.querySelector('[data-modal=\"abrir\"]');\n  var btnFechar = document.querySelector('[data-modal=\"fechar\"]');\n  var containerModal = document.querySelector('[data-modal=\"container\"]');\n  if (btnAbrir && btnFechar && containerModal) {\n    var toggleModal = function toggleModal(event) {\n      event.preventDefault();\n      containerModal.classList.toggle('ativo');\n    };\n    var clickForaModal = function clickForaModal(event) {\n      if (event.target === containerModal) {\n        toggleModal(event);\n      }\n    };\n    btnAbrir.addEventListener('click', toggleModal);\n    btnFechar.addEventListener('click', toggleModal);\n    containerModal.addEventListener('click', clickForaModal);\n  }\n}\n\n//# sourceURL=webpack://site-animais-fantasticos/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/navegation.js":
/*!**********************************!*\
  !*** ./js/modules/navegation.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animationScroll: () => (/* binding */ animationScroll),\n/* harmony export */   navAccordion: () => (/* binding */ navAccordion),\n/* harmony export */   navScroll: () => (/* binding */ navScroll),\n/* harmony export */   navTab: () => (/* binding */ navTab)\n/* harmony export */ });\nfunction navTab() {\n  var tabMenu = document.querySelectorAll('.js-tabmenu li');\n  var tabContent = document.querySelectorAll('.js-tabcontent section');\n  tabContent[0].classList.add('ativo');\n\n  //--------NAVEGAÇÃO POR TAB--------\n  //verifica se existem as classes\n  if (tabMenu.length && tabContent.length) {\n    //função para add ou remover as sections de animals description\n    var activeSection = function activeSection(index) {\n      tabContent.forEach(function (element) {\n        element.classList.remove('ativo');\n      });\n      tabContent[index].classList.add('ativo');\n    };\n    //evento de click na lista de animais\n    tabMenu.forEach(function (item, index) {\n      item.addEventListener('click', function () {\n        activeSection(index);\n      });\n    });\n  }\n}\n//navegação nos itens do FAQ\nfunction navAccordion() {\n  var titleFaq = document.querySelectorAll('.js-accordion-faq dt');\n  var accordionFaq = document.querySelectorAll('.js-accordion-faq dd');\n  var activeClass = 'ativo';\n  if (titleFaq.length && accordionFaq.length) {\n    var activeDD = function activeDD(index) {\n      titleFaq[index].classList.toggle(activeClass);\n      accordionFaq[index].classList.toggle(activeClass);\n    };\n    titleFaq[0].classList.add(activeClass);\n    accordionFaq[0].classList.add(activeClass);\n    titleFaq.forEach(function (item, index) {\n      item.addEventListener('click', function () {\n        activeDD(index);\n      });\n    });\n  }\n}\n//navegação do menu\nfunction navScroll() {\n  var linksInternos = document.querySelectorAll('.js-menu a[href^=\"#\"]');\n  linksInternos.forEach(function (link) {\n    link.addEventListener('click', scrollToSelection);\n  });\n  function scrollToSelection(event) {\n    event.preventDefault();\n    var href = event.currentTarget.getAttribute('href');\n    var section = document.querySelector(href);\n\n    //scroll suave\n    section.scrollIntoView({\n      behavior: \"smooth\",\n      block: 'start'\n    });\n  }\n}\n\n//efeitos dos titulos no scroll\nfunction animationScroll() {\n  var sections = document.querySelectorAll('.js-scroll');\n  var windowMetade = window.innerHeight * 0.8;\n  window.addEventListener('scroll', animaScroll);\n  function animaScroll() {\n    sections.forEach(function (section) {\n      var sectionTop = section.getBoundingClientRect().top;\n      var isSectionVisible = sectionTop - windowMetade < 0;\n      if (isSectionVisible) section.classList.add('ativo');else section.classList.remove('ativo');\n    });\n  }\n  animaScroll();\n}\n\n//# sourceURL=webpack://site-animais-fantasticos/./js/modules/navegation.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_navegation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navegation.js */ \"./js/modules/navegation.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_menuDropdown_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menuDropdown.js */ \"./js/modules/menuDropdown.js\");\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./js/modules/menuMobile.js\");\n/* harmony import */ var _modules_fetchBitcoin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/fetchBitcoin.js */ \"./js/modules/fetchBitcoin.js\");\n\n\n\n\n\n(0,_modules_navegation_js__WEBPACK_IMPORTED_MODULE_0__.navTab)();\n(0,_modules_navegation_js__WEBPACK_IMPORTED_MODULE_0__.navAccordion)();\n(0,_modules_navegation_js__WEBPACK_IMPORTED_MODULE_0__.navScroll)();\n(0,_modules_navegation_js__WEBPACK_IMPORTED_MODULE_0__.animationScroll)();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_menuDropdown_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_modules_fetchBitcoin_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://site-animais-fantasticos/./js/script.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;