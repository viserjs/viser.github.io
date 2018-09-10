"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var locale_1 = require("./locale");
var react_dom_1 = require("react-dom");
var React = require("react");
var nav_1 = require("../nav");
var utils_1 = require("../common/utils");
require("./index.scss");
var Home = /** @class */ (function () {
    function Home() {
        var _this = this;
        this.handleSwitchPageLanguage = function () {
            utils_1.changePageLanguage();
            _this.renderNav(utils_1.getPageLanguage());
            _this.unbindEvent();
            _this.renderLanguage();
            _this.bindEvent();
        };
        utils_1.initPageLanguage();
        this.renderNav(utils_1.getPageLanguage());
        this.renderLanguage();
        this.renderImage();
        this.bindEvent();
    }
    Home.prototype.renderNav = function (pageLan) {
        react_dom_1.render(React.createElement(nav_1.default, { pageLan: pageLan }), document.getElementById('viser-nav'));
    };
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
//# sourceMappingURL=index.js.map