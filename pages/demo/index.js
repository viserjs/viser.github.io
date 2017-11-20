
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
      language: 'json',
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
    const lang = langResult ? langResult[2] : 'json';
    const chartType = typeResult? typeResult[2] : Object.keys(codeConfig)[0];
    this.attrs.language = lang;
    this.attrs.chartType = chartType;
    const exampleFolders = codeConfig[chartType].examples || [];
    exampleFolders.forEach((folder) => {
      const code = require(`../../examples/${chartType}/${folder}/${lang}Code.js`);
      this.attrs.codes.push(code);
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
    const cnName = codeConfig[this.attrs.chartType].cnName;
    $('#rightPanel').append(rightPanelTpl({cnName, noCodes: this.attrs.codes.length ? false : true}));
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
    const language = this.attrs.language;
    switch(language) {
      case 'json':
        this.renderJson();
        break;
      case 'react':
        this.renderReact();
        break;
      case 'rax':
        break;
      case 'vue':
        this.renderVue();
        break;
      case 'angular':
        break;
      default:
        return;
    }
  }

  renderJson() {
    if (!this.attrs.codes.length) {
      return;
    }
    $('.case-list').empty();
    this.attrs.codes.forEach((code, i) => {
      $('.case-list').append(caseBoxJsonTpl({i}));
      var editor = ace.edit(`code${i}`);
      const showCode = JSON.stringify(code.config, null, 2);
      editor.setTheme("ace/theme/textmate");
      editor.env.editor.setReadOnly(true);
      editor.renderer.setShowGutter(false);
      editor.env.editor.setValue(showCode, 1);

      code.config.chart.container = `example${i}`;
      RechartCore.ChartBuilder(code.config);
    });
  }
  getJsfiddleJsonData(index) {
    const code = this.attrs.codes[index];
    const config = JSON.stringify(code.config, null, 2);
    const data = {
      js: `var config = ${config};
RechartCore.ChartBuilder(config);
      `,
      html: `<script src="${CONS.URL.rechartCore}"></script>
<div id="example${index}"></div>`,
      panel_css: 1,
      panel_js: 3
    };
    return data;
  }


  renderVue() {
    if (!this.attrs.codes.length) {
      return;
    }
    $('.case-list').empty();
    this.attrs.codes.forEach((code, i) => {
      const vueTpl = `<div id="example${i}">${code.tpl}</div>`;
      const scriptCode = `
var config = ${code.config}
new Vue({
  el: '#example${i}',
  data: {
    config,
  }
});
`;

      $('.case-list').append(caseBoxVueTpl({ tpl: vueTpl, i }));
      var editor = ace.edit(`code${i}`);
      const showCode = `${vueTpl}${scriptCode}`;
      editor.setTheme("ace/theme/textmate");
      editor.env.editor.setReadOnly(true);
      editor.renderer.setShowGutter(false);
      editor.env.editor.setValue(showCode, 1);
      $('.case-list').append(`<script type="text/javascript">${scriptCode}</script>`);
    });
  }

  getJsfiddleVueData(index) {
    const code = this.attrs.codes[index];
    const config = JSON.stringify(code.config, null, 2);
    const data = {
      js: `var config = ${code.config};
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
<div id="example">${code.tpl}</div>`,
      panel_css: 1,
      panel_js: 3
    };
    return data;
  }

  renderReact() {
    if (!this.attrs.codes.length) {
      return;
    }
    $('.case-list').empty();
    this.attrs.codes.forEach((code, i) => {
      const scriptCode = `
var config = ${code.config};
${code.script}
ReactDOM.render(${code.template}, document.getElementById('example${i}'))`;

      $('.case-list').append(caseBoxReactTpl({ i }));
      var editor = ace.edit(`code${i}`);
      editor.setTheme("ace/theme/textmate");
      editor.env.editor.setReadOnly(true);
      editor.renderer.setShowGutter(false);
      editor.env.editor.setValue(scriptCode, 1);
      $('.case-list').append(`<script type="text/babel">${scriptCode}</script>`);
    });
  }


  getJsfiddleReactData(i) {
    const code = this.attrs.codes[i];
    const data = {
      js: `
var config = ${code.config};
${code.script}
ReactDOM.render(${code.template},document.getElementById('example${i}'));`,
      html: `<script src="${CONS.URL.react}"></script>
<script src="${CONS.URL.reactDom}"></script>
<script src="${CONS.URL.rechartCore}"></script>
<script src="${CONS.URL.rechartReact}"></script>
<div id="example${i}"></div>`,
      panel_css: 1,
      panel_js: 3
    };

    return data;
  }
}


new App().init();
