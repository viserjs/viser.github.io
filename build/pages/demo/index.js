"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var index_1 = require("./examples/index");
var locale_1 = require("../common/locale");
var locale_2 = require("./locale");
var Clipboard = require("clipboard");
var nav_1 = require("../nav");
var utils_1 = require("../common/utils");
require("./index.scss");
// import Vue from 'vue';
// import ViserVue from 'viser-vue';
// import ViserGraphVue from 'viser-graph-vue';
var React = require("react");
var ReactDOM = require("react-dom");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var ngRef;
var navTpl = require('./nav.tpl');
// const ALL_FRAMEWORKS = ['react', 'vue', 'angular'];
var DEFAULT_FOLDER = '';
var DEFAULT_ITEM = '';
var Demo = /** @class */ (function () {
    function Demo() {
        var _this = this;
        this.framework = 'react';
        // 设置 demo 类型
        this.setTypeKey = function (typeKey) {
            if (_this.typeKey !== typeKey) {
                _this.typeKey = typeKey;
                _this.refresh();
            }
        };
        utils_1.initPageLanguage();
        this.renderNav(utils_1.getPageLanguage());
        this.initEditor();
        this.render();
        this.bindEvent();
    }
    Demo.prototype.renderNav = function (pageLan) {
        ReactDOM.render(React.createElement(nav_1.default, { setTypeKey: this.setTypeKey, pageLan: pageLan }), document.getElementById('viser-nav'));
    };
    Demo.prototype.initEditor = function () {
        this.editor = window.monaco.editor.create(document.getElementById('monaco-editor'), {
            value: 'loading code......',
            language: 'typescript',
            lineNumbers: false,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            renderLineHighlight: 'none',
            readOnly: false,
            formatOnType: true,
            theme: 'vs',
            minimap: {
                enabled: false,
            },
        });
    };
    Demo.prototype.getCode = function (framework) {
        if (framework === void 0) { framework = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, typeKey, folder, item, examples, filterExamples, _b, path, cnName, enName, basicPath, reactCode, vueCode, angularCode, reactPath, vuePath, angularPath, reactCode_r, vueCode_r, angularCode_r;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.getDemoFolderAndItem(), typeKey = _a.typeKey, folder = _a.folder, item = _a.item;
                        examples = index_1.default[typeKey][folder].examples;
                        filterExamples = examples.filter(function (ex) {
                            var itemKey = _this.getDemoItemKey(ex);
                            if (item === itemKey) {
                                return true;
                            }
                            return false;
                        });
                        if (!filterExamples || !filterExamples.length) {
                            return [2 /*return*/, {}];
                        }
                        _b = filterExamples[0], path = _b.path, cnName = _b.cnName, enName = _b.enName;
                        basicPath = '/pages/demo';
                        reactCode = '';
                        vueCode = '';
                        angularCode = '';
                        reactPath = '';
                        vuePath = '';
                        angularPath = '';
                        if (!(framework === 'react')) return [3 /*break*/, 3];
                        return [4 /*yield*/, utils_1.get(basicPath + "/examples/" + folder + "/" + path + "/react.tsx")];
                    case 1:
                        reactCode_r = _c.sent();
                        if (!reactCode_r.flag) return [3 /*break*/, 3];
                        return [4 /*yield*/, reactCode_r.data.text()];
                    case 2:
                        reactCode = _c.sent();
                        _c.label = 3;
                    case 3:
                        if (!(framework === 'vue')) return [3 /*break*/, 6];
                        return [4 /*yield*/, utils_1.get(basicPath + "/examples/" + folder + "/" + path + "/vue.vue")];
                    case 4:
                        vueCode_r = _c.sent();
                        if (!vueCode_r.flag) return [3 /*break*/, 6];
                        return [4 /*yield*/, vueCode_r.data.text()];
                    case 5:
                        vueCode = _c.sent();
                        _c.label = 6;
                    case 6:
                        if (!(framework === 'angular')) return [3 /*break*/, 9];
                        return [4 /*yield*/, utils_1.get(basicPath + "/examples/" + folder + "/" + path + "/angular.ts")];
                    case 7:
                        angularCode_r = _c.sent();
                        if (!angularCode_r.flag) return [3 /*break*/, 9];
                        return [4 /*yield*/, angularCode_r.data.text()];
                    case 8:
                        angularCode = _c.sent();
                        _c.label = 9;
                    case 9:
                        reactPath = "./examples/" + folder + "/" + path + "/react.tsx";
                        vuePath = "./examples/" + folder + "/" + path + "/vue.vue";
                        angularPath = "./examples/" + folder + "/" + path + "/angular.ts";
                        return [2 /*return*/, {
                                reactCode: reactCode,
                                vueCode: vueCode,
                                angularCode: angularCode,
                                reactPath: reactPath,
                                vuePath: vuePath,
                                angularPath: angularPath,
                                cnName: cnName,
                                enName: enName,
                            }];
                }
            });
        });
    };
    Demo.prototype.getDemoFolderAndItem = function () {
        var _a = utils_1.getFolderAndItem(), typeKey = _a.typeKey, folder = _a.folder, item = _a.item;
        if (!typeKey || !folder || !item || typeKey !== this.typeKey) {
            typeKey = this.typeKey;
            folder = Object.keys(index_1.default[typeKey])[0];
            item = index_1.default[typeKey][folder]['examples'][0]['enName']
                .toLowerCase()
                .trim()
                .replace(/\s/g, '-');
            window.location.hash = "#/" + typeKey + "/" + folder + "/" + item;
        }
        return {
            typeKey: typeKey || '',
            folder: folder || DEFAULT_FOLDER,
            item: item || DEFAULT_ITEM,
        };
    };
    Demo.prototype.getDemoItemKey = function (example) {
        return example.enName.toLowerCase().replace(/\s/g, '-');
    };
    // getAngularPath() {
    //   const { typeKey, folder, item } = this.getDemoFolderAndItem();
    //   const examples = exampleOrigin[typeKey][folder].examples;
    //   const filterExamples = examples.filter(ex => {
    //     const itemKey = this.getDemoItemKey(ex);
    //     if (item === itemKey) {
    //       return true;
    //     }
    //     return false;
    //   });
    //   const { path } = filterExamples[0];
    //   const codePath = `./examples/${folder}/${path}/angular.ts`;
    //   return codePath;
    // }
    Demo.prototype.runCode = function (framework) {
        return __awaiter(this, void 0, void 0, function () {
            var mount, mountParent, newMount, code_1, codePath, AppModule, code, doc, frame, iframeDoc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mount = document.getElementById('mount');
                        if (ngRef) {
                            mountParent = mount.parentNode;
                            ngRef.destroy();
                            ngRef = undefined;
                            newMount = document.createElement('div');
                            newMount.setAttribute('id', 'mount');
                            mountParent.appendChild(newMount);
                        }
                        if (!(framework === 'angular')) return [3 /*break*/, 2];
                        $('.case-code-topbar').hide();
                        return [4 /*yield*/, this.getCode(framework)];
                    case 1:
                        code_1 = _a.sent();
                        mount.innerHTML = '';
                        codePath = code_1[framework + "Path"];
                        delete require.cache[require.resolve("" + codePath)];
                        AppModule = require("" + codePath).default;
                        return [2 /*return*/, platform_browser_dynamic_1.platformBrowserDynamic()
                                .bootstrapModule(AppModule)
                                .then(function (ref) {
                                ngRef = ref;
                            })];
                    case 2:
                        $('.case-code-topbar').show();
                        code = this.editor.getValue();
                        doc = utils_1.combineFrameCode(framework, code);
                        $('#mount').html('<iframe></iframe>');
                        frame = $('#mount iframe')[0];
                        iframeDoc = frame.contentDocument || frame.contentWindow.document;
                        iframeDoc.open();
                        iframeDoc.write(doc);
                        iframeDoc.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    Demo.prototype.renderCase = function () {
        var self = this;
        // change top framework switch
        $('.case-box .case-code-switch-item').each(function () {
            $(this).removeClass('active');
            if (self.framework === $(this).attr('data-framework')) {
                $(this).addClass('active');
            }
        });
    };
    Demo.prototype.renderCodeEditor = function (isClick) {
        if (isClick === void 0) { isClick = false; }
        return __awaiter(this, void 0, void 0, function () {
            var code, codeValue, language;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCode(this.framework)];
                    case 1:
                        code = _a.sent();
                        codeValue = code[this.framework + "Code"];
                        language = this.framework === 'vue' ? 'html' : 'typescript';
                        this.editor.setValue(codeValue);
                        window.monaco.editor.setModelLanguage(this.editor.getModel(), language);
                        // if (this.framework === 'react') {
                        this.runCode(this.framework);
                        return [2 /*return*/];
                }
            });
        });
    };
    Demo.prototype.renderLanguage = function () {
        var language = utils_1.getPageLanguage();
        $('.common-header .page-language-switch')
            .removeClass('en')
            .removeClass('cn')
            .addClass(language);
        if (locale_1.default && locale_1.default[language] && locale_1.default[language].length) {
            locale_1.default[language].forEach(function (o) {
                $(o.selector).html(o.text);
            });
        }
        if (locale_2.default && locale_2.default[language] && locale_2.default[language].length) {
            locale_2.default[language].forEach(function (o) {
                $(o.selector).html(o.text);
            });
        }
    };
    Demo.prototype.renderDemoTitle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var code;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCode(this.framework)];
                    case 1:
                        code = _a.sent();
                        $('.case-type').html(utils_1.getNameByLanguage(code));
                        return [2 /*return*/];
                }
            });
        });
    };
    Demo.prototype.renderLeftMenu = function () {
        var _this = this;
        var _a = this.getDemoFolderAndItem(), typeKey = _a.typeKey, folder = _a.folder, item = _a.item;
        var menuList = [];
        Object.keys(index_1.default[typeKey]).forEach(function (key) {
            var folderKey = key;
            var folderMatched = folderKey === folder;
            menuList.push(__assign({}, index_1.default[typeKey][key], { typeKey: typeKey,
                folderKey: folderKey, folderDisplayName: utils_1.getNameByLanguage(index_1.default[typeKey][key]), examples: index_1.default[typeKey][key].examples.map(function (example) {
                    var itemKey = _this.getDemoItemKey(example);
                    var itemMatched = itemKey === item;
                    return __assign({}, example, { linkName: utils_1.generateHashtag(typeKey, folderKey, itemKey), itemKey: itemKey, itemDisplayName: utils_1.getNameByLanguage(example), activeClass: folderMatched && itemMatched ? 'active' : '' });
                }), expanded: folderMatched ? 'expanded' : '' }));
        });
        $('.left-panel').html(navTpl({ menuList: menuList }));
    };
    Demo.prototype.bindEvent = function () {
        var _this = this;
        var self = this;
        // TODO: bind JSFiddle event
        $('.left-panel').on('click', '.common-nav-item', function () {
            setTimeout(function () {
                self.refresh();
            }, 0);
        });
        // bind code-switch event
        $('.case-box .case-code-switch .case-code-switch-item').on('click', function () {
            if ($(this).hasClass('active')) {
                return;
            }
            var framework = $(this).attr('data-framework');
            self.framework = framework;
            self.renderCase();
            self.renderCodeEditor(true);
            // self.runCode(self.framework);
        });
        // bind framework switch event
        $('.left-panel .common-nav-folder.expandable .common-nav-title').on('click', function () {
            if ($(this)
                .parent()
                .hasClass('expanded')) {
                $('.left-panel .common-nav-folder.expandable').each(function () {
                    $(this).removeClass('expanded');
                });
            }
            else {
                $('.left-panel .common-nav-folder.expandable').each(function () {
                    $(this).removeClass('expanded');
                });
                $(this)
                    .parent()
                    .addClass('expanded');
            }
        });
        // bind page language switch event
        $('.page-language-switch').on('click', function () {
            utils_1.changePageLanguage();
            self.refresh();
        });
        this.clipboard = new Clipboard($('.case-code-topbar .case-copy')[0], {
            text: function () {
                return _this.editor.getValue();
            },
        });
        this.clipboard.on('success', function (e) {
            if ($('.case-code-topbar .case-tip').length !== 0) {
                $('.case-code-topbar .case-tip').remove();
            }
            var template = "<span class=\"case-tip\">" + (utils_1.getPageLanguage() === 'cn' ? '复制成功' : 'copy successed') + "</span>";
            $(template).insertBefore('.case-code-topbar .case-copy');
            e.clearSelection();
        });
        this.clipboard.on('error', function (e) {
            if ($('.case-code-topbar .case-tip').length !== 0) {
                $('.case-code-topbar .case-tip').remove();
            }
            var template = "<span class=\"case-tip err\">" + (utils_1.getPageLanguage() === 'cn' ? '复制失败' : 'copy failed') + "</span>";
            $(template).insertBefore('.case-code-topbar .case-copy');
            e.clearSelection();
        });
        $(document).on('click', '.case-btn-cont .case-run', function (e) {
            self.runCode($('.case-code-switch .active')
                .html()
                .trim()
                .toLowerCase());
        });
    };
    Demo.prototype.unbindEvent = function () {
        $('.left-panel').off('click', '.common-nav-item');
        $('.case-box .case-code-switch .case-code-switch-item').off('click');
        $('.left-panel .common-nav-folder.expandable .common-nav-title').off('click');
        $('.page-language-switch').off('click');
        if (this.clipboard && this.clipboard.destroy) {
            this.clipboard.destroy();
        }
    };
    Demo.prototype.render = function () {
        this.renderLeftMenu();
        this.renderLanguage();
        this.renderDemoTitle();
        this.renderCodeEditor();
        this.renderCase();
    };
    Demo.prototype.refresh = function () {
        this.unbindEvent();
        this.renderNav(utils_1.getPageLanguage());
        this.render();
        this.bindEvent();
    };
    return Demo;
}());
// load monaco editor
var load = require('load-script');
var loadEditor = function () {
    var self = _this;
    return new Promise(function (resolve, reject) {
        load('/lib/monaco-editor/min/vs/loader.js', function (err) {
            if (!err) {
                window['require'].config({
                    paths: { vs: '/lib/monaco-editor/min/vs' },
                });
                window['require'](['vs/editor/editor.main'], function () {
                    resolve(this);
                });
            }
            else {
                reject(err);
            }
        });
    });
};
loadEditor().then(function (monaco) {
    new Demo();
}, function (err) {
    console.error(err);
});
//# sourceMappingURL=index.js.map