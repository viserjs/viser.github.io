import { Chart, Tooltip, Axis, Line, Area, Legend } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');
import * as $ from 'jquery';

const scale = [
    {
        dataKey: 'year',
        type: 'linear',
        tickInterval: 10,
    },
    {
        dataKey: 'range',
        type: 'linear',
        min: 10,
        max: 45,
        tickInterval: 5,
    },
    {
        dataKey: 'value',
        type: 'linear',
        min: 10,
        max: 45,
        tickInterval: 5,
    },
];

export default class App extends React.Component {
    state = {
        data: [],
        position: 'top-left'
    };
    componentDidMount() {
        $.getJSON('/assets/data/data-RgqdN.json', data => {
            var ds = new DataSet();
            var dv = ds.createView().source(data);
            dv.transform({
                type: 'map',
                callback: function callback(row) {
                    row.range = [row.younger, row.older];
                    return row;
                },
            });
            dv.transform({
                type: 'fold',
                fields: ['younger', 'older'], // 展开字段集
                key: 'type', // key字段
                value: 'value', // value字段
            });
            this.setState({
                data: dv,
            });
        });
    }
    handleChange = (e) => {
        this.setState({
            position: e.target.value
        });
    }
    render() {
        const { data } = this.state;

        return (
            <div>
                <select id="position-selector" value={this.state.position} onChange={this.handleChange}>
                    <option value="top-left">top-left</option><option value="top-center">top-center</option><option value="top-right">top-right</option><option value="bottom-left">bottom-left</option><option value="bottom-center">bottom-center</option><option value="bottom-right">bottom-right</option> <option value="left-top">left-top</option><option value="left-center">left-center</option><option value="left-bottom">left-bottom</option><option value="right-top">right-top</option><option value="right-center">right-center</option><option value="right-bottom">right-bottom</option>
                </select>
                <Chart forceFit height={440} data={data} scale={scale} padding={'auto'}>
                    <Tooltip />
                    <Axis dataKey="value" show={false} />
                    <Legend dataKey="type" position={this.state.position} />
                    <Area
                        position="year*range"
                        color="#045493"
                        opacity={0.05}
                        tooltip={false}
                    />
                    <Line
                        position="year*range"
                        color={['type', ['#d97841', '#4495c2']]}
                        size={3}
                        style={{
                            opacity: 0.7,
                        }}
                    />
                </Chart>
            </div>
        );
    }
}
