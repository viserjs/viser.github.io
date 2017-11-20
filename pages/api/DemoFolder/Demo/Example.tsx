import * as React from 'react';
// import { Chart, Line, Tooltip, Legend, Axis } from '../../../../lib/rechart-core';

const config = {
  data: [
    { age: '5', gender: '女性', mean: 101, lower: 93, upper: 109 },
    { age: '10', gender: '女性', mean: 120, lower: 110, upper: 124 },
    { age: '15', gender: '女性', mean: 150, lower: 134, upper: 165 },
    { age: '20', gender: '女性', mean: 167, lower: 151.6, upper: 178 },
    { age: '25', gender: '女性', mean: 175, lower: 156.7, upper: 181 },
    { age: '30', gender: '女性', mean: 175, lower: 160, upper: 181 },
    { age: '35', gender: '女性', mean: 173, lower: 156, upper: 181 },
    { age: '40', gender: '女性', mean: 170, lower: 152, upper: 173 },
    { age: '45', gender: '女性', mean: 170, lower: 154, upper: 176 },
    { age: '50', gender: '女性', mean: 163, lower: 149, upper: 166 },
    { age: '5', gender: '男性', mean: 104, lower: 101, upper: 111 },
    { age: '10', gender: '男性', mean: 130, lower: 120, upper: 134 },
    { age: '15', gender: '男性', mean: 165, lower: 149, upper: 180 },
    { age: '20', gender: '男性', mean: 178, lower: 152.6, upper: 193 },
    { age: '25', gender: '男性', mean: 185, lower: 166.7, upper: 194 },
    { age: '30', gender: '男性', mean: 183, lower: 158, upper: 189 },
    { age: '35', gender: '男性', mean: 182, lower: 165, upper: 192 },
    { age: '40', gender: '男性', mean: 180, lower: 172, upper: 190 },
    { age: '45', gender: '男性', mean: 182, lower: 166, upper: 188 },
    { age: '50', gender: '男性', mean: 177, lower: 163, upper: 192 },
  ],
  dataDef: [
    {
      key: 'age',
      mark: 'column',
      scale: {},
    }, {
      key: 'gender',
      mark: 'color',
      scale: {},
    },
    {
      key: 'mean',
      mark: 'row',
      scale: {},
    },
  ],
};

export class Example extends React.Component {
  render() {
    return (
      <div className="example-4526731">
        <Chart width={800} height={400} data={config.data} dataDef={config.dataDef}>
          <Line position={['age', 'mean']} />
          <Tooltip />
          <Legend />
          <Axis dataKey={'mean'} show />
        </Chart>
      </div>
    );
  }
}
