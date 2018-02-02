import { Chart, Axis, Tooltip, Coord, Interval } from 'viser-react';
import * as React from 'react';

const data = [];
const n = 31;
for (let i = 0; i < 372; i++) {
  const now = Date();
  data[i] = {};
  data[i].time = new Date(now).getTime() + i * 1000 * 3600 * 24;
  const random = Math.floor(Math.random() * 10);
  if (((i % n > 2) && (i % n < 4)) || ((i % n >= 6) && (i % n < 7))) {
    data[i].value = 30 + random * 7;
  } else if ((i % n >= 4) && (i % n < 6)) {
    data[i].value = 60 + random * 8;
  } else {
    data[i].value = 10 + random * 5;
  }
}

const scale = [{
  dataKey: 'time',
  type: 'timeCat',
  mask: 'YYYY.MM.DD'
}, {
  dataKey: 'value',
  min: 0,
}];

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Chart forceFit height={400} padding={[0, 60, 30, 0]} data={data} scale={scale}>
          <Tooltip showTitle={null} />
          <Coord type="helix" startAngle={0.5 * Math.PI} endAngle={12.5 * Math.PI} />
          <Axis dataKey="time" line={null} />
          <Interval position="time*value" color={['value', '#ffffff-#1890FF']} size={0.45} />
        </Chart>
      </div>
    );
  }
}


