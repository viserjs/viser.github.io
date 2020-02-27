import { Chart, Tooltip, Coord, StackBar, Legend } from 'viser-react';
import * as $ from 'jquery';
import * as React from 'react';

const data = [{
  location: '三亚',
  value: 44.9
}, {
  location: '千岛湖',
  value: 19.7
}, {
  location: '柬埔寨',
  value: 17.3
}, {
  location: '呼伦贝尔',
  value: 14.4
}, {
  location: '苏梅岛',
  value: 2.5
}, {
  location: '塞班岛',
  value: 2.5
}];

export default class App extends React.Component {

  render() {
    return (
      <Chart forceFit data={data} height={400} padding='auto'>
        <Tooltip />
        <Legend position='right-center' offsetX={-100}/>
        <Coord type='theta' radius={0.75}/>
        <StackBar 
          position='value'
          color={['location', ['#1890ff', '#37c661', '#fbce1e', '#2b3b79', '#8a4be2', '#1dc5c5']]}
          style={{
            stroke: 'white',
            lineWidth: 1
          }}
          label={['value', function(val) {
            if (val < 3) {
              return null;
            } else {
              return {
                offset: -30,
                textStyle: {
                  fill: 'white',
                  fontSize: 14,
                  shadowBlur: 2,
                  shadowColor: 'rgba(0, 0, 0, .45)'
                },
                formatter: function formatter(text) {
                  return text + '%';
                }
              };
            }
          }]}
        />
      </Chart>
    );
  }
}
