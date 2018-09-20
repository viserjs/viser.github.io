"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mds_1 = require("./mds");
var locale_1 = require("../common/locale");
var react_dom_1 = require("react-dom");
var React = require("react");
var nav_1 = require("../nav");
var utils_1 = require("../common/utils");
require("./index.scss");
var timers_1 = require("core-js/library/web/timers");
var navTpl = require('./nav.tpl');
var DEFAULT_FOLDER = 'guide';
var DEFAULT_ITEM = 'installation';
var Docs = /** @class */ (function () {
    function Docs() {
        var _this = this;
        this.typeKey = 'viser';
        // 设置 docs 类型
        this.setTypeKey = function (typeKey) {
            // window.console.log('this:' + this.typeKey + 'typeKey:' + typeKey);
            var obj = _this.getDosList();
            // window.console.log(obj);
            var folderKey = obj[0]['folderKey'];
            var itemKey = obj[0]['mds'][0]['itemKey'];
            window.location.hash = "#/" + utils_1.getInitNav() + "/" + folderKey + "/" + itemKey;
            if (_this.typeKey !== typeKey) {
                _this.typeKey = typeKey;
                _this.refresh();
            }
        };
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
        this.render();
        this.bindEvent();
    }
    Docs.prototype.getDosList = function () {
        switch (utils_1.getInitNav()) {
            case 'viser':
                return mds_1.viserMds;
            case 'viser-graph':
                return mds_1.viserGraphMds;
            default:
                return [];
        }
    };
    Docs.prototype.renderNav = function (pageLan) {
        react_dom_1.render(React.createElement(nav_1.default, { pageLan: pageLan, setTypeKey: this.setTypeKey }), document.getElementById('viser-nav'));
    };
    Docs.prototype.getDocsFolderAndItem = function () {
        var _a = utils_1.getFolderAndItem(false), folder = _a.folder, item = _a.item;
        return {
            folder: folder || DEFAULT_FOLDER,
            item: item || DEFAULT_ITEM,
        };
    };
    Docs.prototype.renderText = function (selector, text) {
        var selectorDom = document.querySelector(selector);
        if (selectorDom) {
            selectorDom.innerHTML = text;
        }
    };
    Docs.prototype.renderLanguage = function () {
        var _this = this;
        var pageLanguageInStore = utils_1.getPageLanguage();
        if (!pageLanguageInStore ||
            utils_1.ALL_PAGE_LANGUAGES.indexOf(pageLanguageInStore) === -1) {
            pageLanguageInStore = utils_1.DEFAULT_PAGE_LANGUAGE;
            utils_1.setPageLanguage(pageLanguageInStore);
        }
        var pageLanguageSwitchDom = document.querySelector('.common-header .page-language-switch');
        utils_1.ALL_PAGE_LANGUAGES.forEach(function (lang) {
            utils_1.removeClass(pageLanguageSwitchDom, lang);
        });
        utils_1.addClass(pageLanguageSwitchDom, pageLanguageInStore);
        if (locale_1.default &&
            locale_1.default[pageLanguageInStore] &&
            locale_1.default[pageLanguageInStore].length) {
            locale_1.default[pageLanguageInStore].forEach(function (o) {
                _this.renderText(o.selector, o.text);
            });
        }
    };
    Docs.prototype.renderLeftMenu = function () {
        var _a = this.getDocsFolderAndItem(), folder = _a.folder, item = _a.item;
        var mds = this.getDosList();
        var menuList = mds.map(function (v) {
            var folderMatched = v.folderKey === folder;
            return __assign({}, v, { folderDisplayName: utils_1.getNameByLanguage(v), mds: v.mds.map(function (o) {
                    var itemMatched = o.itemKey === item;
                    return __assign({}, o, { itemDisplayName: utils_1.getNameByLanguage(o), linkName: utils_1.generateHashtag(utils_1.getInitNav(), v.folderKey, o.itemKey), activeClass: folderMatched && itemMatched ? 'active' : '' });
                }) });
        });
        var leftPanelDom = document.querySelector('.left-panel');
        leftPanelDom.innerHTML = navTpl({
            menuList: menuList,
        });
    };
    Docs.prototype.renderContent = function () {
        var language = utils_1.getPageLanguage();
        var _a = this.getDocsFolderAndItem(), folder = _a.folder, item = _a.item;
        var content = '';
        try {
            content = require("./mds/" + folder + "/" + item + "/" + language + ".md");
        }
        catch (err) {
            console.error(err);
        }
        var rightPanelDom = document.querySelector('.right-panel');
        rightPanelDom.innerHTML = content;
    };
    Docs.prototype.unbindEvent = function () {
        var pageLanguageSwitchDom = document.querySelector('.common-header .page-language-switch');
        if (pageLanguageSwitchDom) {
            utils_1.off(pageLanguageSwitchDom, 'click', this.handleSwitchPageLanguage);
        }
        var leftMenuDom = document.querySelector('.left-panel');
        if (leftMenuDom) {
            utils_1.undelegate(leftMenuDom, '.common-nav-item', 'click', this.handleSwitchContent);
        }
    };
    Docs.prototype.bindEvent = function () {
        var pageLanguageSwitchDom = document.querySelector('.common-header .page-language-switch');
        if (pageLanguageSwitchDom) {
            utils_1.on(pageLanguageSwitchDom, 'click', this.handleSwitchPageLanguage);
        }
        var leftMenuDom = document.querySelector('.left-panel');
        if (leftMenuDom) {
            utils_1.delegate(leftMenuDom, '.common-nav-item', 'click', this.handleSwitchContent);
        }
    };
    Docs.prototype.render = function () {
        this.renderLeftMenu();
        this.renderLanguage();
        this.renderContent();
    };
    Docs.prototype.refresh = function () {
        this.unbindEvent();
        this.renderNav(utils_1.getPageLanguage());
        this.render();
        this.bindEvent();
    };
    return Docs;
}());
new Docs();
//# sourceMappingURL=index.js.map