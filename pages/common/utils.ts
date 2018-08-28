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
export const transpileModule = (input, options = {
  module: 'none',//不适用模块，。。
  target: (window as any).ts.ScriptTarget.ES5,
  noLib: true,
  noResolve: true,
  suppressOutputPathCheck: true
}) => {
  //此方法使用前提是需要有monaco编辑器，并配置vs/language/typescript/lib/typescriptServices 
  //目前不支持jsx，请不要再react代码上使用此函数
  const inputFileName = "module.ts";
  const sourceFile = (window as any).ts.createSourceFile(inputFileName, input, options.target || (window as any).ts.ScriptTarget.ES5);
  // Output
  let outputText;
  const program = (window as any).ts.createProgram([inputFileName], options, {
    getSourceFile: function (fileName) { return fileName.indexOf("module") === 0 ? sourceFile : undefined; },
    writeFile: function (_name, text) { outputText = text; },
    getDefaultLibFileName: function () { return "lib.d.ts"; },
    useCaseSensitiveFileNames: function () { return false; },
    getCanonicalFileName: function (fileName) { return fileName; },
    getCurrentDirectory: function () { return ""; },
    getNewLine: function () { return "\r\n"; },
    fileExists: function (fileName) { return fileName === inputFileName; },
    readFile: function () { return ""; },
    directoryExists: function () { return true; },
    getDirectories: function () { return []; }
  });
  // Emit
  program.emit();
  if (outputText === undefined) {
    throw new Error("Output generation failed");
  }
  return outputText;
}

const codeDeal = (oriCode: string, framework: string): string => {
  let code = oriCode.replace(/\s*?\/\/[\s\S]*?\n/g, '');
  const reg = /import\s.*?\{.*?\}.*?;/g;
  if (reg.test(code)) {
    const injects = code.match(reg);
    // window.console.log(injects);
    injects.forEach(item => {
      const tempVar = item.replace(/(.*?\{|\}.*)/g, '');
      const tempPkg = pkgMap[item.replace(/^(.*?['"])/g, '').replace(/['"].*/, '').trim()];
      const temp = `const {${tempVar}}=${framework === 'react' ? tempPkg : 'parent.angular'};`;
      code = code.replace(item, temp);
      // window.console.log(code);
    });
  }
  code = code.replace(/import.*?;/g, '')
    .replace(/as\s*?any\s*?;/g, '')
    .replace(/\(window\s+?as\s+?any\)/g, 'window')
    .replace(/as\s*?any\s*?/g, '');
  switch (framework) {
    case 'react':
      code = code.replace(/const.*?require.*?;/g, '').replace(/export\s*?default/g, '');
      code += ' ReactDOM.render(<App />, document.getElementById("mount"));';
      break;
    case 'angular':
      code = code.replace(/const.*?require.*?;/g, '');
      code = transpileModule(code);
      code = code.replace('Object.defineProperty(exports, "__esModule", { value: true });', `if(!exports){var exports={}}\nObject.defineProperty(exports, "__esModule", { value: true });`);
      code += `\nconsole.log(exports.default);\nparent.angular.getNgApp(exports.default);`;
      window.console.log(code);
      break;
    default:
  }
  // window.console.log(code);
  return code;
}
export const combineFrameCode = (framework: string, oriCode: string): string => {
  // 由于replace第二个参数$**会将后续的内容进行对正则进行匹配影响最终生成的html，故使用字符拼接
  const code = codeDeal(oriCode, framework);
  if (template[framework]) {
    const temp = template[framework].split('{code}');
    // window.console.log(temp[0] + code + temp[1]);
    return temp[0] + code + temp[1];
  }
  return '';
}