"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var URL = {
    react: 'https://unpkg.com/react@15/dist/react.min.js',
    reactDom: 'https://unpkg.com/react-dom@15/dist/react-dom.min.js',
    vue: 'https://viserjs.github.io/lib/vue.min.js',
    browser: 'https://cdn.bootcss.com/babel-core/5.8.38/browser.min.js',
    viser: 'https://unpkg.com/viser@1.0.5/umd/viser.min.js',
    viserReact: 'https://unpkg.com/viser-react@1.0.4/umd/viser-react.min.js',
    rechartVue: 'https://unpkg.com/viser-vue@1.0.4/umd/viser-vue.min.js',
    rechartNg: 'https://unpkg.com/viser-ng@1.0.2/umd/viser-ng.min.js',
};
var getJsfiddleJsonData = function (code) {
    code.config.chart.container = 'example';
    var config = JSON.stringify(code.config, null, 2);
    var data = {
        js: "var config = " + config + ";\nViser.default(config);\n      ",
        html: "<script src=\"" + URL.viser + "\"></script>\n<div id=\"example\"></div>",
        panel_css: 1,
        panel_js: 3
    };
    return data;
};
var getJsfiddleVueData = function (code) {
    var _a = _this.attrs.codes, vueCode = _a.vueCode, jsonCode = _a.jsonCode;
    var config = JSON.stringify(jsonCode.config, null, 2);
    var data = {
        js: "var config = " + config + ";\nnew Vue({\n  el: '#example',\n  data: {\n    config,\n  },\n});\n        ",
        html: "\n<script src=\"" + URL.vue + "\"></script>\n<script src=\"" + URL.rechartVue + "\"></script>\n<div id=\"example\">" + vueCode.template + "</div>",
        panel_css: 1,
        panel_js: 3
    };
    return data;
};
var getJsfiddleReactData = function (code) {
    var _a = _this.attrs.codes, reactCode = _a.reactCode, jsonCode = _a.jsonCode;
    var config = JSON.stringify(jsonCode.config, null, 2);
    var data = {
        js: "\nvar config = " + config + ";\n" + (reactCode.script || '') + "\nReactDOM.render(" + reactCode.template + ",document.getElementById('example'));",
        html: "<script src=\"" + URL.react + "\"></script>\n<script src=\"" + URL.reactDom + "\"></script>\n<script src=\"" + URL.browser + "\"></script>\n<script src=\"" + URL.viser + "\"></script>\n<script src=\"" + URL.viserReact + "\"></script>\n<div id=\"example\"></div>",
        panel_css: 1,
        panel_js: 3
    };
    return data;
};
var getJsfiddleData = function (framework, code) {
    switch (framework) {
        case 'json':
            return _this.getJsfiddleJsonData(code);
        case 'react':
            return _this.getJsfiddleReactData(code);
        case 'vue':
            return _this.getJsfiddleVueData(code);
        case 'angular':
            return;
        default:
            return;
    }
};
exports.jumpToJsfiddle = function (framework, code) {
    var data = getJsfiddleData(framework, code);
    var formAttributes = {
        method: 'post',
        action: 'https://jsfiddle.net/api/post/library/pure/',
        target: '_blank',
        id: 'fiddle-form',
        style: 'display: none;'
    };
    var node = document.createElement('textarea');
    var form = document.createElement('form');
    for (var attr in formAttributes) {
        form.setAttribute(attr, formAttributes[attr]);
    }
    for (var name_1 in data) {
        node.name = name_1;
        node.value = data[name_1].toString();
        form.appendChild(node.cloneNode());
    }
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
};
//# sourceMappingURL=jsfiddleUtils.js.map