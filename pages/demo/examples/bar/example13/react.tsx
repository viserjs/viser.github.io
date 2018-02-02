import { Chart, Tooltip, Axis, Bar, Coord, Legend } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const sourceData = [
  { profession: '两年制副学士学位', highest: 110000, minimum: 23000, mean: 56636 },
  { profession: '执法与救火', highest: 120000, minimum: 18000, mean: 66625 },
  { profession: '教育学', highest: 125000, minimum: 24000, mean: 72536 },
  { profession: '心理学', highest: 130000, minimum: 22500, mean: 75256 },
  { profession: '计算机科学', highest: 131000, minimum: 23000, mean: 77031 }
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'map',
  callback(row) {
    row.range = [row.minimum, row.highest];
    return row;
  }
});
const data = dv.rows;

export default class App extends React.Component {
  render() {
    return (
      <Chart forceFit height={400} padding={[20, 80, 50, 110]} data={data}>
        <Coord type="rect" direction="LB" />
        <Tooltip />
        <Legend />
        <Axis dataKey="profession" label={{ offset: 12 }} />
        <Bar position="profession*range" />
      </Chart>
    );
  }
}

