"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var oui_dom_utils_1 = require("oui-dom-utils");
var oui_dom_events_1 = require("oui-dom-events");
var fetch = require("cross-fetch");
var iframe_templage_1 = require("./iframe-templage");
/**
 * Language Utils
 */
exports.ALL_PAGE_LANGUAGES = ['en', 'cn'];
exports.DEFAULT_PAGE_LANGUAGE = 'en';
exports.getPageLanguage = function () {
    var pageLanguageInStore = window.localStorage.getItem('page_language');
    if (pageLanguageInStore &&
        exports.ALL_PAGE_LANGUAGES.indexOf(pageLanguageInStore) !== -1) {
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
        var navigatorLanguage = window.navigator.language.toLowerCase();
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
exports.generateHashtag = function (typeKey, folder, item) {
    if (typeKey && folder && item) {
        return "#/" + typeKey + "/" + folder + "/" + item;
    }
    else if (typeKey && folder) {
        return "#/" + typeKey + "/" + folder;
    }
    else if (typeKey) {
        return "#/" + typeKey + "/" + folder;
    }
    return '#';
};
exports.getFolderAndItem = function (isDemo) {
    if (isDemo === void 0) { isDemo = true; }
    var hash = window.location.hash;
    var result = hash.split('/');
    if (result.length === 0) {
        return { tempKey: '', folder: '', item: '' };
    }
    if (!isDemo) {
        return {
            folder: result[2] || '',
            item: result[3] || '',
        };
    }
    return {
        typeKey: result[1] || '',
        folder: result[2] || '',
        item: result[3] || '',
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
exports.get = function (url) {
    return new Promise(function (resolve) {
        return (fetch(url)
            //没必要传参数，只要url拼接即可
            .then(function (res) {
            if (res.status >= 400) {
                return {
                    flag: false,
                };
            }
            return {
                flag: true,
                data: res,
            };
        })
            .then(function (json) { return resolve(json); }));
    });
};
exports.getInitNav = function () {
    var selectedNav = window.localStorage.getItem('selected_nav');
    if (selectedNav)
        return selectedNav;
    return null;
};
exports.setInitNav = function (nav) {
    window.localStorage.setItem('selected_nav', nav);
};
var codeDeal = function (oriCode, framework) {
    var code = oriCode;
    var reg = /import\s.*?\{.*?\}.*?;/g;
    if (reg.test(code)) {
        var injects = code.match(reg);
        injects.forEach(function (item) {
            var tempVar = item.replace(/(.*?\{|\}.*)/g, '');
            var tempPkg = iframe_templage_1.pkgMap[item
                .replace(/^(.*?['"])/g, '')
                .replace(/['"].*/, '')
                .trim()];
            var temp = "const {" + tempVar + "}=" + tempPkg + ";";
            code = code.replace(item, temp);
        });
    }
    code = code
        .replace(/import.*?;/g, '')
        .replace(/as\s*?any\s*?;/g, '')
        .replace(/\(window\s+?as\s+?any\)/g, 'window')
        .replace(/as\s*?any\s*?/g, '')
        .replace(/const.*?require.*?;/g, '');
    switch (framework) {
        case 'react':
            code = code
                .replace(/export\s*?default/g, '');
            code += ' ReactDOM.render(<App />, document.getElementById("mount"));';
            break;
        case 'vue':
            var vueRes = {};
            {
                var template_1 = code.match(/<template[\s\S]*?>[\s\S]*?<\/template>/gi)[0].replace(/<\/?template[\s\S]*?>/gi, '');
                var script = code.match(/<scrip[\s\S]*?>[\s\S]*?<\/script>/gi)[0].replace(/<\/?script[\s\S]*?>/gi, '');
                var variable = script.replace(/export\s*?default[\s\S]*?$/, '');
                var exports_1 = script.match(/export\s*?default[\s\S]*?$/)[0].replace(/export\s*?default\s*?\{/gi, '').replace(/\}\s*?;?\s*?$/gi, '');
                vueRes.template = template_1;
                vueRes.variable = variable;
                vueRes.exports = exports_1;
            }
            return vueRes;
        default:
    }
    return code;
};
exports.combineFrameCode = function (framework, oriCode) {
    // 由于replace第二个参数$**会将后续的内容进行对正则进行匹配影响最终生成的html，故使用字符拼接
    var code = codeDeal(oriCode, framework);
    if (iframe_templage_1.template[framework]) {
        switch (framework) {
            case 'vue':
                {
                    var temp_1 = iframe_templage_1.template['vue'];
                    Object.keys(code).map(function (item) {
                        var split = "{" + item + "}";
                        var tempArr = temp_1.split(split);
                        temp_1 = tempArr[0] + code[item] + tempArr[1];
                    });
                    return temp_1;
                }
            default: {
                if (/<script>/.test(oriCode) || /<template>/.test(oriCode)) {
                    return '';
                }
                var temp = iframe_templage_1.template[framework].split('{code}');
                return temp[0] + code + temp[1];
            }
        }
    }
    return '';
};
//# sourceMappingURL=utils.js.map