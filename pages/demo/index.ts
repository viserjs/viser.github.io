require('./index.scss');

import * as $ from 'jquery';
import Viser from 'viser';
import Vue from 'vue';
import ViserVue from 'viser-vue'
import * as ReactDOM from 'react-dom';
import exampleOrigin from './examples/index';
import locale from '../common/locale';
import {
  getNameByLanguage,
  ALL_PAGE_LANGUAGES, DEFAULT_PAGE_LANGUAGE,
  getPageLanguage, setPageLanguage, initPageLanguage, changePageLanguage
} from '../common/utils';

const navTpl = require('./nav.tpl');

const ALL_FRAMEWORKS = ['react', 'vue', 'angular'];

class Demo {
  attrs: {
    code: any,
    framework: string,
    chartType: string,
    exampleIndex: number,
  } = {
    code: {},
    framework: 'react',
    chartType: 'line',
    exampleIndex: 0,
  };

  exampleList: any = {};

  constructor() {
    initPageLanguage();
    this.initExampleList();
    this.initUrlQuery();
    this.initCode();

    this.render();
    this.bindEvent();

    this.refreshCase(this.attrs.framework);
  }

  initExampleList() {
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
  }

  initUrlQuery() {
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
  }

  initCode() {
    const { chartType, exampleIndex } = this.attrs;
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
  }

  bindEvent() {
    const self = this;
    // TODO: bind JSFiddle event
    // $('.case-box .op .run').on('click', function() {
    //   const index = $(this).attr('data-index');
    // });

    // bind left menu event
    $('.case-box .case-code-switch .case-code-switch-item').on('click', function() {
      const framework = $(this).attr('data-framework');
      self.attrs.framework = framework;
      self.refreshCase(framework);
    });

    // bind framework switch event
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

    // bind page language switch event
    $('.page-language-switch').on('click', function() {
      changePageLanguage();

      self.refresh();
    });
  }

  unbindEvent() {
    $('.case-box .case-code-switch .case-code-switch-item').off('click');
    $('.left-panel .common-nav-folder.expandable .common-nav-title').off('click');
    $('.page-language-switch').off('click');
  }

  refreshCase(framework) {
    // change top framework switch
    $('.case-box .case-code-switch-item').each(function () {
      $(this).removeClass('active');
      if (framework === $(this).attr('data-framework')) {
        $(this).addClass('active');
      }
    });
    // change code editor box
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

  renderCodeEditor() {
    ALL_FRAMEWORKS.forEach((framework) => {
      this.presetEditor(framework);
    });
  }

  renderLanguage() {
    const language = getPageLanguage();

    $('.common-header .page-language-switch')
      .removeClass('en').removeClass('cn')
      .addClass(language);

    if (locale && locale[language] && locale[language].length) {
      locale[language].forEach((o) => {
        $(o.selector).html(o.text);
      });
    }
  }

  renderDemoTitle() {
    const code = this.attrs.code;
    $('.case-type').html(getNameByLanguage(code));
  }

  renderLeftMenu() {
    const menuList = {};
    Object.keys(this.exampleList).forEach((key) => {
      const chartTypeMatched = key === this.attrs.chartType;
      menuList[key] = {
        ...this.exampleList[key],
        folderDisplayName: getNameByLanguage(this.exampleList[key]),
        examples: this.exampleList[key].examples.map((o, i) => {
          const exampleIndexMatched = i === this.attrs.exampleIndex;
          return {
            ...o,
            itemDisplayName: getNameByLanguage(o),
            activeClass: chartTypeMatched && exampleIndexMatched ? 'active' : '',
          };
        }),
        expanded: chartTypeMatched ? 'expanded' : '',
      };
    });
    $('.left-panel').empty();
    $('.left-panel').append(navTpl({
      menuList,
    }));
  }

  render() {
    this.renderCodeEditor();
    this.renderLanguage();
    this.renderDemoTitle();
    this.renderLeftMenu();
  }

  refresh() {
    this.unbindEvent();
    this.render();
    this.bindEvent();
  }
}

// load monaco editor
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
    new Demo();
  },
  err => {
    console.error(err);
  }
)

