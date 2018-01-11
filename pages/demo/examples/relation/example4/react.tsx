import { Chart, Tooltip, Axis, StackBar, Sankey, View, Polygon } from 'viser-react';
import * as ReactDOM from 'react-dom';
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

const tooltip = [
  'target*source*value', (target, source, value) => ({
    name: source.name + ' to ' + target.name + '</span>',
    value,
  }),
];

const polygonLabel = [
  'name', {
    textStyle: {
      fill: '#545454',
      textAlign: 'start',
    },
    offset: 0,
    formatter: val => {
      return '  ' + val;
    },
  }
];

class App extends React.Component {
  state = {
    edgesData: [],
    nodesData: [],
  };

  componentDidMount() {
    $.getJSON('/data/energy.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData, {
        type: 'graph',
        edges: d => d.links,
      });
      dv.transform({
        type: 'diagram.sankey',
        nodeWidth: 0.015,
        nodePadding: 0.02,
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
      <Chart forceFit height={500} scale={scale} padding={[ 40, 80 ]}>
        <Tooltip showTitle={false} />
        <View data={edgesData}>
          <Sankey position='x*y' style={{ curvature: 0.5 }} color='#bbb' opacity={0.6} tooltip={tooltip} />
        </View>
        <View data={nodesData}>
          <Polygon position="x*y" color="name" style={{ stroke: '#ccc' }} label={polygonLabel} tooltip={false} />
        </View>
      </Chart>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));