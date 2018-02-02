import { Chart, Tooltip, Axis, Legend, Line } from 'viser-react';

import * as React from 'react';
const DataSet = require('@antv/data-set');

const sourceData = [
  { month: 'Jan', series2: 51, series1: 125 },
  { month: 'Feb', series2: 91, series1: 132 },
  { month: 'Mar', series2: 34, series1: 141 },
  { month: 'Apr', series2: 47, series1: 158 },
  { month: 'May', series2: 63, series1: 133 },
  { month: 'June', series2: 58, series1: 143 },
  { month: 'July', series2: 56, series1: 176 },
  { month: 'Aug', series2: 77, series1: 194 },
  { month: 'Sep', series2: 99, series1: 115 },
  { month: 'Oct', series2: 106, series1: 134 },
  { month: 'Nov', series2: 88, series1: 110 },
  { month: 'Dec', series2: 56, series1: 91 },
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'fold',
  fields: ['series1', 'series2'],
  key: 'key',
  value: 'value',
});
const data = dv.rows;

const scale = [{
  dataKey: 'month',
  min: 0,
  max: 1,
}];


export default class App extends React.Component {
  render() {
    return (
      <Chart forceFit height={400} data={data} scale={scale}>
        <Tooltip />
        <Axis />
        <Legend />
        <Line position="month*value" shape="hv" color="key" />
      </Chart>
    );
  }
}





