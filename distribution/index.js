'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
 * loadScripts
 * @param urls:Array
 * @param callBack:Function
 * @link https://stackoverflow.com/questions/1866717/document-createelementscript-adding-two-scripts-with-one-callback/1867135#1867135
 */
var loadScripts = exports.loadScripts = function () {
  var cache = [];
  return function (urls) {
    var scripts = [].concat(_toConsumableArray(urls));
    return new Promise(function (resolve, reject) {
      var loader = function loader(src, handler) {
        if (cache.indexOf(src) >= 0) {
          taskRunner(scripts, loader, resolve);
        } else {
          var script = document.createElement('script');

          script.src = src;

          script.onload = script.onreadystatechange = function () {
            script.onreadystatechange = script.onload = null;
            taskRunner(scripts, loader, resolve);
          };

          script.onerror = function (error) {
            return reject(error);
          };

          document.body.appendChild(script);
          cache.push(src);
        }
      };
      taskRunner(scripts, loader, resolve);
    });
  };
}();

/*
 * loadCss
 * @param urls:Array
 * @param callBack:Function
 * @link https://stackoverflow.com/questions/1866717/document-createelementscript-adding-two-scripts-with-one-callback/1867135#1867135
 */
var loadCss = exports.loadCss = function () {
  var cache = [];
  var head = document.getElementsByTagName('head')[0];
  return function (urls) {
    var cssFiles = [].concat(_toConsumableArray(urls));
    return new Promise(function (resolve, reject) {
      function loader(url, taskRunner) {
        if (cache.indexOf(url) >= 0) {
          taskRunner(cssFiles, loader, resolve);
        } else {
          var cssnode = document.createElement('link');
          cssnode.type = 'text/css';
          cssnode.rel = 'stylesheet';
          cssnode.href = url;
          cssnode.onload = function () {
            cache.push(url);
            taskRunner(cssFiles, loader, resolve);
          };
          cssnode.onerror = function (error) {
            return reject(error);
          };
          head.appendChild(cssnode);
        }
      }
      taskRunner(cssFiles, loader, resolve);
    });
  };
}();

function taskRunner(files, loader, resolver) {
  if (files.length !== 0) {
    loader(files.shift(), taskRunner);
  } else {
    resolver(files);
  }
}