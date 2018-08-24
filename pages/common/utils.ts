import D from 'oui-dom-utils';
import E from 'oui-dom-events';
import * as fetch from 'cross-fetch';

/**
 * Language Utils
 */
export const ALL_PAGE_LANGUAGES = ['en', 'cn'];

export const DEFAULT_PAGE_LANGUAGE = 'en';

export const getPageLanguage = () => {
  const pageLanguageInStore = window.localStorage.getItem('page_language');
  if (pageLanguageInStore && ALL_PAGE_LANGUAGES.indexOf(pageLanguageInStore) !== -1) {
    return pageLanguageInStore;
  }
  return null;
};

export const setPageLanguage = (language) => {
  window.localStorage.setItem('page_language', language);
};

export const initPageLanguage = () => {
  const pageLanguageInStore = getPageLanguage();
  if (!pageLanguageInStore) {
    // Optimise for Chinese user
    const navigatorLanguage = (window.navigator.language).toLowerCase();
    if (navigatorLanguage && navigatorLanguage.indexOf('cn') !== -1) {
      setPageLanguage('cn');
    } else {
      setPageLanguage(DEFAULT_PAGE_LANGUAGE);
    }
  }
}

export const changePageLanguage = () => {
  const pageLanguageInStore = getPageLanguage();
  if (pageLanguageInStore && pageLanguageInStore === 'en') {
    setPageLanguage('cn');
  } else if (pageLanguageInStore && pageLanguageInStore === 'cn') {
    setPageLanguage('en');
  } else {
    setPageLanguage(DEFAULT_PAGE_LANGUAGE);
  }
}

export const getNameByLanguage = (o) => {
  const language = getPageLanguage();
  switch (language) {
    case 'en': {
      if (o && o.enName) {
        return o.enName;
      }
      return '';
    }
    case 'cn': {
      if (o && o.cnName) {
        return o.cnName;
      }
      return '';
    }
    default: {
      return '';
    }
  }
};

/**
 * Route Utils
 */

export const generateHashtag = (folder, item) => {
  if (folder && item) {
    return `#/${folder}/${item}`;
  } else if (folder) {
    return `#/${folder}/${item}`;
  }
  return '#';
}

export const getFolderAndItem = () => {
  const hash = window.location.hash;
  const hashReg = /^#?\/?([^\/]*)\/?([^\/]*)\/?$/;
  // Test Case
  // console.log(hashReg.exec('#/'));
  // console.log(hashReg.exec('#//'));
  // console.log(hashReg.exec('#///'));
  // console.log(hashReg.exec('#////'));
  // console.log(hashReg.exec('#'));
  // console.log(hashReg.exec(''));
  // console.log(hashReg.exec('#/1'));
  // console.log(hashReg.exec('#/1/'));
  // console.log(hashReg.exec('#1'));
  // console.log(hashReg.exec('#1/'));
  // console.log(hashReg.exec('#1/2'));
  // console.log(hashReg.exec('#/1/2'));
  // console.log(hashReg.exec('#1/2/'));
  // console.log(hashReg.exec('#/1/2/'));

  const result = hashReg.exec(hash);
  if (!result) {
    return { folder: '', item: '' };
  }
  return {
    folder: result[1] || '',
    item: result[2] || '',
  };
}

/**
 * DOM Utils
 */
export const addClass = D.addClass;

export const removeClass = D.removeClass;

export const hasClass = D.hasClass;

/**
 * Event Utils
 */
export const on = E.on;

export const off = E.off;

export const delegate = E.delegate;

export const undelegate = E.undelegate;

export const get = (url: any) => {
  return new Promise((resolve: any) => {
    return fetch(url)
      //没必要传参数，只要url拼接即可
      .then((res: any) => {
        if (res.status >= 400) {
          return {
            flag: false
          }
        }
        return {
          flag: true,
          data: res
        }
      })
      .then(json => resolve(json))
  });
}

export const getInitNav = (): any => {
  const selectedNav = window.localStorage.getItem('selectedNav');
  if (selectedNav) return selectedNav;
  return null;
}
export const setInitNav = (nav: string) => {
  window.localStorage.setItem('selectedNav', nav);
}