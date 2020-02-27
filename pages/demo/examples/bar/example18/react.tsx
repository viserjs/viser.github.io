import { Chart, Tooltip, Axis, Interval } from 'viser-react';
import * as React from 'react';

const data = [{
  time: '9:00-10:00',
  value: 30
}, {
  time: '10:00-11:00',
  value: 90
}, {
  time: '11:00-12:00',
  value: 50
}, {
  time: '12:00-13:00',
  value: 30
}, {
  time: '13:00-14:00',
  value: 70
}];

const scale = [{
  dataKey: 'value',
  alias: '销售额(万)'
}];

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const tickLine = {
  alignWithLabel: false,
  length: 0
}

const opacity = ['time', function(val) {
  if (val === '13:00-14:00') {
    return 0.4;
  }
  return 1;
}]

const style = ['time', {
  lineWidth: function lineWidth(val) {
    if (val === '13:00-14:00') {
      return 1;
    }
    return 0;
  },
  stroke: '#636363',
  lineDash: [3, 2]
}]

export default class App extends React.Component {
  render() {
    return (
      <Chart forceFit height={400} data={data} scale={scale} padding={[20, 20, 50, 30]}>
        <Tooltip shared={true}/>
        <Axis dataKey="time" label={label} tickLine={tickLine}/>
        <Axis dataKey="value" label={label}/>
        <Interval position="time*value" opacity={opacity} style={style}/>
      </Chart>
    );
  }
}

