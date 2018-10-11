import D from 'oui-dom-utils';
import E from 'oui-dom-events';
import * as fetch from 'cross-fetch';
import * as _ from 'lodash';
import { template, pkgMap } from './iframe-templage';

/**
 * Language Utils
 */
export const ALL_PAGE_LANGUAGES = ['en', 'cn'];

export const DEFAULT_PAGE_LANGUAGE = 'en';

export const getPageLanguage = () => {
  const pageLanguageInStore = (window as any).localStorage.getItem('page_language');
  if (
    pageLanguageInStore &&
    ALL_PAGE_LANGUAGES.indexOf(pageLanguageInStore) !== -1
  ) {
    return pageLanguageInStore;
  }
  return null;
};

export const setPageLanguage = language => {
  (window as any).localStorage.setItem('page_language', language);
};

export const initPageLanguage = () => {
  const pageLanguageInStore = getPageLanguage();
  if (!pageLanguageInStore) {
    // Optimise for Chinese user
    const navigatorLanguage = (window as any).navigator.language.toLowerCase();
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
  const hash = (window as any).location.hash;
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
  const selectedNav = (window as any).localStorage.getItem('selected_nav');
  if (selectedNav) return selectedNav;
  return null;
};
export const setInitNav = (nav: string) => {
  (window as any).localStorage.setItem('selected_nav', nav);
}

const codeDeal = (oriCode: string, framework: string): any => {
  let code = oriCode;
  const reg = /import\s.*?\{[\s\S]*?\}[\s\S]*?;/g;
  if (reg.test(code)) {
    const injects = code.match(reg);
    injects.forEach(item => {
      const tempVar = item.replace(/(.*?\{|\}.*)/g, '');
      const tempPkg =
        pkgMap[
        item
          .replace(/^([\s\S]*?['"])/g, '')
          .replace(/['"][\s\S]*/, '')
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
    case 'angular':
      {
        const moduleName = code.match(/export\s*?default[\s\S]*$/gi)[0].replace(/export\s*?default\s*?class\s*?/gi, '').replace(/\{\s*?\}/, '').trim();
        code = code.replace(/export\s*?default[\s\S]*$/gi, `class ${moduleName}={}`);
        code = code.replace(/\s*class/g, 'class');
          // .replace('#mount', 'my-app');
      }
      break;
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
          const pkg=getInitNav();
          if(!pkg||pkg==='viser'){
            temp=temp.replace(/\{scriptpkg\}/,'viser-vue')
            .replace(/\{userModule\}/,'ViserVue');
          }else if(pkg==='viser-graph'){
            temp=temp.replace(/\{scriptpkg\}/,'viser-graph-vue')
            .replace(/\{userModule\}/,'ViserGraphVue');
          }
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

export const downloadFile = (blob: any, filename: string, mimetype: string) => {
  /**
   * download method from network
  */
  if (!blob) {
    throw {
      name: 'Argument Null Exception',
      nameof: 'blob',
      description: 'The supplied variable is null'
    }
  }
  if (!filename) {
    throw {
      name: 'Argument Null Exception',
      nameof: 'filename',
      description: 'The supplied variable is null'
    }
  }
  if (!mimetype) {
    throw {
      name: 'Argument Null Exception',
      nameof: 'mime',
      description: 'The supplied variable is null'
    }
  }
  if (!Array.isArray(blob)) {
    throw {
      name: 'Type Error',
      nameof: 'blob',
      description: 'Supplied data is not an array'
    }
  }
  let objectBlob;
  try {
    objectBlob = new (window as any).Blob(['\ufeff', blob], { type: mimetype });
  } catch (e) {
    const bb = new (window as any).MSBlobBuilder();
    bb.append(['\ufeff']);
    bb.append(blob);
    objectBlob = bb.getBlob();
  }
  if (!navigator.msSaveOrOpenBlob) {
    const objUrl = (window as any).URL.createObjectURL(objectBlob);

    let a = document.createElement('a');
    a.download = filename;
    a.href = objUrl;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      a.remove();
      a = undefined;
      (window as any).URL.revokeObjectURL(objUrl);
      return;
    }, 100)
  } else {
    (window as any).navigator.msSaveOrOpenBlob(objectBlob, filename);
    return;
  }
}

export const colorRGB2Hex=color=>{
  if(!/rgb/gi.test(color)||!color){ // 如果不是rgb则返回
    return color;
  }
  const rgb = color.split(',');
  const r = parseInt(rgb[0].split('(')[1]);
  const g = parseInt(rgb[1]);
  const b = parseInt(rgb[2].split(')')[0]);
  const hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  return hex;
}
export const repeatArray=(arr,num)=>{
  /**
   * 注意新数组和老数组间是浅层复制关系
   * 在一个基础数组上创建一个新数组，
   * 如果新数组长度超过原数组将循环读取原数组，知道长度达到新数组长度，
   * 如果新数组长度小于原数组，将截取
   */
  if(arr.constructor.name!=='Array'){
    return [];
  }
  const len=arr.length-1;
  let count=0;
  const result=new Array(num).join(',').split(',');
  result.forEach((item,index)=>{
    if(count>len){
      count=0;
    }
    result[index]=arr[count];
    count++;
  });
  return result;
}

export const copyString=(str:string)=>{
  /**
   * @param str:想要复制的字符串
   * @param dom:点击触发复制的dom节点
   */
  let textarea=(window as any).document.getElementById('clipboard-box-container');
  if(!textarea){
    let tempIpt=(window as any).document.createElement('textarea');
    tempIpt.style.fontSize='12pt';
    tempIpt.style.border='0';
    tempIpt.style.padding='0';
    tempIpt.style.margin='0';
    tempIpt.style.position='absolute';
    tempIpt.style.zIndex=-999;
    tempIpt.style.overFlow='auto';
    tempIpt.style.width='10px';
    tempIpt.style.height='10px';
    tempIpt.style.left='-999px';
    tempIpt.style.top='-999px';
    tempIpt.setAttribute('readonly','');
    tempIpt.id="clipboard-box-container";
    (window as any).document.getElementsByTagName('body')[0].appendChild(tempIpt);
    textarea=(window as any).document.getElementById('clipboard-box-container');
  }
  textarea.value=str;
  textarea.select();
  let flag;
  try {
    flag= document.execCommand('copy') ? true: false;
  } catch (err) {
    window.console.log(err);
    flag=false;
  }
  return flag;
}
const fileClick=(el)=>{
  return new Promise(resolve=>{
    el.click();
    const temp=e=>{
      el.removeEventListener('change',temp);
      return resolve(e);
    };
    el.addEventListener('change',temp);
  });
};
const fileReader=(file)=>{
  return new Promise(resolve=>{
    const fr=new FileReader();
    fr.readAsText(file,'utf-8');
    fr.onload=data=>{
      return resolve((data as any).target.result);
    }
    fr.onabort=()=>{
      return resolve(null);
    }
    fr.onerror=()=>{
      return resolve(null);
    }
  });
};
const validJson=json=>{
  if(json.constructor.name!=='Object'){
    return false;
  }
  const contain=["background","defaultColor","plotCfg","fontFamily","defaultLegendPosition","colors","colors_16","colors_24","colors_pie","colors_pie_16","shapes","sizes","opacities","axis","label","treemapLabels","innerLabels","thetaLabels","legend","tooltip","tooltipMarker","tooltipCrosshairsRect","tooltipCrosshairsLine","shape","guide","pixelRatio"];
  const target=Object.keys(json);
  let flag=true;
  for(const i in target){
    if(contain.indexOf(target[i])<0){
      flag=false;
      break;
    }
  }
  return flag;
}
export const dataFromFile=async ()=>{
  let file=(window as any).document.getElementById('file-upload-temp-container');
  if(!file){
    const temp=(window as any).document.createElement('input');
    temp.id="file-upload-temp-container";
    temp.type="file";
    temp.style.display='none';
    (window as any).document.getElementsByTagName('body')[0].appendChild(temp);
    file=(window as any).document.getElementById('file-upload-temp-container');
  }
  const result:any=await fileClick(file);
  const files=result.target.files;
  // 只支持单文件上传,如果格式不是json，将退出
  const fileName=files[0].name.split('.')[0];
  const mime=files[0].name.split('.')[1];
  if(mime.toLowerCase()!=='json'){
    alert('The file\'s type only support *.json');
    return null;
  }
  const data:any=await fileReader(files[0]);
  if(!data){
    alert(`Read ${files[0].name} error!`);
    return null;
  }
  // console.log(Object.keys(JSON.parse(data)).map(item=>`"${item}"`).join(','));
  if(!validJson(JSON.parse(data))){
    //如果存在不属于配置的字段，将不会继续，读取的配置将与原先的配置进行合并
    alert('The formate of file\'s data is error!!');
    return null;
  }
  return {
    seriesNum:3,
    theme:JSON.parse(data),
    title:fileName
  };
}

export const deepObjectMerge=(FirstOBJ, SecondOBJ) =>{ // 深度合并对象
  for (var key in SecondOBJ) {
    if(typeof SecondOBJ[key]==='undefined'){
      continue;
    }
      FirstOBJ[key] = FirstOBJ[key] && FirstOBJ[key].toString() === "[object Object]" ?
          deepObjectMerge(FirstOBJ[key], SecondOBJ[key]) : FirstOBJ[key] = SecondOBJ[key];
  }
  return FirstOBJ;
}