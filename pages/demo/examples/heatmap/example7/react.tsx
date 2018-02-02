import { Chart, Axis, Legend, Tooltip, Polygon } from 'viser-react';

import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

export default class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/heatmap-7.json', (sourceData) => {
      const ds = new DataSet({
        state: {
          sizeEncoding: false
        }
      });
      const dv = ds.createView().source(sourceData);
      dv.transform({
        sizeByCount: '$state.sizeEncoding',
        type: 'bin.hexagon',
        fields: ['x', 'y'],
        bins: [10, 5],
      });
      this.setState({ data: dv.rows });
    });
  }

  render() {
    const { data } = this.state;
    const axis1Opts = {
      dataKey: 'x',
      grid: {
        lineStyle: {
          stroke: '#d9d9d9',
          lineWidth: 1,
          lineDash: [ 2, 2 ]
        }
      }
    };
    const seriesOpts = {
      quickType: 'polygon',
      color: ['count', '#BAE7FF-#1890FF-#0050B3'],
      position: 'x*y',
      style: {
        lineWidth: 1,
        stroke: '#fff'
      }
    };

    return (
      <div>
        <Chart forceFit height={400} data={data}>
          <Legend offset={40}/>
          <Tooltip showTitle={false} crosshairs={false}/>
          <Axis {...axis1Opts}/>
          <Polygon {...seriesOpts}/>
        </Chart>
      </div>
    );
  }
}



