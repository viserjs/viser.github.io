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
/******/ 	__webpack_require__.p = "http://localhost:3000/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 827);
/******/ })
/************************************************************************/
/******/ ({

/***/ 827:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(828);

var GDP_JSON = [{ "year": '2006', "gdp": 21.94385 }, { "year": '2007', "gdp": 27.02323 }, { "year": '2008', "gdp": 31.95155 }, { "year": '2009', "gdp": 34.90814 }, { "year": '2010', "gdp": 41.30303 }, { "year": '2011', "gdp": 48.93006 }, { "year": '2012', "gdp": 54.03674 }, { "year": '2013', "gdp": 59.52444 }, { "year": '2014', "gdp": 64.39740 }, { "year": '2015', "gdp": 68.90521 }];

function renderChart() {
  RechartCore.ChartBuilder({
    data: GDP_JSON,
    dataDef: [{ key: 'year', mark: 'column', scale: {} }, { key: 'gdp', mark: 'row', scale: {} }],
    tooltip: true,
    axis: true,
    series: [{ position: ['year', 'gdp'], gemo: 'bar', color: '#0088fe' }],
    chart: { width: 700, height: 400, container: 'viser-mount-1-1' }
  });

  RechartCore.ChartBuilder({
    data: GDP_JSON,
    dataDef: [{ key: 'year', mark: 'column', scale: {} }, { key: 'gdp', mark: 'row', scale: {} }],
    tooltip: true,
    axis: true,
    series: [{ position: ['year', 'gdp'], gemo: 'line', color: '#0088fe' }],
    chart: { width: 380, height: 230, container: 'viser-mount-2-1' }
  });
  RechartCore.ChartBuilder({
    data: GDP_JSON,
    dataDef: [{ key: 'year', mark: ['column', 'color'], scale: {} }, { key: 'gdp', mark: 'row', scale: {} }],
    tooltip: true,
    axis: true,
    series: [{ position: ['year', 'gdp'], quickType: 'pie', color: '#0088fe' }],
    chart: { width: 380, height: 300, container: 'viser-mount-2-2' }
  });
  RechartCore.ChartBuilder({
    data: GDP_JSON,
    dataDef: [{ key: 'year', mark: 'column', scale: {} }, { key: 'gdp', mark: 'row', scale: { min: 0, max: 70 } }],
    tooltip: true,
    axis: true,
    series: [{ position: ['year', 'gdp'], gemo: 'area', color: '#0088fe' }],
    chart: { width: 380, height: 230, container: 'viser-mount-2-3' }
  });
  RechartCore.ChartBuilder({
    data: { name: 'root', children: GDP_JSON },
    dataDef: [{ key: 'x', mark: 'column' }, { key: 'y', mark: 'row' }, { key: 'year', mark: 'color', scale: {} }],
    dataPre: {
      connector: 'hierarchy',
      transform: {
        type: 'hierarchy.treemap', field: 'gdp', tile: 'treemapResquarify', as: ['x', 'y'], nameKey: 'year', valueKey: 'gdp'
      }
    },
    tooltip: false,
    axis: false,
    series: [{
      position: ['x', 'y'],
      gemo: 'polygon',
      style: {
        lineWidth: 1,
        stroke: '#fff',
        fill: '#0088fe'
      }
    }],
    chart: { width: 400, height: 270, container: 'viser-mount-2-4' }
  });
}

window.onload = renderChart;

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });