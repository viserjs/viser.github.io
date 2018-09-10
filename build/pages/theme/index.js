"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var locale_1 = require("../common/locale");
var react_dom_1 = require("react-dom");
var React = require("react");
var nav_1 = require("../nav");
var Content_1 = require("./Content");
var utils_1 = require("../common/utils");
require("./index.scss");
var timers_1 = require("core-js/library/web/timers");
var Theme = /** @class */ (function () {
    function Theme() {
        var _this = this;
        this.handleSwitchPageLanguage = function () {
            utils_1.changePageLanguage();
            _this.refresh();
        };
        this.handleSwitchContent = function () {
            timers_1.setTimeout(function () {
                _this.refresh();
            }, 0);
        };
        utils_1.initPageLanguage();
        this.renderNav(utils_1.getPageLanguage());
        this.renderCont(utils_1.getPageLanguage());
        this.render();
        this.bindEvent();
    }
    Theme.prototype.renderNav = function (pageLan) {
        react_dom_1.render(React.createElement(nav_1.default, { pageLan: pageLan }), document.getElementById('viser-nav'));
    };
    Theme.prototype.renderCont = function (pageLan) {
        react_dom_1.render(React.createElement(Content_1.default, { pageLan: pageLan }), document.getElementById('theme-cont'));
    };
    Theme.prototype.renderText = function (selector, text) {
        var selectorDom = document.querySelector(selector);
        if (selectorDom) {
            selectorDom.innerHTML = text;
        }
    };
    Theme.prototype.renderLanguage = function () {
        var _this = this;
        var pageLanguageInStore = utils_1.getPageLanguage();
        if (!pageLanguageInStore || utils_1.ALL_PAGE_LANGUAGES.indexOf(pageLanguageInStore) === -1) {
            pageLanguageInStore = utils_1.DEFAULT_PAGE_LANGUAGE;
            utils_1.setPageLanguage(pageLanguageInStore);
        }
        var pageLanguageSwitchDom = document.querySelector('.common-header .page-language-switch');
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
    Theme.prototype.unbindEvent = function () {
        var pageLanguageSwitchDom = document.querySelector('.common-header .page-language-switch');
        if (pageLanguageSwitchDom) {
            utils_1.off(pageLanguageSwitchDom, 'click', this.handleSwitchPageLanguage);
        }
    };
    Theme.prototype.bindEvent = function () {
        var pageLanguageSwitchDom = document.querySelector('.common-header .page-language-switch');
        if (pageLanguageSwitchDom) {
            utils_1.on(pageLanguageSwitchDom, 'click', this.handleSwitchPageLanguage);
        }
    };
    Theme.prototype.render = function () {
        this.renderLanguage();
    };
    Theme.prototype.refresh = function () {
        this.unbindEvent();
        this.renderNav(utils_1.getPageLanguage());
        this.renderCont(utils_1.getPageLanguage());
        this.render();
        this.bindEvent();
    };
    return Theme;
}());
new Theme();
//# sourceMappingURL=index.js.map