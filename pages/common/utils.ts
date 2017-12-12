import D from 'oui-dom-utils';
import E from 'oui-dom-events';

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
    setPageLanguage(DEFAULT_PAGE_LANGUAGE);
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
  switch(language) {
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
  } else if (folder){
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
