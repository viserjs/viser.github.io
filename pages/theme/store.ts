import { init } from '@rematch/core';
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
                theme: themes,
                title:'custom',
                seriesNum:defaultNum,
            },
            currentTheme:{
                theme:themes,
                title:'custom',
                seriesNum:defaultNum,
            },
            commonData: dataCreater()
        },
        reducers: {
            setData(state,payload) {
                window.console.log(payload)
                return {
                    ...state,
                    commonData:dataCreater(defaultNum),
                    currentTheme:{
                        ...state.currentTheme,
                        seriesNum:defaultNum
                    }
                };
            },
            setDefaultTheme(state){
                return{
                    ...state,
                    currentTheme:{...state.defaultTheme}
                }
            },
            setCurrentTheme(state,payload){
                return {
                    ...state
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
            }
        },
        effects: {

        }
    }
};


const store = init({ models });
export default store;