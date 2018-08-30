import * as $ from 'jquery';
import exampleOrigin from './examples/index';
import locale from '../common/locale';
import demoLocale from './locale';
import * as Clipboard from 'clipboard';
import Nav from '../nav';
import {
  getNameByLanguage,
  // ALL_PAGE_LANGUAGES, DEFAULT_PAGE_LANGUAGE, setPageLanguage,
  getPageLanguage, initPageLanguage, changePageLanguage,
  generateHashtag, getFolderAndItem,
  get, combineFrameCode
} from '../common/utils';
import './index.scss';

import Vue from 'vue';
import ViserVue from 'viser-vue';
import ViserGraphVue from 'viser-graph-vue';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

/*****************
 * inject to window
******************/
//由于没有浏览器包，不得不将angular的方法注入到window；
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// store Vue Instance globally;
let vm;
Vue.use(ViserVue);
Vue.use(ViserGraphVue);
// // store Ng Instance globally;
let ngRef;

const navTpl = require('./nav.tpl');

// const ALL_FRAMEWORKS = ['react', 'vue', 'angular'];
const DEFAULT_FOLDER = '';
const DEFAULT_ITEM = '';

class Demo {
  framework: string = 'react';
  editor: any;
  clipboard: any;
  typeKey: 'viser';
  constructor() {
    initPageLanguage();
    this.renderNav(getPageLanguage());
    this.initEditor();

    this.render();
    this.bindEvent();
  }
  getTypeKey = (key: any) => {
    if (this.typeKey !== key) {
      this.typeKey = key;
      this.refresh();
    }
  }
  renderNav(pageLan) {
    ReactDOM.render(
      <Nav getTypeKey={this.getTypeKey} pageLan={pageLan} />,
      document.getElementById('viser-nav')
    );
  }
  initEditor() {
    this.editor = (window as any).monaco.editor.create(document.getElementById('monaco-editor'), {
      value: 'loading code......',
      language: 'typescript',
      lineNumbers: false,
      scrollBeyondLastLine: false,
      automaticLayout: true,
      renderLineHighlight: 'none',
      readOnly: false,
      formatOnType: true,
      theme: 'vs',
      minimap: {
        enabled: false,
      }
    });
  }

  async getCode(framework = '') {
    const { typeKey, folder, item } = this.getDemoFolderAndItem();
    const examples = exampleOrigin[typeKey][folder].examples;
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
    if (framework === 'react') {
      // reactCode = require(`!!raw-loader!./examples/${folder}/${path}/react.tsx`);
      const reactCode_r: any = await get(`${basicPath}/examples/${folder}/${path}/react.tsx`);
      if (reactCode_r.flag) {
        reactCode = await reactCode_r.data.text();
      }
    }
    if (framework === 'vue') {
      // vueCode = require(`!!raw-loader!./examples/${folder}/${path}/vue.vue`);
      const vueCode_r: any = await get(`${basicPath}/examples/${folder}/${path}/vue.vue`);
      if (vueCode_r.flag) {
        vueCode = await vueCode_r.data.text();
      }
    }
    if (framework === 'angular') {
      // angularCode = require(`!!raw-loader!./examples/${folder}/${path}/angular.ts`);
      const angularCode_r: any = await get(`${basicPath}/examples/${folder}/${path}/angular.ts`);
      if (angularCode_r.flag) {
        angularCode = await angularCode_r.data.text();
      }
    }
    reactPath = `./examples/${folder}/${path}/react.tsx`;
    vuePath = `./examples/${folder}/${path}/vue.vue`;
    angularPath = `./examples/${folder}/${path}/angular.ts`;

    return {
      reactCode, vueCode, angularCode,
      reactPath, vuePath, angularPath,
      cnName, enName,
    };
  }

  getDemoFolderAndItem() {
    // window.console.log(Object.keys(exampleOrigin[this.typeKey]));
    let { typeKey, folder, item } = getFolderAndItem();
    if (!typeKey || !folder || !item || typeKey !== this.typeKey) {
      typeKey = this.typeKey
      folder = Object.keys(exampleOrigin[typeKey])[0];
      item = exampleOrigin[typeKey][folder]['examples'][0]['enName'].toLowerCase().trim().replace(/\s/g, '-');
      window.location.hash = `#/${typeKey}/${folder}/${item}`;
    }
    return {
      typeKey: typeKey || '',
      folder: folder || DEFAULT_FOLDER,
      item: item || DEFAULT_ITEM,
    };
  }

  getDemoItemKey(example) {
    return example.enName.toLowerCase().replace(/\s/g, '-');
  }

  async runCode(framework) {
    const mount = document.getElementById('mount');

    // Unmount Vue
    if (vm && vm.existed) {
      vm.existed = false;
    }
    if (ngRef) {
      const mountParent = mount.parentNode;
      ngRef.destroy();
      ngRef = undefined;
      const newMount = document.createElement('div');
      newMount.setAttribute('id', 'mount');
      mountParent.appendChild(newMount);
    }
    // Remove Dom
    if (framework === 'vue') {
      $('.case-code-topbar').hide();
      const code = await this.getCode(framework);
      mount.innerHTML = '';
      const codePath = code[`${framework}Path`];
      // window.console.log(codePath);
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
      return;
    }
    if (framework === 'angular') {
      $('.case-code-topbar').hide();
      const code = await this.getCode(framework);
      mount.innerHTML = '';
      const codePath = code[`${framework}Path`];
      const AppModule = require(`${codePath}`).default;
      return platformBrowserDynamic().bootstrapModule(AppModule).then((ref) => { ngRef = ref; });
    }
    $('.case-code-topbar').show();
    const code: any = this.editor.getValue();
    const doc = combineFrameCode(framework, code);
    // window.console.log(code);
    // window.console.log(doc);
    // window.console.log(transpileModule(code));
    $('#mount').html('<iframe></iframe>');
    const frame = $('#mount iframe')[0];
    const iframeDoc = frame.contentDocument || frame.contentWindow.document;

    iframeDoc.open();
    iframeDoc.write(doc);
    iframeDoc.close();

    // // Unmount React;
    // ReactDOM.unmountComponentAtNode(mount);
    // // Unmount Angular
    // if (ngRef) {
    //   const mountParent = mount.parentNode;
    //   ngRef.destroy();
    //   ngRef = undefined;
    //   const newMount = document.createElement('div');
    //   newMount.setAttribute('id', 'mount');
    //   mountParent.appendChild(newMount);
    // }


    // if (framework === 'react') {
    //   // delete require.cache[require.resolve(`${codePath}`)];
    //   const App = require(`${codePath}`).default;
    //   ReactDOM.render(<App />, document.getElementById('mount'));
    // }

    // if (framework === 'angular') {
    //   // delete require.cache[require.resolve(`${codePath}`)];
    //   const AppModule = require(`${codePath}`).default;
    //   platformBrowserDynamic().bootstrapModule(AppModule).then((ref) => { ngRef = ref; });
    // }

    // if (framework === 'vue') {
    // const VueApp = require(`./examples/line/example1/vue.vue`).default;
    //   const container = document.createElement('div');
    //   document.getElementById('mount').appendChild(container);
    // vm = new Vue({
    //   data: {
    //     existed: true
    //   },
    //   el: container,
    //   template: '<VueApp v-if="existed"/>',
    //   components: { VueApp }
    // });
    // }


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
  }

  async renderCodeEditor(isClick = false) {
    // window.console.log('framework', this.framework)
    const code = await this.getCode(this.framework);
    const codeValue = code[`${this.framework}Code`];
    const language = this.framework === 'vue' ? 'html' : 'typescript';

    this.editor.setValue(codeValue);
    (window as any).monaco.editor.setModelLanguage(this.editor.getModel(), language);
    // if (this.framework === 'react') {
    this.runCode(this.framework);
    // }
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
    const code = await this.getCode(this.framework);
    $('.case-type').html(getNameByLanguage(code));
  }

  renderLeftMenu() {
    const { typeKey, folder, item } = this.getDemoFolderAndItem();

    const menuList = [];
    Object.keys(exampleOrigin[typeKey]).forEach((key) => {
      const folderKey = key;
      const folderMatched = folderKey === folder;
      menuList.push({
        ...exampleOrigin[typeKey][key],
        typeKey,
        folderKey,
        folderDisplayName: getNameByLanguage(exampleOrigin[typeKey][key]),
        examples: exampleOrigin[typeKey][key].examples.map((example) => {
          const itemKey = this.getDemoItemKey(example);
          const itemMatched = itemKey === item;
          return {
            ...example,
            linkName: generateHashtag(typeKey, folderKey, itemKey),
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
      self.renderCase();
      self.renderCodeEditor(true);
      // self.runCode(self.framework);
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
    $(document).on('click', '.case-btn-cont .case-run', function (e) {
      self.runCode($('.case-code-switch .active').html().trim().toLowerCase());
    });
  }

  unbindEvent() {
    $('.left-panel').off('click', '.common-nav-item');
    $('.case-box .case-code-switch .case-code-switch-item').off('click');
    $('.left-panel .common-nav-folder.expandable .common-nav-title').off('click');
    $('.page-language-switch').off('click');
    if (this.clipboard && this.clipboard.destroy) {
      this.clipboard.destroy();
    }
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

