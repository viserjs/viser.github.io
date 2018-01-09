import { Chart, Tooltip, Axis, StackBar, Coord, Legend } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const sourceData = [
  { 'State': 'WY', '小于5岁': 25635, '5至13岁': 1890, '14至17岁': 9314 },
  { 'State': 'DC', '小于5岁': 30352, '5至13岁': 20439, '14至17岁': 10225 },
  { 'State': 'VT', '小于5岁': 38253, '5至13岁': 42538, '14至17岁': 15757 },
  { 'State': 'ND', '小于5岁': 51896, '5至13岁': 67358, '14至17岁': 18794 },
  { 'State': 'AK', '小于5岁': 72083, '5至13岁': 85640, '14至17岁': 22153 }
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'fold',
  fields: ['小于5岁', '5至13岁', '14至17岁'],
  key: '年龄段',
  value: '人口数量',
  retains: ['State'],
});
const data = dv.rows;

class App extends React.Component {
  render() {
    return (
      <Chart forceFit height={400} data={data}>
        <Coord type="rect" direction="LB" />
        <Tooltip />
        <Legend />
        <Axis dataKey="State" label={{ offset: 12 }} />
        <StackBar position="State*人口数量" color="年龄段" />
      </Chart>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);
