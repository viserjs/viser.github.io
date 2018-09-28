import { init } from '@rematch/core';
import theme from './theme';

const randNum = (): number => {
    const number: number = Math.ceil(Math.random() * 1000);
    return number;
}
// window.console.log(theme);
const models = {
    theme: {
        state: {
            defaultTheme: JSON.parse(JSON.stringify(theme)),
            theme: {

            },
            commonData: [
                { year: '周一', value: randNum() },
                { year: '周二', value: randNum() },
                { year: '周三', value: randNum() },
                { year: '周四', value: randNum() },
                { year: '周五', value: randNum() },
                { year: '周六', value: randNum() },
                { year: '周日', value: randNum() },
            ]
        },
        reducers: {
            setData(state) {
                // window.console.log(state)
                return {
                    ...state,
                    commonData: [
                        { year: '周一', value: randNum() },
                        { year: '周二', value: randNum() },
                        { year: '周三', value: randNum() },
                        { year: '周四', value: randNum() },
                        { year: '周五', value: randNum() },
                        { year: '周六', value: randNum() },
                        { year: '周日', value: randNum() },
                    ]
                };
            }
        },
        effects: {

        }
    }
};


const store = init({ models });
export default store;