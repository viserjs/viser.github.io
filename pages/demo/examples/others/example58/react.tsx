import * as React from 'react';
import { Chart, Tooltip, View, Edge, Polygon } from 'viser-react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

export default class App extends React.Component {
  state = {
    select: 'sankeyLeft',
    graph: {},
  };
  handleChange = e => {
    const value = e.target.value;
    this.setState({ select: value });
  };
  getData = () => {
    const { graph, select } = this.state;
    const dv = new DataSet.View().source(graph, {
      type: 'graph',
    });
    dv.transform({
      type: 'diagram.sankey',
      nodeId: function nodeId(node) {
        return node.id;
      },
      nodeAlign: select,
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
        <div className="toolbar" style={{ textAlign: 'center' }}>
          <label>Select nodeAlign style: </label>
          <select
            name="node-align"
            value={this.state.select}
            onChange={this.handleChange}
          >
            <option value="sankeyLeft">sankeyLeft</option>
            <option value="sankeyRight">sankeyRight</option>
            <option value="sankeyCenter">sankeyCenter</option>
            <option value="sankeyJustify">sankeyJustify</option>
          </select>
        </div>
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
