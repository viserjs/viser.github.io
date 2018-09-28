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
  render() {
    const { data } = this.state;

    // 可手动变更legend position 位置， 可选值
    // left-top,left-center,left-bottom,right-top,right-top,right-bottom,top-left,
    // top-center,top-bottom,bottom-left,bottom-center,bottom-right
    return (
      <Chart forceFit height={440} data={data} scale={scale} padding={'auto'}>
        <Tooltip />
        <Axis dataKey="value" show={false} />
        <Legend dataKey="type" position="top-left" />
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
    );
  }
}
