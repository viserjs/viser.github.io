import { Chart, Tooltip, Axis, Bar, Coord } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const sourceData = [
  { country: '中国', population: 131744 },
  { country: '印度', population: 104970 },
  { country: '美国', population: 29034 },
  { country: '印尼', population: 23489 },
  { country: '巴西', population: 18203 },
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'sort',
  callback(a, b) {
    return a.population - b.population > 0;
  },
});
const data = dv.rows;

export default class App extends React.Component {
  render() {
    return (
      <Chart forceFit height={400} data={data}>
        <Coord type="rect" direction="LB" />
        <Tooltip />
        <Axis dataKey="country" label={{ offset: 12 }} />
        <Bar position="country*population" />
      </Chart>
    );
  }
}

