import { Chart, Tooltip, Axis, StackBar, Legend, View } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const data = [
    { country: 'Europe', year: '1750', value: 163 },
    { country: 'Europe', year: '1800', value: 203 },
    { country: 'Europe', year: '1850', value: 276 },
    { country: 'Europe', year: '1900', value: 408 },
    { country: 'Europe', year: '1950', value: 547 },
    { country: 'Europe', year: '1999', value: 729 },
    { country: 'Europe', year: '2050', value: 628 },
    { country: 'Europe', year: '2100', value: 828 },
    { country: 'Asia', year: '1750', value: 502 },
    { country: 'Asia', year: '1800', value: 635 },
    { country: 'Asia', year: '1850', value: 809 },
    { country: 'Asia', year: '1900', value: 947 },
    { country: 'Asia', year: '1950', value: 1402 },
    { country: 'Asia', year: '1999', value: 3634 },
    { country: 'Asia', year: '2050', value: 5268 },
    { country: 'Asia', year: '2100', value: 7268 }
];

const scale = [{
    dataKey: 'percent',
    min: 0,
    formatter: '.2%',
}];

const repaintData = [
    { country: 'Europe', year: '1750', value: 2163 },
    { country: 'Europe', year: '1800', value: 2203 },
    { country: 'Europe', year: '1850', value: 2276 },
    { country: 'Europe', year: '1900', value: 2408 },
    { country: 'Europe', year: '1950', value: 2547 },
    { country: 'Europe', year: '1999', value: 2729 },
    { country: 'Europe', year: '2050', value: 2628 },
    { country: 'Europe', year: '2100', value: 2828 },
    { country: 'Asia', year: '1750', value: 2502 },
    { country: 'Asia', year: '1800', value: 2635 },
    { country: 'Asia', year: '1850', value: 2809 },
    { country: 'Asia', year: '1900', value: 2947 },
    { country: 'Asia', year: '1950', value: 21402 },
    { country: 'Asia', year: '1999', value: 23634 },
    { country: 'Asia', year: '2050', value: 25268 },
    { country: 'Asia', year: '2100', value: 27268 }
];

const ds = new DataSet();


export default class App extends React.Component {
    dv: any;
    ds: any;

    state = {
        height: 400,
        lineWidth: 1,
        data,
        key: 'data',
    }

    constructor(props) {
        super(props);

        const dv = ds.createView().source(data);
        dv.transform({
            type: 'percent',
            field: 'value',
            dimension: 'country',
            groupBy: ['year'],
            as: 'percent'
        });

        this.state.data = dv;
    }

    handleClick = () => {
        const dt = this.state.key === 'data' ? repaintData : data;
        const dv = ds.createView().source(dt);
        dv.transform({
            type: 'percent',
            field: 'value',
            dimension: 'country',
            groupBy: ['year'],
            as: 'percent'
        });

        this.setState({
            height: this.state.key === 'data' ? 600 : 400,
            lineWidth: this.state.key === 'data' ? 10 : 1,
            data: dv,
            key: this.state.key === 'data' ? 'repaintData' : 'data',
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>switch density</button>
                <Chart forceFit height={this.state.height} padding={[80, 80]} renderer={'svg'}>
                    <Tooltip />
                    <Axis dataKey='year'
                        label={{
                            density: 0.2,
                            formatter: ',.0f',
                            // formatter: (val: any, item: any, i: number) => {
                            //   return val;
                            // }
                        }}
                    />
                    <Legend />
                    <View data={this.state.data} scale={scale} >
                        <StackBar position='year*percent' color='country'
                            style={{ stroke: '#fff', lineWidth: this.state.lineWidth }}
                            label={['value', {
                                density: 0.3,
                                // formatter: (val: any, item: any, i: number) => {
                                //   return '￥' + val;
                                // }
                                formatter: '$'
                            }]}
                            onLabelClick={(ev) => {
                                console.log('label click', ev);
                            }}
                        />
                    </View>
                </Chart>
                {/* <LiteChart height={400} data={dv.rows} forceFit stackBar /> */}
            </div>
        );
    }
}