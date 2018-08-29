import locale from './locale';
import { render } from 'react-dom';
import * as React from 'react';
import Nav from '../nav';
import {
  initPageLanguage, getPageLanguage, setPageLanguage, changePageLanguage,
  ALL_PAGE_LANGUAGES, DEFAULT_PAGE_LANGUAGE,
  addClass, removeClass,
  on, off
} from '../common/utils';
import './index.scss';

class Home {
  constructor() {
    initPageLanguage();
    this.renderNav(getPageLanguage());
    this.renderLanguage();
    this.renderImage();
    this.bindEvent();
  }
  renderNav(pageLan) {
    render(
      <Nav pageLan={pageLan} />,
      document.getElementById('viser-nav')
    );
  }
  renderImage() {
    document.getElementById('viser-mount-1-1').innerHTML = '<img src="/assets/image/s1-1.png"/>';
    document.getElementById('viser-mount-2-1').innerHTML = '<img src="/assets/image/s2-1.png"/>';
    document.getElementById('viser-mount-2-2').innerHTML = '<img src="/assets/image/s2-2.png"/>';
    document.getElementById('viser-mount-2-3').innerHTML = '<img src="/assets/image/s2-3.png"/>';
    document.getElementById('viser-mount-2-4').innerHTML = '<img src="/assets/image/s2-4.png"/>';
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

    const pageLanguageSwitchDom = document.querySelector('.home-header .page-language-switch');
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

  handleSwitchPageLanguage = () => {
    changePageLanguage();
    this.renderNav(getPageLanguage());
    this.unbindEvent();
    this.renderLanguage();
    this.bindEvent();
  }

  unbindEvent() {
    const pageLanguageSwitchDom = document.querySelector('.home-header .page-language-switch');
    if (pageLanguageSwitchDom) {
      off(pageLanguageSwitchDom, 'click', this.handleSwitchPageLanguage);
    }
  }

  bindEvent() {
    const pageLanguageSwitchDom = document.querySelector('.home-header .page-language-switch');
    if (pageLanguageSwitchDom) {
      on(pageLanguageSwitchDom, 'click', this.handleSwitchPageLanguage);
    }
  }
}


new Home();