import { Chart, Tooltip, Axis, Box, Legend, Pyramid, Coord, View } from 'viser-react';
import * as React from 'react';

const expectData = [
  {value: 100, name: '展现'},
  {value: 80, name: '点击'},
  {value: 60, name: '访问'},
  {value: 40, name: '咨询'},
  {value: 30, name: '订单'}
];

const actualData = [
  {value: 80, name: '展现'},
  {value: 50, name: '点击'},
  {value: 30, name: '访问'},
  {value: 10, name: '咨询'},
  {value: 5, name: '订单'},
];

export default class App extends React.Component {
  render() {
    const tooltipOpts = {
      showTitle: false,
      itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
    };

    const pyramidOpts = {
      position: 'name*value',
      color: ['name', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF']],
      label: ['name', {
        offset: 35,
        labelLine: {
          lineWidth: 1,
          stroke: 'rgba(0, 0, 0, 0.15)',
        }
      }],
      tooltip: ['name*value', (name, value) => {
        return {
          name: '预期' + name,
          value,
        };
      }],
      opacity: 0.65,
    };

    const pyramidOpts1 = {
      quickType: 'pyramid',
      position: 'name*value',
      color: ['name', [ '#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF' ]],
      tooltip: ['name*value', (name, value) => {
        return {
          name: '实际' + name,
          value,
        };
      }],
      style: {
        lineWidth: 1,
        stroke: '#fff',
      },
      opacity: 1,
    };

    return (
      <div>
        <Chart forceFit height={400} data={expectData}>
          <Tooltip {...tooltipOpts} />
          <Coord type="rect" direction="LT" />
          <Pyramid {...pyramidOpts} />
          <View data={actualData}>
            <Tooltip />
            <Coord type="rect" direction="LT" />
            <Pyramid {...pyramidOpts1} />
          </View>
        </Chart>
      </div>
    );
  }
}



