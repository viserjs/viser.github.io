import { Chart, Axis,Tooltip ,Interval} from 'viser-react';
import * as React from 'react';

const data:any = [{
  name: '类别一',
  value: 150,
  error: 6
}, {
  name: '类别二',
  value: 120,
  error: 10
}, {
  name: '类别三',
  value: 170,
  error: 5
}, {
  name: '类别四',
  value: 170,
  error: 5
  }];
data.forEach(function(obj) {
  obj.range = [obj.value - obj.error, obj.value + obj.error];
});

export default class App extends React.Component {
  render() {
    const scale = [
      {
        dataKey: 'value',
        min: 0,
        max:200
      },
      {
        dataKey: 'range',
        min: 0,
        mx:200
      }
    ];
    return (
      <Chart
        forceFit={true}
        height={400}
        data={data}
        scale={scale}
        padding="auto"
      >
        <Axis />
        <Tooltip />
        <Interval
          position="name*value"
          color="name"
          opacity={.7}
        />
        <Interval
          position="name*range"
          color="name"
          size={40}
          shape="tick"
        />
      </Chart>
    );
  }
}
