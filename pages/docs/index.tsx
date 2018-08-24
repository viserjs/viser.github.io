import mdList from './mds';
import locale from '../common/locale';
import { render } from 'react-dom';
import * as React from 'react';
import Nav from '../nav';
import {
  getNameByLanguage,
  ALL_PAGE_LANGUAGES, DEFAULT_PAGE_LANGUAGE,
  getPageLanguage, setPageLanguage, initPageLanguage, changePageLanguage,
  generateHashtag, getFolderAndItem,
  addClass, removeClass,
  on, off, delegate, undelegate,
} from '../common/utils';

import './index.scss';
import { setTimeout } from 'core-js/library/web/timers';

const navTpl = require('./nav.tpl');
const DEFAULT_FOLDER = 'guide';
const DEFAULT_ITEM = 'installation';

class Docs {
  constructor() {
    initPageLanguage();
    this.renderNav(getPageLanguage());
    this.render();
    this.bindEvent();
  }
  renderNav(pageLan) {
    render(
      <Nav pageLan={pageLan} />,
      document.getElementById('viser-nav')
    );
  }
  getDocsFolderAndItem() {
    const { folder, item } = getFolderAndItem();
    return {
      folder: folder || DEFAULT_FOLDER,
      item: item || DEFAULT_ITEM,
    };
  }

  renderText(selector, text) {
    const selectorDom = document.querySelector(selector);

    if (selectorDom) {
      selectorDom.innerHTML = text;
    }
  }

  renderLanguage() {
    let pageLanguageInStore = getPageLanguage();

    if (!pageLanguageInStore || ALL_PAGE_LANGUAGES.indexOf(pageLanguageInStore) === -1) {
      pageLanguageInStore = DEFAULT_PAGE_LANGUAGE;
      setPageLanguage(pageLanguageInStore);
    }

    const pageLanguageSwitchDom = document.querySelector('.common-header .page-language-switch');
    ALL_PAGE_LANGUAGES.forEach((lang) => {
      removeClass(pageLanguageSwitchDom, lang);
    });
    addClass(pageLanguageSwitchDom, pageLanguageInStore);

    if (locale && locale[pageLanguageInStore] && locale[pageLanguageInStore].length) {
      locale[pageLanguageInStore].forEach((o) => {
        this.renderText(o.selector, o.text);
      });
    }
  }

  renderLeftMenu() {
    const { folder, item } = this.getDocsFolderAndItem();

    const menuList = mdList.map((v) => {
      const folderMatched = v.folderKey === folder;
      return {
        ...v,
        folderDisplayName: getNameByLanguage(v),
        mds: v.mds.map((o) => {
          const itemMatched = o.itemKey === item;
          return {
            ...o,
            itemDisplayName: getNameByLanguage(o),
            linkName: generateHashtag(v.folderKey, o.itemKey),
            activeClass: folderMatched && itemMatched ? 'active' : '',
          };
        }),
      };
    });

    const leftPanelDom = document.querySelector('.left-panel');
    leftPanelDom.innerHTML = navTpl({
      menuList,
    });
  }

  renderContent() {
    const language = getPageLanguage();
    const { folder, item } = this.getDocsFolderAndItem();

    let content = '';

    try {
      content = require(`./mds/${folder}/${item}/${language}.md`);
    } catch (err) {
      console.error(err);
    }
    const rightPanelDom = document.querySelector('.right-panel');
    rightPanelDom.innerHTML = content;
  }

  handleSwitchPageLanguage = () => {
    changePageLanguage();

    this.refresh();
  }

  handleSwitchContent = () => {
    setTimeout(() => {
      this.refresh();
    }, 0);
  }

  unbindEvent() {
    const pageLanguageSwitchDom = document.querySelector('.common-header .page-language-switch');
    if (pageLanguageSwitchDom) {
      off(pageLanguageSwitchDom, 'click', this.handleSwitchPageLanguage);
    }

    const leftMenuDom = document.querySelector('.left-panel');
    if (leftMenuDom) {
      undelegate(leftMenuDom, '.common-nav-item', 'click', this.handleSwitchContent);
    }
  }

  bindEvent() {
    const pageLanguageSwitchDom = document.querySelector('.common-header .page-language-switch');
    if (pageLanguageSwitchDom) {
      on(pageLanguageSwitchDom, 'click', this.handleSwitchPageLanguage);
    }

    const leftMenuDom = document.querySelector('.left-panel');
    if (leftMenuDom) {
      delegate(leftMenuDom, '.common-nav-item', 'click', this.handleSwitchContent);
    }
  }

  render() {
    this.renderLeftMenu();
    this.renderLanguage();
    this.renderContent();
  }

  refresh() {
    this.unbindEvent();
    this.renderNav(getPageLanguage());
    this.render();
    this.bindEvent();
  }
}

new Docs();
