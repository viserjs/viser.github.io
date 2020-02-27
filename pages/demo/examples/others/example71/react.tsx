import * as React from 'react';
import * as $ from 'jquery';
import { Axis, Chart, Tooltip, Brush, Interval } from 'viser-react';
const DataSet = require('@antv/data-set');

export default class App extends React.Component {
  state = {
    data: [],
    scale: [],
    ds: null,
  };
  getDv = () => {
    const { ds, data } = this.state;
    const dv = ds.createView();
    dv.source(data).transform({
      as: ['count'],
      groupBy: ['release'],
      operations: ['count'],
      type: 'aggregate',
    });
    return dv;
  };
  componentDidMount() {
    $.getJSON('/assets/data/top2000.json', data => {
      const ds = new DataSet();
      const scale = [
        {
          dataKey: 'count',
          alias: 'top2000 唱片总量',
        },
        {
          dataKey: 'release',
          tickInterval: 5,
          alias: '唱片发行年份',
        },
      ];
      this.setState({ scale, data, ds });
    });
  }
  render() {
    const { data, scale } = this.state;
    if (!data.length) {
      return null;
    }
    const dv = this.getDv();
    return (
      <Chart
        container="mountNode"
        forceFit={true}
        height={400}
        data={dv}
        scale={scale}
      >
        <Tooltip />
        <Axis />
        <Interval position="release*count" color="#e50000" />
        <Brush canvas={null} type="x" />
      </Chart>
    );
  }
}
