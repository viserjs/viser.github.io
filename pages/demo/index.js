import { setTimeout } from 'timers';

require('./index.scss');
const $ = require('jquery');

const CONS = require('../constants');
const codeConfig = require('../../examples/index');
const navTpl = require('./tpl/nav.tpl');

const ALL_FRAMEWORK = ['react', 'vue', 'angular'];

class App {
  constructor() {
    this.attrs = {
      code: {},
      framework: 'react',
      chartType: 'bar',
    };
  }
  init() {
    // 根据 url 路由转发
    const search = window.location.search.substr(1);


    const typeReg = new RegExp('(^|&)type=([^&]*)(&|$)');
    const typeResult = search.match(typeReg);
    const chartType = typeResult ? typeResult[2] : Object.keys(codeConfig)[0];
    this.attrs.chartType = chartType;

    const exampleReg = new RegExp('(^|&)example=([^&]*)(&|$)');
    const exampleResult = search.match(exampleReg);
    const exampleIndex = exampleResult ? parseInt(exampleResult[2], 10) : 0;

    const example = codeConfig[chartType].examples[exampleIndex] || codeConfig[chartType].examples[0] || {};
    const { path, cnName, enName } = example;

    let jsonCode = '';
    let reactCode = '';
    let vueCode = '';
    let angularCode = '';
    try {
      jsonCode = require(`../../examples/${chartType}/${path}/json.js`);
      reactCode = require(`../../examples/${chartType}/${path}/react.js`);
      vueCode = require(`../../examples/${chartType}/${path}/vue.js`);
      angularCode = require(`../../examples/${chartType}/${path}/angular.js`);
    } catch(e) {
      console.log('exception:', e);
    } finally {
      this.attrs.code = {
        jsonCode, reactCode, vueCode, angularCode,
        cnName, enName,
      };
    }

    this.render();
    this.refreshCase(this.attrs.framework);
    this.bindEvent();
  }

  render() {
    $('.left-panel').append(navTpl({
      codeConfig,
      chartType: this.attrs.chartType,
    }));

    const code = this.attrs.code;
    $('.case-type').html(code.enName);

    const runCode = code['jsonCode'];
    runCode.config.chart.container = 'case-mount-node';
    Viser.default(runCode.config);

    ALL_FRAMEWORK.forEach((framework) => {
      this.presetEditor(framework, code);
    });
  }

  bindEvent() {
    const self = this;
    $('.case-box .op .run').on('click', function() {
      const index = $(this).attr('data-index');

      const data = self.getJsfiddleData(index);
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

    $('.case-box .case-code-switch .case-code-switch-item').on('click', function() {
      const framework = $(this).attr('data-framework');
      self.attrs.framework = framework;
      self.refreshCase(framework);
    })
  }

  refreshCase(framework) {
    $('.case-box .case-code-switch-item').each(function () {
      $(this).removeClass('active');
      if (framework === $(this).attr('data-framework')) {
        $(this).addClass('active');
      }
    });
    $('.case-box .case-code-detail').each(function () {
      $(this).removeClass('active');
      if (framework === $(this).attr('data-framework')) {
        $(this).addClass('active');
      }
    });
  }

  presetEditor(framework, code) {
    window.monaco.editor.create(document.getElementById(`${framework}-editor`), {
      value: code[`${framework}Code`].template,
      language: framework !== 'vue' ? 'javascript' : 'html',
      lineNumbers: false,
      scrollBeyondLastLine: false,
      renderLineHighlight: 'none',
      readOnly: true,
      theme: 'vs',
      minimap: {
        enabled: false,
      }
    });
  }

  getJsfiddleData(index) {
    const framework = this.attrs.framework;
    switch(framework) {
      case 'json':
        return this.getJsfiddleJsonData(index);
      case 'react':
        return this.getJsfiddleReactData(index);
      case 'vue':
        return this.getJsfiddleVueData(index);
      case 'angular':
        return;
      default:
        return;
    }
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

/**
 * @method 方法用于加载 Monaco-editor
 * @author 五灵
 */
const load = require('load-script');
const loadEditor = () => {
  const self = this;
  return new Promise((resolve, reject) => {
    load('/lib/monaco-editor/min/vs/loader.js', (err) => {
      if (!err) {
        window['require'].config({
          paths: { vs: '/lib/monaco-editor/min/vs' }
        });
        window['require'](['vs/editor/editor.main'], function () {
          resolve(this);
        });
      } else {
        reject(err);
      }
    });
  });
};
loadEditor().then(
  monaco => {
    new App().init();
  },
  err => {
    console.log(err);
  }
)

