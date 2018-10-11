import { init } from '@rematch/core';
import * as _ from 'lodash';
import {repeatArray,deepObjectMerge} from '../common/utils';
import theme from './theme';

const randNum = (): number => {
    const number: number = Math.ceil(Math.random() * 1000);
    return number;
};
const defaultNum=3;
const dataCreater=(num=defaultNum):any=>{
    const weeks=['周一','周二','周三','周四','周五','周六','周日'];
    if(num.constructor.name!=='Number'&&num<=0){
        return [];
    }
    const arr=new Array(num).join(',').split(',');
    const result=[];
    weeks.forEach(week=>{
        arr.forEach((item,index)=>{
            result.push({
                week:week,
                value:randNum(),
                city:'area'+index
            });
        });
    });
    return result;
}
const themes=_.cloneDeep(theme);
const models = {
    theme: {
        state: {
            defaultTheme:{
                theme: _.cloneDeep(themes),
                title:'custom',
                seriesNum:defaultNum,
            },
            currentTheme:{
                theme:_.cloneDeep(themes),
                title:'custom',
                seriesNum:defaultNum,
            },
            commonData: dataCreater()
        },
        reducers: {
            setData(state,payload) {
                // window.console.log(payload)
                return {
                    ...state,
                    commonData:dataCreater(state.currentTheme.seriesNum),
                    // currentTheme:{
                    //     ...state.currentTheme,
                    //     seriesNum:defaultNum
                    // }
                };
            },
            setDefaultTheme(state){
                // console.log(state.defaultTheme);
                return{
                    ...state,
                    commonData:dataCreater(defaultNum),
                    currentTheme:{
                        ...state.currentTheme,
                        theme:_.cloneDeep(themes),
                        seriesNum:defaultNum
                    }
                }
            },
            setCurrentTheme(state,payload){
                /**
                 * payload
                 * @property path,要用/来区分对象属性的层次
                */
                // console.log(payload);
                const paths=payload.path.split('/');
                const theme=_.cloneDeep(state.currentTheme.theme);
                // console.log(theme);
                let temp=theme;
                const len=paths.length;
                let lastKey;
                if(paths[0]==='axis'){
                    const arr=['bottom','circle','helix','left','radius','right','top'];
                    arr.forEach(key=>{
                        temp=theme;
                        paths.forEach((path,index)=>{
                            if(index>=len-1){
                                return lastKey=path;
                            }
                            if(typeof temp[path==='~'?key:path]==='undefined'||temp[path === '~' ? key : path] ===null){
                                temp[path==='~'?key:path]={};
                            }
                            temp=temp[path==='~'?key:path];
                        });
                        temp[lastKey]=payload.value==='true'?true:(
                            payload.value==='false'?
                            false:
                            payload.value
                        );
                    });
                }else if(paths[0]==='legend'){
                    const arr=['bottom','gradient','left','right','top'];
                    arr.forEach(key=>{
                        temp=theme;
                        paths.forEach((path,index)=>{
                            if(index>=len-1){
                                return lastKey=path;
                            }
                            if(typeof temp[path==='~'?key:path]==='undefined'||temp[path === '~' ? key : path] ===null){
                                temp[path==='~'?key:path]={};
                            }
                            temp=temp[path==='~'?key:path];
                        });
                        temp[lastKey]=payload.value==='true'?true:(
                            payload.value==='false'?
                            false:
                            payload.value
                        );
                    });
                }else{
                    paths.forEach((path,index)=>{
                        if(index>=len-1){
                            return lastKey=path;
                        }
                        temp=temp[path];
                    });
                    temp[lastKey]=payload.value==='true'?true:(
                        payload.value==='false'?
                        false:
                        payload.value
                    );
                }
                if(payload.path==='defaultColor'){
                    //设置默认主题色后将改变所有颜色的第一颜色
                    theme['colors'][0]=payload.value;
                    theme['colors_16'][0]=payload.value;
                    theme['colors_24'][0]=payload.value;
                    theme['colors_pie'][0]=payload.value;
                    theme['colors_pie_16'][0]=payload.value;
                }
                if(/colors\//.test(payload.path)){
                    theme['defaultColor']=theme.colors[0];
                    theme['colors_16']=repeatArray(theme.colors.slice(),16);
                    theme['colors_24']=repeatArray(theme.colors.slice(),24);
                    theme['colors_pie']=repeatArray(theme.colors.slice(),8);
                    theme['colors_pie_16']=repeatArray(theme.colors.slice(),16);
                }
                return {
                    ...state,
                    currentTheme:{
                        ...state.currentTheme,
                        theme
                    }
                }
            },
            changeCurrentField(state,payload){// Key/value对象，设置名称和数量
                const commonData:any={};
                if(payload.key==='seriesNum'){
                    if(payload.value<=0){
                        payload.value=0;
                    }
                    commonData.commonData=dataCreater(Number(payload.value));
                }
                return {
                    ...state,
                    currentTheme:{
                        ...state.currentTheme,
                        [payload.key]:payload.key==='seriesNum'?Number(payload.value):payload.value
                    },
                    ...commonData
                }
            },
            changeColors(state,payload){
                let colors;
                const theme=state.currentTheme.theme;
                if(payload==='increase'){
                    colors=theme.colors.slice();
                    colors.push('#333333');
                }else{
                    colors=theme.colors.slice(0,theme.colors.length-1);
                }
                const colors_16=repeatArray(colors,16);
                const colors_24=repeatArray(colors,24);
                const colors_pie=repeatArray(colors,8);
                const colors_pie_16=repeatArray(colors,16);
                return {
                    ...state,
                    currentTheme:{
                        ...state.currentTheme,
                        theme:{
                            ...state.currentTheme.theme,
                            colors,
                            colors_16,
                            colors_24,
                            colors_pie,
                            colors_pie_16
                        }
                    }
                }
            },
            setColorSeries(state,payload){
                // console.log(payload);
                return {
                    ...state,
                    currentTheme:{
                        ...state.currentTheme,
                        theme:{
                            ...state.currentTheme.theme,
                            colors:payload.colors||[],
                            background:payload.background||'#ffffff',
                            defaultColor:payload.colors[0],
                            colors_16:repeatArray(payload.colors,16),
                            colors_24:repeatArray(payload.colors,24),
                            colors_pie:repeatArray(payload.colors,8),
                            colors_pie_16:repeatArray(payload.colors,16),
                        }
                    }
                }
            },
            mergeConfig(state,payload){
                return {
                    ...state,
                    currentTheme:deepObjectMerge(state.currentTheme,payload)
                }
            }
        },
        effects: {

        }
    }
};


const store = init({ models });
export default store;