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
  getPageLanguage, setPageLanguage, initPageLanguage, changePageLanguage,
  generateHashtag, getFolderAndItem,
} from '../common/utils';
import './index.scss';

const navTpl = require('./nav.tpl');

const ALL_FRAMEWORKS = ['react', 'vue', 'angular'];
const DEFAULT_FOLDER = 'line';
const DEFAULT_ITEM = 'basic-line';

class Demo {
  framework: string = 'react';
  editor: any;

  constructor() {
    initPageLanguage();

    this.initEditor();

    this.render();
    this.bindEvent();
  }

  initEditor() {
    this.editor = (window as any).monaco.editor.create(document.getElementById('monaco-editor'), {
      value: '',
      language: 'javascript',
      lineNumbers: false,
      scrollBeyondLastLine: false,
      automaticLayout: true,
      renderLineHighlight: 'none',
      readOnly: true,
      theme: 'vs',
      minimap: {
        enabled: false,
      }
    });
  }

  getCode() {
    const { folder, item } = this.getDemoFolderAndItem();

    const examples = exampleOrigin[folder].examples;
    const filterExamples = examples.filter((ex) => {
      const itemKey = this.getDemoItemKey(ex);
      if (item === itemKey) {
        return true;
      }
      return false;
    })

    if (!filterExamples || !filterExamples.length) {
      return {};
    }
    const { path, cnName, enName } = filterExamples[0];

    let reactCode = '';
    let vueCode = '';
    let angularCode = '';

    let reactPath = '';
    let vuePath = '';
    let angularPath = '';

    try {
      reactCode = require(`!!raw-loader!./examples/${folder}/${path}/react.tsx`);
      vueCode = require(`!!raw-loader!./examples/${folder}/${path}/vue.vue`);
      angularCode = require(`!!raw-loader!./examples/${folder}/${path}/angular.ts`);

      reactPath = `./examples/${folder}/${path}/react.tsx`;
      vuePath = `./examples/${folder}/${path}/vue.vue`;
      angularPath = `./examples/${folder}/${path}/angular.ts`;
    } catch(err) {
      console.error(err);
    }

    return {
      reactCode, vueCode, angularCode,
      reactPath, vuePath, angularPath,
      cnName, enName,
    };
  }

  getDemoFolderAndItem() {
    const { folder, item } = getFolderAndItem();
    return {
      folder: folder || DEFAULT_FOLDER,
      item: item || DEFAULT_ITEM,
    };
  }

  getDemoItemKey(example) {
    return example.enName.toLowerCase().replace(/\s/g, '-');
  }

  runCode(framework) {
    const code = this.getCode();
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

  renderCase() {
    const self = this;
    // change top framework switch
    $('.case-box .case-code-switch-item').each(function () {
      $(this).removeClass('active');
      if (self.framework === $(this).attr('data-framework')) {
        $(this).addClass('active');
      }
    });

    this.runCode(self.framework);
  }

  renderCodeEditor() {
    const code = this.getCode();
    const codeValue = code[`${this.framework}Code`];
    const language = this.framework === 'vue' ? 'html' : 'typescript';

    this.editor.setValue(codeValue);
    (window as any).monaco.editor.setModelLanguage(this.editor.getModel(), language);
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
    const code = this.getCode();
    $('.case-type').html(getNameByLanguage(code));
  }

  renderLeftMenu() {
    const { folder, item } = this.getDemoFolderAndItem();

    const menuList = [];
    Object.keys(exampleOrigin).forEach((key) => {
      const folderKey = key;
      const folderMatched = folderKey === folder;
      menuList.push({
        ...exampleOrigin[key],
        folderKey,
        folderDisplayName: getNameByLanguage(exampleOrigin[key]),
        examples: exampleOrigin[key].examples.map((example) => {
          const itemKey = this.getDemoItemKey(example);
          const itemMatched = itemKey === item;
          return {
            ...example,
            linkName: generateHashtag(folderKey, itemKey),
            itemKey,
            itemDisplayName: getNameByLanguage(example),
            activeClass: folderMatched && itemMatched ? 'active' : '',
          };
        }),
        expanded: folderMatched ? 'expanded' : '',
      });
    });
    $('.left-panel').html(navTpl({ menuList }));
  }

  bindEvent() {
    const self = this;
    // TODO: bind JSFiddle event
    // $('.case-box .op .run').on('click', function() {
    //   const index = $(this).attr('data-index');
    // });

    $('.left-panel').on('click', '.common-nav-item', function () {
      setTimeout(() => {
        self.refresh();
      }, 0);
    });

    // bind code-switch event
    $('.case-box .case-code-switch .case-code-switch-item').on('click', function () {
      const framework = $(this).attr('data-framework');
      self.framework = framework;
      self.renderCodeEditor();
      self.renderCase();
    });

    // bind framework switch event
    $('.left-panel .common-nav-folder.expandable .common-nav-title').on('click', function () {
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
    $('.page-language-switch').on('click', function () {
      changePageLanguage();

      self.refresh();
    });
  }

  unbindEvent() {
    $('.left-panel').off('click', '.common-nav-item');
    $('.case-box .case-code-switch .case-code-switch-item').off('click');
    $('.left-panel .common-nav-folder.expandable .common-nav-title').off('click');
    $('.page-language-switch').off('click');
  }

  render() {
    this.renderLeftMenu();
    this.renderLanguage();
    this.renderDemoTitle();
    this.renderCodeEditor();
    this.renderCase();
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

