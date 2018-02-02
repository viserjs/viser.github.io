import { Chart, Axis, Legend, Polygon } from 'viser-react';

import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

export default class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/heatmap-2.json', (sourceData) => {
      const ds = new DataSet({
        state: {
          sizeEncoding: false
        }
      });

      const dv = ds.createView('diamond').source(sourceData);
      dv.transform({
        sizeByCount: '$state.sizeEncoding',
        type: 'bin.rectangle',
        fields: [ 'x', 'y' ],
        bins: [ 20, 10 ]
      });

      this.setState({ data: dv });
    });
  }

  render() {
    const { data } = this.state;
    const seriesOpts = {
      quickType: 'polygon',
      color: ['count', '#BAE7FF-#1890FF-#0050B3'],
      position: 'x*y',
    };

    return (
      <div>
        <Chart forceFit height={400} data={data}>
          <Legend offset={40} />
          <Axis />
          <Polygon {...seriesOpts} />
        </Chart>
      </div>
    );
  }
}



