import * as React from 'react';
import { Chart, Coord, Legend, Tooltip, Pie } from 'viser-react';
const data = [
  {
    type: '分类一',
    value: 27,
  },
  {
    type: '分类二',
    value: 25,
  },
  {
    type: '分类三',
    value: 18,
  },
  {
    type: '分类四',
    value: 15,
  },
  {
    type: '分类五',
    value: 10,
  },
  {
    type: 'Other',
    value: 5,
  },
];

export default class App extends React.Component {
  render() {
    return (
      <Chart forceFit={true} height={400} padding={[40, 0]} data={data}>
        <Tooltip />
        <Legend dataKey="type" />
        <Coord type="theta" startAngle={180} endAngle={270} />
        <Pie position="value" color="type" label="type" />
      </Chart>
    );
  }
}
