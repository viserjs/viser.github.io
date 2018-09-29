import * as React from 'react';
import * as $ from 'jquery';
import { Chart, Axis, Legend, Polygon } from 'viser-react';
const DataSet = require('@antv/data-set');

export default class App extends React.Component {
  state = {
    dv: {},
  };
  componentDidMount() {
    $.getJSON('/assets/data/gaussion-distribution.json', data => {
      const dv = new DataSet.View().source(data);
      dv.transform({
        sizeByCount: true, // calculate bin size by binning count
        type: 'bin.rectangle',
        fields: ['x', 'y'], // 对应坐标轴上的一个点
        bins: [20, 10],
      });
      this.setState({  dv });
    });
  }
  render() {
    const { dv } = this.state;
    return (
      <Chart forceFit={true} height={500} data={dv}>
        <Axis />
        <Legend  />
        <Polygon position="x*y" color={['count', '#BAE7FF-#1890FF-#0050B3']} />
      </Chart>
    );
  }
}
