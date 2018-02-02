import { Chart, Facet, View, Tooltip, Legend, Axis, Bar, FacetView } from 'viser-react';

import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');
const { DataView } = DataSet;

const scale = [{
  dataKey: 'mean',
  tickCount: 5,
  sync: true,
}, {
  dataKey: 'cut',
  sync: true,
}];

const views = (view, facet) => {
  const data = facet.data;
  const dv = new DataView();
  dv.source(data).transform({
    type: 'aggregate',
    fields: ['price'],
    operations: ['mean'],
    as: ['mean'],
    groupBy: ['cut']
  });

  return {
    data: dv,
    series: {
      quickType: 'bar',
      position: 'cut*mean',
      color: 'cut',
    }
  }
}

export default class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/diamond.json', (data) => {
      this.setState({ data });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Chart forceFit={true} height={400} data={data} scale={scale}>
        <Tooltip crosshairs={false} />
        <Legend dataKey="cut" position="top" />
        <Axis dataKey="cut" label={null} tickLine={null} />
        <Facet type="tree" fields={['clarity']} line={{ stroke: '#c0d0e0' }} lineSmooth={true} views={views}></Facet>
      </Chart>
    );
  }
}




