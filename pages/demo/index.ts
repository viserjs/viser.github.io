require('./index.scss');

import * as $ from 'jquery';
import Viser from 'viser';
import Vue from 'vue';
import ViserVue from 'viser-vue'
import * as ReactDOM from 'react-dom';

const exampleList = require('./examples/index');
const navTpl = require('./nav.tpl');

const ALL_FRAMEWORK = ['react', 'vue', 'angular'];

class App {
  attrs: {
    code: any,
    framework: string,
    chartType: string,
  };

  constructor() {
    this.attrs = {
      code: {},
      framework: 'react',
      chartType: 'bar',
    };

    this.init();
  }

  init() {
    // 根据 url 路由转发
    const search = window.location.search.substr(1);

    const typeReg = new RegExp('(^|&)type=([^&]*)(&|$)');
    const typeResult = search.match(typeReg);
    const chartType = typeResult ? typeResult[2] : Object.keys(exampleList)[0];
    this.attrs.chartType = chartType;

    const exampleReg = new RegExp('(^|&)example=([^&]*)(&|$)');
    const exampleResult = search.match(exampleReg);
    const exampleIndex = exampleResult ? parseInt(exampleResult[2], 10) : 0;

    const example = exampleList[chartType].examples[exampleIndex] || exampleList[chartType].examples[0] || {};
    const { path, cnName, enName } = example;

    let jsonCode = '';
    let reactCode = '';
    let vueCode = '';
    let angularCode = '';

    let jsonPath;
    let reactPath;
    let vuePath;
    let angularPath;

    try {
      jsonCode = require(`!!raw-loader!./examples/${chartType}/${path}/json.ts`);
      reactCode = require(`!!raw-loader!./examples/${chartType}/${path}/react.tsx`);
      vueCode = require(`!!raw-loader!./examples/${chartType}/${path}/vue.vue`);
      angularCode = require(`!!raw-loader!./examples/${chartType}/${path}/angular.ts`);

      jsonPath = `./examples/${chartType}/${path}/json.ts`;
      reactPath = `./examples/${chartType}/${path}/react.tsx`;
      vuePath = `./examples/${chartType}/${path}/vue.vue`;
      angularPath = `./examples/${chartType}/${path}/angular.ts`;
    } catch(err) {
      console.error(err);
    } finally {
      this.attrs.code = {
        jsonCode, reactCode, vueCode, angularCode,
        jsonPath, reactPath, vuePath, angularPath,
        cnName, enName,
      };
    }

    this.render();
    this.refreshCase(this.attrs.framework);
    this.bindEvent();
  }

  bindEvent() {
    const self = this;
    $('.case-box .op .run').on('click', function() {
      const index = $(this).attr('data-index');
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
    this.runCode(framework);
  }

  presetEditor(framework) {
    const { code } = this.attrs;
    (window as any).monaco.editor.create(document.getElementById(`${framework}-editor`), {
      value: code[`${framework}Code`],
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

  runCode(framework) {
    const { code } = this.attrs;
    const mount = document.getElementById('mount');
    ReactDOM.unmountComponentAtNode(mount);
    mount.innerHTML = '';

    const codePath = code[`${framework}Path`];

    if (framework !== 'vue') {
      delete require.cache[require.resolve(`${codePath}`)];
      require(`${codePath}`);
    } else {
      const VueApp = require(`${codePath}`).default;
      const container = document.createElement('div');
      document.getElementById('mount').appendChild(container);
      Vue.use(ViserVue)
      const runCodeItem = new Vue({
        el: container,
        template: '<VueApp />',
        components: { VueApp }
      });
    }
  }

  render() {
    $('.left-panel').append(navTpl({
      menuList: exampleList,
      chartType: this.attrs.chartType,
    }));

    const code = this.attrs.code;
    $('.case-type').html(code.enName);

    ALL_FRAMEWORK.forEach((framework) => {
      this.presetEditor(framework);
    });
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
    new App();
  },
  err => {
    console.error(err);
  }
)

