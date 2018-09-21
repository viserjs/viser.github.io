import { Area, Axis, Chart, Coord, View } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const getJSON = src => new Promise(resolve => $.getJSON(src, data => resolve(data)));

export default class App extends React.Component {
    state = {
        data: [],
        scale: [
            {
                dataKey: 'time',
                type: 'time',
                tickCount: 8,
                mask: 'm/dd hh:MM'
            },
            {
                dataKey: 'flow',
                alias: '流量(m^3/s)'
            },
            {
                dataKey: 'rain',
                alias: '降雨量(mm)'
            }
        ]
    }
    async componentDidMount() {
        let oriData;
        oriData = await getJSON('/assets/data/rain-flow-1.json').catch(e => {
            window.console.warn(e.stack);
            oriData = [];
        });
        const ds = new DataSet({
            state: {
                start: new Date('2009/7/20 0:00').getTime(),
                end: new Date('2009/9/9 0:00').getTime()
            }
        });
        const data = ds.createView('origin').source(oriData);
        data.transform({
            type: 'filter',
            callback: function callback(obj) {
                var time = new Date(obj.time).getTime(); // !注意：时间格式，建议转换为时间戳进行比较
                return time >= ds.state.start && time <= ds.state.end;
            }
        });
        this.setState({ data })
    }
    render() {
        return <Chart forceFit={true} height={400} padding={[40, 40, 40, 80]} >
            <Axis dataKey="rain" grid={null} />
            <Axis dataKey="flow" title={{ autoRotate: true }} />
            <View data={this.state.data} scale={this.state.scale}>
                <Area position="time*flow" color="l(100) 0:#a50f15 1:#fee5d9" opacity={0.85} />
            </View>
            <View data={this.state.data} scale={this.state.scale}>
                <Axis dataKey="rain" position="right" />
                <Coord />
                <Area position="time*rain" color="l(100) 0:#293c55 1:#f7f7f7" opacity={0.85} />
            </View>
        </Chart>
    }
}