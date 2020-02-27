import * as React from 'react';
import { Graph, Node } from 'viser-graph-react';
import * as $ from 'jquery';

const node = {
  events: {
    onDragstart: (e, graph) => {
      graph.layout()
      refreshDragedNodePosition(e);
    },
    onDrag: (e) => {
      refreshDragedNodePosition(e);
    },
    onDragend: (e) => {
      e.item.get('model').fx = null;
      e.item.get('model').fy = null;
    },
  }
}

const refreshDragedNodePosition = (e) => {
  const model = e.item.get('model');
  model.fx = e.x;
  model.fy = e.y;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    graph: {},
  };

  componentDidMount() {
    $.getJSON('assets/data/forceDirectedLayout.json', (oriData) => {
      const data = {
        nodes: oriData.nodes,
        edges: oriData.edges.map(function(edge, i) {
          return {...edge, id:'edge' + i };
        })
      }
      const graph = {
        data,
        container: 'mount',
        type: 'graph',
        width: 500,
        height: 500,
        renderer: 'svg',
        fitView: false,
        layout: {
          type: 'force',
        },
        defaultNode: {
          size: 15,
          color: '#5B8FF9',
          style: {
            lineWidth: 1,
            fill: '#C6E5FF'
          }
        },
        defaultEdge: {
          size: 1,
          color: '#e2e2e2'
        },
      };
      this.setState({ graph });
    })
  }

  render() {
    const { graph } = this.state;
    if(Object.keys(graph).length === 0) {
      return null;
    }
    return (
      <div>
        <Graph {...graph}>
          <Node {...node}/>
        </Graph>
      </div>
    );
  }
}
