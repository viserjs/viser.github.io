import * as React from 'react';
import { Chart, Tooltip, View, Edge, Polygon } from 'viser-react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

export default class App extends React.Component {
  state = {
    graph: {},
  };
  getData = () => {
    const { graph } = this.state;
    const dv = new DataSet.View().source(graph, {
      type: 'graph',
    });
    dv.transform({
      type: 'diagram.sankey',
      nodeId: (node) => {
        return node.id;
      },
      nodeAlign: 'sankeyJustify',  // change nodeAlign  , available option sankeyLeft / sankeyRight / sankeyCenter / sankeyJustify
    });
    return dv;
  };
  componentDidMount() {
    $.getJSON('/assets/data/energy.json', data => {
      const edges = data.links;
      const graph = {
        nodes: [],
        edges: edges,
      };
      const nodeById = {};

      function addNode(id) {
        if (!nodeById[id]) {
          const node = {
            id: id,
            name: id,
          };
          nodeById[id] = node;
          graph.nodes.push(node);
        }
      }

      edges.forEach(function(edge) {
        addNode(edge.source);
        addNode(edge.target);
      });
      this.setState({ graph });
    });
  }
  render() {
    if (Object.keys(this.state.graph).length === 0) {
      return null;
    }
    const dv = this.getData();
    const scale = [
      {
        dataKey: 'x',
        sync: true,
      },
      {
        dataKey: 'y',
        sync: true,
      },
    ];

    return (
      <div id="mountNode">
        <Chart forceFit={true} height={400} scale={scale}>
          <Tooltip showTitle={false} />
          <View data={dv.edges}>
            <Edge
              position="x*y"
              shape="arc"
              color="#bbb"
              opacity={0.6}
              tooltip="value"
            />
          </View>
          <View data={dv.nodes}>
            <Polygon position="x*y" color="name" style={{ stroke: '#ccc' }} />
          </View>
        </Chart>
      </div>
    );
  }
}
