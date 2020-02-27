import * as React from 'react';
import {
  Axis,
  Chart,
  Coord,
  Legend,
  StackInterval,
  Tooltip,
} from 'viser-react';

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
      <Chart forceFit={true} height={400} padding={[50, 40]} data={data}>
        <Coord type="polar" startAngle={180} endAngle={270} />
        <Tooltip />
        <Axis />
        <Legend dataKey="type" />
        <StackInterval
          position="type*value"
          color={['type', 'rgb(252,143,72)-rgb(255,215,135)']}
          label={[
            'value',
            { offset: -15, label: { textAlign: 'center', fill: '#000' } },
          ]}
          style={{ lineWidth: 1, stroke: '#fff' }}
        />
      </Chart>
    );
  }
}
