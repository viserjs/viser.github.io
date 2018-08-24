import * as $ from 'jquery';
import exampleOrigin from './examples/index';
import locale from '../common/locale';
import demoLocale from './locale';
import * as Clipboard from 'clipboard';
import Nav from '../nav';
import {
  getNameByLanguage,
  ALL_PAGE_LANGUAGES, DEFAULT_PAGE_LANGUAGE,
  getPageLanguage, setPageLanguage, initPageLanguage, changePageLanguage,
  generateHashtag, getFolderAndItem,
  get
} from '../common/utils';
import './index.scss';

import Vue from 'vue';
import ViserVue from 'viser-vue';
import ViserGraphVue from 'viser-graph-vue';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// store Vue Instance globally;
let vm;
Vue.use(ViserVue);
Vue.use(ViserGraphVue);
// store Ng Instance globally;
let ngRef;

const navTpl = require('./nav.tpl');

const ALL_FRAMEWORKS = ['react', 'vue', 'angular'];
const DEFAULT_FOLDER = 'line';
const DEFAULT_ITEM = 'basic-line';

class Demo {
  framework: string = 'react';
  editor: any;
  clipboard: any;

  constructor() {
    initPageLanguage();
    this.renderNav(getPageLanguage());
    this.initEditor();

    this.render();
    this.bindEvent();
  }
  renderNav(pageLan) {
    ReactDOM.render(
      <Nav pageLan={pageLan} />,
      document.getElementById('viser-nav')
    );
  }
  initEditor() {
    this.editor = (window as any).monaco.editor.create(document.getElementById('monaco-editor'), {
      value: '',
      language: 'javascript',
      lineNumbers: false,
      scrollBeyondLastLine: false,
      automaticLayout: true,
      renderLineHighlight: 'none',
      readOnly: false,
      theme: 'vs',
      minimap: {
        enabled: false,
      }
    });
  }

  async getCode() {
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
    const basicPath = '/pages/demo';
    let reactCode = '';
    let vueCode = '';
    let angularCode = '';

    let reactPath = '';
    let vuePath = '';
    let angularPath = '';

    // try {
    // reactCode = require(`!!raw-loader!./examples/${folder}/${path}/react.tsx`);
    const reactCode_r: any = await get(`${basicPath}/examples/${folder}/${path}/react.tsx`);
    if (reactCode_r.flag) {
      reactCode = await reactCode_r.data.text();
    }
    // vueCode = require(`!!raw-loader!./examples/${folder}/${path}/vue.vue`);
    const vueCode_r: any = await get(`${basicPath}/examples/${folder}/${path}/vue.vue`);
    if (vueCode_r.flag) {
      vueCode = await vueCode_r.data.text();
    }
    // angularCode = require(`!!raw-loader!./examples/${folder}/${path}/angular.ts`);
    const angularCode_r: any = await get(`${basicPath}/examples/${folder}/${path}/angular.ts`);
    if (angularCode_r.flag) {
      angularCode = await angularCode_r.data.text();
    }

    reactPath = `./examples/${folder}/${path}/react.tsx`;
    vuePath = `./examples/${folder}/${path}/vue.vue`;
    angularPath = `./examples/${folder}/${path}/angular.ts`;
    // } catch (err) {
    //   console.error(err);
    // }

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

  async runCode(framework) {
    const code = await this.getCode();
    const mount = document.getElementById('mount');

    // Unmount React;
    ReactDOM.unmountComponentAtNode(mount);
    // Unmount Vue
    if (vm && vm.existed) {
      vm.existed = false;
    }
    // Unmount Angular
    if (ngRef) {
      const mountParent = mount.parentNode;
      ngRef.destroy();
      ngRef = undefined;
      const newMount = document.createElement('div');
      newMount.setAttribute('id', 'mount');
      mountParent.appendChild(newMount);
    }
    // Remove Dom
    mount.innerHTML = '';

    const codePath = code[`${framework}Path`];
    if (framework === 'react') {
      // delete require.cache[require.resolve(`${codePath}`)];
      const App = require(`${codePath}`).default;
      ReactDOM.render(<App />, document.getElementById('mount'));
    }

    if (framework === 'angular') {
      // delete require.cache[require.resolve(`${codePath}`)];
      const AppModule = require(`${codePath}`).default;
      platformBrowserDynamic().bootstrapModule(AppModule).then((ref) => { ngRef = ref; });
    }

    if (framework === 'vue') {
      const VueApp = require(`${codePath}`).default;
      const container = document.createElement('div');
      document.getElementById('mount').appendChild(container);
      vm = new Vue({
        data: {
          existed: true
        },
        el: container,
        template: '<VueApp v-if="existed"/>',
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

  async renderCodeEditor() {
    const code = await this.getCode();
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
    if (demoLocale && demoLocale[language] && demoLocale[language].length) {
      demoLocale[language].forEach((o) => {
        $(o.selector).html(o.text);
      });
    }
  }

  async renderDemoTitle() {
    const code = await this.getCode();
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
    this.clipboard = new Clipboard($('.case-code-topbar .case-copy')[0], {
      text: () => {
        return this.editor.getValue();
      }
    });
    this.clipboard.on('success', function (e) {
      if ($('.case-code-topbar .case-tip').length !== 0) {
        $('.case-code-topbar .case-tip').remove();
      }
      const template = `<span class="case-tip">${getPageLanguage() === 'cn' ? '复制成功' : 'copy successed'}</span>`;
      $(template).insertBefore('.case-code-topbar .case-copy');
      e.clearSelection();
    });
    this.clipboard.on('error', function (e) {
      if ($('.case-code-topbar .case-tip').length !== 0) {
        $('.case-code-topbar .case-tip').remove();
      }
      const template = `<span class="case-tip err">${getPageLanguage() === 'cn' ? '复制失败' : 'copy failed'}</span>`;
      $(template).insertBefore('.case-code-topbar .case-copy');
      e.clearSelection();
    });
  }

  unbindEvent() {
    $('.left-panel').off('click', '.common-nav-item');
    $('.case-box .case-code-switch .case-code-switch-item').off('click');
    $('.left-panel .common-nav-folder.expandable .common-nav-title').off('click');
    $('.page-language-switch').off('click');
    this.clipboard.destroy();
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
    this.renderNav(getPageLanguage());
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

