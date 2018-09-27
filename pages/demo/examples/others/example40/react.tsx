import * as React from 'react';
import { Chart, Tooltip, Axis, Line } from 'viser-react';

const scale = [
    {
        dataKey: 'time',
        alias: '时间',
        type: 'time',
        mask: 'MM:ss',
        tickCount: 20,
        nice: false 
    },
    {
        dataKey: 'temperature',
        alias: '平均温度(°C)',
        min: 10,
        max: 35 
    },{
        dataKey: 'type',
        type: 'cat',
    }
  ];

export default class App extends React.Component {
    constructor(props) {
        super(props);
        const me = this;
        me.state = {
            data: []
        }
    }

    updateData() {
        const me = this;
        const now = new Date();
        const time = now.getTime();
        const temperature1 = ~~(Math.random() * 5) + 22;
        const temperature2 = ~~(Math.random() * 7) + 17;
        let newData = me.state.data;
        if (newData.length >= 200) {
            newData.shift();
            newData.shift();
        }
        newData.push({
            time: time,
            temperature: temperature1,
            type: '记录1'
        });
        newData.push({
            time: time,
            temperature: temperature2,
            type: '记录2'
        });
        me.setState({
            data: newData
        })
    }
    
    render() {
        const me = this;
        setTimeout(me.updateData.bind(me),1000);
        const getData = me.state.data;
        return (
            <Chart
                container="mountNode"
                forceFit={true}
                height={400}
                data={getData}
                scale={scale}
            > 
                <Tooltip/>
                <Axis/>
                <Line position="time*temperature" color="type" shape="smooth"/>
            </Chart>
        );
    }
}
