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
/******/ 	return __webpack_require__(__webpack_require__.s = 630);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(631);

const GDP_JSON = [
  { "year": '2006', "gdp": 21.94385 },
  { "year": '2007', "gdp": 27.02323 },
  { "year": '2008', "gdp": 31.95155 },
  { "year": '2009', "gdp": 34.90814 },
  { "year": '2010', "gdp": 41.30303 },
  { "year": '2011', "gdp": 48.93006 },
  { "year": '2012', "gdp": 54.03674 },
  { "year": '2013', "gdp": 59.52444 },
  { "year": '2014', "gdp": 64.39740 },
  { "year": '2015', "gdp": 68.90521 }
];

function renderChart() {
  RechartCore.ChartBuilder({
    data: GDP_JSON,
    dataDef: [{ key: 'year', mark: 'column', scale: {} }, { key: 'gdp', mark: 'row', scale: {} }],
    tooltip: true,
    axis: true,
    series: [{ position: ['year', 'gdp'], gemo: 'bar', color: '#0088fe' }],
    chart: { width: 700, height: 400, container: 'viser-mount-1-1' },
  });

  RechartCore.ChartBuilder({
    data: GDP_JSON,
    dataDef: [{ key: 'year', mark: 'column', scale: {} }, { key: 'gdp', mark: 'row', scale: {} }],
    tooltip: true,
    axis: true,
    series: [{ position: ['year', 'gdp'], gemo: 'line', color: '#0088fe' }],
    chart: { width: 380, height: 230, container: 'viser-mount-2-1' },
  });
  RechartCore.ChartBuilder({
    data: GDP_JSON,
    dataDef: [{ key: 'year', mark: ['column', 'color'], scale: {} }, { key: 'gdp', mark: 'row', scale: {} }],
    tooltip: true,
    axis: true,
    series: [{ position: ['year', 'gdp'], quickType: 'pie', color: '#0088fe' }],
    chart: { width: 380, height: 300, container: 'viser-mount-2-2' },
  });
  RechartCore.ChartBuilder({
    data: GDP_JSON,
    dataDef: [{ key: 'year', mark: 'column', scale: {} }, { key: 'gdp', mark: 'row', scale: { min: 0, max: 70 }, }],
    tooltip: true,
    axis: true,
    series: [{ position: ['year', 'gdp'], gemo: 'area', color: '#0088fe' }],
    chart: { width: 380, height: 230, container: 'viser-mount-2-3' },
  });
  RechartCore.ChartBuilder({
    data: { name: 'root', children: GDP_JSON },
    dataDef: [
      { key: 'x', mark: 'column' },
      { key: 'y', mark: 'row' },
      { key: 'year', mark: 'color', scale: {} }
    ],
    dataPre: {
      connector: 'hierarchy',
      transform: {
        type: 'hierarchy.treemap', field: 'gdp', tile: 'treemapResquarify', as: ['x', 'y'], nameKey: 'year', valueKey: 'gdp'
      },
    },
    tooltip: false,
    axis: false,
    series: [{
      position: ['x', 'y'],
      gemo: 'polygon',
      style: {
        lineWidth: 1,
        stroke: '#fff',
        fill: '#0088fe',
      }
    }],
    chart: { width: 400, height: 270, container: 'viser-mount-2-4' },
  });
}

window.onload = renderChart;

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(632);
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

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(41)(undefined);
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0; }\n\nbody {\n  overflow-x: hidden; }\n\nul, ol {\n  display: block;\n  list-style-type: none;\n  -webkit-margin-before: 0;\n  -webkit-margin-after: 0;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  -webkit-padding-start: 0; }\n\na {\n  text-decoration: none; }\n\n.github-link {\n  color: white;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  display: block;\n  float: right;\n  margin-left: 48px; }\n  .github-link .iconfont {\n    height: 29px;\n    width: 29px;\n    overflow: hidden;\n    font-size: 28px; }\n  .github-link .icon-gh {\n    display: none; }\n  .github-link .icon-gh-o {\n    display: block; }\n  .github-link:hover .icon-gh {\n    display: block; }\n  .github-link:hover .icon-gh-o {\n    display: none; }\n\n@font-face {\n  font-family: 'iconfont';\n  /* project id 473307 */\n  src: url(\"//at.alicdn.com/t/font_473307_kle8ui3d448ia4i.eot\");\n  src: url(\"//at.alicdn.com/t/font_473307_kle8ui3d448ia4i.eot?#iefix\") format(\"embedded-opentype\"), url(\"//at.alicdn.com/t/font_473307_kle8ui3d448ia4i.woff\") format(\"woff\"), url(\"//at.alicdn.com/t/font_473307_kle8ui3d448ia4i.ttf\") format(\"truetype\"), url(\"//at.alicdn.com/t/font_473307_kle8ui3d448ia4i.svg#iconfont\") format(\"svg\"); }\n\n.iconfont {\n  font-family: \"iconfont\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.icon-bingtu:before {\n  content: \"\\E600\"; }\n\n.icon-gh:before {\n  content: \"\\E719\"; }\n\n.icon-fuzhi:before {\n  content: \"\\E644\"; }\n\n.icon-relitu:before {\n  content: \"\\E650\"; }\n\n.icon-jizuobiao:before {\n  content: \"\\E830\"; }\n\n.icon-loudoutu:before {\n  content: \"\\E645\"; }\n\n.icon-mianjitu:before {\n  content: \"\\E6E7\"; }\n\n.icon-gh-o:before {\n  content: \"\\EEA9\"; }\n\n.icon-leidatu:before {\n  content: \"\\E626\"; }\n\n.icon-yibiaopan:before {\n  content: \"\\E66C\"; }\n\n.icon-fenmian:before {\n  content: \"\\E6EA\"; }\n\n.icon-zhuzhuangtu:before {\n  content: \"\\E6B4\"; }\n\n.icon-diantu:before {\n  content: \"\\E61E\"; }\n\n.icon-infinite:before {\n  content: \"\\E6CE\"; }\n\n.icon-one:before {\n  content: \"\\E687\"; }\n\n.icon-xiangxiantu:before {\n  content: \"\\E62B\"; }\n\n.icon-ditu:before {\n  content: \"\\E882\"; }\n\n.icon-github:before {\n  content: \"\\E601\"; }\n\n.icon-guanxitu:before {\n  content: \"\\E615\"; }\n\n.icon-down-triangle:before {\n  content: \"\\E610\"; }\n\n.icon-yunxing:before {\n  content: \"\\E66D\"; }\n\n.icon-xianxingtu:before {\n  content: \"\\E660\"; }\n\n.icon-contain:before {\n  content: \"\\E614\"; }\n\n.icon-juzhentu:before {\n  content: \"\\E740\"; }\n\n.icon-gupiaotu:before {\n  content: \"\\E73B\"; }\n\n.icon-meiguitu:before {\n  content: \"\\E60B\"; }\n\nheader.home-header {\n  margin: 0 auto;\n  width: 1000px;\n  height: 80px; }\n  header.home-header::before, header.home-header::after {\n    content: ' ';\n    display: block;\n    position: absolute;\n    top: -1000px;\n    left: 50%;\n    z-index: -1;\n    transform: rotate(-30deg); }\n  header.home-header::before {\n    width: 2000px;\n    height: 2000px;\n    margin-top: -770px;\n    margin-left: -1140px;\n    border-radius: 160px;\n    background: #0088fe;\n    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1); }\n  header.home-header::after {\n    width: 1600px;\n    height: 1600px;\n    margin-top: -520px;\n    margin-left: -300px;\n    border-radius: 100px;\n    background: #00c49f;\n    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1); }\n  header.home-header .home-title {\n    color: white;\n    font-size: 40px;\n    font-weight: 100;\n    margin: 0;\n    line-height: 100px;\n    float: left;\n    height: 100px;\n    width: 120px;\n    box-sizing: border-box; }\n  header.home-header .home-subtitle {\n    color: white;\n    font-size: 20px;\n    font-weight: 100;\n    margin: 0;\n    line-height: 100px;\n    float: left;\n    height: 100px;\n    width: 380px;\n    box-sizing: border-box;\n    vertical-align: 8px; }\n  header.home-header .home-nav {\n    width: 500px;\n    height: 100px;\n    box-sizing: border-box;\n    padding-top: 25px;\n    float: right;\n    margin-right: -80px; }\n  header.home-header .home-nav-item {\n    color: white;\n    display: block;\n    width: 130px;\n    height: 34px;\n    line-height: 34px;\n    border-radius: 34px;\n    font-size: 14px;\n    float: right;\n    text-decoration: none;\n    text-align: center;\n    transition: background .3s, color .3s;\n    position: relative;\n    cursor: pointer; }\n    header.home-header .home-nav-item a {\n      text-decoration: none;\n      color: #fff; }\n    header.home-header .home-nav-item:hover {\n      background: white;\n      color: #00c49f; }\n      header.home-header .home-nav-item:hover a, header.home-header .home-nav-item:hover i {\n        color: #00c49f; }\n\nsection.main-intro {\n  color: white;\n  font-weight: 100;\n  width: 1000px;\n  margin: 80px auto 200px; }\n  section.main-intro .main-intro-title {\n    width: 500px;\n    font-size: 60px;\n    line-height: 70px;\n    height: 70px;\n    margin: 0; }\n  section.main-intro .main-intro-subtitle {\n    padding-top: 22px;\n    padding-left: 6px;\n    font-size: 16px;\n    margin: 0; }\n  section.main-intro .try-link {\n    display: block;\n    text-decoration: none;\n    font-size: 14px;\n    line-height: 34px;\n    height: 34px;\n    border-radius: 34px;\n    border: 1px solid white;\n    color: white;\n    width: 136px;\n    margin: 20px 0 0 6px;\n    transition: background .3s, color .3s;\n    text-align: center;\n    font-weight: 400; }\n    section.main-intro .try-link:hover {\n      background: white;\n      color: #0088fe; }\n\nsection.install-section {\n  height: 400px;\n  width: 1000px;\n  margin: 0 auto; }\n\nsection.try-now {\n  text-align: center;\n  color: white;\n  background: #0088fe;\n  margin: 0 auto;\n  width: 100%;\n  height: 400px;\n  padding-top: 50px;\n  box-sizing: border-box;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1); }\n  section.try-now .highlight-feature-list {\n    width: 1050px;\n    height: 160px;\n    margin: 0 auto; }\n  section.try-now .highlight-feature-item {\n    float: left;\n    width: 350px;\n    height: 160px; }\n  section.try-now .highlight-feature-title {\n    width: 350px;\n    height: 120px;\n    margin: 0 auto;\n    text-align: center;\n    border-radius: 30px; }\n    section.try-now .highlight-feature-title .icon-container {\n      height: 120px;\n      width: 350px; }\n    section.try-now .highlight-feature-title .iconfont {\n      font-size: 100px;\n      color: white;\n      line-height: 120px; }\n  section.try-now .highlight-feature-content {\n    text-align: center;\n    font-size: 16px;\n    line-height: 1.5;\n    height: 40px;\n    color: white; }\n  section.try-now .try-content {\n    font-size: 30px;\n    font-weight: 100;\n    line-height: 68px;\n    margin-top: 12px; }\n  section.try-now .try-link {\n    display: block;\n    text-decoration: none;\n    font-size: 18px;\n    font-weight: 700;\n    line-height: 40px;\n    height: 40px;\n    border-radius: 40px;\n    border: 1px solid white;\n    width: 160px;\n    margin: 2px auto;\n    transition: background .3s, color .3s;\n    color: #0088fe;\n    background: white; }\n    section.try-now .try-link:hover {\n      color: white;\n      background: #0088fe; }\n\nfooter.home-footer {\n  width: 100%;\n  text-align: center;\n  height: 80px;\n  margin: 0;\n  color: white;\n  background: #00c49f;\n  font-size: 12px;\n  padding-top: 30px;\n  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1); }\n\nsection.home-section {\n  width: 100%;\n  height: 500px;\n  position: relative; }\n  section.home-section .intro-container {\n    width: 1000px;\n    height: 500px;\n    margin: 0 auto;\n    position: relative; }\n  section.home-section .intro-text {\n    position: absolute;\n    top: 170px;\n    width: 300px; }\n  section.home-section .intro-title {\n    width: 300px;\n    font-size: 36px;\n    line-height: 60px;\n    font-weight: 400;\n    color: #0088fe;\n    margin: 0 0 20px; }\n    section.home-section .intro-title::before {\n      content: ' ';\n      display: block;\n      position: absolute;\n      top: -10px;\n      left: -40px;\n      width: 80px;\n      height: 80px;\n      background: url(\"//img.alicdn.com/tfs/TB1MOv_dlfH8KJjy1XbXXbLdXXa-80-80.png\");\n      z-index: -1; }\n  section.home-section .intro-content {\n    width: 300px;\n    font-size: 16px;\n    line-height: 1.5;\n    color: #666; }\n  section.home-section .intro-multimedia {\n    position: absolute;\n    top: 50px;\n    left: 500px; }\n\n.presentation-1::before, .presentation-1 .intro-text,\n.presentation-3::before,\n.presentation-3 .intro-text {\n  left: 0; }\n\n.presentation-2::before, .presentation-2 .intro-text {\n  right: 0; }\n\n.presentation-1::before,\n.presentation-2::before,\n.presentation-3::before {\n  background-image: url(\"//img.alicdn.com/tfs/TB1AS5tc8fH8KJjy1XbXXbLdXXa-92-310.png\");\n  content: ' ';\n  display: block;\n  width: calc(50% - 350px);\n  height: 310px;\n  position: absolute;\n  top: 95px;\n  z-index: -10; }\n\n.presentation-1 .presentation-item,\n.presentation-2 .presentation-item {\n  position: absolute;\n  top: 0;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  border-radius: 20px;\n  overflow: hidden; }\n\n.presentation-1 .presentation-item-chart {\n  width: 700px;\n  height: 400px;\n  left: -100px;\n  top: 0; }\n\n.presentation-2 .presentation-item {\n  width: 340px;\n  height: 190px;\n  left: -600px; }\n\n.presentation-2 .presentation-item-1 {\n  margin-top: 0;\n  margin-left: 0; }\n\n.presentation-2 .presentation-item-2 {\n  margin-top: 210px;\n  margin-left: 0; }\n\n.presentation-2 .presentation-item-3 {\n  margin-top: 0;\n  margin-left: 360px; }\n\n.presentation-2 .presentation-item-4 {\n  margin-top: 210px;\n  margin-left: 360px; }\n\n.presentation-3 .presentation-item {\n  position: absolute;\n  width: 160px;\n  height: 160px;\n  border-radius: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  transform: rotate(-30deg);\n  overflow: hidden; }\n  .presentation-3 .presentation-item > img {\n    width: 220px;\n    height: 220px;\n    margin-left: -35px;\n    margin-top: -35px;\n    transform: rotate(30deg); }\n  .presentation-3 .presentation-item.presentation-react {\n    top: 60px;\n    left: 0px; }\n  .presentation-3 .presentation-item.presentation-ng {\n    top: 200px;\n    left: 120px; }\n  .presentation-3 .presentation-item.presentation-vue {\n    top: 60px;\n    left: 250px; }\n  .presentation-3 .presentation-item.presentation-json {\n    top: 200px;\n    left: 370px; }\n\n#viser-mount-1-1 {\n  margin-top: 25px;\n  margin-left: -25px; }\n\n#viser-mount-2-1,\n#viser-mount-2-3 {\n  margin-top: 10px;\n  margin-left: -45px; }\n\n#viser-mount-2-2 {\n  margin-top: -18px;\n  margin-left: -50px; }\n\n#viser-mount-2-4 {\n  margin-top: 0px;\n  margin-left: -60px; }\n", ""]);

// exports


/***/ })

/******/ });