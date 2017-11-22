
require('./index.scss');
const $ = require('jquery');

const CONS = require('../constants');

const codeConfig = require('../../examples/index');

const navTpl = require('./tpl/nav.tpl');
const rightPanelTpl = require('./tpl/rightPanel.tpl');
const caseBoxJsonTpl = require('./tpl/caseBoxJson.tpl');
const caseBoxVueTpl = require('./tpl/caseBoxVue.tpl');
const caseBoxReactTpl = require('./tpl/caseBoxReact.tpl');

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
    const langReg = new RegExp('(^|&)language=([^&]*)(&|$)');
    const typeReg = new RegExp('(^|&)type=([^&]*)(&|$)');
    const search = window.location.search.substr(1);

    const langResult = search.match(langReg);
    const typeResult = search.match(typeReg);
    const lang = langResult ? langResult[2] : 'react';
    const chartType = typeResult? typeResult[2] : Object.keys(codeConfig)[0];
    this.attrs.language = lang;
    this.attrs.chartType = chartType;
    const exampleFolders = codeConfig[chartType].examples || [];
    exampleFolders.forEach((folder) => {
      let jsonCode = '';
      let reactCode = '';
      let vueCode = '';
      let angularCode = '';
      try {
        jsonCode = require(`../../examples/${chartType}/${folder}/jsonCode.js`);
        reactCode = require(`../../examples/${chartType}/${folder}/reactCode.js`);
        vueCode = require(`../../examples/${chartType}/${folder}/vueCode.js`);
        angularCode = require(`../../examples/${chartType}/${folder}/angularCode.js`);
      } catch(e) {
        console.log('exception:', e);
      } finally {
        this.attrs.codes.push({
          jsonCode, reactCode, vueCode, angularCode
        });
      }

    });

    this.render();
  }
  render() {
    this.renderNav();
    this.renderRightPanel();

    this.renderExample();
    this.bindEvent();
  }

  renderNav() {
    $('#nav').append(navTpl({
      codeConfig,
      language: this.attrs.language,
      chartType: this.attrs.chartType,
    }));
  }

  renderRightPanel() {
    $('#rightPanel').append(rightPanelTpl({noCodes: this.attrs.codes.length ? false : true}));
  }

  bindEvent() {
    var _this = this;
    $('.case-box .op .run').click(function() {
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
      $('.case-list').append(caseBoxJsonTpl({name: enName, i}));
      const runCode = code['jsonCode'];
      runCode.config.chart.container = `example${i}`;
      Viser.default(runCode.config);

      var editor = ace.edit(`code${i}`);
      const showCode = _this.getShowCode(code, i);
      editor.setTheme("ace/theme/github");
      editor.getSession().setMode("ace/mode/javascript");
      editor.setHighlightActiveLine(true);
      editor.setShowPrintMargin(false);
      editor.env.editor.setReadOnly(true);
      editor.renderer.setShowGutter(false);
      editor.env.editor.setValue(showCode, 1);
    });
  }

  getShowCode(code, i) {
    const language = this.attrs.language;
    switch(language) {
      case 'json':
        return this.getJsonCode(code);
      case 'react':
        return this.getReactCode(code);
      case 'vue':
        return this.getVueCode(code);
      case 'angular':
        break;
      default:
        return;
    }
  }

  getJsonCode(code) {
    return JSON.stringify(code['jsonCode'].config, null, 2);
  }
  getReactCode(code) {
    const languageCode = code[`reactCode`];
    const jsonCode = JSON.stringify(code['jsonCode'].config, null, 2);
    return `
var config = ${jsonCode};
${languageCode.script || ''}
ReactDOM.render(${languageCode.template}, document.getElementById('example'))`;
  }

  getVueCode(code) {
    const languageCode = code[`vueCode`];
    const jsonCode = JSON.stringify(code['jsonCode'].config, null, 2);
    let vueTpl = `<div id="example">${languageCode.template}</div>`;
    let scriptCode = `
var config = ${jsonCode}
new Vue({
  el: '#example',
  data: {
    config,
  }
});
`;
    return `${vueTpl}${scriptCode}`;
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
