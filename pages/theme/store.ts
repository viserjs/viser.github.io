import { init } from '@rematch/core';
import {repeatArray} from '../common/utils';
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
const themes=JSON.parse(JSON.stringify(theme));
const models = {
    theme: {
        state: {
            defaultTheme:{
                theme: JSON.parse(JSON.stringify(themes)),
                title:'custom',
                seriesNum:defaultNum,
            },
            currentTheme:{
                theme:JSON.parse(JSON.stringify(themes)),
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
                        theme:JSON.parse(JSON.stringify(themes))
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
                const theme=state.currentTheme.theme;
                // console.log(theme);
                let temp=theme;
                const len=paths.length;
                let lastKey;
                paths.forEach((path,index)=>{
                    if(index>=len-1){
                        return lastKey=path;
                    }
                    temp=temp[path];
                });
                temp[lastKey]=payload.value;
                if(/colors\//.test(payload.path)){
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
                            background:payload.background||'#ffffff'
                        }
                    }
                }
            }
        },
        effects: {

        }
    }
};


const store = init({ models });
export default store;