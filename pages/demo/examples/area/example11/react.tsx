import { Chart, Tooltip, Axis, Line, View, Point, Area } from 'viser-react';
import * as $ from 'jquery';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const data = [{
  "Date": "22 February",
  "订阅数": 50000,
  "月收入": 125000
}, {
  "Date": "28 February",
  "订阅数": 60000,
  "月收入": 150000
}, {
  "Date": "3 March",
  "订阅数": 100000,
  "月收入": 250000
}, {
  "Date": "20 March",
  "订阅数": 200000,
  "月收入": 500000
}, {
  "Date": "7 April",
  "订阅数": 250000,
  "月收入": 625000
}, {
  "Date": "13 June",
  "订阅数": 210000,
  "月收入": 525000
}];

const ds = new DataSet();
const dv = ds.createView().source(data).transform({
  type: 'fold',
  fields: ["订阅数", "月收入"],
  key: 'type',
  value: 'value',
  retains: ['Date']
});
const dv2 = ds.createView().source(data).transform({
  type: 'map',
  callback: function callback(row) {
    row.range = [row["订阅数"], row['月收入']];
    return row;
  }
});

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const labelFormat = {
  textStyle: {
    fill: '#aaaaaa'
  },
  formatter: function formatter(text) {
    return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Chart forceFit data={data} height={400} padding='auto' scale={[{
        dataKey:'Date',
        range: [0, 1],
        tickCount: 10,
        type: 'timeCat'
      }]}>
        <Tooltip crosshairs='y'/>
        <Axis dataKey="value" label={labelFormat}/>
        <Axis dataKey="Date" label={label}/>
        <View data={dv2.rows}>
          <Axis show={false} dataKey='range'/>
          <Area position="Date*range" color='#8d8d8d' opacity={0.1}/>
        </View>
        <View data={dv.rows}>
          <Line position="Date*value" color='type' opacity={1}/>
          <Point position="Date*value" color='type' opacity={1} shape='circle'/>
        </View>
      </Chart>
    );
  }
}
