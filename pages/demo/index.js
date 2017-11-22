
require('./index.scss');
const $ = require('jquery');

const CONS = require('../constants');

const codeConfig = require('../../examples/index');

const navTpl = require('./tpl/nav.tpl');
const rightPanelTpl = require('./tpl/rightPanel.tpl');
const caseBoxJsonTpl = require('./tpl/caseBoxJson.tpl');

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
        jsonCode = require(`../../examples/${chartType}/${folder}/json.js`);
        reactCode = require(`../../examples/${chartType}/${folder}/react.js`);
        vueCode = require(`../../examples/${chartType}/${folder}/vue.js`);
        angularCode = require(`../../examples/${chartType}/${folder}/angular.js`);
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
