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
/******/ 	return __webpack_require__(__webpack_require__.s = 862);
/******/ })
/************************************************************************/
/******/ ({

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var oui_dom_utils_1 = __webpack_require__(34);
var oui_dom_events_1 = __webpack_require__(35);
/**
 * Language Utils
 */
exports.ALL_PAGE_LANGUAGES = ['en', 'cn'];
exports.DEFAULT_PAGE_LANGUAGE = 'en';
exports.getPageLanguage = function () {
    var pageLanguageInStore = window.localStorage.getItem('page_language');
    if (pageLanguageInStore && exports.ALL_PAGE_LANGUAGES.indexOf(pageLanguageInStore) !== -1) {
        return pageLanguageInStore;
    }
    return null;
};
exports.setPageLanguage = function (language) {
    window.localStorage.setItem('page_language', language);
};
exports.initPageLanguage = function () {
    var pageLanguageInStore = exports.getPageLanguage();
    if (!pageLanguageInStore) {
        // Optimise for Chinese user
        var navigatorLanguage = (window.navigator.language).toLowerCase();
        if (navigatorLanguage && navigatorLanguage.indexOf('cn') !== -1) {
            exports.setPageLanguage('cn');
        }
        else {
            exports.setPageLanguage(exports.DEFAULT_PAGE_LANGUAGE);
        }
    }
};
exports.changePageLanguage = function () {
    var pageLanguageInStore = exports.getPageLanguage();
    if (pageLanguageInStore && pageLanguageInStore === 'en') {
        exports.setPageLanguage('cn');
    }
    else if (pageLanguageInStore && pageLanguageInStore === 'cn') {
        exports.setPageLanguage('en');
    }
    else {
        exports.setPageLanguage(exports.DEFAULT_PAGE_LANGUAGE);
    }
};
exports.getNameByLanguage = function (o) {
    var language = exports.getPageLanguage();
    switch (language) {
        case 'en': {
            if (o && o.enName) {
                return o.enName;
            }
            return '';
        }
        case 'cn': {
            if (o && o.cnName) {
                return o.cnName;
            }
            return '';
        }
        default: {
            return '';
        }
    }
};
/**
 * Route Utils
 */
exports.generateHashtag = function (folder, item) {
    if (folder && item) {
        return "#/" + folder + "/" + item;
    }
    else if (folder) {
        return "#/" + folder + "/" + item;
    }
    return '#';
};
exports.getFolderAndItem = function () {
    var hash = window.location.hash;
    var hashReg = /^#?\/?([^\/]*)\/?([^\/]*)\/?$/;
    // Test Case
    // console.log(hashReg.exec('#/'));
    // console.log(hashReg.exec('#//'));
    // console.log(hashReg.exec('#///'));
    // console.log(hashReg.exec('#////'));
    // console.log(hashReg.exec('#'));
    // console.log(hashReg.exec(''));
    // console.log(hashReg.exec('#/1'));
    // console.log(hashReg.exec('#/1/'));
    // console.log(hashReg.exec('#1'));
    // console.log(hashReg.exec('#1/'));
    // console.log(hashReg.exec('#1/2'));
    // console.log(hashReg.exec('#/1/2'));
    // console.log(hashReg.exec('#1/2/'));
    // console.log(hashReg.exec('#/1/2/'));
    var result = hashReg.exec(hash);
    if (!result) {
        return { folder: '', item: '' };
    }
    return {
        folder: result[1] || '',
        item: result[2] || '',
    };
};
/**
 * DOM Utils
 */
exports.addClass = oui_dom_utils_1.default.addClass;
exports.removeClass = oui_dom_utils_1.default.removeClass;
exports.hasClass = oui_dom_utils_1.default.hasClass;
/**
 * Event Utils
 */
exports.on = oui_dom_events_1.default.on;
exports.off = oui_dom_events_1.default.off;
exports.delegate = oui_dom_events_1.default.delegate;
exports.undelegate = oui_dom_events_1.default.undelegate;


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint no-unused-expressions: 0 */
var reUnit = /width|height|top|left|right|bottom|margin|padding/i;
var _amId = 1;
var _amDisplay = {};

var requestAnimationFrame = undefined;
if (typeof window !== 'undefined') {
  requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
} else {
  requestAnimationFrame = function () {
    throw new Error('requestAnimationFrame is not supported, maybe you are running in the server side');
  };
}

function getAmId(obj) {
  return obj._amId || (obj._amId = _amId++);
}

function setAmDisplay(elem, display) {
  var id = getAmId(elem);
  _amDisplay['_am_' + id] = display;
}

function getAmDisplay(elem) {
  var id = getAmId(elem);
  return _amDisplay['_am_' + id];
}

exports.default = {
  // el can be an Element, NodeList or selector

  addClass: function addClass(el, className) {
    var _this = this;

    if (typeof el === 'string') el = document.querySelectorAll(el);
    var els = el instanceof NodeList ? [].slice.call(el) : [el];

    els.forEach(function (e) {
      if (_this.hasClass(e, className)) {
        return;
      }

      if (e.classList) {
        e.classList.add(className);
      } else {
        e.className += ' ' + className;
      }
    });
  },

  // el can be an Element, NodeList or selector
  removeClass: function removeClass(el, className) {
    var _this2 = this;

    if (typeof el === 'string') el = document.querySelectorAll(el);
    var els = el instanceof NodeList ? [].slice.call(el) : [el];

    els.forEach(function (e) {
      if (_this2.hasClass(e, className)) {
        if (e.classList) {
          e.classList.remove(className);
        } else {
          e.className = e.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
      }
    });
  },

  // el can be an Element or selector
  hasClass: function hasClass(el, className) {
    if (typeof el === 'string') el = document.querySelector(el);
    if (el.classList) {
      return el.classList.contains(className);
    }
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  },

  // el can be an Element or selector
  toggleClass: function toggleClass(el, className) {
    if (typeof el === 'string') el = document.querySelector(el);
    var flag = this.hasClass(el, className);
    if (flag) {
      this.removeClass(el, className);
    } else {
      this.addClass(el, className);
    }
    return flag;
  },
  insertAfter: function insertAfter(newEl, targetEl) {
    var parent = targetEl.parentNode;

    if (parent.lastChild === targetEl) {
      parent.appendChild(newEl);
    } else {
      parent.insertBefore(newEl, targetEl.nextSibling);
    }
  },

  // el can be an Element, NodeList or query string
  remove: function remove(el) {
    if (typeof el === 'string') {
      [].forEach.call(document.querySelectorAll(el), function (node) {
        node.parentNode.removeChild(node);
      });
    } else if (el.parentNode) {
      // it's an Element
      el.parentNode.removeChild(el);
    } else if (el instanceof NodeList) {
      // it's an array of elements
      [].forEach.call(el, function (node) {
        node.parentNode.removeChild(node);
      });
    } else {
      throw new Error('you can only pass Element, array of Elements or query string as argument');
    }
  },
  forceReflow: function forceReflow(el) {
    el.offsetHeight;
  },
  getDocumentScrollTop: function getDocumentScrollTop() {
    // IE8 used `document.documentElement`
    return document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
  },

  // Set the current vertical position of the scroll bar for document
  // Note: do not support fixed position of body
  setDocumentScrollTop: function setDocumentScrollTop(value) {
    window.scrollTo(0, value);
    return value;
  },
  outerHeight: function outerHeight(el) {
    return el.offsetHeight;
  },
  outerHeightWithMargin: function outerHeightWithMargin(el) {
    var height = el.offsetHeight;
    var style = getComputedStyle(el);

    height += (parseFloat(style.marginTop) || 0) + (parseFloat(style.marginBottom) || 0);
    return height;
  },
  outerWidth: function outerWidth(el) {
    return el.offsetWidth;
  },
  outerWidthWithMargin: function outerWidthWithMargin(el) {
    var width = el.offsetWidth;
    var style = getComputedStyle(el);

    width += (parseFloat(style.marginLeft) || 0) + (parseFloat(style.marginRight) || 0);
    return width;
  },
  getComputedStyles: function getComputedStyles(el) {
    return el.ownerDocument.defaultView.getComputedStyle(el, null);
  },
  getOffset: function getOffset(el) {
    var html = el.ownerDocument.documentElement;
    var box = { top: 0, left: 0 };

    // If we don't have gBCR, just use 0,0 rather than error
    // BlackBerry 5, iOS 3 (original iPhone)
    if (typeof el.getBoundingClientRect !== 'undefined') {
      box = el.getBoundingClientRect();
    }

    return {
      top: box.top + window.pageYOffset - html.clientTop,
      left: box.left + window.pageXOffset - html.clientLeft
    };
  },
  getPosition: function getPosition(el) {
    if (!el) {
      return {
        left: 0,
        top: 0
      };
    }

    return {
      left: el.offsetLeft,
      top: el.offsetTop
    };
  },
  setStyle: function setStyle(node, att, val, style) {
    style = style || node.style;

    if (style) {
      if (val === null || val === '') {
        // normalize unsetting
        val = '';
      } else if (!isNaN(Number(val)) && reUnit.test(att)) {
        // number values may need a unit
        val += 'px';
      }

      if (att === '') {
        att = 'cssText';
        val = '';
      }

      style[att] = val;
    }
  },
  setStyles: function setStyles(el, hash) {
    var _this3 = this;

    var HAS_CSSTEXT_FEATURE = typeof el.style.cssText !== 'undefined';
    function trim(str) {
      return str.replace(/^\s+|\s+$/g, '');
    }
    var originStyleText = undefined;
    var originStyleObj = {};
    if (!!HAS_CSSTEXT_FEATURE) {
      originStyleText = el.style.cssText;
    } else {
      originStyleText = el.getAttribute('style');
    }
    originStyleText.split(';').forEach(function (item) {
      if (item.indexOf(':') !== -1) {
        var obj = item.split(':');
        originStyleObj[trim(obj[0])] = trim(obj[1]);
      }
    });

    var styleObj = {};
    Object.keys(hash).forEach(function (item) {
      _this3.setStyle(el, item, hash[item], styleObj);
    });
    var mergedStyleObj = Object.assign({}, originStyleObj, styleObj);
    var styleText = Object.keys(mergedStyleObj).map(function (item) {
      return item + ': ' + mergedStyleObj[item] + ';';
    }).join(' ');

    if (!!HAS_CSSTEXT_FEATURE) {
      el.style.cssText = styleText;
    } else {
      el.setAttribute('style', styleText);
    }
  },
  getStyle: function getStyle(el, att, style) {
    style = style || el.style;

    var val = '';

    if (style) {
      val = style[att];

      if (val === '') {
        val = this.getComputedStyle(el, att);
      }
    }

    return val;
  },

  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  getComputedStyle: function getComputedStyle(el, att) {
    var win = el.ownerDocument.defaultView;
    // null means not return presudo styles
    var computed = win.getComputedStyle(el, null);

    return att ? computed[att] : computed;
  },
  getPageSize: function getPageSize() {
    var xScroll = undefined,
        yScroll = undefined;

    if (window.innerHeight && window.scrollMaxY) {
      xScroll = window.innerWidth + window.scrollMaxX;
      yScroll = window.innerHeight + window.scrollMaxY;
    } else {
      if (document.body.scrollHeight > document.body.offsetHeight) {
        // all but Explorer Mac
        xScroll = document.body.scrollWidth;
        yScroll = document.body.scrollHeight;
      } else {
        // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
        xScroll = document.body.offsetWidth;
        yScroll = document.body.offsetHeight;
      }
    }

    var windowWidth = undefined,
        windowHeight = undefined;

    if (self.innerHeight) {
      // all except Explorer
      if (document.documentElement.clientWidth) {
        windowWidth = document.documentElement.clientWidth;
      } else {
        windowWidth = self.innerWidth;
      }
      windowHeight = self.innerHeight;
    } else {
      if (document.documentElement && document.documentElement.clientHeight) {
        // Explorer 6 Strict Mode
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
      } else {
        if (document.body) {
          // other Explorers
          windowWidth = document.body.clientWidth;
          windowHeight = document.body.clientHeight;
        }
      }
    }

    var pageHeight = undefined,
        pageWidth = undefined;

    // for small pages with total height less then height of the viewport
    if (yScroll < windowHeight) {
      pageHeight = windowHeight;
    } else {
      pageHeight = yScroll;
    }
    // for small pages with total width less then width of the viewport
    if (xScroll < windowWidth) {
      pageWidth = xScroll;
    } else {
      pageWidth = windowWidth;
    }

    return {
      pageWidth: pageWidth,
      pageHeight: pageHeight,
      windowWidth: windowWidth,
      windowHeight: windowHeight
    };
  },
  get: function get(selector) {
    return document.querySelector(selector) || {};
  },
  getAll: function getAll(selector) {
    return document.querySelectorAll(selector);
  },

  // selector 可选。字符串值，规定在何处停止对祖先元素进行匹配的选择器表达式。
  // filter   可选。字符串值，包含用于匹配元素的选择器表达式。
  parentsUntil: function parentsUntil(el, selector, filter) {
    var result = [];
    var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
    // match start from parent
    el = el.parentElement;
    while (el && !matchesSelector.call(el, selector)) {
      if (!filter) {
        result.push(el);
      } else {
        if (matchesSelector.call(el, filter)) {
          result.push(el);
        }
      }
      el = el.parentElement;
    }
    return result;
  },

  // 获得匹配选择器的第一个祖先元素，从当前元素开始沿 DOM 树向上
  closest: function closest(el, selector) {
    var matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

    while (el) {
      if (matchesSelector.call(el, selector)) {
        return el;
      }

      el = el.parentElement;
    }
    return null;
  },

  // el can be an Element, NodeList or selector
  _showHide: function _showHide(el, show) {
    if (typeof el === 'string') el = document.querySelectorAll(el);
    var els = el instanceof NodeList ? [].slice.call(el) : [el];
    var display = undefined;
    var values = [];
    if (els.length === 0) {
      return;
    }
    els.forEach(function (e, index) {
      if (e.style) {
        display = e.style.display;
        if (show) {
          if (display === 'none') {
            values[index] = getAmDisplay(e) || '';
          }
        } else {
          if (display !== 'none') {
            values[index] = 'none';
            setAmDisplay(e, display);
          }
        }
      }
    });

    els.forEach(function (e, index) {
      if (values[index] !== null) {
        els[index].style.display = values[index];
      }
    });
  },
  show: function show(elements) {
    this._showHide(elements, true);
  },
  hide: function hide(elements) {
    this._showHide(elements, false);
  },
  toggle: function toggle(element) {
    if (element.style.display === 'none') {
      this.show(element);
    } else {
      this.hide(element);
    }
  },

  /**
   * scroll to location with animation
   * @param  {Number} to       to assign the scrollTop value
   * @param  {Number} duration assign the animate duration
   * @return {Null}            return null
   */
  scrollTo: function scrollTo() {
    var _this4 = this;

    var to = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    var duration = arguments.length <= 1 || arguments[1] === undefined ? 16 : arguments[1];

    if (duration < 0) {
      return;
    }
    var diff = to - this.getDocumentScrollTop();
    if (diff === 0) {
      return;
    }
    var perTick = diff / duration * 10;
    requestAnimationFrame(function () {
      if (Math.abs(perTick) > Math.abs(diff)) {
        _this4.setDocumentScrollTop(_this4.getDocumentScrollTop() + diff);
        return;
      }
      _this4.setDocumentScrollTop(_this4.getDocumentScrollTop() + perTick);
      if (diff > 0 && _this4.getDocumentScrollTop() >= to || diff < 0 && _this4.getDocumentScrollTop() <= to) {
        return;
      }
      _this4.scrollTo(to, duration - 16);
    });
  },

  // matches(el, '.my-class'); 这里不能使用伪类选择器
  is: function is(el, selector) {
    return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
  },
  width: function width(el) {
    var styles = this.getComputedStyles(el);
    var width = parseFloat(styles.width.indexOf('px') !== -1 ? styles.width : 0);

    var boxSizing = styles.boxSizing || 'content-box';
    if (boxSizing === 'border-box') {
      return width;
    }

    var borderLeftWidth = parseFloat(styles.borderLeftWidth);
    var borderRightWidth = parseFloat(styles.borderRightWidth);
    var paddingLeft = parseFloat(styles.paddingLeft);
    var paddingRight = parseFloat(styles.paddingRight);
    return width - borderRightWidth - borderLeftWidth - paddingLeft - paddingRight;
  },
  height: function height(el) {
    var styles = this.getComputedStyles(el);
    var height = parseFloat(styles.height.indexOf('px') !== -1 ? styles.height : 0);

    var boxSizing = styles.boxSizing || 'content-box';
    if (boxSizing === 'border-box') {
      return height;
    }

    var borderTopWidth = parseFloat(styles.borderTopWidth);
    var borderBottomWidth = parseFloat(styles.borderBottomWidth);
    var paddingTop = parseFloat(styles.paddingTop);
    var paddingBottom = parseFloat(styles.paddingBottom);
    return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
  }
};

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// IE10+ Support
// inspired by zepto event https://github.com/madrobby/zepto/blob/master/src/event.js

var handlers = {};

var specialEvents = {};
specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = 'MouseEvents';

// every element and callback function will have an unique dtId
var _dtId = 1;

/**
 * Get dtId of Element or callback function
 * @param  {Object|Function} obj Element or callback function
 * @return {Number} unique dtId
 */
function getDtId(obj) {
  return obj._dtId || (obj._dtId = _dtId++);
}

/**
 * Get event object of event string, the first `.` is used to split event and namespace
 *
 * @param  {String} event Event type string with namespace or not
 * @return {Object} An Object with `e` and `ns` key
 */
function parse(event) {
  var dotIndex = event.indexOf('.');
  if (dotIndex > 0) {
    return {
      e: event.substring(0, event.indexOf('.')),
      ns: event.substring(dotIndex + 1, event.length)
    };
  }

  return { e: event };
}

/**
 * Find matched event handlers
 * @param  {Element} el the element to find
 * @param  {String} selector Used by event delegation, null if not
 * @param  {String} event Event string may with namespace
 * @param  {Function} callback the callback to find, optional
 * @return {Array} Array of handlers bind to el
 */
function findHandlers(el, selector, event, callback) {
  event = parse(event);
  return (handlers[getDtId(el)] || []).filter(function (handler) {
    return handler && (!event.e || handler.e === event.e) && (!event.ns || handler.ns === event.ns) && (!callback || handler.callback === callback) && (!selector || handler.selector === selector);
  });
}

function removeEvent(el, selector, event, callback) {
  var eventName = parse(event).e;

  if (!el._dtId) return false;
  var elHandlers = handlers[getDtId(el)];
  var matchedHandlers = findHandlers(el, selector, event, callback);
  matchedHandlers.forEach(function (handler) {
    if (el.removeEventListener) {
      el.removeEventListener(eventName, handler.delegator || handler.callback);
    } else if (el.detachEvent) {
      el.detachEvent('on' + eventName, handler.delegator || handler.callback);
    }
    elHandlers.splice(elHandlers.indexOf(handler), 1);
  });
}

// delegator 只用于 delegate 时有用。
function bindEvent(el, selector, event, callback, delegator) {
  var eventName = parse(event).e;
  var ns = parse(event).ns;

  if (el.addEventListener) {
    el.addEventListener(eventName, delegator || callback, false);
  } else if (el.attachEvent) {
    el.attachEvent('on' + eventName, delegator || callback);
  }

  // push events to handlers
  var id = getDtId(el);
  var elHandlers = handlers[id] || (handlers[id] = []);
  elHandlers.push({
    delegator: delegator,
    callback: callback,
    e: eventName,
    ns: ns,
    selector: selector
  });
}

var Events = {
  /**
   * Register a callback
   *
   * @param  {Element} el the element to bind event to
   * @param  {String} eventType event type, can with namesapce
   * @param  {Function} callback callback to invoke
   * @return {Null} return null
   */
  on: function on(el, eventType, callback) {
    bindEvent(el, null, eventType, callback);
  },


  /**
   * Unregister a callback
   *
   * @param  {Element} el the element to bind event to
   * @param  {String} eventType event type, can with namesapce
   * @param  {Function} callback optional, callback to invoke
   * @return {Null} return null
   */
  off: function off(el, eventType, callback) {
    // find callbacks
    removeEvent(el, null, eventType, callback);
  },


  /**
   * Register a callback that will execute exactly once
   *
   * @param  {Element} el the element to bind event to
   * @param  {String} eventType event type, can with namesapce
   * @param  {Function} callback callback to invoke
   * @return {Null} return null
   */
  once: function once(el, eventType, callback) {
    var recursiveFunction = function recursiveFunction(e) {
      Events.off(e.currentTarget, e.type, recursiveFunction);
      return callback(e);
    };

    this.on(el, eventType, recursiveFunction);
  },


  // Delegate a callback to selector under el
  delegate: function delegate(el, selector, eventType, callback) {
    // bind event to el. and check if selector match
    var delegator = function delegator(e) {
      var els = el.querySelectorAll(selector);
      var matched = false;
      for (var i = 0; i < els.length; i++) {
        var _el = els[i];
        if (_el === e.target || _el.contains(e.target)) {
          matched = _el;
          break;
        }
      }
      if (matched) {
        callback.apply(matched, [].slice.call(arguments));
      }
    };

    bindEvent(el, selector, eventType, callback, delegator);
  },


  // Undelegate a callback to selector under el
  undelegate: function undelegate(el, selector, eventType, callback) {
    removeEvent(el, selector, eventType, callback);
  },


  // Dispatch an event with props to el
  trigger: function trigger(el, eventType, props) {
    var event = document.createEvent(specialEvents[eventType] || 'Events');
    var bubbles = true;
    if (props) {
      for (var name in props) {
        if ({}.hasOwnProperty.call(props, name)) {
          name === 'bubbles' ? bubbles = !!props[name] : event[name] = props[name];
        }
      }
    }
    event.initEvent(eventType, bubbles, true);
    el.dispatchEvent(event);
  }
};

exports.default = Events;

/***/ }),

/***/ 862:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var locale_1 = __webpack_require__(863);
var utils_1 = __webpack_require__(33);
__webpack_require__(864);
var Home = /** @class */ (function () {
    function Home() {
        var _this = this;
        this.handleSwitchPageLanguage = function () {
            utils_1.changePageLanguage();
            _this.unbindEvent();
            _this.renderLanguage();
            _this.bindEvent();
        };
        utils_1.initPageLanguage();
        this.renderLanguage();
        this.renderImage();
        this.bindEvent();
    }
    Home.prototype.renderImage = function () {
        document.getElementById('viser-mount-1-1').innerHTML = '<img src="/assets/image/s1-1.png"/>';
        document.getElementById('viser-mount-2-1').innerHTML = '<img src="/assets/image/s2-1.png"/>';
        document.getElementById('viser-mount-2-2').innerHTML = '<img src="/assets/image/s2-2.png"/>';
        document.getElementById('viser-mount-2-3').innerHTML = '<img src="/assets/image/s2-3.png"/>';
        document.getElementById('viser-mount-2-4').innerHTML = '<img src="/assets/image/s2-4.png"/>';
    };
    Home.prototype.renderText = function (selector, text) {
        var selectorDom = document.querySelector(selector);
        if (selectorDom) {
            selectorDom.innerHTML = text;
        }
    };
    Home.prototype.renderLanguage = function () {
        var _this = this;
        var pageLanguageInStore = utils_1.getPageLanguage();
        if (!pageLanguageInStore || utils_1.ALL_PAGE_LANGUAGES.indexOf(pageLanguageInStore) === -1) {
            pageLanguageInStore = utils_1.DEFAULT_PAGE_LANGUAGE;
            utils_1.setPageLanguage(pageLanguageInStore);
        }
        var pageLanguageSwitchDom = document.querySelector('.home-header .page-language-switch');
        utils_1.ALL_PAGE_LANGUAGES.forEach(function (lang) {
            utils_1.removeClass(pageLanguageSwitchDom, lang);
        });
        utils_1.addClass(pageLanguageSwitchDom, pageLanguageInStore);
        if (locale_1.default && locale_1.default[pageLanguageInStore] && locale_1.default[pageLanguageInStore].length) {
            locale_1.default[pageLanguageInStore].forEach(function (o) {
                _this.renderText(o.selector, o.text);
            });
        }
    };
    Home.prototype.unbindEvent = function () {
        var pageLanguageSwitchDom = document.querySelector('.home-header .page-language-switch');
        if (pageLanguageSwitchDom) {
            utils_1.off(pageLanguageSwitchDom, 'click', this.handleSwitchPageLanguage);
        }
    };
    Home.prototype.bindEvent = function () {
        var pageLanguageSwitchDom = document.querySelector('.home-header .page-language-switch');
        if (pageLanguageSwitchDom) {
            utils_1.on(pageLanguageSwitchDom, 'click', this.handleSwitchPageLanguage);
        }
    };
    return Home;
}());
new Home();


/***/ }),

/***/ 863:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var locale = {
    cn: [
        {
            selector: '.home-header .common-header-nav-item.demo-link',
            text: '案例',
        },
        {
            selector: '.home-header .common-header-nav-item.docs-link',
            text: '文档',
        },
        {
            selector: '.main-intro .main-intro-title',
            text: '再一次发现<br/>你的数据。',
        },
        {
            selector: '.main-intro .main-intro-subtitle',
            text: '使用Viser进行可视化，让你的数据变得更加直观。',
        },
        {
            selector: '.home-section.presentation-1 .intro-container .intro-text .intro-title',
            text: '即刻创建图表',
        },
        {
            selector: '.home-section.presentation-1 .intro-container .intro-text .intro-content',
            text: '只要你拥有一份结构化的数据，就可以在Viser里开始您的可视化探索之旅了。让Viser知道你想要的图表类型并告诉他数据的意义，Viser一定会为你绘制出你想要的图形。',
        },
        {
            selector: '.home-section.presentation-2 .intro-container .intro-text .intro-title',
            text: '纠结？不存在的',
        },
        {
            selector: '.home-section.presentation-2 .intro-container .intro-text .intro-content',
            text: '做可视化哪有一步到位的，还不是在不断地调整中，摸索出最合适的表达方式。使用Viser不用害怕随时变动需求带来的麻烦，最小化变动量设计的Viser的参数，让调整图表不再是一件难事。',
        },
        {
            selector: '.home-section.presentation-3 .intro-container .intro-text .intro-title',
            text: '告别框架烦恼',
        },
        {
            selector: '.home-section.presentation-3 .intro-container .intro-text .intro-content',
            text: '做可视化就是一件纯粹的事情，选择什么前端框架并不是需要真正关心的事情。不管是React，还是Angular，抑或是Vue，你都能在Viser里找到解决方案。你的框架比较小众？也可以快速定制啊，就是这么贴心。',
        },
        {
            selector: '.try-now .highlight-feature-list .highlight-feature-item.highlight-feature-item-1 .highlight-feature-content',
            text: '数据可视化，一个就够了',
        },
        {
            selector: '.try-now .highlight-feature-list .highlight-feature-item.highlight-feature-item-2 .highlight-feature-content',
            text: '语义化组件，无限的可能',
        },
        {
            selector: '.try-now .highlight-feature-list .highlight-feature-item.highlight-feature-item-3 .highlight-feature-content',
            text: '相似的语法，如你所期待',
        },
        {
            selector: '.try-now .try-content',
            text: '从现在开始，使用 Viser 为你的数据进行可视化处理',
        },
        {
            selector: '.try-now .try-link',
            text: '立即使用',
        },
        {
            selector: '.home-footer',
            text: '与来自 AntV 的 <a href="//antv.alipay.com/zh-cn/g2/3.x/index.html" target="_blank">G2</a> 深度合作<br/>本项目基于 MIT 协议发布<br />Copyright (c) 2018 Viser Group. 版权所有<br />',
        },
    ],
    en: [
        {
            selector: '.home-header .common-header-nav-item.demo-link',
            text: 'Demo',
        },
        {
            selector: '.home-header .common-header-nav-item.docs-link',
            text: 'Docs',
        },
        {
            selector: '.main-intro .main-intro-title',
            text: 'The Rediscovery<br/>of Your Data.',
        },
        {
            selector: '.main-intro .main-intro-subtitle',
            text: 'Use Viser to simplify and beautify your data.',
        },
        {
            selector: '.home-section.presentation-1 .intro-container .intro-text .intro-title',
            text: 'Create Instantly',
        },
        {
            selector: '.home-section.presentation-1 .intro-container .intro-text .intro-content',
            text: 'It\'s quite easy to create a chart with Viser.All your need is preparing a set of data and describing the meaning of column and row.',
        },
        {
            selector: '.home-section.presentation-2 .intro-container .intro-text .intro-title',
            text: 'Modify Easily',
        },
        {
            selector: '.home-section.presentation-2 .intro-container .intro-text .intro-content',
            text: 'We all know that the most complex thing in data visualization is the detail adjustment. The well designed properties of Viser component make you leave params-phobia away.',
        },
        {
            selector: '.home-section.presentation-3 .intro-container .intro-text .intro-title',
            text: 'Full Compatibility',
        },
        {
            selector: '.home-section.presentation-3 .intro-container .intro-text .intro-content',
            text: 'No mater what front-end framework you chose, you can always find a data visualization solution with Viser. Explicitly, React, Angular and Vue are all supported.',
        },
        {
            selector: '.try-now .highlight-feature-list .highlight-feature-item.highlight-feature-item-1 .highlight-feature-content',
            text: 'One Framework for All Visualization',
        },
        {
            selector: '.try-now .highlight-feature-list .highlight-feature-item.highlight-feature-item-2 .highlight-feature-content',
            text: 'Infinite Charts by Semantic Component',
        },
        {
            selector: '.try-now .highlight-feature-list .highlight-feature-item.highlight-feature-item-3 .highlight-feature-content',
            text: 'Lightweight Depending Only on G2',
        },
        {
            selector: '.try-now .try-content',
            text: 'From now on，using Viser for data visualization.',
        },
        {
            selector: '.try-now .try-link',
            text: 'Install Now',
        },
        {
            selector: '.home-footer',
            text: 'Deep cooperation with <a href="//antv.alipay.com/zh-cn/g2/3.x/index.html" target="_blank">G2</a> from AntV.<br/>Released under the MIT License.<br />Copyright (c) 2018 Viser Group. All Rights Reserved.<br />',
        },
    ],
};
exports.default = locale;


/***/ }),

/***/ 864:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });