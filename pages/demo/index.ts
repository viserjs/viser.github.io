require('./index.scss');

import * as $ from 'jquery';
import Viser from 'viser';
import Vue from 'vue';
import ViserVue from 'viser-vue'
import * as ReactDOM from 'react-dom';

const exampleOrigin = require('./examples/index');

const navTpl = require('./nav.tpl');

const ALL_FRAMEWORK = ['react', 'vue', 'angular'];

class App {
  attrs: {
    code: any,
    framework: string,
    chartType: string,
    exampleIndex: number,
  };

  exampleList: any;

  constructor() {
    const exampleList = {};
    Object.keys(exampleOrigin).forEach((key) => {
      exampleList[key] = {
        ...exampleOrigin[key],
        examples: exampleOrigin[key].examples.map((example) => {
          return {
            ...example,
            linkName: example.enName.toLowerCase().replace(/\s/g, '-'),
          }
        }),
      }
    });
    this.exampleList = exampleList;

    this.attrs = {
      code: {},
      framework: 'react',
      chartType: 'line',
      exampleIndex: 0,
    };

    this.init();
  }

  init() {
    const search = window.location.search.substr(1);

    const typeReg = new RegExp('(^|&)type=([^&]*)(&|$)');
    const typeResult = search.match(typeReg);
    const chartType = typeResult ? typeResult[2] : Object.keys(this.exampleList)[0];
    this.attrs.chartType = chartType;

    const exampleReg = new RegExp('(^|&)example=([^&]*)(&|$)');
    const exampleResult = search.match(exampleReg);
    const exampleLinkName = exampleResult ? exampleResult[2] : '';

    let exampleIndex = 0;
    this.exampleList[chartType].examples.forEach((example, i) => {
      if (example.linkName === exampleLinkName) {
        exampleIndex = i;
      }
    })

    this.attrs.exampleIndex = exampleIndex;

    const example = this.exampleList[chartType].examples[exampleIndex] || {};
    const { path, cnName, enName } = example;

    let reactCode = '';
    let vueCode = '';
    let angularCode = '';

    let reactPath;
    let vuePath;
    let angularPath;

    try {
      reactCode = require(`!!raw-loader!./examples/${chartType}/${path}/react.tsx`);
      vueCode = require(`!!raw-loader!./examples/${chartType}/${path}/vue.vue`);
      angularCode = require(`!!raw-loader!./examples/${chartType}/${path}/angular.ts`);

      reactPath = `./examples/${chartType}/${path}/react.tsx`;
      vuePath = `./examples/${chartType}/${path}/vue.vue`;
      angularPath = `./examples/${chartType}/${path}/angular.ts`;
    } catch(err) {
      console.error(err);
    } finally {
      this.attrs.code = {
        reactCode, vueCode, angularCode,
        reactPath, vuePath, angularPath,
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
    });

    $('.left-panel .common-nav-folder.expandable .common-nav-title').on('click', function() {
      if ($(this).parent().hasClass('expanded')) {
        $('.left-panel .common-nav-folder.expandable').each(function () {
          $(this).removeClass('expanded');
        });
      } else {
        $('.left-panel .common-nav-folder.expandable').each(function () {
          $(this).removeClass('expanded');
        });
        $(this).parent().addClass('expanded');
      }
    });
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

    delete require.cache[require.resolve(`${codePath}`)];
    require(`${codePath}`);

    if (framework === 'vue') {
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
    const menuList = {};
    Object.keys(this.exampleList).forEach((key) => {
      const chartTypeMatched = key === this.attrs.chartType;
      menuList[key] = {
        ...this.exampleList[key],
        examples: this.exampleList[key].examples.map((o, i) => {
          const exampleIndexMatched = i === this.attrs.exampleIndex;
          return {
            ...o,
            activeClass: chartTypeMatched && exampleIndexMatched ? 'active' : '',
          };
        }),
        expanded: chartTypeMatched ? 'expanded' : '',
      };
    });

    $('.left-panel').append(navTpl({
      menuList,
    }));

    const code = this.attrs.code;
    $('.case-type').html(code.enName);

    ALL_FRAMEWORK.forEach((framework) => {
      this.presetEditor(framework);
    });
  }
}

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

