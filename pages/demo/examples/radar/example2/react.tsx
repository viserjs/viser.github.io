import { Chart, Tooltip, Axis, Legend, Coord, Line, Point, Area } from 'viser-react';

import * as React from 'react';
const DataSet = require('@antv/data-set');

const sourceData = [
  { item: 'Design', a: 70, b: 30 },
  { item: 'Development', a: 60, b: 70 },
  { item: 'Marketing', a: 50, b: 60 },
  { item: 'Users', a: 40, b: 50 },
  { item: 'Test', a: 60, b: 70 },
  { item: 'Language', a: 70, b: 50 },
  { item: 'Technology', a: 50, b: 40 },
  { item: 'Support', a: 30, b: 40 },
  { item: 'Sales', a: 60, b: 40 },
  { item: 'UX', a: 50, b: 60 }
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'fold',
  fields: ['a', 'b'],
  key: 'user',
  value: 'score',
});
const data = dv.rows;

const scale = [{
  dataKey: 'score',
  min: 0,
  max: 80,
}];

export default class App extends React.Component {
  render() {
    const axis1Opts: any = {
      dataKey: 'item',
      line: null,
      tickLine: null,
      grid: {
        lineStyle: {
          lineDash: null
        },
        hideFirstLine: false,
      },
    };

    const axis2Opts: any = {
      dataKey: 'score',
      line: null,
      tickLine: null,
      grid: {
        type: 'polygon',
        lineStyle: {
          lineDash: null,
        },
      },
    };

    const coordOpts: any = {
      type: 'polar',
      radius: '0.8',
    };

    return (
      <Chart forceFit height={500} data={data} padding={[20, 20, 95, 20]} scale={scale}>
        <Tooltip />
        <Axis {...axis1Opts} />
        <Axis {...axis2Opts} />
        <Legend dataKey="user" marker="circle" offset={30} />
        <Coord {...coordOpts} />
        <Line position="item*score" color="user" size={2} />
        <Point position="item*score" color="user" size={4} shape="circle"/>
      </Chart>
    );
  }
}





