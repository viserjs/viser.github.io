import * as React from 'react';
import { Chart, Coord, Tooltip, Pie } from 'viser-react';

const data = [
  {
    sex: '男',
    sold: 0.45,
  },
  {
    sex: '女',
    sold: 0.55,
  },
];

export default class App extends React.Component {
  render() {
    return (
      <Chart forceFit={true} height={400} data={data}>
        <Coord type="theta" radius={0.8} />
        <Tooltip showTitle={false} />
        <Pie
          position="sold"
          label="sex"
          style={[
            'sex',
            {
              fill: sex =>
                sex === '男'
                  ? 'p(a)https://gw.alipayobjects.com/zos/rmsportal/nASTPWDPJDMgkDRlAUmw.jpeg'
                  : 'p(a)https://gw.alipayobjects.com/zos/rmsportal/ziMWHpHSTlTzURSzCarw.jpeg',
            },
          ]}
        />
      </Chart>
    );
  }
}
