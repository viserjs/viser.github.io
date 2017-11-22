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
/******/ 	return __webpack_require__(__webpack_require__.s = 198);
/******/ })
/************************************************************************/
/******/ ({

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(24);

var _exception = __webpack_require__(44);

var _exception2 = _interopRequireDefault(_exception);

var _helpers = __webpack_require__(206);

var _decorators = __webpack_require__(214);

var _logger = __webpack_require__(216);

var _logger2 = _interopRequireDefault(_logger);

var VERSION = '4.0.11';
exports.VERSION = VERSION;
var COMPILER_REVISION = 7;

exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1',
  7: '>= 4.0.0'
};

exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

  _helpers.registerDefaultHelpers(this);
  _decorators.registerDefaultDecorators(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: _logger2['default'],
  log: _logger2['default'].log,

  registerHelper: function registerHelper(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple helpers');
      }
      _utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name) {
    delete this.helpers[name];
  },

  registerPartial: function registerPartial(name, partial) {
    if (_utils.toString.call(name) === objectType) {
      _utils.extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name) {
    delete this.partials[name];
  },

  registerDecorator: function registerDecorator(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple decorators');
      }
      _utils.extend(this.decorators, name);
    } else {
      this.decorators[name] = fn;
    }
  },
  unregisterDecorator: function unregisterDecorator(name) {
    delete this.decorators[name];
  }
};

var log = _logger2['default'].log;

exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cUJBQTRDLFNBQVM7O3lCQUMvQixhQUFhOzs7O3VCQUNFLFdBQVc7OzBCQUNSLGNBQWM7O3NCQUNuQyxVQUFVOzs7O0FBRXRCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQzs7QUFDekIsSUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7OztBQUU1QixJQUFNLGdCQUFnQixHQUFHO0FBQzlCLEdBQUMsRUFBRSxhQUFhO0FBQ2hCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxVQUFVO0FBQ2IsR0FBQyxFQUFFLGtCQUFrQjtBQUNyQixHQUFDLEVBQUUsaUJBQWlCO0FBQ3BCLEdBQUMsRUFBRSxVQUFVO0NBQ2QsQ0FBQzs7O0FBRUYsSUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUM7O0FBRTlCLFNBQVMscUJBQXFCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFDbkUsTUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQzdCLE1BQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUMvQixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUM7O0FBRW5DLGtDQUF1QixJQUFJLENBQUMsQ0FBQztBQUM3Qix3Q0FBMEIsSUFBSSxDQUFDLENBQUM7Q0FDakM7O0FBRUQscUJBQXFCLENBQUMsU0FBUyxHQUFHO0FBQ2hDLGFBQVcsRUFBRSxxQkFBcUI7O0FBRWxDLFFBQU0scUJBQVE7QUFDZCxLQUFHLEVBQUUsb0JBQU8sR0FBRzs7QUFFZixnQkFBYyxFQUFFLHdCQUFTLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDakMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLFVBQUksRUFBRSxFQUFFO0FBQUUsY0FBTSwyQkFBYyx5Q0FBeUMsQ0FBQyxDQUFDO09BQUU7QUFDM0Usb0JBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM1QixNQUFNO0FBQ0wsVUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDekI7R0FDRjtBQUNELGtCQUFnQixFQUFFLDBCQUFTLElBQUksRUFBRTtBQUMvQixXQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDM0I7O0FBRUQsaUJBQWUsRUFBRSx5QkFBUyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ3ZDLFFBQUksZ0JBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtBQUN0QyxvQkFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzdCLE1BQU07QUFDTCxVQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtBQUNsQyxjQUFNLHlFQUEwRCxJQUFJLG9CQUFpQixDQUFDO09BQ3ZGO0FBQ0QsVUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7S0FDL0I7R0FDRjtBQUNELG1CQUFpQixFQUFFLDJCQUFTLElBQUksRUFBRTtBQUNoQyxXQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDNUI7O0FBRUQsbUJBQWlCLEVBQUUsMkJBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNwQyxRQUFJLGdCQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDdEMsVUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFNLDJCQUFjLDRDQUE0QyxDQUFDLENBQUM7T0FBRTtBQUM5RSxvQkFBTyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQy9CLE1BQU07QUFDTCxVQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUM1QjtHQUNGO0FBQ0QscUJBQW1CLEVBQUUsNkJBQVMsSUFBSSxFQUFFO0FBQ2xDLFdBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUM5QjtDQUNGLENBQUM7O0FBRUssSUFBSSxHQUFHLEdBQUcsb0JBQU8sR0FBRyxDQUFDOzs7UUFFcEIsV0FBVztRQUFFLE1BQU0iLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlRnJhbWUsIGV4dGVuZCwgdG9TdHJpbmd9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuL2V4Y2VwdGlvbic7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdEhlbHBlcnN9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnN9IGZyb20gJy4vZGVjb3JhdG9ycyc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSAnNC4wLjExJztcbmV4cG9ydCBjb25zdCBDT01QSUxFUl9SRVZJU0lPTiA9IDc7XG5cbmV4cG9ydCBjb25zdCBSRVZJU0lPTl9DSEFOR0VTID0ge1xuICAxOiAnPD0gMS4wLnJjLjInLCAvLyAxLjAucmMuMiBpcyBhY3R1YWxseSByZXYyIGJ1dCBkb2Vzbid0IHJlcG9ydCBpdFxuICAyOiAnPT0gMS4wLjAtcmMuMycsXG4gIDM6ICc9PSAxLjAuMC1yYy40JyxcbiAgNDogJz09IDEueC54JyxcbiAgNTogJz09IDIuMC4wLWFscGhhLngnLFxuICA2OiAnPj0gMi4wLjAtYmV0YS4xJyxcbiAgNzogJz49IDQuMC4wJ1xufTtcblxuY29uc3Qgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5leHBvcnQgZnVuY3Rpb24gSGFuZGxlYmFyc0Vudmlyb25tZW50KGhlbHBlcnMsIHBhcnRpYWxzLCBkZWNvcmF0b3JzKSB7XG4gIHRoaXMuaGVscGVycyA9IGhlbHBlcnMgfHwge307XG4gIHRoaXMucGFydGlhbHMgPSBwYXJ0aWFscyB8fCB7fTtcbiAgdGhpcy5kZWNvcmF0b3JzID0gZGVjb3JhdG9ycyB8fCB7fTtcblxuICByZWdpc3RlckRlZmF1bHRIZWxwZXJzKHRoaXMpO1xuICByZWdpc3RlckRlZmF1bHREZWNvcmF0b3JzKHRoaXMpO1xufVxuXG5IYW5kbGViYXJzRW52aXJvbm1lbnQucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogSGFuZGxlYmFyc0Vudmlyb25tZW50LFxuXG4gIGxvZ2dlcjogbG9nZ2VyLFxuICBsb2c6IGxvZ2dlci5sb2csXG5cbiAgcmVnaXN0ZXJIZWxwZXI6IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikgeyB0aHJvdyBuZXcgRXhjZXB0aW9uKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGhlbHBlcnMnKTsgfVxuICAgICAgZXh0ZW5kKHRoaXMuaGVscGVycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVscGVyc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckhlbHBlcjogZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmhlbHBlcnNbbmFtZV07XG4gIH0sXG5cbiAgcmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbihuYW1lLCBwYXJ0aWFsKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGV4dGVuZCh0aGlzLnBhcnRpYWxzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBwYXJ0aWFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKGBBdHRlbXB0aW5nIHRvIHJlZ2lzdGVyIGEgcGFydGlhbCBjYWxsZWQgXCIke25hbWV9XCIgYXMgdW5kZWZpbmVkYCk7XG4gICAgICB9XG4gICAgICB0aGlzLnBhcnRpYWxzW25hbWVdID0gcGFydGlhbDtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMucGFydGlhbHNbbmFtZV07XG4gIH0sXG5cbiAgcmVnaXN0ZXJEZWNvcmF0b3I6IGZ1bmN0aW9uKG5hbWUsIGZuKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIGlmIChmbikgeyB0aHJvdyBuZXcgRXhjZXB0aW9uKCdBcmcgbm90IHN1cHBvcnRlZCB3aXRoIG11bHRpcGxlIGRlY29yYXRvcnMnKTsgfVxuICAgICAgZXh0ZW5kKHRoaXMuZGVjb3JhdG9ycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVjb3JhdG9yc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLmRlY29yYXRvcnNbbmFtZV07XG4gIH1cbn07XG5cbmV4cG9ydCBsZXQgbG9nID0gbG9nZ2VyLmxvZztcblxuZXhwb3J0IHtjcmVhdGVGcmFtZSwgbG9nZ2VyfTtcbiJdfQ==


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {


__webpack_require__(199);
const $ = __webpack_require__(201);

const CONS = __webpack_require__(202);

const codeConfig = __webpack_require__(203);

const navTpl = __webpack_require__(204);
const rightPanelTpl = __webpack_require__(221);
const caseBoxJsonTpl = __webpack_require__(222);

class App {
  constructor() {
    this.attrs = {
      codes: [],
      language: 'react',
      chartType: 'line',
    };
  }
  init() {
    // 根据 url 路由转发
    // const langReg = new RegExp('(^|&)language=([^&]*)(&|$)');
    const typeReg = new RegExp('(^|&)type=([^&]*)(&|$)');
    const search = window.location.search.substr(1);

    // const langResult = search.match(langReg);
    const typeResult = search.match(typeReg);
    // const lang = langResult ? langResult[2] : 'react';
    const chartType = typeResult? typeResult[2] : Object.keys(codeConfig)[0];
    // this.attrs.language = lang;
    this.attrs.chartType = chartType;
    const exampleFolders = codeConfig[chartType].examples || [];
    exampleFolders.forEach((folder) => {
      let jsonCode = '';
      let reactCode = '';
      let vueCode = '';
      let angularCode = '';
      try {
        jsonCode = __webpack_require__(223)(`./${chartType}/${folder}/json.js`);
        reactCode = __webpack_require__(228)(`./${chartType}/${folder}/react.js`);
        vueCode = __webpack_require__(231)(`./${chartType}/${folder}/vue.js`);
        angularCode = __webpack_require__(234)(`./${chartType}/${folder}/angular.js`);
      } catch(e) {
        console.log('exception:', e);
      } finally {
        this.attrs.codes.push({
          jsonCode, reactCode, vueCode, angularCode
        });
      }

    });

    this.render();
    this.bindEvent();
  }

  render() {
    this.renderNav();
    this.renderRightPanel();
    this.renderExample();
  }

  renderNav() {
    $('#nav').empty();
    $('#nav').append(navTpl({
      codeConfig,
      language: this.attrs.language,
      chartType: this.attrs.chartType,
    }));
  }
  renderRightPanel() {
    $('#rightPanel').empty();
    $('#rightPanel').append(rightPanelTpl({noCodes: this.attrs.codes.length ? false : true}));
  }

  bindEvent() {
    var _this = this;
    $('.case-box .op .run').on('click', function() {
      const index = $(this).attr('data-index');

      const data = _this.getJsfiddleData(index);
      const formAttributes = {
        method: 'post',
        action: 'https://jsfiddle.net/api/post/library/pure/',
        target: '_blank',
        id: 'fiddle-form',
        style: 'display: none;'
      }

      const node = document.createElement('textarea');
      const form = document.createElement('form');
      for (const attr in formAttributes) {
        form.setAttribute(attr, formAttributes[attr]);
      }

      for (let name in data) {
        node.name = name;
        node.value = data[name].toString();
        form.appendChild(node.cloneNode());
      }

      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);
    });
    $('.case-box .case-code-switch .case-code-switch-item').on('click', function () {
      const lang = $(this).attr('data-lang');
      _this.attrs.language = lang;

      _this.unbindEvent();
      _this.render();
      _this.bindEvent();
    })
  }

  unbindEvent() {
    $('.case-box .op .run').off('click');
    $('.case-box .case-code-switch .case-code-switch-item').off('click');
  }

  getJsfiddleData(index) {
    const language = this.attrs.language;
    switch(language) {
      case 'json':
        return this.getJsfiddleJsonData(index);
      case 'react':
        return this.getJsfiddleReactData(index);
      case 'vue':
        return this.getJsfiddleVueData(index);
      case 'angular':
        return;
      case 'rax':
        // todo
        return;
      default:
        return;
    }
  }

  renderExample() {
    const _this = this;
    const enName = this.attrs.chartType + ' Chart';

    if (!this.attrs.codes.length) {
      return;
    }
    $('.case-list').empty();
    this.attrs.codes.forEach((code, i) => {
      $('.case-list').append(caseBoxJsonTpl({
        name: enName,
        i,
        reactClass: _this.attrs.language === 'react' ? ' active' : '',
        vueClass: _this.attrs.language === 'vue' ? ' active' : '',
        angularClass: _this.attrs.language === 'angular' ? ' active' : '',
      }));
      const runCode = code['jsonCode'];
      runCode.config.chart.container = `example${i}`;
      Viser.default(runCode.config);

      var reactEditor = ace.edit(`react-${i}`);
      const showReactCode = _this.getReactCode(code);
      reactEditor.setTheme("ace/theme/github");
      reactEditor.getSession().setMode("ace/mode/javascript");
      reactEditor.setHighlightActiveLine(true);
      reactEditor.setShowPrintMargin(false);
      reactEditor.env.editor.setReadOnly(true);
      reactEditor.renderer.setShowGutter(false);
      reactEditor.env.editor.setValue(showReactCode, 1);

      var vueEditor = ace.edit(`vue-${i}`);
      const showVueCode = _this.getVueCode(code);
      vueEditor.setTheme("ace/theme/github");
      vueEditor.getSession().setMode("ace/mode/javascript");
      vueEditor.setHighlightActiveLine(true);
      vueEditor.setShowPrintMargin(false);
      vueEditor.env.editor.setReadOnly(true);
      vueEditor.renderer.setShowGutter(false);
      vueEditor.env.editor.setValue(showVueCode, 1);

      var angularEditor = ace.edit(`angular-${i}`);
      const showAngularCode = this.getAngularCode(code);
      angularEditor.setTheme("ace/theme/github");
      angularEditor.getSession().setMode("ace/mode/javascript");
      angularEditor.setHighlightActiveLine(true);
      angularEditor.setShowPrintMargin(false);
      angularEditor.env.editor.setReadOnly(true);
      angularEditor.renderer.setShowGutter(false);
      angularEditor.env.editor.setValue(showAngularCode, 1);
    });
  }

  getJsonCode(code) {
    return JSON.stringify(code['jsonCode'].config, null, 2);
  }
  getReactCode(code) {
    const languageCode = code[`reactCode`];
    return languageCode.template;
//     const jsonCode = JSON.stringify(code['jsonCode'].config, null, 2);
//     return `
// var config = ${jsonCode};
// ${languageCode.script || ''}
// ReactDOM.render(${languageCode.template}, document.getElementById('example'))`;
  }

  getVueCode(code) {
    const languageCode = code[`vueCode`];
    return languageCode.template;
//     const jsonCode = JSON.stringify(code['jsonCode'].config, null, 2);
//     let vueTpl = `<div id="example">${languageCode.template}</div>`;
//     let scriptCode = `
// var config = ${jsonCode}
// new Vue({
//   el: '#example',
//   data: {
//     config,
//   }
// });
// `;
//     return `${vueTpl}${scriptCode}`;
  }

  getAngularCode(code) {
    const languageCode = code[`angularCode`];
    return languageCode.template;
  }

  getJsfiddleJsonData(index) {
    const code = this.attrs.codes[index]['jsonCode'];
    code.config.chart.container = 'example';
    const config = JSON.stringify(code.config, null, 2);
    const data = {
      js: `var config = ${config};
Viser.default(config);
      `,
      html: `<script src="${CONS.URL.viser}"></script>
<div id="example"></div>`,
      panel_css: 1,
      panel_js: 3
    };
    return data;
  }


  getJsfiddleVueData(index) {
    const {vueCode, jsonCode} = this.attrs.codes[index];
    const config = JSON.stringify(jsonCode.config, null, 2);
    const data = {
      js: `var config = ${config};
new Vue({
  el: '#example',
  data: {
    config,
  },
});
        `,
      html: `
<script src="${CONS.URL.vue}"></script>
<script src="${CONS.URL.rechartVue}"></script>
<div id="example">${vueCode.template}</div>`,
      panel_css: 1,
      panel_js: 3
    };
    return data;
  }

  getJsfiddleReactData(index) {
    const {reactCode, jsonCode} = this.attrs.codes[index];
    const config = JSON.stringify(jsonCode.config, null, 2);
    const data = {
      js: `
var config = ${config};
${reactCode.script || ''}
ReactDOM.render(${reactCode.template},document.getElementById('example'));`,
      html: `<script src="${CONS.URL.react}"></script>
<script src="${CONS.URL.reactDom}"></script>
<script src="${CONS.URL.browser}"></script>
<script src="${CONS.URL.viser}"></script>
<script src="${CONS.URL.viserReact}"></script>
<div id="example"></div>`,
      panel_css: 1,
      panel_js: 3
    };

    return data;
  }
}


new App().init();


/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(200);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(42)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(41)(undefined);
// imports


// module
exports.push([module.i, ".common-header {\n  height: 60px;\n  line-height: 60px;\n  display: block;\n  outline: 0;\n  list-style: none;\n  color: #666;\n  font-size: 14px;\n  position: relative;\n  background: #00c49f;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1); }\n  .common-header .common-title {\n    float: left;\n    padding-left: 30px;\n    color: #fff;\n    text-decoration: none;\n    font-size: 36px;\n    font-weight: 100;\n    height: 60px;\n    line-height: 60px;\n    display: block;\n    background: #0088fe;\n    width: 200px;\n    box-sizing: border-box; }\n    .common-header .common-title::after {\n      content: ' ';\n      display: block;\n      position: absolute;\n      top: -28px;\n      left: 163px;\n      width: 80px;\n      height: 80px;\n      transform: rotate(-30deg);\n      background: #0088fe;\n      border-radius: 20px; }\n  .common-header .common-header-nav {\n    width: 500px;\n    height: 60px;\n    box-sizing: border-box;\n    padding-top: 13px;\n    float: right;\n    margin-right: 126px; }\n  .common-header .common-header-nav-item {\n    color: white;\n    display: block;\n    width: 130px;\n    height: 34px;\n    line-height: 34px;\n    border-radius: 34px;\n    font-size: 14px;\n    float: right;\n    text-decoration: none;\n    text-align: center;\n    transition: background .3s, color .3s;\n    position: relative;\n    cursor: pointer; }\n    .common-header .common-header-nav-item a {\n      text-decoration: none;\n      color: #fff; }\n    .common-header .common-header-nav-item:hover {\n      background: white;\n      color: #00c49f; }\n      .common-header .common-header-nav-item:hover a,\n      .common-header .common-header-nav-item:hover i {\n        color: #00c49f; }\n\n* {\n  margin: 0;\n  padding: 0; }\n\nbody {\n  overflow-x: hidden; }\n\nul, ol {\n  display: block;\n  list-style-type: none;\n  -webkit-margin-before: 0;\n  -webkit-margin-after: 0;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 0; }\n\na {\n  text-decoration: none; }\n\n.github-link {\n  color: white;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  display: block;\n  float: right;\n  margin-left: 48px; }\n  .github-link .iconfont {\n    height: 29px;\n    width: 29px;\n    overflow: hidden;\n    font-size: 28px; }\n  .github-link .icon-gh {\n    display: none; }\n  .github-link .icon-gh-o {\n    display: block; }\n  .github-link:hover .icon-gh {\n    display: block; }\n  .github-link:hover .icon-gh-o {\n    display: none; }\n\n@font-face {\n  font-family: 'iconfont';\n  /* project id 473307 */\n  src: url(\"//at.alicdn.com/t/font_473307_kle8ui3d448ia4i.eot\");\n  src: url(\"//at.alicdn.com/t/font_473307_kle8ui3d448ia4i.eot?#iefix\") format(\"embedded-opentype\"), url(\"//at.alicdn.com/t/font_473307_kle8ui3d448ia4i.woff\") format(\"woff\"), url(\"//at.alicdn.com/t/font_473307_kle8ui3d448ia4i.ttf\") format(\"truetype\"), url(\"//at.alicdn.com/t/font_473307_kle8ui3d448ia4i.svg#iconfont\") format(\"svg\"); }\n\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.icon-bingtu:before {\n  content: \"\\E600\"; }\n\n.icon-gh:before {\n  content: \"\\E719\"; }\n\n.icon-fuzhi:before {\n  content: \"\\E644\"; }\n\n.icon-relitu:before {\n  content: \"\\E650\"; }\n\n.icon-jizuobiao:before {\n  content: \"\\E830\"; }\n\n.icon-loudoutu:before {\n  content: \"\\E645\"; }\n\n.icon-mianjitu:before {\n  content: \"\\E6E7\"; }\n\n.icon-gh-o:before {\n  content: \"\\EEA9\"; }\n\n.icon-leidatu:before {\n  content: \"\\E626\"; }\n\n.icon-yibiaopan:before {\n  content: \"\\E66C\"; }\n\n.icon-fenmian:before {\n  content: \"\\E6EA\"; }\n\n.icon-zhuzhuangtu:before {\n  content: \"\\E6B4\"; }\n\n.icon-diantu:before {\n  content: \"\\E61E\"; }\n\n.icon-infinite:before {\n  content: \"\\E6CE\"; }\n\n.icon-one:before {\n  content: \"\\E687\"; }\n\n.icon-xiangxiantu:before {\n  content: \"\\E62B\"; }\n\n.icon-ditu:before {\n  content: \"\\E882\"; }\n\n.icon-github:before {\n  content: \"\\E601\"; }\n\n.icon-guanxitu:before {\n  content: \"\\E615\"; }\n\n.icon-down-triangle:before {\n  content: \"\\E610\"; }\n\n.icon-yunxing:before {\n  content: \"\\E66D\"; }\n\n.icon-xianxingtu:before {\n  content: \"\\E660\"; }\n\n.icon-contain:before {\n  content: \"\\E614\"; }\n\n.icon-juzhentu:before {\n  content: \"\\E740\"; }\n\n.icon-gupiaotu:before {\n  content: \"\\E73B\"; }\n\n.icon-meiguitu:before {\n  content: \"\\E60B\"; }\n\n#main-content {\n  position: relative;\n  height: calc(100% - 60px); }\n  #main-content .left-panel {\n    float: left;\n    width: 200px;\n    height: 100%;\n    background: #fff;\n    border-right: 1px solid #ddd;\n    padding-top: 20px;\n    box-sizing: border-box; }\n  #main-content .right-panel {\n    overflow: hidden;\n    height: 100%;\n    padding: 20px;\n    box-sizing: border-box; }\n\n.common-nav-folder {\n  margin-bottom: 20px;\n  padding-left: 30px;\n  line-height: 40px; }\n\n.common-nav-item {\n  cursor: pointer;\n  padding-left: 60px;\n  margin-left: -30px; }\n  .common-nav-item:hover, .common-nav-item.active {\n    background: #edf1f5; }\n\n.common-nav-title {\n  color: #999;\n  font-weight: 100; }\n\n.common-nav-link {\n  color: #666;\n  display: block;\n  width: 100%;\n  height: 34px;\n  line-height: 34px;\n  font-size: 16px;\n  text-transform: capitalize; }\n\n#main-content .case-type {\n  background: #fff;\n  color: #333;\n  margin-bottom: 10px;\n  font-size: 20px;\n  text-transform: capitalize;\n  width: calc(100% - 460px);\n  position: absolute; }\n\n#main-content .case-box {\n  margin-bottom: 10px;\n  background: #fff;\n  position: relative;\n  transition: all .2s ease-in-out; }\n  #main-content .case-box .op {\n    position: absolute;\n    top: 0;\n    right: 15px;\n    z-index: 11;\n    line-height: 28px;\n    color: #666; }\n    #main-content .case-box .op a {\n      cursor: pointer;\n      margin-top: 3px;\n      padding: 3px 16px;\n      display: inline-block;\n      background: #0088fe;\n      border-radius: 4px;\n      font-size: 14px;\n      line-height: 22px;\n      color: #fff; }\n      #main-content .case-box .op a i {\n        font-size: 14px;\n        line-height: 22px;\n        color: #fff; }\n\n#main-content .case-demo {\n  padding: 50px 15px 0 0;\n  width: calc(100% - 460px);\n  border-right: 1px dashed #eee; }\n\n#main-content .case-code {\n  padding: 0 15px;\n  width: 400px; }\n\n#main-content .case-demo,\n#main-content .case-code {\n  display: inline-block;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n  box-sizing: border-box; }\n  #main-content .case-demo .case-code-switch,\n  #main-content .case-code .case-code-switch {\n    width: 100%;\n    height: 40px;\n    position: relative; }\n  #main-content .case-demo .case-code-detail,\n  #main-content .case-code .case-code-detail {\n    display: none;\n    height: calc(100% - 40px);\n    width: 100%;\n    overflow-y: auto;\n    position: relative; }\n    #main-content .case-demo .case-code-detail.active,\n    #main-content .case-code .case-code-detail.active {\n      display: block; }\n    #main-content .case-demo .case-code-detail pre,\n    #main-content .case-code .case-code-detail pre {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0; }\n\n#main-content .case-code-switch {\n  height: 36px;\n  width: 100%;\n  display: block;\n  padding-top: 4px; }\n  #main-content .case-code-switch .case-code-switch-item {\n    float: left;\n    display: block;\n    width: 80px;\n    margin: 0 10px;\n    font-size: 14px;\n    height: 28px;\n    text-align: center;\n    padding-bottom: 2px;\n    color: #999;\n    cursor: pointer; }\n    #main-content .case-code-switch .case-code-switch-item:hover {\n      color: #666; }\n    #main-content .case-code-switch .case-code-switch-item.active, #main-content .case-code-switch .case-code-switch-item.active:hover {\n      color: #0088fe;\n      padding-bottom: 0;\n      border-bottom: 2px solid #0088fe; }\n\n#main-content .case-box.no-code {\n  padding: 15px; }\n", ""]);

// exports


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.2.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( ">tbody", elem )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with computed style
	var valueIsBorderBox,
		styles = getStyles( elem ),
		val = curCSS( elem, name, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Computed unit is not pixels. Stop here and return.
	if ( rnumnonpx.test( val ) ) {
		return val;
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = isBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ name ] );

	// Fall back to offsetWidth/Height when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	if ( val === "auto" ) {
		val = elem[ "offset" + name[ 0 ].toUpperCase() + name.slice( 1 ) ];
	}

	// Normalize "", auto, and prepare for extra
	val = parseFloat( val ) || 0;

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var doc, docElem, rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		doc = elem.ownerDocument;
		docElem = doc.documentElement;
		win = doc.defaultView;

		return {
			top: rect.top + win.pageYOffset - docElem.clientTop,
			left: rect.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( jQuery.isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const URL = {
  react: 'https://unpkg.com/react@15/dist/react.min.js',
  reactDom: 'https://unpkg.com/react-dom@15/dist/react-dom.min.js',
  vue: 'https://viserjs.github.io/lib/vue.min.js',
  browser: 'https://cdn.bootcss.com/babel-core/5.8.38/browser.min.js',
  viser: 'https://unpkg.com/viser@1.0.3/umd/viser.min.js',
  viserReact: 'https://unpkg.com/viser-react@1.0.1/umd/viser-react.min.js',
  rechartVue: 'https://unpkg.com/viser-react@1.0.1/umd/viser-vue.min.js',
};
/* harmony export (immutable) */ __webpack_exports__["URL"] = URL;



/***/ }),

/***/ 203:
/***/ (function(module, exports) {

module.exports = {
  // line: {
  //   cnName: '线性图',
  //   examples: ['example1'],
  //   icon: 'xianxingtu'
  // },
  // area: {
  //   cnName: '面积图',
  //   examples: ['example1'],
  //   icon: 'mianjitu'
  // },
  bar: {
    cnName: '柱状图',
    examples: ['example1'],
    icon: 'zhuzhuangtu'
  },
  // pie: {
  //   cnName: '饼图',
  //   examples: ['example1'],
  //   icon: 'bingtu'
  // },
  // rose: {
  //   cnName: '玫瑰图',
  //   examples: ['example1'],
  //   icon: 'meiguitu'
  // },
  // radial: {
  //   cnName: '玉珏图',
  //   examples: ['example1'],
  //   icon: 'jizuobiao'
  // },
  // scatter: {
  //   cnName: '散点图',
  //   examples: ['example1'],
  //   icon: 'diantu'
  // },
  // radar: {
  //   cnName: '雷达图',
  //   examples: ['example1'],
  //   icon: 'leidatu'
  // },
  // funnel: {
  //   cnName: '漏斗图',
  //   examples: ['example1'],
  //   icon: 'loudoutu'
  // },
  facet: {
    cnName: '分面图',
    examples: ['example1'],
    icon: 'fenmian'
  },
  // sankey: {
  //   cnName: '桑基图',
  //   examples: ['example1'],
  //   icon: 'guanxitu'
  // },
  // treemap: {
  //   cnName: '矩阵图',
  //   examples: ['example1'],
  //   icon: 'juzhentu'
  // },
};


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(77);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "  <li class=\"common-nav-item\" class=\""
    + ((stack1 = __default(__webpack_require__(220)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depths[1] != null ? depths[1].chartType : depths[1]),(data && data.key),{"name":"active","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n    <a class=\"common-nav-link\" href=\"/demo.html?type="
    + alias2(alias1((data && data.key), depth0))
    + "\">\n      <i class=\"iconfont icon-"
    + alias2(alias1((depth0 != null ? depth0.icon : depth0), depth0))
    + "\"></i>\n      "
    + alias2(alias1((data && data.key), depth0))
    + " Chart\n    </a>\n  </li>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.codeConfig : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _handlebarsBase = __webpack_require__(122);

var base = _interopRequireWildcard(_handlebarsBase);

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)

var _handlebarsSafeString = __webpack_require__(217);

var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

var _handlebarsException = __webpack_require__(44);

var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

var _handlebarsUtils = __webpack_require__(24);

var Utils = _interopRequireWildcard(_handlebarsUtils);

var _handlebarsRuntime = __webpack_require__(218);

var runtime = _interopRequireWildcard(_handlebarsRuntime);

var _handlebarsNoConflict = __webpack_require__(219);

var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = _handlebarsSafeString2['default'];
  hb.Exception = _handlebarsException2['default'];
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function (spec) {
    return runtime.template(spec, hb);
  };

  return hb;
}

var inst = create();
inst.create = create;

_handlebarsNoConflict2['default'](inst);

inst['default'] = inst;

exports['default'] = inst;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9oYW5kbGViYXJzLnJ1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OEJBQXNCLG1CQUFtQjs7SUFBN0IsSUFBSTs7Ozs7b0NBSU8sMEJBQTBCOzs7O21DQUMzQix3QkFBd0I7Ozs7K0JBQ3ZCLG9CQUFvQjs7SUFBL0IsS0FBSzs7aUNBQ1Esc0JBQXNCOztJQUFuQyxPQUFPOztvQ0FFSSwwQkFBMEI7Ozs7O0FBR2pELFNBQVMsTUFBTSxHQUFHO0FBQ2hCLE1BQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O0FBRTFDLE9BQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUUsQ0FBQyxVQUFVLG9DQUFhLENBQUM7QUFDM0IsSUFBRSxDQUFDLFNBQVMsbUNBQVksQ0FBQztBQUN6QixJQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNqQixJQUFFLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDOztBQUU3QyxJQUFFLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUNoQixJQUFFLENBQUMsUUFBUSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzNCLFdBQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7R0FDbkMsQ0FBQzs7QUFFRixTQUFPLEVBQUUsQ0FBQztDQUNYOztBQUVELElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUVyQixrQ0FBVyxJQUFJLENBQUMsQ0FBQzs7QUFFakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzs7cUJBRVIsSUFBSSIsImZpbGUiOiJoYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBiYXNlIGZyb20gJy4vaGFuZGxlYmFycy9iYXNlJztcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcbmltcG9ydCBTYWZlU3RyaW5nIGZyb20gJy4vaGFuZGxlYmFycy9zYWZlLXN0cmluZyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vaGFuZGxlYmFycy9leGNlcHRpb24nO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9oYW5kbGViYXJzL3V0aWxzJztcbmltcG9ydCAqIGFzIHJ1bnRpbWUgZnJvbSAnLi9oYW5kbGViYXJzL3J1bnRpbWUnO1xuXG5pbXBvcnQgbm9Db25mbGljdCBmcm9tICcuL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QnO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IFNhZmVTdHJpbmc7XG4gIGhiLkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbiAgaGIuVXRpbHMgPSBVdGlscztcbiAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgaGIuVk0gPSBydW50aW1lO1xuICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufVxuXG5sZXQgaW5zdCA9IGNyZWF0ZSgpO1xuaW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cbm5vQ29uZmxpY3QoaW5zdCk7XG5cbmluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3Q7XG4iXX0=


/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersBlockHelperMissing = __webpack_require__(207);

var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

var _helpersEach = __webpack_require__(208);

var _helpersEach2 = _interopRequireDefault(_helpersEach);

var _helpersHelperMissing = __webpack_require__(209);

var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

var _helpersIf = __webpack_require__(210);

var _helpersIf2 = _interopRequireDefault(_helpersIf);

var _helpersLog = __webpack_require__(211);

var _helpersLog2 = _interopRequireDefault(_helpersLog);

var _helpersLookup = __webpack_require__(212);

var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

var _helpersWith = __webpack_require__(213);

var _helpersWith2 = _interopRequireDefault(_helpersWith);

function registerDefaultHelpers(instance) {
  _helpersBlockHelperMissing2['default'](instance);
  _helpersEach2['default'](instance);
  _helpersHelperMissing2['default'](instance);
  _helpersIf2['default'](instance);
  _helpersLog2['default'](instance);
  _helpersLookup2['default'](instance);
  _helpersWith2['default'](instance);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7eUNBQXVDLGdDQUFnQzs7OzsyQkFDOUMsZ0JBQWdCOzs7O29DQUNQLDBCQUEwQjs7Ozt5QkFDckMsY0FBYzs7OzswQkFDYixlQUFlOzs7OzZCQUNaLGtCQUFrQjs7OzsyQkFDcEIsZ0JBQWdCOzs7O0FBRWxDLFNBQVMsc0JBQXNCLENBQUMsUUFBUSxFQUFFO0FBQy9DLHlDQUEyQixRQUFRLENBQUMsQ0FBQztBQUNyQywyQkFBYSxRQUFRLENBQUMsQ0FBQztBQUN2QixvQ0FBc0IsUUFBUSxDQUFDLENBQUM7QUFDaEMseUJBQVcsUUFBUSxDQUFDLENBQUM7QUFDckIsMEJBQVksUUFBUSxDQUFDLENBQUM7QUFDdEIsNkJBQWUsUUFBUSxDQUFDLENBQUM7QUFDekIsMkJBQWEsUUFBUSxDQUFDLENBQUM7Q0FDeEIiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWdpc3RlckJsb2NrSGVscGVyTWlzc2luZyBmcm9tICcuL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcnO1xuaW1wb3J0IHJlZ2lzdGVyRWFjaCBmcm9tICcuL2hlbHBlcnMvZWFjaCc7XG5pbXBvcnQgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nIGZyb20gJy4vaGVscGVycy9oZWxwZXItbWlzc2luZyc7XG5pbXBvcnQgcmVnaXN0ZXJJZiBmcm9tICcuL2hlbHBlcnMvaWYnO1xuaW1wb3J0IHJlZ2lzdGVyTG9nIGZyb20gJy4vaGVscGVycy9sb2cnO1xuaW1wb3J0IHJlZ2lzdGVyTG9va3VwIGZyb20gJy4vaGVscGVycy9sb29rdXAnO1xuaW1wb3J0IHJlZ2lzdGVyV2l0aCBmcm9tICcuL2hlbHBlcnMvd2l0aCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckRlZmF1bHRIZWxwZXJzKGluc3RhbmNlKSB7XG4gIHJlZ2lzdGVyQmxvY2tIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJFYWNoKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJJZihpbnN0YW5jZSk7XG4gIHJlZ2lzdGVyTG9nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJMb29rdXAoaW5zdGFuY2UpO1xuICByZWdpc3RlcldpdGgoaW5zdGFuY2UpO1xufVxuIl19


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(24);

exports['default'] = function (instance) {
  instance.registerHelper('blockHelperMissing', function (context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if (context === true) {
      return fn(this);
    } else if (context === false || context == null) {
      return inverse(this);
    } else if (_utils.isArray(context)) {
      if (context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
        options = { data: data };
      }

      return fn(context, options);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBc0QsVUFBVTs7cUJBRWpELFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3ZFLFFBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPO1FBQ3pCLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDcEIsYUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakIsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUMvQyxhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QixNQUFNLElBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUMzQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLFlBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLGlCQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCOztBQUVELGVBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2hELE1BQU07QUFDTCxlQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN0QjtLQUNGLE1BQU07QUFDTCxVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLElBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdFLGVBQU8sR0FBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztPQUN4Qjs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDN0I7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJibG9jay1oZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGNyZWF0ZUZyYW1lLCBpc0FycmF5fSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdibG9ja0hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgbGV0IGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZm4odGhpcyk7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0ID09PSBmYWxzZSB8fCBjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGxldCBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5uYW1lKTtcbiAgICAgICAgb3B0aW9ucyA9IHtkYXRhOiBkYXRhfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = __webpack_require__(24);

var _exception = __webpack_require__(44);

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('each', function (context, options) {
    if (!options) {
      throw new _exception2['default']('Must pass iterator to #each');
    }

    var fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = '',
        data = undefined,
        contextPath = undefined;

    if (options.data && options.ids) {
      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    if (options.data) {
      data = _utils.createFrame(options.data);
    }

    function execIteration(field, index, last) {
      if (data) {
        data.key = field;
        data.index = index;
        data.first = index === 0;
        data.last = !!last;

        if (contextPath) {
          data.contextPath = contextPath + field;
        }
      }

      ret = ret + fn(context[field], {
        data: data,
        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
      });
    }

    if (context && typeof context === 'object') {
      if (_utils.isArray(context)) {
        for (var j = context.length; i < j; i++) {
          if (i in context) {
            execIteration(i, i, i === context.length - 1);
          }
        }
      } else {
        var priorKey = undefined;

        for (var key in context) {
          if (context.hasOwnProperty(key)) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array.
            if (priorKey !== undefined) {
              execIteration(priorKey, i - 1);
            }
            priorKey = key;
            i++;
          }
        }
        if (priorKey !== undefined) {
          execIteration(priorKey, i - 1, true);
        }
      }
    }

    if (i === 0) {
      ret = inverse(this);
    }

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQUErRSxVQUFVOzt5QkFDbkUsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksQ0FBQyxPQUFPLEVBQUU7QUFDWixZQUFNLDJCQUFjLDZCQUE2QixDQUFDLENBQUM7S0FDcEQ7O0FBRUQsUUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUU7UUFDZixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU87UUFDekIsQ0FBQyxHQUFHLENBQUM7UUFDTCxHQUFHLEdBQUcsRUFBRTtRQUNSLElBQUksWUFBQTtRQUNKLFdBQVcsWUFBQSxDQUFDOztBQUVoQixRQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixpQkFBVyxHQUFHLHlCQUFrQixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ2pGOztBQUVELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDaEIsVUFBSSxHQUFHLG1CQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQzs7QUFFRCxhQUFTLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtBQUN6QyxVQUFJLElBQUksRUFBRTtBQUNSLFlBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztBQUN6QixZQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7O0FBRW5CLFlBQUksV0FBVyxFQUFFO0FBQ2YsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQ3hDO09BQ0Y7O0FBRUQsU0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzdCLFlBQUksRUFBRSxJQUFJO0FBQ1YsbUJBQVcsRUFBRSxtQkFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7T0FDL0UsQ0FBQyxDQUFDO0tBQ0o7O0FBRUQsUUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQzFDLFVBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNwQixhQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxjQUFJLENBQUMsSUFBSSxPQUFPLEVBQUU7QUFDaEIseUJBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1dBQy9DO1NBQ0Y7T0FDRixNQUFNO0FBQ0wsWUFBSSxRQUFRLFlBQUEsQ0FBQzs7QUFFYixhQUFLLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRTtBQUN2QixjQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Ozs7QUFJL0IsZ0JBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQiwyQkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEM7QUFDRCxvQkFBUSxHQUFHLEdBQUcsQ0FBQztBQUNmLGFBQUMsRUFBRSxDQUFDO1dBQ0w7U0FDRjtBQUNELFlBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQix1QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RDO09BQ0Y7S0FDRjs7QUFFRCxRQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDWCxTQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCOztBQUVELFdBQU8sR0FBRyxDQUFDO0dBQ1osQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoiZWFjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGJsb2NrUGFyYW1zLCBjcmVhdGVGcmFtZSwgaXNBcnJheSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuLi9leGNlcHRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ011c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaCcpO1xuICAgIH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm4sXG4gICAgICAgIGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICByZXQgPSAnJyxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgY29udGV4dFBhdGg7XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICBjb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pICsgJy4nO1xuICAgIH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7IGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7IH1cblxuICAgIGlmIChvcHRpb25zLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4ZWNJdGVyYXRpb24oZmllbGQsIGluZGV4LCBsYXN0KSB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkYXRhLmtleSA9IGZpZWxkO1xuICAgICAgICBkYXRhLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIGRhdGEuZmlyc3QgPSBpbmRleCA9PT0gMDtcbiAgICAgICAgZGF0YS5sYXN0ID0gISFsYXN0O1xuXG4gICAgICAgIGlmIChjb250ZXh0UGF0aCkge1xuICAgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBjb250ZXh0UGF0aCArIGZpZWxkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldCA9IHJldCArIGZuKGNvbnRleHRbZmllbGRdLCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dFtmaWVsZF0sIGZpZWxkXSwgW2NvbnRleHRQYXRoICsgZmllbGQsIG51bGxdKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgICBmb3IgKGxldCBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSBpbiBjb250ZXh0KSB7XG4gICAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcHJpb3JLZXk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGNvbnRleHQpIHtcbiAgICAgICAgICBpZiAoY29udGV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAvLyBXZSdyZSBydW5uaW5nIHRoZSBpdGVyYXRpb25zIG9uZSBzdGVwIG91dCBvZiBzeW5jIHNvIHdlIGNhbiBkZXRlY3RcbiAgICAgICAgICAgIC8vIHRoZSBsYXN0IGl0ZXJhdGlvbiB3aXRob3V0IGhhdmUgdG8gc2NhbiB0aGUgb2JqZWN0IHR3aWNlIGFuZCBjcmVhdGVcbiAgICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG4gICAgICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmlvcktleSA9IGtleTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cbiJdfQ==


/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = __webpack_require__(44);

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('helperMissing', function () /* [args, ]options */{
    if (arguments.length === 1) {
      // A missing field in a {{foo}} construct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozt5QkFBc0IsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsaUNBQWdDO0FBQ3ZFLFFBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O0FBRTFCLGFBQU8sU0FBUyxDQUFDO0tBQ2xCLE1BQU07O0FBRUwsWUFBTSwyQkFBYyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDdkY7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJoZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbigvKiBbYXJncywgXW9wdGlvbnMgKi8pIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ01pc3NpbmcgaGVscGVyOiBcIicgKyBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLm5hbWUgKyAnXCInKTtcbiAgICB9XG4gIH0pO1xufVxuIl19


/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(24);

exports['default'] = function (instance) {
  instance.registerHelper('if', function (conditional, options) {
    if (_utils.isFunction(conditional)) {
      conditional = conditional.call(this);
    }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function (conditional, options) {
    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBa0MsVUFBVTs7cUJBRTdCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVMsV0FBVyxFQUFFLE9BQU8sRUFBRTtBQUMzRCxRQUFJLGtCQUFXLFdBQVcsQ0FBQyxFQUFFO0FBQUUsaUJBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQUU7Ozs7O0FBS3RFLFFBQUksQUFBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsV0FBVyxJQUFLLGVBQVEsV0FBVyxDQUFDLEVBQUU7QUFDdkUsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7R0FDRixDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxXQUFXLEVBQUUsT0FBTyxFQUFFO0FBQy9ELFdBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztHQUN2SCxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJpZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNFbXB0eSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaWYnLCBmdW5jdGlvbihjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbmRpdGlvbmFsKSkgeyBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7IH1cblxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmVuZGVyIHRoZSBwb3NpdGl2ZSBwYXRoIGlmIHRoZSB2YWx1ZSBpcyB0cnV0aHkgYW5kIG5vdCBlbXB0eS5cbiAgICAvLyBUaGUgYGluY2x1ZGVaZXJvYCBvcHRpb24gbWF5IGJlIHNldCB0byB0cmVhdCB0aGUgY29uZHRpb25hbCBhcyBwdXJlbHkgbm90IGVtcHR5IGJhc2VkIG9uIHRoZVxuICAgIC8vIGJlaGF2aW9yIG9mIGlzRW1wdHkuIEVmZmVjdGl2ZWx5IHRoaXMgZGV0ZXJtaW5lcyBpZiAwIGlzIGhhbmRsZWQgYnkgdGhlIHBvc2l0aXZlIHBhdGggb3IgbmVnYXRpdmUuXG4gICAgaWYgKCghb3B0aW9ucy5oYXNoLmluY2x1ZGVaZXJvICYmICFjb25kaXRpb25hbCkgfHwgaXNFbXB0eShjb25kaXRpb25hbCkpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3VubGVzcycsIGZ1bmN0aW9uKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnNbJ2lmJ10uY2FsbCh0aGlzLCBjb25kaXRpb25hbCwge2ZuOiBvcHRpb25zLmludmVyc2UsIGludmVyc2U6IG9wdGlvbnMuZm4sIGhhc2g6IG9wdGlvbnMuaGFzaH0pO1xuICB9KTtcbn1cbiJdfQ==


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('log', function () /* message, options */{
    var args = [undefined],
        options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
      args.push(arguments[i]);
    }

    var level = 1;
    if (options.hash.level != null) {
      level = options.hash.level;
    } else if (options.data && options.data.level != null) {
      level = options.data.level;
    }
    args[0] = level;

    instance.log.apply(instance, args);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsa0NBQWlDO0FBQzlELFFBQUksSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ2xCLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsVUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6Qjs7QUFFRCxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxRQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtBQUM5QixXQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDNUIsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO0FBQ3JELFdBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM1QjtBQUNELFFBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRWhCLFlBQVEsQ0FBQyxHQUFHLE1BQUEsQ0FBWixRQUFRLEVBQVMsSUFBSSxDQUFDLENBQUM7R0FDeEIsQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uKC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi8pIHtcbiAgICBsZXQgYXJncyA9IFt1bmRlZmluZWRdLFxuICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIGxldCBsZXZlbCA9IDE7XG4gICAgaWYgKG9wdGlvbnMuaGFzaC5sZXZlbCAhPSBudWxsKSB7XG4gICAgICBsZXZlbCA9IG9wdGlvbnMuaGFzaC5sZXZlbDtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGEubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmRhdGEubGV2ZWw7XG4gICAgfVxuICAgIGFyZ3NbMF0gPSBsZXZlbDtcblxuICAgIGluc3RhbmNlLmxvZyguLi4gYXJncyk7XG4gIH0pO1xufVxuIl19


/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('lookup', function (obj, field) {
    return obj && obj[field];
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9va3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3JELFdBQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUMxQixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJsb29rdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24ob2JqLCBmaWVsZCkge1xuICAgIHJldHVybiBvYmogJiYgb2JqW2ZpZWxkXTtcbiAgfSk7XG59XG4iXX0=


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(24);

exports['default'] = function (instance) {
  instance.registerHelper('with', function (context, options) {
    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    var fn = options.fn;

    if (!_utils.isEmpty(context)) {
      var data = options.data;
      if (options.data && options.ids) {
        data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
      }

      return fn(context, {
        data: data,
        blockParams: _utils.blockParams([context], [data && data.contextPath])
      });
    } else {
      return options.inverse(this);
    }
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUErRSxVQUFVOztxQkFFMUUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLENBQUMsZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNyQixVQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ3hCLFVBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQy9CLFlBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQ2hGOztBQUVELGFBQU8sRUFBRSxDQUFDLE9BQU8sRUFBRTtBQUNqQixZQUFJLEVBQUUsSUFBSTtBQUNWLG1CQUFXLEVBQUUsbUJBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7T0FDaEUsQ0FBQyxDQUFDO0tBQ0osTUFBTTtBQUNMLGFBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5QjtHQUNGLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6IndpdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcGVuZENvbnRleHRQYXRoLCBibG9ja1BhcmFtcywgY3JlYXRlRnJhbWUsIGlzRW1wdHksIGlzRnVuY3Rpb259IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29udGV4dCkpIHsgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTsgfVxuXG4gICAgbGV0IGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmICghaXNFbXB0eShjb250ZXh0KSkge1xuICAgICAgbGV0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dF0sIFtkYXRhICYmIGRhdGEuY29udGV4dFBhdGhdKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==


/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _decoratorsInline = __webpack_require__(215);

var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

function registerDefaultDecorators(instance) {
  _decoratorsInline2['default'](instance);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Z0NBQTJCLHFCQUFxQjs7OztBQUV6QyxTQUFTLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtBQUNsRCxnQ0FBZSxRQUFRLENBQUMsQ0FBQztDQUMxQiIsImZpbGUiOiJkZWNvcmF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVySW5saW5lIGZyb20gJy4vZGVjb3JhdG9ycy9pbmxpbmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuICByZWdpc3RlcklubGluZShpbnN0YW5jZSk7XG59XG5cbiJdfQ==


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(24);

exports['default'] = function (instance) {
  instance.registerDecorator('inline', function (fn, props, container, options) {
    var ret = fn;
    if (!props.partials) {
      props.partials = {};
      ret = function (context, options) {
        // Create a new partials stack frame prior to exec.
        var original = container.partials;
        container.partials = _utils.extend({}, original, props.partials);
        var ret = fn(context, options);
        container.partials = original;
        return ret;
      };
    }

    props.partials[options.args[0]] = options.fn;

    return ret;
  });
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQXFCLFVBQVU7O3FCQUVoQixVQUFTLFFBQVEsRUFBRTtBQUNoQyxVQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQzNFLFFBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ25CLFdBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFNBQUcsR0FBRyxVQUFTLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0FBRS9CLFlBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDbEMsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxRCxZQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLGlCQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUM5QixlQUFPLEdBQUcsQ0FBQztPQUNaLENBQUM7S0FDSDs7QUFFRCxTQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUU3QyxXQUFPLEdBQUcsQ0FBQztHQUNaLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVyRGVjb3JhdG9yKCdpbmxpbmUnLCBmdW5jdGlvbihmbiwgcHJvcHMsIGNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgIGxldCByZXQgPSBmbjtcbiAgICBpZiAoIXByb3BzLnBhcnRpYWxzKSB7XG4gICAgICBwcm9wcy5wYXJ0aWFscyA9IHt9O1xuICAgICAgcmV0ID0gZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFydGlhbHMgc3RhY2sgZnJhbWUgcHJpb3IgdG8gZXhlYy5cbiAgICAgICAgbGV0IG9yaWdpbmFsID0gY29udGFpbmVyLnBhcnRpYWxzO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBleHRlbmQoe30sIG9yaWdpbmFsLCBwcm9wcy5wYXJ0aWFscyk7XG4gICAgICAgIGxldCByZXQgPSBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3JpZ2luYWw7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHByb3BzLnBhcnRpYWxzW29wdGlvbnMuYXJnc1swXV0gPSBvcHRpb25zLmZuO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG4iXX0=


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(24);

var logger = {
  methodMap: ['debug', 'info', 'warn', 'error'],
  level: 'info',

  // Maps a given level value to the `methodMap` indexes above.
  lookupLevel: function lookupLevel(level) {
    if (typeof level === 'string') {
      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
      if (levelMap >= 0) {
        level = levelMap;
      } else {
        level = parseInt(level, 10);
      }
    }

    return level;
  },

  // Can be overridden in the host environment
  log: function log(level) {
    level = logger.lookupLevel(level);

    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
      var method = logger.methodMap[level];
      if (!console[method]) {
        // eslint-disable-line no-console
        method = 'log';
      }

      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        message[_key - 1] = arguments[_key];
      }

      console[method].apply(console, message); // eslint-disable-line no-console
    }
  }
};

exports['default'] = logger;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUFzQixTQUFTOztBQUUvQixJQUFJLE1BQU0sR0FBRztBQUNYLFdBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztBQUM3QyxPQUFLLEVBQUUsTUFBTTs7O0FBR2IsYUFBVyxFQUFFLHFCQUFTLEtBQUssRUFBRTtBQUMzQixRQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QixVQUFJLFFBQVEsR0FBRyxlQUFRLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUQsVUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO0FBQ2pCLGFBQUssR0FBRyxRQUFRLENBQUM7T0FDbEIsTUFBTTtBQUNMLGFBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO09BQzdCO0tBQ0Y7O0FBRUQsV0FBTyxLQUFLLENBQUM7R0FDZDs7O0FBR0QsS0FBRyxFQUFFLGFBQVMsS0FBSyxFQUFjO0FBQy9CLFNBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVsQyxRQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEVBQUU7QUFDL0UsVUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxVQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFOztBQUNwQixjQUFNLEdBQUcsS0FBSyxDQUFDO09BQ2hCOzt3Q0FQbUIsT0FBTztBQUFQLGVBQU87OztBQVEzQixhQUFPLENBQUMsTUFBTSxPQUFDLENBQWYsT0FBTyxFQUFZLE9BQU8sQ0FBQyxDQUFDO0tBQzdCO0dBQ0Y7Q0FDRixDQUFDOztxQkFFYSxNQUFNIiwiZmlsZSI6ImxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5kZXhPZn0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbihsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbGV2ZWxNYXAgPSBpbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcbiAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH0sXG5cbiAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgLi4ubWVzc2FnZSkge1xuICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWwpIHtcbiAgICAgIGxldCBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7ICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIG1ldGhvZCA9ICdsb2cnO1xuICAgICAgfVxuICAgICAgY29uc29sZVttZXRob2RdKC4uLm1lc3NhZ2UpOyAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjtcbiJdfQ==


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Build out our basic SafeString type


exports.__esModule = true;
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
  return '' + this.string;
};

exports['default'] = SafeString;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDMUIsTUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDdEI7O0FBRUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBVztBQUN2RSxTQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0NBQ3pCLENBQUM7O3FCQUVhLFVBQVUiLCJmaWxlIjoic2FmZS1zdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FmZVN0cmluZztcbiJdfQ==


/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utils = __webpack_require__(24);

var Utils = _interopRequireWildcard(_utils);

var _exception = __webpack_require__(44);

var _exception2 = _interopRequireDefault(_exception);

var _base = __webpack_require__(122);

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = _base.COMPILER_REVISION;

  if (compilerRevision !== currentRevision) {
    if (compilerRevision < currentRevision) {
      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
    }
  }
}

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new _exception2['default']('No environment passed to template');
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
  }

  templateSpec.main.decorator = templateSpec.main_d;

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as psuedo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
      if (options.ids) {
        options.ids[0] = true;
      }
    }

    partial = env.VM.resolvePartial.call(this, partial, context, options);
    var result = env.VM.invokePartial.call(this, partial, context, options);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, options);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
  }

  // Just add water
  var container = {
    strict: function strict(obj, name) {
      if (!(name in obj)) {
        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
      }
      return obj[name];
    },
    lookup: function lookup(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        if (depths[i] && depths[i][name] != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function fn(i) {
      var ret = templateSpec[i];
      ret.decorator = templateSpec[i + '_d'];
      return ret;
    },

    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },

    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    merge: function merge(param, common) {
      var obj = param || common;

      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }

      return obj;
    },
    // An empty object to use as replacement for null-contexts
    nullContext: Object.seal({}),

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  function ret(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = undefined,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      if (options.depths) {
        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
      } else {
        depths = [context];
      }
    }

    function main(context /*, options*/) {
      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
    }
    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
    return main(context, options);
  }
  ret.isTop = true;

  ret._setup = function (options) {
    if (!options.partial) {
      container.helpers = container.merge(options.helpers, env.helpers);

      if (templateSpec.usePartial) {
        container.partials = container.merge(options.partials, env.partials);
      }
      if (templateSpec.usePartial || templateSpec.useDecorators) {
        container.decorators = container.merge(options.decorators, env.decorators);
      }
    } else {
      container.helpers = options.helpers;
      container.partials = options.partials;
      container.decorators = options.decorators;
    }
  };

  ret._child = function (i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new _exception2['default']('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new _exception2['default']('must pass parent depths');
    }

    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  function prog(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var currentDepths = depths;
    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
      currentDepths = [context].concat(depths);
    }

    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
  }

  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

function resolvePartial(partial, context, options) {
  if (!partial) {
    if (options.name === '@partial-block') {
      partial = options.data['partial-block'];
    } else {
      partial = options.partials[options.name];
    }
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

function invokePartial(partial, context, options) {
  // Use the current closure context to save the partial-block if this partial
  var currentPartialBlock = options.data && options.data['partial-block'];
  options.partial = true;
  if (options.ids) {
    options.data.contextPath = options.ids[0] || options.data.contextPath;
  }

  var partialBlock = undefined;
  if (options.fn && options.fn !== noop) {
    (function () {
      options.data = _base.createFrame(options.data);
      // Wrapper function to get access to currentPartialBlock from the closure
      var fn = options.fn;
      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        // Restore the partial-block from the closure for the execution of the block
        // i.e. the part inside the block of the partial call.
        options.data = _base.createFrame(options.data);
        options.data['partial-block'] = currentPartialBlock;
        return fn(context, options);
      };
      if (fn.partials) {
        options.partials = Utils.extend({}, options.partials, fn.partials);
      }
    })();
  }

  if (partial === undefined && partialBlock) {
    partial = partialBlock;
  }

  if (partial === undefined) {
    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}

function noop() {
  return '';
}

function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? _base.createFrame(data) : {};
    data.root = context;
  }
  return data;
}

function executeDecorators(fn, prog, container, depths, data, blockParams) {
  if (fn.decorator) {
    var props = {};
    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
    Utils.extend(prog, props);
  }
  return prog;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQXVCLFNBQVM7O0lBQXBCLEtBQUs7O3lCQUNLLGFBQWE7Ozs7b0JBQzhCLFFBQVE7O0FBRWxFLFNBQVMsYUFBYSxDQUFDLFlBQVksRUFBRTtBQUMxQyxNQUFNLGdCQUFnQixHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUN2RCxlQUFlLDBCQUFvQixDQUFDOztBQUUxQyxNQUFJLGdCQUFnQixLQUFLLGVBQWUsRUFBRTtBQUN4QyxRQUFJLGdCQUFnQixHQUFHLGVBQWUsRUFBRTtBQUN0QyxVQUFNLGVBQWUsR0FBRyx1QkFBaUIsZUFBZSxDQUFDO1VBQ25ELGdCQUFnQixHQUFHLHVCQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBQzVELFlBQU0sMkJBQWMseUZBQXlGLEdBQ3ZHLHFEQUFxRCxHQUFHLGVBQWUsR0FBRyxtREFBbUQsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNoSyxNQUFNOztBQUVMLFlBQU0sMkJBQWMsd0ZBQXdGLEdBQ3RHLGlEQUFpRCxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNuRjtHQUNGO0NBQ0Y7O0FBRU0sU0FBUyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTs7QUFFMUMsTUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNSLFVBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztHQUMxRDtBQUNELE1BQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO0FBQ3ZDLFVBQU0sMkJBQWMsMkJBQTJCLEdBQUcsT0FBTyxZQUFZLENBQUMsQ0FBQztHQUN4RTs7QUFFRCxjQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDOzs7O0FBSWxELEtBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFNUMsV0FBUyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN2RCxRQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDaEIsYUFBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEQsVUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQ2YsZUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7T0FDdkI7S0FDRjs7QUFFRCxXQUFPLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RFLFFBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFeEUsUUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7QUFDakMsYUFBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN6RixZQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzNEO0FBQ0QsUUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ2xCLFVBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNsQixZQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CLGFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUMsY0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUM1QixrQkFBTTtXQUNQOztBQUVELGVBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QztBQUNELGNBQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQzNCO0FBQ0QsYUFBTyxNQUFNLENBQUM7S0FDZixNQUFNO0FBQ0wsWUFBTSwyQkFBYyxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRywwREFBMEQsQ0FBQyxDQUFDO0tBQ2pIO0dBQ0Y7OztBQUdELE1BQUksU0FBUyxHQUFHO0FBQ2QsVUFBTSxFQUFFLGdCQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDMUIsVUFBSSxFQUFFLElBQUksSUFBSSxHQUFHLENBQUEsQUFBQyxFQUFFO0FBQ2xCLGNBQU0sMkJBQWMsR0FBRyxHQUFHLElBQUksR0FBRyxtQkFBbUIsR0FBRyxHQUFHLENBQUMsQ0FBQztPQUM3RDtBQUNELGFBQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xCO0FBQ0QsVUFBTSxFQUFFLGdCQUFTLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFDN0IsVUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUMxQixXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVCLFlBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDeEMsaUJBQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO09BQ0Y7S0FDRjtBQUNELFVBQU0sRUFBRSxnQkFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ2pDLGFBQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDO0tBQ3hFOztBQUVELG9CQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7QUFDeEMsaUJBQWEsRUFBRSxvQkFBb0I7O0FBRW5DLE1BQUUsRUFBRSxZQUFTLENBQUMsRUFBRTtBQUNkLFVBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixTQUFHLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDdkMsYUFBTyxHQUFHLENBQUM7S0FDWjs7QUFFRCxZQUFRLEVBQUUsRUFBRTtBQUNaLFdBQU8sRUFBRSxpQkFBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7QUFDbkUsVUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7VUFDakMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsVUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLFdBQVcsSUFBSSxtQkFBbUIsRUFBRTtBQUN4RCxzQkFBYyxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO09BQzNGLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRTtBQUMxQixzQkFBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7T0FDOUQ7QUFDRCxhQUFPLGNBQWMsQ0FBQztLQUN2Qjs7QUFFRCxRQUFJLEVBQUUsY0FBUyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQzNCLGFBQU8sS0FBSyxJQUFJLEtBQUssRUFBRSxFQUFFO0FBQ3ZCLGFBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO09BQ3ZCO0FBQ0QsYUFBTyxLQUFLLENBQUM7S0FDZDtBQUNELFNBQUssRUFBRSxlQUFTLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDN0IsVUFBSSxHQUFHLEdBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQzs7QUFFMUIsVUFBSSxLQUFLLElBQUksTUFBTSxJQUFLLEtBQUssS0FBSyxNQUFNLEFBQUMsRUFBRTtBQUN6QyxXQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ3ZDOztBQUVELGFBQU8sR0FBRyxDQUFDO0tBQ1o7O0FBRUQsZUFBVyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOztBQUU1QixRQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJO0FBQ2pCLGdCQUFZLEVBQUUsWUFBWSxDQUFDLFFBQVE7R0FDcEMsQ0FBQzs7QUFFRixXQUFTLEdBQUcsQ0FBQyxPQUFPLEVBQWdCO1FBQWQsT0FBTyx5REFBRyxFQUFFOztBQUNoQyxRQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDOztBQUV4QixPQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BCLFFBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUU7QUFDNUMsVUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDaEM7QUFDRCxRQUFJLE1BQU0sWUFBQTtRQUNOLFdBQVcsR0FBRyxZQUFZLENBQUMsY0FBYyxHQUFHLEVBQUUsR0FBRyxTQUFTLENBQUM7QUFDL0QsUUFBSSxZQUFZLENBQUMsU0FBUyxFQUFFO0FBQzFCLFVBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNsQixjQUFNLEdBQUcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7T0FDM0YsTUFBTTtBQUNMLGNBQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO09BQ3BCO0tBQ0Y7O0FBRUQsYUFBUyxJQUFJLENBQUMsT0FBTyxnQkFBZTtBQUNsQyxhQUFPLEVBQUUsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDckg7QUFDRCxRQUFJLEdBQUcsaUJBQWlCLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztBQUN0RyxXQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7R0FDL0I7QUFDRCxLQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs7QUFFakIsS0FBRyxDQUFDLE1BQU0sR0FBRyxVQUFTLE9BQU8sRUFBRTtBQUM3QixRQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtBQUNwQixlQUFTLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRWxFLFVBQUksWUFBWSxDQUFDLFVBQVUsRUFBRTtBQUMzQixpQkFBUyxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO09BQ3RFO0FBQ0QsVUFBSSxZQUFZLENBQUMsVUFBVSxJQUFJLFlBQVksQ0FBQyxhQUFhLEVBQUU7QUFDekQsaUJBQVMsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztPQUM1RTtLQUNGLE1BQU07QUFDTCxlQUFTLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDcEMsZUFBUyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO0FBQ3RDLGVBQVMsQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztLQUMzQztHQUNGLENBQUM7O0FBRUYsS0FBRyxDQUFDLE1BQU0sR0FBRyxVQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtBQUNsRCxRQUFJLFlBQVksQ0FBQyxjQUFjLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDL0MsWUFBTSwyQkFBYyx3QkFBd0IsQ0FBQyxDQUFDO0tBQy9DO0FBQ0QsUUFBSSxZQUFZLENBQUMsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3JDLFlBQU0sMkJBQWMseUJBQXlCLENBQUMsQ0FBQztLQUNoRDs7QUFFRCxXQUFPLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztHQUNqRixDQUFDO0FBQ0YsU0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtBQUM1RixXQUFTLElBQUksQ0FBQyxPQUFPLEVBQWdCO1FBQWQsT0FBTyx5REFBRyxFQUFFOztBQUNqQyxRQUFJLGFBQWEsR0FBRyxNQUFNLENBQUM7QUFDM0IsUUFBSSxNQUFNLElBQUksT0FBTyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQU8sS0FBSyxTQUFTLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUEsQUFBQyxFQUFFO0FBQ2hHLG1CQUFhLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDMUM7O0FBRUQsV0FBTyxFQUFFLENBQUMsU0FBUyxFQUNmLE9BQU8sRUFDUCxTQUFTLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQ3JDLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUNwQixXQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUN4RCxhQUFhLENBQUMsQ0FBQztHQUNwQjs7QUFFRCxNQUFJLEdBQUcsaUJBQWlCLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQzs7QUFFekUsTUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDakIsTUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDeEMsTUFBSSxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsSUFBSSxDQUFDLENBQUM7QUFDNUMsU0FBTyxJQUFJLENBQUM7Q0FDYjs7QUFFTSxTQUFTLGNBQWMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN4RCxNQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1osUUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLGdCQUFnQixFQUFFO0FBQ3JDLGFBQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQ3pDLE1BQU07QUFDTCxhQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUM7R0FDRixNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTs7QUFFekMsV0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7QUFDdkIsV0FBTyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7R0FDckM7QUFDRCxTQUFPLE9BQU8sQ0FBQztDQUNoQjs7QUFFTSxTQUFTLGFBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTs7QUFFdkQsTUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDMUUsU0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDdkIsTUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQ2YsV0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztHQUN2RTs7QUFFRCxNQUFJLFlBQVksWUFBQSxDQUFDO0FBQ2pCLE1BQUksT0FBTyxDQUFDLEVBQUUsSUFBSSxPQUFPLENBQUMsRUFBRSxLQUFLLElBQUksRUFBRTs7QUFDckMsYUFBTyxDQUFDLElBQUksR0FBRyxrQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXpDLFVBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFDcEIsa0JBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLFNBQVMsbUJBQW1CLENBQUMsT0FBTyxFQUFnQjtZQUFkLE9BQU8seURBQUcsRUFBRTs7OztBQUkvRixlQUFPLENBQUMsSUFBSSxHQUFHLGtCQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QyxlQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLG1CQUFtQixDQUFDO0FBQ3BELGVBQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztPQUM3QixDQUFDO0FBQ0YsVUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0FBQ2YsZUFBTyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztPQUNwRTs7R0FDRjs7QUFFRCxNQUFJLE9BQU8sS0FBSyxTQUFTLElBQUksWUFBWSxFQUFFO0FBQ3pDLFdBQU8sR0FBRyxZQUFZLENBQUM7R0FDeEI7O0FBRUQsTUFBSSxPQUFPLEtBQUssU0FBUyxFQUFFO0FBQ3pCLFVBQU0sMkJBQWMsY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUMsQ0FBQztHQUM1RSxNQUFNLElBQUksT0FBTyxZQUFZLFFBQVEsRUFBRTtBQUN0QyxXQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7R0FDbEM7Q0FDRjs7QUFFTSxTQUFTLElBQUksR0FBRztBQUFFLFNBQU8sRUFBRSxDQUFDO0NBQUU7O0FBRXJDLFNBQVMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDL0IsTUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLE1BQU0sSUFBSSxJQUFJLENBQUEsQUFBQyxFQUFFO0FBQzlCLFFBQUksR0FBRyxJQUFJLEdBQUcsa0JBQVksSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ3JDLFFBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO0dBQ3JCO0FBQ0QsU0FBTyxJQUFJLENBQUM7Q0FDYjs7QUFFRCxTQUFTLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0FBQ3pFLE1BQUksRUFBRSxDQUFDLFNBQVMsRUFBRTtBQUNoQixRQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDZixRQUFJLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDNUYsU0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7R0FDM0I7QUFDRCxTQUFPLElBQUksQ0FBQztDQUNiIiwiZmlsZSI6InJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBVdGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi9leGNlcHRpb24nO1xuaW1wb3J0IHsgQ09NUElMRVJfUkVWSVNJT04sIFJFVklTSU9OX0NIQU5HRVMsIGNyZWF0ZUZyYW1lIH0gZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmV2aXNpb24oY29tcGlsZXJJbmZvKSB7XG4gIGNvbnN0IGNvbXBpbGVyUmV2aXNpb24gPSBjb21waWxlckluZm8gJiYgY29tcGlsZXJJbmZvWzBdIHx8IDEsXG4gICAgICAgIGN1cnJlbnRSZXZpc2lvbiA9IENPTVBJTEVSX1JFVklTSU9OO1xuXG4gIGlmIChjb21waWxlclJldmlzaW9uICE9PSBjdXJyZW50UmV2aXNpb24pIHtcbiAgICBpZiAoY29tcGlsZXJSZXZpc2lvbiA8IGN1cnJlbnRSZXZpc2lvbikge1xuICAgICAgY29uc3QgcnVudGltZVZlcnNpb25zID0gUkVWSVNJT05fQ0hBTkdFU1tjdXJyZW50UmV2aXNpb25dLFxuICAgICAgICAgICAgY29tcGlsZXJWZXJzaW9ucyA9IFJFVklTSU9OX0NIQU5HRVNbY29tcGlsZXJSZXZpc2lvbl07XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhbiBvbGRlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICtcbiAgICAgICAgICAgICdQbGVhc2UgdXBkYXRlIHlvdXIgcHJlY29tcGlsZXIgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgcnVudGltZVZlcnNpb25zICsgJykgb3IgZG93bmdyYWRlIHlvdXIgcnVudGltZSB0byBhbiBvbGRlciB2ZXJzaW9uICgnICsgY29tcGlsZXJWZXJzaW9ucyArICcpLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2UgdGhlIGVtYmVkZGVkIHZlcnNpb24gaW5mbyBzaW5jZSB0aGUgcnVudGltZSBkb2Vzbid0IGtub3cgYWJvdXQgdGhpcyByZXZpc2lvbiB5ZXRcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGEgbmV3ZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArXG4gICAgICAgICAgICAnUGxlYXNlIHVwZGF0ZSB5b3VyIHJ1bnRpbWUgdG8gYSBuZXdlciB2ZXJzaW9uICgnICsgY29tcGlsZXJJbmZvWzFdICsgJykuJyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMsIGVudikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoIWVudikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ05vIGVudmlyb25tZW50IHBhc3NlZCB0byB0ZW1wbGF0ZScpO1xuICB9XG4gIGlmICghdGVtcGxhdGVTcGVjIHx8ICF0ZW1wbGF0ZVNwZWMubWFpbikge1xuICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1Vua25vd24gdGVtcGxhdGUgb2JqZWN0OiAnICsgdHlwZW9mIHRlbXBsYXRlU3BlYyk7XG4gIH1cblxuICB0ZW1wbGF0ZVNwZWMubWFpbi5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWMubWFpbl9kO1xuXG4gIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG4gIC8vIGZvciBleHRlcm5hbCB1c2VycyB0byBvdmVycmlkZSB0aGVzZSBhcyBwc3VlZG8tc3VwcG9ydGVkIEFQSXMuXG4gIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cbiAgZnVuY3Rpb24gaW52b2tlUGFydGlhbFdyYXBwZXIocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAgIGNvbnRleHQgPSBVdGlscy5leHRlbmQoe30sIGNvbnRleHQsIG9wdGlvbnMuaGFzaCk7XG4gICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgb3B0aW9ucy5pZHNbMF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhcnRpYWwgPSBlbnYuVk0ucmVzb2x2ZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcbiAgICBsZXQgcmVzdWx0ID0gZW52LlZNLmludm9rZVBhcnRpYWwuY2FsbCh0aGlzLCBwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKTtcblxuICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiBlbnYuY29tcGlsZSkge1xuICAgICAgb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdID0gZW52LmNvbXBpbGUocGFydGlhbCwgdGVtcGxhdGVTcGVjLmNvbXBpbGVyT3B0aW9ucywgZW52KTtcbiAgICAgIHJlc3VsdCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXShjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5pbmRlbnQpIHtcbiAgICAgICAgbGV0IGxpbmVzID0gcmVzdWx0LnNwbGl0KCdcXG4nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpbmVzW2ldICYmIGkgKyAxID09PSBsKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsaW5lc1tpXSA9IG9wdGlvbnMuaW5kZW50ICsgbGluZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0ID0gbGluZXMuam9pbignXFxuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgY29tcGlsZWQgd2hlbiBydW5uaW5nIGluIHJ1bnRpbWUtb25seSBtb2RlJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gSnVzdCBhZGQgd2F0ZXJcbiAgbGV0IGNvbnRhaW5lciA9IHtcbiAgICBzdHJpY3Q6IGZ1bmN0aW9uKG9iaiwgbmFtZSkge1xuICAgICAgaWYgKCEobmFtZSBpbiBvYmopKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ1wiJyArIG5hbWUgKyAnXCIgbm90IGRlZmluZWQgaW4gJyArIG9iaik7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqW25hbWVdO1xuICAgIH0sXG4gICAgbG9va3VwOiBmdW5jdGlvbihkZXB0aHMsIG5hbWUpIHtcbiAgICAgIGNvbnN0IGxlbiA9IGRlcHRocy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChkZXB0aHNbaV0gJiYgZGVwdGhzW2ldW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZGVwdGhzW2ldW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBsYW1iZGE6IGZ1bmN0aW9uKGN1cnJlbnQsIGNvbnRleHQpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgY3VycmVudCA9PT0gJ2Z1bmN0aW9uJyA/IGN1cnJlbnQuY2FsbChjb250ZXh0KSA6IGN1cnJlbnQ7XG4gICAgfSxcblxuICAgIGVzY2FwZUV4cHJlc3Npb246IFV0aWxzLmVzY2FwZUV4cHJlc3Npb24sXG4gICAgaW52b2tlUGFydGlhbDogaW52b2tlUGFydGlhbFdyYXBwZXIsXG5cbiAgICBmbjogZnVuY3Rpb24oaSkge1xuICAgICAgbGV0IHJldCA9IHRlbXBsYXRlU3BlY1tpXTtcbiAgICAgIHJldC5kZWNvcmF0b3IgPSB0ZW1wbGF0ZVNwZWNbaSArICdfZCddO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuXG4gICAgcHJvZ3JhbXM6IFtdLFxuICAgIHByb2dyYW06IGZ1bmN0aW9uKGksIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICAgIGxldCBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0sXG4gICAgICAgICAgZm4gPSB0aGlzLmZuKGkpO1xuICAgICAgaWYgKGRhdGEgfHwgZGVwdGhzIHx8IGJsb2NrUGFyYW1zIHx8IGRlY2xhcmVkQmxvY2tQYXJhbXMpIHtcbiAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbiwgZGF0YSwgZGVjbGFyZWRCbG9ja1BhcmFtcywgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgICB9IGVsc2UgaWYgKCFwcm9ncmFtV3JhcHBlcikge1xuICAgICAgICBwcm9ncmFtV3JhcHBlciA9IHRoaXMucHJvZ3JhbXNbaV0gPSB3cmFwUHJvZ3JhbSh0aGlzLCBpLCBmbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJvZ3JhbVdyYXBwZXI7XG4gICAgfSxcblxuICAgIGRhdGE6IGZ1bmN0aW9uKHZhbHVlLCBkZXB0aCkge1xuICAgICAgd2hpbGUgKHZhbHVlICYmIGRlcHRoLS0pIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5fcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgbWVyZ2U6IGZ1bmN0aW9uKHBhcmFtLCBjb21tb24pIHtcbiAgICAgIGxldCBvYmogPSBwYXJhbSB8fCBjb21tb247XG5cbiAgICAgIGlmIChwYXJhbSAmJiBjb21tb24gJiYgKHBhcmFtICE9PSBjb21tb24pKSB7XG4gICAgICAgIG9iaiA9IFV0aWxzLmV4dGVuZCh7fSwgY29tbW9uLCBwYXJhbSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICAvLyBBbiBlbXB0eSBvYmplY3QgdG8gdXNlIGFzIHJlcGxhY2VtZW50IGZvciBudWxsLWNvbnRleHRzXG4gICAgbnVsbENvbnRleHQ6IE9iamVjdC5zZWFsKHt9KSxcblxuICAgIG5vb3A6IGVudi5WTS5ub29wLFxuICAgIGNvbXBpbGVySW5mbzogdGVtcGxhdGVTcGVjLmNvbXBpbGVyXG4gIH07XG5cbiAgZnVuY3Rpb24gcmV0KGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCBkYXRhID0gb3B0aW9ucy5kYXRhO1xuXG4gICAgcmV0Ll9zZXR1cChvcHRpb25zKTtcbiAgICBpZiAoIW9wdGlvbnMucGFydGlhbCAmJiB0ZW1wbGF0ZVNwZWMudXNlRGF0YSkge1xuICAgICAgZGF0YSA9IGluaXREYXRhKGNvbnRleHQsIGRhdGEpO1xuICAgIH1cbiAgICBsZXQgZGVwdGhzLFxuICAgICAgICBibG9ja1BhcmFtcyA9IHRlbXBsYXRlU3BlYy51c2VCbG9ja1BhcmFtcyA/IFtdIDogdW5kZWZpbmVkO1xuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzKSB7XG4gICAgICBpZiAob3B0aW9ucy5kZXB0aHMpIHtcbiAgICAgICAgZGVwdGhzID0gY29udGV4dCAhPSBvcHRpb25zLmRlcHRoc1swXSA/IFtjb250ZXh0XS5jb25jYXQob3B0aW9ucy5kZXB0aHMpIDogb3B0aW9ucy5kZXB0aHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZXB0aHMgPSBbY29udGV4dF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFpbihjb250ZXh0LyosIG9wdGlvbnMqLykge1xuICAgICAgcmV0dXJuICcnICsgdGVtcGxhdGVTcGVjLm1haW4oY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgICB9XG4gICAgbWFpbiA9IGV4ZWN1dGVEZWNvcmF0b3JzKHRlbXBsYXRlU3BlYy5tYWluLCBtYWluLCBjb250YWluZXIsIG9wdGlvbnMuZGVwdGhzIHx8IFtdLCBkYXRhLCBibG9ja1BhcmFtcyk7XG4gICAgcmV0dXJuIG1haW4oY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cbiAgcmV0LmlzVG9wID0gdHJ1ZTtcblxuICByZXQuX3NldHVwID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsKSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLmhlbHBlcnMsIGVudi5oZWxwZXJzKTtcblxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsKSB7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLnBhcnRpYWxzLCBlbnYucGFydGlhbHMpO1xuICAgICAgfVxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsIHx8IHRlbXBsYXRlU3BlYy51c2VEZWNvcmF0b3JzKSB7XG4gICAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMuZGVjb3JhdG9ycywgZW52LmRlY29yYXRvcnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcbiAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9wdGlvbnMucGFydGlhbHM7XG4gICAgICBjb250YWluZXIuZGVjb3JhdG9ycyA9IG9wdGlvbnMuZGVjb3JhdG9ycztcbiAgICB9XG4gIH07XG5cbiAgcmV0Ll9jaGlsZCA9IGZ1bmN0aW9uKGksIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zICYmICFibG9ja1BhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignbXVzdCBwYXNzIGJsb2NrIHBhcmFtcycpO1xuICAgIH1cbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocyAmJiAhZGVwdGhzKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdtdXN0IHBhc3MgcGFyZW50IGRlcHRocycpO1xuICAgIH1cblxuICAgIHJldHVybiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIHRlbXBsYXRlU3BlY1tpXSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gIH07XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIGZuLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gIGZ1bmN0aW9uIHByb2coY29udGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGN1cnJlbnREZXB0aHMgPSBkZXB0aHM7XG4gICAgaWYgKGRlcHRocyAmJiBjb250ZXh0ICE9IGRlcHRoc1swXSAmJiAhKGNvbnRleHQgPT09IGNvbnRhaW5lci5udWxsQ29udGV4dCAmJiBkZXB0aHNbMF0gPT09IG51bGwpKSB7XG4gICAgICBjdXJyZW50RGVwdGhzID0gW2NvbnRleHRdLmNvbmNhdChkZXB0aHMpO1xuICAgIH1cblxuICAgIHJldHVybiBmbihjb250YWluZXIsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsXG4gICAgICAgIG9wdGlvbnMuZGF0YSB8fCBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtcyAmJiBbb3B0aW9ucy5ibG9ja1BhcmFtc10uY29uY2F0KGJsb2NrUGFyYW1zKSxcbiAgICAgICAgY3VycmVudERlcHRocyk7XG4gIH1cblxuICBwcm9nID0gZXhlY3V0ZURlY29yYXRvcnMoZm4sIHByb2csIGNvbnRhaW5lciwgZGVwdGhzLCBkYXRhLCBibG9ja1BhcmFtcyk7XG5cbiAgcHJvZy5wcm9ncmFtID0gaTtcbiAgcHJvZy5kZXB0aCA9IGRlcHRocyA/IGRlcHRocy5sZW5ndGggOiAwO1xuICBwcm9nLmJsb2NrUGFyYW1zID0gZGVjbGFyZWRCbG9ja1BhcmFtcyB8fCAwO1xuICByZXR1cm4gcHJvZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVQYXJ0aWFsKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgaWYgKCFwYXJ0aWFsKSB7XG4gICAgaWYgKG9wdGlvbnMubmFtZSA9PT0gJ0BwYXJ0aWFsLWJsb2NrJykge1xuICAgICAgcGFydGlhbCA9IG9wdGlvbnMuZGF0YVsncGFydGlhbC1ibG9jayddO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdO1xuICAgIH1cbiAgfSBlbHNlIGlmICghcGFydGlhbC5jYWxsICYmICFvcHRpb25zLm5hbWUpIHtcbiAgICAvLyBUaGlzIGlzIGEgZHluYW1pYyBwYXJ0aWFsIHRoYXQgcmV0dXJuZWQgYSBzdHJpbmdcbiAgICBvcHRpb25zLm5hbWUgPSBwYXJ0aWFsO1xuICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW3BhcnRpYWxdO1xuICB9XG4gIHJldHVybiBwYXJ0aWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIC8vIFVzZSB0aGUgY3VycmVudCBjbG9zdXJlIGNvbnRleHQgdG8gc2F2ZSB0aGUgcGFydGlhbC1ibG9jayBpZiB0aGlzIHBhcnRpYWxcbiAgY29uc3QgY3VycmVudFBhcnRpYWxCbG9jayA9IG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgb3B0aW9ucy5wYXJ0aWFsID0gdHJ1ZTtcbiAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoID0gb3B0aW9ucy5pZHNbMF0gfHwgb3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoO1xuICB9XG5cbiAgbGV0IHBhcnRpYWxCbG9jaztcbiAgaWYgKG9wdGlvbnMuZm4gJiYgb3B0aW9ucy5mbiAhPT0gbm9vcCkge1xuICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgLy8gV3JhcHBlciBmdW5jdGlvbiB0byBnZXQgYWNjZXNzIHRvIGN1cnJlbnRQYXJ0aWFsQmxvY2sgZnJvbSB0aGUgY2xvc3VyZVxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm47XG4gICAgcGFydGlhbEJsb2NrID0gb3B0aW9ucy5kYXRhWydwYXJ0aWFsLWJsb2NrJ10gPSBmdW5jdGlvbiBwYXJ0aWFsQmxvY2tXcmFwcGVyKGNvbnRleHQsIG9wdGlvbnMgPSB7fSkge1xuXG4gICAgICAvLyBSZXN0b3JlIHRoZSBwYXJ0aWFsLWJsb2NrIGZyb20gdGhlIGNsb3N1cmUgZm9yIHRoZSBleGVjdXRpb24gb2YgdGhlIGJsb2NrXG4gICAgICAvLyBpLmUuIHRoZSBwYXJ0IGluc2lkZSB0aGUgYmxvY2sgb2YgdGhlIHBhcnRpYWwgY2FsbC5cbiAgICAgIG9wdGlvbnMuZGF0YSA9IGNyZWF0ZUZyYW1lKG9wdGlvbnMuZGF0YSk7XG4gICAgICBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IGN1cnJlbnRQYXJ0aWFsQmxvY2s7XG4gICAgICByZXR1cm4gZm4oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBpZiAoZm4ucGFydGlhbHMpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHMgPSBVdGlscy5leHRlbmQoe30sIG9wdGlvbnMucGFydGlhbHMsIGZuLnBhcnRpYWxzKTtcbiAgICB9XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkICYmIHBhcnRpYWxCbG9jaykge1xuICAgIHBhcnRpYWwgPSBwYXJ0aWFsQmxvY2s7XG4gIH1cblxuICBpZiAocGFydGlhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGZvdW5kJyk7XG4gIH0gZWxzZSBpZiAocGFydGlhbCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgcmV0dXJuIHBhcnRpYWwoY29udGV4dCwgb3B0aW9ucyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7IHJldHVybiAnJzsgfVxuXG5mdW5jdGlvbiBpbml0RGF0YShjb250ZXh0LCBkYXRhKSB7XG4gIGlmICghZGF0YSB8fCAhKCdyb290JyBpbiBkYXRhKSkge1xuICAgIGRhdGEgPSBkYXRhID8gY3JlYXRlRnJhbWUoZGF0YSkgOiB7fTtcbiAgICBkYXRhLnJvb3QgPSBjb250ZXh0O1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBleGVjdXRlRGVjb3JhdG9ycyhmbiwgcHJvZywgY29udGFpbmVyLCBkZXB0aHMsIGRhdGEsIGJsb2NrUGFyYW1zKSB7XG4gIGlmIChmbi5kZWNvcmF0b3IpIHtcbiAgICBsZXQgcHJvcHMgPSB7fTtcbiAgICBwcm9nID0gZm4uZGVjb3JhdG9yKHByb2csIHByb3BzLCBjb250YWluZXIsIGRlcHRocyAmJiBkZXB0aHNbMF0sIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgIFV0aWxzLmV4dGVuZChwcm9nLCBwcm9wcyk7XG4gIH1cbiAgcmV0dXJuIHByb2c7XG59XG4iXX0=


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* global window */


exports.__esModule = true;

exports['default'] = function (Handlebars) {
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function () {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
    return Handlebars;
  };
};

module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3FCQUNlLFVBQVMsVUFBVSxFQUFFOztBQUVsQyxNQUFJLElBQUksR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxHQUFHLE1BQU07TUFDdEQsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O0FBRWxDLFlBQVUsQ0FBQyxVQUFVLEdBQUcsWUFBVztBQUNqQyxRQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO0FBQ2xDLFVBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO0tBQy9CO0FBQ0QsV0FBTyxVQUFVLENBQUM7R0FDbkIsQ0FBQztDQUNIIiwiZmlsZSI6Im5vLWNvbmZsaWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHdpbmRvdyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oSGFuZGxlYmFycykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBsZXQgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuICAgICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcbiAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuICAgIH1cbiAgICByZXR1cm4gSGFuZGxlYmFycztcbiAgfTtcbn1cbiJdfQ==

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(78)))

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = function (a, b) {
  return a === b ? 'active' : '';
}


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(77);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"case-box no-code\">\n      Coming soon...\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"case-list\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.noCodes : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(77);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"case-box\">\n  <div class=\"case-type\">\n    <h3>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\n    <div class=\"op\">\n      <a class=\"run\" data-index=\""
    + alias4(((helper = (helper = helpers.i || (depth0 != null ? depth0.i : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"i","hash":{},"data":data}) : helper)))
    + "\">\n        <i class=\"iconfont icon-yunxing\"></i>\n        Try\n      </a>\n    </div>\n  </div>\n  <div class=\"case-demo\">\n    <div id=\"example"
    + alias4(((helper = (helper = helpers.i || (depth0 != null ? depth0.i : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"i","hash":{},"data":data}) : helper)))
    + "\"></div>\n  </div>\n  <div class=\"case-code\">\n    <ul class=\"case-code-switch\">\n      <li data-lang=\"react\" class=\"case-code-switch-item"
    + alias4(((helper = (helper = helpers.reactClass || (depth0 != null ? depth0.reactClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reactClass","hash":{},"data":data}) : helper)))
    + "\">React</li>\n      <li data-lang=\"vue\" class=\"case-code-switch-item"
    + alias4(((helper = (helper = helpers.vueClass || (depth0 != null ? depth0.vueClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vueClass","hash":{},"data":data}) : helper)))
    + "\">Vue</li>\n      <li data-lang=\"angular\" class=\"case-code-switch-item"
    + alias4(((helper = (helper = helpers.angularClass || (depth0 != null ? depth0.angularClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"angularClass","hash":{},"data":data}) : helper)))
    + "\">Angular</li>\n    </ul>\n    <pre class=\"case-code-detail"
    + alias4(((helper = (helper = helpers.reactClass || (depth0 != null ? depth0.reactClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reactClass","hash":{},"data":data}) : helper)))
    + "\" id=\"react-"
    + alias4(((helper = (helper = helpers.i || (depth0 != null ? depth0.i : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"i","hash":{},"data":data}) : helper)))
    + "\"></pre>\n    <pre class=\"case-code-detail"
    + alias4(((helper = (helper = helpers.vueClass || (depth0 != null ? depth0.vueClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"vueClass","hash":{},"data":data}) : helper)))
    + "\" id=\"vue-"
    + alias4(((helper = (helper = helpers.i || (depth0 != null ? depth0.i : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"i","hash":{},"data":data}) : helper)))
    + "\"></pre>\n    <pre class=\"case-code-detail"
    + alias4(((helper = (helper = helpers.angularClass || (depth0 != null ? depth0.angularClass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"angularClass","hash":{},"data":data}) : helper)))
    + "\" id=\"angular-"
    + alias4(((helper = (helper = helpers.i || (depth0 != null ? depth0.i : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"i","hash":{},"data":data}) : helper)))
    + "\"></pre>\n  </div>\n</div>\n";
},"useData":true});

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bar/example1/json.js": 224,
	"./facet/example1/json.js": 226
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 223;

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const allData = __webpack_require__(225);
const { data, dataMapping, dataPre, scale } = allData;

const config = {
  data: data,
  dataPre: {
    transform: [
    // {
    //   exchangeType: 'type-3',
    //   fields: ['country', 'year', 'value'],
    // },
    {
      type: 'percent',
      field: 'value',
      dimension: 'country',
      groupBy: ['year'],
      as: 'percent'
    }]
  },
  dataMapping: dataMapping,
  scale: scale,
  axis: true,
  tooltip: true,
  series: [{
    quickType: 'stackBar',
    style: {
      stroke: '#fff',
      lineWidth: 1
    }
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};
/* harmony export (immutable) */ __webpack_exports__["config"] = config;



/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.data = [
    { country: 'Europe', year: '1750', value: 163 },
    { country: 'Europe', year: '1800', value: 203 },
    { country: 'Europe', year: '1850', value: 276 },
    { country: 'Europe', year: '1900', value: 408 },
    { country: 'Europe', year: '1950', value: 547 },
    { country: 'Europe', year: '1999', value: 729 },
    { country: 'Europe', year: '2050', value: 628 },
    { country: 'Europe', year: '2100', value: 828 },
    { country: 'Asia', year: '1750', value: 502 },
    { country: 'Asia', year: '1800', value: 635 },
    { country: 'Asia', year: '1850', value: 809 },
    { country: 'Asia', year: '1900', value: 947 },
    { country: 'Asia', year: '1950', value: 1402 },
    { country: 'Asia', year: '1999', value: 3634 },
    { country: 'Asia', year: '2050', value: 5268 },
    { country: 'Asia', year: '2100', value: 7268 }
];
exports.data1 = {
    'country': ['Europe', 'Europe', 'Europe', 'Asia', 'Asia', 'Asia'],
    'year': ['1750', '1800', '1850', '1750', '1800', '1850'],
    'value': [163, 203, 276, 502, 635, 809],
};
exports.data2 = [
    ['country', 'Europe', 'Europe', 'Europe', 'Asia', 'Asia', 'Asia'],
    ['year', '1750', '1800', '1850', '1750', '1800', '1850'],
    ['value', 163, 203, 276, 502, 635, 809],
];
exports.data3 = [
    ['Europe', 'Europe', 'Europe', 'Europe', 'Europe', 'Europe', 'Europe', 'Europe', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia'],
    ['1750', '1800', '1850', '1900', '1950', '1999', '2050', '2100', '1750', '1800', '1850', '1900', '1950', '1999', '2050', '2100'],
    [163, 203, 276, 408, 547, 729, 628, 828, 502, 635, 809, 947, 1402, 3634, 5268, 7268],
];
exports.dataPre = {
    transform: {
        type: 'percent',
        field: 'value',
        dimension: 'country',
        groupBy: ['year'],
        as: 'percent'
    }
};
exports.dataMapping = [{
        dataKey: 'year',
        mark: 'column',
    }, {
        dataKey: 'percent',
        mark: 'row',
    }, {
        dataKey: 'country',
        mark: 'color',
    }];
exports.scale = [{
        dataKey: 'percent',
        min: 0,
        formatter: '.2%',
    }];


/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const allData = __webpack_require__(227);
const { chartData } = allData;

const config = {
  data: chartData,
  tooltip: true,
  dataMapping: [{
    dataKey: 'carat',
    mark: 'column',
  }, {
    dataKey: 'price',
    mark: 'row',
  }, {
    dataKey: 'cut',
    mark: 'color',
  }],
  scale: [{
    dataKey: 'carat',
    sync: true
  }, {
    dataKey: 'price',
    sync: true,
    tickCount: 3
  }, {
    dataKey: 'cut',
    sync: true,
  }],
  facet: {
    type: 'rect',
    fields: ['cut', 'clarity'],
    views: {
      axis: true,
      tooltip: true,
      series: {
        quickType: 'point',
        opacity: 0.3,
        size: 3,
      }
    }
  },
  chart: {
    container: 'mount',
    forceFit: true,
    height: 600,
  },
};
/* harmony export (immutable) */ __webpack_exports__["config"] = config;



/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.chartData = [{ "name": 14513, "carat": 1.35, "cut": "Ideal", "color": "J", "clarity": "VS2", "depth": 61.4, "table": 57, "price": 5862, "x": 7.1, "y": 7.13, "z": 4.37 }, { "name": 28685, "carat": 0.3, "cut": "Good", "color": "G", "clarity": "VVS1", "depth": 64, "table": 57, "price": 678, "x": 4.23, "y": 4.27, "z": 2.72 }, { "name": 50368, "carat": 0.75, "cut": "Ideal", "color": "F", "clarity": "SI2", "depth": 59.2, "table": 60, "price": 2248, "x": 5.87, "y": 5.92, "z": 3.49 }, { "name": 7721, "carat": 0.26, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 60.9, "table": 57, "price": 580, "x": 4.13, "y": 4.11, "z": 2.51 }, { "name": 31082, "carat": 0.33, "cut": "Premium", "color": "H", "clarity": "VVS1", "depth": 61.4, "table": 59, "price": 752, "x": 4.42, "y": 4.44, "z": 2.72 }, { "name": 26429, "carat": 1.52, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 62.4, "table": 55, "price": 15959, "x": 7.3, "y": 7.39, "z": 4.58 }, { "name": 35900, "carat": 0.32, "cut": "Ideal", "color": "G", "clarity": "IF", "depth": 61.3, "table": 54, "price": 918, "x": 4.41, "y": 4.47, "z": 2.72 }, { "name": 27015, "carat": 2.25, "cut": "Ideal", "color": "I", "clarity": "SI2", "depth": 62.4, "table": 57, "price": 17143, "x": 8.39, "y": 8.32, "z": 5.21 }, { "name": 30760, "carat": 0.25, "cut": "Premium", "color": "E", "clarity": "VVS2", "depth": 62.5, "table": 59, "price": 740, "x": 4.04, "y": 4.02, "z": 2.52 }, { "name": 2205, "carat": 1.02, "cut": "Premium", "color": "H", "clarity": "I1", "depth": 62.5, "table": 60, "price": 3141, "x": 6.39, "y": 6.41, "z": 4 }, { "name": 25584, "carat": 2.01, "cut": "Very-Good", "color": "H", "clarity": "SI2", "depth": 62.9, "table": 55, "price": 14426, "x": 8.03, "y": 8.09, "z": 5.07 }, { "name": 16788, "carat": 0.9, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 61.2, "table": 56, "price": 6689, "x": 6.2, "y": 6.26, "z": 3.81 }, { "name": 2468, "carat": 0.71, "cut": "Ideal", "color": "D", "clarity": "VS1", "depth": 62.2, "table": 55, "price": 3192, "x": 5.71, "y": 5.74, "z": 3.56 }, { "name": 6508, "carat": 1.01, "cut": "Very-Good", "color": "G", "clarity": "SI1", "depth": 62.3, "table": 59, "price": 4064, "x": 6.34, "y": 6.37, "z": 3.96 }, { "name": 44895, "carat": 0.5, "cut": "Very-Good", "color": "E", "clarity": "VS2", "depth": 63.4, "table": 58, "price": 1629, "x": 5.06, "y": 5.04, "z": 3.2 }, { "name": 20653, "carat": 1.26, "cut": "Ideal", "color": "H", "clarity": "VVS2", "depth": 61.8, "table": 56, "price": 8941, "x": 6.9, "y": 6.93, "z": 4.28 }, { "name": 38210, "carat": 0.43, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 61.7, "table": 54, "price": 1016, "x": 4.9, "y": 4.86, "z": 3.01 }, { "name": 13359, "carat": 0.24, "cut": "Very-Good", "color": "E", "clarity": "VS2", "depth": 62.1, "table": 59, "price": 419, "x": 3.98, "y": 4.01, "z": 2.48 }, { "name": 3260, "carat": 0.7, "cut": "Very-Good", "color": "E", "clarity": "VS1", "depth": 60.7, "table": 57, "price": 3358, "x": 5.72, "y": 5.75, "z": 3.48 }, { "name": 46272, "carat": 0.54, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 61.8, "table": 54, "price": 1754, "x": 5.22, "y": 5.24, "z": 3.23 }, { "name": 23875, "carat": 2.03, "cut": "Very-Good", "color": "J", "clarity": "SI2", "depth": 61.7, "table": 61, "price": 11968, "x": 8.04, "y": 8.18, "z": 5 }, { "name": 17434, "carat": 1.41, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 61.1, "table": 56, "price": 6988, "x": 7.19, "y": 7.15, "z": 4.38 }, { "name": 25, "carat": 0.31, "cut": "Very-Good", "color": "J", "clarity": "SI1", "depth": 58.1, "table": 62, "price": 353, "x": 4.44, "y": 4.47, "z": 2.59 }, { "name": 22130, "carat": 1.5, "cut": "Very-Good", "color": "I", "clarity": "VS1", "depth": 62.2, "table": 59, "price": 10164, "x": 7.27, "y": 7.3, "z": 4.53 }, { "name": 53295, "carat": 0.3, "cut": "Very-Good", "color": "I", "clarity": "VVS1", "depth": 60.5, "table": 60, "price": 552, "x": 4.32, "y": 4.34, "z": 2.62 }, { "name": 44404, "carat": 0.55, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 61.4, "table": 56, "price": 1584, "x": 5.28, "y": 5.31, "z": 3.25 }, { "name": 40387, "carat": 0.42, "cut": "Ideal", "color": "D", "clarity": "VVS2", "depth": 61.7, "table": 57, "price": 1132, "x": 4.8, "y": 4.82, "z": 2.97 }, { "name": 11416, "carat": 1.5, "cut": "Fair", "color": "H", "clarity": "SI2", "depth": 66, "table": 64, "price": 5000, "x": 7.1, "y": 6.97, "z": 4.64 }, { "name": 47315, "carat": 0.23, "cut": "Very-Good", "color": "E", "clarity": "VVS2", "depth": 61.5, "table": 59, "price": 530, "x": 3.95, "y": 3.98, "z": 2.44 }, { "name": 5724, "carat": 0.25, "cut": "Very-Good", "color": "E", "clarity": "VVS2", "depth": 63, "table": 55, "price": 575, "x": 4, "y": 4.03, "z": 2.53 }, { "name": 30624, "carat": 0.3, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 60.2, "table": 60, "price": 447, "x": 4.32, "y": 4.35, "z": 2.61 }, { "name": 9803, "carat": 0.9, "cut": "Very-Good", "color": "D", "clarity": "VS2", "depth": 63, "table": 62, "price": 4668, "x": 6.06, "y": 6.13, "z": 3.84 }, { "name": 46497, "carat": 0.5, "cut": "Very-Good", "color": "F", "clarity": "VVS2", "depth": 60.4, "table": 61, "price": 1778, "x": 5.12, "y": 5.14, "z": 3.1 }, { "name": 45329, "carat": 0.32, "cut": "Premium", "color": "E", "clarity": "SI1", "depth": 61.2, "table": 58, "price": 524, "x": 4.37, "y": 4.42, "z": 2.69 }, { "name": 22424, "carat": 1.57, "cut": "Very-Good", "color": "H", "clarity": "SI1", "depth": 59.6, "table": 58, "price": 10447, "x": 7.61, "y": 7.65, "z": 4.55 }, { "name": 3143, "carat": 0.7, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 61.6, "table": 56, "price": 3330, "x": 5.7, "y": 5.72, "z": 3.52 }, { "name": 6815, "carat": 1.01, "cut": "Fair", "color": "E", "clarity": "SI2", "depth": 64.7, "table": 55, "price": 4118, "x": 6.37, "y": 6.3, "z": 4.1 }, { "name": 5947, "carat": 0.72, "cut": "Ideal", "color": "E", "clarity": "VS1", "depth": 61.1, "table": 57, "price": 3947, "x": 5.78, "y": 5.81, "z": 3.54 }, { "name": 9084, "carat": 1.07, "cut": "Premium", "color": "G", "clarity": "SI2", "depth": 62, "table": 59, "price": 4523, "x": 6.54, "y": 6.5, "z": 4.04 }, { "name": 36793, "carat": 0.34, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 62.6, "table": 57, "price": 956, "x": 4.47, "y": 4.45, "z": 2.79 }, { "name": 4943, "carat": 0.76, "cut": "Ideal", "color": "D", "clarity": "SI1", "depth": 62.3, "table": 55, "price": 3732, "x": 5.81, "y": 5.84, "z": 3.63 }, { "name": 52525, "carat": 0.8, "cut": "Ideal", "color": "F", "clarity": "SI2", "depth": 62.4, "table": 57, "price": 2529, "x": 5.92, "y": 5.97, "z": 3.71 }, { "name": 46417, "carat": 0.55, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 61, "table": 56, "price": 1768, "x": 5.31, "y": 5.28, "z": 3.23 }, { "name": 35997, "carat": 0.42, "cut": "Very-Good", "color": "G", "clarity": "VS1", "depth": 59.4, "table": 59, "price": 921, "x": 4.86, "y": 4.9, "z": 2.9 }, { "name": 25539, "carat": 1.5, "cut": "Very-Good", "color": "G", "clarity": "VVS1", "depth": 63.1, "table": 62, "price": 14361, "x": 7.25, "y": 7.23, "z": 4.57 }, { "name": 2361, "carat": 0.9, "cut": "Ideal", "color": "J", "clarity": "VS1", "depth": 62.5, "table": 55, "price": 3175, "x": 6.18, "y": 6.14, "z": 3.85 }, { "name": 23147, "carat": 1.02, "cut": "Premium", "color": "E", "clarity": "VVS1", "depth": 61.5, "table": 59, "price": 11163, "x": 6.46, "y": 6.41, "z": 3.96 }, { "name": 39674, "carat": 0.42, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 62.1, "table": 56, "price": 1087, "x": 4.84, "y": 4.79, "z": 2.99 }, { "name": 42947, "carat": 0.3, "cut": "Very-Good", "color": "F", "clarity": "SI2", "depth": 63.4, "table": 56, "price": 506, "x": 4.29, "y": 4.26, "z": 2.71 }, { "name": 23762, "carat": 1.51, "cut": "Premium", "color": "F", "clarity": "SI1", "depth": 61.4, "table": 58, "price": 11817, "x": 7.43, "y": 7.35, "z": 4.54 }, { "name": 47355, "carat": 0.5, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 63.8, "table": 54, "price": 1845, "x": 5.07, "y": 5.05, "z": 3.23 }, { "name": 35598, "carat": 0.31, "cut": "Ideal", "color": "H", "clarity": "VVS1", "depth": 62.7, "table": 54, "price": 907, "x": 4.38, "y": 4.33, "z": 2.73 }, { "name": 43086, "carat": 0.61, "cut": "Ideal", "color": "I", "clarity": "VS2", "depth": 62, "table": 54, "price": 1380, "x": 5.44, "y": 5.49, "z": 3.39 }, { "name": 15471, "carat": 1.58, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 59.1, "table": 59, "price": 6194, "x": 7.68, "y": 7.59, "z": 4.51 }, { "name": 29072, "carat": 0.34, "cut": "Premium", "color": "D", "clarity": "VS2", "depth": 59.3, "table": 59, "price": 687, "x": 4.55, "y": 4.59, "z": 2.71 }, { "name": 20868, "carat": 1.27, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 61.2, "table": 59, "price": 9086, "x": 7.02, "y": 6.97, "z": 4.28 }, { "name": 51424, "carat": 0.85, "cut": "Good", "color": "J", "clarity": "VS1", "depth": 63.6, "table": 57, "price": 2372, "x": 6.01, "y": 5.94, "z": 3.8 }, { "name": 27320, "carat": 2.18, "cut": "Premium", "color": "G", "clarity": "SI2", "depth": 61.9, "table": 60, "price": 17841, "x": 8.24, "y": 8.29, "z": 5.12 }, { "name": 1128, "carat": 0.73, "cut": "Premium", "color": "G", "clarity": "VVS2", "depth": 62.2, "table": 56, "price": 2919, "x": 5.79, "y": 5.75, "z": 3.59 }, { "name": 18182, "carat": 1.2, "cut": "Very-Good", "color": "G", "clarity": "VS2", "depth": 63.1, "table": 57, "price": 7371, "x": 6.69, "y": 6.74, "z": 4.24 }, { "name": 669, "carat": 0.77, "cut": "Premium", "color": "E", "clarity": "SI1", "depth": 62.9, "table": 59, "price": 2846, "x": 5.84, "y": 5.79, "z": 3.66 }, { "name": 47240, "carat": 0.51, "cut": "Ideal", "color": "E", "clarity": "VS1", "depth": 62, "table": 57, "price": 1841, "x": 5.11, "y": 5.15, "z": 3.18 }, { "name": 14256, "carat": 1, "cut": "Ideal", "color": "D", "clarity": "SI1", "depth": 60.6, "table": 56, "price": 5775, "x": 6.5, "y": 6.54, "z": 3.95 }, { "name": 20118, "carat": 1.31, "cut": "Ideal", "color": "H", "clarity": "VS1", "depth": 61.5, "table": 55, "price": 8583, "x": 7.05, "y": 7.02, "z": 4.33 }, { "name": 53884, "carat": 0.7, "cut": "Very-Good", "color": "G", "clarity": "VS1", "depth": 61.4, "table": 55, "price": 2748, "x": 5.7, "y": 5.74, "z": 3.51 }, { "name": 48410, "carat": 0.72, "cut": "Very-Good", "color": "H", "clarity": "SI2", "depth": 62.9, "table": 57, "price": 1970, "x": 5.64, "y": 5.68, "z": 3.56 }, { "name": 48807, "carat": 0.75, "cut": "Ideal", "color": "J", "clarity": "VS2", "depth": 62.3, "table": 57, "price": 2025, "x": 5.84, "y": 5.81, "z": 3.63 }, { "name": 42132, "carat": 0.53, "cut": "Ideal", "color": "F", "clarity": "SI2", "depth": 63, "table": 54, "price": 1279, "x": 5.24, "y": 5.19, "z": 3.29 }, { "name": 25596, "carat": 1.7, "cut": "Good", "color": "G", "clarity": "VS1", "depth": 63.5, "table": 56, "price": 14445, "x": 7.53, "y": 7.64, "z": 4.82 }, { "name": 23434, "carat": 1.62, "cut": "Very-Good", "color": "H", "clarity": "VS2", "depth": 59.6, "table": 59, "price": 11427, "x": 7.59, "y": 7.67, "z": 4.55 }, { "name": 20160, "carat": 1.21, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 62.6, "table": 56, "price": 8616, "x": 6.77, "y": 6.81, "z": 4.25 }, { "name": 2174, "carat": 0.73, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 62.9, "table": 56, "price": 3135, "x": 5.71, "y": 5.77, "z": 3.61 }, { "name": 23377, "carat": 0.33, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 61.4, "table": 57, "price": 631, "x": 4.48, "y": 4.45, "z": 2.74 }, { "name": 14592, "carat": 1.1, "cut": "Ideal", "color": "H", "clarity": "VS2", "depth": 61.3, "table": 56, "price": 5888, "x": 6.64, "y": 6.67, "z": 4.08 }, { "name": 11074, "carat": 1.13, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 62.7, "table": 57, "price": 4922, "x": 6.62, "y": 6.65, "z": 4.16 }, { "name": 36627, "carat": 0.24, "cut": "Very-Good", "color": "D", "clarity": "VVS2", "depth": 61.9, "table": 58, "price": 478, "x": 4.02, "y": 4.03, "z": 2.49 }, { "name": 8533, "carat": 0.9, "cut": "Ideal", "color": "H", "clarity": "VS1", "depth": 62.2, "table": 58, "price": 4428, "x": 6.14, "y": 6.17, "z": 3.83 }, { "name": 2420, "carat": 0.91, "cut": "Fair", "color": "H", "clarity": "SI1", "depth": 64.8, "table": 57, "price": 3180, "x": 6.12, "y": 6.07, "z": 3.95 }, { "name": 21758, "carat": 1.53, "cut": "Very-Good", "color": "I", "clarity": "VS1", "depth": 59.3, "table": 58, "price": 9823, "x": 7.5, "y": 7.54, "z": 4.46 }, { "name": 9029, "carat": 1.06, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 60.1, "table": 59, "price": 4516, "x": 6.58, "y": 6.67, "z": 3.98 }, { "name": 53870, "carat": 0.75, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 62.3, "table": 57, "price": 2744, "x": 5.82, "y": 5.77, "z": 3.61 }, { "name": 25628, "carat": 2.5, "cut": "Ideal", "color": "J", "clarity": "SI2", "depth": 64, "table": 55, "price": 14502, "x": 8.56, "y": 8.48, "z": 5.46 }, { "name": 20051, "carat": 0.31, "cut": "Premium", "color": "G", "clarity": "VS1", "depth": 61.2, "table": 60, "price": 625, "x": 4.37, "y": 4.39, "z": 2.68 }, { "name": 26772, "carat": 2.06, "cut": "Very-Good", "color": "F", "clarity": "SI2", "depth": 61.5, "table": 56, "price": 16603, "x": 8.15, "y": 8.18, "z": 5.02 }, { "name": 38208, "carat": 0.43, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 61.8, "table": 56, "price": 1016, "x": 4.87, "y": 4.84, "z": 3 }, { "name": 17039, "carat": 1.3, "cut": "Ideal", "color": "I", "clarity": "VS1", "depth": 62.1, "table": 57, "price": 6806, "x": 6.98, "y": 7.04, "z": 4.35 }, { "name": 35184, "carat": 0.31, "cut": "Ideal", "color": "G", "clarity": "IF", "depth": 61.7, "table": 55, "price": 891, "x": 4.36, "y": 4.39, "z": 2.7 }, { "name": 29861, "carat": 0.3, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 61.5, "table": 55, "price": 710, "x": 4.3, "y": 4.35, "z": 2.66 }, { "name": 2592, "carat": 1, "cut": "Very-Good", "color": "I", "clarity": "SI2", "depth": 62.4, "table": 63, "price": 3217, "x": 6.35, "y": 6.44, "z": 3.99 }, { "name": 51705, "carat": 0.7, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 61.2, "table": 56, "price": 2400, "x": 5.72, "y": 5.78, "z": 3.52 }, { "name": 16984, "carat": 1.25, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 62.2, "table": 57, "price": 6783, "x": 6.91, "y": 6.85, "z": 4.28 }, { "name": 18724, "carat": 1.75, "cut": "Premium", "color": "I", "clarity": "SI1", "depth": 60.8, "table": 58, "price": 7644, "x": 7.83, "y": 7.79, "z": 4.75 }, { "name": 12270, "carat": 1, "cut": "Good", "color": "H", "clarity": "VS2", "depth": 56.9, "table": 63, "price": 5208, "x": 6.6, "y": 6.57, "z": 3.75 }, { "name": 34355, "carat": 0.37, "cut": "Very-Good", "color": "F", "clarity": "VS1", "depth": 58.6, "table": 65, "price": 863, "x": 4.68, "y": 4.71, "z": 2.75 }, { "name": 1996, "carat": 0.52, "cut": "Ideal", "color": "E", "clarity": "VVS1", "depth": 61.8, "table": 55, "price": 3097, "x": 5.19, "y": 5.2, "z": 3.21 }, { "name": 39442, "carat": 0.41, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 62.4, "table": 54, "price": 1076, "x": 4.78, "y": 4.74, "z": 2.97 }, { "name": 32035, "carat": 0.32, "cut": "Ideal", "color": "E", "clarity": "VVS2", "depth": 61.3, "table": 57, "price": 779, "x": 4.39, "y": 4.42, "z": 2.7 }, { "name": 1257, "carat": 0.73, "cut": "Premium", "color": "D", "clarity": "VS2", "depth": 60.9, "table": 59, "price": 2947, "x": 5.82, "y": 5.77, "z": 3.53 }, { "name": 35751, "carat": 0.3, "cut": "Premium", "color": "D", "clarity": "VS2", "depth": 62.9, "table": 58, "price": 911, "x": 4.26, "y": 4.23, "z": 2.67 }, { "name": 17748, "carat": 1.12, "cut": "Ideal", "color": "D", "clarity": "SI1", "depth": 61.2, "table": 58, "price": 7145, "x": 6.65, "y": 6.68, "z": 4.08 }, { "name": 52350, "carat": 0.82, "cut": "Premium", "color": "H", "clarity": "SI2", "depth": 59.5, "table": 62, "price": 2499, "x": 6.13, "y": 6.07, "z": 3.63 }, { "name": 12512, "carat": 1.01, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 61.9, "table": 57, "price": 5260, "x": 6.42, "y": 6.35, "z": 3.95 }, { "name": 30836, "carat": 0.33, "cut": "Premium", "color": "H", "clarity": "VS1", "depth": 59.2, "table": 58, "price": 743, "x": 4.55, "y": 4.5, "z": 2.68 }, { "name": 17939, "carat": 1.21, "cut": "Very-Good", "color": "H", "clarity": "VS1", "depth": 62.3, "table": 58, "price": 7246, "x": 6.71, "y": 6.74, "z": 4.19 }, { "name": 53151, "carat": 0.7, "cut": "Ideal", "color": "I", "clarity": "SI1", "depth": 61.6, "table": 56, "price": 2623, "x": 5.69, "y": 5.71, "z": 3.51 }, { "name": 21427, "carat": 1.5, "cut": "Ideal", "color": "I", "clarity": "VS1", "depth": 62.8, "table": 57, "price": 9533, "x": 7.24, "y": 7.28, "z": 4.56 }, { "name": 4025, "carat": 0.73, "cut": "Ideal", "color": "F", "clarity": "VVS2", "depth": 61.7, "table": 54, "price": 3524, "x": 5.76, "y": 5.82, "z": 3.57 }, { "name": 10997, "carat": 1.17, "cut": "Good", "color": "H", "clarity": "SI2", "depth": 63.8, "table": 58, "price": 4914, "x": 6.73, "y": 6.57, "z": 4.24 }, { "name": 37380, "carat": 0.4, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 62.4, "table": 56, "price": 982, "x": 4.64, "y": 4.68, "z": 2.91 }, { "name": 32301, "carat": 0.32, "cut": "Ideal", "color": "D", "clarity": "SI2", "depth": 61.7, "table": 55, "price": 454, "x": 4.39, "y": 4.42, "z": 2.72 }, { "name": 5986, "carat": 0.71, "cut": "Premium", "color": "D", "clarity": "VVS1", "depth": 58.8, "table": 58, "price": 3952, "x": 5.89, "y": 5.81, "z": 3.44 }, { "name": 7062, "carat": 0.33, "cut": "Premium", "color": "I", "clarity": "VVS2", "depth": 61, "table": 59, "price": 579, "x": 4.41, "y": 4.44, "z": 2.7 }, { "name": 6488, "carat": 0.96, "cut": "Premium", "color": "G", "clarity": "SI2", "depth": 61.1, "table": 59, "price": 4059, "x": 6.32, "y": 6.28, "z": 3.85 }, { "name": 10508, "carat": 1.02, "cut": "Ideal", "color": "D", "clarity": "SI1", "depth": 62.1, "table": 53, "price": 4798, "x": 6.43, "y": 6.38, "z": 3.98 }, { "name": 1143, "carat": 0.71, "cut": "Very-Good", "color": "E", "clarity": "VS2", "depth": 63.3, "table": 59, "price": 2922, "x": 5.62, "y": 5.66, "z": 3.57 }, { "name": 40005, "carat": 0.41, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 63.2, "table": 57, "price": 1107, "x": 4.76, "y": 4.74, "z": 3 }, { "name": 42200, "carat": 0.56, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 61.1, "table": 61, "price": 1287, "x": 5.31, "y": 5.29, "z": 3.24 }, { "name": 46075, "carat": 0.5, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 61.4, "table": 59, "price": 1736, "x": 5.12, "y": 5.1, "z": 3.14 }, { "name": 41028, "carat": 0.41, "cut": "Ideal", "color": "E", "clarity": "VVS2", "depth": 61.1, "table": 56, "price": 1187, "x": 4.8, "y": 4.85, "z": 2.95 }, { "name": 7732, "carat": 0.3, "cut": "Very-Good", "color": "G", "clarity": "VS1", "depth": 62.6, "table": 56, "price": 581, "x": 4.29, "y": 4.31, "z": 2.69 }, { "name": 20659, "carat": 1.17, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 61.7, "table": 55, "price": 8947, "x": 6.74, "y": 6.77, "z": 4.17 }, { "name": 42320, "carat": 0.41, "cut": "Ideal", "color": "D", "clarity": "VVS2", "depth": 62.3, "table": 57, "price": 1295, "x": 4.74, "y": 4.76, "z": 2.96 }, { "name": 502, "carat": 0.7, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 61.5, "table": 59, "price": 2822, "x": 5.73, "y": 5.68, "z": 3.51 }, { "name": 5786, "carat": 0.72, "cut": "Very-Good", "color": "E", "clarity": "VVS1", "depth": 61.2, "table": 58, "price": 3903, "x": 5.75, "y": 5.79, "z": 3.53 }, { "name": 28008, "carat": 0.3, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 62.6, "table": 56, "price": 658, "x": 4.29, "y": 4.34, "z": 2.7 }, { "name": 1319, "carat": 0.72, "cut": "Good", "color": "G", "clarity": "VS1", "depth": 58, "table": 57.8, "price": 2958, "x": 5.85, "y": 5.87, "z": 3.4 }, { "name": 33956, "carat": 0.23, "cut": "Very-Good", "color": "E", "clarity": "VVS2", "depth": 60.2, "table": 57, "price": 465, "x": 3.99, "y": 4.05, "z": 2.42 }, { "name": 6983, "carat": 1.03, "cut": "Premium", "color": "J", "clarity": "SI1", "depth": 61.7, "table": 54, "price": 4153, "x": 6.56, "y": 6.5, "z": 4.03 }, { "name": 5595, "carat": 1.01, "cut": "Fair", "color": "H", "clarity": "SI1", "depth": 64.5, "table": 59, "price": 3869, "x": 6.27, "y": 6.23, "z": 4.03 }, { "name": 22168, "carat": 1.56, "cut": "Ideal", "color": "F", "clarity": "SI2", "depth": 61.6, "table": 56, "price": 10210, "x": 7.41, "y": 7.45, "z": 4.58 }, { "name": 34991, "carat": 0.34, "cut": "Premium", "color": "D", "clarity": "VS2", "depth": 59.3, "table": 59, "price": 881, "x": 4.59, "y": 4.55, "z": 2.71 }, { "name": 3246, "carat": 0.81, "cut": "Ideal", "color": "I", "clarity": "VS2", "depth": 61.4, "table": 55, "price": 3355, "x": 6.03, "y": 6.06, "z": 3.71 }, { "name": 39872, "carat": 0.36, "cut": "Premium", "color": "E", "clarity": "VVS2", "depth": 61.7, "table": 59, "price": 1102, "x": 4.56, "y": 4.52, "z": 2.8 }, { "name": 29982, "carat": 0.31, "cut": "Ideal", "color": "F", "clarity": "VVS2", "depth": 61.2, "table": 56, "price": 716, "x": 4.4, "y": 4.43, "z": 2.7 }, { "name": 29194, "carat": 0.38, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 61, "table": 56, "price": 694, "x": 4.68, "y": 4.69, "z": 2.86 }, { "name": 41649, "carat": 0.4, "cut": "Ideal", "color": "E", "clarity": "VVS2", "depth": 61.7, "table": 55, "price": 1238, "x": 4.76, "y": 4.74, "z": 2.93 }, { "name": 48035, "carat": 0.6, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 58.6, "table": 60, "price": 1923, "x": 5.54, "y": 5.62, "z": 3.27 }, { "name": 38063, "carat": 0.3, "cut": "Ideal", "color": "E", "clarity": "IF", "depth": 61.1, "table": 57, "price": 1013, "x": 4.31, "y": 4.33, "z": 2.64 }, { "name": 23199, "carat": 1.52, "cut": "Ideal", "color": "H", "clarity": "VS2", "depth": 60.7, "table": 56, "price": 11206, "x": 7.49, "y": 7.41, "z": 4.52 }, { "name": 14152, "carat": 1.01, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 63, "table": 58, "price": 5741, "x": 6.42, "y": 6.37, "z": 4.03 }, { "name": 45512, "carat": 0.51, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 61.5, "table": 57, "price": 1682, "x": 5.11, "y": 5.16, "z": 3.16 }, { "name": 33630, "carat": 0.33, "cut": "Very-Good", "color": "H", "clarity": "SI1", "depth": 63, "table": 56, "price": 463, "x": 4.41, "y": 4.42, "z": 2.78 }, { "name": 31484, "carat": 0.34, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 61.9, "table": 55, "price": 765, "x": 4.53, "y": 4.49, "z": 2.79 }, { "name": 4780, "carat": 1.23, "cut": "Fair", "color": "E", "clarity": "I1", "depth": 67.4, "table": 56, "price": 3692, "x": 6.76, "y": 6.56, "z": 4.49 }, { "name": 1849, "carat": 0.76, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 61.7, "table": 62, "price": 3064, "x": 5.85, "y": 5.82, "z": 3.6 }, { "name": 3200, "carat": 0.92, "cut": "Very-Good", "color": "I", "clarity": "SI1", "depth": 63.7, "table": 58, "price": 3345, "x": 6.12, "y": 6.18, "z": 3.92 }, { "name": 18133, "carat": 1.52, "cut": "Premium", "color": "I", "clarity": "SI2", "depth": 62.5, "table": 56, "price": 7341, "x": 7.35, "y": 7.33, "z": 4.59 }, { "name": 40938, "carat": 0.23, "cut": "Very-Good", "color": "E", "clarity": "VVS1", "depth": 60.8, "table": 56, "price": 499, "x": 3.94, "y": 3.99, "z": 2.41 }, { "name": 33643, "carat": 0.38, "cut": "Premium", "color": "H", "clarity": "VVS2", "depth": 62, "table": 58, "price": 833, "x": 4.62, "y": 4.64, "z": 2.87 }, { "name": 52241, "carat": 0.73, "cut": "Ideal", "color": "I", "clarity": "VVS2", "depth": 63.3, "table": 57, "price": 2485, "x": 5.77, "y": 5.73, "z": 3.64 }, { "name": 10406, "carat": 0.31, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 61.5, "table": 60, "price": 593, "x": 4.34, "y": 4.31, "z": 2.66 }, { "name": 51776, "carat": 0.74, "cut": "Ideal", "color": "F", "clarity": "SI2", "depth": 61.6, "table": 55, "price": 2410, "x": 5.81, "y": 5.87, "z": 3.6 }, { "name": 31450, "carat": 0.4, "cut": "Very-Good", "color": "G", "clarity": "SI2", "depth": 63.4, "table": 59, "price": 765, "x": 4.66, "y": 4.64, "z": 2.95 }, { "name": 21271, "carat": 1.53, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 62.7, "table": 60, "price": 9424, "x": 7.28, "y": 7.34, "z": 4.58 }, { "name": 22716, "carat": 1.01, "cut": "Premium", "color": "D", "clarity": "VVS2", "depth": 62.4, "table": 58, "price": 10732, "x": 6.39, "y": 6.44, "z": 4 }, { "name": 17977, "carat": 1.1, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 62.7, "table": 58.5, "price": 7272, "x": 6.5, "y": 6.59, "z": 4.1 }, { "name": 18203, "carat": 1.52, "cut": "Fair", "color": "H", "clarity": "SI2", "depth": 65, "table": 57, "price": 7388, "x": 7.12, "y": 7.09, "z": 4.62 }, { "name": 10318, "carat": 1.03, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 61.3, "table": 61, "price": 4764, "x": 6.49, "y": 6.46, "z": 3.97 }, { "name": 28823, "carat": 0.41, "cut": "Good", "color": "H", "clarity": "SI1", "depth": 63.8, "table": 56, "price": 683, "x": 4.69, "y": 4.74, "z": 3.01 }, { "name": 5145, "carat": 0.9, "cut": "Very-Good", "color": "I", "clarity": "VS2", "depth": 62.8, "table": 52, "price": 3764, "x": 6.19, "y": 6.23, "z": 3.9 }, { "name": 37720, "carat": 0.34, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 61.1, "table": 57, "price": 995, "x": 4.52, "y": 4.48, "z": 2.75 }, { "name": 595, "carat": 0.76, "cut": "Very-Good", "color": "H", "clarity": "SI1", "depth": 60.9, "table": 55, "price": 2838, "x": 5.92, "y": 5.94, "z": 3.61 }, { "name": 12362, "carat": 0.26, "cut": "Very-Good", "color": "E", "clarity": "VVS2", "depth": 61.5, "table": 58, "price": 597, "x": 4.08, "y": 4.12, "z": 2.52 }, { "name": 50151, "carat": 0.71, "cut": "Good", "color": "D", "clarity": "SI2", "depth": 64.3, "table": 56, "price": 2215, "x": 5.64, "y": 5.59, "z": 3.61 }, { "name": 41669, "carat": 0.4, "cut": "Ideal", "color": "I", "clarity": "VVS2", "depth": 61.4, "table": 56, "price": 1240, "x": 4.76, "y": 4.79, "z": 2.93 }, { "name": 4974, "carat": 1.14, "cut": "Good", "color": "I", "clarity": "SI2", "depth": 60, "table": 65, "price": 3735, "x": 6.8, "y": 6.75, "z": 4.06 }, { "name": 47558, "carat": 0.7, "cut": "Ideal", "color": "J", "clarity": "VS2", "depth": 62.4, "table": 55, "price": 1874, "x": 5.68, "y": 5.7, "z": 3.55 }, { "name": 52829, "carat": 0.7, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 61.4, "table": 55, "price": 2573, "x": 5.74, "y": 5.69, "z": 3.51 }, { "name": 3874, "carat": 0.81, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 62.3, "table": 55, "price": 3481, "x": 5.96, "y": 6, "z": 3.72 }, { "name": 22691, "carat": 0.36, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 61.5, "table": 55, "price": 629, "x": 4.57, "y": 4.6, "z": 2.82 }, { "name": 28407, "carat": 0.35, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 60.3, "table": 60, "price": 669, "x": 4.59, "y": 4.57, "z": 2.76 }, { "name": 27459, "carat": 2.03, "cut": "Very-Good", "color": "E", "clarity": "SI2", "depth": 58.8, "table": 59, "price": 18115, "x": 8.23, "y": 8.28, "z": 4.85 }, { "name": 30473, "carat": 0.31, "cut": "Ideal", "color": "I", "clarity": "VVS1", "depth": 62.1, "table": 56, "price": 732, "x": 4.38, "y": 4.35, "z": 2.71 }, { "name": 32370, "carat": 0.3, "cut": "Ideal", "color": "F", "clarity": "VVS1", "depth": 62.4, "table": 57, "price": 790, "x": 4.25, "y": 4.28, "z": 2.66 }, { "name": 20135, "carat": 1.57, "cut": "Premium", "color": "J", "clarity": "VS1", "depth": 61.3, "table": 59, "price": 8595, "x": 7.44, "y": 7.47, "z": 4.57 }, { "name": 50802, "carat": 0.71, "cut": "Premium", "color": "E", "clarity": "SI2", "depth": 61.4, "table": 59, "price": 2306, "x": 5.74, "y": 5.7, "z": 3.51 }, { "name": 29439, "carat": 0.42, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 60.1, "table": 58, "price": 700, "x": 4.83, "y": 4.88, "z": 2.92 }, { "name": 19544, "carat": 1, "cut": "Premium", "color": "E", "clarity": "VS1", "depth": 59.1, "table": 59, "price": 8176, "x": 6.56, "y": 6.51, "z": 3.86 }, { "name": 16410, "carat": 1, "cut": "Good", "color": "F", "clarity": "VS1", "depth": 57.8, "table": 59, "price": 6552, "x": 6.57, "y": 6.59, "z": 3.8 }, { "name": 41500, "carat": 0.58, "cut": "Premium", "color": "J", "clarity": "VS2", "depth": 59.5, "table": 62, "price": 1233, "x": 5.44, "y": 5.41, "z": 3.23 }, { "name": 22107, "carat": 1.66, "cut": "Very-Good", "color": "H", "clarity": "SI1", "depth": 62.8, "table": 56, "price": 10134, "x": 7.53, "y": 7.57, "z": 4.74 }, { "name": 37064, "carat": 0.43, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 59.8, "table": 58, "price": 968, "x": 4.94, "y": 4.89, "z": 2.94 }, { "name": 27284, "carat": 2.03, "cut": "Very-Good", "color": "G", "clarity": "SI2", "depth": 62.7, "table": 55, "price": 17752, "x": 8.07, "y": 8.14, "z": 5.08 }, { "name": 21724, "carat": 1.86, "cut": "Good", "color": "G", "clarity": "SI2", "depth": 63.8, "table": 55, "price": 9791, "x": 7.79, "y": 7.73, "z": 4.95 }, { "name": 47369, "carat": 0.52, "cut": "Very-Good", "color": "D", "clarity": "VS2", "depth": 62.9, "table": 59, "price": 1847, "x": 5.11, "y": 5.13, "z": 3.22 }, { "name": 34279, "carat": 0.23, "cut": "Very-Good", "color": "D", "clarity": "VS1", "depth": 62.4, "table": 56, "price": 468, "x": 3.93, "y": 3.98, "z": 2.46 }, { "name": 28365, "carat": 0.4, "cut": "Good", "color": "D", "clarity": "SI1", "depth": 60.3, "table": 61, "price": 667, "x": 4.74, "y": 4.78, "z": 2.87 }, { "name": 41811, "carat": 0.54, "cut": "Good", "color": "E", "clarity": "SI2", "depth": 63.8, "table": 54, "price": 1250, "x": 5.18, "y": 5.17, "z": 3.3 }, { "name": 36655, "carat": 0.3, "cut": "Very-Good", "color": "E", "clarity": "IF", "depth": 60.9, "table": 59, "price": 949, "x": 4.29, "y": 4.32, "z": 2.62 }, { "name": 4623, "carat": 0.91, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 60.7, "table": 56, "price": 3665, "x": 6.26, "y": 6.22, "z": 3.79 }, { "name": 12087, "carat": 1.44, "cut": "Premium", "color": "E", "clarity": "I1", "depth": 61.1, "table": 62, "price": 5161, "x": 7.23, "y": 7.15, "z": 4.39 }, { "name": 7116, "carat": 1.01, "cut": "Very-Good", "color": "I", "clarity": "SI2", "depth": 62.9, "table": 55, "price": 4171, "x": 6.37, "y": 6.42, "z": 4.02 }, { "name": 21908, "carat": 1.71, "cut": "Very-Good", "color": "H", "clarity": "VS1", "depth": 63.5, "table": 59, "price": 9974, "x": 7.59, "y": 7.52, "z": 4.8 }, { "name": 50703, "carat": 0.53, "cut": "Ideal", "color": "F", "clarity": "VVS2", "depth": 61.3, "table": 55, "price": 2291, "x": 5.23, "y": 5.27, "z": 3.22 }, { "name": 2069, "carat": 0.32, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 61.5, "table": 60, "price": 561, "x": 4.4, "y": 4.42, "z": 2.71 }, { "name": 14758, "carat": 1.01, "cut": "Ideal", "color": "D", "clarity": "SI1", "depth": 62, "table": 57, "price": 5939, "x": 6.44, "y": 6.37, "z": 3.97 }, { "name": 3516, "carat": 0.71, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 61.5, "table": 57, "price": 3404, "x": 5.7, "y": 5.74, "z": 3.52 }, { "name": 34464, "carat": 0.31, "cut": "Ideal", "color": "E", "clarity": "VVS1", "depth": 61.3, "table": 56, "price": 865, "x": 4.38, "y": 4.4, "z": 2.69 }, { "name": 25285, "carat": 2.09, "cut": "Ideal", "color": "I", "clarity": "SI2", "depth": 61.2, "table": 57, "price": 13933, "x": 8.27, "y": 8.19, "z": 5.04 }, { "name": 35783, "carat": 0.32, "cut": "Ideal", "color": "F", "clarity": "VVS1", "depth": 61, "table": 56, "price": 912, "x": 4.42, "y": 4.43, "z": 2.7 }, { "name": 39495, "carat": 0.41, "cut": "Ideal", "color": "E", "clarity": "VS1", "depth": 62, "table": 55, "price": 1079, "x": 4.74, "y": 4.77, "z": 2.95 }, { "name": 15922, "carat": 1.52, "cut": "Premium", "color": "J", "clarity": "SI1", "depth": 61, "table": 59, "price": 6367, "x": 7.41, "y": 7.35, "z": 4.5 }, { "name": 40625, "carat": 0.41, "cut": "Ideal", "color": "E", "clarity": "VS1", "depth": 61.9, "table": 55, "price": 1153, "x": 4.8, "y": 4.76, "z": 2.96 }, { "name": 8663, "carat": 1.16, "cut": "Very-Good", "color": "H", "clarity": "SI2", "depth": 63.2, "table": 57, "price": 4455, "x": 6.66, "y": 6.7, "z": 4.22 }, { "name": 5613, "carat": 0.92, "cut": "Very-Good", "color": "F", "clarity": "SI2", "depth": 62.8, "table": 56, "price": 3873, "x": 6.19, "y": 6.23, "z": 3.9 }, { "name": 52450, "carat": 0.71, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 62.8, "table": 58, "price": 2515, "x": 5.74, "y": 5.69, "z": 3.59 }, { "name": 17352, "carat": 1.11, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 62, "table": 58, "price": 6962, "x": 6.68, "y": 6.64, "z": 4.13 }, { "name": 51937, "carat": 0.72, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 62.1, "table": 55, "price": 2440, "x": 5.73, "y": 5.8, "z": 3.58 }, { "name": 5387, "carat": 0.3, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 58.8, "table": 60, "price": 574, "x": 4.39, "y": 4.35, "z": 2.57 }, { "name": 12962, "carat": 1, "cut": "Very-Good", "color": "D", "clarity": "SI1", "depth": 62.1, "table": 58, "price": 5390, "x": 6.34, "y": 6.45, "z": 3.97 }, { "name": 34751, "carat": 0.41, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 62, "table": 59, "price": 876, "x": 4.8, "y": 4.78, "z": 2.97 }, { "name": 4364, "carat": 0.9, "cut": "Good", "color": "F", "clarity": "SI1", "depth": 63.9, "table": 58, "price": 3604, "x": 6.12, "y": 6.08, "z": 3.9 }, { "name": 13164, "carat": 1.24, "cut": "Ideal", "color": "J", "clarity": "VS2", "depth": 62.3, "table": 56, "price": 5443, "x": 6.84, "y": 6.91, "z": 4.28 }, { "name": 34488, "carat": 0.43, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 61.2, "table": 58, "price": 867, "x": 4.84, "y": 4.9, "z": 2.98 }, { "name": 33762, "carat": 0.4, "cut": "Very-Good", "color": "G", "clarity": "SI1", "depth": 63.4, "table": 58, "price": 840, "x": 4.71, "y": 4.66, "z": 2.97 }, { "name": 18486, "carat": 1.31, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 62.4, "table": 58, "price": 7527, "x": 7.02, "y": 6.96, "z": 4.36 }, { "name": 53494, "carat": 0.73, "cut": "Ideal", "color": "D", "clarity": "SI2", "depth": 62.4, "table": 56, "price": 2683, "x": 5.74, "y": 5.77, "z": 3.59 }, { "name": 45458, "carat": 0.7, "cut": "Good", "color": "I", "clarity": "SI2", "depth": 63.5, "table": 56, "price": 1675, "x": 5.59, "y": 5.63, "z": 3.56 }, { "name": 34592, "carat": 0.37, "cut": "Ideal", "color": "J", "clarity": "SI1", "depth": 61.4, "table": 57, "price": 469, "x": 4.62, "y": 4.66, "z": 2.85 }, { "name": 7984, "carat": 0.92, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 60.5, "table": 57, "price": 4325, "x": 6.27, "y": 6.32, "z": 3.81 }, { "name": 23251, "carat": 1.7, "cut": "Premium", "color": "I", "clarity": "VS2", "depth": 61.2, "table": 59, "price": 11257, "x": 7.55, "y": 7.62, "z": 4.64 }, { "name": 34473, "carat": 0.38, "cut": "Very-Good", "color": "E", "clarity": "VS2", "depth": 60.3, "table": 58, "price": 866, "x": 4.67, "y": 4.72, "z": 2.83 }, { "name": 6235, "carat": 0.75, "cut": "Very-Good", "color": "E", "clarity": "VVS2", "depth": 62.8, "table": 57, "price": 4005, "x": 5.74, "y": 5.78, "z": 3.62 }, { "name": 28202, "carat": 0.4, "cut": "Very-Good", "color": "E", "clarity": "SI2", "depth": 62.9, "table": 59, "price": 666, "x": 4.66, "y": 4.69, "z": 2.94 }, { "name": 42691, "carat": 0.5, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 61.6, "table": 57, "price": 1337, "x": 5.08, "y": 5.11, "z": 3.14 }, { "name": 34013, "carat": 0.43, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 61.4, "table": 54, "price": 848, "x": 4.9, "y": 4.93, "z": 3.02 }, { "name": 49461, "carat": 0.6, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 62, "table": 56, "price": 2112, "x": 5.4, "y": 5.43, "z": 3.36 }, { "name": 50401, "carat": 0.71, "cut": "Ideal", "color": "I", "clarity": "SI1", "depth": 61.4, "table": 56, "price": 2255, "x": 5.73, "y": 5.77, "z": 3.53 }, { "name": 27056, "carat": 0.28, "cut": "Premium", "color": "H", "clarity": "VVS1", "depth": 59.9, "table": 62, "price": 646, "x": 4.28, "y": 4.23, "z": 2.55 }, { "name": 47424, "carat": 0.7, "cut": "Good", "color": "F", "clarity": "SI2", "depth": 64.1, "table": 55, "price": 1851, "x": 5.58, "y": 5.52, "z": 3.56 }, { "name": 38417, "carat": 0.3, "cut": "Ideal", "color": "G", "clarity": "IF", "depth": 62.4, "table": 55, "price": 1025, "x": 4.32, "y": 4.3, "z": 2.69 }, { "name": 10216, "carat": 1.26, "cut": "Ideal", "color": "J", "clarity": "SI2", "depth": 62.5, "table": 53, "price": 4742, "x": 6.9, "y": 6.86, "z": 4.3 }, { "name": 13031, "carat": 0.26, "cut": "Premium", "color": "H", "clarity": "VVS1", "depth": 59.8, "table": 59, "price": 600, "x": 4.17, "y": 4.12, "z": 2.48 }, { "name": 22644, "carat": 1.5, "cut": "Good", "color": "H", "clarity": "VS2", "depth": 63.9, "table": 60, "price": 10692, "x": 7.17, "y": 7.22, "z": 4.6 }, { "name": 31530, "carat": 0.34, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 62.9, "table": 56, "price": 765, "x": 4.48, "y": 4.45, "z": 2.81 }, { "name": 33600, "carat": 0.37, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 60.8, "table": 57, "price": 833, "x": 4.66, "y": 4.61, "z": 2.82 }, { "name": 40166, "carat": 0.39, "cut": "Very-Good", "color": "F", "clarity": "VVS2", "depth": 58.2, "table": 62, "price": 1117, "x": 4.77, "y": 4.82, "z": 2.79 }, { "name": 6524, "carat": 0.91, "cut": "Ideal", "color": "D", "clarity": "SI2", "depth": 62.6, "table": 54, "price": 4067, "x": 6.22, "y": 6.25, "z": 3.9 }, { "name": 2493, "carat": 0.9, "cut": "Good", "color": "I", "clarity": "SI1", "depth": 63, "table": 53, "price": 3196, "x": 6.08, "y": 6.15, "z": 3.85 }, { "name": 53307, "carat": 0.3, "cut": "Good", "color": "D", "clarity": "SI1", "depth": 63.4, "table": 56, "price": 552, "x": 4.26, "y": 4.29, "z": 2.71 }, { "name": 6661, "carat": 1, "cut": "Premium", "color": "G", "clarity": "SI2", "depth": 62.7, "table": 59, "price": 4095, "x": 6.3, "y": 6.36, "z": 3.97 }, { "name": 143, "carat": 0.7, "cut": "Very-Good", "color": "D", "clarity": "VS2", "depth": 61.8, "table": 55, "price": 2767, "x": 5.68, "y": 5.72, "z": 3.52 }, { "name": 51773, "carat": 0.71, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 59.6, "table": 59, "price": 2409, "x": 5.79, "y": 5.75, "z": 3.44 }, { "name": 14482, "carat": 1.2, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 62.6, "table": 58, "price": 5846, "x": 6.79, "y": 6.73, "z": 4.23 }, { "name": 33251, "carat": 0.45, "cut": "Ideal", "color": "I", "clarity": "VS1", "depth": 61.9, "table": 54, "price": 825, "x": 4.95, "y": 4.97, "z": 3.07 }, { "name": 9911, "carat": 1.01, "cut": "Premium", "color": "E", "clarity": "SI2", "depth": 62.9, "table": 59, "price": 4688, "x": 6.37, "y": 6.31, "z": 3.99 }, { "name": 259, "carat": 0.83, "cut": "Ideal", "color": "F", "clarity": "SI2", "depth": 62.3, "table": 55, "price": 2790, "x": 6.02, "y": 6.05, "z": 3.76 }, { "name": 32882, "carat": 0.4, "cut": "Ideal", "color": "J", "clarity": "VS1", "depth": 62.6, "table": 55, "price": 810, "x": 4.75, "y": 4.71, "z": 2.96 }, { "name": 31115, "carat": 0.42, "cut": "Very-Good", "color": "H", "clarity": "SI1", "depth": 61.1, "table": 57, "price": 754, "x": 4.84, "y": 4.87, "z": 2.96 }, { "name": 20904, "carat": 1.06, "cut": "Ideal", "color": "F", "clarity": "VVS2", "depth": 62.1, "table": 57, "price": 9118, "x": 6.54, "y": 6.5, "z": 4.05 }, { "name": 26198, "carat": 1.7, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 62.6, "table": 61, "price": 15568, "x": 7.64, "y": 7.54, "z": 4.75 }, { "name": 2676, "carat": 0.7, "cut": "Premium", "color": "D", "clarity": "VS1", "depth": 60.6, "table": 58, "price": 3239, "x": 5.73, "y": 5.75, "z": 3.48 }, { "name": 38697, "carat": 0.37, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 61.9, "table": 53, "price": 1041, "x": 4.65, "y": 4.62, "z": 2.87 }, { "name": 39651, "carat": 0.5, "cut": "Very-Good", "color": "I", "clarity": "SI1", "depth": 63.2, "table": 57, "price": 1087, "x": 5.07, "y": 5.09, "z": 3.21 }, { "name": 16592, "carat": 1.06, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 62.7, "table": 55, "price": 6627, "x": 6.54, "y": 6.5, "z": 4.09 }, { "name": 18088, "carat": 1.22, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 60.8, "table": 59, "price": 7310, "x": 6.93, "y": 6.86, "z": 4.19 }, { "name": 48489, "carat": 0.5, "cut": "Fair", "color": "D", "clarity": "VVS2", "depth": 67.6, "table": 57, "price": 1980, "x": 4.95, "y": 4.84, "z": 3.31 }, { "name": 6300, "carat": 0.9, "cut": "Good", "color": "G", "clarity": "VS2", "depth": 63.6, "table": 59, "price": 4022, "x": 6.1, "y": 6.04, "z": 3.86 }, { "name": 2089, "carat": 0.71, "cut": "Very-Good", "color": "E", "clarity": "VS1", "depth": 59.8, "table": 58, "price": 3112, "x": 5.78, "y": 5.82, "z": 3.47 }, { "name": 36243, "carat": 0.54, "cut": "Ideal", "color": "I", "clarity": "SI2", "depth": 60.9, "table": 57, "price": 935, "x": 5.26, "y": 5.31, "z": 3.22 }, { "name": 53086, "carat": 0.57, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 60.9, "table": 56, "price": 2612, "x": 5.37, "y": 5.41, "z": 3.28 }, { "name": 35614, "carat": 0.3, "cut": "Premium", "color": "I", "clarity": "VS1", "depth": 59.1, "table": 59, "price": 473, "x": 4.35, "y": 4.38, "z": 2.58 }, { "name": 48148, "carat": 0.53, "cut": "Premium", "color": "D", "clarity": "VS1", "depth": 62.4, "table": 61, "price": 1940, "x": 5.25, "y": 5.14, "z": 3.24 }, { "name": 27367, "carat": 0.28, "cut": "Ideal", "color": "E", "clarity": "VVS2", "depth": 62.4, "table": 56, "price": 646, "x": 4.16, "y": 4.2, "z": 2.61 }, { "name": 38602, "carat": 0.4, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 62.6, "table": 57, "price": 1038, "x": 4.7, "y": 4.68, "z": 2.93 }, { "name": 27118, "carat": 2.05, "cut": "Premium", "color": "E", "clarity": "SI2", "depth": 62.5, "table": 56, "price": 17294, "x": 8.17, "y": 8.08, "z": 5.08 }, { "name": 33880, "carat": 0.3, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 60.7, "table": 59, "price": 844, "x": 4.33, "y": 4.3, "z": 2.62 }, { "name": 27465, "carat": 2.03, "cut": "Very-Good", "color": "D", "clarity": "SI2", "depth": 62.4, "table": 59, "price": 18120, "x": 7.98, "y": 8.04, "z": 5 }, { "name": 19752, "carat": 1.02, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 61.5, "table": 57, "price": 8317, "x": 6.47, "y": 6.44, "z": 3.97 }, { "name": 20737, "carat": 1.36, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 60.9, "table": 56, "price": 8977, "x": 7.15, "y": 7.16, "z": 4.36 }, { "name": 20725, "carat": 0.31, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 61.4, "table": 55, "price": 625, "x": 4.32, "y": 4.34, "z": 2.66 }, { "name": 53285, "carat": 0.3, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 62.4, "table": 60, "price": 552, "x": 4.23, "y": 4.26, "z": 2.65 }, { "name": 25760, "carat": 2.33, "cut": "Premium", "color": "J", "clarity": "SI1", "depth": 59.9, "table": 59, "price": 14711, "x": 8.7, "y": 8.65, "z": 5.2 }, { "name": 1993, "carat": 0.91, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 62.1, "table": 56, "price": 3096, "x": 6.26, "y": 6.21, "z": 3.87 }, { "name": 13045, "carat": 0.36, "cut": "Premium", "color": "F", "clarity": "SI1", "depth": 61.6, "table": 60, "price": 600, "x": 4.54, "y": 4.61, "z": 2.82 }, { "name": 19622, "carat": 1, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 61.2, "table": 56, "price": 8239, "x": 6.47, "y": 6.5, "z": 3.97 }, { "name": 32358, "carat": 0.3, "cut": "Good", "color": "G", "clarity": "VVS1", "depth": 63.1, "table": 56, "price": 789, "x": 4.25, "y": 4.28, "z": 2.69 }, { "name": 26851, "carat": 2.01, "cut": "Premium", "color": "I", "clarity": "VS2", "depth": 62.6, "table": 59, "price": 16778, "x": 8.04, "y": 8.01, "z": 5.02 }, { "name": 34059, "carat": 0.36, "cut": "Ideal", "color": "D", "clarity": "SI1", "depth": 61.5, "table": 56, "price": 851, "x": 4.64, "y": 4.56, "z": 2.83 }, { "name": 14897, "carat": 1.26, "cut": "Premium", "color": "H", "clarity": "SI2", "depth": 58.6, "table": 59, "price": 5998, "x": 7.09, "y": 7.04, "z": 4.14 }, { "name": 235, "carat": 0.64, "cut": "Ideal", "color": "D", "clarity": "VS1", "depth": 61.5, "table": 56, "price": 2787, "x": 5.54, "y": 5.55, "z": 3.41 }, { "name": 4997, "carat": 0.58, "cut": "Ideal", "color": "D", "clarity": "VVS1", "depth": 62.2, "table": 56, "price": 3741, "x": 5.34, "y": 5.36, "z": 3.33 }, { "name": 39946, "carat": 0.24, "cut": "Good", "color": "E", "clarity": "VVS2", "depth": 65, "table": 58, "price": 492, "x": 3.85, "y": 3.9, "z": 2.52 }, { "name": 26147, "carat": 2, "cut": "Premium", "color": "H", "clarity": "SI2", "depth": 59.7, "table": 61, "price": 15451, "x": 8.2, "y": 8.15, "z": 4.88 }, { "name": 17956, "carat": 1.02, "cut": "Very-Good", "color": "F", "clarity": "VS1", "depth": 61.9, "table": 59, "price": 7257, "x": 6.38, "y": 6.44, "z": 3.97 }, { "name": 19885, "carat": 1.2, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 61.1, "table": 59, "price": 8436, "x": 6.81, "y": 6.87, "z": 4.18 }, { "name": 37862, "carat": 0.34, "cut": "Ideal", "color": "F", "clarity": "VVS2", "depth": 61, "table": 56, "price": 1003, "x": 4.54, "y": 4.57, "z": 2.78 }, { "name": 5256, "carat": 1.01, "cut": "Very-Good", "color": "I", "clarity": "SI2", "depth": 61.4, "table": 63, "price": 3792, "x": 6.33, "y": 6.38, "z": 3.9 }, { "name": 16116, "carat": 0.9, "cut": "Premium", "color": "D", "clarity": "VS1", "depth": 61.2, "table": 58, "price": 6441, "x": 6.27, "y": 6.25, "z": 3.83 }, { "name": 17009, "carat": 1.33, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 62.3, "table": 55, "price": 6791, "x": 7.01, "y": 7.08, "z": 4.39 }, { "name": 4428, "carat": 1, "cut": "Good", "color": "J", "clarity": "SI1", "depth": 58.7, "table": 62, "price": 3614, "x": 6.47, "y": 6.51, "z": 3.81 }, { "name": 47942, "carat": 0.55, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 62.2, "table": 54, "price": 1916, "x": 5.23, "y": 5.3, "z": 3.27 }, { "name": 34574, "carat": 0.31, "cut": "Ideal", "color": "G", "clarity": "IF", "depth": 61.9, "table": 56, "price": 871, "x": 4.33, "y": 4.35, "z": 2.68 }, { "name": 11058, "carat": 0.4, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 61.9, "table": 58, "price": 596, "x": 4.71, "y": 4.73, "z": 2.92 }, { "name": 25643, "carat": 2.15, "cut": "Ideal", "color": "I", "clarity": "SI1", "depth": 62.5, "table": 57, "price": 14534, "x": 8.2, "y": 8.16, "z": 5.11 }, { "name": 12593, "carat": 1.27, "cut": "Ideal", "color": "J", "clarity": "VS2", "depth": 61.8, "table": 54, "price": 5285, "x": 6.95, "y": 6.98, "z": 4.31 }, { "name": 5579, "carat": 0.9, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 63.6, "table": 57, "price": 3863, "x": 6.08, "y": 6.12, "z": 3.88 }, { "name": 9401, "carat": 1.05, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 61.9, "table": 56, "price": 4586, "x": 6.56, "y": 6.49, "z": 4.04 }, { "name": 20144, "carat": 1.43, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 62.8, "table": 57, "price": 8599, "x": 7.17, "y": 7.12, "z": 4.49 }, { "name": 52042, "carat": 0.71, "cut": "Premium", "color": "E", "clarity": "SI2", "depth": 62.6, "table": 58, "price": 2450, "x": 5.7, "y": 5.67, "z": 3.56 }, { "name": 52908, "carat": 0.64, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 60.7, "table": 57, "price": 2587, "x": 5.58, "y": 5.63, "z": 3.4 }, { "name": 32459, "carat": 0.38, "cut": "Ideal", "color": "H", "clarity": "VVS2", "depth": 61.6, "table": 56, "price": 794, "x": 4.67, "y": 4.72, "z": 2.89 }, { "name": 41064, "carat": 0.49, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 60.7, "table": 56, "price": 1190, "x": 5.13, "y": 5.18, "z": 3.13 }, { "name": 47384, "carat": 0.54, "cut": "Premium", "color": "G", "clarity": "VS1", "depth": 61.6, "table": 56, "price": 1847, "x": 5.26, "y": 5.23, "z": 3.23 }, { "name": 39278, "carat": 0.34, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 62.6, "table": 56, "price": 490, "x": 4.46, "y": 4.48, "z": 2.8 }, { "name": 21693, "carat": 0.34, "cut": "Ideal", "color": "I", "clarity": "VVS1", "depth": 61.8, "table": 56, "price": 626, "x": 4.47, "y": 4.5, "z": 2.77 }, { "name": 18007, "carat": 1.2, "cut": "Premium", "color": "F", "clarity": "SI1", "depth": 60.1, "table": 59, "price": 7282, "x": 6.92, "y": 6.85, "z": 4.14 }, { "name": 14160, "carat": 1.31, "cut": "Premium", "color": "I", "clarity": "SI2", "depth": 60.5, "table": 59, "price": 5744, "x": 7.11, "y": 7.04, "z": 4.28 }, { "name": 29415, "carat": 0.42, "cut": "Very-Good", "color": "E", "clarity": "SI2", "depth": 62.9, "table": 56, "price": 700, "x": 4.77, "y": 4.8, "z": 3.01 }, { "name": 43419, "carat": 0.41, "cut": "Ideal", "color": "D", "clarity": "VVS1", "depth": 62.7, "table": 56, "price": 1413, "x": 4.77, "y": 4.74, "z": 2.98 }, { "name": 37822, "carat": 0.31, "cut": "Ideal", "color": "E", "clarity": "IF", "depth": 61.3, "table": 58, "price": 1002, "x": 4.37, "y": 4.4, "z": 2.69 }, { "name": 28546, "carat": 0.3, "cut": "Premium", "color": "I", "clarity": "VVS2", "depth": 61.8, "table": 58, "price": 675, "x": 4.33, "y": 4.28, "z": 2.66 }, { "name": 47739, "carat": 0.7, "cut": "Premium", "color": "I", "clarity": "SI2", "depth": 62.4, "table": 58, "price": 1890, "x": 5.68, "y": 5.64, "z": 3.53 }, { "name": 40698, "carat": 0.4, "cut": "Ideal", "color": "E", "clarity": "VVS2", "depth": 62.2, "table": 56, "price": 1158, "x": 4.71, "y": 4.78, "z": 2.95 }, { "name": 17406, "carat": 1.1, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 60.2, "table": 56, "price": 6972, "x": 6.7, "y": 6.74, "z": 4.05 }, { "name": 25732, "carat": 1.51, "cut": "Good", "color": "G", "clarity": "IF", "depth": 62.8, "table": 60, "price": 14654, "x": 7.18, "y": 7.24, "z": 4.53 }, { "name": 53765, "carat": 0.7, "cut": "Very-Good", "color": "D", "clarity": "SI1", "depth": 62.6, "table": 57, "price": 2726, "x": 5.67, "y": 5.7, "z": 3.56 }, { "name": 13811, "carat": 1.06, "cut": "Very-Good", "color": "H", "clarity": "VS1", "depth": 61.9, "table": 58, "price": 5627, "x": 6.57, "y": 6.49, "z": 4.04 }, { "name": 13975, "carat": 1.27, "cut": "Premium", "color": "I", "clarity": "SI1", "depth": 62.3, "table": 56, "price": 5690, "x": 6.93, "y": 6.85, "z": 4.29 }, { "name": 11498, "carat": 1.12, "cut": "Ideal", "color": "G", "clarity": "SI2", "depth": 61.5, "table": 57, "price": 5018, "x": 6.74, "y": 6.68, "z": 4.13 }, { "name": 92, "carat": 0.86, "cut": "Fair", "color": "E", "clarity": "SI2", "depth": 55.1, "table": 69, "price": 2757, "x": 6.45, "y": 6.33, "z": 3.52 }, { "name": 40130, "carat": 0.41, "cut": "Premium", "color": "F", "clarity": "VVS2", "depth": 60.6, "table": 58, "price": 1115, "x": 4.79, "y": 4.84, "z": 2.92 }, { "name": 31089, "carat": 0.33, "cut": "Very-Good", "color": "G", "clarity": "VVS2", "depth": 60, "table": 63, "price": 752, "x": 4.45, "y": 4.49, "z": 2.68 }, { "name": 12062, "carat": 1.01, "cut": "Ideal", "color": "F", "clarity": "SI2", "depth": 62.4, "table": 54, "price": 5154, "x": 6.41, "y": 6.44, "z": 4.01 }, { "name": 10388, "carat": 0.3, "cut": "Fair", "color": "F", "clarity": "VS1", "depth": 61.7, "table": 66, "price": 593, "x": 4.25, "y": 4.31, "z": 2.64 }, { "name": 46337, "carat": 0.58, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 61.9, "table": 56, "price": 1758, "x": 5.38, "y": 5.34, "z": 3.32 }, { "name": 41965, "carat": 0.23, "cut": "Very-Good", "color": "E", "clarity": "VVS2", "depth": 62.7, "table": 55, "price": 505, "x": 3.9, "y": 3.95, "z": 2.46 }, { "name": 44984, "carat": 0.31, "cut": "Premium", "color": "G", "clarity": "SI2", "depth": 62.3, "table": 57, "price": 523, "x": 4.37, "y": 4.33, "z": 2.71 }, { "name": 10061, "carat": 0.31, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 61.5, "table": 56, "price": 591, "x": 4.36, "y": 4.39, "z": 2.69 }, { "name": 1719, "carat": 0.32, "cut": "Good", "color": "G", "clarity": "VS2", "depth": 63.3, "table": 54, "price": 561, "x": 4.36, "y": 4.39, "z": 2.77 }, { "name": 50486, "carat": 0.7, "cut": "Premium", "color": "G", "clarity": "SI2", "depth": 58, "table": 60, "price": 2268, "x": 5.91, "y": 5.88, "z": 3.42 }, { "name": 39484, "carat": 0.41, "cut": "Ideal", "color": "E", "clarity": "VS1", "depth": 61.7, "table": 57, "price": 1079, "x": 4.76, "y": 4.8, "z": 2.95 }, { "name": 50934, "carat": 0.7, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 62.1, "table": 60, "price": 2319, "x": 5.73, "y": 5.71, "z": 3.55 }, { "name": 21951, "carat": 1.26, "cut": "Very-Good", "color": "G", "clarity": "VVS2", "depth": 60.9, "table": 56, "price": 10020, "x": 6.95, "y": 7.01, "z": 4.25 }, { "name": 53149, "carat": 0.8, "cut": "Very-Good", "color": "E", "clarity": "SI2", "depth": 62.4, "table": 55, "price": 2623, "x": 5.88, "y": 5.92, "z": 3.68 }, { "name": 36621, "carat": 0.24, "cut": "Very-Good", "color": "F", "clarity": "VVS2", "depth": 62.1, "table": 58, "price": 478, "x": 3.96, "y": 4.03, "z": 2.48 }, { "name": 40481, "carat": 0.55, "cut": "Very-Good", "color": "G", "clarity": "SI1", "depth": 60.7, "table": 56, "price": 1141, "x": 5.32, "y": 5.38, "z": 3.25 }, { "name": 30147, "carat": 0.32, "cut": "Premium", "color": "E", "clarity": "SI1", "depth": 60.2, "table": 60, "price": 720, "x": 4.44, "y": 4.39, "z": 2.66 }, { "name": 47083, "carat": 0.69, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 62.8, "table": 58, "price": 1822, "x": 5.65, "y": 5.62, "z": 3.54 }, { "name": 37623, "carat": 0.44, "cut": "Premium", "color": "I", "clarity": "VVS1", "depth": 62.5, "table": 60, "price": 990, "x": 4.87, "y": 4.82, "z": 3.03 }, { "name": 2504, "carat": 0.7, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 61, "table": 59, "price": 3199, "x": 5.74, "y": 5.7, "z": 3.49 }, { "name": 19150, "carat": 1.55, "cut": "Premium", "color": "J", "clarity": "VS2", "depth": 60.7, "table": 59, "price": 7911, "x": 7.47, "y": 7.5, "z": 4.54 }, { "name": 14664, "carat": 1.01, "cut": "Very-Good", "color": "G", "clarity": "VS2", "depth": 61.6, "table": 58, "price": 5919, "x": 6.4, "y": 6.45, "z": 3.96 }, { "name": 24538, "carat": 1.62, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 62.7, "table": 56, "price": 12828, "x": 7.5, "y": 7.44, "z": 4.68 }, { "name": 964, "carat": 0.71, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 62.7, "table": 56, "price": 2891, "x": 5.71, "y": 5.75, "z": 3.59 }, { "name": 34414, "carat": 0.3, "cut": "Ideal", "color": "G", "clarity": "IF", "depth": 60.7, "table": 57, "price": 863, "x": 4.34, "y": 4.39, "z": 2.65 }, { "name": 42804, "carat": 0.52, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 62.2, "table": 54, "price": 1352, "x": 5.18, "y": 5.2, "z": 3.23 }, { "name": 20646, "carat": 1.58, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 60.5, "table": 58, "price": 8936, "x": 7.57, "y": 7.54, "z": 4.57 }, { "name": 52407, "carat": 0.71, "cut": "Ideal", "color": "E", "clarity": "SI2", "depth": 59.5, "table": 57, "price": 2511, "x": 5.87, "y": 5.82, "z": 3.48 }, { "name": 51353, "carat": 0.71, "cut": "Very-Good", "color": "G", "clarity": "SI1", "depth": 63.4, "table": 56, "price": 2364, "x": 5.64, "y": 5.68, "z": 3.59 }, { "name": 29106, "carat": 0.34, "cut": "Ideal", "color": "H", "clarity": "VS2", "depth": 62.5, "table": 54, "price": 689, "x": 4.54, "y": 4.49, "z": 2.82 }, { "name": 19876, "carat": 1.31, "cut": "Ideal", "color": "H", "clarity": "VS1", "depth": 61.5, "table": 56, "price": 8429, "x": 7, "y": 7.06, "z": 4.32 }, { "name": 26399, "carat": 2.01, "cut": "Premium", "color": "H", "clarity": "SI2", "depth": 62.3, "table": 58, "price": 15917, "x": 8.11, "y": 8.06, "z": 5.04 }, { "name": 33362, "carat": 0.41, "cut": "Very-Good", "color": "G", "clarity": "VS2", "depth": 62.9, "table": 59, "price": 827, "x": 4.7, "y": 4.75, "z": 2.97 }, { "name": 10156, "carat": 1.01, "cut": "Very-Good", "color": "D", "clarity": "SI2", "depth": 61.9, "table": 58, "price": 4727, "x": 6.43, "y": 6.49, "z": 4 }, { "name": 19789, "carat": 1.06, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 61.7, "table": 56, "price": 8358, "x": 6.59, "y": 6.56, "z": 4.06 }, { "name": 36629, "carat": 0.29, "cut": "Very-Good", "color": "H", "clarity": "VVS1", "depth": 62, "table": 55, "price": 478, "x": 4.24, "y": 4.27, "z": 2.64 }, { "name": 16819, "carat": 1.21, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 58.8, "table": 59, "price": 6708, "x": 7.01, "y": 6.98, "z": 4.11 }, { "name": 15591, "carat": 1.24, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 61.3, "table": 57, "price": 6254, "x": 6.95, "y": 6.89, "z": 4.24 }, { "name": 28931, "carat": 0.3, "cut": "Premium", "color": "G", "clarity": "VVS2", "depth": 61.9, "table": 59, "price": 684, "x": 4.25, "y": 4.28, "z": 2.64 }, { "name": 45361, "carat": 0.52, "cut": "Very-Good", "color": "E", "clarity": "VS2", "depth": 62.2, "table": 56, "price": 1665, "x": 5.16, "y": 5.17, "z": 3.21 }, { "name": 19714, "carat": 1.51, "cut": "Fair", "color": "I", "clarity": "VS2", "depth": 64.6, "table": 58, "price": 8287, "x": 7.19, "y": 7.15, "z": 4.63 }, { "name": 1192, "carat": 0.72, "cut": "Very-Good", "color": "G", "clarity": "VVS2", "depth": 62.2, "table": 57, "price": 2933, "x": 5.67, "y": 5.72, "z": 3.54 }, { "name": 17556, "carat": 1.55, "cut": "Very-Good", "color": "H", "clarity": "SI1", "depth": 63.2, "table": 57, "price": 7066, "x": 7.35, "y": 7.31, "z": 4.64 }, { "name": 21432, "carat": 1.51, "cut": "Good", "color": "E", "clarity": "SI1", "depth": 65.5, "table": 56, "price": 9539, "x": 7.12, "y": 7.16, "z": 4.68 }, { "name": 4090, "carat": 0.9, "cut": "Very-Good", "color": "D", "clarity": "SI2", "depth": 63, "table": 58, "price": 3534, "x": 6.12, "y": 6.16, "z": 3.87 }, { "name": 29990, "carat": 0.32, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 61.6, "table": 57, "price": 716, "x": 4.39, "y": 4.42, "z": 2.71 }, { "name": 18058, "carat": 0.34, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 60.8, "table": 56, "price": 616, "x": 4.53, "y": 4.55, "z": 2.76 }, { "name": 44285, "carat": 0.52, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 62, "table": 55, "price": 1577, "x": 5.19, "y": 5.13, "z": 3.2 }, { "name": 10297, "carat": 1.01, "cut": "Good", "color": "F", "clarity": "SI1", "depth": 63.5, "table": 59, "price": 4759, "x": 6.3, "y": 6.39, "z": 4.03 }, { "name": 44889, "carat": 0.5, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 61.8, "table": 59, "price": 1629, "x": 5.12, "y": 5.08, "z": 3.15 }, { "name": 2845, "carat": 0.56, "cut": "Ideal", "color": "D", "clarity": "VVS1", "depth": 61.8, "table": 56, "price": 3270, "x": 5.28, "y": 5.31, "z": 3.27 }, { "name": 1505, "carat": 0.75, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 61.1, "table": 57, "price": 2993, "x": 5.83, "y": 5.86, "z": 3.57 }, { "name": 29164, "carat": 0.27, "cut": "Good", "color": "D", "clarity": "VVS2", "depth": 64.3, "table": 55, "price": 693, "x": 4.14, "y": 4.09, "z": 2.65 }, { "name": 37686, "carat": 0.43, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 61, "table": 57, "price": 993, "x": 4.88, "y": 4.85, "z": 2.97 }, { "name": 8363, "carat": 1.01, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 61, "table": 56, "price": 4399, "x": 6.47, "y": 6.54, "z": 3.97 }, { "name": 21925, "carat": 1.23, "cut": "Very-Good", "color": "G", "clarity": "VVS2", "depth": 62.2, "table": 57, "price": 9999, "x": 6.8, "y": 6.87, "z": 4.25 }, { "name": 6997, "carat": 1, "cut": "Good", "color": "F", "clarity": "SI2", "depth": 63.8, "table": 58, "price": 4155, "x": 6.33, "y": 6.28, "z": 4.02 }, { "name": 31546, "carat": 0.3, "cut": "Ideal", "color": "E", "clarity": "VVS2", "depth": 62.1, "table": 57, "price": 766, "x": 4.27, "y": 4.3, "z": 2.66 }, { "name": 30660, "carat": 0.42, "cut": "Very-Good", "color": "G", "clarity": "SI1", "depth": 62.9, "table": 54, "price": 737, "x": 4.79, "y": 4.81, "z": 3.02 }, { "name": 48380, "carat": 0.58, "cut": "Ideal", "color": "E", "clarity": "VS1", "depth": 60.1, "table": 57, "price": 1965, "x": 5.41, "y": 5.47, "z": 3.27 }, { "name": 33793, "carat": 0.4, "cut": "Premium", "color": "I", "clarity": "VVS1", "depth": 62.7, "table": 59, "price": 842, "x": 4.67, "y": 4.71, "z": 2.94 }, { "name": 44592, "carat": 0.53, "cut": "Premium", "color": "I", "clarity": "VVS1", "depth": 63, "table": 56, "price": 1607, "x": 5.19, "y": 5.13, "z": 3.25 }, { "name": 10888, "carat": 1.21, "cut": "Ideal", "color": "I", "clarity": "SI2", "depth": 60.7, "table": 56, "price": 4880, "x": 6.86, "y": 6.91, "z": 4.18 }, { "name": 49510, "carat": 0.73, "cut": "Ideal", "color": "J", "clarity": "VS1", "depth": 62, "table": 53, "price": 2121, "x": 5.78, "y": 5.82, "z": 3.6 }, { "name": 22374, "carat": 0.31, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 62.5, "table": 60, "price": 628, "x": 4.36, "y": 4.31, "z": 2.71 }, { "name": 6709, "carat": 0.24, "cut": "Very-Good", "color": "E", "clarity": "VS1", "depth": 62.5, "table": 55, "price": 412, "x": 3.96, "y": 3.98, "z": 2.48 }, { "name": 16834, "carat": 1.01, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 63.6, "table": 59, "price": 6714, "x": 6.3, "y": 6.34, "z": 4.02 }, { "name": 14128, "carat": 1.13, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 61.7, "table": 56, "price": 5728, "x": 6.73, "y": 6.65, "z": 4.13 }, { "name": 48456, "carat": 0.58, "cut": "Premium", "color": "G", "clarity": "VVS2", "depth": 61.4, "table": 61, "price": 1975, "x": 5.43, "y": 5.38, "z": 3.32 }, { "name": 52067, "carat": 0.79, "cut": "Ideal", "color": "G", "clarity": "SI2", "depth": 60.8, "table": 57, "price": 2453, "x": 5.99, "y": 5.96, "z": 3.63 }, { "name": 46822, "carat": 0.7, "cut": "Premium", "color": "H", "clarity": "SI2", "depth": 60.5, "table": 61, "price": 1808, "x": 5.75, "y": 5.72, "z": 3.47 }, { "name": 40311, "carat": 0.4, "cut": "Premium", "color": "E", "clarity": "VS1", "depth": 62.5, "table": 58, "price": 1125, "x": 4.72, "y": 4.69, "z": 2.94 }, { "name": 3638, "carat": 0.74, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 61.2, "table": 56, "price": 3434, "x": 5.82, "y": 5.85, "z": 3.57 }, { "name": 37724, "carat": 0.34, "cut": "Premium", "color": "G", "clarity": "VVS2", "depth": 61.6, "table": 58, "price": 995, "x": 4.49, "y": 4.44, "z": 2.75 }, { "name": 46074, "carat": 0.5, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 62.9, "table": 55, "price": 1736, "x": 5.12, "y": 5.08, "z": 3.21 }, { "name": 20574, "carat": 1.24, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 62.7, "table": 58, "price": 8887, "x": 6.79, "y": 6.86, "z": 4.28 }, { "name": 46990, "carat": 0.57, "cut": "Good", "color": "G", "clarity": "VS2", "depth": 58.2, "table": 66, "price": 1816, "x": 5.34, "y": 5.45, "z": 3.14 }, { "name": 2760, "carat": 0.93, "cut": "Premium", "color": "J", "clarity": "VS2", "depth": 62.3, "table": 60, "price": 3250, "x": 6.3, "y": 6.23, "z": 3.9 }, { "name": 40891, "carat": 0.5, "cut": "Fair", "color": "E", "clarity": "SI1", "depth": 65, "table": 58, "price": 1176, "x": 4.98, "y": 4.9, "z": 3.21 }, { "name": 27955, "carat": 0.27, "cut": "Ideal", "color": "I", "clarity": "VS1", "depth": 62.5, "table": 54, "price": 432, "x": 4.16, "y": 4.19, "z": 2.61 }, { "name": 13867, "carat": 1.01, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 62.3, "table": 58, "price": 5646, "x": 6.35, "y": 6.42, "z": 3.98 }, { "name": 742, "carat": 0.33, "cut": "Premium", "color": "G", "clarity": "SI2", "depth": 62.6, "table": 58, "price": 557, "x": 4.42, "y": 4.4, "z": 2.76 }, { "name": 34077, "carat": 0.36, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 61, "table": 56, "price": 852, "x": 4.59, "y": 4.63, "z": 2.81 }, { "name": 47862, "carat": 0.56, "cut": "Premium", "color": "D", "clarity": "VS2", "depth": 61.5, "table": 58, "price": 1910, "x": 5.28, "y": 5.33, "z": 3.26 }, { "name": 31308, "carat": 0.32, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 62.6, "table": 57, "price": 758, "x": 4.37, "y": 4.41, "z": 2.75 }, { "name": 784, "carat": 0.53, "cut": "Ideal", "color": "F", "clarity": "VVS1", "depth": 61.4, "table": 57, "price": 2860, "x": 5.23, "y": 5.2, "z": 3.2 }, { "name": 17276, "carat": 1.07, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 61.8, "table": 57, "price": 6917, "x": 6.58, "y": 6.52, "z": 4.05 }, { "name": 26631, "carat": 2.22, "cut": "Good", "color": "I", "clarity": "SI2", "depth": 63.2, "table": 57, "price": 16398, "x": 8.23, "y": 8.28, "z": 5.22 }, { "name": 39297, "carat": 0.3, "cut": "Ideal", "color": "H", "clarity": "VS2", "depth": 62.3, "table": 57, "price": 491, "x": 4.27, "y": 4.3, "z": 2.67 }, { "name": 31558, "carat": 0.38, "cut": "Very-Good", "color": "G", "clarity": "VS2", "depth": 59.9, "table": 58, "price": 766, "x": 4.72, "y": 4.77, "z": 2.84 }, { "name": 10524, "carat": 1.01, "cut": "Ideal", "color": "D", "clarity": "SI2", "depth": 63, "table": 54, "price": 4805, "x": 6.43, "y": 6.39, "z": 4.04 }, { "name": 19656, "carat": 1.01, "cut": "Premium", "color": "D", "clarity": "VS1", "depth": 62.4, "table": 58, "price": 8265, "x": 6.38, "y": 6.41, "z": 3.99 }, { "name": 44163, "carat": 0.5, "cut": "Very-Good", "color": "D", "clarity": "VS2", "depth": 61.1, "table": 58, "price": 1565, "x": 5.09, "y": 5.18, "z": 3.14 }, { "name": 15322, "carat": 1.04, "cut": "Good", "color": "G", "clarity": "VS1", "depth": 58.9, "table": 64, "price": 6151, "x": 6.6, "y": 6.64, "z": 3.9 }, { "name": 33575, "carat": 0.3, "cut": "Very-Good", "color": "F", "clarity": "VVS1", "depth": 62.2, "table": 56, "price": 832, "x": 4.28, "y": 4.3, "z": 2.67 }, { "name": 23208, "carat": 1, "cut": "Very-Good", "color": "E", "clarity": "IF", "depth": 62.5, "table": 55, "price": 11214, "x": 6.28, "y": 6.39, "z": 3.96 }, { "name": 35938, "carat": 0.41, "cut": "Very-Good", "color": "D", "clarity": "SI1", "depth": 60.3, "table": 63, "price": 920, "x": 4.8, "y": 4.78, "z": 2.89 }, { "name": 25815, "carat": 1.62, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 61.1, "table": 60, "price": 14826, "x": 7.56, "y": 7.57, "z": 4.62 }, { "name": 36962, "carat": 0.41, "cut": "Premium", "color": "G", "clarity": "VS1", "depth": 61.9, "table": 60, "price": 961, "x": 4.76, "y": 4.7, "z": 2.93 }, { "name": 22887, "carat": 1.36, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 59.3, "table": 60, "price": 10929, "x": 7.23, "y": 7.2, "z": 4.28 }, { "name": 8411, "carat": 0.9, "cut": "Ideal", "color": "H", "clarity": "VS2", "depth": 61.9, "table": 58, "price": 4403, "x": 6.2, "y": 6.24, "z": 3.85 }, { "name": 30964, "carat": 0.36, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 61.1, "table": 55, "price": 746, "x": 4.63, "y": 4.66, "z": 2.84 }, { "name": 11781, "carat": 1.02, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 61.1, "table": 58, "price": 5084, "x": 6.51, "y": 6.46, "z": 3.96 }, { "name": 4269, "carat": 1.02, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 62.2, "table": 52, "price": 3581, "x": 6.47, "y": 6.43, "z": 4.01 }, { "name": 2070, "carat": 0.32, "cut": "Premium", "color": "E", "clarity": "SI1", "depth": 61.9, "table": 59, "price": 561, "x": 4.36, "y": 4.39, "z": 2.71 }, { "name": 3541, "carat": 1.01, "cut": "Good", "color": "I", "clarity": "SI2", "depth": 64.1, "table": 58, "price": 3411, "x": 6.31, "y": 6.26, "z": 4.03 }, { "name": 21716, "carat": 0.28, "cut": "Very-Good", "color": "F", "clarity": "VVS2", "depth": 60.2, "table": 58, "price": 628, "x": 4.26, "y": 4.28, "z": 2.57 }, { "name": 35949, "carat": 0.3, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 61.9, "table": 54, "price": 475, "x": 4.33, "y": 4.36, "z": 2.69 }, { "name": 26088, "carat": 2.03, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 61.9, "table": 59, "price": 15322, "x": 8.14, "y": 8.09, "z": 5.02 }, { "name": 11169, "carat": 1.07, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 62.6, "table": 61, "price": 4949, "x": 6.49, "y": 6.42, "z": 4.04 }, { "name": 25784, "carat": 1.5, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 62.6, "table": 57, "price": 14759, "x": 7.27, "y": 7.34, "z": 4.57 }, { "name": 47991, "carat": 0.32, "cut": "Good", "color": "F", "clarity": "SI1", "depth": 63.2, "table": 55, "price": 533, "x": 4.37, "y": 4.4, "z": 2.77 }, { "name": 4390, "carat": 0.31, "cut": "Ideal", "color": "D", "clarity": "SI1", "depth": 62.6, "table": 57, "price": 571, "x": 4.3, "y": 4.33, "z": 2.7 }, { "name": 38412, "carat": 0.35, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 61, "table": 57, "price": 1024, "x": 4.58, "y": 4.54, "z": 2.78 }, { "name": 28578, "carat": 0.3, "cut": "Premium", "color": "H", "clarity": "VS1", "depth": 63, "table": 59, "price": 675, "x": 4.27, "y": 4.21, "z": 2.67 }, { "name": 20013, "carat": 0.32, "cut": "Premium", "color": "G", "clarity": "SI2", "depth": 61.6, "table": 59, "price": 421, "x": 4.35, "y": 4.38, "z": 2.69 }, { "name": 29574, "carat": 0.41, "cut": "Good", "color": "F", "clarity": "SI1", "depth": 63.7, "table": 58, "price": 705, "x": 4.71, "y": 4.74, "z": 3.01 }, { "name": 44447, "carat": 0.51, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 61.9, "table": 55, "price": 1591, "x": 5.11, "y": 5.15, "z": 3.18 }, { "name": 22881, "carat": 1.26, "cut": "Very-Good", "color": "G", "clarity": "VVS1", "depth": 60.2, "table": 59, "price": 10922, "x": 6.98, "y": 7.07, "z": 4.23 }, { "name": 35856, "carat": 0.32, "cut": "Ideal", "color": "D", "clarity": "VVS1", "depth": 62.6, "table": 57, "price": 917, "x": 4.34, "y": 4.41, "z": 2.74 }, { "name": 52284, "carat": 0.59, "cut": "Very-Good", "color": "E", "clarity": "VVS2", "depth": 61.7, "table": 59, "price": 2494, "x": 5.37, "y": 5.36, "z": 3.31 }, { "name": 16038, "carat": 0.3, "cut": "Very-Good", "color": "I", "clarity": "VS1", "depth": 63.3, "table": 59, "price": 608, "x": 4.23, "y": 4.2, "z": 2.67 }, { "name": 51853, "carat": 0.7, "cut": "Ideal", "color": "D", "clarity": "SI2", "depth": 60.3, "table": 56, "price": 2423, "x": 5.77, "y": 5.73, "z": 3.47 }, { "name": 33738, "carat": 0.3, "cut": "Very-Good", "color": "E", "clarity": "VVS2", "depth": 62.9, "table": 55, "price": 840, "x": 4.25, "y": 4.27, "z": 2.68 }, { "name": 14498, "carat": 0.9, "cut": "Good", "color": "G", "clarity": "IF", "depth": 61.8, "table": 61, "price": 5855, "x": 6.12, "y": 6.17, "z": 3.8 }, { "name": 33530, "carat": 0.35, "cut": "Very-Good", "color": "E", "clarity": "VS1", "depth": 62.3, "table": 60, "price": 829, "x": 4.5, "y": 4.52, "z": 2.81 }, { "name": 39122, "carat": 0.41, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 59.7, "table": 59, "price": 1061, "x": 4.84, "y": 4.81, "z": 2.88 }, { "name": 15622, "carat": 1.01, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 63.1, "table": 56, "price": 6267, "x": 6.41, "y": 6.37, "z": 4.03 }, { "name": 14279, "carat": 1.01, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 61.2, "table": 60, "price": 5780, "x": 6.47, "y": 6.41, "z": 3.94 }, { "name": 41635, "carat": 0.32, "cut": "Ideal", "color": "J", "clarity": "VS2", "depth": 62.1, "table": 54, "price": 504, "x": 4.44, "y": 4.38, "z": 2.74 }, { "name": 1109, "carat": 0.85, "cut": "Ideal", "color": "G", "clarity": "SI2", "depth": 62, "table": 57, "price": 2913, "x": 6.1, "y": 6.02, "z": 3.76 }, { "name": 15925, "carat": 1.31, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 62.1, "table": 58, "price": 6368, "x": 7.01, "y": 6.86, "z": 4.31 }, { "name": 23645, "carat": 3.65, "cut": "Fair", "color": "H", "clarity": "I1", "depth": 67.1, "table": 53, "price": 11668, "x": 9.53, "y": 9.48, "z": 6.38 }, { "name": 51650, "carat": 0.26, "cut": "Very-Good", "color": "G", "clarity": "VVS1", "depth": 61.8, "table": 57, "price": 545, "x": 4.06, "y": 4.1, "z": 2.52 }, { "name": 32858, "carat": 0.4, "cut": "Ideal", "color": "H", "clarity": "VS1", "depth": 61.8, "table": 56, "price": 807, "x": 4.74, "y": 4.78, "z": 2.94 }, { "name": 9462, "carat": 0.9, "cut": "Very-Good", "color": "G", "clarity": "VS2", "depth": 62.5, "table": 57, "price": 4600, "x": 6.12, "y": 6.14, "z": 3.83 }, { "name": 28225, "carat": 0.33, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 62.1, "table": 55, "price": 666, "x": 4.45, "y": 4.47, "z": 2.77 }, { "name": 36301, "carat": 0.32, "cut": "Ideal", "color": "H", "clarity": "VVS1", "depth": 60.4, "table": 57, "price": 936, "x": 4.46, "y": 4.42, "z": 2.68 }, { "name": 21272, "carat": 1.2, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 61.4, "table": 55, "price": 9424, "x": 6.78, "y": 6.87, "z": 4.19 }, { "name": 53353, "carat": 1, "cut": "Good", "color": "D", "clarity": "I1", "depth": 57.8, "table": 62, "price": 2657, "x": 6.51, "y": 6.47, "z": 3.75 }, { "name": 19863, "carat": 1.01, "cut": "Premium", "color": "D", "clarity": "VS1", "depth": 62.4, "table": 58, "price": 8416, "x": 6.41, "y": 6.38, "z": 3.99 }, { "name": 49842, "carat": 0.71, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 61.3, "table": 58, "price": 2169, "x": 5.76, "y": 5.82, "z": 3.55 }, { "name": 12867, "carat": 1.12, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 62.2, "table": 60, "price": 5363, "x": 6.65, "y": 6.59, "z": 4.12 }, { "name": 45455, "carat": 0.5, "cut": "Very-Good", "color": "E", "clarity": "VS1", "depth": 62.7, "table": 56, "price": 1675, "x": 5.09, "y": 5.12, "z": 3.2 }, { "name": 17538, "carat": 1, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 61.7, "table": 55, "price": 7056, "x": 6.42, "y": 6.39, "z": 3.95 }, { "name": 50586, "carat": 0.56, "cut": "Ideal", "color": "F", "clarity": "VVS2", "depth": 62.3, "table": 54, "price": 2281, "x": 5.29, "y": 5.34, "z": 3.31 }, { "name": 12350, "carat": 1.14, "cut": "Premium", "color": "F", "clarity": "SI1", "depth": 62.5, "table": 59, "price": 5228, "x": 6.67, "y": 6.65, "z": 4.16 }, { "name": 24704, "carat": 0.32, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 62.1, "table": 55, "price": 639, "x": 4.39, "y": 4.43, "z": 2.74 }, { "name": 39854, "carat": 0.57, "cut": "Good", "color": "J", "clarity": "VS2", "depth": 63.3, "table": 56, "price": 1100, "x": 5.24, "y": 5.28, "z": 3.33 }, { "name": 40949, "carat": 0.3, "cut": "Good", "color": "F", "clarity": "SI1", "depth": 63.5, "table": 59, "price": 500, "x": 4.19, "y": 4.22, "z": 2.67 }, { "name": 29620, "carat": 0.3, "cut": "Ideal", "color": "I", "clarity": "SI1", "depth": 60.4, "table": 59, "price": 439, "x": 4.33, "y": 4.35, "z": 2.62 }, { "name": 15525, "carat": 1.01, "cut": "Very-Good", "color": "E", "clarity": "VS2", "depth": 63, "table": 60, "price": 6221, "x": 6.32, "y": 6.35, "z": 3.99 }, { "name": 52886, "carat": 0.7, "cut": "Good", "color": "D", "clarity": "SI2", "depth": 58.2, "table": 63, "price": 2583, "x": 5.78, "y": 5.83, "z": 3.38 }, { "name": 41653, "carat": 0.59, "cut": "Very-Good", "color": "H", "clarity": "SI1", "depth": 61.8, "table": 56, "price": 1239, "x": 5.39, "y": 5.43, "z": 3.35 }, { "name": 22879, "carat": 1.5, "cut": "Ideal", "color": "H", "clarity": "VS2", "depth": 62.3, "table": 56, "price": 10920, "x": 7.34, "y": 7.29, "z": 4.56 }, { "name": 13418, "carat": 1.5, "cut": "Ideal", "color": "I", "clarity": "I1", "depth": 61.8, "table": 57, "price": 5510, "x": 7.39, "y": 7.31, "z": 4.54 }, { "name": 7283, "carat": 1, "cut": "Premium", "color": "E", "clarity": "SI2", "depth": 62.8, "table": 59, "price": 4200, "x": 6.34, "y": 6.3, "z": 3.97 }, { "name": 19217, "carat": 1.51, "cut": "Good", "color": "I", "clarity": "SI2", "depth": 63.6, "table": 60, "price": 7957, "x": 7.27, "y": 7.23, "z": 4.61 }, { "name": 11040, "carat": 1.01, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 60.7, "table": 61, "price": 4921, "x": 6.47, "y": 6.39, "z": 3.9 }, { "name": 45136, "carat": 0.5, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 62.4, "table": 55, "price": 1653, "x": 5.09, "y": 5.1, "z": 3.18 }, { "name": 37894, "carat": 0.41, "cut": "Very-Good", "color": "G", "clarity": "VVS2", "depth": 62.9, "table": 56, "price": 1007, "x": 4.7, "y": 4.74, "z": 2.97 }, { "name": 46392, "carat": 0.37, "cut": "Ideal", "color": "D", "clarity": "VVS1", "depth": 61.3, "table": 56, "price": 1764, "x": 4.6, "y": 4.63, "z": 2.83 }, { "name": 28687, "carat": 0.36, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 62.3, "table": 57, "price": 678, "x": 4.55, "y": 4.57, "z": 2.84 }, { "name": 7453, "carat": 0.9, "cut": "Premium", "color": "H", "clarity": "VS1", "depth": 62.7, "table": 60, "price": 4234, "x": 6.12, "y": 6.07, "z": 3.82 }, { "name": 17663, "carat": 1.02, "cut": "Ideal", "color": "D", "clarity": "VS1", "depth": 62.7, "table": 55, "price": 7118, "x": 6.49, "y": 6.4, "z": 4.04 }, { "name": 50415, "carat": 0.71, "cut": "Good", "color": "F", "clarity": "SI1", "depth": 64.3, "table": 58, "price": 2258, "x": 5.61, "y": 5.55, "z": 3.59 }, { "name": 32993, "carat": 0.38, "cut": "Premium", "color": "I", "clarity": "VS2", "depth": 61.5, "table": 58, "price": 812, "x": 4.62, "y": 4.61, "z": 2.84 }, { "name": 29, "carat": 0.23, "cut": "Very-Good", "color": "D", "clarity": "VS2", "depth": 60.5, "table": 61, "price": 357, "x": 3.96, "y": 3.97, "z": 2.4 }, { "name": 5320, "carat": 0.9, "cut": "Good", "color": "D", "clarity": "SI2", "depth": 62.3, "table": 58, "price": 3806, "x": 6.05, "y": 6.27, "z": 3.84 }, { "name": 23642, "carat": 1.51, "cut": "Premium", "color": "F", "clarity": "SI1", "depth": 62.8, "table": 59, "price": 11666, "x": 7.31, "y": 7.28, "z": 4.58 }, { "name": 17874, "carat": 1.4, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 61.2, "table": 56, "price": 7213, "x": 7.23, "y": 7.18, "z": 4.41 }, { "name": 51203, "carat": 0.7, "cut": "Fair", "color": "H", "clarity": "VS2", "depth": 67.8, "table": 56, "price": 2351, "x": 5.42, "y": 5.38, "z": 3.66 }, { "name": 22743, "carat": 1.51, "cut": "Ideal", "color": "H", "clarity": "VS2", "depth": 62.5, "table": 55, "price": 10763, "x": 7.29, "y": 7.34, "z": 4.57 }, { "name": 28569, "carat": 0.3, "cut": "Good", "color": "H", "clarity": "VS1", "depth": 63.9, "table": 55, "price": 675, "x": 4.28, "y": 4.26, "z": 2.73 }, { "name": 51750, "carat": 0.78, "cut": "Very-Good", "color": "H", "clarity": "SI2", "depth": 62.6, "table": 59, "price": 2405, "x": 5.81, "y": 5.85, "z": 3.65 }, { "name": 44363, "carat": 0.56, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 60.9, "table": 56, "price": 1580, "x": 5.32, "y": 5.35, "z": 3.25 }, { "name": 42559, "carat": 0.42, "cut": "Ideal", "color": "D", "clarity": "VVS2", "depth": 62.1, "table": 55, "price": 1326, "x": 4.78, "y": 4.81, "z": 2.98 }, { "name": 32403, "carat": 0.37, "cut": "Premium", "color": "F", "clarity": "SI1", "depth": 62.5, "table": 58, "price": 791, "x": 4.57, "y": 4.52, "z": 2.84 }, { "name": 15752, "carat": 1.32, "cut": "Very-Good", "color": "I", "clarity": "SI2", "depth": 61.2, "table": 58, "price": 6300, "x": 7.12, "y": 7.06, "z": 4.34 }, { "name": 46703, "carat": 0.55, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 61.4, "table": 56, "price": 1792, "x": 5.32, "y": 5.26, "z": 3.25 }, { "name": 2555, "carat": 0.93, "cut": "Very-Good", "color": "J", "clarity": "VS2", "depth": 63.3, "table": 61, "price": 3208, "x": 6.19, "y": 6.14, "z": 3.9 }, { "name": 11773, "carat": 1.21, "cut": "Premium", "color": "H", "clarity": "SI2", "depth": 58.2, "table": 59, "price": 5082, "x": 7.05, "y": 7.03, "z": 4.1 }, { "name": 39085, "carat": 0.41, "cut": "Good", "color": "E", "clarity": "VVS2", "depth": 63.1, "table": 58, "price": 1060, "x": 4.72, "y": 4.75, "z": 2.99 }, { "name": 53456, "carat": 0.7, "cut": "Very-Good", "color": "D", "clarity": "SI1", "depth": 61.1, "table": 57, "price": 2677, "x": 5.74, "y": 5.66, "z": 3.48 }, { "name": 44088, "carat": 0.5, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 62.1, "table": 55, "price": 1554, "x": 5.11, "y": 5.13, "z": 3.18 }, { "name": 8446, "carat": 1.01, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 62.3, "table": 58, "price": 4412, "x": 6.45, "y": 6.36, "z": 3.99 }, { "name": 35862, "carat": 0.4, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 61.8, "table": 54, "price": 917, "x": 4.75, "y": 4.77, "z": 2.94 }, { "name": 49888, "carat": 0.65, "cut": "Ideal", "color": "H", "clarity": "VVS1", "depth": 62.4, "table": 54, "price": 2177, "x": 5.55, "y": 5.57, "z": 3.47 }, { "name": 30460, "carat": 0.4, "cut": "Premium", "color": "H", "clarity": "VS1", "depth": 62.7, "table": 59, "price": 731, "x": 4.63, "y": 4.71, "z": 2.93 }, { "name": 7842, "carat": 0.91, "cut": "Very-Good", "color": "D", "clarity": "SI1", "depth": 62.8, "table": 57, "price": 4303, "x": 6.12, "y": 6.17, "z": 3.86 }, { "name": 36223, "carat": 0.36, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 60, "table": 56, "price": 933, "x": 4.68, "y": 4.66, "z": 2.8 }, { "name": 33553, "carat": 0.3, "cut": "Ideal", "color": "G", "clarity": "IF", "depth": 62.3, "table": 52.8, "price": 830, "x": 4.29, "y": 4.33, "z": 2.69 }, { "name": 35961, "carat": 0.3, "cut": "Very-Good", "color": "D", "clarity": "SI1", "depth": 62.6, "table": 59, "price": 476, "x": 4.24, "y": 4.26, "z": 2.66 }, { "name": 42011, "carat": 0.51, "cut": "Premium", "color": "E", "clarity": "SI2", "depth": 61.8, "table": 58, "price": 1265, "x": 5.11, "y": 5.08, "z": 3.15 }, { "name": 9296, "carat": 0.91, "cut": "Premium", "color": "G", "clarity": "VS1", "depth": 62.5, "table": 61, "price": 4570, "x": 6.17, "y": 6.05, "z": 3.82 }, { "name": 34989, "carat": 0.34, "cut": "Ideal", "color": "E", "clarity": "VS1", "depth": 62, "table": 57, "price": 881, "x": 4.49, "y": 4.44, "z": 2.77 }, { "name": 51770, "carat": 0.7, "cut": "Good", "color": "F", "clarity": "SI1", "depth": 58.7, "table": 60, "price": 2409, "x": 5.75, "y": 5.81, "z": 3.39 }, { "name": 10157, "carat": 1.02, "cut": "Very-Good", "color": "H", "clarity": "SI1", "depth": 61.6, "table": 58, "price": 4727, "x": 6.49, "y": 6.54, "z": 4.01 }, { "name": 111, "carat": 0.8, "cut": "Ideal", "color": "F", "clarity": "SI2", "depth": 61.4, "table": 57, "price": 2761, "x": 5.96, "y": 6, "z": 3.67 }, { "name": 42346, "carat": 0.42, "cut": "Ideal", "color": "H", "clarity": "VS1", "depth": 61, "table": 57, "price": 1299, "x": 4.85, "y": 4.89, "z": 2.97 }, { "name": 16255, "carat": 1.2, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 61.2, "table": 56, "price": 6502, "x": 6.92, "y": 6.84, "z": 4.21 }, { "name": 33850, "carat": 0.3, "cut": "Premium", "color": "F", "clarity": "VS1", "depth": 61.9, "table": 59, "price": 844, "x": 4.3, "y": 4.26, "z": 2.65 }, { "name": 11943, "carat": 1.01, "cut": "Fair", "color": "F", "clarity": "SI1", "depth": 65, "table": 61, "price": 5131, "x": 6.29, "y": 6.23, "z": 4.07 }, { "name": 6954, "carat": 0.93, "cut": "Very-Good", "color": "G", "clarity": "SI1", "depth": 62.3, "table": 58, "price": 4144, "x": 6.2, "y": 6.29, "z": 3.9 }, { "name": 51812, "carat": 0.71, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 61.6, "table": 56, "price": 2416, "x": 5.71, "y": 5.75, "z": 3.53 }, { "name": 5367, "carat": 0.75, "cut": "Very-Good", "color": "E", "clarity": "VS2", "depth": 60.4, "table": 56, "price": 3817, "x": 5.9, "y": 5.96, "z": 3.58 }, { "name": 40884, "carat": 0.38, "cut": "Ideal", "color": "E", "clarity": "VVS2", "depth": 61.6, "table": 55, "price": 1176, "x": 4.66, "y": 4.63, "z": 2.86 }, { "name": 28456, "carat": 0.41, "cut": "Good", "color": "G", "clarity": "SI1", "depth": 63.4, "table": 57, "price": 671, "x": 4.7, "y": 4.73, "z": 2.99 }, { "name": 20701, "carat": 0.31, "cut": "Very-Good", "color": "G", "clarity": "VS1", "depth": 62.9, "table": 57, "price": 625, "x": 4.3, "y": 4.32, "z": 2.71 }, { "name": 17288, "carat": 1.12, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 62, "table": 58, "price": 6925, "x": 6.63, "y": 6.69, "z": 4.13 }, { "name": 31557, "carat": 0.38, "cut": "Very-Good", "color": "G", "clarity": "VS2", "depth": 60.4, "table": 57, "price": 766, "x": 4.67, "y": 4.7, "z": 2.83 }, { "name": 47244, "carat": 0.62, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 61.1, "table": 59, "price": 1841, "x": 5.56, "y": 5.5, "z": 3.38 }, { "name": 29351, "carat": 0.31, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 62, "table": 57, "price": 698, "x": 4.37, "y": 4.34, "z": 2.7 }, { "name": 29461, "carat": 0.32, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 62.2, "table": 56, "price": 702, "x": 4.37, "y": 4.41, "z": 2.73 }, { "name": 52358, "carat": 0.74, "cut": "Ideal", "color": "E", "clarity": "SI2", "depth": 61.7, "table": 57, "price": 2501, "x": 5.78, "y": 5.82, "z": 3.58 }, { "name": 37202, "carat": 0.46, "cut": "Ideal", "color": "I", "clarity": "VVS1", "depth": 61.7, "table": 57, "price": 974, "x": 4.96, "y": 4.99, "z": 3.07 }, { "name": 41766, "carat": 0.52, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 61.7, "table": 55, "price": 1245, "x": 5.17, "y": 5.21, "z": 3.2 }, { "name": 13395, "carat": 0.32, "cut": "Good", "color": "F", "clarity": "VS2", "depth": 63.3, "table": 57, "price": 602, "x": 4.34, "y": 4.38, "z": 2.76 }, { "name": 15775, "carat": 1.28, "cut": "Ideal", "color": "I", "clarity": "VS2", "depth": 61.4, "table": 57, "price": 6308, "x": 7.04, "y": 6.97, "z": 4.3 }, { "name": 30071, "carat": 0.32, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 62.3, "table": 60, "price": 720, "x": 4.4, "y": 4.37, "z": 2.73 }, { "name": 35305, "carat": 0.3, "cut": "Ideal", "color": "I", "clarity": "VS1", "depth": 61, "table": 56, "price": 473, "x": 4.35, "y": 4.37, "z": 2.66 }, { "name": 2839, "carat": 0.96, "cut": "Premium", "color": "J", "clarity": "SI1", "depth": 60.3, "table": 59, "price": 3269, "x": 6.4, "y": 6.36, "z": 3.85 }, { "name": 5321, "carat": 0.9, "cut": "Very-Good", "color": "D", "clarity": "SI2", "depth": 61, "table": 59, "price": 3806, "x": 6.14, "y": 6.18, "z": 3.76 }, { "name": 4166, "carat": 0.71, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 61.6, "table": 56, "price": 3553, "x": 5.73, "y": 5.77, "z": 3.54 }, { "name": 29995, "carat": 0.43, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 62.5, "table": 57, "price": 716, "x": 4.79, "y": 4.84, "z": 3.01 }, { "name": 44224, "carat": 0.5, "cut": "Ideal", "color": "D", "clarity": "VS1", "depth": 63, "table": 57, "price": 1571, "x": 5.06, "y": 5, "z": 3.17 }, { "name": 17403, "carat": 1.09, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 61.4, "table": 56, "price": 6970, "x": 6.61, "y": 6.64, "z": 4.07 }, { "name": 47978, "carat": 0.38, "cut": "Ideal", "color": "G", "clarity": "SI2", "depth": 62, "table": 55, "price": 532, "x": 4.66, "y": 4.69, "z": 2.9 }, { "name": 13226, "carat": 1.01, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 62.1, "table": 56, "price": 5461, "x": 6.43, "y": 6.48, "z": 4.01 }, { "name": 47074, "carat": 0.52, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 62.3, "table": 56, "price": 1822, "x": 5.11, "y": 5.16, "z": 3.2 }, { "name": 47372, "carat": 0.54, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 61.8, "table": 55, "price": 1847, "x": 5.26, "y": 5.24, "z": 3.24 }, { "name": 11837, "carat": 1, "cut": "Good", "color": "D", "clarity": "SI1", "depth": 60.4, "table": 64, "price": 5096, "x": 6.39, "y": 6.3, "z": 3.83 }, { "name": 29997, "carat": 0.43, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 62.6, "table": 58, "price": 716, "x": 4.79, "y": 4.82, "z": 3.01 }, { "name": 23705, "carat": 0.4, "cut": "Good", "color": "J", "clarity": "VS1", "depth": 63.2, "table": 57, "price": 631, "x": 4.7, "y": 4.73, "z": 2.98 }, { "name": 32085, "carat": 0.33, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 60.9, "table": 55, "price": 781, "x": 4.47, "y": 4.5, "z": 2.73 }, { "name": 47038, "carat": 0.55, "cut": "Ideal", "color": "D", "clarity": "SI1", "depth": 60.6, "table": 56, "price": 1819, "x": 5.32, "y": 5.27, "z": 3.21 }, { "name": 18340, "carat": 1.29, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 60.9, "table": 59, "price": 7463, "x": 6.99, "y": 7.04, "z": 4.27 }, { "name": 40778, "carat": 0.5, "cut": "Very-Good", "color": "D", "clarity": "SI2", "depth": 61.9, "table": 56, "price": 1167, "x": 5.09, "y": 5.14, "z": 3.16 }, { "name": 17448, "carat": 1.07, "cut": "Very-Good", "color": "G", "clarity": "VS1", "depth": 60.9, "table": 55, "price": 6998, "x": 6.6, "y": 6.64, "z": 4.03 }, { "name": 53543, "carat": 0.78, "cut": "Fair", "color": "H", "clarity": "VS2", "depth": 54.7, "table": 67, "price": 2691, "x": 6.25, "y": 6.15, "z": 3.4 }, { "name": 33882, "carat": 0.3, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 61.5, "table": 56, "price": 844, "x": 4.33, "y": 4.29, "z": 2.65 }, { "name": 9332, "carat": 0.9, "cut": "Very-Good", "color": "E", "clarity": "VS2", "depth": 62.2, "table": 59, "price": 4580, "x": 6.13, "y": 6.18, "z": 3.83 }, { "name": 52271, "carat": 0.76, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 62.7, "table": 55, "price": 2491, "x": 5.83, "y": 5.74, "z": 3.63 }, { "name": 28016, "carat": 0.3, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 62.3, "table": 56, "price": 658, "x": 4.3, "y": 4.34, "z": 2.69 }, { "name": 29765, "carat": 0.35, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 61.8, "table": 56, "price": 709, "x": 4.58, "y": 4.54, "z": 2.82 }, { "name": 43461, "carat": 0.55, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 64.2, "table": 55, "price": 1417, "x": 5.18, "y": 5.2, "z": 3.33 }, { "name": 11508, "carat": 1.01, "cut": "Ideal", "color": "I", "clarity": "SI1", "depth": 62.5, "table": 56, "price": 5020, "x": 6.4, "y": 6.36, "z": 3.99 }, { "name": 19105, "carat": 1.22, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 61.2, "table": 58, "price": 7870, "x": 6.91, "y": 6.81, "z": 4.2 }, { "name": 33733, "carat": 0.39, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 60.9, "table": 55, "price": 839, "x": 4.73, "y": 4.76, "z": 2.89 }, { "name": 22264, "carat": 1.54, "cut": "Premium", "color": "E", "clarity": "SI1", "depth": 62.7, "table": 58, "price": 10314, "x": 7.37, "y": 7.3, "z": 4.6 }, { "name": 21692, "carat": 0.34, "cut": "Good", "color": "D", "clarity": "SI1", "depth": 63.1, "table": 57, "price": 626, "x": 4.44, "y": 4.46, "z": 2.81 }, { "name": 4129, "carat": 1.52, "cut": "Premium", "color": "I", "clarity": "I1", "depth": 61.2, "table": 58, "price": 3541, "x": 7.43, "y": 7.35, "z": 4.52 }, { "name": 49854, "carat": 0.71, "cut": "Very-Good", "color": "G", "clarity": "SI2", "depth": 62.4, "table": 54, "price": 2171, "x": 5.72, "y": 5.76, "z": 3.58 }, { "name": 37817, "carat": 0.36, "cut": "Very-Good", "color": "G", "clarity": "IF", "depth": 60.4, "table": 62, "price": 1002, "x": 4.6, "y": 4.64, "z": 2.79 }, { "name": 39821, "carat": 0.3, "cut": "Premium", "color": "E", "clarity": "IF", "depth": 61.9, "table": 58, "price": 1097, "x": 4.3, "y": 4.26, "z": 2.65 }, { "name": 26386, "carat": 1.23, "cut": "Very-Good", "color": "E", "clarity": "VVS1", "depth": 61.2, "table": 59, "price": 15878, "x": 6.9, "y": 6.98, "z": 4.25 }, { "name": 19879, "carat": 1.12, "cut": "Good", "color": "F", "clarity": "VVS2", "depth": 57.9, "table": 57, "price": 8430, "x": 6.86, "y": 6.83, "z": 3.96 }, { "name": 1205, "carat": 0.7, "cut": "Ideal", "color": "D", "clarity": "SI2", "depth": 62.6, "table": 54, "price": 2936, "x": 5.69, "y": 5.72, "z": 3.57 }, { "name": 53509, "carat": 0.71, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 59.6, "table": 59, "price": 2686, "x": 5.81, "y": 5.77, "z": 3.45 }, { "name": 46313, "carat": 0.3, "cut": "Ideal", "color": "H", "clarity": "VS1", "depth": 62.3, "table": 55, "price": 526, "x": 4.29, "y": 4.34, "z": 2.69 }, { "name": 21203, "carat": 1.57, "cut": "Ideal", "color": "J", "clarity": "VVS2", "depth": 61.4, "table": 57, "price": 9346, "x": 7.45, "y": 7.5, "z": 4.59 }, { "name": 47536, "carat": 0.51, "cut": "Very-Good", "color": "G", "clarity": "VVS1", "depth": 63.2, "table": 59, "price": 1871, "x": 5.04, "y": 5.09, "z": 3.2 }, { "name": 34885, "carat": 0.38, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 62, "table": 57, "price": 879, "x": 4.64, "y": 4.66, "z": 2.89 }, { "name": 18260, "carat": 1.55, "cut": "Ideal", "color": "J", "clarity": "VS2", "depth": 61.7, "table": 57, "price": 7416, "x": 7.37, "y": 7.42, "z": 4.56 }, { "name": 13936, "carat": 1.25, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 62.7, "table": 56, "price": 5670, "x": 6.92, "y": 6.87, "z": 4.32 }, { "name": 21943, "carat": 1.51, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 61.3, "table": 56, "price": 10012, "x": 7.44, "y": 7.4, "z": 4.55 }, { "name": 13677, "carat": 1.02, "cut": "Very-Good", "color": "H", "clarity": "VS1", "depth": 62.8, "table": 59, "price": 5598, "x": 6.34, "y": 6.47, "z": 4.02 }, { "name": 38367, "carat": 0.43, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 62.4, "table": 60, "price": 1022, "x": 4.82, "y": 4.79, "z": 3 }, { "name": 28449, "carat": 0.31, "cut": "Ideal", "color": "H", "clarity": "VVS1", "depth": 61.3, "table": 56, "price": 671, "x": 4.36, "y": 4.39, "z": 2.68 }, { "name": 17279, "carat": 1.29, "cut": "Ideal", "color": "J", "clarity": "VVS1", "depth": 61.2, "table": 56, "price": 6918, "x": 7.01, "y": 7.05, "z": 4.3 }, { "name": 26427, "carat": 2.01, "cut": "Ideal", "color": "F", "clarity": "SI2", "depth": 62.3, "table": 58, "price": 15955, "x": 8.03, "y": 8.01, "z": 5 }, { "name": 16905, "carat": 1.03, "cut": "Premium", "color": "G", "clarity": "VS1", "depth": 62.2, "table": 59, "price": 6749, "x": 6.46, "y": 6.41, "z": 4 }, { "name": 51360, "carat": 0.72, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 59.3, "table": 57, "price": 2364, "x": 5.89, "y": 5.85, "z": 3.48 }, { "name": 23591, "carat": 1.02, "cut": "Ideal", "color": "E", "clarity": "IF", "depth": 62.6, "table": 57, "price": 11605, "x": 6.47, "y": 6.41, "z": 4.03 }, { "name": 39676, "carat": 0.42, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 62.6, "table": 57, "price": 1087, "x": 4.8, "y": 4.76, "z": 2.99 }, { "name": 50879, "carat": 0.7, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 62.1, "table": 60, "price": 2314, "x": 5.71, "y": 5.65, "z": 3.53 }, { "name": 50743, "carat": 0.5, "cut": "Ideal", "color": "E", "clarity": "VVS2", "depth": 61.8, "table": 53.6, "price": 2297, "x": 5.1, "y": 5.13, "z": 3.16 }, { "name": 51754, "carat": 0.72, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 62.3, "table": 59, "price": 2405, "x": 5.77, "y": 5.69, "z": 3.57 }, { "name": 34118, "carat": 0.31, "cut": "Ideal", "color": "E", "clarity": "VVS1", "depth": 62.1, "table": 55, "price": 853, "x": 4.34, "y": 4.36, "z": 2.7 }, { "name": 27836, "carat": 0.31, "cut": "Good", "color": "H", "clarity": "VS1", "depth": 59.2, "table": 65, "price": 651, "x": 4.42, "y": 4.33, "z": 2.59 }, { "name": 10935, "carat": 0.9, "cut": "Very-Good", "color": "F", "clarity": "VS1", "depth": 62.1, "table": 58, "price": 4898, "x": 6.15, "y": 6.19, "z": 3.83 }, { "name": 51879, "carat": 0.71, "cut": "Very-Good", "color": "H", "clarity": "VS2", "depth": 59.2, "table": 63, "price": 2428, "x": 5.81, "y": 5.85, "z": 3.45 }, { "name": 52880, "carat": 0.78, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 62.8, "table": 56, "price": 2583, "x": 5.88, "y": 5.84, "z": 3.68 }, { "name": 18591, "carat": 1.51, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 61.3, "table": 61, "price": 7585, "x": 7.41, "y": 7.34, "z": 4.52 }, { "name": 41668, "carat": 0.4, "cut": "Ideal", "color": "I", "clarity": "VVS2", "depth": 62, "table": 56, "price": 1240, "x": 4.74, "y": 4.77, "z": 2.95 }, { "name": 31414, "carat": 0.3, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 62, "table": 58, "price": 764, "x": 4.28, "y": 4.3, "z": 2.66 }, { "name": 18767, "carat": 1.22, "cut": "Very-Good", "color": "H", "clarity": "VS1", "depth": 62.4, "table": 59, "price": 7673, "x": 6.91, "y": 6.85, "z": 4.29 }, { "name": 170, "carat": 0.71, "cut": "Good", "color": "E", "clarity": "VS2", "depth": 59.2, "table": 61, "price": 2772, "x": 5.8, "y": 5.88, "z": 3.46 }, { "name": 50007, "carat": 0.7, "cut": "Very-Good", "color": "F", "clarity": "SI2", "depth": 60.7, "table": 58, "price": 2195, "x": 5.73, "y": 5.77, "z": 3.49 }, { "name": 17670, "carat": 1.59, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 62.2, "table": 58, "price": 7123, "x": 7.49, "y": 7.45, "z": 4.64 }, { "name": 5549, "carat": 1.02, "cut": "Premium", "color": "I", "clarity": "SI2", "depth": 62, "table": 59, "price": 3856, "x": 6.45, "y": 6.42, "z": 3.99 }, { "name": 21449, "carat": 2, "cut": "Fair", "color": "H", "clarity": "SI2", "depth": 68.7, "table": 55, "price": 9549, "x": 7.9, "y": 7.67, "z": 5.35 }, { "name": 41066, "carat": 0.52, "cut": "Premium", "color": "F", "clarity": "SI1", "depth": 61.5, "table": 60, "price": 1191, "x": 5.15, "y": 5.16, "z": 3.17 }, { "name": 18494, "carat": 1.72, "cut": "Premium", "color": "F", "clarity": "I1", "depth": 60.1, "table": 58, "price": 7532, "x": 7.77, "y": 7.74, "z": 4.66 }, { "name": 27874, "carat": 0.42, "cut": "Premium", "color": "E", "clarity": "SI2", "depth": 60.1, "table": 58, "price": 653, "x": 4.87, "y": 4.91, "z": 2.94 }, { "name": 19620, "carat": 1.03, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 62.8, "table": 54, "price": 8237, "x": 6.48, "y": 6.39, "z": 4.05 }, { "name": 45404, "carat": 0.51, "cut": "Very-Good", "color": "D", "clarity": "VS2", "depth": 62.5, "table": 58, "price": 1668, "x": 5.12, "y": 5.18, "z": 3.22 }, { "name": 49824, "carat": 0.7, "cut": "Good", "color": "F", "clarity": "SI1", "depth": 63.1, "table": 64, "price": 2167, "x": 5.61, "y": 5.58, "z": 3.53 }, { "name": 32115, "carat": 0.43, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 61.9, "table": 55, "price": 783, "x": 4.84, "y": 4.88, "z": 3.01 }, { "name": 15385, "carat": 0.32, "cut": "Very-Good", "color": "G", "clarity": "VVS2", "depth": 64, "table": 55, "price": 607, "x": 4.31, "y": 4.35, "z": 2.77 }, { "name": 46742, "carat": 0.54, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 62.2, "table": 55, "price": 1799, "x": 5.23, "y": 5.25, "z": 3.26 }, { "name": 45000, "carat": 0.31, "cut": "Very-Good", "color": "G", "clarity": "SI2", "depth": 63.3, "table": 54, "price": 523, "x": 4.34, "y": 4.29, "z": 2.73 }, { "name": 43432, "carat": 0.54, "cut": "Very-Good", "color": "E", "clarity": "SI2", "depth": 60.7, "table": 56.5, "price": 1415, "x": 5.24, "y": 5.28, "z": 3.19 }, { "name": 36115, "carat": 0.42, "cut": "Premium", "color": "E", "clarity": "SI1", "depth": 61.5, "table": 58, "price": 926, "x": 4.84, "y": 4.78, "z": 2.96 }, { "name": 15582, "carat": 1.22, "cut": "Good", "color": "H", "clarity": "SI2", "depth": 63.5, "table": 56, "price": 6250, "x": 6.84, "y": 6.77, "z": 4.32 }, { "name": 50665, "carat": 0.31, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 62.7, "table": 58, "price": 544, "x": 4.31, "y": 4.33, "z": 2.71 }, { "name": 21280, "carat": 1.06, "cut": "Very-Good", "color": "F", "clarity": "IF", "depth": 60.6, "table": 56, "price": 9433, "x": 6.62, "y": 6.69, "z": 4.03 }, { "name": 39346, "carat": 0.38, "cut": "Ideal", "color": "E", "clarity": "VVS2", "depth": 62.2, "table": 53.8, "price": 1073, "x": 4.62, "y": 4.66, "z": 2.88 }, { "name": 53798, "carat": 0.72, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 61.3, "table": 56, "price": 2731, "x": 5.77, "y": 5.81, "z": 3.55 }, { "name": 15335, "carat": 1.36, "cut": "Premium", "color": "J", "clarity": "VS2", "depth": 58.4, "table": 59, "price": 6157, "x": 7.4, "y": 7.27, "z": 4.28 }, { "name": 29219, "carat": 0.34, "cut": "Ideal", "color": "I", "clarity": "IF", "depth": 61.6, "table": 54, "price": 695, "x": 4.5, "y": 4.53, "z": 2.78 }, { "name": 49795, "carat": 0.53, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 61.8, "table": 55, "price": 2163, "x": 5.21, "y": 5.24, "z": 3.23 }, { "name": 7118, "carat": 0.73, "cut": "Ideal", "color": "F", "clarity": "VVS1", "depth": 61.1, "table": 56, "price": 4171, "x": 5.83, "y": 5.86, "z": 3.57 }, { "name": 47672, "carat": 0.51, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 61.7, "table": 55, "price": 1882, "x": 5.14, "y": 5.11, "z": 3.16 }, { "name": 22618, "carat": 1.62, "cut": "Premium", "color": "I", "clarity": "VS2", "depth": 60.1, "table": 59, "price": 10669, "x": 7.63, "y": 7.6, "z": 4.58 }, { "name": 18267, "carat": 1.51, "cut": "Premium", "color": "J", "clarity": "VS2", "depth": 62.3, "table": 59, "price": 7418, "x": 7.31, "y": 7.35, "z": 4.57 }, { "name": 4350, "carat": 0.72, "cut": "Premium", "color": "D", "clarity": "VS1", "depth": 62.7, "table": 56, "price": 3601, "x": 5.76, "y": 5.69, "z": 3.59 }, { "name": 18997, "carat": 1.01, "cut": "Premium", "color": "E", "clarity": "VS1", "depth": 60.8, "table": 59, "price": 7821, "x": 6.42, "y": 6.46, "z": 3.92 }, { "name": 1669, "carat": 0.72, "cut": "Very-Good", "color": "G", "clarity": "VS1", "depth": 60.1, "table": 63, "price": 3024, "x": 5.86, "y": 5.82, "z": 3.51 }, { "name": 37291, "carat": 0.32, "cut": "Good", "color": "F", "clarity": "VVS1", "depth": 63.8, "table": 54, "price": 977, "x": 4.38, "y": 4.31, "z": 2.77 }, { "name": 25360, "carat": 0.31, "cut": "Very-Good", "color": "G", "clarity": "VVS1", "depth": 61.9, "table": 55, "price": 642, "x": 4.36, "y": 4.4, "z": 2.71 }, { "name": 44405, "carat": 0.55, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 60.8, "table": 56, "price": 1584, "x": 5.3, "y": 5.33, "z": 3.23 }, { "name": 50759, "carat": 0.72, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 60.5, "table": 59, "price": 2298, "x": 5.83, "y": 5.8, "z": 3.52 }, { "name": 40304, "carat": 0.4, "cut": "Ideal", "color": "E", "clarity": "VS1", "depth": 61.2, "table": 57, "price": 1125, "x": 4.77, "y": 4.74, "z": 2.91 }, { "name": 342, "carat": 0.91, "cut": "Ideal", "color": "D", "clarity": "SI2", "depth": 62.2, "table": 57, "price": 2803, "x": 6.21, "y": 6.15, "z": 3.85 }, { "name": 28375, "carat": 0.24, "cut": "Premium", "color": "E", "clarity": "VVS1", "depth": 60.6, "table": 59, "price": 668, "x": 4.02, "y": 4, "z": 2.43 }, { "name": 2939, "carat": 0.9, "cut": "Premium", "color": "I", "clarity": "VS2", "depth": 63, "table": 59, "price": 3292, "x": 6.1, "y": 6.06, "z": 3.83 }, { "name": 33426, "carat": 0.32, "cut": "Ideal", "color": "H", "clarity": "VVS2", "depth": 61.2, "table": 56, "price": 828, "x": 4.43, "y": 4.4, "z": 2.7 }, { "name": 1246, "carat": 0.78, "cut": "Very-Good", "color": "D", "clarity": "SI1", "depth": 62.4, "table": 58, "price": 2945, "x": 5.86, "y": 5.9, "z": 3.67 }, { "name": 42039, "carat": 0.54, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 61.1, "table": 56, "price": 1268, "x": 5.25, "y": 5.27, "z": 3.21 }, { "name": 51318, "carat": 0.31, "cut": "Ideal", "color": "H", "clarity": "VS1", "depth": 61.1, "table": 57, "price": 544, "x": 4.35, "y": 4.39, "z": 2.67 }, { "name": 16702, "carat": 0.3, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 62.6, "table": 55, "price": 421, "x": 4.28, "y": 4.32, "z": 2.69 }, { "name": 48199, "carat": 0.53, "cut": "Very-Good", "color": "G", "clarity": "VVS1", "depth": 61.7, "table": 57, "price": 1948, "x": 5.19, "y": 5.22, "z": 3.21 }, { "name": 12936, "carat": 1.13, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 62.3, "table": 56, "price": 5384, "x": 6.66, "y": 6.69, "z": 4.16 }, { "name": 42560, "carat": 0.42, "cut": "Ideal", "color": "D", "clarity": "VVS2", "depth": 62.5, "table": 57, "price": 1326, "x": 4.77, "y": 4.8, "z": 2.99 }, { "name": 51354, "carat": 0.72, "cut": "Premium", "color": "F", "clarity": "SI1", "depth": 62, "table": 60, "price": 2364, "x": 5.74, "y": 5.77, "z": 3.57 }, { "name": 22497, "carat": 1.71, "cut": "Ideal", "color": "H", "clarity": "VS2", "depth": 63, "table": 57, "price": 10534, "x": 7.57, "y": 7.53, "z": 4.76 }, { "name": 41128, "carat": 0.52, "cut": "Premium", "color": "G", "clarity": "SI2", "depth": 61.5, "table": 59, "price": 1196, "x": 5.19, "y": 5.15, "z": 3.18 }, { "name": 35047, "carat": 0.42, "cut": "Ideal", "color": "I", "clarity": "VVS1", "depth": 62.7, "table": 55, "price": 884, "x": 4.77, "y": 4.8, "z": 3 }, { "name": 28537, "carat": 0.3, "cut": "Very-Good", "color": "G", "clarity": "VS2", "depth": 63.5, "table": 55, "price": 675, "x": 4.25, "y": 4.22, "z": 2.69 }, { "name": 46474, "carat": 0.51, "cut": "Ideal", "color": "H", "clarity": "VVS1", "depth": 61.8, "table": 55, "price": 1776, "x": 5.15, "y": 5.18, "z": 3.19 }, { "name": 28473, "carat": 0.32, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 58.4, "table": 57, "price": 672, "x": 4.53, "y": 4.51, "z": 2.64 }, { "name": 5605, "carat": 0.96, "cut": "Good", "color": "F", "clarity": "VS2", "depth": 63.7, "table": 54, "price": 3871, "x": 6.24, "y": 6.19, "z": 3.96 }, { "name": 30472, "carat": 0.41, "cut": "Good", "color": "G", "clarity": "SI2", "depth": 63.7, "table": 55, "price": 732, "x": 4.75, "y": 4.7, "z": 3.01 }, { "name": 49406, "carat": 0.5, "cut": "Very-Good", "color": "E", "clarity": "VVS2", "depth": 59.1, "table": 61, "price": 2106, "x": 5.19, "y": 5.23, "z": 3.08 }, { "name": 12230, "carat": 1, "cut": "Very-Good", "color": "F", "clarity": "SI1", "depth": 61.6, "table": 61, "price": 5197, "x": 6.3, "y": 6.37, "z": 3.9 }, { "name": 24964, "carat": 1.5, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 61.6, "table": 59, "price": 13445, "x": 7.4, "y": 7.3, "z": 4.53 }, { "name": 20225, "carat": 1.04, "cut": "Very-Good", "color": "G", "clarity": "IF", "depth": 60.7, "table": 58, "price": 8655, "x": 6.52, "y": 6.65, "z": 4 }, { "name": 42851, "carat": 0.41, "cut": "Ideal", "color": "F", "clarity": "VVS1", "depth": 61.8, "table": 57, "price": 1356, "x": 4.79, "y": 4.75, "z": 2.95 }, { "name": 44114, "carat": 0.46, "cut": "Ideal", "color": "G", "clarity": "IF", "depth": 61.6, "table": 54, "price": 1558, "x": 4.97, "y": 5, "z": 3.07 }, { "name": 43852, "carat": 0.5, "cut": "Good", "color": "D", "clarity": "SI1", "depth": 60.5, "table": 57, "price": 1447, "x": 5.1, "y": 5.14, "z": 3.1 }, { "name": 28924, "carat": 0.3, "cut": "Ideal", "color": "H", "clarity": "VVS1", "depth": 61.9, "table": 55, "price": 684, "x": 4.32, "y": 4.34, "z": 2.68 }, { "name": 37886, "carat": 0.42, "cut": "Ideal", "color": "D", "clarity": "VS1", "depth": 61.4, "table": 55, "price": 1006, "x": 4.8, "y": 4.9, "z": 2.98 }, { "name": 27862, "carat": 0.31, "cut": "Ideal", "color": "I", "clarity": "IF", "depth": 61.3, "table": 57, "price": 652, "x": 4.34, "y": 4.4, "z": 2.68 }, { "name": 11672, "carat": 0.91, "cut": "Very-Good", "color": "E", "clarity": "VS1", "depth": 62.8, "table": 60, "price": 5057, "x": 6.08, "y": 6.11, "z": 3.83 }, { "name": 9250, "carat": 1.07, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 61.8, "table": 59, "price": 4560, "x": 6.53, "y": 6.57, "z": 4.05 }, { "name": 23105, "carat": 1.02, "cut": "Ideal", "color": "E", "clarity": "VVS1", "depth": 61.3, "table": 57, "price": 11128, "x": 6.47, "y": 6.54, "z": 3.99 }, { "name": 53587, "carat": 0.8, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 60.8, "table": 57, "price": 2699, "x": 6.02, "y": 6.05, "z": 3.67 }, { "name": 32473, "carat": 0.33, "cut": "Very-Good", "color": "G", "clarity": "VVS1", "depth": 61.2, "table": 57, "price": 795, "x": 4.47, "y": 4.5, "z": 2.74 }, { "name": 2113, "carat": 1.16, "cut": "Fair", "color": "H", "clarity": "SI2", "depth": 68.2, "table": 55, "price": 3118, "x": 6.47, "y": 6.37, "z": 4.38 }, { "name": 51281, "carat": 0.7, "cut": "Very-Good", "color": "I", "clarity": "VS2", "depth": 60.8, "table": 61, "price": 2360, "x": 5.72, "y": 5.76, "z": 3.49 }, { "name": 26223, "carat": 2.01, "cut": "Fair", "color": "D", "clarity": "SI2", "depth": 59.4, "table": 66, "price": 15627, "x": 8.2, "y": 8.17, "z": 4.86 }, { "name": 50152, "carat": 0.71, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 62.8, "table": 61, "price": 2215, "x": 5.64, "y": 5.59, "z": 3.53 }, { "name": 16946, "carat": 1.16, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 62.6, "table": 58, "price": 6768, "x": 6.68, "y": 6.73, "z": 4.2 }, { "name": 46080, "carat": 0.64, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 61.6, "table": 55, "price": 1737, "x": 5.55, "y": 5.59, "z": 3.43 }, { "name": 42924, "carat": 0.41, "cut": "Very-Good", "color": "D", "clarity": "VVS2", "depth": 61.2, "table": 55, "price": 1364, "x": 4.79, "y": 4.82, "z": 2.95 }, { "name": 16551, "carat": 1.02, "cut": "Very-Good", "color": "E", "clarity": "VS2", "depth": 59.2, "table": 58, "price": 6612, "x": 6.52, "y": 6.58, "z": 3.88 }, { "name": 22487, "carat": 1.5, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 59.9, "table": 62, "price": 10517, "x": 7.4, "y": 7.37, "z": 4.42 }, { "name": 30915, "carat": 0.34, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 62.4, "table": 55, "price": 745, "x": 4.48, "y": 4.53, "z": 2.81 }, { "name": 3792, "carat": 0.73, "cut": "Ideal", "color": "H", "clarity": "VVS2", "depth": 61.6, "table": 56, "price": 3463, "x": 5.8, "y": 5.82, "z": 3.57 }, { "name": 1845, "carat": 0.7, "cut": "Very-Good", "color": "E", "clarity": "VS1", "depth": 62.2, "table": 57, "price": 3063, "x": 5.63, "y": 5.68, "z": 3.52 }, { "name": 51932, "carat": 0.78, "cut": "Good", "color": "H", "clarity": "VS2", "depth": 63.7, "table": 60, "price": 2440, "x": 5.77, "y": 5.73, "z": 3.66 }, { "name": 35346, "carat": 0.42, "cut": "Very-Good", "color": "H", "clarity": "SI1", "depth": 63.1, "table": 57, "price": 898, "x": 4.78, "y": 4.76, "z": 3.01 }, { "name": 15601, "carat": 1.01, "cut": "Very-Good", "color": "G", "clarity": "VVS2", "depth": 61.9, "table": 58, "price": 6257, "x": 6.38, "y": 6.48, "z": 3.98 }, { "name": 52282, "carat": 0.84, "cut": "Ideal", "color": "J", "clarity": "SI1", "depth": 61.8, "table": 56, "price": 2493, "x": 6.04, "y": 6.07, "z": 3.74 }, { "name": 31240, "carat": 0.38, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 61.9, "table": 54.1, "price": 757, "x": 4.66, "y": 4.69, "z": 2.89 }, { "name": 6245, "carat": 1.03, "cut": "Ideal", "color": "J", "clarity": "SI2", "depth": 62.1, "table": 54, "price": 4008, "x": 6.47, "y": 6.51, "z": 4.03 }, { "name": 13751, "carat": 1.1, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 58.8, "table": 61, "price": 5606, "x": 6.73, "y": 6.67, "z": 3.94 }, { "name": 16558, "carat": 1.33, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 59.9, "table": 60, "price": 6614, "x": 7.13, "y": 7.09, "z": 4.26 }, { "name": 12471, "carat": 1.08, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 62.1, "table": 58, "price": 5250, "x": 6.63, "y": 6.51, "z": 4.08 }, { "name": 48006, "carat": 0.52, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 62.6, "table": 55, "price": 1919, "x": 5.14, "y": 5.12, "z": 3.21 }, { "name": 46658, "carat": 0.51, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 61.6, "table": 56, "price": 1787, "x": 5.15, "y": 5.17, "z": 3.18 }, { "name": 22186, "carat": 1.22, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 62.3, "table": 56, "price": 10221, "x": 6.84, "y": 6.81, "z": 4.25 }, { "name": 3612, "carat": 0.9, "cut": "Ideal", "color": "G", "clarity": "SI2", "depth": 62.7, "table": 55, "price": 3428, "x": 6.11, "y": 6.17, "z": 3.85 }, { "name": 20791, "carat": 1.52, "cut": "Good", "color": "F", "clarity": "SI2", "depth": 58.2, "table": 60, "price": 9028, "x": 7.52, "y": 7.63, "z": 4.41 }, { "name": 51092, "carat": 0.73, "cut": "Ideal", "color": "I", "clarity": "VS2", "depth": 62.2, "table": 54, "price": 2335, "x": 5.76, "y": 5.78, "z": 3.59 }, { "name": 19807, "carat": 1.5, "cut": "Ideal", "color": "I", "clarity": "SI1", "depth": 62.3, "table": 56, "price": 8371, "x": 7.35, "y": 7.41, "z": 4.6 }, { "name": 39840, "carat": 0.52, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 61.9, "table": 56, "price": 1098, "x": 5.16, "y": 5.22, "z": 3.2 }, { "name": 14694, "carat": 1, "cut": "Ideal", "color": "D", "clarity": "SI1", "depth": 59.9, "table": 56, "price": 5929, "x": 6.51, "y": 6.54, "z": 3.91 }, { "name": 48874, "carat": 0.61, "cut": "Very-Good", "color": "E", "clarity": "VS2", "depth": 60, "table": 57, "price": 2036, "x": 5.52, "y": 5.55, "z": 3.32 }, { "name": 25599, "carat": 2.14, "cut": "Good", "color": "I", "clarity": "SI2", "depth": 63.8, "table": 57, "price": 14452, "x": 8.17, "y": 8.14, "z": 5.2 }, { "name": 45086, "carat": 0.5, "cut": "Very-Good", "color": "D", "clarity": "VS2", "depth": 61.1, "table": 58, "price": 1646, "x": 5.07, "y": 5.11, "z": 3.11 }, { "name": 10001, "carat": 1, "cut": "Fair", "color": "D", "clarity": "SI1", "depth": 65.9, "table": 54, "price": 4704, "x": 6.24, "y": 6.2, "z": 4.1 }, { "name": 49271, "carat": 0.64, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 62, "table": 56, "price": 2089, "x": 5.57, "y": 5.53, "z": 3.44 }, { "name": 42549, "carat": 0.59, "cut": "Very-Good", "color": "E", "clarity": "SI2", "depth": 60.5, "table": 58, "price": 1325, "x": 5.43, "y": 5.51, "z": 3.31 }, { "name": 52180, "carat": 0.7, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 62.3, "table": 58, "price": 2476, "x": 5.6, "y": 5.67, "z": 3.51 }, { "name": 41354, "carat": 0.53, "cut": "Ideal", "color": "J", "clarity": "VS1", "depth": 61.4, "table": 55.2, "price": 1218, "x": 5.2, "y": 5.22, "z": 3.2 }, { "name": 4748, "carat": 0.92, "cut": "Premium", "color": "F", "clarity": "SI1", "depth": 62.6, "table": 59, "price": 3684, "x": 6.23, "y": 6.19, "z": 3.89 }, { "name": 18772, "carat": 1.03, "cut": "Very-Good", "color": "E", "clarity": "VS1", "depth": 62.8, "table": 55, "price": 7677, "x": 6.4, "y": 6.52, "z": 4.06 }, { "name": 51178, "carat": 0.75, "cut": "Very-Good", "color": "F", "clarity": "SI1", "depth": 63.1, "table": 58, "price": 2347, "x": 5.7, "y": 5.74, "z": 3.61 }, { "name": 2423, "carat": 0.95, "cut": "Premium", "color": "G", "clarity": "SI2", "depth": 62.6, "table": 58, "price": 3181, "x": 6.22, "y": 6.18, "z": 3.88 }, { "name": 19659, "carat": 1.4, "cut": "Very-Good", "color": "D", "clarity": "SI2", "depth": 61.8, "table": 54, "price": 8268, "x": 7.16, "y": 7.21, "z": 4.44 }, { "name": 45684, "carat": 0.5, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 61.2, "table": 56, "price": 1695, "x": 5.13, "y": 5.17, "z": 3.15 }, { "name": 25903, "carat": 2.19, "cut": "Premium", "color": "I", "clarity": "SI2", "depth": 60.8, "table": 60, "price": 15032, "x": 8.34, "y": 8.38, "z": 5.08 }, { "name": 32989, "carat": 0.38, "cut": "Ideal", "color": "D", "clarity": "SI2", "depth": 61.1, "table": 56, "price": 812, "x": 4.71, "y": 4.65, "z": 2.86 }, { "name": 47257, "carat": 0.51, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 62, "table": 57, "price": 1842, "x": 5.13, "y": 5.1, "z": 3.17 }, { "name": 49516, "carat": 0.75, "cut": "Premium", "color": "I", "clarity": "SI1", "depth": 62.5, "table": 58, "price": 2122, "x": 5.77, "y": 5.82, "z": 3.62 }, { "name": 24658, "carat": 1.72, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 61.4, "table": 59, "price": 12998, "x": 7.71, "y": 7.64, "z": 4.71 }, { "name": 39746, "carat": 0.53, "cut": "Ideal", "color": "G", "clarity": "SI2", "depth": 62.4, "table": 56, "price": 1093, "x": 5.18, "y": 5.14, "z": 3.22 }, { "name": 9185, "carat": 1.1, "cut": "Very-Good", "color": "J", "clarity": "VS1", "depth": 60.9, "table": 59, "price": 4545, "x": 6.65, "y": 6.74, "z": 4.08 }, { "name": 44901, "carat": 0.5, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 62.6, "table": 60, "price": 1629, "x": 5.03, "y": 5, "z": 3.14 }, { "name": 33962, "carat": 0.4, "cut": "Very-Good", "color": "D", "clarity": "VS2", "depth": 63.3, "table": 58, "price": 845, "x": 4.63, "y": 4.66, "z": 2.94 }, { "name": 14450, "carat": 1.31, "cut": "Premium", "color": "I", "clarity": "VS2", "depth": 60.4, "table": 59, "price": 5832, "x": 7.16, "y": 7.05, "z": 4.29 }, { "name": 40656, "carat": 0.5, "cut": "Very-Good", "color": "E", "clarity": "SI2", "depth": 61.4, "table": 58, "price": 1154, "x": 5.09, "y": 5.11, "z": 3.13 }, { "name": 22254, "carat": 1.18, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 61.3, "table": 55, "price": 10308, "x": 6.86, "y": 6.81, "z": 4.19 }, { "name": 242, "carat": 1.01, "cut": "Fair", "color": "E", "clarity": "I1", "depth": 64.5, "table": 58, "price": 2788, "x": 6.29, "y": 6.21, "z": 4.03 }, { "name": 36145, "carat": 0.33, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 62.3, "table": 55, "price": 928, "x": 4.46, "y": 4.43, "z": 2.77 }, { "name": 36050, "carat": 0.31, "cut": "Very-Good", "color": "G", "clarity": "IF", "depth": 61.6, "table": 55, "price": 924, "x": 4.38, "y": 4.42, "z": 2.71 }, { "name": 17226, "carat": 1.22, "cut": "Premium", "color": "F", "clarity": "SI1", "depth": 61.8, "table": 59, "price": 6887, "x": 6.86, "y": 6.83, "z": 4.23 }, { "name": 35075, "carat": 0.3, "cut": "Very-Good", "color": "F", "clarity": "IF", "depth": 62.4, "table": 56, "price": 886, "x": 4.28, "y": 4.31, "z": 2.68 }, { "name": 26131, "carat": 2.14, "cut": "Premium", "color": "I", "clarity": "VS2", "depth": 59.3, "table": 59, "price": 15418, "x": 8.39, "y": 8.43, "z": 5 }, { "name": 11008, "carat": 0.97, "cut": "Premium", "color": "E", "clarity": "SI1", "depth": 61, "table": 61, "price": 4915, "x": 6.32, "y": 6.28, "z": 3.84 }, { "name": 45652, "carat": 0.38, "cut": "Ideal", "color": "J", "clarity": "SI1", "depth": 62, "table": 54, "price": 525, "x": 4.67, "y": 4.71, "z": 2.91 }, { "name": 45451, "carat": 0.51, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 61.5, "table": 56, "price": 1674, "x": 5.21, "y": 5.17, "z": 3.19 }, { "name": 49282, "carat": 0.57, "cut": "Ideal", "color": "D", "clarity": "VS1", "depth": 61.7, "table": 56, "price": 2091, "x": 5.31, "y": 5.33, "z": 3.28 }, { "name": 7262, "carat": 1.01, "cut": "Good", "color": "F", "clarity": "SI1", "depth": 64.2, "table": 58, "price": 4199, "x": 6.31, "y": 6.33, "z": 4.06 }, { "name": 28479, "carat": 0.32, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 63.1, "table": 54, "price": 672, "x": 4.41, "y": 4.37, "z": 2.77 }, { "name": 38658, "carat": 0.42, "cut": "Ideal", "color": "D", "clarity": "SI1", "depth": 62.4, "table": 57, "price": 1040, "x": 4.84, "y": 4.77, "z": 3 }, { "name": 40260, "carat": 0.4, "cut": "Premium", "color": "H", "clarity": "VVS2", "depth": 60.6, "table": 60, "price": 1125, "x": 4.79, "y": 4.75, "z": 2.89 }, { "name": 8662, "carat": 1.16, "cut": "Very-Good", "color": "H", "clarity": "SI2", "depth": 59.6, "table": 59, "price": 4455, "x": 6.85, "y": 6.87, "z": 4.09 }, { "name": 37789, "carat": 0.3, "cut": "Ideal", "color": "D", "clarity": "VVS1", "depth": 61.3, "table": 57, "price": 1000, "x": 4.29, "y": 4.32, "z": 2.64 }, { "name": 5169, "carat": 0.91, "cut": "Very-Good", "color": "E", "clarity": "SI2", "depth": 63, "table": 56, "price": 3772, "x": 6.12, "y": 6.16, "z": 3.87 }, { "name": 13961, "carat": 1.51, "cut": "Premium", "color": "I", "clarity": "SI2", "depth": 61.2, "table": 62, "price": 5682, "x": 7.28, "y": 7.19, "z": 4.43 }, { "name": 3082, "carat": 0.57, "cut": "Ideal", "color": "F", "clarity": "VVS1", "depth": 61.3, "table": 56, "price": 3313, "x": 5.37, "y": 5.4, "z": 3.3 }, { "name": 2546, "carat": 0.7, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 61.4, "table": 55, "price": 3206, "x": 5.71, "y": 5.76, "z": 3.53 }, { "name": 16242, "carat": 1.01, "cut": "Premium", "color": "G", "clarity": "VS1", "depth": 62.6, "table": 59, "price": 6499, "x": 6.38, "y": 6.46, "z": 4.02 }, { "name": 1973, "carat": 0.72, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 60.8, "table": 57, "price": 3091, "x": 5.79, "y": 5.82, "z": 3.53 }, { "name": 548, "carat": 0.75, "cut": "Premium", "color": "E", "clarity": "SI2", "depth": 61.9, "table": 57, "price": 2829, "x": 5.88, "y": 5.82, "z": 3.62 }, { "name": 8034, "carat": 0.91, "cut": "Very-Good", "color": "F", "clarity": "SI2", "depth": 62.5, "table": 58, "price": 4334, "x": 6.1, "y": 6.16, "z": 3.83 }, { "name": 37127, "carat": 0.52, "cut": "Ideal", "color": "D", "clarity": "I1", "depth": 61.1, "table": 57, "price": 971, "x": 5.18, "y": 5.2, "z": 3.17 }, { "name": 34755, "carat": 0.41, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 60.9, "table": 60, "price": 876, "x": 4.83, "y": 4.79, "z": 2.93 }, { "name": 19801, "carat": 1.71, "cut": "Premium", "color": "I", "clarity": "SI2", "depth": 59, "table": 60, "price": 8366, "x": 7.86, "y": 7.83, "z": 4.63 }, { "name": 28129, "carat": 0.29, "cut": "Very-Good", "color": "F", "clarity": "VVS2", "depth": 62.7, "table": 58, "price": 664, "x": 4.22, "y": 4.26, "z": 2.66 }, { "name": 15985, "carat": 1.02, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 62.1, "table": 58, "price": 6397, "x": 6.5, "y": 6.44, "z": 4.02 }, { "name": 45202, "carat": 0.51, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 61.9, "table": 59, "price": 1656, "x": 5.06, "y": 5.11, "z": 3.15 }, { "name": 25904, "carat": 1.83, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 61.5, "table": 56, "price": 15032, "x": 7.87, "y": 7.81, "z": 4.82 }, { "name": 51466, "carat": 0.72, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 61.5, "table": 59, "price": 2376, "x": 5.71, "y": 5.67, "z": 3.5 }, { "name": 33422, "carat": 0.32, "cut": "Ideal", "color": "H", "clarity": "VVS2", "depth": 61.7, "table": 56, "price": 828, "x": 4.42, "y": 4.37, "z": 2.71 }, { "name": 27707, "carat": 0.36, "cut": "Premium", "color": "I", "clarity": "VS2", "depth": 61.6, "table": 58, "price": 648, "x": 4.57, "y": 4.52, "z": 2.8 }, { "name": 21334, "carat": 1.53, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 58.4, "table": 59, "price": 9476, "x": 7.62, "y": 7.55, "z": 4.43 }, { "name": 21363, "carat": 0.33, "cut": "Good", "color": "D", "clarity": "VS2", "depth": 63.6, "table": 56, "price": 625, "x": 4.38, "y": 4.42, "z": 2.8 }, { "name": 48897, "carat": 0.52, "cut": "Very-Good", "color": "G", "clarity": "VVS1", "depth": 62.3, "table": 55, "price": 2040, "x": 5.13, "y": 5.15, "z": 3.2 }, { "name": 18390, "carat": 0.32, "cut": "Very-Good", "color": "D", "clarity": "SI1", "depth": 60.1, "table": 60, "price": 619, "x": 4.38, "y": 4.4, "z": 2.64 }, { "name": 7304, "carat": 1.05, "cut": "Good", "color": "E", "clarity": "SI2", "depth": 63.2, "table": 59, "price": 4204, "x": 6.36, "y": 6.43, "z": 4.04 }, { "name": 33212, "carat": 0.36, "cut": "Very-Good", "color": "G", "clarity": "VS1", "depth": 60.7, "table": 57.1, "price": 821, "x": 4.57, "y": 4.65, "z": 2.79 }, { "name": 11747, "carat": 1.06, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 61, "table": 58, "price": 5075, "x": 6.61, "y": 6.57, "z": 4.02 }, { "name": 31566, "carat": 0.31, "cut": "Ideal", "color": "D", "clarity": "VVS2", "depth": 62, "table": 56, "price": 766, "x": 4.34, "y": 4.37, "z": 2.7 }, { "name": 19784, "carat": 1.15, "cut": "Very-Good", "color": "G", "clarity": "VVS2", "depth": 58.4, "table": 59, "price": 8349, "x": 6.84, "y": 6.92, "z": 4.02 }, { "name": 2897, "carat": 0.91, "cut": "Very-Good", "color": "G", "clarity": "SI2", "depth": 63.3, "table": 57, "price": 3282, "x": 6.12, "y": 6.08, "z": 3.86 }, { "name": 3884, "carat": 1.01, "cut": "Good", "color": "I", "clarity": "VS1", "depth": 64.2, "table": 60, "price": 3484, "x": 6.35, "y": 6.27, "z": 4.05 }, { "name": 24333, "carat": 1.54, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 61, "table": 59, "price": 12592, "x": 7.43, "y": 7.38, "z": 4.52 }, { "name": 40761, "carat": 0.4, "cut": "Very-Good", "color": "E", "clarity": "VVS1", "depth": 63.4, "table": 57, "price": 1164, "x": 4.64, "y": 4.66, "z": 2.95 }, { "name": 17619, "carat": 1.56, "cut": "Good", "color": "J", "clarity": "VS2", "depth": 57.6, "table": 65, "price": 7094, "x": 7.62, "y": 7.6, "z": 4.38 }, { "name": 17354, "carat": 1.33, "cut": "Good", "color": "I", "clarity": "VS1", "depth": 63.7, "table": 56, "price": 6963, "x": 6.92, "y": 6.96, "z": 4.42 }, { "name": 47923, "carat": 0.56, "cut": "Premium", "color": "G", "clarity": "VS1", "depth": 60.5, "table": 59, "price": 1915, "x": 5.31, "y": 5.26, "z": 3.2 }, { "name": 37149, "carat": 0.32, "cut": "Ideal", "color": "E", "clarity": "VS1", "depth": 61.8, "table": 55, "price": 972, "x": 4.43, "y": 4.4, "z": 2.73 }, { "name": 27961, "carat": 0.3, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 59.9, "table": 59, "price": 658, "x": 4.33, "y": 4.38, "z": 2.61 }, { "name": 1445, "carat": 0.83, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 61.6, "table": 59, "price": 2975, "x": 6.02, "y": 5.99, "z": 3.7 }, { "name": 12764, "carat": 1.21, "cut": "Ideal", "color": "J", "clarity": "VS1", "depth": 62.3, "table": 55, "price": 5324, "x": 6.81, "y": 6.86, "z": 4.26 }, { "name": 23038, "carat": 0.33, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 59.5, "table": 59, "price": 631, "x": 4.5, "y": 4.48, "z": 2.67 }, { "name": 19647, "carat": 1.52, "cut": "Premium", "color": "J", "clarity": "VS1", "depth": 62.4, "table": 59, "price": 8258, "x": 7.36, "y": 7.31, "z": 4.58 }, { "name": 34090, "carat": 0.41, "cut": "Very-Good", "color": "F", "clarity": "SI1", "depth": 63.4, "table": 58, "price": 852, "x": 4.75, "y": 4.68, "z": 2.99 }, { "name": 8265, "carat": 0.9, "cut": "Good", "color": "D", "clarity": "SI1", "depth": 63.5, "table": 57, "price": 4381, "x": 6.11, "y": 6.15, "z": 3.89 }, { "name": 38481, "carat": 0.42, "cut": "Premium", "color": "F", "clarity": "VS1", "depth": 61.8, "table": 59, "price": 1031, "x": 4.81, "y": 4.83, "z": 2.98 }, { "name": 40980, "carat": 0.41, "cut": "Premium", "color": "D", "clarity": "VVS2", "depth": 62.2, "table": 58, "price": 1181, "x": 4.8, "y": 4.78, "z": 2.98 }, { "name": 9617, "carat": 1.01, "cut": "Fair", "color": "F", "clarity": "SI1", "depth": 65.5, "table": 57, "price": 4634, "x": 6.12, "y": 6.22, "z": 4.04 }, { "name": 12104, "carat": 1.22, "cut": "Premium", "color": "I", "clarity": "SI2", "depth": 62.9, "table": 56, "price": 5165, "x": 6.84, "y": 6.79, "z": 4.29 }, { "name": 18829, "carat": 1.27, "cut": "Very-Good", "color": "H", "clarity": "VS2", "depth": 62.6, "table": 57, "price": 7715, "x": 6.91, "y": 6.95, "z": 4.34 }, { "name": 3016, "carat": 0.53, "cut": "Very-Good", "color": "D", "clarity": "VVS1", "depth": 61.2, "table": 55, "price": 3307, "x": 5.21, "y": 5.26, "z": 3.21 }, { "name": 20984, "carat": 1.63, "cut": "Very-Good", "color": "I", "clarity": "SI1", "depth": 61.9, "table": 60, "price": 9199, "x": 7.51, "y": 7.55, "z": 4.66 }, { "name": 2226, "carat": 0.7, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 61.6, "table": 55, "price": 3145, "x": 5.71, "y": 5.76, "z": 3.53 }, { "name": 39260, "carat": 0.3, "cut": "Ideal", "color": "D", "clarity": "VVS1", "depth": 61.3, "table": 57, "price": 1069, "x": 4.32, "y": 4.29, "z": 2.64 }, { "name": 52713, "carat": 0.52, "cut": "Premium", "color": "D", "clarity": "VVS1", "depth": 58.8, "table": 61, "price": 2553, "x": 5.31, "y": 5.27, "z": 3.11 }, { "name": 1783, "carat": 0.66, "cut": "Ideal", "color": "D", "clarity": "VVS2", "depth": 61.6, "table": 57, "price": 3049, "x": 5.64, "y": 5.57, "z": 3.45 }, { "name": 19774, "carat": 1.52, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 62.3, "table": 59, "price": 8342, "x": 7.37, "y": 7.33, "z": 4.58 }, { "name": 17061, "carat": 0.32, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 62, "table": 55, "price": 612, "x": 4.43, "y": 4.41, "z": 2.74 }, { "name": 30335, "carat": 0.38, "cut": "Premium", "color": "J", "clarity": "VS2", "depth": 60.5, "table": 60, "price": 727, "x": 4.68, "y": 4.64, "z": 2.82 }, { "name": 47019, "carat": 0.56, "cut": "Premium", "color": "G", "clarity": "VS1", "depth": 62.4, "table": 58, "price": 1819, "x": 5.22, "y": 5.3, "z": 3.28 }, { "name": 34634, "carat": 0.31, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 60.3, "table": 58, "price": 872, "x": 4.42, "y": 4.37, "z": 2.65 }, { "name": 17141, "carat": 1, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 63.8, "table": 56.9, "price": 6841, "x": 6.29, "y": 6.36, "z": 4.04 }, { "name": 51614, "carat": 0.73, "cut": "Very-Good", "color": "E", "clarity": "SI2", "depth": 59.3, "table": 57, "price": 2395, "x": 5.88, "y": 5.95, "z": 3.51 }, { "name": 31682, "carat": 0.26, "cut": "Ideal", "color": "E", "clarity": "VVS2", "depth": 62, "table": 56, "price": 769, "x": 4.13, "y": 4.1, "z": 2.55 }, { "name": 47056, "carat": 0.61, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 61.4, "table": 55.7, "price": 1821, "x": 5.43, "y": 5.53, "z": 3.37 }, { "name": 34323, "carat": 0.4, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 62.1, "table": 58, "price": 859, "x": 4.68, "y": 4.72, "z": 2.92 }, { "name": 19197, "carat": 1.25, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 61.2, "table": 57, "price": 7948, "x": 6.95, "y": 6.91, "z": 4.24 }, { "name": 46802, "carat": 0.52, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 60, "table": 62, "price": 1806, "x": 5.23, "y": 5.19, "z": 3.13 }, { "name": 24274, "carat": 2.3, "cut": "Premium", "color": "J", "clarity": "SI1", "depth": 59.6, "table": 59, "price": 12499, "x": 8.61, "y": 8.56, "z": 5.12 }, { "name": 11748, "carat": 1.03, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 60.6, "table": 60, "price": 5076, "x": 6.52, "y": 6.46, "z": 3.93 }, { "name": 8951, "carat": 1.19, "cut": "Premium", "color": "I", "clarity": "SI2", "depth": 59.5, "table": 59, "price": 4498, "x": 6.95, "y": 6.89, "z": 4.12 }, { "name": 23224, "carat": 1.51, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 60.5, "table": 59, "price": 11230, "x": 7.49, "y": 7.41, "z": 4.51 }, { "name": 46517, "carat": 0.53, "cut": "Ideal", "color": "H", "clarity": "VVS1", "depth": 60.8, "table": 56, "price": 1781, "x": 5.24, "y": 5.26, "z": 3.19 }, { "name": 5902, "carat": 0.92, "cut": "Premium", "color": "I", "clarity": "VVS1", "depth": 62.4, "table": 59, "price": 3932, "x": 6.17, "y": 6.14, "z": 3.84 }, { "name": 13724, "carat": 0.32, "cut": "Good", "color": "G", "clarity": "VS2", "depth": 56.7, "table": 64, "price": 603, "x": 4.52, "y": 4.55, "z": 2.57 }, { "name": 44842, "carat": 0.42, "cut": "Ideal", "color": "H", "clarity": "VVS1", "depth": 61.3, "table": 56, "price": 1625, "x": 4.83, "y": 4.86, "z": 2.97 }, { "name": 32610, "carat": 0.31, "cut": "Ideal", "color": "H", "clarity": "VVS2", "depth": 62.3, "table": 55, "price": 802, "x": 4.37, "y": 4.36, "z": 2.72 }, { "name": 32729, "carat": 0.31, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 62, "table": 60, "price": 802, "x": 4.34, "y": 4.3, "z": 2.68 }, { "name": 40293, "carat": 0.4, "cut": "Ideal", "color": "H", "clarity": "VVS2", "depth": 62.2, "table": 56, "price": 1125, "x": 4.75, "y": 4.7, "z": 2.94 }, { "name": 22281, "carat": 1.56, "cut": "Ideal", "color": "I", "clarity": "VS2", "depth": 61.8, "table": 56, "price": 10333, "x": 7.41, "y": 7.45, "z": 4.59 }, { "name": 39900, "carat": 0.42, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 61.2, "table": 56, "price": 1103, "x": 4.84, "y": 4.8, "z": 2.95 }, { "name": 2657, "carat": 0.7, "cut": "Premium", "color": "G", "clarity": "VVS1", "depth": 62.8, "table": 58, "price": 3234, "x": 5.68, "y": 5.62, "z": 3.55 }, { "name": 39750, "carat": 0.5, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 62.3, "table": 59, "price": 1094, "x": 5.02, "y": 4.99, "z": 3.12 }, { "name": 8576, "carat": 1, "cut": "Fair", "color": "G", "clarity": "VS2", "depth": 69.8, "table": 54, "price": 4435, "x": 6.03, "y": 5.94, "z": 4.18 }, { "name": 46613, "carat": 0.51, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 62.7, "table": 55, "price": 1787, "x": 5.09, "y": 5.12, "z": 3.2 }, { "name": 35533, "carat": 0.36, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 59.4, "table": 56, "price": 905, "x": 4.71, "y": 4.69, "z": 2.79 }, { "name": 23870, "carat": 1.63, "cut": "Ideal", "color": "I", "clarity": "VS2", "depth": 61.8, "table": 56, "price": 11963, "x": 7.56, "y": 7.59, "z": 4.68 }, { "name": 5281, "carat": 0.82, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 61.5, "table": 57, "price": 3798, "x": 6.01, "y": 6.05, "z": 3.71 }, { "name": 45257, "carat": 0.6, "cut": "Very-Good", "color": "F", "clarity": "SI1", "depth": 60.6, "table": 57, "price": 1661, "x": 5.46, "y": 5.5, "z": 3.32 }, { "name": 36946, "carat": 0.23, "cut": "Good", "color": "D", "clarity": "VVS1", "depth": 64.8, "table": 58, "price": 478, "x": 3.83, "y": 3.85, "z": 2.49 }, { "name": 27120, "carat": 2.35, "cut": "Premium", "color": "I", "clarity": "SI2", "depth": 61.1, "table": 58, "price": 17294, "x": 8.63, "y": 8.56, "z": 5.25 }, { "name": 20765, "carat": 1.22, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 60.7, "table": 57, "price": 9002, "x": 6.93, "y": 6.94, "z": 4.21 }, { "name": 35706, "carat": 0.3, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 62, "table": 56, "price": 911, "x": 4.35, "y": 4.33, "z": 2.69 }, { "name": 24232, "carat": 2.02, "cut": "Premium", "color": "J", "clarity": "SI1", "depth": 61.6, "table": 58, "price": 12431, "x": 8.14, "y": 8.1, "z": 5 }, { "name": 20284, "carat": 1.52, "cut": "Very-Good", "color": "I", "clarity": "SI1", "depth": 62.6, "table": 60, "price": 8703, "x": 7.3, "y": 7.33, "z": 4.58 }, { "name": 51292, "carat": 0.75, "cut": "Premium", "color": "E", "clarity": "SI1", "depth": 59.8, "table": 60, "price": 2360, "x": 5.9, "y": 5.84, "z": 3.51 }, { "name": 13615, "carat": 1, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 62.4, "table": 59, "price": 5571, "x": 6.36, "y": 6.42, "z": 3.99 }, { "name": 34302, "carat": 0.4, "cut": "Very-Good", "color": "E", "clarity": "VS2", "depth": 62.9, "table": 59, "price": 858, "x": 4.7, "y": 4.75, "z": 2.97 }, { "name": 12363, "carat": 0.26, "cut": "Very-Good", "color": "E", "clarity": "VVS2", "depth": 62.6, "table": 58, "price": 597, "x": 4.07, "y": 4.11, "z": 2.56 }, { "name": 5119, "carat": 1.01, "cut": "Premium", "color": "I", "clarity": "SI2", "depth": 60.5, "table": 61, "price": 3761, "x": 6.47, "y": 6.42, "z": 3.9 }, { "name": 48839, "carat": 0.55, "cut": "Premium", "color": "D", "clarity": "VS2", "depth": 61.3, "table": 60, "price": 2030, "x": 5.29, "y": 5.28, "z": 3.24 }, { "name": 46340, "carat": 0.51, "cut": "Premium", "color": "E", "clarity": "VS1", "depth": 62, "table": 61, "price": 1758, "x": 5.14, "y": 5.11, "z": 3.18 }, { "name": 41877, "carat": 0.5, "cut": "Fair", "color": "G", "clarity": "VS1", "depth": 65.7, "table": 63, "price": 1257, "x": 4.97, "y": 4.87, "z": 3.23 }, { "name": 40539, "carat": 0.36, "cut": "Premium", "color": "G", "clarity": "IF", "depth": 62.5, "table": 60, "price": 1148, "x": 4.53, "y": 4.49, "z": 2.82 }, { "name": 31176, "carat": 0.35, "cut": "Ideal", "color": "H", "clarity": "VVS1", "depth": 62, "table": 55, "price": 756, "x": 4.52, "y": 4.54, "z": 2.81 }, { "name": 26640, "carat": 2.03, "cut": "Very-Good", "color": "E", "clarity": "SI2", "depth": 63.7, "table": 58, "price": 16412, "x": 7.91, "y": 7.94, "z": 5.05 }, { "name": 41700, "carat": 0.41, "cut": "Premium", "color": "E", "clarity": "VVS1", "depth": 61.2, "table": 62, "price": 1241, "x": 4.78, "y": 4.76, "z": 2.92 }, { "name": 45694, "carat": 0.7, "cut": "Good", "color": "H", "clarity": "SI2", "depth": 64.2, "table": 58, "price": 1697, "x": 5.56, "y": 5.6, "z": 3.58 }, { "name": 40284, "carat": 0.34, "cut": "Ideal", "color": "I", "clarity": "VS2", "depth": 61.1, "table": 55, "price": 495, "x": 4.51, "y": 4.55, "z": 2.77 }, { "name": 33029, "carat": 0.3, "cut": "Ideal", "color": "D", "clarity": "VVS2", "depth": 60.7, "table": 58, "price": 814, "x": 4.3, "y": 4.33, "z": 2.62 }, { "name": 11496, "carat": 1.03, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 59.8, "table": 57, "price": 5018, "x": 6.64, "y": 6.57, "z": 3.95 }, { "name": 20438, "carat": 1.51, "cut": "Ideal", "color": "G", "clarity": "SI2", "depth": 60.8, "table": 57, "price": 8794, "x": 7.44, "y": 7.39, "z": 4.51 }, { "name": 17076, "carat": 1.24, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 60.2, "table": 60, "price": 6808, "x": 6.94, "y": 6.91, "z": 4.17 }, { "name": 16525, "carat": 1.33, "cut": "Very-Good", "color": "G", "clarity": "SI2", "depth": 62, "table": 59, "price": 6603, "x": 7.1, "y": 7.04, "z": 4.38 }, { "name": 28064, "carat": 0.31, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 61.1, "table": 56, "price": 660, "x": 4.39, "y": 4.41, "z": 2.69 }, { "name": 21288, "carat": 1.7, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 61.2, "table": 56, "price": 9444, "x": 7.71, "y": 7.64, "z": 4.7 }, { "name": 40319, "carat": 0.5, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 59.9, "table": 60, "price": 1125, "x": 5.22, "y": 5.16, "z": 3.11 }, { "name": 6229, "carat": 0.9, "cut": "Very-Good", "color": "F", "clarity": "SI1", "depth": 63.3, "table": 55, "price": 4004, "x": 6.05, "y": 6.08, "z": 3.84 }, { "name": 20362, "carat": 1.09, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 61.8, "table": 56, "price": 8753, "x": 6.58, "y": 6.62, "z": 4.08 }, { "name": 27719, "carat": 0.32, "cut": "Premium", "color": "I", "clarity": "VS1", "depth": 59.8, "table": 60, "price": 648, "x": 4.46, "y": 4.44, "z": 2.66 }, { "name": 13355, "carat": 0.24, "cut": "Very-Good", "color": "E", "clarity": "VS2", "depth": 62.1, "table": 58, "price": 419, "x": 4, "y": 4.02, "z": 2.49 }, { "name": 23211, "carat": 1.26, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 61.7, "table": 56, "price": 11218, "x": 6.96, "y": 6.98, "z": 4.3 }, { "name": 8072, "carat": 0.74, "cut": "Good", "color": "F", "clarity": "VVS1", "depth": 58.4, "table": 60, "price": 4336, "x": 6.03, "y": 6.06, "z": 3.53 }, { "name": 50355, "carat": 0.8, "cut": "Fair", "color": "G", "clarity": "SI2", "depth": 61.2, "table": 58, "price": 2246, "x": 5.96, "y": 5.93, "z": 3.64 }, { "name": 29236, "carat": 0.43, "cut": "Ideal", "color": "G", "clarity": "SI2", "depth": 62.3, "table": 53, "price": 696, "x": 4.84, "y": 4.86, "z": 3.02 }, { "name": 15462, "carat": 1.21, "cut": "Ideal", "color": "D", "clarity": "SI2", "depth": 62, "table": 57, "price": 6190, "x": 6.81, "y": 6.83, "z": 4.23 }, { "name": 37924, "carat": 0.23, "cut": "Very-Good", "color": "D", "clarity": "VVS1", "depth": 61.7, "table": 59, "price": 485, "x": 3.94, "y": 3.97, "z": 2.44 }, { "name": 38438, "carat": 0.49, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 62.5, "table": 58, "price": 1026, "x": 5.03, "y": 4.98, "z": 3.13 }, { "name": 53845, "carat": 0.74, "cut": "Very-Good", "color": "D", "clarity": "SI2", "depth": 61.5, "table": 59, "price": 2740, "x": 5.79, "y": 5.82, "z": 3.57 }, { "name": 42942, "carat": 0.3, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 61.3, "table": 58, "price": 506, "x": 4.33, "y": 4.28, "z": 2.64 }, { "name": 30233, "carat": 0.33, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 60.5, "table": 56, "price": 723, "x": 4.48, "y": 4.51, "z": 2.72 }, { "name": 12447, "carat": 1.3, "cut": "Premium", "color": "I", "clarity": "VS2", "depth": 60.3, "table": 60, "price": 5242, "x": 7.01, "y": 6.99, "z": 4.22 }, { "name": 39528, "carat": 0.4, "cut": "Very-Good", "color": "I", "clarity": "VVS1", "depth": 63.5, "table": 57, "price": 1080, "x": 4.68, "y": 4.65, "z": 2.96 }, { "name": 14827, "carat": 1.21, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 61.2, "table": 57, "price": 5973, "x": 6.86, "y": 6.93, "z": 4.22 }, { "name": 23609, "carat": 1.52, "cut": "Premium", "color": "F", "clarity": "SI1", "depth": 62.6, "table": 59, "price": 11637, "x": 7.27, "y": 7.36, "z": 4.58 }, { "name": 52759, "carat": 0.72, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 62, "table": 57, "price": 2562, "x": 5.73, "y": 5.76, "z": 3.56 }, { "name": 38309, "carat": 0.31, "cut": "Good", "color": "I", "clarity": "SI1", "depth": 64.3, "table": 55, "price": 488, "x": 4.29, "y": 4.27, "z": 2.75 }, { "name": 17027, "carat": 1.02, "cut": "Ideal", "color": "H", "clarity": "VVS2", "depth": 62.1, "table": 56, "price": 6797, "x": 6.5, "y": 6.45, "z": 4.02 }, { "name": 17159, "carat": 1.51, "cut": "Very-Good", "color": "J", "clarity": "SI1", "depth": 61.2, "table": 62, "price": 6851, "x": 7.32, "y": 7.36, "z": 4.49 }, { "name": 51702, "carat": 0.7, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 62.9, "table": 56, "price": 2400, "x": 5.66, "y": 5.73, "z": 3.58 }, { "name": 16966, "carat": 1.22, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 61.8, "table": 57, "price": 6776, "x": 6.86, "y": 6.82, "z": 4.23 }, { "name": 11068, "carat": 0.34, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 62, "table": 57, "price": 596, "x": 4.46, "y": 4.48, "z": 2.77 }, { "name": 28424, "carat": 0.38, "cut": "Ideal", "color": "J", "clarity": "VVS2", "depth": 61.7, "table": 54.6, "price": 670, "x": 4.65, "y": 4.69, "z": 2.89 }, { "name": 28283, "carat": 0.23, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 62, "table": 54, "price": 364, "x": 3.95, "y": 3.99, "z": 2.46 }, { "name": 44763, "carat": 0.52, "cut": "Very-Good", "color": "G", "clarity": "VS1", "depth": 59.5, "table": 58, "price": 1621, "x": 5.21, "y": 5.28, "z": 3.12 }, { "name": 47921, "carat": 0.76, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 60.9, "table": 59, "price": 1915, "x": 5.91, "y": 5.86, "z": 3.58 }, { "name": 45809, "carat": 0.52, "cut": "Good", "color": "F", "clarity": "VS1", "depth": 61.2, "table": 62, "price": 1710, "x": 5.12, "y": 5.05, "z": 3.11 }, { "name": 2789, "carat": 0.81, "cut": "Ideal", "color": "H", "clarity": "VS1", "depth": 61.8, "table": 58, "price": 3257, "x": 5.97, "y": 6.04, "z": 3.71 }, { "name": 25299, "carat": 2.08, "cut": "Good", "color": "I", "clarity": "SI2", "depth": 63.8, "table": 58, "price": 13956, "x": 8.02, "y": 8.1, "z": 5.14 }, { "name": 27405, "carat": 1.93, "cut": "Fair", "color": "F", "clarity": "VS1", "depth": 58.9, "table": 62, "price": 17995, "x": 8.17, "y": 7.97, "z": 4.75 }, { "name": 18129, "carat": 1.41, "cut": "Very-Good", "color": "H", "clarity": "SI2", "depth": 58.5, "table": 57, "price": 7339, "x": 7.36, "y": 7.44, "z": 4.33 }, { "name": 39532, "carat": 0.4, "cut": "Good", "color": "I", "clarity": "VVS1", "depth": 63.9, "table": 56, "price": 1080, "x": 4.68, "y": 4.64, "z": 2.98 }, { "name": 674, "carat": 0.76, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 61.1, "table": 59, "price": 2847, "x": 5.93, "y": 5.88, "z": 3.61 }, { "name": 53665, "carat": 0.72, "cut": "Good", "color": "G", "clarity": "VS2", "depth": 63.1, "table": 57, "price": 2708, "x": 5.71, "y": 5.74, "z": 3.61 }, { "name": 14068, "carat": 0.3, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 62.6, "table": 57, "price": 605, "x": 4.27, "y": 4.29, "z": 2.68 }, { "name": 15754, "carat": 1.29, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 61.6, "table": 54, "price": 6300, "x": 7, "y": 7.02, "z": 4.32 }, { "name": 39855, "carat": 0.33, "cut": "Ideal", "color": "D", "clarity": "VVS1", "depth": 61, "table": 55, "price": 1100, "x": 4.47, "y": 4.52, "z": 2.74 }, { "name": 47231, "carat": 0.7, "cut": "Fair", "color": "H", "clarity": "SI1", "depth": 66, "table": 56, "price": 1840, "x": 5.5, "y": 5.53, "z": 3.64 }, { "name": 35265, "carat": 0.34, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 62.1, "table": 55, "price": 895, "x": 4.46, "y": 4.49, "z": 2.78 }, { "name": 35740, "carat": 0.3, "cut": "Premium", "color": "D", "clarity": "VS2", "depth": 61.1, "table": 59, "price": 911, "x": 4.31, "y": 4.26, "z": 2.62 }, { "name": 9811, "carat": 1.21, "cut": "Premium", "color": "I", "clarity": "VS2", "depth": 61.6, "table": 61, "price": 4669, "x": 6.86, "y": 6.8, "z": 4.21 }, { "name": 16780, "carat": 1.02, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 62.2, "table": 56, "price": 6683, "x": 6.46, "y": 6.4, "z": 4 }, { "name": 9127, "carat": 1.13, "cut": "Premium", "color": "I", "clarity": "SI1", "depth": 61.8, "table": 59, "price": 4536, "x": 6.65, "y": 6.68, "z": 4.12 }, { "name": 12726, "carat": 0.9, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 59.5, "table": 58, "price": 5312, "x": 6.33, "y": 6.28, "z": 3.75 }, { "name": 25205, "carat": 2.07, "cut": "Premium", "color": "J", "clarity": "VS2", "depth": 61.5, "table": 59, "price": 13800, "x": 8.2, "y": 8.16, "z": 5.03 }, { "name": 29275, "carat": 0.31, "cut": "Premium", "color": "I", "clarity": "VVS2", "depth": 59.4, "table": 59, "price": 698, "x": 4.44, "y": 4.41, "z": 2.63 }, { "name": 18402, "carat": 1.06, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 61.9, "table": 57, "price": 7479, "x": 6.55, "y": 6.53, "z": 4.05 }, { "name": 42611, "carat": 0.32, "cut": "Ideal", "color": "H", "clarity": "VS2", "depth": 62.1, "table": 56, "price": 505, "x": 4.37, "y": 4.42, "z": 2.73 }, { "name": 50928, "carat": 0.71, "cut": "Ideal", "color": "I", "clarity": "SI1", "depth": 61.6, "table": 55, "price": 2319, "x": 5.72, "y": 5.74, "z": 3.53 }, { "name": 29951, "carat": 0.33, "cut": "Premium", "color": "I", "clarity": "SI1", "depth": 61.3, "table": 59, "price": 445, "x": 4.46, "y": 4.51, "z": 2.75 }, { "name": 26314, "carat": 2.34, "cut": "Premium", "color": "I", "clarity": "SI1", "depth": 61.7, "table": 60, "price": 15818, "x": 8.59, "y": 8.53, "z": 5.28 }, { "name": 3457, "carat": 0.78, "cut": "Ideal", "color": "D", "clarity": "SI1", "depth": 62.2, "table": 55, "price": 3389, "x": 5.92, "y": 5.95, "z": 3.69 }, { "name": 49097, "carat": 0.52, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 61.6, "table": 55, "price": 2063, "x": 5.14, "y": 5.18, "z": 3.18 }, { "name": 4156, "carat": 0.72, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 61.7, "table": 54.8, "price": 3548, "x": 5.73, "y": 5.77, "z": 3.55 }, { "name": 9566, "carat": 1.12, "cut": "Very-Good", "color": "H", "clarity": "SI2", "depth": 61.8, "table": 58, "price": 4624, "x": 6.62, "y": 6.68, "z": 4.11 }, { "name": 52609, "carat": 0.7, "cut": "Very-Good", "color": "G", "clarity": "SI1", "depth": 62.5, "table": 59, "price": 2545, "x": 5.69, "y": 5.73, "z": 3.57 }, { "name": 17441, "carat": 1.24, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 60.5, "table": 60, "price": 6994, "x": 6.97, "y": 6.91, "z": 4.2 }, { "name": 7345, "carat": 1.01, "cut": "Very-Good", "color": "I", "clarity": "SI1", "depth": 62.7, "table": 56, "price": 4212, "x": 6.36, "y": 6.43, "z": 4.01 }, { "name": 42696, "carat": 0.46, "cut": "Ideal", "color": "H", "clarity": "VVS1", "depth": 62.4, "table": 53.4, "price": 1338, "x": 4.95, "y": 5.01, "z": 3.1 }, { "name": 47851, "carat": 0.77, "cut": "Good", "color": "J", "clarity": "SI1", "depth": 63.3, "table": 57, "price": 1909, "x": 5.79, "y": 5.84, "z": 3.68 }, { "name": 25534, "carat": 1.5, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 61, "table": 58, "price": 14352, "x": 7.37, "y": 7.31, "z": 4.48 }, { "name": 16092, "carat": 1.32, "cut": "Ideal", "color": "I", "clarity": "SI1", "depth": 62.2, "table": 57, "price": 6431, "x": 7.07, "y": 7.01, "z": 4.38 }, { "name": 31166, "carat": 0.41, "cut": "Premium", "color": "E", "clarity": "SI1", "depth": 60.1, "table": 60, "price": 755, "x": 4.79, "y": 4.83, "z": 2.89 }, { "name": 51790, "carat": 0.7, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 60.9, "table": 57, "price": 2415, "x": 5.79, "y": 5.77, "z": 3.52 }, { "name": 88, "carat": 0.24, "cut": "Premium", "color": "H", "clarity": "VVS1", "depth": 60.8, "table": 59, "price": 554, "x": 4.02, "y": 4, "z": 2.44 }, { "name": 25451, "carat": 1.51, "cut": "Very-Good", "color": "D", "clarity": "VS2", "depth": 63.1, "table": 62, "price": 14205, "x": 7.24, "y": 7.22, "z": 4.56 }, { "name": 31204, "carat": 0.32, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 60.4, "table": 58, "price": 756, "x": 4.47, "y": 4.44, "z": 2.69 }, { "name": 31959, "carat": 0.31, "cut": "Ideal", "color": "I", "clarity": "VS2", "depth": 62.3, "table": 54, "price": 452, "x": 4.37, "y": 4.4, "z": 2.73 }, { "name": 38340, "carat": 0.32, "cut": "Ideal", "color": "G", "clarity": "IF", "depth": 61.8, "table": 55, "price": 1020, "x": 4.43, "y": 4.41, "z": 2.73 }, { "name": 2594, "carat": 0.64, "cut": "Ideal", "color": "F", "clarity": "VVS2", "depth": 60.9, "table": 56, "price": 3217, "x": 5.57, "y": 5.59, "z": 3.4 }, { "name": 24570, "carat": 1.01, "cut": "Ideal", "color": "E", "clarity": "IF", "depth": 61.4, "table": 57, "price": 12865, "x": 6.53, "y": 6.46, "z": 3.99 }, { "name": 53212, "carat": 0.85, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 61.8, "table": 54, "price": 2635, "x": 6.07, "y": 6.1, "z": 3.76 }, { "name": 39773, "carat": 0.5, "cut": "Very-Good", "color": "F", "clarity": "SI2", "depth": 63.5, "table": 58, "price": 1094, "x": 5.03, "y": 4.98, "z": 3.18 }, { "name": 42305, "carat": 0.5, "cut": "Very-Good", "color": "F", "clarity": "SI1", "depth": 61.4, "table": 57, "price": 1295, "x": 5.08, "y": 5.12, "z": 3.13 }, { "name": 39063, "carat": 0.52, "cut": "Very-Good", "color": "E", "clarity": "SI2", "depth": 64, "table": 55, "price": 1059, "x": 5.07, "y": 5.11, "z": 3.26 }, { "name": 1060, "carat": 0.31, "cut": "Very-Good", "color": "I", "clarity": "VS2", "depth": 63.2, "table": 55, "price": 558, "x": 4.4, "y": 4.3, "z": 2.75 }, { "name": 41268, "carat": 0.31, "cut": "Ideal", "color": "I", "clarity": "VS1", "depth": 61.9, "table": 54.5, "price": 502, "x": 4.33, "y": 4.36, "z": 2.69 }, { "name": 13499, "carat": 0.7, "cut": "Ideal", "color": "D", "clarity": "VVS2", "depth": 61.3, "table": 56, "price": 5539, "x": 5.72, "y": 5.76, "z": 3.52 }, { "name": 9650, "carat": 1.12, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 61.2, "table": 59, "price": 4641, "x": 6.69, "y": 6.65, "z": 4.08 }, { "name": 46896, "carat": 0.6, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 61.5, "table": 52, "price": 1814, "x": 5.5, "y": 5.43, "z": 3.36 }, { "name": 4117, "carat": 0.79, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 61.2, "table": 56, "price": 3539, "x": 6, "y": 5.96, "z": 3.66 }, { "name": 39352, "carat": 0.52, "cut": "Premium", "color": "I", "clarity": "SI1", "depth": 62.5, "table": 59, "price": 1073, "x": 5.12, "y": 5.06, "z": 3.18 }, { "name": 40808, "carat": 0.5, "cut": "Very-Good", "color": "G", "clarity": "SI1", "depth": 62.8, "table": 55, "price": 1170, "x": 5.03, "y": 5.07, "z": 3.17 }, { "name": 17708, "carat": 0.3, "cut": "Very-Good", "color": "F", "clarity": "VVS2", "depth": 64.2, "table": 56, "price": 613, "x": 4.22, "y": 4.26, "z": 2.72 }, { "name": 34501, "carat": 0.42, "cut": "Good", "color": "I", "clarity": "VVS1", "depth": 59.2, "table": 61, "price": 867, "x": 4.88, "y": 4.91, "z": 2.9 }, { "name": 33837, "carat": 0.3, "cut": "Ideal", "color": "E", "clarity": "VVS1", "depth": 62, "table": 57, "price": 844, "x": 4.29, "y": 4.32, "z": 2.67 }, { "name": 35374, "carat": 0.41, "cut": "Very-Good", "color": "G", "clarity": "VS1", "depth": 62.4, "table": 57, "price": 899, "x": 4.71, "y": 4.74, "z": 2.95 }, { "name": 320, "carat": 0.71, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 62.1, "table": 58, "price": 2801, "x": 5.7, "y": 5.67, "z": 3.53 }, { "name": 11930, "carat": 0.93, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 60.1, "table": 57, "price": 5126, "x": 6.33, "y": 6.41, "z": 3.83 }, { "name": 10079, "carat": 0.32, "cut": "Ideal", "color": "H", "clarity": "VS1", "depth": 61.6, "table": 56, "price": 592, "x": 4.42, "y": 4.46, "z": 2.73 }, { "name": 15112, "carat": 1, "cut": "Ideal", "color": "D", "clarity": "SI1", "depth": 62.7, "table": 57, "price": 6073, "x": 6.34, "y": 6.38, "z": 3.99 }, { "name": 49356, "carat": 0.71, "cut": "Very-Good", "color": "F", "clarity": "SI2", "depth": 63.6, "table": 56, "price": 2098, "x": 5.58, "y": 5.67, "z": 3.58 }, { "name": 17755, "carat": 1.33, "cut": "Ideal", "color": "I", "clarity": "VS2", "depth": 61.1, "table": 54, "price": 7148, "x": 7.14, "y": 7.15, "z": 4.37 }, { "name": 34192, "carat": 0.33, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 61.6, "table": 56, "price": 854, "x": 4.46, "y": 4.44, "z": 2.74 }, { "name": 42409, "carat": 0.42, "cut": "Ideal", "color": "H", "clarity": "VVS1", "depth": 61.1, "table": 56, "price": 1310, "x": 4.86, "y": 4.9, "z": 2.98 }, { "name": 37858, "carat": 0.44, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 60.4, "table": 58, "price": 1003, "x": 4.87, "y": 4.93, "z": 2.96 }, { "name": 31467, "carat": 0.34, "cut": "Premium", "color": "I", "clarity": "VVS2", "depth": 61.5, "table": 60, "price": 765, "x": 4.49, "y": 4.45, "z": 2.75 }, { "name": 39215, "carat": 0.42, "cut": "Very-Good", "color": "D", "clarity": "VS1", "depth": 60.7, "table": 60, "price": 1066, "x": 4.81, "y": 4.88, "z": 2.94 }, { "name": 29220, "carat": 0.34, "cut": "Ideal", "color": "I", "clarity": "IF", "depth": 61.9, "table": 55, "price": 695, "x": 4.5, "y": 4.52, "z": 2.79 }, { "name": 37440, "carat": 0.33, "cut": "Ideal", "color": "E", "clarity": "VVS1", "depth": 61.7, "table": 56, "price": 984, "x": 4.42, "y": 4.46, "z": 2.74 }, { "name": 4536, "carat": 0.76, "cut": "Very-Good", "color": "F", "clarity": "VVS2", "depth": 62.9, "table": 58, "price": 3640, "x": 5.76, "y": 5.85, "z": 3.65 }, { "name": 3091, "carat": 0.93, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 61.3, "table": 62, "price": 3317, "x": 6.26, "y": 6.17, "z": 3.81 }, { "name": 8882, "carat": 0.9, "cut": "Good", "color": "G", "clarity": "VVS2", "depth": 62.6, "table": 63, "price": 4485, "x": 6.1, "y": 6.14, "z": 3.83 }, { "name": 13302, "carat": 1.05, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 62.2, "table": 56, "price": 5494, "x": 6.49, "y": 6.56, "z": 4.06 }, { "name": 43088, "carat": 0.51, "cut": "Premium", "color": "E", "clarity": "SI1", "depth": 62.4, "table": 59, "price": 1381, "x": 5.07, "y": 5.12, "z": 3.18 }, { "name": 15091, "carat": 1.21, "cut": "Premium", "color": "E", "clarity": "SI2", "depth": 58.8, "table": 58, "price": 6065, "x": 7.07, "y": 6.91, "z": 4.11 }, { "name": 52428, "carat": 0.75, "cut": "Very-Good", "color": "H", "clarity": "VS1", "depth": 59.3, "table": 59, "price": 2513, "x": 5.87, "y": 6, "z": 3.52 }, { "name": 40412, "carat": 0.55, "cut": "Ideal", "color": "I", "clarity": "SI1", "depth": 61.3, "table": 55, "price": 1134, "x": 5.3, "y": 5.33, "z": 3.26 }, { "name": 10498, "carat": 1.02, "cut": "Fair", "color": "D", "clarity": "SI1", "depth": 66.4, "table": 60, "price": 4798, "x": 6.29, "y": 6.21, "z": 4.15 }, { "name": 36997, "carat": 0.41, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 61.6, "table": 55, "price": 964, "x": 4.81, "y": 4.84, "z": 2.97 }, { "name": 34210, "carat": 0.33, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 62.1, "table": 59, "price": 854, "x": 4.45, "y": 4.4, "z": 2.75 }, { "name": 48645, "carat": 0.27, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 60.8, "table": 56, "price": 537, "x": 4.25, "y": 4.23, "z": 2.58 }, { "name": 20802, "carat": 1.5, "cut": "Very-Good", "color": "I", "clarity": "VS1", "depth": 62.8, "table": 58, "price": 9033, "x": 7.17, "y": 7.23, "z": 4.52 }, { "name": 4618, "carat": 0.9, "cut": "Premium", "color": "I", "clarity": "VS2", "depth": 60.1, "table": 59, "price": 3663, "x": 6.37, "y": 6.25, "z": 3.79 }, { "name": 10955, "carat": 1.03, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 61.6, "table": 57, "price": 4900, "x": 6.53, "y": 6.46, "z": 4 }, { "name": 3797, "carat": 0.73, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 61.6, "table": 56, "price": 3464, "x": 5.78, "y": 5.82, "z": 3.57 }, { "name": 16221, "carat": 1.03, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 62, "table": 58, "price": 6484, "x": 6.5, "y": 6.46, "z": 4.02 }, { "name": 12627, "carat": 1.25, "cut": "Ideal", "color": "I", "clarity": "SI2", "depth": 63.3, "table": 56, "price": 5292, "x": 6.87, "y": 6.83, "z": 4.34 }, { "name": 41967, "carat": 0.23, "cut": "Very-Good", "color": "E", "clarity": "VVS2", "depth": 61.1, "table": 58, "price": 505, "x": 3.93, "y": 3.99, "z": 2.42 }, { "name": 6493, "carat": 1.06, "cut": "Good", "color": "H", "clarity": "SI1", "depth": 57.2, "table": 60, "price": 4060, "x": 6.84, "y": 6.74, "z": 3.88 }, { "name": 15854, "carat": 1.02, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 62.6, "table": 57, "price": 6342, "x": 6.41, "y": 6.44, "z": 4.02 }, { "name": 36269, "carat": 0.32, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 61.9, "table": 57, "price": 936, "x": 4.41, "y": 4.38, "z": 2.72 }, { "name": 7956, "carat": 1.07, "cut": "Very-Good", "color": "G", "clarity": "SI2", "depth": 62.9, "table": 59, "price": 4321, "x": 6.51, "y": 6.58, "z": 4.12 }, { "name": 50816, "carat": 0.75, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 60.3, "table": 61, "price": 2307, "x": 5.88, "y": 5.86, "z": 3.54 }, { "name": 33151, "carat": 0.31, "cut": "Premium", "color": "G", "clarity": "VVS1", "depth": 61.4, "table": 58, "price": 816, "x": 4.32, "y": 4.35, "z": 2.66 }, { "name": 37024, "carat": 0.33, "cut": "Premium", "color": "G", "clarity": "VVS2", "depth": 61.9, "table": 58, "price": 965, "x": 4.43, "y": 4.39, "z": 2.73 }, { "name": 6022, "carat": 1.18, "cut": "Very-Good", "color": "E", "clarity": "I1", "depth": 63.3, "table": 57, "price": 3965, "x": 6.7, "y": 6.64, "z": 4.22 }, { "name": 31531, "carat": 0.34, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 62.2, "table": 55, "price": 765, "x": 4.49, "y": 4.45, "z": 2.78 }, { "name": 25949, "carat": 1.51, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 61.8, "table": 57, "price": 15118, "x": 7.36, "y": 7.31, "z": 4.53 }, { "name": 2426, "carat": 0.95, "cut": "Premium", "color": "G", "clarity": "SI2", "depth": 59.8, "table": 60, "price": 3181, "x": 6.36, "y": 6.34, "z": 3.8 }, { "name": 35436, "carat": 0.32, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 62, "table": 55, "price": 900, "x": 4.41, "y": 4.39, "z": 2.73 }, { "name": 41220, "carat": 0.43, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 61.5, "table": 56, "price": 1207, "x": 4.85, "y": 4.87, "z": 2.99 }, { "name": 33773, "carat": 0.48, "cut": "Ideal", "color": "I", "clarity": "SI1", "depth": 61.9, "table": 53, "price": 841, "x": 5.06, "y": 5.08, "z": 3.14 }, { "name": 16566, "carat": 1.01, "cut": "Premium", "color": "G", "clarity": "VS1", "depth": 62.8, "table": 59, "price": 6618, "x": 6.37, "y": 6.34, "z": 3.99 }, { "name": 9385, "carat": 0.32, "cut": "Ideal", "color": "D", "clarity": "SI1", "depth": 61.5, "table": 56, "price": 589, "x": 4.39, "y": 4.42, "z": 2.71 }, { "name": 22896, "carat": 1.56, "cut": "Ideal", "color": "D", "clarity": "SI1", "depth": 62.2, "table": 58, "price": 10934, "x": 7.37, "y": 7.42, "z": 4.6 }, { "name": 15350, "carat": 1, "cut": "Good", "color": "E", "clarity": "VS2", "depth": 57.4, "table": 58, "price": 6160, "x": 6.61, "y": 6.57, "z": 3.78 }, { "name": 20496, "carat": 1.2, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 62.4, "table": 58, "price": 8829, "x": 6.75, "y": 6.81, "z": 4.23 }, { "name": 26237, "carat": 1.71, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 59.3, "table": 60, "price": 15671, "x": 7.86, "y": 7.81, "z": 4.65 }, { "name": 21635, "carat": 1.02, "cut": "Very-Good", "color": "F", "clarity": "VVS2", "depth": 63.7, "table": 59, "price": 9728, "x": 6.34, "y": 6.38, "z": 4.05 }, { "name": 413, "carat": 0.3, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 62.3, "table": 56, "price": 555, "x": 4.29, "y": 4.31, "z": 2.68 }, { "name": 4229, "carat": 0.74, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 61.5, "table": 56, "price": 3572, "x": 5.79, "y": 5.82, "z": 3.57 }, { "name": 10579, "carat": 1.23, "cut": "Ideal", "color": "F", "clarity": "SI2", "depth": 62.1, "table": 57, "price": 4819, "x": 6.83, "y": 6.8, "z": 4.23 }, { "name": 40264, "carat": 0.33, "cut": "Ideal", "color": "D", "clarity": "SI2", "depth": 61.1, "table": 57, "price": 492, "x": 4.47, "y": 4.5, "z": 2.74 }, { "name": 19797, "carat": 1.74, "cut": "Premium", "color": "J", "clarity": "VS2", "depth": 61.9, "table": 62, "price": 8364, "x": 7.62, "y": 7.54, "z": 4.7 }, { "name": 41748, "carat": 0.52, "cut": "Good", "color": "G", "clarity": "SI1", "depth": 63.6, "table": 56, "price": 1244, "x": 5.07, "y": 5.09, "z": 3.23 }, { "name": 2696, "carat": 0.9, "cut": "Very-Good", "color": "G", "clarity": "SI2", "depth": 63.4, "table": 59, "price": 3246, "x": 6.08, "y": 6.04, "z": 3.84 }, { "name": 13216, "carat": 0.91, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 61.9, "table": 55, "price": 5458, "x": 6.21, "y": 6.23, "z": 3.85 }, { "name": 6925, "carat": 0.91, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 63.5, "table": 57, "price": 4138, "x": 6.11, "y": 6.07, "z": 3.87 }, { "name": 41236, "carat": 0.39, "cut": "Premium", "color": "E", "clarity": "VVS2", "depth": 61.1, "table": 59, "price": 1207, "x": 4.74, "y": 4.68, "z": 2.88 }, { "name": 51977, "carat": 0.26, "cut": "Very-Good", "color": "E", "clarity": "VVS1", "depth": 62.9, "table": 61, "price": 547, "x": 4.01, "y": 4.06, "z": 2.54 }, { "name": 44527, "carat": 0.5, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 62.2, "table": 54.1, "price": 1601, "x": 5.07, "y": 5.12, "z": 3.17 }, { "name": 442, "carat": 0.89, "cut": "Premium", "color": "H", "clarity": "SI2", "depth": 60.2, "table": 59, "price": 2815, "x": 6.26, "y": 6.23, "z": 3.76 }, { "name": 6065, "carat": 1.01, "cut": "Very-Good", "color": "G", "clarity": "SI2", "depth": 62.1, "table": 61, "price": 3966, "x": 6.27, "y": 6.38, "z": 3.93 }, { "name": 50812, "carat": 0.54, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 61.6, "table": 55, "price": 2307, "x": 5.25, "y": 5.27, "z": 3.24 }, { "name": 28616, "carat": 0.3, "cut": "Premium", "color": "E", "clarity": "SI1", "depth": 62.5, "table": 60, "price": 675, "x": 4.27, "y": 4.24, "z": 2.66 }, { "name": 3714, "carat": 0.9, "cut": "Very-Good", "color": "G", "clarity": "SI2", "depth": 63.1, "table": 55, "price": 3452, "x": 6.16, "y": 6.13, "z": 3.88 }, { "name": 48054, "carat": 0.72, "cut": "Ideal", "color": "I", "clarity": "SI2", "depth": 60.7, "table": 60, "price": 1927, "x": 5.75, "y": 5.78, "z": 3.5 }, { "name": 31482, "carat": 0.34, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 60.2, "table": 58, "price": 765, "x": 4.55, "y": 4.52, "z": 2.73 }, { "name": 43479, "carat": 0.5, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 60.1, "table": 61, "price": 1420, "x": 5.2, "y": 5.15, "z": 3.11 }, { "name": 49421, "carat": 0.55, "cut": "Ideal", "color": "E", "clarity": "VS1", "depth": 61.2, "table": 57, "price": 2107, "x": 5.3, "y": 5.28, "z": 3.24 }, { "name": 26852, "carat": 2.01, "cut": "Premium", "color": "I", "clarity": "VS2", "depth": 61, "table": 61, "price": 16778, "x": 8.15, "y": 7.99, "z": 4.92 }, { "name": 50683, "carat": 0.76, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 63, "table": 56, "price": 2288, "x": 5.81, "y": 5.84, "z": 3.67 }, { "name": 51574, "carat": 0.74, "cut": "Very-Good", "color": "E", "clarity": "SI2", "depth": 61.8, "table": 60, "price": 2391, "x": 5.78, "y": 5.8, "z": 3.58 }, { "name": 4490, "carat": 1.01, "cut": "Good", "color": "G", "clarity": "SI2", "depth": 63.7, "table": 58, "price": 3626, "x": 6.31, "y": 6.35, "z": 4.03 }, { "name": 14321, "carat": 1.18, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 61.8, "table": 58, "price": 5801, "x": 6.79, "y": 6.74, "z": 4.18 }, { "name": 32399, "carat": 0.31, "cut": "Ideal", "color": "E", "clarity": "VVS2", "depth": 62, "table": 54, "price": 791, "x": 4.38, "y": 4.4, "z": 2.72 }, { "name": 48692, "carat": 0.58, "cut": "Ideal", "color": "H", "clarity": "VVS1", "depth": 61.6, "table": 56, "price": 2006, "x": 5.35, "y": 5.39, "z": 3.31 }, { "name": 28458, "carat": 0.32, "cut": "Very-Good", "color": "G", "clarity": "VVS2", "depth": 61.9, "table": 57, "price": 672, "x": 4.39, "y": 4.41, "z": 2.73 }, { "name": 15645, "carat": 1, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 62.3, "table": 54, "price": 6272, "x": 6.42, "y": 6.38, "z": 3.99 }, { "name": 30606, "carat": 0.34, "cut": "Very-Good", "color": "I", "clarity": "SI1", "depth": 61.8, "table": 57, "price": 447, "x": 4.46, "y": 4.51, "z": 2.77 }, { "name": 8079, "carat": 1.01, "cut": "Good", "color": "D", "clarity": "SI2", "depth": 57.6, "table": 62, "price": 4338, "x": 6.66, "y": 6.56, "z": 3.81 }, { "name": 50346, "carat": 0.7, "cut": "Premium", "color": "H", "clarity": "VS1", "depth": 60.5, "table": 58, "price": 2245, "x": 5.73, "y": 5.77, "z": 3.48 }, { "name": 5859, "carat": 0.91, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 59.6, "table": 60, "price": 3921, "x": 6.25, "y": 6.29, "z": 3.74 }, { "name": 6230, "carat": 0.9, "cut": "Good", "color": "F", "clarity": "SI1", "depth": 58.8, "table": 60, "price": 4004, "x": 6.22, "y": 6.26, "z": 3.67 }, { "name": 33140, "carat": 0.31, "cut": "Premium", "color": "G", "clarity": "VVS1", "depth": 62.1, "table": 59, "price": 816, "x": 4.34, "y": 4.39, "z": 2.71 }, { "name": 991, "carat": 0.77, "cut": "Premium", "color": "E", "clarity": "SI1", "depth": 60.9, "table": 58, "price": 2896, "x": 5.94, "y": 5.88, "z": 3.6 }, { "name": 11591, "carat": 1.07, "cut": "Premium", "color": "F", "clarity": "SI1", "depth": 61.7, "table": 58, "price": 5042, "x": 6.54, "y": 6.61, "z": 4.06 }, { "name": 1034, "carat": 0.71, "cut": "Very-Good", "color": "G", "clarity": "VS2", "depth": 62.1, "table": 58, "price": 2905, "x": 5.65, "y": 5.71, "z": 3.53 }, { "name": 23396, "carat": 0.36, "cut": "Premium", "color": "E", "clarity": "SI1", "depth": 60.9, "table": 60, "price": 631, "x": 4.56, "y": 4.61, "z": 2.79 }, { "name": 13821, "carat": 1.26, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 61, "table": 55, "price": 5631, "x": 7, "y": 6.97, "z": 4.26 }, { "name": 4418, "carat": 1.01, "cut": "Good", "color": "E", "clarity": "SI2", "depth": 63.9, "table": 58, "price": 3611, "x": 6.37, "y": 6.31, "z": 4.05 }, { "name": 110, "carat": 0.59, "cut": "Ideal", "color": "E", "clarity": "VVS2", "depth": 62, "table": 55, "price": 2761, "x": 5.38, "y": 5.43, "z": 3.35 }, { "name": 46385, "carat": 0.57, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 62, "table": 58, "price": 1763, "x": 5.38, "y": 5.33, "z": 3.32 }, { "name": 36517, "carat": 0.3, "cut": "Premium", "color": "F", "clarity": "VVS2", "depth": 62.4, "table": 58, "price": 945, "x": 4.28, "y": 4.25, "z": 2.66 }, { "name": 50692, "carat": 0.53, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 61.6, "table": 56, "price": 2290, "x": 5.26, "y": 5.23, "z": 3.23 }, { "name": 16356, "carat": 0.3, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 62.6, "table": 58, "price": 608, "x": 4.28, "y": 4.22, "z": 2.66 }, { "name": 30090, "carat": 0.32, "cut": "Premium", "color": "H", "clarity": "VS1", "depth": 60.5, "table": 59, "price": 720, "x": 4.42, "y": 4.41, "z": 2.67 }, { "name": 47490, "carat": 0.72, "cut": "Ideal", "color": "J", "clarity": "SI1", "depth": 62.3, "table": 56, "price": 1864, "x": 5.75, "y": 5.78, "z": 3.59 }, { "name": 34950, "carat": 0.31, "cut": "Ideal", "color": "I", "clarity": "SI2", "depth": 61, "table": 56, "price": 379, "x": 4.39, "y": 4.43, "z": 2.69 }, { "name": 19144, "carat": 1.6, "cut": "Very-Good", "color": "I", "clarity": "SI2", "depth": 62.2, "table": 59, "price": 7906, "x": 7.42, "y": 7.46, "z": 4.63 }, { "name": 14123, "carat": 1.05, "cut": "Ideal", "color": "H", "clarity": "VS2", "depth": 61.7, "table": 57, "price": 5728, "x": 6.52, "y": 6.55, "z": 4.03 }, { "name": 32105, "carat": 0.33, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 62.1, "table": 55, "price": 781, "x": 4.43, "y": 4.46, "z": 2.76 }, { "name": 18898, "carat": 1.07, "cut": "Premium", "color": "D", "clarity": "VS2", "depth": 61.3, "table": 59, "price": 7751, "x": 6.61, "y": 6.53, "z": 4.03 }, { "name": 29023, "carat": 0.31, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 62.4, "table": 54, "price": 687, "x": 4.37, "y": 4.38, "z": 2.73 }, { "name": 35086, "carat": 0.3, "cut": "Ideal", "color": "F", "clarity": "IF", "depth": 61.1, "table": 58, "price": 886, "x": 4.32, "y": 4.36, "z": 2.65 }, { "name": 2621, "carat": 0.74, "cut": "Very-Good", "color": "F", "clarity": "VS1", "depth": 61.7, "table": 57, "price": 3226, "x": 5.79, "y": 5.85, "z": 3.59 }, { "name": 50578, "carat": 0.56, "cut": "Premium", "color": "E", "clarity": "VVS2", "depth": 61.5, "table": 58, "price": 2279, "x": 5.3, "y": 5.33, "z": 3.27 }, { "name": 27907, "carat": 0.41, "cut": "Ideal", "color": "D", "clarity": "SI2", "depth": 62.6, "table": 57, "price": 656, "x": 4.72, "y": 4.77, "z": 2.97 }, { "name": 46212, "carat": 0.51, "cut": "Very-Good", "color": "F", "clarity": "VS1", "depth": 62.5, "table": 54, "price": 1751, "x": 5.13, "y": 5.15, "z": 3.21 }, { "name": 27876, "carat": 0.44, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 62.3, "table": 54, "price": 654, "x": 4.89, "y": 4.93, "z": 3.06 }, { "name": 39269, "carat": 0.38, "cut": "Premium", "color": "G", "clarity": "VS1", "depth": 61.9, "table": 59, "price": 1069, "x": 4.67, "y": 4.63, "z": 2.88 }, { "name": 25518, "carat": 2.14, "cut": "Ideal", "color": "I", "clarity": "SI2", "depth": 61.9, "table": 56, "price": 14321, "x": 8.22, "y": 8.26, "z": 5.1 }, { "name": 32774, "carat": 0.34, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 61.2, "table": 58, "price": 803, "x": 4.49, "y": 4.47, "z": 2.74 }, { "name": 44438, "carat": 0.51, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 62.5, "table": 60, "price": 1590, "x": 5.08, "y": 5.1, "z": 3.18 }, { "name": 2369, "carat": 0.9, "cut": "Good", "color": "I", "clarity": "SI1", "depth": 63.5, "table": 59, "price": 3176, "x": 6.05, "y": 6.1, "z": 3.86 }, { "name": 34537, "carat": 0.33, "cut": "Ideal", "color": "E", "clarity": "VVS2", "depth": 61.7, "table": 57, "price": 868, "x": 4.41, "y": 4.44, "z": 2.73 }, { "name": 41755, "carat": 0.5, "cut": "Ideal", "color": "I", "clarity": "VS2", "depth": 62.5, "table": 55, "price": 1244, "x": 5.05, "y": 5.09, "z": 3.17 }, { "name": 41188, "carat": 0.5, "cut": "Very-Good", "color": "G", "clarity": "SI1", "depth": 60.6, "table": 56, "price": 1202, "x": 5.13, "y": 5.16, "z": 3.12 }, { "name": 38319, "carat": 0.52, "cut": "Ideal", "color": "I", "clarity": "SI1", "depth": 62, "table": 54, "price": 1019, "x": 5.17, "y": 5.19, "z": 3.21 }, { "name": 13565, "carat": 1.16, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 62.2, "table": 55, "price": 5554, "x": 6.79, "y": 6.74, "z": 4.21 }, { "name": 3909, "carat": 0.71, "cut": "Very-Good", "color": "F", "clarity": "VVS2", "depth": 60.6, "table": 58, "price": 3494, "x": 5.76, "y": 5.79, "z": 3.5 }, { "name": 48366, "carat": 0.56, "cut": "Premium", "color": "D", "clarity": "VS2", "depth": 61.1, "table": 58, "price": 1963, "x": 5.3, "y": 5.34, "z": 3.25 }, { "name": 6629, "carat": 0.8, "cut": "Ideal", "color": "E", "clarity": "VS1", "depth": 62.1, "table": 56, "price": 4086, "x": 5.92, "y": 5.97, "z": 3.69 }, { "name": 51713, "carat": 0.78, "cut": "Very-Good", "color": "G", "clarity": "SI2", "depth": 63.7, "table": 55.9, "price": 2401, "x": 5.82, "y": 5.85, "z": 3.72 }, { "name": 11921, "carat": 1.22, "cut": "Ideal", "color": "I", "clarity": "SI1", "depth": 62.5, "table": 56, "price": 5124, "x": 6.82, "y": 6.79, "z": 4.25 }, { "name": 30835, "carat": 0.33, "cut": "Ideal", "color": "H", "clarity": "VS1", "depth": 60.2, "table": 57, "price": 743, "x": 4.54, "y": 4.5, "z": 2.72 }, { "name": 4295, "carat": 0.82, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 61.8, "table": 55, "price": 3588, "x": 5.97, "y": 6.01, "z": 3.7 }, { "name": 423, "carat": 0.71, "cut": "Ideal", "color": "D", "clarity": "SI1", "depth": 62.4, "table": 57, "price": 2812, "x": 5.69, "y": 5.72, "z": 3.56 }, { "name": 22043, "carat": 0.31, "cut": "Very-Good", "color": "I", "clarity": "VS1", "depth": 63.2, "table": 56, "price": 628, "x": 4.33, "y": 4.28, "z": 2.72 }, { "name": 53028, "carat": 0.82, "cut": "Very-Good", "color": "I", "clarity": "SI1", "depth": 60.5, "table": 58, "price": 2602, "x": 6.01, "y": 6.08, "z": 3.66 }, { "name": 41363, "carat": 0.52, "cut": "Very-Good", "color": "H", "clarity": "SI1", "depth": 63.1, "table": 57, "price": 1219, "x": 5.14, "y": 5.09, "z": 3.23 }, { "name": 2400, "carat": 0.31, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 61.7, "table": 55, "price": 562, "x": 4.37, "y": 4.39, "z": 2.7 }, { "name": 39296, "carat": 0.3, "cut": "Ideal", "color": "H", "clarity": "VS2", "depth": 62.5, "table": 57, "price": 491, "x": 4.26, "y": 4.29, "z": 2.67 }, { "name": 13143, "carat": 1.01, "cut": "Ideal", "color": "E", "clarity": "SI2", "depth": 61.5, "table": 55, "price": 5437, "x": 6.44, "y": 6.51, "z": 3.98 }, { "name": 44041, "carat": 0.53, "cut": "Very-Good", "color": "H", "clarity": "VVS2", "depth": 61.3, "table": 61, "price": 1548, "x": 5.15, "y": 5.2, "z": 3.17 }, { "name": 38296, "carat": 0.3, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 60.6, "table": 57, "price": 487, "x": 4.34, "y": 4.37, "z": 2.63 }, { "name": 44394, "carat": 0.51, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 60.6, "table": 57, "price": 1583, "x": 5.17, "y": 5.2, "z": 3.14 }, { "name": 28735, "carat": 0.31, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 62, "table": 56, "price": 680, "x": 4.34, "y": 4.37, "z": 2.7 }, { "name": 14912, "carat": 1.07, "cut": "Very-Good", "color": "D", "clarity": "SI1", "depth": 60.2, "table": 55, "price": 6002, "x": 6.64, "y": 6.68, "z": 4.01 }, { "name": 18648, "carat": 1.03, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 59, "table": 55, "price": 7613, "x": 6.62, "y": 6.67, "z": 3.92 }, { "name": 48841, "carat": 0.55, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 61.8, "table": 54, "price": 2030, "x": 5.29, "y": 5.26, "z": 3.26 }, { "name": 22540, "carat": 2.02, "cut": "Ideal", "color": "I", "clarity": "SI2", "depth": 62.3, "table": 55, "price": 10577, "x": 8.1, "y": 8.06, "z": 5.03 }, { "name": 1752, "carat": 0.81, "cut": "Good", "color": "I", "clarity": "VS1", "depth": 59.4, "table": 56, "price": 3042, "x": 5.97, "y": 6.11, "z": 3.59 }, { "name": 14997, "carat": 1.07, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 62.2, "table": 58, "price": 6040, "x": 6.54, "y": 6.48, "z": 4.05 }, { "name": 8429, "carat": 0.92, "cut": "Good", "color": "E", "clarity": "VS2", "depth": 58.9, "table": 57, "price": 4406, "x": 6.35, "y": 6.38, "z": 3.75 }, { "name": 43254, "carat": 0.42, "cut": "Ideal", "color": "E", "clarity": "VVS1", "depth": 62.1, "table": 55, "price": 1400, "x": 4.78, "y": 4.81, "z": 2.98 }, { "name": 38577, "carat": 0.4, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 62.8, "table": 61, "price": 1035, "x": 4.67, "y": 4.63, "z": 2.92 }, { "name": 45190, "carat": 0.51, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 62.5, "table": 57, "price": 1656, "x": 5.07, "y": 5.14, "z": 3.19 }, { "name": 28080, "carat": 0.4, "cut": "Ideal", "color": "J", "clarity": "VVS2", "depth": 62.5, "table": 53, "price": 662, "x": 4.74, "y": 4.79, "z": 2.98 }, { "name": 14187, "carat": 1.01, "cut": "Good", "color": "G", "clarity": "VS2", "depth": 58.9, "table": 61, "price": 5756, "x": 6.46, "y": 6.55, "z": 3.83 }, { "name": 18522, "carat": 1.6, "cut": "Premium", "color": "J", "clarity": "SI1", "depth": 62.2, "table": 58, "price": 7550, "x": 7.48, "y": 7.54, "z": 4.67 }, { "name": 18046, "carat": 0.3, "cut": "Very-Good", "color": "E", "clarity": "VS2", "depth": 62.6, "table": 62, "price": 614, "x": 4.21, "y": 4.25, "z": 2.65 }, { "name": 30370, "carat": 0.36, "cut": "Very-Good", "color": "H", "clarity": "VS2", "depth": 63.5, "table": 54, "price": 729, "x": 4.59, "y": 4.55, "z": 2.9 }, { "name": 3507, "carat": 0.76, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 61.2, "table": 56, "price": 3401, "x": 5.88, "y": 5.91, "z": 3.61 }, { "name": 21699, "carat": 0.34, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 62.4, "table": 58, "price": 626, "x": 4.42, "y": 4.46, "z": 2.77 }, { "name": 15698, "carat": 0.35, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 61.5, "table": 54, "price": 607, "x": 4.57, "y": 4.6, "z": 2.82 }, { "name": 44791, "carat": 0.5, "cut": "Very-Good", "color": "E", "clarity": "VS2", "depth": 61.4, "table": 59, "price": 1624, "x": 5.09, "y": 5.13, "z": 3.14 }, { "name": 22790, "carat": 1.62, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 61.3, "table": 60, "price": 10813, "x": 7.48, "y": 7.53, "z": 4.6 }, { "name": 19285, "carat": 1.11, "cut": "Very-Good", "color": "D", "clarity": "VS2", "depth": 63.2, "table": 57, "price": 8006, "x": 6.64, "y": 6.61, "z": 4.18 }, { "name": 14736, "carat": 1.25, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 62.2, "table": 55.4, "price": 5932, "x": 6.89, "y": 6.94, "z": 4.29 }, { "name": 46196, "carat": 0.5, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 60.9, "table": 57, "price": 1749, "x": 5.14, "y": 5.16, "z": 3.14 }, { "name": 37954, "carat": 0.41, "cut": "Very-Good", "color": "F", "clarity": "VS1", "depth": 58.6, "table": 61, "price": 1007, "x": 4.83, "y": 4.87, "z": 2.84 }, { "name": 48989, "carat": 0.36, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 61.7, "table": 54, "price": 538, "x": 4.56, "y": 4.62, "z": 2.83 }, { "name": 29695, "carat": 0.31, "cut": "Very-Good", "color": "H", "clarity": "VVS1", "depth": 63, "table": 58, "price": 707, "x": 4.33, "y": 4.37, "z": 2.74 }, { "name": 30585, "carat": 0.31, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 61.5, "table": 56, "price": 734, "x": 4.34, "y": 4.37, "z": 2.68 }, { "name": 28251, "carat": 0.33, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 60.8, "table": 58, "price": 666, "x": 4.44, "y": 4.47, "z": 2.71 }, { "name": 18984, "carat": 1.09, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 62.1, "table": 57, "price": 7813, "x": 6.62, "y": 6.56, "z": 4.09 }, { "name": 36046, "carat": 0.34, "cut": "Very-Good", "color": "G", "clarity": "IF", "depth": 61, "table": 56, "price": 924, "x": 4.5, "y": 4.54, "z": 2.76 }, { "name": 3, "carat": 0.23, "cut": "Good", "color": "E", "clarity": "VS1", "depth": 56.9, "table": 65, "price": 327, "x": 4.05, "y": 4.07, "z": 2.31 }, { "name": 33592, "carat": 0.37, "cut": "Premium", "color": "H", "clarity": "VS1", "depth": 60.9, "table": 60, "price": 833, "x": 4.63, "y": 4.6, "z": 2.81 }, { "name": 20738, "carat": 1.4, "cut": "Ideal", "color": "H", "clarity": "VS2", "depth": 63, "table": 56, "price": 8977, "x": 7.13, "y": 7.07, "z": 4.47 }, { "name": 10220, "carat": 1, "cut": "Ideal", "color": "E", "clarity": "SI2", "depth": 61.8, "table": 57, "price": 4743, "x": 6.39, "y": 6.43, "z": 3.96 }, { "name": 41632, "carat": 0.32, "cut": "Very-Good", "color": "H", "clarity": "SI2", "depth": 63.2, "table": 55, "price": 504, "x": 4.36, "y": 4.34, "z": 2.75 }, { "name": 41443, "carat": 0.4, "cut": "Very-Good", "color": "G", "clarity": "IF", "depth": 61.4, "table": 54, "price": 1229, "x": 4.76, "y": 4.79, "z": 2.93 }, { "name": 2473, "carat": 0.76, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 61.5, "table": 56, "price": 3192, "x": 5.92, "y": 5.89, "z": 3.63 }, { "name": 22363, "carat": 0.31, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 61.3, "table": 60, "price": 628, "x": 4.36, "y": 4.32, "z": 2.66 }, { "name": 2615, "carat": 0.72, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 61.3, "table": 57, "price": 3223, "x": 5.76, "y": 5.79, "z": 3.54 }, { "name": 49975, "carat": 0.29, "cut": "Very-Good", "color": "G", "clarity": "VVS2", "depth": 60.9, "table": 57, "price": 541, "x": 4.28, "y": 4.32, "z": 2.61 }, { "name": 26857, "carat": 2.1, "cut": "Premium", "color": "E", "clarity": "SI2", "depth": 62.9, "table": 59, "price": 16783, "x": 8.18, "y": 8.13, "z": 5.13 }, { "name": 5333, "carat": 1.04, "cut": "Very-Good", "color": "J", "clarity": "SI2", "depth": 63.5, "table": 59, "price": 3810, "x": 6.37, "y": 6.42, "z": 4.06 }, { "name": 52202, "carat": 0.67, "cut": "Good", "color": "F", "clarity": "VS1", "depth": 59.8, "table": 60.3, "price": 2479, "x": 5.62, "y": 5.69, "z": 3.38 }, { "name": 30749, "carat": 0.34, "cut": "Ideal", "color": "H", "clarity": "VVS1", "depth": 62.2, "table": 54, "price": 740, "x": 4.48, "y": 4.53, "z": 2.8 }, { "name": 28454, "carat": 0.41, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 62.2, "table": 56, "price": 671, "x": 4.75, "y": 4.77, "z": 2.96 }, { "name": 20320, "carat": 1.22, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 62, "table": 58, "price": 8733, "x": 6.89, "y": 6.86, "z": 4.26 }, { "name": 5571, "carat": 1.08, "cut": "Fair", "color": "E", "clarity": "SI2", "depth": 64.9, "table": 60, "price": 3861, "x": 6.43, "y": 6.39, "z": 4.16 }, { "name": 41709, "carat": 0.51, "cut": "Very-Good", "color": "G", "clarity": "SI1", "depth": 62.7, "table": 59, "price": 1243, "x": 5.07, "y": 5.13, "z": 3.2 }, { "name": 33087, "carat": 0.46, "cut": "Very-Good", "color": "F", "clarity": "SI2", "depth": 62.6, "table": 58, "price": 815, "x": 4.88, "y": 4.96, "z": 3.08 }, { "name": 7344, "carat": 1.18, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 61.8, "table": 58, "price": 4211, "x": 6.83, "y": 6.7, "z": 4.19 }, { "name": 1949, "carat": 0.72, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 62.4, "table": 56, "price": 3084, "x": 5.76, "y": 5.72, "z": 3.58 }, { "name": 46642, "carat": 0.3, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 62.9, "table": 57, "price": 526, "x": 4.25, "y": 4.3, "z": 2.69 }, { "name": 38126, "carat": 0.3, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 62.3, "table": 54, "price": 1013, "x": 4.33, "y": 4.31, "z": 2.69 }, { "name": 18465, "carat": 1.07, "cut": "Very-Good", "color": "F", "clarity": "VS1", "depth": 62, "table": 56, "price": 7513, "x": 6.51, "y": 6.55, "z": 4.05 }, { "name": 31404, "carat": 0.3, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 61.9, "table": 57, "price": 764, "x": 4.28, "y": 4.31, "z": 2.66 }, { "name": 31274, "carat": 0.32, "cut": "Ideal", "color": "I", "clarity": "VS2", "depth": 61.6, "table": 56, "price": 449, "x": 4.37, "y": 4.39, "z": 2.7 }, { "name": 23938, "carat": 1.5, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 62.4, "table": 58, "price": 12069, "x": 7.27, "y": 7.31, "z": 4.55 }, { "name": 14586, "carat": 1.05, "cut": "Premium", "color": "H", "clarity": "VS1", "depth": 60.1, "table": 57, "price": 5886, "x": 6.62, "y": 6.59, "z": 3.97 }, { "name": 29105, "carat": 0.34, "cut": "Ideal", "color": "H", "clarity": "VS2", "depth": 61.4, "table": 57, "price": 689, "x": 4.55, "y": 4.48, "z": 2.77 }, { "name": 35835, "carat": 0.32, "cut": "Ideal", "color": "F", "clarity": "IF", "depth": 61.9, "table": 55, "price": 915, "x": 4.38, "y": 4.44, "z": 2.73 }, { "name": 42875, "carat": 0.45, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 61.7, "table": 56, "price": 1358, "x": 4.96, "y": 4.93, "z": 3.05 }, { "name": 23957, "carat": 1.44, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 62.6, "table": 57, "price": 12093, "x": 7.21, "y": 7.19, "z": 4.51 }, { "name": 7756, "carat": 1.05, "cut": "Fair", "color": "I", "clarity": "VS1", "depth": 58.9, "table": 66, "price": 4281, "x": 6.71, "y": 6.6, "z": 3.92 }, { "name": 28871, "carat": 0.32, "cut": "Premium", "color": "F", "clarity": "SI1", "depth": 59.3, "table": 58, "price": 684, "x": 4.5, "y": 4.47, "z": 2.66 }, { "name": 47900, "carat": 0.54, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 61.7, "table": 57, "price": 1914, "x": 5.23, "y": 5.26, "z": 3.23 }, { "name": 5586, "carat": 1, "cut": "Fair", "color": "F", "clarity": "SI2", "depth": 65.5, "table": 54, "price": 3864, "x": 6.2, "y": 6.16, "z": 4.05 }, { "name": 25711, "carat": 2.11, "cut": "Premium", "color": "I", "clarity": "SI2", "depth": 58.4, "table": 62, "price": 14615, "x": 8.43, "y": 8.39, "z": 4.91 }, { "name": 33428, "carat": 0.32, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 61.3, "table": 55, "price": 828, "x": 4.46, "y": 4.42, "z": 2.72 }, { "name": 23684, "carat": 1.55, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 60.7, "table": 59, "price": 11738, "x": 7.46, "y": 7.5, "z": 4.54 }, { "name": 8434, "carat": 1.08, "cut": "Very-Good", "color": "F", "clarity": "SI2", "depth": 62.6, "table": 56, "price": 4407, "x": 6.55, "y": 6.61, "z": 4.12 }, { "name": 21746, "carat": 1, "cut": "Very-Good", "color": "E", "clarity": "VVS2", "depth": 59.1, "table": 58, "price": 9815, "x": 6.5, "y": 6.57, "z": 3.86 }, { "name": 8729, "carat": 0.27, "cut": "Ideal", "color": "E", "clarity": "VVS1", "depth": 62, "table": 56, "price": 586, "x": 4.16, "y": 4.19, "z": 2.59 }, { "name": 2088, "carat": 0.79, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 61.4, "table": 59, "price": 3112, "x": 5.89, "y": 5.96, "z": 3.64 }, { "name": 13055, "carat": 1.03, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 60.5, "table": 61, "price": 5410, "x": 6.47, "y": 6.43, "z": 3.9 }, { "name": 35133, "carat": 0.41, "cut": "Very-Good", "color": "G", "clarity": "VVS2", "depth": 59.1, "table": 60, "price": 889, "x": 4.84, "y": 4.87, "z": 2.87 }, { "name": 31658, "carat": 0.32, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 61.4, "table": 56, "price": 768, "x": 4.45, "y": 4.41, "z": 2.72 }, { "name": 48599, "carat": 0.7, "cut": "Fair", "color": "I", "clarity": "VS2", "depth": 64.4, "table": 55, "price": 1996, "x": 5.6, "y": 5.55, "z": 3.59 }, { "name": 36281, "carat": 0.32, "cut": "Good", "color": "G", "clarity": "SI1", "depth": 63.5, "table": 56, "price": 477, "x": 4.35, "y": 4.38, "z": 2.77 }, { "name": 35578, "carat": 0.35, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 62, "table": 59, "price": 906, "x": 4.55, "y": 4.51, "z": 2.81 }, { "name": 11700, "carat": 1.29, "cut": "Very-Good", "color": "J", "clarity": "VS2", "depth": 61.3, "table": 60, "price": 5068, "x": 6.96, "y": 6.98, "z": 4.27 }, { "name": 34365, "carat": 0.41, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 61.1, "table": 56, "price": 863, "x": 4.8, "y": 4.83, "z": 2.94 }, { "name": 29341, "carat": 0.31, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 59.2, "table": 60, "price": 698, "x": 4.47, "y": 4.42, "z": 2.63 }, { "name": 2854, "carat": 0.73, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 60.2, "table": 56, "price": 3273, "x": 5.86, "y": 5.9, "z": 3.54 }, { "name": 17409, "carat": 1.36, "cut": "Ideal", "color": "J", "clarity": "VVS2", "depth": 61.9, "table": 56, "price": 6973, "x": 7.16, "y": 7.13, "z": 4.42 }, { "name": 34443, "carat": 0.31, "cut": "Ideal", "color": "E", "clarity": "VVS2", "depth": 61.3, "table": 55, "price": 864, "x": 4.34, "y": 4.37, "z": 2.67 }, { "name": 52563, "carat": 0.7, "cut": "Ideal", "color": "I", "clarity": "VVS1", "depth": 62.3, "table": 55, "price": 2536, "x": 5.7, "y": 5.64, "z": 3.53 }, { "name": 12988, "carat": 1, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 62.3, "table": 55, "price": 5396, "x": 6.41, "y": 6.34, "z": 3.97 }, { "name": 14853, "carat": 1.07, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 62.7, "table": 56, "price": 5982, "x": 6.47, "y": 6.53, "z": 4.08 }, { "name": 940, "carat": 0.9, "cut": "Fair", "color": "D", "clarity": "SI2", "depth": 66.9, "table": 57, "price": 2885, "x": 6.02, "y": 5.9, "z": 3.99 }, { "name": 26708, "carat": 0.32, "cut": "Very-Good", "color": "G", "clarity": "VS1", "depth": 61.8, "table": 60, "price": 645, "x": 4.35, "y": 4.36, "z": 2.69 }, { "name": 44127, "carat": 0.5, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 62, "table": 56, "price": 1559, "x": 5.06, "y": 5.1, "z": 3.15 }, { "name": 34450, "carat": 0.4, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 61.7, "table": 61, "price": 864, "x": 4.68, "y": 4.63, "z": 2.87 }, { "name": 30140, "carat": 0.32, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 62.6, "table": 60, "price": 720, "x": 4.36, "y": 4.33, "z": 2.72 }, { "name": 4853, "carat": 0.71, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 61.3, "table": 56, "price": 3710, "x": 5.69, "y": 5.75, "z": 3.51 }, { "name": 47541, "carat": 0.58, "cut": "Very-Good", "color": "G", "clarity": "VVS2", "depth": 62.1, "table": 58, "price": 1872, "x": 5.35, "y": 5.4, "z": 3.34 }, { "name": 12751, "carat": 1, "cut": "Very-Good", "color": "D", "clarity": "SI1", "depth": 63.2, "table": 59, "price": 5320, "x": 6.29, "y": 6.4, "z": 4.01 }, { "name": 34555, "carat": 0.52, "cut": "Premium", "color": "F", "clarity": "I1", "depth": 63, "table": 56, "price": 870, "x": 5.18, "y": 5.11, "z": 3.24 }, { "name": 50137, "carat": 0.7, "cut": "Very-Good", "color": "H", "clarity": "SI1", "depth": 62.1, "table": 59, "price": 2213, "x": 5.62, "y": 5.66, "z": 3.5 }, { "name": 25189, "carat": 2.01, "cut": "Ideal", "color": "I", "clarity": "SI2", "depth": 62.5, "table": 55, "price": 13777, "x": 8.12, "y": 8.08, "z": 5.06 }, { "name": 34915, "carat": 0.34, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 62.9, "table": 55, "price": 880, "x": 4.48, "y": 4.46, "z": 2.81 }, { "name": 26431, "carat": 2, "cut": "Good", "color": "E", "clarity": "SI2", "depth": 60.1, "table": 54, "price": 15962, "x": 8.01, "y": 8.15, "z": 4.86 }, { "name": 22682, "carat": 0.38, "cut": "Ideal", "color": "J", "clarity": "VVS2", "depth": 62, "table": 55, "price": 629, "x": 4.67, "y": 4.69, "z": 2.9 }, { "name": 52236, "carat": 0.57, "cut": "Very-Good", "color": "E", "clarity": "VVS2", "depth": 60, "table": 61, "price": 2485, "x": 5.36, "y": 5.44, "z": 3.24 }, { "name": 32203, "carat": 0.35, "cut": "Premium", "color": "E", "clarity": "SI1", "depth": 61.1, "table": 59, "price": 788, "x": 4.56, "y": 4.5, "z": 2.77 }, { "name": 7958, "carat": 1, "cut": "Very-Good", "color": "E", "clarity": "SI2", "depth": 59.8, "table": 58, "price": 4321, "x": 6.47, "y": 6.53, "z": 3.89 }, { "name": 14904, "carat": 1.01, "cut": "Very-Good", "color": "G", "clarity": "VS2", "depth": 59.2, "table": 59, "price": 5999, "x": 6.52, "y": 6.59, "z": 3.88 }, { "name": 18768, "carat": 1.35, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 62.4, "table": 58, "price": 7673, "x": 7.03, "y": 6.95, "z": 4.36 }, { "name": 12175, "carat": 1.18, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 61.2, "table": 57, "price": 5182, "x": 6.81, "y": 6.86, "z": 4.18 }, { "name": 13522, "carat": 1.01, "cut": "Good", "color": "H", "clarity": "SI1", "depth": 60.1, "table": 61, "price": 5544, "x": 6.5, "y": 6.47, "z": 3.9 }, { "name": 40220, "carat": 0.4, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 62.4, "table": 57, "price": 1123, "x": 4.74, "y": 4.78, "z": 2.97 }, { "name": 324, "carat": 1.04, "cut": "Premium", "color": "G", "clarity": "I1", "depth": 62.2, "table": 58, "price": 2801, "x": 6.46, "y": 6.41, "z": 4 }, { "name": 2955, "carat": 0.83, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 63.8, "table": 54, "price": 3295, "x": 5.96, "y": 6.04, "z": 3.83 }, { "name": 38930, "carat": 0.36, "cut": "Very-Good", "color": "E", "clarity": "IF", "depth": 59.5, "table": 57, "price": 1053, "x": 4.68, "y": 4.73, "z": 2.8 }, { "name": 903, "carat": 0.72, "cut": "Very-Good", "color": "H", "clarity": "VS1", "depth": 62.2, "table": 54, "price": 2877, "x": 5.74, "y": 5.76, "z": 3.57 }, { "name": 35534, "carat": 0.3, "cut": "Premium", "color": "G", "clarity": "VVS1", "depth": 62.4, "table": 59, "price": 905, "x": 4.31, "y": 4.25, "z": 2.67 }, { "name": 48135, "carat": 0.6, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 59.5, "table": 57.8, "price": 1940, "x": 5.48, "y": 5.56, "z": 3.28 }, { "name": 15376, "carat": 0.4, "cut": "Ideal", "color": "J", "clarity": "VS1", "depth": 61.3, "table": 56, "price": 606, "x": 4.77, "y": 4.79, "z": 2.93 }, { "name": 15711, "carat": 0.24, "cut": "Very-Good", "color": "F", "clarity": "VVS1", "depth": 60.4, "table": 56, "price": 608, "x": 4.05, "y": 4.07, "z": 2.45 }, { "name": 49465, "carat": 1, "cut": "Fair", "color": "I", "clarity": "I1", "depth": 65.4, "table": 57, "price": 2112, "x": 6.28, "y": 6.2, "z": 4.08 }, { "name": 25591, "carat": 2, "cut": "Fair", "color": "H", "clarity": "SI1", "depth": 65.1, "table": 56, "price": 14430, "x": 7.86, "y": 7.77, "z": 5.09 }, { "name": 27807, "carat": 0.3, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 61.9, "table": 57, "price": 650, "x": 4.3, "y": 4.33, "z": 2.66 }, { "name": 45354, "carat": 0.55, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 59.1, "table": 62, "price": 1664, "x": 5.37, "y": 5.32, "z": 3.16 }, { "name": 39716, "carat": 0.5, "cut": "Good", "color": "E", "clarity": "SI1", "depth": 64, "table": 56, "price": 1090, "x": 5.03, "y": 4.97, "z": 3.2 }, { "name": 42245, "carat": 0.52, "cut": "Ideal", "color": "D", "clarity": "SI2", "depth": 61.7, "table": 55, "price": 1292, "x": 5.17, "y": 5.2, "z": 3.2 }, { "name": 3519, "carat": 0.81, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 62.3, "table": 57, "price": 3404, "x": 5.95, "y": 5.99, "z": 3.72 }, { "name": 32008, "carat": 0.37, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 61.4, "table": 56, "price": 777, "x": 4.65, "y": 4.6, "z": 2.84 }, { "name": 15982, "carat": 1.02, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 60.4, "table": 58, "price": 6397, "x": 6.51, "y": 6.47, "z": 3.92 }, { "name": 2392, "carat": 0.32, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 61.8, "table": 55, "price": 561, "x": 4.42, "y": 4.45, "z": 2.74 }, { "name": 5981, "carat": 1.05, "cut": "Premium", "color": "E", "clarity": "SI2", "depth": 60.9, "table": 61, "price": 3951, "x": 6.61, "y": 6.55, "z": 4.01 }, { "name": 37131, "carat": 0.37, "cut": "Premium", "color": "E", "clarity": "VVS2", "depth": 59.6, "table": 60, "price": 971, "x": 4.75, "y": 4.68, "z": 2.81 }, { "name": 19201, "carat": 1.56, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 58.8, "table": 59, "price": 7950, "x": 7.76, "y": 7.61, "z": 4.52 }, { "name": 39933, "carat": 0.3, "cut": "Premium", "color": "H", "clarity": "VS1", "depth": 62.1, "table": 59, "price": 491, "x": 4.25, "y": 4.28, "z": 2.65 }, { "name": 41555, "carat": 0.5, "cut": "Very-Good", "color": "G", "clarity": "SI1", "depth": 62.1, "table": 59, "price": 1237, "x": 5.09, "y": 5.12, "z": 3.17 }, { "name": 31100, "carat": 0.3, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 62.6, "table": 55, "price": 753, "x": 4.27, "y": 4.32, "z": 2.69 }, { "name": 50763, "carat": 0.75, "cut": "Very-Good", "color": "I", "clarity": "SI1", "depth": 63.7, "table": 56, "price": 2300, "x": 5.73, "y": 5.77, "z": 3.66 }, { "name": 53179, "carat": 0.71, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 61.8, "table": 57, "price": 2630, "x": 5.7, "y": 5.73, "z": 3.53 }, { "name": 36142, "carat": 0.33, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 61, "table": 60, "price": 928, "x": 4.46, "y": 4.43, "z": 2.71 }, { "name": 45935, "carat": 0.51, "cut": "Very-Good", "color": "D", "clarity": "VS2", "depth": 63.2, "table": 56, "price": 1722, "x": 5.04, "y": 5.08, "z": 3.2 }, { "name": 39645, "carat": 0.41, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 62.4, "table": 58, "price": 1085, "x": 4.77, "y": 4.75, "z": 2.97 }, { "name": 24054, "carat": 0.31, "cut": "Ideal", "color": "I", "clarity": "IF", "depth": 61.7, "table": 55, "price": 635, "x": 4.36, "y": 4.39, "z": 2.7 }, { "name": 6604, "carat": 1, "cut": "Good", "color": "F", "clarity": "SI2", "depth": 62.7, "table": 57, "price": 4081, "x": 6.29, "y": 6.34, "z": 3.96 }, { "name": 35952, "carat": 0.3, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 61.9, "table": 56, "price": 475, "x": 4.29, "y": 4.33, "z": 2.67 }, { "name": 137, "carat": 0.71, "cut": "Very-Good", "color": "F", "clarity": "VS1", "depth": 60.1, "table": 62, "price": 2765, "x": 5.74, "y": 5.77, "z": 3.46 }, { "name": 51854, "carat": 0.7, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 59.5, "table": 60, "price": 2423, "x": 5.78, "y": 5.73, "z": 3.43 }, { "name": 26187, "carat": 1.51, "cut": "Premium", "color": "D", "clarity": "VS2", "depth": 61.7, "table": 58, "price": 15531, "x": 7.33, "y": 7.29, "z": 4.51 }, { "name": 53325, "carat": 0.78, "cut": "Ideal", "color": "I", "clarity": "VS2", "depth": 59.8, "table": 58, "price": 2652, "x": 5.98, "y": 6.02, "z": 3.59 }, { "name": 22143, "carat": 1.01, "cut": "Good", "color": "G", "clarity": "VS2", "depth": 63.6, "table": 56, "price": 10181, "x": 6.31, "y": 6.24, "z": 3.99 }, { "name": 28418, "carat": 0.43, "cut": "Good", "color": "E", "clarity": "SI2", "depth": 63.6, "table": 55, "price": 669, "x": 4.8, "y": 4.83, "z": 3.06 }, { "name": 30531, "carat": 0.38, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 62.2, "table": 58, "price": 733, "x": 4.57, "y": 4.63, "z": 2.86 }, { "name": 32824, "carat": 0.34, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 62, "table": 55, "price": 805, "x": 4.45, "y": 4.49, "z": 2.77 }, { "name": 38499, "carat": 0.42, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 62.2, "table": 56, "price": 1031, "x": 4.77, "y": 4.81, "z": 2.98 }, { "name": 45547, "carat": 0.51, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 60.3, "table": 59, "price": 1687, "x": 5.22, "y": 5.2, "z": 3.14 }, { "name": 46473, "carat": 0.53, "cut": "Very-Good", "color": "E", "clarity": "VS1", "depth": 63, "table": 56, "price": 1776, "x": 5.13, "y": 5.16, "z": 3.24 }, { "name": 16413, "carat": 1, "cut": "Very-Good", "color": "G", "clarity": "VS1", "depth": 63.2, "table": 58, "price": 6552, "x": 6.32, "y": 6.27, "z": 3.98 }, { "name": 21297, "carat": 1.5, "cut": "Very-Good", "color": "E", "clarity": "SI2", "depth": 63.5, "table": 59, "price": 9450, "x": 7.28, "y": 7.25, "z": 4.61 }, { "name": 17233, "carat": 1.55, "cut": "Premium", "color": "J", "clarity": "SI2", "depth": 62.6, "table": 57, "price": 6890, "x": 7.37, "y": 7.32, "z": 4.6 }, { "name": 13247, "carat": 1.2, "cut": "Premium", "color": "I", "clarity": "VS2", "depth": 62.1, "table": 59, "price": 5474, "x": 6.77, "y": 6.72, "z": 4.19 }, { "name": 45554, "carat": 0.51, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 60.1, "table": 60, "price": 1687, "x": 5.18, "y": 5.14, "z": 3.1 }, { "name": 32388, "carat": 0.32, "cut": "Very-Good", "color": "D", "clarity": "VVS2", "depth": 60.1, "table": 58, "price": 791, "x": 4.41, "y": 4.44, "z": 2.66 }, { "name": 11905, "carat": 1, "cut": "Very-Good", "color": "H", "clarity": "VS2", "depth": 62.9, "table": 57, "price": 5121, "x": 6.31, "y": 6.35, "z": 3.98 }, { "name": 43427, "carat": 0.53, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 59.7, "table": 59, "price": 1415, "x": 5.27, "y": 5.29, "z": 3.15 }, { "name": 32366, "carat": 0.32, "cut": "Ideal", "color": "E", "clarity": "VVS2", "depth": 61.6, "table": 55, "price": 790, "x": 4.42, "y": 4.45, "z": 2.73 }, { "name": 3899, "carat": 0.89, "cut": "Premium", "color": "H", "clarity": "VS1", "depth": 60.5, "table": 59, "price": 3489, "x": 6.22, "y": 6.17, "z": 3.75 }, { "name": 52850, "carat": 0.7, "cut": "Premium", "color": "E", "clarity": "SI1", "depth": 61, "table": 56, "price": 2576, "x": 5.75, "y": 5.69, "z": 3.49 }, { "name": 19587, "carat": 1.51, "cut": "Very-Good", "color": "I", "clarity": "SI1", "depth": 62.8, "table": 59, "price": 8214, "x": 7.17, "y": 7.26, "z": 4.53 }, { "name": 35213, "carat": 0.35, "cut": "Very-Good", "color": "G", "clarity": "IF", "depth": 62.1, "table": 54, "price": 892, "x": 4.53, "y": 4.57, "z": 2.82 }, { "name": 25268, "carat": 2.28, "cut": "Ideal", "color": "G", "clarity": "SI2", "depth": 61.6, "table": 57, "price": 13907, "x": 8.44, "y": 8.37, "z": 5.18 }, { "name": 22737, "carat": 1.15, "cut": "Ideal", "color": "F", "clarity": "VVS2", "depth": 62.7, "table": 57, "price": 10757, "x": 6.69, "y": 6.65, "z": 4.18 }, { "name": 15167, "carat": 1.44, "cut": "Ideal", "color": "G", "clarity": "I1", "depth": 63.2, "table": 55, "price": 6096, "x": 7.21, "y": 7.18, "z": 4.54 }, { "name": 44124, "carat": 0.5, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 62, "table": 58, "price": 1559, "x": 5.07, "y": 5.09, "z": 3.15 }, { "name": 8245, "carat": 1.07, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 60.6, "table": 60, "price": 4374, "x": 6.66, "y": 6.63, "z": 4.03 }, { "name": 30401, "carat": 0.32, "cut": "Premium", "color": "H", "clarity": "VVS1", "depth": 61.4, "table": 58, "price": 730, "x": 4.37, "y": 4.42, "z": 2.7 }, { "name": 11998, "carat": 1.06, "cut": "Ideal", "color": "E", "clarity": "SI2", "depth": 60.9, "table": 57, "price": 5147, "x": 6.58, "y": 6.62, "z": 4.02 }, { "name": 16655, "carat": 1.21, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 61.1, "table": 55, "price": 6659, "x": 6.87, "y": 6.85, "z": 4.19 }, { "name": 37749, "carat": 0.43, "cut": "Very-Good", "color": "I", "clarity": "IF", "depth": 61, "table": 56, "price": 998, "x": 4.9, "y": 4.93, "z": 3 }, { "name": 9074, "carat": 1.14, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 62.6, "table": 58, "price": 4520, "x": 6.64, "y": 6.58, "z": 4.14 }, { "name": 46353, "carat": 0.57, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 61.9, "table": 56, "price": 1759, "x": 5.33, "y": 5.37, "z": 3.31 }, { "name": 14516, "carat": 1, "cut": "Good", "color": "G", "clarity": "VS1", "depth": 64.2, "table": 61, "price": 5863, "x": 6.23, "y": 6.29, "z": 4.02 }, { "name": 12239, "carat": 1.04, "cut": "Ideal", "color": "I", "clarity": "VS1", "depth": 62.4, "table": 57, "price": 5199, "x": 6.44, "y": 6.48, "z": 4.03 }, { "name": 37788, "carat": 0.5, "cut": "Good", "color": "E", "clarity": "SI2", "depth": 63.2, "table": 61, "price": 1000, "x": 5.02, "y": 5.05, "z": 3.18 }, { "name": 42551, "carat": 0.52, "cut": "Very-Good", "color": "F", "clarity": "SI1", "depth": 61, "table": 59, "price": 1326, "x": 5.18, "y": 5.21, "z": 3.17 }, { "name": 22835, "carat": 1.5, "cut": "Good", "color": "E", "clarity": "SI1", "depth": 61.3, "table": 65, "price": 10868, "x": 7.17, "y": 7.23, "z": 4.41 }, { "name": 46144, "carat": 0.5, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 61.3, "table": 59, "price": 1746, "x": 5.1, "y": 5.05, "z": 3.11 }, { "name": 42806, "carat": 0.59, "cut": "Ideal", "color": "J", "clarity": "VS2", "depth": 60.8, "table": 57, "price": 1352, "x": 5.47, "y": 5.42, "z": 3.31 }, { "name": 12802, "carat": 0.7, "cut": "Ideal", "color": "E", "clarity": "VVS1", "depth": 61.8, "table": 55, "price": 5338, "x": 5.69, "y": 5.73, "z": 3.53 }, { "name": 302, "carat": 0.83, "cut": "Very-Good", "color": "E", "clarity": "SI2", "depth": 58, "table": 62, "price": 2799, "x": 6.19, "y": 6.25, "z": 3.61 }, { "name": 2664, "carat": 0.72, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 62.1, "table": 57, "price": 3235, "x": 5.73, "y": 5.76, "z": 3.57 }, { "name": 5843, "carat": 1, "cut": "Premium", "color": "H", "clarity": "SI2", "depth": 60.2, "table": 61, "price": 3920, "x": 6.48, "y": 6.44, "z": 3.89 }, { "name": 2251, "carat": 1.03, "cut": "Premium", "color": "J", "clarity": "SI2", "depth": 62.2, "table": 59, "price": 3149, "x": 6.42, "y": 6.4, "z": 3.99 }, { "name": 12178, "carat": 1.2, "cut": "Very-Good", "color": "G", "clarity": "SI2", "depth": 62.1, "table": 56, "price": 5183, "x": 6.79, "y": 6.87, "z": 4.24 }, { "name": 13593, "carat": 1.01, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 61, "table": 59, "price": 5560, "x": 6.39, "y": 6.46, "z": 3.92 }, { "name": 2337, "carat": 1.09, "cut": "Fair", "color": "F", "clarity": "SI2", "depth": 66.3, "table": 56, "price": 3170, "x": 6.47, "y": 6.39, "z": 4.27 }, { "name": 8570, "carat": 1.2, "cut": "Premium", "color": "J", "clarity": "VS2", "depth": 58, "table": 59, "price": 4435, "x": 6.98, "y": 6.92, "z": 4.03 }, { "name": 27867, "carat": 0.3, "cut": "Very-Good", "color": "E", "clarity": "VS1", "depth": 60.2, "table": 57, "price": 653, "x": 4.37, "y": 4.3, "z": 2.61 }, { "name": 15184, "carat": 1, "cut": "Good", "color": "F", "clarity": "VS2", "depth": 63.8, "table": 58, "price": 6098, "x": 6.28, "y": 6.32, "z": 4.02 }, { "name": 50207, "carat": 0.58, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 61.9, "table": 56, "price": 2227, "x": 5.36, "y": 5.33, "z": 3.31 }, { "name": 32622, "carat": 0.3, "cut": "Ideal", "color": "I", "clarity": "VS1", "depth": 62, "table": 57, "price": 457, "x": 4.26, "y": 4.29, "z": 2.65 }, { "name": 34268, "carat": 0.29, "cut": "Very-Good", "color": "H", "clarity": "VVS2", "depth": 62.2, "table": 54, "price": 466, "x": 4.23, "y": 4.26, "z": 2.64 }, { "name": 18789, "carat": 1.08, "cut": "Premium", "color": "D", "clarity": "VS2", "depth": 61.2, "table": 60, "price": 7683, "x": 6.61, "y": 6.63, "z": 4.05 }, { "name": 22426, "carat": 1.5, "cut": "Fair", "color": "F", "clarity": "SI1", "depth": 64.3, "table": 58, "price": 10450, "x": 7.04, "y": 7.09, "z": 4.54 }, { "name": 1449, "carat": 0.72, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 61, "table": 56, "price": 2976, "x": 5.82, "y": 5.85, "z": 3.56 }, { "name": 25619, "carat": 1.5, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 60.3, "table": 58, "price": 14486, "x": 7.47, "y": 7.39, "z": 4.48 }, { "name": 48417, "carat": 0.61, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 62.9, "table": 58, "price": 1971, "x": 5.33, "y": 5.39, "z": 3.37 }, { "name": 48684, "carat": 0.53, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 61.2, "table": 55, "price": 2005, "x": 5.19, "y": 5.23, "z": 3.19 }, { "name": 35461, "carat": 0.33, "cut": "Premium", "color": "F", "clarity": "VVS2", "depth": 62.3, "table": 60, "price": 901, "x": 4.43, "y": 4.4, "z": 2.75 }, { "name": 16657, "carat": 1.06, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 62.2, "table": 56, "price": 6660, "x": 6.51, "y": 6.54, "z": 4.06 }, { "name": 46366, "carat": 0.54, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 60.7, "table": 56, "price": 1760, "x": 5.32, "y": 5.29, "z": 3.22 }, { "name": 23433, "carat": 1.25, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 60.7, "table": 56, "price": 11422, "x": 6.97, "y": 6.99, "z": 4.24 }, { "name": 9968, "carat": 1, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 61.5, "table": 58, "price": 4702, "x": 6.37, "y": 6.45, "z": 3.94 }, { "name": 4346, "carat": 0.78, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 61.7, "table": 55, "price": 3601, "x": 5.92, "y": 6, "z": 3.68 }, { "name": 33198, "carat": 0.3, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 62.2, "table": 54, "price": 819, "x": 4.33, "y": 4.29, "z": 2.68 }, { "name": 13886, "carat": 1.03, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 63, "table": 59, "price": 5653, "x": 6.44, "y": 6.39, "z": 4.04 }, { "name": 45744, "carat": 0.52, "cut": "Very-Good", "color": "D", "clarity": "VS2", "depth": 59.4, "table": 61, "price": 1701, "x": 5.23, "y": 5.24, "z": 3.11 }, { "name": 27368, "carat": 0.28, "cut": "Premium", "color": "E", "clarity": "VVS1", "depth": 61.3, "table": 60, "price": 646, "x": 4.18, "y": 4.21, "z": 2.57 }, { "name": 29516, "carat": 0.39, "cut": "Very-Good", "color": "G", "clarity": "SI1", "depth": 58.9, "table": 61, "price": 703, "x": 4.74, "y": 4.76, "z": 2.8 }, { "name": 14540, "carat": 1.21, "cut": "Very-Good", "color": "H", "clarity": "SI1", "depth": 63.1, "table": 60, "price": 5871, "x": 6.74, "y": 6.69, "z": 4.24 }, { "name": 11338, "carat": 1.01, "cut": "Premium", "color": "F", "clarity": "SI1", "depth": 59.5, "table": 62, "price": 4989, "x": 6.53, "y": 6.45, "z": 3.86 }, { "name": 48507, "carat": 0.7, "cut": "Premium", "color": "H", "clarity": "SI2", "depth": 61.7, "table": 58, "price": 1982, "x": 5.72, "y": 5.69, "z": 3.52 }, { "name": 38406, "carat": 0.35, "cut": "Premium", "color": "H", "clarity": "VVS1", "depth": 61.2, "table": 60, "price": 1024, "x": 4.55, "y": 4.5, "z": 2.77 }, { "name": 29098, "carat": 0.36, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 61.5, "table": 60, "price": 689, "x": 4.6, "y": 4.54, "z": 2.81 }, { "name": 39110, "carat": 0.41, "cut": "Ideal", "color": "H", "clarity": "VS1", "depth": 61.9, "table": 56, "price": 1061, "x": 4.78, "y": 4.75, "z": 2.95 }, { "name": 47525, "carat": 0.54, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 61.4, "table": 55, "price": 1868, "x": 5.26, "y": 5.3, "z": 3.24 }, { "name": 14780, "carat": 1.2, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 61.5, "table": 61, "price": 5947, "x": 6.84, "y": 6.78, "z": 4.19 }, { "name": 7968, "carat": 1.16, "cut": "Very-Good", "color": "J", "clarity": "VS2", "depth": 63.7, "table": 56, "price": 4323, "x": 6.63, "y": 6.68, "z": 4.24 }, { "name": 30555, "carat": 0.31, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 62.3, "table": 55, "price": 734, "x": 4.33, "y": 4.37, "z": 2.71 }, { "name": 3705, "carat": 1, "cut": "Ideal", "color": "E", "clarity": "SI2", "depth": 62.9, "table": 56, "price": 3450, "x": 6.32, "y": 6.3, "z": 3.97 }, { "name": 25884, "carat": 2.01, "cut": "Good", "color": "I", "clarity": "SI1", "depth": 58.5, "table": 62, "price": 14998, "x": 8.24, "y": 8.31, "z": 4.84 }, { "name": 11447, "carat": 1.01, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 60.6, "table": 57, "price": 5006, "x": 6.52, "y": 6.49, "z": 3.94 }, { "name": 40236, "carat": 0.44, "cut": "Ideal", "color": "H", "clarity": "VVS1", "depth": 61.1, "table": 57, "price": 1124, "x": 4.87, "y": 4.92, "z": 2.99 }, { "name": 38630, "carat": 0.31, "cut": "Very-Good", "color": "H", "clarity": "VS2", "depth": 62.5, "table": 54, "price": 489, "x": 4.35, "y": 4.39, "z": 2.73 }, { "name": 8467, "carat": 1.03, "cut": "Good", "color": "F", "clarity": "SI2", "depth": 59, "table": 59, "price": 4414, "x": 6.55, "y": 6.6, "z": 3.88 }, { "name": 33011, "carat": 0.31, "cut": "Good", "color": "E", "clarity": "IF", "depth": 64.2, "table": 60, "price": 813, "x": 4.22, "y": 4.28, "z": 2.73 }, { "name": 43649, "carat": 0.51, "cut": "Good", "color": "E", "clarity": "SI1", "depth": 63.6, "table": 58, "price": 1434, "x": 5, "y": 4.97, "z": 3.17 }, { "name": 27151, "carat": 2.04, "cut": "Premium", "color": "E", "clarity": "SI2", "depth": 58.3, "table": 58, "price": 17379, "x": 8.35, "y": 8.31, "z": 4.86 }, { "name": 5855, "carat": 1, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 61.5, "table": 58, "price": 3920, "x": 6.41, "y": 6.38, "z": 3.93 }, { "name": 22842, "carat": 1.64, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 59.2, "table": 58, "price": 10874, "x": 7.76, "y": 7.68, "z": 4.57 }, { "name": 37890, "carat": 0.36, "cut": "Ideal", "color": "G", "clarity": "IF", "depth": 62, "table": 57, "price": 1006, "x": 4.54, "y": 4.58, "z": 2.82 }, { "name": 37874, "carat": 0.39, "cut": "Ideal", "color": "E", "clarity": "VS1", "depth": 62.7, "table": 53.6, "price": 1004, "x": 4.67, "y": 4.69, "z": 2.93 }, { "name": 39457, "carat": 0.39, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 62.6, "table": 55, "price": 1077, "x": 4.69, "y": 4.66, "z": 2.93 }, { "name": 41002, "carat": 0.43, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 61.8, "table": 55, "price": 1183, "x": 4.87, "y": 4.9, "z": 3.02 }, { "name": 11878, "carat": 1.25, "cut": "Good", "color": "J", "clarity": "SI1", "depth": 63.6, "table": 57, "price": 5110, "x": 6.86, "y": 6.81, "z": 4.35 }, { "name": 45647, "carat": 0.25, "cut": "Ideal", "color": "H", "clarity": "VVS1", "depth": 60.2, "table": 56, "price": 525, "x": 4.1, "y": 4.11, "z": 2.47 }, { "name": 18406, "carat": 1.32, "cut": "Ideal", "color": "I", "clarity": "VS1", "depth": 61.2, "table": 57, "price": 7480, "x": 7.06, "y": 7.12, "z": 4.34 }, { "name": 31880, "carat": 0.3, "cut": "Ideal", "color": "H", "clarity": "VVS2", "depth": 62.8, "table": 57, "price": 776, "x": 4.25, "y": 4.22, "z": 2.66 }, { "name": 23734, "carat": 1.52, "cut": "Very-Good", "color": "F", "clarity": "SI1", "depth": 61.4, "table": 59, "price": 11776, "x": 7.39, "y": 7.46, "z": 4.56 }, { "name": 24975, "carat": 2.04, "cut": "Premium", "color": "J", "clarity": "VS2", "depth": 61.4, "table": 59, "price": 13477, "x": 8.04, "y": 8.14, "z": 4.97 }, { "name": 51931, "carat": 0.72, "cut": "Very-Good", "color": "F", "clarity": "SI1", "depth": 62.6, "table": 55, "price": 2440, "x": 5.71, "y": 5.76, "z": 3.59 }, { "name": 20742, "carat": 1.55, "cut": "Ideal", "color": "G", "clarity": "SI2", "depth": 60.5, "table": 60, "price": 8981, "x": 7.46, "y": 7.49, "z": 4.52 }, { "name": 5324, "carat": 0.9, "cut": "Fair", "color": "G", "clarity": "VS1", "depth": 65.7, "table": 58, "price": 3806, "x": 6.02, "y": 5.97, "z": 3.94 }, { "name": 905, "carat": 0.74, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 62.3, "table": 55, "price": 2877, "x": 5.8, "y": 5.83, "z": 3.62 }, { "name": 37676, "carat": 0.7, "cut": "Fair", "color": "F", "clarity": "I1", "depth": 65.4, "table": 59, "price": 992, "x": 5.6, "y": 5.49, "z": 3.63 }, { "name": 35199, "carat": 0.43, "cut": "Good", "color": "G", "clarity": "VS2", "depth": 61.8, "table": 60.7, "price": 891, "x": 4.8, "y": 4.84, "z": 2.99 }, { "name": 27971, "carat": 0.3, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 62, "table": 59, "price": 658, "x": 4.27, "y": 4.31, "z": 2.66 }, { "name": 22375, "carat": 0.31, "cut": "Ideal", "color": "H", "clarity": "VS2", "depth": 63, "table": 57, "price": 628, "x": 4.34, "y": 4.32, "z": 2.73 }, { "name": 52787, "carat": 0.72, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 63, "table": 57, "price": 2567, "x": 5.74, "y": 5.69, "z": 3.6 }, { "name": 17958, "carat": 1.01, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 62.8, "table": 57, "price": 7258, "x": 6.34, "y": 6.44, "z": 4.01 }, { "name": 34836, "carat": 0.3, "cut": "Premium", "color": "H", "clarity": "VVS1", "depth": 62, "table": 59, "price": 878, "x": 4.29, "y": 4.26, "z": 2.65 }, { "name": 34114, "carat": 0.35, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 61.8, "table": 54.5, "price": 853, "x": 4.54, "y": 4.58, "z": 2.82 }, { "name": 25777, "carat": 2.01, "cut": "Good", "color": "G", "clarity": "SI2", "depth": 63, "table": 60, "price": 14745, "x": 7.92, "y": 7.99, "z": 5.01 }, { "name": 27538, "carat": 2.01, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 62.1, "table": 55, "price": 18295, "x": 8.12, "y": 8.07, "z": 5.03 }, { "name": 23409, "carat": 2, "cut": "Good", "color": "I", "clarity": "SI2", "depth": 64.2, "table": 52, "price": 11400, "x": 7.91, "y": 7.88, "z": 5.07 }, { "name": 32430, "carat": 0.33, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 61.7, "table": 55, "price": 792, "x": 4.45, "y": 4.47, "z": 2.75 }, { "name": 22801, "carat": 1.52, "cut": "Premium", "color": "I", "clarity": "VVS2", "depth": 61.6, "table": 58, "price": 10824, "x": 7.37, "y": 7.41, "z": 4.55 }, { "name": 33937, "carat": 0.3, "cut": "Ideal", "color": "J", "clarity": "VVS1", "depth": 60.4, "table": 57, "price": 464, "x": 4.36, "y": 4.38, "z": 2.64 }, { "name": 2082, "carat": 1.01, "cut": "Good", "color": "H", "clarity": "I1", "depth": 63.2, "table": 58, "price": 3110, "x": 6.33, "y": 6.39, "z": 4.02 }, { "name": 3478, "carat": 1.01, "cut": "Premium", "color": "H", "clarity": "SI2", "depth": 60.9, "table": 59, "price": 3394, "x": 6.42, "y": 6.35, "z": 3.89 }, { "name": 11382, "carat": 0.34, "cut": "Ideal", "color": "H", "clarity": "VS1", "depth": 62.5, "table": 57, "price": 596, "x": 4.43, "y": 4.46, "z": 2.78 }, { "name": 50658, "carat": 0.31, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 62, "table": 58, "price": 544, "x": 4.3, "y": 4.35, "z": 2.68 }, { "name": 36357, "carat": 0.34, "cut": "Very-Good", "color": "F", "clarity": "VVS1", "depth": 61, "table": 56, "price": 939, "x": 4.52, "y": 4.53, "z": 2.76 }, { "name": 51116, "carat": 0.7, "cut": "Very-Good", "color": "G", "clarity": "VS2", "depth": 63.4, "table": 58, "price": 2338, "x": 5.63, "y": 5.57, "z": 3.55 }, { "name": 43034, "carat": 0.5, "cut": "Good", "color": "D", "clarity": "SI1", "depth": 61.1, "table": 64, "price": 1374, "x": 5.05, "y": 5.07, "z": 3.09 }, { "name": 13135, "carat": 1.11, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 61.1, "table": 60, "price": 5433, "x": 6.68, "y": 6.62, "z": 4.06 }, { "name": 10922, "carat": 1.2, "cut": "Very-Good", "color": "J", "clarity": "SI1", "depth": 61.3, "table": 59, "price": 4891, "x": 6.83, "y": 6.9, "z": 4.21 }, { "name": 28822, "carat": 0.41, "cut": "Very-Good", "color": "H", "clarity": "SI1", "depth": 62.6, "table": 59, "price": 683, "x": 4.72, "y": 4.77, "z": 2.97 }, { "name": 3106, "carat": 0.72, "cut": "Ideal", "color": "D", "clarity": "SI1", "depth": 62.2, "table": 56, "price": 3322, "x": 5.77, "y": 5.74, "z": 3.58 }, { "name": 31819, "carat": 0.3, "cut": "Ideal", "color": "E", "clarity": "VS1", "depth": 62.2, "table": 54, "price": 775, "x": 4.28, "y": 4.3, "z": 2.67 }, { "name": 14218, "carat": 1.23, "cut": "Ideal", "color": "J", "clarity": "VS2", "depth": 61.7, "table": 57, "price": 5763, "x": 6.87, "y": 6.8, "z": 4.22 }, { "name": 50596, "carat": 0.71, "cut": "Good", "color": "I", "clarity": "VVS2", "depth": 63.7, "table": 56, "price": 2283, "x": 5.68, "y": 5.63, "z": 3.6 }, { "name": 46694, "carat": 0.56, "cut": "Ideal", "color": "E", "clarity": "VS1", "depth": 60.8, "table": 55, "price": 1791, "x": 5.37, "y": 5.32, "z": 3.25 }, { "name": 11156, "carat": 1.21, "cut": "Very-Good", "color": "H", "clarity": "SI1", "depth": 63.5, "table": 58, "price": 4944, "x": 6.73, "y": 6.63, "z": 4.24 }, { "name": 46259, "carat": 0.54, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 61.3, "table": 57, "price": 1754, "x": 5.25, "y": 5.28, "z": 3.23 }, { "name": 11307, "carat": 1.09, "cut": "Ideal", "color": "F", "clarity": "SI2", "depth": 61.2, "table": 57, "price": 4981, "x": 6.64, "y": 6.6, "z": 4.05 }, { "name": 20502, "carat": 1.66, "cut": "Very-Good", "color": "H", "clarity": "SI1", "depth": 63.3, "table": 59, "price": 8831, "x": 7.48, "y": 7.45, "z": 4.72 }, { "name": 14963, "carat": 1.21, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 59.5, "table": 58, "price": 6025, "x": 7.02, "y": 6.96, "z": 4.16 }, { "name": 48215, "carat": 0.57, "cut": "Ideal", "color": "H", "clarity": "VVS1", "depth": 60.9, "table": 56, "price": 1949, "x": 5.36, "y": 5.38, "z": 3.27 }, { "name": 52469, "carat": 0.8, "cut": "Ideal", "color": "G", "clarity": "SI2", "depth": 62, "table": 56, "price": 2517, "x": 5.98, "y": 5.92, "z": 3.69 }, { "name": 27892, "carat": 0.32, "cut": "Ideal", "color": "I", "clarity": "IF", "depth": 62.1, "table": 54, "price": 655, "x": 4.39, "y": 4.43, "z": 2.74 }, { "name": 37944, "carat": 0.33, "cut": "Very-Good", "color": "H", "clarity": "VS2", "depth": 58.8, "table": 62, "price": 486, "x": 4.49, "y": 4.53, "z": 2.65 }, { "name": 39931, "carat": 0.35, "cut": "Very-Good", "color": "I", "clarity": "VS2", "depth": 61.7, "table": 57, "price": 491, "x": 4.52, "y": 4.56, "z": 2.8 }, { "name": 2695, "carat": 0.9, "cut": "Good", "color": "G", "clarity": "SI2", "depth": 63.8, "table": 59, "price": 3246, "x": 6.05, "y": 6.02, "z": 3.85 }, { "name": 21323, "carat": 1.35, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 62.8, "table": 59, "price": 9471, "x": 7.04, "y": 7.01, "z": 4.41 }, { "name": 21796, "carat": 1, "cut": "Very-Good", "color": "F", "clarity": "VVS1", "depth": 61.1, "table": 57, "price": 9870, "x": 6.36, "y": 6.51, "z": 3.93 }, { "name": 33669, "carat": 0.34, "cut": "Ideal", "color": "E", "clarity": "VVS2", "depth": 62.3, "table": 57, "price": 835, "x": 4.44, "y": 4.48, "z": 2.78 }, { "name": 42502, "carat": 0.57, "cut": "Premium", "color": "E", "clarity": "SI2", "depth": 60.7, "table": 57, "price": 1320, "x": 5.42, "y": 5.35, "z": 3.27 }, { "name": 7634, "carat": 1.11, "cut": "Premium", "color": "J", "clarity": "VS2", "depth": 62.6, "table": 59, "price": 4265, "x": 6.6, "y": 6.56, "z": 4.12 }, { "name": 43833, "carat": 0.59, "cut": "Very-Good", "color": "I", "clarity": "VS2", "depth": 60.3, "table": 59, "price": 1445, "x": 5.41, "y": 5.43, "z": 3.27 }, { "name": 15310, "carat": 1.1, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 61.4, "table": 55, "price": 6146, "x": 6.65, "y": 6.68, "z": 4.09 }, { "name": 32268, "carat": 0.3, "cut": "Ideal", "color": "E", "clarity": "VVS2", "depth": 61.7, "table": 55, "price": 789, "x": 4.28, "y": 4.31, "z": 2.65 }, { "name": 2373, "carat": 0.32, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 62, "table": 57, "price": 561, "x": 4.39, "y": 4.41, "z": 2.73 }, { "name": 35160, "carat": 0.32, "cut": "Premium", "color": "G", "clarity": "IF", "depth": 61, "table": 59, "price": 891, "x": 4.38, "y": 4.41, "z": 2.68 }, { "name": 5039, "carat": 0.9, "cut": "Good", "color": "F", "clarity": "VS1", "depth": 63.8, "table": 56, "price": 3750, "x": 5.99, "y": 5.92, "z": 3.8 }, { "name": 31680, "carat": 0.26, "cut": "Ideal", "color": "E", "clarity": "VVS2", "depth": 62.3, "table": 57, "price": 769, "x": 4.09, "y": 4.06, "z": 2.54 }, { "name": 50106, "carat": 0.51, "cut": "Ideal", "color": "F", "clarity": "VVS1", "depth": 60.9, "table": 57, "price": 2208, "x": 5.16, "y": 5.21, "z": 3.16 }, { "name": 10246, "carat": 1.01, "cut": "Good", "color": "H", "clarity": "SI1", "depth": 63.4, "table": 59, "price": 4749, "x": 6.28, "y": 6.34, "z": 4 }, { "name": 13452, "carat": 1.03, "cut": "Premium", "color": "H", "clarity": "VS1", "depth": 62, "table": 59, "price": 5523, "x": 6.45, "y": 6.48, "z": 4.01 }, { "name": 29000, "carat": 0.34, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 62.6, "table": 54, "price": 686, "x": 4.46, "y": 4.48, "z": 2.8 }, { "name": 14240, "carat": 1.09, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 62, "table": 56, "price": 5768, "x": 6.61, "y": 6.56, "z": 4.08 }, { "name": 48404, "carat": 0.64, "cut": "Very-Good", "color": "D", "clarity": "SI1", "depth": 62.3, "table": 58, "price": 1969, "x": 5.49, "y": 5.53, "z": 3.43 }, { "name": 23822, "carat": 2.08, "cut": "Ideal", "color": "I", "clarity": "SI2", "depth": 62, "table": 56, "price": 11886, "x": 8.21, "y": 8.1, "z": 5.06 }, { "name": 5353, "carat": 0.74, "cut": "Ideal", "color": "D", "clarity": "VS1", "depth": 61.7, "table": 55, "price": 3813, "x": 5.79, "y": 5.85, "z": 3.59 }, { "name": 16160, "carat": 1.5, "cut": "Premium", "color": "H", "clarity": "SI2", "depth": 62.1, "table": 58, "price": 6458, "x": 7.31, "y": 7.21, "z": 4.51 }, { "name": 28516, "carat": 0.32, "cut": "Ideal", "color": "I", "clarity": "IF", "depth": 60.8, "table": 54, "price": 673, "x": 4.44, "y": 4.47, "z": 2.71 }, { "name": 42134, "carat": 0.5, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 61.3, "table": 60, "price": 1279, "x": 5.15, "y": 5.1, "z": 3.14 }, { "name": 6813, "carat": 1.01, "cut": "Fair", "color": "E", "clarity": "SI2", "depth": 55.2, "table": 65, "price": 4118, "x": 6.78, "y": 6.67, "z": 3.71 }, { "name": 16962, "carat": 1.12, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 62, "table": 56, "price": 6774, "x": 6.69, "y": 6.64, "z": 4.13 }, { "name": 13956, "carat": 1.16, "cut": "Very-Good", "color": "G", "clarity": "SI1", "depth": 60.7, "table": 59, "price": 5678, "x": 6.74, "y": 6.87, "z": 4.13 }, { "name": 16756, "carat": 1.45, "cut": "Very-Good", "color": "J", "clarity": "VS2", "depth": 62.8, "table": 57, "price": 6671, "x": 7.14, "y": 7.17, "z": 4.49 }, { "name": 37782, "carat": 0.38, "cut": "Very-Good", "color": "E", "clarity": "VS1", "depth": 61.5, "table": 58, "price": 1000, "x": 4.64, "y": 4.69, "z": 2.87 }, { "name": 47332, "carat": 0.23, "cut": "Very-Good", "color": "E", "clarity": "VVS1", "depth": 61.3, "table": 59, "price": 530, "x": 3.93, "y": 3.97, "z": 2.42 }, { "name": 7328, "carat": 0.9, "cut": "Premium", "color": "E", "clarity": "SI1", "depth": 61.9, "table": 58, "price": 4209, "x": 6.17, "y": 6.1, "z": 3.8 }, { "name": 31834, "carat": 0.34, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 61.9, "table": 57, "price": 775, "x": 4.44, "y": 4.48, "z": 2.76 }, { "name": 66, "carat": 0.28, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 61.4, "table": 56, "price": 553, "x": 4.19, "y": 4.22, "z": 2.58 }, { "name": 21826, "carat": 1.26, "cut": "Premium", "color": "F", "clarity": "VS1", "depth": 62.7, "table": 58, "price": 9896, "x": 6.86, "y": 6.93, "z": 4.32 }, { "name": 40205, "carat": 0.53, "cut": "Good", "color": "J", "clarity": "VS2", "depth": 63.8, "table": 57, "price": 1122, "x": 5.12, "y": 5.1, "z": 3.26 }, { "name": 26027, "carat": 0.32, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 61.2, "table": 57, "price": 645, "x": 4.4, "y": 4.43, "z": 2.7 }, { "name": 5966, "carat": 0.9, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 61.8, "table": 57, "price": 3950, "x": 6.19, "y": 6.21, "z": 3.83 }, { "name": 32163, "carat": 0.47, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 61.1, "table": 55, "price": 787, "x": 5.04, "y": 5.07, "z": 3.09 }, { "name": 332, "carat": 0.71, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 61.3, "table": 56, "price": 2803, "x": 5.75, "y": 5.71, "z": 3.51 }, { "name": 22181, "carat": 1.54, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 61.3, "table": 59, "price": 10219, "x": 7.41, "y": 7.38, "z": 4.53 }, { "name": 18741, "carat": 1.55, "cut": "Premium", "color": "I", "clarity": "VS2", "depth": 61.3, "table": 58, "price": 7656, "x": 7.48, "y": 7.44, "z": 4.57 }, { "name": 52489, "carat": 0.73, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 63.3, "table": 60, "price": 2523, "x": 5.65, "y": 5.7, "z": 3.59 }, { "name": 4115, "carat": 0.78, "cut": "Premium", "color": "E", "clarity": "VS1", "depth": 62.2, "table": 58, "price": 3538, "x": 5.9, "y": 5.86, "z": 3.66 }, { "name": 22331, "carat": 1.7, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 61.8, "table": 60, "price": 10377, "x": 7.64, "y": 7.56, "z": 4.7 }, { "name": 41660, "carat": 0.5, "cut": "Good", "color": "H", "clarity": "VS2", "depth": 56.3, "table": 65, "price": 1239, "x": 5.21, "y": 5.24, "z": 2.94 }, { "name": 17321, "carat": 1.19, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 61.1, "table": 58, "price": 6944, "x": 6.83, "y": 6.78, "z": 4.16 }, { "name": 27840, "carat": 0.39, "cut": "Ideal", "color": "D", "clarity": "SI2", "depth": 61.6, "table": 56, "price": 651, "x": 4.69, "y": 4.72, "z": 2.9 }, { "name": 26341, "carat": 0.32, "cut": "Ideal", "color": "H", "clarity": "VVS2", "depth": 61.7, "table": 56, "price": 645, "x": 4.37, "y": 4.42, "z": 2.71 }, { "name": 1757, "carat": 0.77, "cut": "Very-Good", "color": "F", "clarity": "SI1", "depth": 59.6, "table": 60, "price": 3044, "x": 5.95, "y": 5.97, "z": 3.55 }, { "name": 7671, "carat": 1.11, "cut": "Ideal", "color": "I", "clarity": "SI1", "depth": 62.4, "table": 55, "price": 4273, "x": 6.6, "y": 6.64, "z": 4.13 }, { "name": 20313, "carat": 1.24, "cut": "Ideal", "color": "H", "clarity": "VS2", "depth": 61.8, "table": 55, "price": 8726, "x": 6.91, "y": 6.95, "z": 4.28 }, { "name": 40866, "carat": 0.55, "cut": "Ideal", "color": "F", "clarity": "SI2", "depth": 62.4, "table": 56, "price": 1175, "x": 5.22, "y": 5.26, "z": 3.27 }, { "name": 29196, "carat": 0.33, "cut": "Premium", "color": "I", "clarity": "IF", "depth": 62.1, "table": 58, "price": 694, "x": 4.39, "y": 4.43, "z": 2.74 }, { "name": 11543, "carat": 1.21, "cut": "Good", "color": "J", "clarity": "VVS2", "depth": 63.7, "table": 56, "price": 5028, "x": 6.71, "y": 6.67, "z": 4.26 }, { "name": 46413, "carat": 0.54, "cut": "Good", "color": "D", "clarity": "SI1", "depth": 57.9, "table": 60, "price": 1767, "x": 5.36, "y": 5.39, "z": 3.11 }, { "name": 5619, "carat": 1, "cut": "Good", "color": "H", "clarity": "SI2", "depth": 63.2, "table": 59, "price": 3874, "x": 6.24, "y": 6.29, "z": 3.96 }, { "name": 46222, "carat": 0.5, "cut": "Premium", "color": "D", "clarity": "VS2", "depth": 61.9, "table": 58, "price": 1752, "x": 5.04, "y": 5.1, "z": 3.14 }, { "name": 11794, "carat": 1.12, "cut": "Very-Good", "color": "G", "clarity": "SI1", "depth": 62.5, "table": 58, "price": 5088, "x": 6.6, "y": 6.64, "z": 4.14 }, { "name": 28962, "carat": 0.31, "cut": "Very-Good", "color": "I", "clarity": "VS2", "depth": 60.7, "table": 61, "price": 435, "x": 4.32, "y": 4.34, "z": 2.63 }, { "name": 25313, "carat": 2.07, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 62.7, "table": 58, "price": 13993, "x": 8.14, "y": 8.09, "z": 5.09 }, { "name": 33556, "carat": 0.41, "cut": "Ideal", "color": "J", "clarity": "VS1", "depth": 60.2, "table": 57, "price": 830, "x": 4.85, "y": 4.81, "z": 2.91 }, { "name": 7949, "carat": 1.16, "cut": "Premium", "color": "G", "clarity": "SI2", "depth": 62, "table": 59, "price": 4320, "x": 6.74, "y": 6.62, "z": 4.14 }, { "name": 49142, "carat": 1.05, "cut": "Good", "color": "E", "clarity": "I1", "depth": 64.1, "table": 58, "price": 2066, "x": 6.46, "y": 6.32, "z": 4.09 }, { "name": 16341, "carat": 1.11, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 61.4, "table": 58, "price": 6534, "x": 6.7, "y": 6.66, "z": 4.1 }, { "name": 5849, "carat": 1, "cut": "Premium", "color": "H", "clarity": "SI2", "depth": 61.3, "table": 58, "price": 3920, "x": 6.45, "y": 6.41, "z": 3.94 }, { "name": 45428, "carat": 0.51, "cut": "Ideal", "color": "H", "clarity": "VVS2", "depth": 61.2, "table": 57, "price": 1669, "x": 5.14, "y": 5.19, "z": 3.16 }, { "name": 19274, "carat": 1.34, "cut": "Ideal", "color": "H", "clarity": "VS2", "depth": 60.8, "table": 55, "price": 7999, "x": 7.18, "y": 7.12, "z": 4.35 }, { "name": 50899, "carat": 0.71, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 62.7, "table": 55, "price": 2317, "x": 5.68, "y": 5.64, "z": 3.56 }, { "name": 53908, "carat": 0.7, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 61, "table": 57, "price": 2753, "x": 5.68, "y": 5.73, "z": 3.48 }, { "name": 30970, "carat": 0.38, "cut": "Premium", "color": "I", "clarity": "SI1", "depth": 60.5, "table": 58, "price": 746, "x": 4.72, "y": 4.67, "z": 2.84 }, { "name": 40324, "carat": 0.42, "cut": "Ideal", "color": "H", "clarity": "IF", "depth": 61.6, "table": 56, "price": 1126, "x": 4.84, "y": 4.87, "z": 2.99 }, { "name": 37208, "carat": 0.34, "cut": "Ideal", "color": "G", "clarity": "IF", "depth": 61, "table": 55, "price": 974, "x": 4.51, "y": 4.54, "z": 2.76 }, { "name": 4921, "carat": 1.21, "cut": "Good", "color": "E", "clarity": "I1", "depth": 63.3, "table": 63, "price": 3726, "x": 6.67, "y": 6.72, "z": 4.24 }, { "name": 44263, "carat": 0.52, "cut": "Ideal", "color": "H", "clarity": "VS1", "depth": 62, "table": 55.4, "price": 1575, "x": 5.16, "y": 5.21, "z": 3.21 }, { "name": 8563, "carat": 1.04, "cut": "Very-Good", "color": "H", "clarity": "SI2", "depth": 62.9, "table": 57, "price": 4435, "x": 6.39, "y": 6.45, "z": 4.04 }, { "name": 11406, "carat": 1.08, "cut": "Ideal", "color": "I", "clarity": "VS2", "depth": 61.6, "table": 56, "price": 5000, "x": 6.63, "y": 6.59, "z": 4.07 }, { "name": 17873, "carat": 1.15, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 61.1, "table": 53, "price": 7213, "x": 6.83, "y": 6.76, "z": 4.15 }, { "name": 8704, "carat": 0.4, "cut": "Premium", "color": "I", "clarity": "SI2", "depth": 62.9, "table": 59, "price": 585, "x": 4.68, "y": 4.63, "z": 2.93 }, { "name": 21185, "carat": 1.51, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 61.8, "table": 55, "price": 9336, "x": 7.38, "y": 7.42, "z": 4.57 }, { "name": 24189, "carat": 2.18, "cut": "Very-Good", "color": "G", "clarity": "SI2", "depth": 63.3, "table": 59, "price": 12377, "x": 8.25, "y": 8.2, "z": 5.2 }, { "name": 15396, "carat": 1.08, "cut": "Very-Good", "color": "G", "clarity": "VS2", "depth": 62, "table": 57, "price": 6168, "x": 6.52, "y": 6.55, "z": 4.05 }, { "name": 16040, "carat": 0.3, "cut": "Good", "color": "I", "clarity": "VS1", "depth": 63.7, "table": 58, "price": 608, "x": 4.25, "y": 4.23, "z": 2.7 }, { "name": 17057, "carat": 0.28, "cut": "Good", "color": "E", "clarity": "IF", "depth": 64.6, "table": 58, "price": 612, "x": 4.09, "y": 4.12, "z": 2.65 }, { "name": 45024, "carat": 0.54, "cut": "Ideal", "color": "H", "clarity": "VS1", "depth": 61.5, "table": 56, "price": 1637, "x": 5.24, "y": 5.23, "z": 3.22 }, { "name": 19987, "carat": 1.53, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 61.3, "table": 57, "price": 8529, "x": 7.42, "y": 7.32, "z": 4.52 }, { "name": 38294, "carat": 0.28, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 61.2, "table": 57, "price": 487, "x": 4.2, "y": 4.23, "z": 2.58 }, { "name": 771, "carat": 0.9, "cut": "Fair", "color": "G", "clarity": "SI2", "depth": 64.5, "table": 56, "price": 2858, "x": 6.06, "y": 6, "z": 3.89 }, { "name": 48545, "carat": 0.52, "cut": "Ideal", "color": "I", "clarity": "IF", "depth": 60.2, "table": 56, "price": 1988, "x": 5.23, "y": 5.27, "z": 3.16 }, { "name": 12222, "carat": 1, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 62, "table": 57, "price": 5197, "x": 6.37, "y": 6.43, "z": 3.97 }, { "name": 5540, "carat": 0.91, "cut": "Fair", "color": "D", "clarity": "SI1", "depth": 64.4, "table": 60, "price": 3855, "x": 6.08, "y": 6.04, "z": 3.9 }, { "name": 51049, "carat": 0.73, "cut": "Fair", "color": "I", "clarity": "VS1", "depth": 55.9, "table": 66, "price": 2330, "x": 6.11, "y": 6.01, "z": 3.39 }, { "name": 14583, "carat": 1.13, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 62.4, "table": 58, "price": 5885, "x": 6.66, "y": 6.61, "z": 4.14 }, { "name": 21195, "carat": 1.51, "cut": "Very-Good", "color": "I", "clarity": "VS1", "depth": 63, "table": 59, "price": 9343, "x": 7.28, "y": 7.3, "z": 4.59 }, { "name": 38780, "carat": 0.31, "cut": "Premium", "color": "E", "clarity": "VVS2", "depth": 61.3, "table": 60, "price": 1046, "x": 4.35, "y": 4.33, "z": 2.66 }, { "name": 24542, "carat": 2.01, "cut": "Premium", "color": "I", "clarity": "SI1", "depth": 60.5, "table": 58, "price": 12829, "x": 8.2, "y": 8.06, "z": 4.92 }, { "name": 45710, "carat": 0.56, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 61.7, "table": 56, "price": 1698, "x": 5.34, "y": 5.3, "z": 3.28 }, { "name": 20987, "carat": 1.2, "cut": "Very-Good", "color": "F", "clarity": "VS1", "depth": 61.6, "table": 61, "price": 9203, "x": 6.81, "y": 6.86, "z": 4.21 }, { "name": 24439, "carat": 1.5, "cut": "Good", "color": "F", "clarity": "VS2", "depth": 60.2, "table": 58, "price": 12693, "x": 7.31, "y": 7.35, "z": 4.41 }, { "name": 20964, "carat": 1.21, "cut": "Good", "color": "E", "clarity": "VS2", "depth": 62.7, "table": 61, "price": 9176, "x": 6.67, "y": 6.72, "z": 4.2 }, { "name": 33240, "carat": 0.36, "cut": "Ideal", "color": "I", "clarity": "VVS1", "depth": 61.7, "table": 56, "price": 824, "x": 4.59, "y": 4.62, "z": 2.84 }, { "name": 50267, "carat": 0.5, "cut": "Very-Good", "color": "F", "clarity": "IF", "depth": 61.4, "table": 60, "price": 2238, "x": 5.07, "y": 5.1, "z": 3.12 }, { "name": 26992, "carat": 2.05, "cut": "Premium", "color": "E", "clarity": "SI2", "depth": 59.7, "table": 59, "price": 17081, "x": 8.27, "y": 8.39, "z": 4.97 }, { "name": 25844, "carat": 1.71, "cut": "Very-Good", "color": "H", "clarity": "VVS2", "depth": 61.2, "table": 62, "price": 14893, "x": 7.59, "y": 7.65, "z": 4.66 }, { "name": 28144, "carat": 0.3, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 62.6, "table": 53, "price": 665, "x": 4.31, "y": 4.35, "z": 2.71 }, { "name": 53423, "carat": 0.71, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 60.3, "table": 60, "price": 2671, "x": 5.76, "y": 5.81, "z": 3.49 }, { "name": 40317, "carat": 0.4, "cut": "Ideal", "color": "E", "clarity": "VS1", "depth": 62.2, "table": 55, "price": 1125, "x": 4.76, "y": 4.72, "z": 2.95 }, { "name": 48669, "carat": 0.61, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 62.4, "table": 55, "price": 2002, "x": 5.42, "y": 5.45, "z": 3.39 }, { "name": 26549, "carat": 1.87, "cut": "Premium", "color": "E", "clarity": "SI1", "depth": 61.9, "table": 58, "price": 16232, "x": 7.94, "y": 7.88, "z": 4.9 }, { "name": 18629, "carat": 1.02, "cut": "Good", "color": "E", "clarity": "VS1", "depth": 63.9, "table": 56, "price": 7602, "x": 6.33, "y": 6.38, "z": 4.06 }, { "name": 44994, "carat": 0.31, "cut": "Premium", "color": "I", "clarity": "SI1", "depth": 60.7, "table": 60, "price": 523, "x": 4.37, "y": 4.33, "z": 2.64 }, { "name": 10513, "carat": 1.03, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 62.4, "table": 56, "price": 4800, "x": 6.45, "y": 6.5, "z": 4.04 }, { "name": 21820, "carat": 1.51, "cut": "Ideal", "color": "I", "clarity": "VS2", "depth": 62.6, "table": 55, "price": 9891, "x": 7.29, "y": 7.34, "z": 4.58 }, { "name": 51070, "carat": 0.54, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 61.3, "table": 57, "price": 2333, "x": 5.29, "y": 5.24, "z": 3.23 }, { "name": 25447, "carat": 2, "cut": "Fair", "color": "H", "clarity": "VS1", "depth": 66, "table": 56, "price": 14199, "x": 7.79, "y": 7.72, "z": 5.12 }, { "name": 11880, "carat": 1.21, "cut": "Very-Good", "color": "I", "clarity": "SI2", "depth": 62, "table": 56, "price": 5111, "x": 6.79, "y": 6.86, "z": 4.23 }, { "name": 29934, "carat": 0.34, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 59.6, "table": 62, "price": 714, "x": 4.56, "y": 4.54, "z": 2.71 }, { "name": 33722, "carat": 0.42, "cut": "Premium", "color": "E", "clarity": "SI2", "depth": 60.1, "table": 58, "price": 838, "x": 4.91, "y": 4.87, "z": 2.94 }, { "name": 6090, "carat": 1.02, "cut": "Very-Good", "color": "F", "clarity": "SI2", "depth": 59.6, "table": 59, "price": 3974, "x": 6.51, "y": 6.54, "z": 3.89 }, { "name": 10643, "carat": 0.93, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 62.2, "table": 59, "price": 4834, "x": 6.21, "y": 6.26, "z": 3.88 }, { "name": 17714, "carat": 0.41, "cut": "Ideal", "color": "J", "clarity": "VS2", "depth": 61.7, "table": 55, "price": 613, "x": 4.8, "y": 4.82, "z": 2.97 }, { "name": 48418, "carat": 0.7, "cut": "Very-Good", "color": "I", "clarity": "VS1", "depth": 62.4, "table": 58, "price": 1971, "x": 5.62, "y": 5.67, "z": 3.52 }, { "name": 52256, "carat": 0.7, "cut": "Good", "color": "G", "clarity": "VS2", "depth": 64.3, "table": 56, "price": 2488, "x": 5.51, "y": 5.58, "z": 3.57 }, { "name": 42073, "carat": 0.55, "cut": "Good", "color": "D", "clarity": "SI2", "depth": 63.3, "table": 56, "price": 1272, "x": 5.21, "y": 5.24, "z": 3.31 }, { "name": 7421, "carat": 1, "cut": "Premium", "color": "G", "clarity": "SI2", "depth": 62.9, "table": 60, "price": 4227, "x": 6.35, "y": 6.3, "z": 3.98 }, { "name": 52345, "carat": 0.72, "cut": "Fair", "color": "E", "clarity": "SI1", "depth": 56.9, "table": 61, "price": 2498, "x": 5.91, "y": 5.97, "z": 3.38 }, { "name": 21919, "carat": 1.5, "cut": "Ideal", "color": "F", "clarity": "SI2", "depth": 62.9, "table": 55, "price": 9996, "x": 7.28, "y": 7.26, "z": 4.57 }, { "name": 44416, "carat": 0.52, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 61, "table": 55, "price": 1586, "x": 5.19, "y": 5.23, "z": 3.18 }, { "name": 6044, "carat": 0.32, "cut": "Ideal", "color": "E", "clarity": "SI2", "depth": 62, "table": 55, "price": 576, "x": 4.41, "y": 4.36, "z": 2.72 }, { "name": 42202, "carat": 0.51, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 61.7, "table": 58, "price": 1287, "x": 5.12, "y": 5.15, "z": 3.17 }, { "name": 29510, "carat": 0.32, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 60.5, "table": 59, "price": 702, "x": 4.39, "y": 4.43, "z": 2.67 }, { "name": 24096, "carat": 1.91, "cut": "Fair", "color": "I", "clarity": "VS1", "depth": 59.5, "table": 68, "price": 12244, "x": 8.1, "y": 7.91, "z": 4.78 }, { "name": 28544, "carat": 0.3, "cut": "Premium", "color": "E", "clarity": "SI1", "depth": 61.8, "table": 60, "price": 675, "x": 4.28, "y": 4.23, "z": 2.63 }, { "name": 14459, "carat": 1.06, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 61.9, "table": 57, "price": 5834, "x": 6.57, "y": 6.54, "z": 4.06 }, { "name": 1152, "carat": 0.87, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 62.5, "table": 57, "price": 2923, "x": 6.13, "y": 6.06, "z": 3.81 }, { "name": 37812, "carat": 0.35, "cut": "Ideal", "color": "G", "clarity": "IF", "depth": 61.3, "table": 55, "price": 1001, "x": 4.57, "y": 4.6, "z": 2.81 }, { "name": 23616, "carat": 1.34, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 62.2, "table": 56, "price": 11640, "x": 7.11, "y": 7.04, "z": 4.4 }, { "name": 24784, "carat": 1.51, "cut": "Good", "color": "G", "clarity": "VVS2", "depth": 63.8, "table": 59, "price": 13155, "x": 7.24, "y": 7.28, "z": 4.63 }, { "name": 10890, "carat": 1, "cut": "Good", "color": "G", "clarity": "SI1", "depth": 64.4, "table": 54, "price": 4882, "x": 6.29, "y": 6.32, "z": 4.06 }, { "name": 21135, "carat": 1, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 61.1, "table": 58, "price": 9294, "x": 6.43, "y": 6.47, "z": 3.94 }, { "name": 10217, "carat": 1.21, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 60.5, "table": 60, "price": 4743, "x": 6.81, "y": 6.72, "z": 4.09 }, { "name": 10169, "carat": 0.91, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 61.9, "table": 56, "price": 4731, "x": 6.22, "y": 6.18, "z": 3.84 }, { "name": 15177, "carat": 1.01, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 63, "table": 58, "price": 6097, "x": 6.43, "y": 6.36, "z": 4.03 }, { "name": 20708, "carat": 0.31, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 62.1, "table": 57, "price": 625, "x": 4.34, "y": 4.36, "z": 2.7 }, { "name": 17157, "carat": 1.24, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 61.2, "table": 59, "price": 6850, "x": 6.89, "y": 6.93, "z": 4.23 }, { "name": 12185, "carat": 1.21, "cut": "Premium", "color": "G", "clarity": "SI2", "depth": 59.1, "table": 55, "price": 5184, "x": 7.04, "y": 6.98, "z": 4.14 }, { "name": 37681, "carat": 0.42, "cut": "Ideal", "color": "H", "clarity": "VS2", "depth": 62.5, "table": 57, "price": 992, "x": 4.81, "y": 4.76, "z": 2.99 }, { "name": 9804, "carat": 0.9, "cut": "Good", "color": "G", "clarity": "VVS2", "depth": 62.6, "table": 58, "price": 4668, "x": 6.1, "y": 6.13, "z": 3.83 }, { "name": 27382, "carat": 0.41, "cut": "Good", "color": "J", "clarity": "VS1", "depth": 63.7, "table": 56, "price": 647, "x": 4.68, "y": 4.71, "z": 2.99 }, { "name": 37287, "carat": 0.24, "cut": "Very-Good", "color": "E", "clarity": "VVS2", "depth": 64.4, "table": 53, "price": 485, "x": 3.92, "y": 3.94, "z": 2.53 }, { "name": 5300, "carat": 1.01, "cut": "Fair", "color": "E", "clarity": "SI2", "depth": 60, "table": 60, "price": 3801, "x": 6.48, "y": 6.38, "z": 3.86 }, { "name": 18937, "carat": 1.12, "cut": "Premium", "color": "F", "clarity": "VS1", "depth": 62.1, "table": 60, "price": 7781, "x": 6.62, "y": 6.58, "z": 4.1 }, { "name": 29097, "carat": 0.36, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 61.2, "table": 59, "price": 689, "x": 4.59, "y": 4.56, "z": 2.8 }, { "name": 5319, "carat": 1.08, "cut": "Premium", "color": "I", "clarity": "SI2", "depth": 62.7, "table": 57, "price": 3805, "x": 6.57, "y": 6.53, "z": 4.11 }, { "name": 53268, "carat": 0.7, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 62.2, "table": 59, "price": 2648, "x": 5.68, "y": 5.64, "z": 3.52 }, { "name": 29858, "carat": 0.3, "cut": "Very-Good", "color": "D", "clarity": "VS2", "depth": 62.6, "table": 61, "price": 710, "x": 4.22, "y": 4.25, "z": 2.65 }, { "name": 15204, "carat": 1.01, "cut": "Very-Good", "color": "G", "clarity": "VS2", "depth": 63.1, "table": 60, "price": 6108, "x": 6.36, "y": 6.31, "z": 4 }, { "name": 50101, "carat": 0.71, "cut": "Very-Good", "color": "H", "clarity": "SI1", "depth": 63.1, "table": 57, "price": 2207, "x": 5.65, "y": 5.61, "z": 3.55 }, { "name": 21674, "carat": 1.58, "cut": "Good", "color": "I", "clarity": "VS1", "depth": 58.6, "table": 62, "price": 9775, "x": 7.59, "y": 7.66, "z": 4.47 }, { "name": 16732, "carat": 0.4, "cut": "Very-Good", "color": "E", "clarity": "SI2", "depth": 58.7, "table": 57, "price": 611, "x": 4.88, "y": 4.94, "z": 2.88 }, { "name": 2543, "carat": 0.75, "cut": "Very-Good", "color": "E", "clarity": "VS2", "depth": 62.8, "table": 55, "price": 3206, "x": 5.77, "y": 5.79, "z": 3.63 }, { "name": 6773, "carat": 0.9, "cut": "Good", "color": "G", "clarity": "VS1", "depth": 65.8, "table": 59, "price": 4108, "x": 6, "y": 6.04, "z": 3.96 }, { "name": 50497, "carat": 0.53, "cut": "Ideal", "color": "F", "clarity": "VVS2", "depth": 61, "table": 57, "price": 2269, "x": 5.23, "y": 5.26, "z": 3.22 }, { "name": 41671, "carat": 0.4, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 61.1, "table": 56, "price": 1240, "x": 4.74, "y": 4.78, "z": 2.91 }, { "name": 41419, "carat": 0.55, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 60.7, "table": 56, "price": 1226, "x": 5.38, "y": 5.32, "z": 3.25 }, { "name": 42262, "carat": 0.49, "cut": "Good", "color": "F", "clarity": "VS1", "depth": 59.2, "table": 60.9, "price": 1294, "x": 5.08, "y": 5.18, "z": 3.04 }, { "name": 439, "carat": 0.7, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 61.4, "table": 56, "price": 2815, "x": 5.72, "y": 5.77, "z": 3.53 }, { "name": 47145, "carat": 0.53, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 62.4, "table": 57, "price": 1832, "x": 5.18, "y": 5.21, "z": 3.24 }, { "name": 10387, "carat": 0.38, "cut": "Ideal", "color": "I", "clarity": "SI1", "depth": 61.8, "table": 54, "price": 593, "x": 4.66, "y": 4.7, "z": 2.89 }, { "name": 44982, "carat": 0.31, "cut": "Premium", "color": "G", "clarity": "SI2", "depth": 61.8, "table": 59, "price": 523, "x": 4.34, "y": 4.3, "z": 2.67 }, { "name": 307, "carat": 0.7, "cut": "Premium", "color": "E", "clarity": "VS1", "depth": 62.2, "table": 58, "price": 2800, "x": 5.6, "y": 5.66, "z": 3.5 }, { "name": 26546, "carat": 2.03, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 60.3, "table": 56, "price": 16224, "x": 8.27, "y": 8.21, "z": 4.97 }, { "name": 49312, "carat": 0.34, "cut": "Ideal", "color": "G", "clarity": "SI1", "depth": 61.9, "table": 55, "price": 540, "x": 4.5, "y": 4.52, "z": 2.79 }, { "name": 39638, "carat": 0.34, "cut": "Premium", "color": "G", "clarity": "IF", "depth": 62.3, "table": 59, "price": 1084, "x": 4.49, "y": 4.46, "z": 2.79 }, { "name": 2569, "carat": 0.9, "cut": "Very-Good", "color": "I", "clarity": "SI1", "depth": 63.1, "table": 54, "price": 3211, "x": 6.13, "y": 6.16, "z": 3.88 }, { "name": 35272, "carat": 0.3, "cut": "Ideal", "color": "G", "clarity": "IF", "depth": 61.4, "table": 57, "price": 895, "x": 4.33, "y": 4.37, "z": 2.67 }, { "name": 30391, "carat": 0.33, "cut": "Ideal", "color": "H", "clarity": "VVS1", "depth": 62.1, "table": 53, "price": 730, "x": 4.48, "y": 4.5, "z": 2.79 }, { "name": 36335, "carat": 0.32, "cut": "Premium", "color": "G", "clarity": "VVS2", "depth": 62.3, "table": 54, "price": 936, "x": 4.45, "y": 4.38, "z": 2.75 }, { "name": 24170, "carat": 1.71, "cut": "Ideal", "color": "I", "clarity": "VS2", "depth": 61.9, "table": 54, "price": 12342, "x": 7.65, "y": 7.75, "z": 4.77 }, { "name": 26579, "carat": 2.02, "cut": "Ideal", "color": "F", "clarity": "SI2", "depth": 61.3, "table": 57, "price": 16290, "x": 8.11, "y": 8.16, "z": 4.99 }, { "name": 16650, "carat": 1.26, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 61.3, "table": 58, "price": 6657, "x": 6.99, "y": 6.91, "z": 4.26 }, { "name": 7684, "carat": 1.03, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 63, "table": 59, "price": 4274, "x": 6.43, "y": 6.4, "z": 4.04 }, { "name": 8344, "carat": 1.02, "cut": "Very-Good", "color": "E", "clarity": "SI2", "depth": 60.5, "table": 58, "price": 4398, "x": 6.54, "y": 6.58, "z": 3.97 }, { "name": 13850, "carat": 1.2, "cut": "Very-Good", "color": "E", "clarity": "SI2", "depth": 63.3, "table": 55, "price": 5645, "x": 6.77, "y": 6.73, "z": 4.27 }, { "name": 21762, "carat": 1.5, "cut": "Good", "color": "I", "clarity": "VS1", "depth": 57.9, "table": 60, "price": 9828, "x": 7.48, "y": 7.44, "z": 4.32 }, { "name": 15491, "carat": 1.04, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 62.3, "table": 54, "price": 6206, "x": 6.55, "y": 6.49, "z": 4.06 }, { "name": 15416, "carat": 1.05, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 59.3, "table": 58, "price": 6174, "x": 6.74, "y": 6.68, "z": 3.98 }, { "name": 6738, "carat": 0.4, "cut": "Very-Good", "color": "F", "clarity": "SI2", "depth": 62.6, "table": 53, "price": 579, "x": 4.7, "y": 4.75, "z": 2.96 }, { "name": 15410, "carat": 1.32, "cut": "Premium", "color": "I", "clarity": "SI1", "depth": 62.2, "table": 58, "price": 6171, "x": 6.99, "y": 7.04, "z": 4.36 }, { "name": 7972, "carat": 0.9, "cut": "Very-Good", "color": "H", "clarity": "VS1", "depth": 62.2, "table": 57, "price": 4324, "x": 6.1, "y": 6.15, "z": 3.81 }, { "name": 52768, "carat": 0.77, "cut": "Ideal", "color": "E", "clarity": "SI2", "depth": 62, "table": 54, "price": 2563, "x": 5.89, "y": 5.92, "z": 3.66 }, { "name": 2171, "carat": 0.94, "cut": "Good", "color": "I", "clarity": "SI2", "depth": 63.8, "table": 60, "price": 3134, "x": 6.14, "y": 6.21, "z": 3.94 }, { "name": 40706, "carat": 0.58, "cut": "Ideal", "color": "I", "clarity": "SI2", "depth": 61.3, "table": 56, "price": 1158, "x": 5.38, "y": 5.45, "z": 3.32 }, { "name": 30640, "carat": 0.36, "cut": "Ideal", "color": "I", "clarity": "IF", "depth": 61.8, "table": 55, "price": 735, "x": 4.58, "y": 4.61, "z": 2.84 }, { "name": 234, "carat": 0.51, "cut": "Ideal", "color": "F", "clarity": "VVS1", "depth": 62, "table": 57, "price": 2787, "x": 5.11, "y": 5.15, "z": 3.18 }, { "name": 9490, "carat": 1.11, "cut": "Good", "color": "H", "clarity": "SI1", "depth": 64.2, "table": 58, "price": 4606, "x": 6.53, "y": 6.47, "z": 4.17 }, { "name": 593, "carat": 0.7, "cut": "Ideal", "color": "E", "clarity": "VS1", "depth": 61.8, "table": 56, "price": 2837, "x": 5.74, "y": 5.69, "z": 3.53 }, { "name": 34805, "carat": 0.31, "cut": "Ideal", "color": "D", "clarity": "VS1", "depth": 62, "table": 54, "price": 877, "x": 4.36, "y": 4.35, "z": 2.7 }, { "name": 38939, "carat": 0.4, "cut": "Ideal", "color": "E", "clarity": "VS1", "depth": 62, "table": 54, "price": 1053, "x": 4.74, "y": 4.77, "z": 2.95 }, { "name": 13667, "carat": 1.02, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 62.9, "table": 58, "price": 5593, "x": 6.41, "y": 6.37, "z": 4.02 }, { "name": 39302, "carat": 0.38, "cut": "Premium", "color": "E", "clarity": "VS1", "depth": 60.2, "table": 58, "price": 1069, "x": 4.71, "y": 4.66, "z": 2.82 }, { "name": 21379, "carat": 0.34, "cut": "Very-Good", "color": "D", "clarity": "SI1", "depth": 59.6, "table": 61, "price": 626, "x": 4.5, "y": 4.53, "z": 2.69 }, { "name": 42357, "carat": 0.51, "cut": "Ideal", "color": "I", "clarity": "VS1", "depth": 61.8, "table": 56, "price": 1301, "x": 5.1, "y": 5.13, "z": 3.16 }, { "name": 51831, "carat": 0.7, "cut": "Good", "color": "H", "clarity": "VS1", "depth": 59.4, "table": 62, "price": 2421, "x": 5.71, "y": 5.74, "z": 3.4 }, { "name": 47340, "carat": 0.23, "cut": "Very-Good", "color": "E", "clarity": "VVS1", "depth": 62.1, "table": 58, "price": 530, "x": 3.9, "y": 3.93, "z": 2.43 }, { "name": 13017, "carat": 1.2, "cut": "Very-Good", "color": "I", "clarity": "SI1", "depth": 62.2, "table": 55, "price": 5408, "x": 6.75, "y": 6.92, "z": 4.25 }, { "name": 53751, "carat": 0.72, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 62.7, "table": 55, "price": 2724, "x": 5.71, "y": 5.68, "z": 3.57 }, { "name": 33789, "carat": 0.32, "cut": "Ideal", "color": "H", "clarity": "IF", "depth": 60.9, "table": 56, "price": 842, "x": 4.41, "y": 4.42, "z": 2.69 }, { "name": 5813, "carat": 0.91, "cut": "Very-Good", "color": "D", "clarity": "SI2", "depth": 63.4, "table": 59, "price": 3911, "x": 6.12, "y": 6.15, "z": 3.89 }, { "name": 53023, "carat": 0.74, "cut": "Very-Good", "color": "I", "clarity": "VVS2", "depth": 62.8, "table": 55, "price": 2600, "x": 5.75, "y": 5.78, "z": 3.62 }, { "name": 46596, "carat": 0.54, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 61.4, "table": 57, "price": 1786, "x": 5.25, "y": 5.2, "z": 3.21 }, { "name": 51908, "carat": 0.7, "cut": "Good", "color": "E", "clarity": "SI2", "depth": 63.7, "table": 55, "price": 2435, "x": 5.63, "y": 5.58, "z": 3.57 }, { "name": 25242, "carat": 1.6, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 60.1, "table": 57, "price": 13853, "x": 7.65, "y": 7.59, "z": 4.58 }, { "name": 43627, "carat": 0.38, "cut": "Ideal", "color": "E", "clarity": "IF", "depth": 61.9, "table": 56, "price": 1433, "x": 4.65, "y": 4.66, "z": 2.88 }, { "name": 5997, "carat": 0.91, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 61.2, "table": 58, "price": 3958, "x": 6.21, "y": 6.25, "z": 3.81 }, { "name": 26004, "carat": 1.02, "cut": "Premium", "color": "D", "clarity": "IF", "depth": 61.5, "table": 60, "price": 15231, "x": 6.45, "y": 6.52, "z": 3.99 }, { "name": 46049, "carat": 0.5, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 61, "table": 56, "price": 1731, "x": 5.14, "y": 5.15, "z": 3.14 }, { "name": 47761, "carat": 0.52, "cut": "Ideal", "color": "H", "clarity": "VVS1", "depth": 61.7, "table": 53, "price": 1893, "x": 5.19, "y": 5.25, "z": 3.22 }, { "name": 47770, "carat": 0.7, "cut": "Very-Good", "color": "E", "clarity": "SI2", "depth": 63.5, "table": 59, "price": 1894, "x": 5.63, "y": 5.51, "z": 3.53 }, { "name": 26719, "carat": 0.32, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 61.1, "table": 57, "price": 645, "x": 4.4, "y": 4.44, "z": 2.7 }, { "name": 46039, "carat": 0.57, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 61.8, "table": 57, "price": 1728, "x": 5.33, "y": 5.28, "z": 3.28 }, { "name": 27603, "carat": 2.16, "cut": "Ideal", "color": "J", "clarity": "VS1", "depth": 61.4, "table": 55, "price": 18462, "x": 8.34, "y": 8.27, "z": 5.1 }, { "name": 25203, "carat": 2.26, "cut": "Very-Good", "color": "H", "clarity": "SI2", "depth": 63.1, "table": 58, "price": 13797, "x": 8.3, "y": 8.22, "z": 5.21 }, { "name": 5980, "carat": 1, "cut": "Fair", "color": "I", "clarity": "VS1", "depth": 64, "table": 49, "price": 3951, "x": 6.43, "y": 6.39, "z": 4.1 }, { "name": 10972, "carat": 1.2, "cut": "Premium", "color": "H", "clarity": "SI2", "depth": 59.6, "table": 60, "price": 4906, "x": 6.91, "y": 6.84, "z": 4.1 }, { "name": 44419, "carat": 0.53, "cut": "Ideal", "color": "D", "clarity": "SI1", "depth": 61.2, "table": 57, "price": 1587, "x": 5.19, "y": 5.24, "z": 3.19 }, { "name": 977, "carat": 0.82, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 59.9, "table": 59, "price": 2893, "x": 6.09, "y": 6.06, "z": 3.64 }, { "name": 10234, "carat": 1.19, "cut": "Premium", "color": "I", "clarity": "SI2", "depth": 62.6, "table": 58, "price": 4745, "x": 6.75, "y": 6.7, "z": 4.21 }, { "name": 44874, "carat": 0.64, "cut": "Very-Good", "color": "D", "clarity": "SI2", "depth": 62.8, "table": 54, "price": 1629, "x": 5.5, "y": 5.52, "z": 3.46 }, { "name": 665, "carat": 1.01, "cut": "Good", "color": "H", "clarity": "I1", "depth": 64.2, "table": 61, "price": 2846, "x": 6.25, "y": 6.18, "z": 3.99 }, { "name": 53847, "carat": 0.82, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 63.2, "table": 57, "price": 2741, "x": 5.92, "y": 5.97, "z": 3.76 }, { "name": 42703, "carat": 0.52, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 62.8, "table": 61, "price": 1338, "x": 5.14, "y": 5.11, "z": 3.22 }, { "name": 26603, "carat": 2.07, "cut": "Ideal", "color": "I", "clarity": "SI2", "depth": 62, "table": 55, "price": 16337, "x": 8.22, "y": 8.12, "z": 5.07 }, { "name": 33470, "carat": 0.32, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 59.7, "table": 59, "price": 828, "x": 4.44, "y": 4.41, "z": 2.64 }, { "name": 47000, "carat": 0.62, "cut": "Very-Good", "color": "I", "clarity": "VS1", "depth": 61.8, "table": 55, "price": 1818, "x": 5.5, "y": 5.53, "z": 3.41 }, { "name": 9368, "carat": 0.32, "cut": "Good", "color": "D", "clarity": "SI1", "depth": 63.7, "table": 55, "price": 589, "x": 4.35, "y": 4.38, "z": 2.78 }, { "name": 27741, "carat": 1.71, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 62.3, "table": 59, "price": 18791, "x": 7.57, "y": 7.53, "z": 4.7 }, { "name": 25501, "carat": 1.51, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 62.8, "table": 56, "price": 14294, "x": 7.32, "y": 7.27, "z": 4.58 }, { "name": 48210, "carat": 0.62, "cut": "Very-Good", "color": "D", "clarity": "SI1", "depth": 61.3, "table": 58, "price": 1949, "x": 5.47, "y": 5.49, "z": 3.36 }, { "name": 27312, "carat": 1.63, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 61.3, "table": 55, "price": 17825, "x": 7.6, "y": 7.63, "z": 4.67 }, { "name": 17574, "carat": 1.08, "cut": "Fair", "color": "G", "clarity": "VS1", "depth": 64.7, "table": 60, "price": 7076, "x": 6.44, "y": 6.41, "z": 4.16 }, { "name": 33092, "carat": 0.31, "cut": "Ideal", "color": "D", "clarity": "VVS2", "depth": 61.7, "table": 54, "price": 815, "x": 4.38, "y": 4.43, "z": 2.72 }, { "name": 5681, "carat": 1.01, "cut": "Good", "color": "F", "clarity": "SI2", "depth": 62.5, "table": 59, "price": 3886, "x": 6.31, "y": 6.37, "z": 3.96 }, { "name": 39210, "carat": 0.54, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 62, "table": 54, "price": 1065, "x": 5.23, "y": 5.28, "z": 3.26 }, { "name": 11982, "carat": 1.06, "cut": "Premium", "color": "F", "clarity": "SI1", "depth": 61, "table": 58, "price": 5142, "x": 6.6, "y": 6.65, "z": 4.04 }, { "name": 33775, "carat": 0.41, "cut": "Ideal", "color": "D", "clarity": "SI2", "depth": 62.6, "table": 57, "price": 841, "x": 4.77, "y": 4.72, "z": 2.97 }, { "name": 33646, "carat": 0.38, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 60.8, "table": 56, "price": 833, "x": 4.66, "y": 4.71, "z": 2.85 }, { "name": 14360, "carat": 1.21, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 62, "table": 54.5, "price": 5814, "x": 6.81, "y": 6.87, "z": 4.25 }, { "name": 928, "carat": 0.54, "cut": "Ideal", "color": "F", "clarity": "VVS1", "depth": 61.8, "table": 56, "price": 2882, "x": 5.23, "y": 5.26, "z": 3.24 }, { "name": 9392, "carat": 0.9, "cut": "Premium", "color": "D", "clarity": "VS2", "depth": 63, "table": 62, "price": 4586, "x": 6.13, "y": 6.06, "z": 3.84 }, { "name": 40223, "carat": 0.4, "cut": "Very-Good", "color": "G", "clarity": "VVS1", "depth": 60.9, "table": 57, "price": 1123, "x": 4.76, "y": 4.8, "z": 2.91 }, { "name": 30517, "carat": 0.31, "cut": "Very-Good", "color": "D", "clarity": "SI1", "depth": 63.5, "table": 55, "price": 732, "x": 4.3, "y": 4.27, "z": 2.72 }, { "name": 7478, "carat": 1.07, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 58.9, "table": 59, "price": 4235, "x": 6.76, "y": 6.71, "z": 3.97 }, { "name": 28014, "carat": 0.3, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 61.8, "table": 56, "price": 658, "x": 4.3, "y": 4.34, "z": 2.67 }, { "name": 28205, "carat": 0.4, "cut": "Very-Good", "color": "D", "clarity": "SI2", "depth": 62.8, "table": 56, "price": 666, "x": 4.7, "y": 4.73, "z": 2.96 }, { "name": 12423, "carat": 1, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 62, "table": 55, "price": 5239, "x": 6.39, "y": 6.44, "z": 3.98 }, { "name": 27138, "carat": 2.01, "cut": "Premium", "color": "H", "clarity": "SI1", "depth": 61.8, "table": 58, "price": 17347, "x": 8.13, "y": 8.06, "z": 5 }, { "name": 45511, "carat": 0.55, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 60.3, "table": 57, "price": 1682, "x": 5.32, "y": 5.37, "z": 3.23 }, { "name": 52391, "carat": 0.71, "cut": "Very-Good", "color": "D", "clarity": "SI1", "depth": 63.1, "table": 56, "price": 2508, "x": 5.66, "y": 5.62, "z": 3.56 }, { "name": 29757, "carat": 0.3, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 62.6, "table": 56, "price": 709, "x": 4.29, "y": 4.24, "z": 2.67 }, { "name": 41446, "carat": 0.53, "cut": "Ideal", "color": "E", "clarity": "SI2", "depth": 61.2, "table": 55, "price": 1229, "x": 5.23, "y": 5.26, "z": 3.21 }, { "name": 39341, "carat": 0.37, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 60.7, "table": 55, "price": 1073, "x": 4.66, "y": 4.7, "z": 2.84 }, { "name": 15246, "carat": 1.22, "cut": "Premium", "color": "I", "clarity": "VS1", "depth": 61.1, "table": 58, "price": 6121, "x": 6.91, "y": 6.84, "z": 4.2 }, { "name": 48026, "carat": 0.71, "cut": "Good", "color": "J", "clarity": "VS2", "depth": 60.6, "table": 61, "price": 1922, "x": 5.7, "y": 5.79, "z": 3.48 }, { "name": 16395, "carat": 1.05, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 62, "table": 56, "price": 6545, "x": 6.48, "y": 6.52, "z": 4.03 }, { "name": 34875, "carat": 0.3, "cut": "Premium", "color": "G", "clarity": "VVS2", "depth": 62.1, "table": 59, "price": 878, "x": 4.27, "y": 4.23, "z": 2.64 }, { "name": 31575, "carat": 0.4, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 62.3, "table": 54, "price": 767, "x": 4.74, "y": 4.77, "z": 2.96 }, { "name": 17618, "carat": 1.01, "cut": "Very-Good", "color": "E", "clarity": "VS1", "depth": 60.9, "table": 55, "price": 7094, "x": 6.48, "y": 6.58, "z": 3.98 }, { "name": 10761, "carat": 1.01, "cut": "Fair", "color": "E", "clarity": "SI1", "depth": 69.5, "table": 55, "price": 4853, "x": 6, "y": 5.94, "z": 4.15 }, { "name": 47980, "carat": 0.32, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 62.1, "table": 54, "price": 532, "x": 4.4, "y": 4.42, "z": 2.74 }, { "name": 41412, "carat": 0.47, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 59.6, "table": 58.1, "price": 1226, "x": 5.07, "y": 5.11, "z": 3.03 }, { "name": 21455, "carat": 1.04, "cut": "Ideal", "color": "E", "clarity": "VVS2", "depth": 62, "table": 58, "price": 9552, "x": 6.54, "y": 6.46, "z": 4.03 }, { "name": 15036, "carat": 0.3, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 61.9, "table": 55, "price": 605, "x": 4.31, "y": 4.32, "z": 2.67 }, { "name": 44462, "carat": 0.55, "cut": "Premium", "color": "I", "clarity": "VVS1", "depth": 61.3, "table": 59, "price": 1593, "x": 5.27, "y": 5.3, "z": 3.24 }, { "name": 24456, "carat": 1.56, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 60.5, "table": 57, "price": 12717, "x": 7.56, "y": 7.5, "z": 4.56 }, { "name": 37334, "carat": 0.43, "cut": "Ideal", "color": "E", "clarity": "VS1", "depth": 61.2, "table": 56, "price": 981, "x": 4.89, "y": 4.94, "z": 3.01 }, { "name": 9236, "carat": 1.01, "cut": "Good", "color": "H", "clarity": "SI1", "depth": 63.3, "table": 58, "price": 4559, "x": 6.37, "y": 6.4, "z": 4.04 }, { "name": 4936, "carat": 0.9, "cut": "Premium", "color": "I", "clarity": "VVS2", "depth": 60.9, "table": 59, "price": 3730, "x": 6.25, "y": 6.22, "z": 3.8 }, { "name": 15874, "carat": 1.26, "cut": "Premium", "color": "H", "clarity": "SI2", "depth": 61.3, "table": 57, "price": 6350, "x": 6.96, "y": 6.87, "z": 4.24 }, { "name": 40705, "carat": 0.4, "cut": "Ideal", "color": "E", "clarity": "VVS2", "depth": 61.8, "table": 55, "price": 1158, "x": 4.74, "y": 4.78, "z": 2.94 }, { "name": 38587, "carat": 0.39, "cut": "Ideal", "color": "F", "clarity": "VVS2", "depth": 61.9, "table": 54.8, "price": 1036, "x": 4.68, "y": 4.69, "z": 2.9 }, { "name": 38474, "carat": 0.38, "cut": "Ideal", "color": "H", "clarity": "VVS2", "depth": 62.1, "table": 56, "price": 1031, "x": 4.64, "y": 4.67, "z": 2.89 }, { "name": 18994, "carat": 1.5, "cut": "Fair", "color": "J", "clarity": "VS1", "depth": 60.1, "table": 61, "price": 7819, "x": 7.25, "y": 7.3, "z": 4.37 }, { "name": 2343, "carat": 0.78, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 62.2, "table": 57, "price": 3171, "x": 5.87, "y": 5.9, "z": 3.66 }, { "name": 1827, "carat": 0.72, "cut": "Very-Good", "color": "F", "clarity": "VS1", "depth": 62.1, "table": 59, "price": 3059, "x": 5.69, "y": 5.74, "z": 3.55 }, { "name": 48630, "carat": 0.77, "cut": "Very-Good", "color": "J", "clarity": "SI2", "depth": 61.3, "table": 58, "price": 2001, "x": 5.84, "y": 5.91, "z": 3.6 }, { "name": 42340, "carat": 0.73, "cut": "Very-Good", "color": "G", "clarity": "I1", "depth": 62.5, "table": 58, "price": 1298, "x": 5.74, "y": 5.82, "z": 3.61 }, { "name": 27555, "carat": 1.7, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 58.6, "table": 62, "price": 18342, "x": 7.92, "y": 7.84, "z": 4.62 }, { "name": 46863, "carat": 0.53, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 61.8, "table": 55, "price": 1813, "x": 5.22, "y": 5.17, "z": 3.21 }, { "name": 22475, "carat": 1.01, "cut": "Very-Good", "color": "D", "clarity": "VVS2", "depth": 59.8, "table": 57, "price": 10499, "x": 6.49, "y": 6.58, "z": 3.91 }, { "name": 7511, "carat": 0.9, "cut": "Ideal", "color": "D", "clarity": "SI2", "depth": 60.8, "table": 56, "price": 4241, "x": 6.24, "y": 6.26, "z": 3.8 }, { "name": 51698, "carat": 0.7, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 60.5, "table": 57, "price": 2400, "x": 5.74, "y": 5.79, "z": 3.49 }, { "name": 44899, "carat": 0.5, "cut": "Very-Good", "color": "E", "clarity": "VS2", "depth": 63.2, "table": 56, "price": 1629, "x": 5.06, "y": 5.03, "z": 3.19 }, { "name": 45346, "carat": 0.53, "cut": "Very-Good", "color": "G", "clarity": "VS1", "depth": 62.2, "table": 59, "price": 1664, "x": 5.14, "y": 5.18, "z": 3.21 }, { "name": 44242, "carat": 0.51, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 62.4, "table": 58, "price": 1574, "x": 5.13, "y": 5.1, "z": 3.19 }, { "name": 43146, "carat": 0.52, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 62.9, "table": 59, "price": 1389, "x": 5.12, "y": 5.15, "z": 3.23 }, { "name": 41310, "carat": 0.5, "cut": "Very-Good", "color": "F", "clarity": "SI1", "depth": 60.2, "table": 62, "price": 1213, "x": 5.1, "y": 5.13, "z": 3.08 }, { "name": 29288, "carat": 0.31, "cut": "Ideal", "color": "G", "clarity": "SI2", "depth": 62, "table": 54, "price": 436, "x": 4.38, "y": 4.42, "z": 2.73 }, { "name": 140, "carat": 0.64, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 61.9, "table": 56, "price": 2766, "x": 5.53, "y": 5.56, "z": 3.43 }, { "name": 11560, "carat": 1.01, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 59.6, "table": 58, "price": 5034, "x": 6.61, "y": 6.54, "z": 3.92 }, { "name": 51397, "carat": 0.73, "cut": "Very-Good", "color": "I", "clarity": "VS2", "depth": 62.2, "table": 57, "price": 2369, "x": 5.75, "y": 5.76, "z": 3.58 }, { "name": 26898, "carat": 2.01, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 61.3, "table": 61, "price": 16881, "x": 8.11, "y": 8.01, "z": 4.94 }, { "name": 39894, "carat": 0.42, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 61.9, "table": 57, "price": 1103, "x": 4.81, "y": 4.79, "z": 2.97 }, { "name": 47036, "carat": 0.55, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 61.1, "table": 56, "price": 1819, "x": 5.31, "y": 5.27, "z": 3.23 }, { "name": 18573, "carat": 1.51, "cut": "Premium", "color": "I", "clarity": "SI2", "depth": 59.7, "table": 59, "price": 7577, "x": 7.48, "y": 7.46, "z": 4.46 }, { "name": 41674, "carat": 0.33, "cut": "Ideal", "color": "F", "clarity": "IF", "depth": 60.8, "table": 55, "price": 1240, "x": 4.49, "y": 4.53, "z": 2.74 }, { "name": 28291, "carat": 0.27, "cut": "Ideal", "color": "I", "clarity": "VS1", "depth": 62.2, "table": 55, "price": 432, "x": 4.15, "y": 4.18, "z": 2.59 }, { "name": 21301, "carat": 1.51, "cut": "Fair", "color": "H", "clarity": "VS2", "depth": 65, "table": 64, "price": 9452, "x": 7.1, "y": 7.03, "z": 4.59 }, { "name": 17613, "carat": 1.3, "cut": "Very-Good", "color": "H", "clarity": "VS2", "depth": 62.5, "table": 59, "price": 7092, "x": 6.93, "y": 6.96, "z": 4.34 }, { "name": 349, "carat": 0.82, "cut": "Ideal", "color": "H", "clarity": "VS2", "depth": 61.5, "table": 56, "price": 2804, "x": 6.01, "y": 6.08, "z": 3.72 }, { "name": 28406, "carat": 0.35, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 60.8, "table": 58, "price": 669, "x": 4.57, "y": 4.51, "z": 2.76 }, { "name": 32137, "carat": 0.36, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 60.5, "table": 57, "price": 786, "x": 4.61, "y": 4.65, "z": 2.8 }, { "name": 45350, "carat": 0.59, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 62.6, "table": 54, "price": 1664, "x": 5.32, "y": 5.38, "z": 3.35 }, { "name": 24214, "carat": 2.05, "cut": "Very-Good", "color": "H", "clarity": "SI2", "depth": 63.1, "table": 58, "price": 12401, "x": 8.05, "y": 8, "z": 5.07 }, { "name": 15534, "carat": 1.47, "cut": "Premium", "color": "J", "clarity": "SI2", "depth": 60, "table": 58, "price": 6223, "x": 7.36, "y": 7.31, "z": 4.4 }, { "name": 3654, "carat": 1.01, "cut": "Ideal", "color": "F", "clarity": "I1", "depth": 62.2, "table": 54, "price": 3439, "x": 6.44, "y": 6.42, "z": 4 }, { "name": 16404, "carat": 1.28, "cut": "Ideal", "color": "G", "clarity": "SI2", "depth": 61.1, "table": 58, "price": 6548, "x": 6.98, "y": 7.03, "z": 4.28 }, { "name": 49276, "carat": 0.54, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 62.1, "table": 56, "price": 2090, "x": 5.22, "y": 5.19, "z": 3.23 }, { "name": 46982, "carat": 0.55, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 61.9, "table": 60, "price": 1815, "x": 5.23, "y": 5.14, "z": 3.21 }, { "name": 42945, "carat": 0.3, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 62.6, "table": 61, "price": 506, "x": 4.24, "y": 4.2, "z": 2.64 }, { "name": 50405, "carat": 0.58, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 61.3, "table": 56, "price": 2256, "x": 5.36, "y": 5.4, "z": 3.3 }, { "name": 17138, "carat": 1.5, "cut": "Fair", "color": "H", "clarity": "SI1", "depth": 65, "table": 57, "price": 6838, "x": 7.1, "y": 7.06, "z": 4.6 }, { "name": 36607, "carat": 0.32, "cut": "Very-Good", "color": "G", "clarity": "SI1", "depth": 63, "table": 56, "price": 477, "x": 4.35, "y": 4.38, "z": 2.75 }, { "name": 28900, "carat": 0.3, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 61.5, "table": 57, "price": 684, "x": 4.29, "y": 4.33, "z": 2.65 }, { "name": 45007, "carat": 0.54, "cut": "Premium", "color": "G", "clarity": "VS1", "depth": 61.1, "table": 60, "price": 1637, "x": 5.23, "y": 5.28, "z": 3.21 }, { "name": 27114, "carat": 1.86, "cut": "Very-Good", "color": "H", "clarity": "VVS2", "depth": 58.6, "table": 62, "price": 17267, "x": 8.07, "y": 8.14, "z": 4.75 }, { "name": 7342, "carat": 0.91, "cut": "Good", "color": "E", "clarity": "SI1", "depth": 63.5, "table": 57, "price": 4211, "x": 6.07, "y": 6.11, "z": 3.87 }, { "name": 31233, "carat": 0.44, "cut": "Good", "color": "F", "clarity": "SI1", "depth": 63.8, "table": 54, "price": 756, "x": 4.8, "y": 4.85, "z": 3.08 }, { "name": 51634, "carat": 0.31, "cut": "Very-Good", "color": "H", "clarity": "VS1", "depth": 61.4, "table": 61, "price": 544, "x": 4.33, "y": 4.36, "z": 2.67 }, { "name": 24304, "carat": 1.51, "cut": "Very-Good", "color": "G", "clarity": "VS2", "depth": 58.7, "table": 63, "price": 12551, "x": 7.45, "y": 7.4, "z": 4.36 }, { "name": 22297, "carat": 1.27, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 62.4, "table": 53.3, "price": 10342, "x": 6.94, "y": 6.95, "z": 4.33 }, { "name": 42196, "carat": 0.59, "cut": "Very-Good", "color": "J", "clarity": "VS2", "depth": 61.9, "table": 58, "price": 1287, "x": 5.35, "y": 5.38, "z": 3.32 }, { "name": 11989, "carat": 1.06, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 62.2, "table": 57, "price": 5143, "x": 6.56, "y": 6.49, "z": 4.06 }, { "name": 41670, "carat": 0.46, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 62.4, "table": 56, "price": 1240, "x": 4.95, "y": 4.98, "z": 3.1 }, { "name": 21492, "carat": 1.25, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 62, "table": 55, "price": 9586, "x": 6.91, "y": 6.95, "z": 4.3 }, { "name": 41253, "carat": 0.3, "cut": "Very-Good", "color": "F", "clarity": "SI1", "depth": 62.8, "table": 56, "price": 500, "x": 4.24, "y": 4.26, "z": 2.67 }, { "name": 35901, "carat": 0.32, "cut": "Ideal", "color": "G", "clarity": "IF", "depth": 61.9, "table": 55, "price": 918, "x": 4.38, "y": 4.44, "z": 2.73 }, { "name": 26509, "carat": 1.73, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 62.1, "table": 57, "price": 16131, "x": 7.73, "y": 7.64, "z": 4.77 }, { "name": 28158, "carat": 0.3, "cut": "Ideal", "color": "H", "clarity": "VVS1", "depth": 62.3, "table": 55, "price": 665, "x": 4.3, "y": 4.33, "z": 2.69 }, { "name": 43075, "carat": 0.6, "cut": "Very-Good", "color": "H", "clarity": "SI1", "depth": 60.4, "table": 63, "price": 1378, "x": 5.45, "y": 5.41, "z": 3.28 }, { "name": 12275, "carat": 1.21, "cut": "Very-Good", "color": "J", "clarity": "VS2", "depth": 61.5, "table": 58, "price": 5211, "x": 6.85, "y": 6.9, "z": 4.23 }, { "name": 40070, "carat": 0.43, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 62.3, "table": 58, "price": 1113, "x": 4.85, "y": 4.81, "z": 3.01 }, { "name": 13646, "carat": 1.24, "cut": "Very-Good", "color": "I", "clarity": "SI1", "depth": 60, "table": 59, "price": 5584, "x": 6.98, "y": 7.01, "z": 4.2 }, { "name": 48842, "carat": 0.55, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 62.3, "table": 55, "price": 2030, "x": 5.29, "y": 5.24, "z": 3.28 }, { "name": 19463, "carat": 1.56, "cut": "Good", "color": "J", "clarity": "VS2", "depth": 62.3, "table": 64, "price": 8107, "x": 7.41, "y": 7.36, "z": 4.6 }, { "name": 44205, "carat": 0.51, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 61, "table": 58, "price": 1569, "x": 5.1, "y": 5.17, "z": 3.13 }, { "name": 32537, "carat": 0.27, "cut": "Premium", "color": "E", "clarity": "VVS2", "depth": 59, "table": 59, "price": 799, "x": 4.27, "y": 4.24, "z": 2.51 }, { "name": 28079, "carat": 0.4, "cut": "Ideal", "color": "J", "clarity": "VVS2", "depth": 61.9, "table": 55, "price": 662, "x": 4.74, "y": 4.79, "z": 2.95 }, { "name": 11605, "carat": 1.95, "cut": "Premium", "color": "H", "clarity": "I1", "depth": 60.3, "table": 59, "price": 5045, "x": 8.1, "y": 8.05, "z": 4.87 }, { "name": 16213, "carat": 1.03, "cut": "Premium", "color": "G", "clarity": "VS1", "depth": 62.1, "table": 59, "price": 6479, "x": 6.48, "y": 6.4, "z": 4 }, { "name": 198, "carat": 0.7, "cut": "Premium", "color": "E", "clarity": "SI1", "depth": 61, "table": 58, "price": 2777, "x": 5.78, "y": 5.72, "z": 3.51 }, { "name": 51777, "carat": 0.7, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 62.6, "table": 55, "price": 2410, "x": 5.67, "y": 5.7, "z": 3.56 }, { "name": 13350, "carat": 1.02, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 63.1, "table": 61, "price": 5508, "x": 6.42, "y": 6.35, "z": 4.03 }, { "name": 46324, "carat": 0.69, "cut": "Very-Good", "color": "H", "clarity": "SI1", "depth": 62.5, "table": 57.6, "price": 1757, "x": 5.66, "y": 5.72, "z": 3.55 }, { "name": 48186, "carat": 0.72, "cut": "Premium", "color": "J", "clarity": "VS2", "depth": 60.2, "table": 59, "price": 1944, "x": 5.85, "y": 5.81, "z": 3.51 }, { "name": 15375, "carat": 0.36, "cut": "Very-Good", "color": "G", "clarity": "SI1", "depth": 61.8, "table": 57.8, "price": 606, "x": 4.52, "y": 4.58, "z": 2.81 }, { "name": 4511, "carat": 1.02, "cut": "Good", "color": "F", "clarity": "SI2", "depth": 59.6, "table": 64, "price": 3633, "x": 6.58, "y": 6.55, "z": 3.91 }, { "name": 9850, "carat": 1.01, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 61.9, "table": 58, "price": 4676, "x": 6.39, "y": 6.34, "z": 3.94 }, { "name": 9359, "carat": 1.16, "cut": "Very-Good", "color": "I", "clarity": "SI1", "depth": 62.9, "table": 58, "price": 4586, "x": 6.64, "y": 6.69, "z": 4.19 }, { "name": 29610, "carat": 0.35, "cut": "Premium", "color": "G", "clarity": "VS1", "depth": 61.2, "table": 58, "price": 706, "x": 4.51, "y": 4.54, "z": 2.77 }, { "name": 8030, "carat": 0.96, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 61.7, "table": 56, "price": 4333, "x": 6.4, "y": 6.34, "z": 3.93 }, { "name": 15824, "carat": 1.26, "cut": "Ideal", "color": "J", "clarity": "VS1", "depth": 62.2, "table": 58, "price": 6332, "x": 6.88, "y": 6.92, "z": 4.29 }, { "name": 8842, "carat": 0.9, "cut": "Good", "color": "G", "clarity": "VS1", "depth": 63.9, "table": 60, "price": 4479, "x": 6.09, "y": 6.14, "z": 3.91 }, { "name": 30086, "carat": 0.32, "cut": "Ideal", "color": "H", "clarity": "VS1", "depth": 61.3, "table": 55, "price": 720, "x": 4.43, "y": 4.41, "z": 2.71 }, { "name": 16383, "carat": 1.04, "cut": "Very-Good", "color": "G", "clarity": "VS1", "depth": 63.2, "table": 56, "price": 6541, "x": 6.39, "y": 6.46, "z": 4.06 }, { "name": 4945, "carat": 1.19, "cut": "Ideal", "color": "H", "clarity": "I1", "depth": 61.5, "table": 57, "price": 3732, "x": 6.83, "y": 6.79, "z": 4.19 }, { "name": 27563, "carat": 2.06, "cut": "Ideal", "color": "D", "clarity": "SI2", "depth": 60.3, "table": 56, "price": 18371, "x": 8.29, "y": 8.25, "z": 4.99 }, { "name": 22585, "carat": 1.25, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 62.5, "table": 54, "price": 10636, "x": 6.88, "y": 6.93, "z": 4.31 }, { "name": 2199, "carat": 0.72, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 62.4, "table": 57, "price": 3139, "x": 5.71, "y": 5.76, "z": 3.58 }, { "name": 11107, "carat": 1.05, "cut": "Ideal", "color": "D", "clarity": "SI2", "depth": 60.2, "table": 57, "price": 4932, "x": 6.58, "y": 6.65, "z": 3.98 }, { "name": 30544, "carat": 0.31, "cut": "Ideal", "color": "D", "clarity": "VS2", "depth": 62.5, "table": 56, "price": 734, "x": 4.29, "y": 4.32, "z": 2.69 }, { "name": 15196, "carat": 1.02, "cut": "Very-Good", "color": "I", "clarity": "VS2", "depth": 61.5, "table": 57, "price": 6104, "x": 6.4, "y": 6.44, "z": 3.95 }, { "name": 53439, "carat": 0.7, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 60.8, "table": 58, "price": 2673, "x": 5.7, "y": 5.74, "z": 3.48 }, { "name": 44886, "carat": 0.5, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 62.2, "table": 56, "price": 1629, "x": 5.12, "y": 5.11, "z": 3.18 }, { "name": 4021, "carat": 0.9, "cut": "Ideal", "color": "G", "clarity": "SI2", "depth": 61.2, "table": 57, "price": 3521, "x": 6.24, "y": 6.28, "z": 3.83 }, { "name": 25537, "carat": 2.14, "cut": "Ideal", "color": "G", "clarity": "SI2", "depth": 62.9, "table": 56, "price": 14359, "x": 8.18, "y": 8.14, "z": 5.13 }, { "name": 44606, "carat": 0.53, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 62, "table": 58, "price": 1607, "x": 5.21, "y": 5.18, "z": 3.22 }, { "name": 7821, "carat": 1, "cut": "Fair", "color": "G", "clarity": "SI1", "depth": 66.2, "table": 58, "price": 4295, "x": 6.25, "y": 6.15, "z": 4.11 }, { "name": 21578, "carat": 1.51, "cut": "Good", "color": "H", "clarity": "SI1", "depth": 61.8, "table": 62, "price": 9681, "x": 7.25, "y": 7.29, "z": 4.49 }, { "name": 21402, "carat": 1.5, "cut": "Very-Good", "color": "G", "clarity": "SI1", "depth": 62.2, "table": 58, "price": 9515, "x": 7.21, "y": 7.28, "z": 4.51 }, { "name": 359, "carat": 0.72, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 62.8, "table": 56, "price": 2805, "x": 5.74, "y": 5.7, "z": 3.59 }, { "name": 43045, "carat": 0.51, "cut": "Ideal", "color": "H", "clarity": "VS2", "depth": 61.6, "table": 55, "price": 1375, "x": 5.16, "y": 5.19, "z": 3.19 }, { "name": 31316, "carat": 0.32, "cut": "Premium", "color": "D", "clarity": "VS2", "depth": 61.7, "table": 58, "price": 758, "x": 4.34, "y": 4.38, "z": 2.69 }, { "name": 26487, "carat": 2.16, "cut": "Very-Good", "color": "I", "clarity": "VS2", "depth": 58.6, "table": 60, "price": 16080, "x": 8.48, "y": 8.55, "z": 4.99 }, { "name": 37415, "carat": 0.38, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 62.2, "table": 56, "price": 983, "x": 4.64, "y": 4.62, "z": 2.88 }, { "name": 24653, "carat": 1.7, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 61.9, "table": 60, "price": 12992, "x": 7.61, "y": 7.57, "z": 4.7 }, { "name": 44128, "carat": 0.5, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 62.1, "table": 62, "price": 1559, "x": 5.1, "y": 5.08, "z": 3.16 }, { "name": 53043, "carat": 0.73, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 61.5, "table": 55, "price": 2605, "x": 5.79, "y": 5.84, "z": 3.57 }, { "name": 28087, "carat": 0.3, "cut": "Very-Good", "color": "D", "clarity": "SI1", "depth": 63.1, "table": 56, "price": 662, "x": 4.28, "y": 4.24, "z": 2.69 }, { "name": 8018, "carat": 1.04, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 58.2, "table": 59, "price": 4330, "x": 6.67, "y": 6.62, "z": 3.87 }, { "name": 33934, "carat": 0.33, "cut": "Premium", "color": "I", "clarity": "VS2", "depth": 62, "table": 60, "price": 463, "x": 4.41, "y": 4.46, "z": 2.75 }, { "name": 18975, "carat": 1.59, "cut": "Premium", "color": "J", "clarity": "VS2", "depth": 62.6, "table": 59, "price": 7811, "x": 7.43, "y": 7.45, "z": 4.66 }, { "name": 41641, "carat": 0.4, "cut": "Ideal", "color": "H", "clarity": "IF", "depth": 62.7, "table": 57, "price": 1238, "x": 4.7, "y": 4.68, "z": 2.94 }, { "name": 11851, "carat": 0.9, "cut": "Very-Good", "color": "G", "clarity": "VVS2", "depth": 59.8, "table": 60, "price": 5102, "x": 6.23, "y": 6.28, "z": 3.74 }, { "name": 3599, "carat": 0.9, "cut": "Good", "color": "D", "clarity": "SI2", "depth": 63.5, "table": 62, "price": 3425, "x": 6.09, "y": 6.13, "z": 3.88 }, { "name": 18389, "carat": 0.29, "cut": "Very-Good", "color": "E", "clarity": "VS1", "depth": 59.2, "table": 58, "price": 619, "x": 4.36, "y": 4.39, "z": 2.59 }, { "name": 15110, "carat": 1.01, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 62.3, "table": 59, "price": 6073, "x": 6.37, "y": 6.44, "z": 3.99 }, { "name": 7929, "carat": 0.93, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 61.7, "table": 55, "price": 4317, "x": 6.26, "y": 6.29, "z": 3.87 }, { "name": 522, "carat": 0.71, "cut": "Premium", "color": "G", "clarity": "VS1", "depth": 62.2, "table": 59, "price": 2825, "x": 5.73, "y": 5.66, "z": 3.54 }, { "name": 51041, "carat": 0.82, "cut": "Premium", "color": "E", "clarity": "SI2", "depth": 60, "table": 56, "price": 2329, "x": 6.11, "y": 6.08, "z": 3.66 }, { "name": 8110, "carat": 1.13, "cut": "Very-Good", "color": "I", "clarity": "VS2", "depth": 61.6, "table": 57, "price": 4348, "x": 6.73, "y": 6.78, "z": 4.16 }, { "name": 19815, "carat": 1.2, "cut": "Good", "color": "E", "clarity": "VS2", "depth": 63.6, "table": 57, "price": 8380, "x": 6.74, "y": 6.68, "z": 4.27 }, { "name": 574, "carat": 0.85, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 62.5, "table": 57, "price": 2833, "x": 6.02, "y": 6.07, "z": 3.78 }, { "name": 40660, "carat": 0.38, "cut": "Ideal", "color": "E", "clarity": "VVS1", "depth": 61.5, "table": 56, "price": 1154, "x": 4.67, "y": 4.7, "z": 2.88 }, { "name": 12900, "carat": 0.9, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 61.9, "table": 54, "price": 5373, "x": 6.19, "y": 6.22, "z": 3.84 }, { "name": 22739, "carat": 1.01, "cut": "Very-Good", "color": "E", "clarity": "VVS1", "depth": 63.1, "table": 59, "price": 10760, "x": 6.34, "y": 6.31, "z": 3.99 }, { "name": 13187, "carat": 1.24, "cut": "Ideal", "color": "J", "clarity": "VS2", "depth": 62.8, "table": 56, "price": 5451, "x": 6.83, "y": 6.8, "z": 4.28 }, { "name": 19103, "carat": 1.01, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 61.1, "table": 59, "price": 7870, "x": 6.46, "y": 6.5, "z": 3.96 }, { "name": 40688, "carat": 0.5, "cut": "Fair", "color": "F", "clarity": "SI2", "depth": 61.1, "table": 67, "price": 1156, "x": 5.07, "y": 5.04, "z": 3.09 }, { "name": 22319, "carat": 1.31, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 62, "table": 58, "price": 10359, "x": 6.97, "y": 7.02, "z": 4.34 }, { "name": 53810, "carat": 0.7, "cut": "Ideal", "color": "H", "clarity": "VS2", "depth": 61.4, "table": 56, "price": 2733, "x": 5.72, "y": 5.75, "z": 3.52 }, { "name": 19096, "carat": 1.11, "cut": "Good", "color": "D", "clarity": "VS2", "depth": 63.2, "table": 57, "price": 7863, "x": 6.61, "y": 6.64, "z": 4.18 }, { "name": 8031, "carat": 1, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 62.9, "table": 56, "price": 4333, "x": 6.42, "y": 6.36, "z": 4.02 }, { "name": 36299, "carat": 0.34, "cut": "Premium", "color": "E", "clarity": "SI2", "depth": 61.7, "table": 58, "price": 477, "x": 4.5, "y": 4.54, "z": 2.79 }, { "name": 23883, "carat": 2, "cut": "Premium", "color": "H", "clarity": "SI2", "depth": 62.8, "table": 57, "price": 11975, "x": 8.05, "y": 8.01, "z": 5.04 }, { "name": 41216, "carat": 0.4, "cut": "Ideal", "color": "F", "clarity": "VVS1", "depth": 61.5, "table": 56, "price": 1206, "x": 4.77, "y": 4.73, "z": 2.92 }, { "name": 9608, "carat": 1.02, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 62.3, "table": 59, "price": 4633, "x": 6.4, "y": 6.44, "z": 4 }, { "name": 19038, "carat": 0.3, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 61.6, "table": 54, "price": 621, "x": 4.32, "y": 4.35, "z": 2.67 }, { "name": 5632, "carat": 0.9, "cut": "Very-Good", "color": "H", "clarity": "VS2", "depth": 62.8, "table": 58, "price": 3878, "x": 6.13, "y": 6.17, "z": 3.86 }, { "name": 49156, "carat": 0.5, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 62.7, "table": 57, "price": 2070, "x": 5.1, "y": 5.07, "z": 3.19 }, { "name": 5298, "carat": 0.71, "cut": "Ideal", "color": "D", "clarity": "VS1", "depth": 62.1, "table": 57, "price": 3801, "x": 5.7, "y": 5.73, "z": 3.55 }, { "name": 2119, "carat": 1.02, "cut": "Fair", "color": "J", "clarity": "SI2", "depth": 65, "table": 59, "price": 3119, "x": 6.34, "y": 6.24, "z": 4.08 }, { "name": 51094, "carat": 0.71, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 60.9, "table": 56, "price": 2335, "x": 5.79, "y": 5.81, "z": 3.53 }, { "name": 47439, "carat": 0.7, "cut": "Very-Good", "color": "J", "clarity": "VS1", "depth": 59.6, "table": 62, "price": 1855, "x": 5.7, "y": 5.77, "z": 3.42 }, { "name": 25418, "carat": 2.01, "cut": "Very-Good", "color": "H", "clarity": "SI2", "depth": 63.2, "table": 57, "price": 14150, "x": 8.02, "y": 7.97, "z": 5.05 }, { "name": 13123, "carat": 1.01, "cut": "Fair", "color": "D", "clarity": "SI1", "depth": 64.7, "table": 57, "price": 5430, "x": 6.33, "y": 6.25, "z": 4.07 }, { "name": 18873, "carat": 1.02, "cut": "Very-Good", "color": "F", "clarity": "VS1", "depth": 61.3, "table": 58, "price": 7740, "x": 6.46, "y": 6.52, "z": 3.98 }, { "name": 42092, "carat": 0.7, "cut": "Fair", "color": "E", "clarity": "I1", "depth": 66.1, "table": 58, "price": 1273, "x": 5.61, "y": 5.51, "z": 3.67 }, { "name": 50627, "carat": 0.3, "cut": "Ideal", "color": "E", "clarity": "SI2", "depth": 60.9, "table": 59, "price": 401, "x": 4.29, "y": 4.32, "z": 2.62 }, { "name": 47097, "carat": 0.53, "cut": "Very-Good", "color": "D", "clarity": "VS2", "depth": 63.4, "table": 55, "price": 1825, "x": 5.23, "y": 5.11, "z": 3.28 }, { "name": 10005, "carat": 0.91, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 61, "table": 57, "price": 4706, "x": 6.27, "y": 6.32, "z": 3.84 }, { "name": 1113, "carat": 0.77, "cut": "Very-Good", "color": "G", "clarity": "SI1", "depth": 63.6, "table": 57, "price": 2915, "x": 5.79, "y": 5.88, "z": 3.71 }, { "name": 23701, "carat": 0.36, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 62.1, "table": 56, "price": 631, "x": 4.56, "y": 4.59, "z": 2.84 }, { "name": 24794, "carat": 1.31, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 60.3, "table": 56, "price": 13168, "x": 7.09, "y": 7.15, "z": 4.29 }, { "name": 44441, "carat": 0.59, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 62.6, "table": 61, "price": 1590, "x": 5.33, "y": 5.27, "z": 3.32 }, { "name": 46988, "carat": 0.46, "cut": "Ideal", "color": "E", "clarity": "VVS1", "depth": 62.6, "table": 53, "price": 1816, "x": 4.93, "y": 4.97, "z": 3.1 }, { "name": 12448, "carat": 1.12, "cut": "Very-Good", "color": "D", "clarity": "SI2", "depth": 59.3, "table": 59, "price": 5243, "x": 6.76, "y": 6.8, "z": 4.02 }, { "name": 19749, "carat": 1.5, "cut": "Premium", "color": "E", "clarity": "SI2", "depth": 62.7, "table": 59, "price": 8316, "x": 7.3, "y": 7.22, "z": 4.55 }, { "name": 45142, "carat": 0.46, "cut": "Ideal", "color": "G", "clarity": "IF", "depth": 62.1, "table": 56, "price": 1654, "x": 4.93, "y": 4.96, "z": 3.07 }, { "name": 47696, "carat": 0.5, "cut": "Ideal", "color": "G", "clarity": "VVS1", "depth": 61.9, "table": 58, "price": 1883, "x": 5.06, "y": 5.09, "z": 3.14 }, { "name": 49860, "carat": 0.77, "cut": "Premium", "color": "E", "clarity": "SI2", "depth": 62.5, "table": 60, "price": 2171, "x": 5.84, "y": 5.8, "z": 3.64 }, { "name": 7552, "carat": 1.01, "cut": "Very-Good", "color": "G", "clarity": "SI2", "depth": 62, "table": 58, "price": 4249, "x": 6.37, "y": 6.41, "z": 3.96 }, { "name": 17985, "carat": 1.07, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 61.9, "table": 55, "price": 7275, "x": 6.55, "y": 6.57, "z": 4.06 }, { "name": 16685, "carat": 0.31, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 61.1, "table": 56, "price": 421, "x": 4.4, "y": 4.42, "z": 2.69 }, { "name": 15057, "carat": 0.3, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 61.4, "table": 57, "price": 605, "x": 4.29, "y": 4.34, "z": 2.65 }, { "name": 35526, "carat": 0.32, "cut": "Ideal", "color": "H", "clarity": "VVS1", "depth": 61.3, "table": 56, "price": 905, "x": 4.42, "y": 4.45, "z": 2.72 }, { "name": 53148, "carat": 0.73, "cut": "Very-Good", "color": "I", "clarity": "VVS1", "depth": 61.9, "table": 57, "price": 2623, "x": 5.75, "y": 5.79, "z": 3.57 }, { "name": 31634, "carat": 0.3, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 62, "table": 56, "price": 450, "x": 4.29, "y": 4.32, "z": 2.67 }, { "name": 44034, "carat": 0.42, "cut": "Ideal", "color": "D", "clarity": "VVS1", "depth": 61.8, "table": 55, "price": 1547, "x": 4.83, "y": 4.85, "z": 2.99 }, { "name": 27518, "carat": 3.01, "cut": "Good", "color": "I", "clarity": "SI2", "depth": 63.9, "table": 60, "price": 18242, "x": 9.06, "y": 9.01, "z": 5.77 }, { "name": 53135, "carat": 0.93, "cut": "Very-Good", "color": "D", "clarity": "I1", "depth": 63.4, "table": 60, "price": 2618, "x": 6.18, "y": 6.15, "z": 3.91 }, { "name": 28628, "carat": 0.28, "cut": "Very-Good", "color": "E", "clarity": "VS1", "depth": 62.8, "table": 60, "price": 434, "x": 4.16, "y": 4.21, "z": 2.63 }, { "name": 15574, "carat": 1.3, "cut": "Premium", "color": "I", "clarity": "VS2", "depth": 62.7, "table": 58, "price": 6246, "x": 6.97, "y": 6.9, "z": 4.35 }, { "name": 52834, "carat": 0.7, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 62, "table": 56, "price": 2573, "x": 5.72, "y": 5.67, "z": 3.53 }, { "name": 7347, "carat": 1.09, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 61.5, "table": 55, "price": 4212, "x": 6.65, "y": 6.68, "z": 4.1 }, { "name": 53637, "carat": 0.3, "cut": "Ideal", "color": "D", "clarity": "SI1", "depth": 61.6, "table": 57, "price": 552, "x": 4.28, "y": 4.32, "z": 2.65 }, { "name": 32902, "carat": 0.36, "cut": "Fair", "color": "F", "clarity": "VS1", "depth": 55.3, "table": 67, "price": 810, "x": 4.79, "y": 4.72, "z": 2.63 }, { "name": 39665, "carat": 0.42, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 60.1, "table": 61, "price": 1087, "x": 4.84, "y": 4.81, "z": 2.9 }, { "name": 47149, "carat": 0.53, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 61.7, "table": 57, "price": 1832, "x": 5.23, "y": 5.21, "z": 3.22 }, { "name": 46510, "carat": 0.57, "cut": "Ideal", "color": "I", "clarity": "IF", "depth": 61, "table": 55, "price": 1779, "x": 5.38, "y": 5.41, "z": 3.29 }, { "name": 2072, "carat": 0.9, "cut": "Good", "color": "I", "clarity": "VS2", "depth": 62.4, "table": 65, "price": 3107, "x": 6.12, "y": 6.09, "z": 3.81 }, { "name": 12517, "carat": 1.01, "cut": "Very-Good", "color": "H", "clarity": "VS2", "depth": 63.1, "table": 59, "price": 5260, "x": 6.34, "y": 6.3, "z": 3.99 }, { "name": 15094, "carat": 1.01, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 62.4, "table": 56, "price": 6066, "x": 6.37, "y": 6.42, "z": 3.99 }, { "name": 24659, "carat": 1.5, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 61.9, "table": 60, "price": 13001, "x": 7.29, "y": 7.32, "z": 4.52 }, { "name": 6714, "carat": 0.3, "cut": "Very-Good", "color": "G", "clarity": "SI1", "depth": 60.1, "table": 58, "price": 413, "x": 4.31, "y": 4.34, "z": 2.6 }, { "name": 33485, "carat": 0.32, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 61.4, "table": 60, "price": 828, "x": 4.42, "y": 4.38, "z": 2.7 }, { "name": 48763, "carat": 0.6, "cut": "Premium", "color": "E", "clarity": "SI1", "depth": 59.6, "table": 59, "price": 2016, "x": 5.52, "y": 5.48, "z": 3.28 }, { "name": 4583, "carat": 1, "cut": "Good", "color": "G", "clarity": "SI2", "depth": 57.8, "table": 64, "price": 3651, "x": 6.55, "y": 6.5, "z": 3.77 }, { "name": 26154, "carat": 2.18, "cut": "Premium", "color": "J", "clarity": "VS2", "depth": 60.1, "table": 58, "price": 15465, "x": 8.46, "y": 8.41, "z": 5.07 }, { "name": 8085, "carat": 1.01, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 62.6, "table": 60, "price": 4338, "x": 6.4, "y": 6.37, "z": 4 }, { "name": 51826, "carat": 0.64, "cut": "Ideal", "color": "H", "clarity": "IF", "depth": 60.5, "table": 57, "price": 2420, "x": 5.58, "y": 5.62, "z": 3.39 }, { "name": 1117, "carat": 0.93, "cut": "Ideal", "color": "I", "clarity": "SI1", "depth": 62, "table": 57, "price": 2917, "x": 6.22, "y": 6.26, "z": 3.87 }, { "name": 52893, "carat": 0.73, "cut": "Very-Good", "color": "G", "clarity": "SI1", "depth": 60.6, "table": 59, "price": 2585, "x": 5.83, "y": 5.85, "z": 3.54 }, { "name": 19444, "carat": 1.06, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 61.7, "table": 57, "price": 8093, "x": 6.52, "y": 6.57, "z": 4.04 }, { "name": 49022, "carat": 0.5, "cut": "Good", "color": "F", "clarity": "VVS2", "depth": 58.5, "table": 62, "price": 2052, "x": 5.23, "y": 5.27, "z": 3.07 }, { "name": 4410, "carat": 0.31, "cut": "Ideal", "color": "D", "clarity": "SI1", "depth": 61.5, "table": 56, "price": 571, "x": 4.33, "y": 4.35, "z": 2.67 }, { "name": 11949, "carat": 1.01, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 58.2, "table": 59, "price": 5132, "x": 6.54, "y": 6.59, "z": 3.82 }, { "name": 35367, "carat": 0.38, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 63, "table": 56, "price": 898, "x": 4.61, "y": 4.57, "z": 2.89 }, { "name": 44863, "carat": 0.51, "cut": "Very-Good", "color": "H", "clarity": "VS1", "depth": 62.3, "table": 56, "price": 1628, "x": 5.1, "y": 5.13, "z": 3.18 }, { "name": 9286, "carat": 0.91, "cut": "Good", "color": "H", "clarity": "VS1", "depth": 57.8, "table": 61, "price": 4566, "x": 6.4, "y": 6.36, "z": 3.69 }, { "name": 17140, "carat": 1.24, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 61.4, "table": 59, "price": 6840, "x": 6.87, "y": 6.91, "z": 4.23 }, { "name": 12365, "carat": 0.26, "cut": "Very-Good", "color": "D", "clarity": "VVS2", "depth": 60.4, "table": 59, "price": 597, "x": 4.15, "y": 4.19, "z": 2.52 }, { "name": 4309, "carat": 1.05, "cut": "Premium", "color": "J", "clarity": "VS2", "depth": 59.4, "table": 62, "price": 3593, "x": 6.66, "y": 6.58, "z": 3.93 }, { "name": 43274, "carat": 0.3, "cut": "Very-Good", "color": "I", "clarity": "SI1", "depth": 63.3, "table": 59, "price": 506, "x": 4.3, "y": 4.23, "z": 2.7 }, { "name": 37781, "carat": 0.39, "cut": "Very-Good", "color": "F", "clarity": "VS1", "depth": 57.1, "table": 61, "price": 1000, "x": 4.86, "y": 4.91, "z": 2.79 }, { "name": 11263, "carat": 0.91, "cut": "Premium", "color": "E", "clarity": "VS1", "depth": 62.8, "table": 60, "price": 4969, "x": 6.11, "y": 6.08, "z": 3.83 }, { "name": 4558, "carat": 0.9, "cut": "Good", "color": "I", "clarity": "VS1", "depth": 63.3, "table": 59, "price": 3644, "x": 6.06, "y": 6.1, "z": 3.85 }, { "name": 5082, "carat": 0.9, "cut": "Fair", "color": "D", "clarity": "SI1", "depth": 65.7, "table": 65, "price": 3751, "x": 6.06, "y": 5.94, "z": 3.94 }, { "name": 47326, "carat": 0.23, "cut": "Very-Good", "color": "D", "clarity": "VVS2", "depth": 62.6, "table": 58, "price": 530, "x": 3.89, "y": 3.94, "z": 2.45 }, { "name": 6256, "carat": 0.92, "cut": "Very-Good", "color": "E", "clarity": "SI2", "depth": 62.1, "table": 58, "price": 4011, "x": 6.18, "y": 6.22, "z": 3.85 }, { "name": 42144, "carat": 0.5, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 60.7, "table": 59, "price": 1281, "x": 5.09, "y": 5.13, "z": 3.1 }, { "name": 418, "carat": 0.36, "cut": "Ideal", "color": "I", "clarity": "VS2", "depth": 61.9, "table": 56, "price": 556, "x": 4.54, "y": 4.57, "z": 2.82 }, { "name": 14065, "carat": 0.3, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 61.8, "table": 57, "price": 605, "x": 4.31, "y": 4.33, "z": 2.67 }, { "name": 24984, "carat": 2.07, "cut": "Very-Good", "color": "J", "clarity": "VS2", "depth": 61.3, "table": 56, "price": 13495, "x": 8.16, "y": 8.2, "z": 5.02 }, { "name": 14917, "carat": 1.23, "cut": "Ideal", "color": "G", "clarity": "SI2", "depth": 58.8, "table": 60, "price": 6005, "x": 7.01, "y": 7.08, "z": 4.14 }, { "name": 21186, "carat": 1.5, "cut": "Good", "color": "H", "clarity": "SI1", "depth": 60.8, "table": 60, "price": 9336, "x": 7.28, "y": 7.38, "z": 4.46 }, { "name": 50869, "carat": 0.71, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 62.1, "table": 57, "price": 2313, "x": 5.68, "y": 5.73, "z": 3.54 }, { "name": 48614, "carat": 0.51, "cut": "Ideal", "color": "F", "clarity": "VVS2", "depth": 61.7, "table": 56, "price": 1998, "x": 5.12, "y": 5.15, "z": 3.17 }, { "name": 19810, "carat": 1, "cut": "Good", "color": "D", "clarity": "VVS2", "depth": 60.2, "table": 62, "price": 8374, "x": 6.42, "y": 6.46, "z": 3.88 }, { "name": 53178, "carat": 0.71, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 61.3, "table": 59, "price": 2630, "x": 5.7, "y": 5.76, "z": 3.51 }, { "name": 3942, "carat": 0.7, "cut": "Premium", "color": "D", "clarity": "VS1", "depth": 61, "table": 59, "price": 3501, "x": 5.79, "y": 5.72, "z": 3.51 }, { "name": 33350, "carat": 0.41, "cut": "Ideal", "color": "G", "clarity": "VS2", "depth": 62.4, "table": 55, "price": 827, "x": 4.73, "y": 4.76, "z": 2.96 }, { "name": 16355, "carat": 0.3, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 62.7, "table": 59, "price": 608, "x": 4.27, "y": 4.22, "z": 2.66 }, { "name": 48815, "carat": 0.56, "cut": "Ideal", "color": "D", "clarity": "VS1", "depth": 61.7, "table": 56, "price": 2026, "x": 5.33, "y": 5.3, "z": 3.28 }, { "name": 36379, "carat": 0.34, "cut": "Ideal", "color": "F", "clarity": "IF", "depth": 62.2, "table": 55, "price": 941, "x": 4.47, "y": 4.5, "z": 2.79 }, { "name": 23233, "carat": 1.52, "cut": "Good", "color": "G", "clarity": "VS2", "depth": 63.3, "table": 57, "price": 11235, "x": 7.27, "y": 7.32, "z": 4.62 }, { "name": 16735, "carat": 0.41, "cut": "Premium", "color": "J", "clarity": "VS2", "depth": 61.9, "table": 59, "price": 611, "x": 4.69, "y": 4.74, "z": 2.92 }, { "name": 3305, "carat": 0.8, "cut": "Very-Good", "color": "F", "clarity": "VS2", "depth": 63.2, "table": 55, "price": 3369, "x": 5.9, "y": 5.88, "z": 3.72 }, { "name": 32639, "carat": 0.32, "cut": "Ideal", "color": "G", "clarity": "SI2", "depth": 61.6, "table": 56, "price": 459, "x": 4.4, "y": 4.43, "z": 2.72 }, { "name": 16684, "carat": 0.31, "cut": "Ideal", "color": "I", "clarity": "VS2", "depth": 61.2, "table": 55, "price": 421, "x": 4.36, "y": 4.4, "z": 2.68 }, { "name": 3527, "carat": 0.9, "cut": "Very-Good", "color": "I", "clarity": "SI1", "depth": 61.8, "table": 56, "price": 3407, "x": 6.19, "y": 6.24, "z": 3.84 }, { "name": 19343, "carat": 1.06, "cut": "Premium", "color": "E", "clarity": "VS1", "depth": 63, "table": 58, "price": 8044, "x": 6.49, "y": 6.46, "z": 4.08 }, { "name": 26878, "carat": 1.4, "cut": "Ideal", "color": "F", "clarity": "VVS1", "depth": 61.9, "table": 57, "price": 16808, "x": 7.2, "y": 7.14, "z": 4.44 }, { "name": 8751, "carat": 1.09, "cut": "Ideal", "color": "J", "clarity": "SI1", "depth": 62.7, "table": 57, "price": 4465, "x": 6.53, "y": 6.59, "z": 4.11 }, { "name": 8286, "carat": 1, "cut": "Very-Good", "color": "F", "clarity": "SI2", "depth": 62.2, "table": 55, "price": 4383, "x": 6.39, "y": 6.44, "z": 3.99 }, { "name": 51952, "carat": 0.56, "cut": "Very-Good", "color": "E", "clarity": "VVS2", "depth": 60.5, "table": 57, "price": 2442, "x": 5.32, "y": 5.36, "z": 3.23 }, { "name": 34442, "carat": 0.31, "cut": "Ideal", "color": "E", "clarity": "VVS2", "depth": 60.9, "table": 55, "price": 864, "x": 4.42, "y": 4.45, "z": 2.7 }, { "name": 7014, "carat": 0.9, "cut": "Premium", "color": "F", "clarity": "SI1", "depth": 61.2, "table": 59, "price": 4158, "x": 6.19, "y": 6.16, "z": 3.78 }, { "name": 13269, "carat": 1, "cut": "Good", "color": "G", "clarity": "VS2", "depth": 63.7, "table": 57, "price": 5484, "x": 6.32, "y": 6.28, "z": 4.01 }, { "name": 49554, "carat": 0.77, "cut": "Premium", "color": "G", "clarity": "SI2", "depth": 61.3, "table": 58, "price": 2129, "x": 5.94, "y": 5.88, "z": 3.62 }, { "name": 52752, "carat": 0.7, "cut": "Fair", "color": "D", "clarity": "VS2", "depth": 65.2, "table": 59, "price": 2560, "x": 5.58, "y": 5.55, "z": 3.63 }, { "name": 12404, "carat": 1.01, "cut": "Good", "color": "E", "clarity": "SI1", "depth": 57.9, "table": 57, "price": 5233, "x": 6.6, "y": 6.67, "z": 3.84 }, { "name": 35073, "carat": 0.38, "cut": "Very-Good", "color": "G", "clarity": "VS1", "depth": 57.1, "table": 63, "price": 886, "x": 4.77, "y": 4.86, "z": 2.75 }, { "name": 37003, "carat": 0.55, "cut": "Very-Good", "color": "J", "clarity": "SI1", "depth": 62.5, "table": 57, "price": 965, "x": 5.22, "y": 5.24, "z": 3.27 }, { "name": 31874, "carat": 0.3, "cut": "Very-Good", "color": "H", "clarity": "VVS2", "depth": 63.1, "table": 60, "price": 776, "x": 4.28, "y": 4.24, "z": 2.69 }, { "name": 51509, "carat": 0.55, "cut": "Ideal", "color": "G", "clarity": "IF", "depth": 61.1, "table": 57, "price": 2383, "x": 5.26, "y": 5.31, "z": 3.23 }, { "name": 24459, "carat": 2.14, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 63, "table": 55, "price": 12720, "x": 8.25, "y": 8.23, "z": 5.19 }, { "name": 14906, "carat": 1.01, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 62.4, "table": 58, "price": 5999, "x": 6.38, "y": 6.41, "z": 3.99 }, { "name": 39677, "carat": 0.41, "cut": "Ideal", "color": "E", "clarity": "VS2", "depth": 62.2, "table": 56, "price": 1087, "x": 4.8, "y": 4.75, "z": 2.97 }, { "name": 31151, "carat": 0.41, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 62.7, "table": 57, "price": 755, "x": 4.7, "y": 4.74, "z": 2.96 }, { "name": 40816, "carat": 0.32, "cut": "Ideal", "color": "E", "clarity": "IF", "depth": 62.6, "table": 55, "price": 1170, "x": 4.41, "y": 4.38, "z": 2.75 }, { "name": 8358, "carat": 1.02, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 60.7, "table": 57, "price": 4398, "x": 6.54, "y": 6.51, "z": 3.96 }, { "name": 13997, "carat": 1.19, "cut": "Very-Good", "color": "H", "clarity": "SI1", "depth": 63.3, "table": 55, "price": 5698, "x": 6.76, "y": 6.69, "z": 4.26 }, { "name": 37791, "carat": 0.38, "cut": "Premium", "color": "E", "clarity": "VS1", "depth": 60.2, "table": 58, "price": 1000, "x": 4.66, "y": 4.71, "z": 2.82 }, { "name": 29983, "carat": 0.43, "cut": "Ideal", "color": "I", "clarity": "VS2", "depth": 62, "table": 55, "price": 716, "x": 4.84, "y": 4.87, "z": 3.01 }, { "name": 8025, "carat": 1.04, "cut": "Very-Good", "color": "H", "clarity": "SI2", "depth": 60.2, "table": 60, "price": 4332, "x": 6.52, "y": 6.57, "z": 3.94 }, { "name": 19245, "carat": 1, "cut": "Ideal", "color": "G", "clarity": "VVS2", "depth": 62.8, "table": 57, "price": 7979, "x": 6.37, "y": 6.43, "z": 4.02 }, { "name": 7650, "carat": 0.9, "cut": "Very-Good", "color": "G", "clarity": "VS2", "depth": 61.9, "table": 56, "price": 4269, "x": 6.17, "y": 6.23, "z": 3.84 }, { "name": 7293, "carat": 0.91, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 61.9, "table": 59, "price": 4201, "x": 6.18, "y": 6.23, "z": 3.84 }, { "name": 38677, "carat": 0.3, "cut": "Ideal", "color": "D", "clarity": "VVS2", "depth": 61.4, "table": 55, "price": 1041, "x": 4.34, "y": 4.36, "z": 2.67 }, { "name": 7857, "carat": 0.9, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 62.7, "table": 58, "price": 4304, "x": 6.15, "y": 6.09, "z": 3.84 }, { "name": 26152, "carat": 1.59, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 60.2, "table": 60, "price": 15461, "x": 7.59, "y": 7.62, "z": 4.58 }, { "name": 33184, "carat": 0.41, "cut": "Very-Good", "color": "D", "clarity": "SI2", "depth": 63.1, "table": 54, "price": 818, "x": 4.75, "y": 4.72, "z": 2.99 }, { "name": 50219, "carat": 0.7, "cut": "Premium", "color": "F", "clarity": "SI1", "depth": 61.9, "table": 58, "price": 2230, "x": 5.69, "y": 5.74, "z": 3.54 }, { "name": 953, "carat": 0.74, "cut": "Ideal", "color": "F", "clarity": "SI1", "depth": 61.2, "table": 56, "price": 2889, "x": 5.83, "y": 5.87, "z": 3.58 }, { "name": 36020, "carat": 0.39, "cut": "Premium", "color": "J", "clarity": "VVS1", "depth": 62.8, "table": 58, "price": 921, "x": 4.66, "y": 4.61, "z": 2.91 }, { "name": 22495, "carat": 2, "cut": "Premium", "color": "I", "clarity": "SI2", "depth": 62.3, "table": 57, "price": 10528, "x": 8.12, "y": 8.05, "z": 5.03 }, { "name": 49933, "carat": 0.7, "cut": "Premium", "color": "H", "clarity": "VS2", "depth": 62.2, "table": 58, "price": 2184, "x": 5.74, "y": 5.68, "z": 3.55 }, { "name": 45578, "carat": 0.52, "cut": "Very-Good", "color": "G", "clarity": "VS1", "depth": 61.7, "table": 56, "price": 1689, "x": 5.17, "y": 5.21, "z": 3.2 }, { "name": 36476, "carat": 0.43, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 61.3, "table": 57, "price": 943, "x": 4.85, "y": 4.88, "z": 2.98 }, { "name": 46118, "carat": 0.56, "cut": "Premium", "color": "I", "clarity": "VVS1", "depth": 60.6, "table": 59, "price": 1743, "x": 5.33, "y": 5.29, "z": 3.22 }, { "name": 18425, "carat": 1, "cut": "Good", "color": "G", "clarity": "VVS2", "depth": 60.9, "table": 56, "price": 7492, "x": 6.49, "y": 6.52, "z": 3.96 }, { "name": 20052, "carat": 0.31, "cut": "Very-Good", "color": "G", "clarity": "VS1", "depth": 62.9, "table": 58, "price": 625, "x": 4.3, "y": 4.35, "z": 2.72 }, { "name": 23070, "carat": 1.18, "cut": "Ideal", "color": "E", "clarity": "VS1", "depth": 61.4, "table": 57, "price": 11104, "x": 6.77, "y": 6.81, "z": 4.17 }, { "name": 5621, "carat": 0.9, "cut": "Fair", "color": "E", "clarity": "VS2", "depth": 65.2, "table": 61, "price": 3875, "x": 6.01, "y": 5.98, "z": 3.91 }, { "name": 23086, "carat": 1.22, "cut": "Ideal", "color": "G", "clarity": "IF", "depth": 61.7, "table": 56, "price": 11111, "x": 6.87, "y": 6.91, "z": 4.25 }, { "name": 32452, "carat": 0.39, "cut": "Very-Good", "color": "E", "clarity": "VS2", "depth": 60.9, "table": 58, "price": 793, "x": 4.72, "y": 4.77, "z": 2.89 }, { "name": 51242, "carat": 0.71, "cut": "Very-Good", "color": "H", "clarity": "SI1", "depth": 62.1, "table": 61, "price": 2354, "x": 5.63, "y": 5.71, "z": 3.52 }, { "name": 29987, "carat": 0.32, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 61.9, "table": 57, "price": 716, "x": 4.38, "y": 4.41, "z": 2.72 }, { "name": 33731, "carat": 0.35, "cut": "Ideal", "color": "H", "clarity": "VVS1", "depth": 60.5, "table": 57, "price": 839, "x": 4.58, "y": 4.59, "z": 2.77 }, { "name": 26961, "carat": 1.54, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 61, "table": 56, "price": 17029, "x": 7.44, "y": 7.49, "z": 4.55 }, { "name": 18070, "carat": 1.03, "cut": "Ideal", "color": "F", "clarity": "VS1", "depth": 60.7, "table": 56, "price": 7296, "x": 6.54, "y": 6.6, "z": 3.99 }, { "name": 26610, "carat": 2.1, "cut": "Premium", "color": "F", "clarity": "SI2", "depth": 62.1, "table": 59, "price": 16357, "x": 8.16, "y": 8.18, "z": 5.07 }, { "name": 6364, "carat": 0.32, "cut": "Ideal", "color": "I", "clarity": "VS2", "depth": 63, "table": 55, "price": 576, "x": 4.39, "y": 4.34, "z": 2.75 }, { "name": 25341, "carat": 2, "cut": "Good", "color": "H", "clarity": "VS2", "depth": 57.3, "table": 59, "price": 14042, "x": 8.27, "y": 8.24, "z": 4.73 }, { "name": 51779, "carat": 0.61, "cut": "Very-Good", "color": "G", "clarity": "IF", "depth": 63, "table": 58, "price": 2411, "x": 5.36, "y": 5.43, "z": 3.4 }, { "name": 16733, "carat": 0.4, "cut": "Very-Good", "color": "E", "clarity": "SI2", "depth": 61.6, "table": 55, "price": 611, "x": 4.75, "y": 4.83, "z": 2.95 }, { "name": 35767, "carat": 0.4, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 60.7, "table": 60, "price": 912, "x": 4.7, "y": 4.75, "z": 2.87 }, { "name": 50150, "carat": 0.71, "cut": "Good", "color": "E", "clarity": "SI2", "depth": 57.8, "table": 60, "price": 2215, "x": 5.86, "y": 5.83, "z": 3.38 }, { "name": 31875, "carat": 0.3, "cut": "Good", "color": "H", "clarity": "VVS2", "depth": 63.6, "table": 55, "price": 776, "x": 4.28, "y": 4.24, "z": 2.71 }, { "name": 45135, "carat": 0.56, "cut": "Premium", "color": "H", "clarity": "VS1", "depth": 59.8, "table": 62, "price": 1653, "x": 5.36, "y": 5.31, "z": 3.19 }, { "name": 6666, "carat": 1.11, "cut": "Premium", "color": "G", "clarity": "SI1", "depth": 60.9, "table": 59, "price": 4096, "x": 6.69, "y": 6.64, "z": 4.07 }, { "name": 16061, "carat": 1.01, "cut": "Premium", "color": "F", "clarity": "VS2", "depth": 59.2, "table": 60, "price": 6416, "x": 6.51, "y": 6.54, "z": 3.86 }, { "name": 31800, "carat": 0.42, "cut": "Ideal", "color": "I", "clarity": "VS1", "depth": 62, "table": 55, "price": 773, "x": 4.83, "y": 4.85, "z": 3 }, { "name": 43689, "carat": 0.5, "cut": "Good", "color": "D", "clarity": "SI1", "depth": 62.9, "table": 59, "price": 1436, "x": 4.94, "y": 5.01, "z": 3.13 }, { "name": 4105, "carat": 1, "cut": "Good", "color": "J", "clarity": "SI2", "depth": 57.8, "table": 61, "price": 3536, "x": 6.54, "y": 6.58, "z": 3.79 }, { "name": 51131, "carat": 0.58, "cut": "Ideal", "color": "F", "clarity": "VVS2", "depth": 62, "table": 55, "price": 2340, "x": 5.32, "y": 5.4, "z": 3.31 }, { "name": 8914, "carat": 1.05, "cut": "Ideal", "color": "I", "clarity": "SI1", "depth": 61, "table": 57, "price": 4494, "x": 6.55, "y": 6.62, "z": 4.02 }, { "name": 40374, "carat": 0.43, "cut": "Premium", "color": "E", "clarity": "VS1", "depth": 62.3, "table": 58, "price": 1131, "x": 4.78, "y": 4.82, "z": 2.99 }, { "name": 22527, "carat": 1.01, "cut": "Good", "color": "E", "clarity": "VVS1", "depth": 63.1, "table": 59, "price": 10567, "x": 6.31, "y": 6.34, "z": 3.99 }, { "name": 51692, "carat": 0.7, "cut": "Fair", "color": "F", "clarity": "VS1", "depth": 55.9, "table": 62, "price": 2399, "x": 5.94, "y": 5.83, "z": 3.29 }, { "name": 35824, "carat": 0.31, "cut": "Ideal", "color": "F", "clarity": "IF", "depth": 62.2, "table": 54, "price": 914, "x": 4.37, "y": 4.41, "z": 2.73 }, { "name": 10987, "carat": 1.01, "cut": "Very-Good", "color": "E", "clarity": "SI1", "depth": 62.6, "table": 57, "price": 4912, "x": 6.36, "y": 6.41, "z": 4 }, { "name": 52052, "carat": 0.72, "cut": "Good", "color": "I", "clarity": "VS1", "depth": 61.3, "table": 63, "price": 2451, "x": 5.67, "y": 5.75, "z": 3.5 }, { "name": 22500, "carat": 1.28, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 62.1, "table": 56, "price": 10537, "x": 6.97, "y": 6.94, "z": 4.32 }, { "name": 31124, "carat": 0.43, "cut": "Very-Good", "color": "G", "clarity": "SI1", "depth": 60.4, "table": 58, "price": 754, "x": 4.87, "y": 4.9, "z": 2.95 }, { "name": 48333, "carat": 0.62, "cut": "Ideal", "color": "D", "clarity": "SI1", "depth": 62.2, "table": 55, "price": 1959, "x": 5.45, "y": 5.51, "z": 3.41 }, { "name": 29226, "carat": 0.31, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 62.7, "table": 57, "price": 695, "x": 4.34, "y": 4.31, "z": 2.71 }, { "name": 33982, "carat": 0.41, "cut": "Good", "color": "G", "clarity": "VS1", "depth": 63.3, "table": 62, "price": 847, "x": 4.67, "y": 4.71, "z": 2.97 }, { "name": 1025, "carat": 0.72, "cut": "Premium", "color": "D", "clarity": "SI1", "depth": 61.4, "table": 59, "price": 2903, "x": 5.79, "y": 5.71, "z": 3.53 }, { "name": 17902, "carat": 1.01, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 61.6, "table": 56, "price": 7229, "x": 6.48, "y": 6.45, "z": 3.98 }, { "name": 43848, "carat": 0.52, "cut": "Premium", "color": "G", "clarity": "VS2", "depth": 60.9, "table": 58, "price": 1447, "x": 5.19, "y": 5.22, "z": 3.17 }, { "name": 42493, "carat": 0.52, "cut": "Very-Good", "color": "H", "clarity": "VS1", "depth": 59.6, "table": 57, "price": 1320, "x": 5.25, "y": 5.34, "z": 3.15 }, { "name": 4932, "carat": 0.9, "cut": "Good", "color": "H", "clarity": "SI1", "depth": 61.4, "table": 60, "price": 3730, "x": 6.06, "y": 6.12, "z": 3.74 }, { "name": 9558, "carat": 1.1, "cut": "Ideal", "color": "H", "clarity": "SI2", "depth": 62.6, "table": 56, "price": 4620, "x": 6.65, "y": 6.57, "z": 4.14 }, { "name": 30468, "carat": 0.31, "cut": "Very-Good", "color": "D", "clarity": "SI1", "depth": 63.1, "table": 57, "price": 732, "x": 4.32, "y": 4.3, "z": 2.72 }, { "name": 16197, "carat": 1.2, "cut": "Ideal", "color": "H", "clarity": "SI1", "depth": 62.2, "table": 56, "price": 6471, "x": 6.8, "y": 6.77, "z": 4.23 }, { "name": 27606, "carat": 2.09, "cut": "Good", "color": "F", "clarity": "SI2", "depth": 63.4, "table": 55, "price": 18472, "x": 8.11, "y": 8.18, "z": 5.16 }, { "name": 32054, "carat": 0.35, "cut": "Ideal", "color": "D", "clarity": "SI1", "depth": 61.1, "table": 56, "price": 780, "x": 4.55, "y": 4.59, "z": 2.79 }, { "name": 21823, "carat": 1.51, "cut": "Premium", "color": "D", "clarity": "SI2", "depth": 63, "table": 62, "price": 9894, "x": 7.28, "y": 7.23, "z": 4.57 }, { "name": 5928, "carat": 0.92, "cut": "Ideal", "color": "E", "clarity": "SI2", "depth": 62.1, "table": 53, "price": 3941, "x": 6.25, "y": 6.22, "z": 3.87 }, { "name": 746, "carat": 0.33, "cut": "Premium", "color": "J", "clarity": "VS1", "depth": 61.5, "table": 61, "price": 557, "x": 4.46, "y": 4.39, "z": 2.72 }, { "name": 28751, "carat": 0.31, "cut": "Premium", "color": "E", "clarity": "VS2", "depth": 60.3, "table": 58, "price": 680, "x": 4.37, "y": 4.42, "z": 2.65 }, { "name": 49323, "carat": 0.72, "cut": "Very-Good", "color": "J", "clarity": "VVS1", "depth": 61.4, "table": 61, "price": 2093, "x": 5.7, "y": 5.77, "z": 3.52 }, { "name": 15282, "carat": 1.04, "cut": "Ideal", "color": "H", "clarity": "VS2", "depth": 62.2, "table": 57, "price": 6133, "x": 6.46, "y": 6.49, "z": 4.03 }, { "name": 13423, "carat": 0.9, "cut": "Very-Good", "color": "D", "clarity": "VS1", "depth": 63.4, "table": 58, "price": 5511, "x": 6.15, "y": 6.09, "z": 3.88 }, { "name": 42237, "carat": 0.64, "cut": "Very-Good", "color": "H", "clarity": "SI2", "depth": 64.2, "table": 58, "price": 1292, "x": 5.43, "y": 5.48, "z": 3.5 }, { "name": 32596, "carat": 0.3, "cut": "Ideal", "color": "F", "clarity": "VVS1", "depth": 61.2, "table": 55, "price": 802, "x": 4.33, "y": 4.36, "z": 2.66 }, { "name": 1348, "carat": 0.71, "cut": "Ideal", "color": "G", "clarity": "VS1", "depth": 62.2, "table": 56, "price": 2962, "x": 5.69, "y": 5.72, "z": 3.55 }, { "name": 16066, "carat": 1.01, "cut": "Ideal", "color": "F", "clarity": "VS2", "depth": 62, "table": 56, "price": 6416, "x": 6.46, "y": 6.51, "z": 4.02 }, { "name": 7871, "carat": 0.9, "cut": "Good", "color": "G", "clarity": "VS2", "depth": 63.7, "table": 60, "price": 4309, "x": 6.02, "y": 5.98, "z": 3.82 }, { "name": 34729, "carat": 0.34, "cut": "Ideal", "color": "E", "clarity": "VS1", "depth": 60.3, "table": 57, "price": 875, "x": 4.52, "y": 4.54, "z": 2.73 }, { "name": 45616, "carat": 0.5, "cut": "Very-Good", "color": "F", "clarity": "VS1", "depth": 62, "table": 58, "price": 1692, "x": 5.08, "y": 5.11, "z": 3.16 }, { "name": 6640, "carat": 0.85, "cut": "Ideal", "color": "E", "clarity": "SI1", "depth": 63, "table": 56, "price": 4089, "x": 6, "y": 6.04, "z": 3.79 }];
exports.dataMapping = [
    {
        dataKey: 'carat',
        mark: 'column',
    }, {
        dataKey: 'price',
        mark: 'row',
    }, {
        dataKey: 'cut',
        mark: 'color',
    }
];
exports.scale = [{
        dataKey: 'carat',
        sync: true
    }, {
        dataKey: 'price',
        sync: true,
        tickCount: 3
    }, {
        dataKey: 'cut',
        sync: true,
    }];


/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bar/example1/react.js": 229,
	"./facet/example1/react.js": 230
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 228;

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const template = `
import { Chart, Tooltip, Axis, StackBar, LiteChart } from '../../../packages/viser-react/src/index';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data, dataMapping, dataPre, scale } from './data'

class App extends React.Component {
  state = {
    height: 400,
    lineWidth: 1
  }

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.setState({
      height: 600,
      lineWidth: 10,
    })
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.handleClick}>Click</button> */}
        <Chart forceFit height={this.state.height} data={data} dataPre={dataPre} dataMapping={dataMapping} scale={scale}>
          <Tooltip />
          <Axis />
          <StackBar style={{ stroke: '#fff', lineWidth: this.state.lineWidth }} />
        </Chart>
        {/* <LiteChart height={400} data={data} dataPre={dataPre} dataMapping={dataMapping} forceFit stackBar /> */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
`;
/* harmony export (immutable) */ __webpack_exports__["template"] = template;



/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const template = `
import { Chart, Facet, View, Tooltip, Legend, Axis, Point, FacetView } from '../../../packages/viser-react/src/index';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { chartData, dataMapping, scale } from './data'

class App extends React.Component {
  render() {
    return (
      <div>
        <Chart forceFit={true} height={600} data={chartData} dataMapping={dataMapping} scale={scale}>
          <Tooltip />
          <Facet type="rect" fields={['cut', 'clarity']}>
            <FacetView>
              <Tooltip />
              <Axis />
              <Point opacity={0.3} size={3} />
            </FacetView>
          </Facet>
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
`;
/* harmony export (immutable) */ __webpack_exports__["template"] = template;




/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bar/example1/vue.js": 232,
	"./facet/example1/vue.js": 233
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 231;

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const template = `
<template>
  <div>
    <!-- <button v-on:click="handleClick">Click</button> -->
    <v-chart :force-fit="true" :height="height" :data="data" :data-pre="dataPre" :data-mapping="dataMapping" :scale="scale">
      <v-tooltip />
      <v-axis />
      <v-stack-bar :v-style="stackBarStyle" />
    </v-chart>
    <!-- <v-lite-chart :stack-bar="true" :height="400" :data="data" :data-pre="dataPre" :dataMapping="dataMapping" :forceFit="true" /> -->
  </div>
</template>

<script>
import { data, dataMapping, dataPre, scale } from "./data";

export default {
  data() {
    return {
      data,
      dataMapping,
      dataPre,
      scale,
      height: 400,
      stackBarStyle: {
        stroke: "#fff",
        lineWidth: 1
      }
    };
  },
  methods: {
    handleClick: function() {
      this.height = 600;
      this.stackBarStyle.lineWidth = 10;
    }
  }
};
</script>

<style scoped>

</style>
`;
/* harmony export (immutable) */ __webpack_exports__["template"] = template;


/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const template = `
<template>
  <div>
    <v-chart :force-fit="true" :height="600" :data="chartData" :data-mapping="dataMapping" :scale="scale">
      <v-tooltip />
      <v-facet :type="'rect'" :fields="['cut', 'clarity']">
        <v-facet-view>
          <v-axis />
          <v-tooltip />
          <v-point :opacity="0.3" :size="3" />
        </v-facet-view>
      </v-facet>
    </v-chart>
  </div>
</template>

<script>
import { chartData, dataMapping, scale } from "./data";

export default {
  data() {
    return {
      chartData,
      dataMapping,
      scale
    };
  },
  methods: {}
};
</script>

<style scoped>

</style>
`;
/* harmony export (immutable) */ __webpack_exports__["template"] = template;



/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bar/example1/angular.js": 235,
	"./facet/example1/angular.js": 236
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 234;

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const template = `
import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from '../../../packages/viser-ng/src/index';
import { data, dataMapping, dataPre, scale } from './data'

@Component({
  selector: '#mount',
  template: \`
  <div>
    <Chart [forceFit]="forceFit" [height]="height" [data]="data" [dataPre]="dataPre" [dataMapping]="dataMapping" [scale]="scale">
      <Tooltip></Tooltip>
      <Axis></Axis>
      <StackBar [ngStyle]="{ stroke: '#fff', lineWidth: 1 }" ></StackBar>
    </Chart>
    <LiteChart stackBar="true" [height]="height" [data]="data" [dataMapping]="dataMapping" [forceFit]="forceFit"></LiteChart>
  </div>
  \`
})

class AppComponent {
  forceFit: boolean= true;
  height: number = 400;
  data = data;
  dataPre = dataPre;
  dataMapping = dataMapping;
  scale = scale;
  fields = ['cut', 'clarity'];
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ViserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
`;
/* harmony export (immutable) */ __webpack_exports__["template"] = template;



/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const template = `
import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from '../../../packages/viser-ng/src/index';
import { chartData, dataMapping, scale } from './data'

@Component({
  selector: '#mount',
  template: \`
  <div>
    <Chart [forceFit]="forceFit" [height]="600" [data]="chartData" [dataMapping]="dataMapping" [scale]="scale">
      <Tooltip></Tooltip>
      <Facet type="rect" [fields]="fields">
        <FacetView>
          <Axis></Axis>
          <Tooltip></Tooltip>
          <Point opacity="0.3" size="3"></Point>
        </FacetView>
      </Facet>
    </Chart>
  </div>
  \`
})

export class AppComponent {
  forceFit: boolean= true;
  height: number = 600;
  chartData = chartData;
  dataMapping = dataMapping;
  scale = scale;
  fields = ['cut', 'clarity'];
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ViserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
`;
/* harmony export (immutable) */ __webpack_exports__["template"] = template;



/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

var badChars = /[&<>"'`=]/g,
    possible = /[&<>"'`=]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

var toString = Object.prototype.toString;

exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  exports.isFunction = isFunction = function (value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
exports.isFunction = isFunction;

/* eslint-enable func-style */

/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};

exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.

function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function escapeExpression(string) {
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
  }

  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}

function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function createFrame(object) {
  var frame = extend({}, object);
  frame._parent = object;
  return frame;
}

function blockParams(params, ids) {
  params.path = ids;
  return params;
}

function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE1BQU0sR0FBRztBQUNiLEtBQUcsRUFBRSxPQUFPO0FBQ1osS0FBRyxFQUFFLE1BQU07QUFDWCxLQUFHLEVBQUUsTUFBTTtBQUNYLEtBQUcsRUFBRSxRQUFRO0FBQ2IsS0FBRyxFQUFFLFFBQVE7QUFDYixLQUFHLEVBQUUsUUFBUTtBQUNiLEtBQUcsRUFBRSxRQUFRO0NBQ2QsQ0FBQzs7QUFFRixJQUFNLFFBQVEsR0FBRyxZQUFZO0lBQ3ZCLFFBQVEsR0FBRyxXQUFXLENBQUM7O0FBRTdCLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUN2QixTQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNwQjs7QUFFTSxTQUFTLE1BQU0sQ0FBQyxHQUFHLG9CQUFtQjtBQUMzQyxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxTQUFLLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUM1QixVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFDM0QsV0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUM5QjtLQUNGO0dBQ0Y7O0FBRUQsU0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFTSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0FBS2hELElBQUksVUFBVSxHQUFHLG9CQUFTLEtBQUssRUFBRTtBQUMvQixTQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztDQUNwQyxDQUFDOzs7QUFHRixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNuQixVQUlNLFVBQVUsR0FKaEIsVUFBVSxHQUFHLFVBQVMsS0FBSyxFQUFFO0FBQzNCLFdBQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssbUJBQW1CLENBQUM7R0FDcEYsQ0FBQztDQUNIO1FBQ08sVUFBVSxHQUFWLFVBQVU7Ozs7O0FBSVgsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxVQUFTLEtBQUssRUFBRTtBQUN0RCxTQUFPLEFBQUMsS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsR0FBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixHQUFHLEtBQUssQ0FBQztDQUNqRyxDQUFDOzs7OztBQUdLLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDcEMsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRCxRQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDdEIsYUFBTyxDQUFDLENBQUM7S0FDVjtHQUNGO0FBQ0QsU0FBTyxDQUFDLENBQUMsQ0FBQztDQUNYOztBQUdNLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0FBQ3ZDLE1BQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFOztBQUU5QixRQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQzNCLGFBQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3hCLE1BQU0sSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3pCLGFBQU8sRUFBRSxDQUFDO0tBQ1gsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2xCLGFBQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7QUFLRCxVQUFNLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztHQUN0Qjs7QUFFRCxNQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUFFLFdBQU8sTUFBTSxDQUFDO0dBQUU7QUFDOUMsU0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztDQUM3Qzs7QUFFTSxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDN0IsTUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQ3pCLFdBQU8sSUFBSSxDQUFDO0dBQ2IsTUFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUMvQyxXQUFPLElBQUksQ0FBQztHQUNiLE1BQU07QUFDTCxXQUFPLEtBQUssQ0FBQztHQUNkO0NBQ0Y7O0FBRU0sU0FBUyxXQUFXLENBQUMsTUFBTSxFQUFFO0FBQ2xDLE1BQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0IsT0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDdkIsU0FBTyxLQUFLLENBQUM7Q0FDZDs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLFFBQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLFNBQU8sTUFBTSxDQUFDO0NBQ2Y7O0FBRU0sU0FBUyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFO0FBQ2pELFNBQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUEsR0FBSSxFQUFFLENBQUM7Q0FDcEQiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlc2NhcGUgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG5jb25zdCBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG4gICAgICBwb3NzaWJsZSA9IC9bJjw+XCInYD1dLztcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcihjaHIpIHtcbiAgcmV0dXJuIGVzY2FwZVtjaHJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKG9iai8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgbGV0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuLyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xubGV0IGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfTtcbn1cbmV4cG9ydCB7aXNGdW5jdGlvbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZ1bmMtc3R5bGUgKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpID8gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScgOiBmYWxzZTtcbn07XG5cbi8vIE9sZGVyIElFIHZlcnNpb25zIGRvIG5vdCBkaXJlY3RseSBzdXBwb3J0IGluZGV4T2Ygc28gd2UgbXVzdCBpbXBsZW1lbnQgb3VyIG93biwgc2FkbHkuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZihhcnJheSwgdmFsdWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuICAgICAgcmV0dXJuIHN0cmluZy50b0hUTUwoKTtcbiAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXG4gICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gIH1cblxuICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkgeyByZXR1cm4gc3RyaW5nOyB9XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShiYWRDaGFycywgZXNjYXBlQ2hhcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG4gIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZyYW1lKG9iamVjdCkge1xuICBsZXQgZnJhbWUgPSBleHRlbmQoe30sIG9iamVjdCk7XG4gIGZyYW1lLl9wYXJlbnQgPSBvYmplY3Q7XG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJsb2NrUGFyYW1zKHBhcmFtcywgaWRzKSB7XG4gIHBhcmFtcy5wYXRoID0gaWRzO1xuICByZXR1cm4gcGFyYW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ29udGV4dFBhdGgoY29udGV4dFBhdGgsIGlkKSB7XG4gIHJldHVybiAoY29udGV4dFBhdGggPyBjb250ZXh0UGF0aCArICcuJyA6ICcnKSArIGlkO1xufVxuIl19


/***/ }),

/***/ 41:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(43);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 43:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var loc = node && node.loc,
      line = undefined,
      column = undefined;
  if (loc) {
    line = loc.start.line;
    column = loc.start.column;

    message += ' - ' + line + ':' + column;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  /* istanbul ignore else */
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Exception);
  }

  try {
    if (loc) {
      this.lineNumber = line;

      // Work around issue under safari where we can't directly set the column value
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(this, 'column', {
          value: column,
          enumerable: true
        });
      } else {
        this.column = column;
      }
    }
  } catch (nop) {
    /* Ignore if the browser is very particular */
  }
}

Exception.prototype = new Error();

exports['default'] = Exception;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsSUFBTSxVQUFVLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFbkcsU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUNoQyxNQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUc7TUFDdEIsSUFBSSxZQUFBO01BQ0osTUFBTSxZQUFBLENBQUM7QUFDWCxNQUFJLEdBQUcsRUFBRTtBQUNQLFFBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztBQUN0QixVQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7O0FBRTFCLFdBQU8sSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7R0FDeEM7O0FBRUQsTUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzs7O0FBRzFELE9BQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQ2hELFFBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7R0FDOUM7OztBQUdELE1BQUksS0FBSyxDQUFDLGlCQUFpQixFQUFFO0FBQzNCLFNBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7R0FDMUM7O0FBRUQsTUFBSTtBQUNGLFFBQUksR0FBRyxFQUFFO0FBQ1AsVUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Ozs7QUFJdkIsVUFBSSxNQUFNLENBQUMsY0FBYyxFQUFFO0FBQ3pCLGNBQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUNwQyxlQUFLLEVBQUUsTUFBTTtBQUNiLG9CQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDLENBQUM7T0FDSixNQUFNO0FBQ0wsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7T0FDdEI7S0FDRjtHQUNGLENBQUMsT0FBTyxHQUFHLEVBQUU7O0dBRWI7Q0FDRjs7QUFFRCxTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7O3FCQUVuQixTQUFTIiwiZmlsZSI6ImV4Y2VwdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZXJyb3JQcm9wcyA9IFsnZGVzY3JpcHRpb24nLCAnZmlsZU5hbWUnLCAnbGluZU51bWJlcicsICdtZXNzYWdlJywgJ25hbWUnLCAnbnVtYmVyJywgJ3N0YWNrJ107XG5cbmZ1bmN0aW9uIEV4Y2VwdGlvbihtZXNzYWdlLCBub2RlKSB7XG4gIGxldCBsb2MgPSBub2RlICYmIG5vZGUubG9jLFxuICAgICAgbGluZSxcbiAgICAgIGNvbHVtbjtcbiAgaWYgKGxvYykge1xuICAgIGxpbmUgPSBsb2Muc3RhcnQubGluZTtcbiAgICBjb2x1bW4gPSBsb2Muc3RhcnQuY29sdW1uO1xuXG4gICAgbWVzc2FnZSArPSAnIC0gJyArIGxpbmUgKyAnOicgKyBjb2x1bW47XG4gIH1cblxuICBsZXQgdG1wID0gRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWVzc2FnZSk7XG5cbiAgLy8gVW5mb3J0dW5hdGVseSBlcnJvcnMgYXJlIG5vdCBlbnVtZXJhYmxlIGluIENocm9tZSAoYXQgbGVhc3QpLCBzbyBgZm9yIHByb3AgaW4gdG1wYCBkb2Vzbid0IHdvcmsuXG4gIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGVycm9yUHJvcHMubGVuZ3RoOyBpZHgrKykge1xuICAgIHRoaXNbZXJyb3JQcm9wc1tpZHhdXSA9IHRtcFtlcnJvclByb3BzW2lkeF1dO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgRXhjZXB0aW9uKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGxvYykge1xuICAgICAgdGhpcy5saW5lTnVtYmVyID0gbGluZTtcblxuICAgICAgLy8gV29yayBhcm91bmQgaXNzdWUgdW5kZXIgc2FmYXJpIHdoZXJlIHdlIGNhbid0IGRpcmVjdGx5IHNldCB0aGUgY29sdW1uIHZhbHVlXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ2NvbHVtbicsIHtcbiAgICAgICAgICB2YWx1ZTogY29sdW1uLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbHVtbiA9IGNvbHVtbjtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKG5vcCkge1xuICAgIC8qIElnbm9yZSBpZiB0aGUgYnJvd3NlciBpcyB2ZXJ5IHBhcnRpY3VsYXIgKi9cbiAgfVxufVxuXG5FeGNlcHRpb24ucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEV4Y2VwdGlvbjtcbiJdfQ==


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = __webpack_require__(205)['default'];


/***/ }),

/***/ 78:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });