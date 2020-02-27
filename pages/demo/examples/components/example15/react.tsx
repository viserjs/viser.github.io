import { Chart, Axis, Tooltip, Area, Legend } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');


export default class App extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        $.getJSON('/assets/data/baby-names.json', (data) => {
            var ds = new DataSet();
            var dv = ds.createView('demo').source(data).transform({
                type: 'fill-rows',
                groupBy: ['name'],
                orderBy: ['year']
            }).transform({
                type: 'impute',
                field: 'n',
                method: 'value',
                value: 0
            }).transform({
                type: 'aggregate',
                fields: ['n'],
                operations: ['sum'],
                groupBy: ['year', 'name'],
                orderBy: ['year'],
                as: ['count']
            });
            this.setState({
                data: dv
            });
        });
    }

    render() {
        const scale = [
            {
                dataKey: 'year',
                tickInterval: 10,
                nice: false
            },
            {
                dataKey: 'count',
                nice: false
            }
        ];
        return (
            <Chart data={this.state.data} forceFit height={500} padding={[20, 180, 50, 50]} plotBackground={{ stroke: '#ccc' }} scale={scale}>
                <Tooltip shared={false} crosshairs={false} />
                <Legend
                    useHtml={true}
                    flipPage={true}
                    position="right"
                    title={{
                        text: '图例可滚动'
                    }}
                />
                <Axis dataKey="year" title={null} line={null} tickLine={null} />
                <Axis dataKey="count" title={null} line={null} tickLine={{ length: 8 }} subTickCount={10} subTickLine={{ lineWidth: 1, stroke: '#ddd', length: 5 }} grid={null} />
                <Area
                    position="year*count"
                    adjust={['stack', 'symmetric']}
                    color="name"
                    shape="smooth"
                    opacity={1}
                />
            </Chart>
        );
    }
}
