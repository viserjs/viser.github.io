import locale from '../common/locale';
import { render } from 'react-dom';
import * as React from 'react';
import Nav from '../nav';
import Content from './Content';
import {
    ALL_PAGE_LANGUAGES, DEFAULT_PAGE_LANGUAGE,
    getPageLanguage, setPageLanguage, initPageLanguage, changePageLanguage,
    addClass, removeClass,
    on, off,
} from '../common/utils';

import './index.scss';
import { setTimeout } from 'core-js/library/web/timers';

class Theme {
    constructor() {
        initPageLanguage();
        this.renderNav(getPageLanguage());
        this.renderCont(getPageLanguage());
        this.render();
        this.bindEvent();
    }
    renderNav(pageLan) {
        render(
            <Nav pageLan={pageLan} />,
            document.getElementById('viser-nav')
        );
    }

    renderCont(pageLan) {
        render(<Content pageLan={pageLan} />, document.getElementById('theme-cont'))
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
    }

    bindEvent() {
        const pageLanguageSwitchDom = document.querySelector('.common-header .page-language-switch');
        if (pageLanguageSwitchDom) {
            on(pageLanguageSwitchDom, 'click', this.handleSwitchPageLanguage);
        }
    }

    render() {
        this.renderLanguage();
    }

    refresh() {
        this.unbindEvent();
        this.renderNav(getPageLanguage());
        this.renderCont(getPageLanguage());
        this.render();
        this.bindEvent();
    }
}

new Theme();
