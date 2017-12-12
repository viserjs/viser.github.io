import locale from './locale';
import Viser from 'viser';
import './index.scss';

const ALL_PAGE_LANGUAGES = ['en', 'cn'];
const DEFAULT_PAGE_LANGUAGE = 'en';
const GDP_JSON = [
  { "year": '2006', "gdp": 21.94385 },
  { "year": '2007', "gdp": 27.02323 },
  { "year": '2008', "gdp": 31.95155 },
  { "year": '2009', "gdp": 34.90814 },
  { "year": '2010', "gdp": 41.30303 },
  { "year": '2011', "gdp": 48.93006 },
  { "year": '2012', "gdp": 54.03674 },
  { "year": '2013', "gdp": 59.52444 },
  { "year": '2014', "gdp": 64.39740 },
  { "year": '2015', "gdp": 68.90521 }
];

class Home {
  constructor() {
    this.render();
  }

  renderChart() {
    Viser({
      data: GDP_JSON,
      tooltip: true,
      axis: true,
      series: [{ quickType: 'bar', color: '#0088fe', position: 'year*gdp' }],
      chart: { width: 700, height: 400, container: 'viser-mount-1-1' },
    });

    Viser({
      data: GDP_JSON,
      tooltip: true,
      axis: true,
      series: [{ quickType: 'line', color: '#0088fe', position: 'year*gdp' }],
      chart: { width: 380, height: 230, container: 'viser-mount-2-1' },
    });
    Viser({
      data: GDP_JSON,
      tooltip: { showTitle: false },
      axis: true,
      series: [{
        quickType: 'pie',
        position: 'gdp',
        style: {
          lineWidth: 1,
          stroke: '#fff',
          fill: '#0088fe',
        },
        tooltip: 'year*gdp'
      }],
      chart: { width: 380, height: 280, container: 'viser-mount-2-2' },
    });
    Viser({
      data: GDP_JSON,
      tooltip: true,
      axis: true,
      series: [{ quickType: 'area', color: '#0088fe', position: 'year*gdp' }],
      chart: { width: 380, height: 230, container: 'viser-mount-2-3' },
    });
    Viser({
      data: GDP_JSON,
      tooltip: true,
      axis: false,
      series: [{
        quickType: 'sector',
        color: '#0088fe',
        style: {
          lineWidth: 1,
          stroke: '#fff',
          fill: '#0088fe',
        },
        position: 'year*gdp',
      }],
      chart: { width: 380, height: 310, container: 'viser-mount-2-4' },
    });
  }

  renderText(selector, text) {
    const selectorDom = document.querySelector(selector);

    if (selectorDom) {
      selectorDom.innerHTML = text;
    }
  }

  renderContent() {
    let pageLanguageInStore = window.localStorage.getItem('page_language');

    if (!pageLanguageInStore || ALL_PAGE_LANGUAGES.indexOf(pageLanguageInStore) === -1) {
      pageLanguageInStore = DEFAULT_PAGE_LANGUAGE;
      window.localStorage.setItem('page_language', pageLanguageInStore);
    }

    const pageLanguageSwitchDom = document.querySelector('.home-header .page-language-switch');
    if (pageLanguageSwitchDom) {
      if (pageLanguageSwitchDom.classList) {
        ALL_PAGE_LANGUAGES.forEach((lang) => {
          pageLanguageSwitchDom.classList.remove(lang);
        });
      }
      if (pageLanguageSwitchDom.classList) {
        pageLanguageSwitchDom.classList.add(pageLanguageInStore);
      } else {
        pageLanguageSwitchDom.className += ' ' + pageLanguageInStore;
      }
    }

    if (locale && locale[pageLanguageInStore] && locale[pageLanguageInStore].length) {
      locale[pageLanguageInStore].forEach((o) => {
        this.renderText(o.selector, o.text);
      });
    }
  }

  handleSwitchPageLanguage = () => {
    const pageLanguageInStore = window.localStorage.getItem('page_language');

    if (pageLanguageInStore && pageLanguageInStore === 'en') {
      window.localStorage.setItem('page_language', 'cn');
    } else if (pageLanguageInStore && pageLanguageInStore === 'cn') {
      window.localStorage.setItem('page_language', 'en');
    } else {
      window.localStorage.setItem('page_language', DEFAULT_PAGE_LANGUAGE);
    }

    this.refresh();
  }

  unbindEvent() {
    const pageLanguageSwitchDom = document.querySelector('.home-header .page-language-switch');
    if (pageLanguageSwitchDom) {
      pageLanguageSwitchDom.removeEventListener('click', this.handleSwitchPageLanguage);
    }
  }

  bindEvent() {
    const pageLanguageSwitchDom = document.querySelector('.home-header .page-language-switch');
    if (pageLanguageSwitchDom) {
      pageLanguageSwitchDom.addEventListener('click', this.handleSwitchPageLanguage);
    }
  }

  render() {
    this.renderChart();
    this.renderContent();
    this.bindEvent();
  }

  refresh() {
    this.unbindEvent();
    this.render();
  }
}


new Home();