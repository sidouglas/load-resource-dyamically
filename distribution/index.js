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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*
 * loadScripts
 * @param urls:Array
 * @param callBack:Function
 * @link https://stackoverflow.com/questions/1866717/document-createelementscript-adding-two-scripts-with-one-callback/1867135#1867135
 */
const loadScripts = (() => {
  let cache = []
  return (urls) => {
    let scripts = [...urls]
    return new Promise((resolve, reject) => {
      const loader = (src, handler) => {
        if (cache.indexOf(src) >= 0) {
          taskRunner(scripts, loader, resolve)
        } else {
          let script = document.createElement('script')

          script.src = src

          script.onload = script.onreadystatechange = () => {
            script.onreadystatechange = script.onload = null
            taskRunner(scripts, loader, resolve)
          }

          script.onerror = (error) => reject(error)

          document.body.appendChild(script)
          cache.push(src)
        }
      }
      taskRunner(scripts, loader, resolve)
    })
  }
})()
/* harmony export (immutable) */ __webpack_exports__["loadScripts"] = loadScripts;


/*
 * loadCss
 * @param urls:Array
 * @param callBack:Function
 * @link https://stackoverflow.com/questions/1866717/document-createelementscript-adding-two-scripts-with-one-callback/1867135#1867135
 */
const loadCss = (() => {
  let cache = []
  const head = document.getElementsByTagName('head')[0]
  return (urls) => {
    let cssFiles = [...urls]
    return new Promise((resolve, reject) => {
      function loader (url, taskRunner) {
        if (cache.indexOf(url) >= 0) {
          taskRunner(cssFiles, loader, resolve)
        } else {
          let cssnode = document.createElement('link')
          cssnode.type = 'text/css'
          cssnode.rel = 'stylesheet'
          cssnode.href = url
          cssnode.onload = () => {
            cache.push(url)
            taskRunner(cssFiles, loader, resolve)
          }
          cssnode.onerror = (error) => reject(error)
          head.appendChild(cssnode)
        }
      }
      taskRunner(cssFiles, loader, resolve)
    })
  }
})()
/* harmony export (immutable) */ __webpack_exports__["loadCss"] = loadCss;


function taskRunner (files, loader, resolver) {
  if (files.length !== 0) {
    loader(files.shift(), taskRunner)
  } else {
    resolver(files)
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*
 * loadScripts
 * @param urls:Array
 * @param callBack:Function
 * @link https://stackoverflow.com/questions/1866717/document-createelementscript-adding-two-scripts-with-one-callback/1867135#1867135
 */
const loadScripts = (() => {
  let cache = []
  return (urls) => {
    let scripts = [...urls]
    return new Promise((resolve, reject) => {
      const loader = (src, handler) => {
        if (cache.indexOf(src) >= 0) {
          taskRunner(scripts, loader, resolve)
        } else {
          let script = document.createElement('script')

          script.src = src

          script.onload = script.onreadystatechange = () => {
            script.onreadystatechange = script.onload = null
            taskRunner(scripts, loader, resolve)
          }

          script.onerror = (error) => reject(error)

          document.body.appendChild(script)
          cache.push(src)
        }
      }
      taskRunner(scripts, loader, resolve)
    })
  }
})()
/* harmony export (immutable) */ __webpack_exports__["loadScripts"] = loadScripts;


/*
 * loadCss
 * @param urls:Array
 * @param callBack:Function
 * @link https://stackoverflow.com/questions/1866717/document-createelementscript-adding-two-scripts-with-one-callback/1867135#1867135
 */
const loadCss = (() => {
  let cache = []
  const head = document.getElementsByTagName('head')[0]
  return (urls) => {
    let cssFiles = [...urls]
    return new Promise((resolve, reject) => {
      function loader (url, taskRunner) {
        if (cache.indexOf(url) >= 0) {
          taskRunner(cssFiles, loader, resolve)
        } else {
          let cssnode = document.createElement('link')
          cssnode.type = 'text/css'
          cssnode.rel = 'stylesheet'
          cssnode.href = url
          cssnode.onload = () => {
            cache.push(url)
            taskRunner(cssFiles, loader, resolve)
          }
          cssnode.onerror = (error) => reject(error)
          head.appendChild(cssnode)
        }
      }
      taskRunner(cssFiles, loader, resolve)
    })
  }
})()
/* harmony export (immutable) */ __webpack_exports__["loadCss"] = loadCss;


function taskRunner (files, loader, resolver) {
  if (files.length !== 0) {
    loader(files.shift(), taskRunner)
  } else {
    resolver(files)
  }
}


/***/ })
/******/ ]);

/***/ })
/******/ ]);