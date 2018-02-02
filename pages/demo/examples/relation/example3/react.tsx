import { Chart, Tooltip, View, Edge, Polygon, Coord } from 'viser-react';

import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'x',
  sync: true,
}, {
  dataKey: 'y',
  sync: true,
}];

const label = ['name', {
  labelEmit: true,
  textStyle: {
    fill: '#8c8c8c',
  },
}];

export default class App extends React.Component {
  state = {
    edgesData: [],
    nodesData: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/relationship-with-weight.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData, {
        type: 'graph',
        edges: d => d.links,
      });
      dv.transform({
        type: 'diagram.arc',
        sourceWeight: e => e.sourceWeight,
        targetWeight: e => e.targetWeight,
        weight: true,
        marginRatio: 0.3,
      });
      this.setState({
        edgesData: dv.edges,
        nodesData: dv.nodes,
      });
    });
  }

  render() {
    const {
      edgesData,
      nodesData,
    } = this.state;

    return (
      <Chart forceFit={true} height={500} scale={scale}>
        <Tooltip showTitle={false} />
        <View data={edgesData}>
          <Coord type="polar" direction="yReverse" />
          <Edge position="x*y" shape="arc" color="source" opacity={0.5} tooltip="source*target*value" />
        </View>
        <View data={nodesData}>
          <Coord type="polar" direction="yReverse" />
          <Polygon position="x*y" color="id" label={label} />
        </View>
      </Chart>
    );
  }
}




