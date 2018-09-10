import D from 'oui-dom-utils';
import E from 'oui-dom-events';
import * as fetch from 'cross-fetch';
import { template, pkgMap } from './iframe-templage';

/**
 * Language Utils
 */
export const ALL_PAGE_LANGUAGES = ['en', 'cn'];

export const DEFAULT_PAGE_LANGUAGE = 'en';

export const getPageLanguage = () => {
  const pageLanguageInStore = window.localStorage.getItem('page_language');
  if (
    pageLanguageInStore &&
    ALL_PAGE_LANGUAGES.indexOf(pageLanguageInStore) !== -1
  ) {
    return pageLanguageInStore;
  }
  return null;
};

export const setPageLanguage = language => {
  window.localStorage.setItem('page_language', language);
};

export const initPageLanguage = () => {
  const pageLanguageInStore = getPageLanguage();
  if (!pageLanguageInStore) {
    // Optimise for Chinese user
    const navigatorLanguage = window.navigator.language.toLowerCase();
    if (navigatorLanguage && navigatorLanguage.indexOf('cn') !== -1) {
      setPageLanguage('cn');
    } else {
      setPageLanguage(DEFAULT_PAGE_LANGUAGE);
    }
  }
};

export const changePageLanguage = () => {
  const pageLanguageInStore = getPageLanguage();
  if (pageLanguageInStore && pageLanguageInStore === 'en') {
    setPageLanguage('cn');
  } else if (pageLanguageInStore && pageLanguageInStore === 'cn') {
    setPageLanguage('en');
  } else {
    setPageLanguage(DEFAULT_PAGE_LANGUAGE);
  }
};

export const getNameByLanguage = o => {
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

export const generateHashtag = (typeKey, folder, item?) => {
  if (typeKey && folder && item) {
    return `#/${typeKey}/${folder}/${item}`;
  } else if (typeKey && folder) {
    return `#/${typeKey}/${folder}`;
  } else if (typeKey) {
    return `#/${typeKey}/${folder}`;
  }
  return '#';
};

export const getFolderAndItem = (isDemo: boolean = true) => {
  const hash = window.location.hash;
  const result = hash.split('/');
  if (result.length === 0) {
    return { tempKey: '', folder: '', item: '' };
  }
  if (!isDemo) {
    return {
      folder: result[2] || '',
      item: result[3] || '',
    }
  }
  return {
    typeKey: result[1] || '',
    folder: result[2] || '',
    item: result[3] || '',
  };
};

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
    return (
      fetch(url)
        //没必要传参数，只要url拼接即可
        .then((res: any) => {
          if (res.status >= 400) {
            return {
              flag: false,
            };
          }
          return {
            flag: true,
            data: res,
          };
        })
        .then(json => resolve(json))
    );
  });
};

export const getInitNav = (): any => {
  const selectedNav = window.localStorage.getItem('selected_nav');
  if (selectedNav) return selectedNav;
  return null;
};
export const setInitNav = (nav: string) => {
  window.localStorage.setItem('selected_nav', nav);
}

const codeDeal = (oriCode: string, framework: string): any => {
  let code = oriCode;
  const reg = /import\s.*?\{.*?\}.*?;/g;
  if (reg.test(code)) {
    const injects = code.match(reg);
    injects.forEach(item => {
      const tempVar = item.replace(/(.*?\{|\}.*)/g, '');
      const tempPkg =
        pkgMap[
        item
          .replace(/^(.*?['"])/g, '')
          .replace(/['"].*/, '')
          .trim()
        ];
      const temp = `const {${tempVar}}=${tempPkg};`;
      code = code.replace(item, temp);
    });
  }
  code = code
    .replace(/import.*?;/g, '')
    .replace(/as\s*?any\s*?;/g, '')
    .replace(/\(window\s+?as\s+?any\)/g, 'window')
    .replace(/as\s*?any\s*?/g, '')
    .replace(/const.*?require.*?;/g, '');
  switch (framework) {
    case 'react':
      code = code
        .replace(/export\s*?default/g, '');
      code += ' ReactDOM.render(<App />, document.getElementById("mount"));';
      break;
    case 'vue':
      const vueRes: any = {};
      {
        const template = code.match(/<template[\s\S]*?>[\s\S]*?<\/template>/gi)[0].replace(/<\/?template[\s\S]*?>/gi, '');
        const script = code.match(/<scrip[\s\S]*?>[\s\S]*?<\/script>/gi)[0].replace(/<\/?script[\s\S]*?>/gi, '');
        const variable = script.replace(/export\s*?default[\s\S]*?$/, '');
        const exports = script.match(/export\s*?default[\s\S]*?$/)[0].replace(/export\s*?default\s*?\{/gi, '').replace(/\}\s*?;?\s*?$/gi, '');
        vueRes.template = template;
        vueRes.variable = variable;
        vueRes.exports = exports;
      }
      return vueRes;
    default:
  }
  return code;
};
export const combineFrameCode = (
  framework: string,
  oriCode: string,
): string => {
  // 由于replace第二个参数$**会将后续的内容进行对正则进行匹配影响最终生成的html，故使用字符拼接
  const code = codeDeal(oriCode, framework);
  if (template[framework]) {
    switch (framework) {
      case 'vue':
        {
          let temp = template['vue'];
          Object.keys(code).map((item: any) => {
            const split = `{${item}}`;
            const tempArr = temp.split(split);
            temp = tempArr[0] + code[item] + tempArr[1];
          });
          return temp;
        }
      default: {
        if (/<script>/.test(oriCode) || /<template>/.test(oriCode)) {
          return '';
        }
        const temp = template[framework].split('{code}');
        return temp[0] + code + temp[1];
      }
    }
  }
  return '';
};
