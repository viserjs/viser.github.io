import * as React from 'react';
import * as $ from 'jquery';
import { Chart, Axis, Legend, Polygon } from 'viser-react';
const DataSet = require('@antv/data-set');

const getJSON = src =>
  new Promise(resolve => $.getJSON(src, data => resolve(data)));
export default class App extends React.Component {
  state = {
    dv: [],
  };
  async componentDidMount() {
    const data = await getJSON('/assets/data/gaussion-distribution.json');
    const dv = new DataSet.View().source(data);
    dv.transform({
      sizeByCount: true, // calculate bin size by binning count
      type: 'bin.rectangle',
      fields: ['x', 'y'], // 对应坐标轴上的一个点
      bins: [20, 10],
    });
    this.setState({ dv });
  }
  render() {
    const { dv } = this.state;
    return (
      <Chart forceFit={true} height={400} data={dv}>
        <Axis />
        <Legend offset={40} />
        <Polygon position="x*y" color={['count', '#BAE7FF-#1890FF-#0050B3']} />
      </Chart>
    );
  }
}
