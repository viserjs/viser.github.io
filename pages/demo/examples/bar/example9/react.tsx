import { Chart, Tooltip, Axis, Bar } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'depth',
  tickInterval: 4
}];

export default class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/diamond.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData);
      dv.transform({
        type: 'bin.histogram',
        field: 'depth',
        binWidth: 4,
        as: ['depth', 'count'],
      });
      this.setState({ data: dv.rows });
    });
  }

  render() {
    const { data } = this.state;

    return (
      <Chart forceFit height={400} data={data} scale={scale}>
        <Tooltip crosshairs={false} inPlot={false} position="top" />
        <Axis />
        <Bar position="depth*count" />
      </Chart>
    );
  }
}

