import * as React from 'react';
import { Graph } from 'viser-graph-react';
import * as $ from 'jquery';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    graph: {},
  };

  componentDidMount() {
    $.getJSON('/assets/data/concentric-layout-1.json', (data) => {
      const graph = {
        data: data,
        container: 'mount',
        type: 'graph',
        width: 500,
        height: 500,
        pixelRatio: 1.0,
        renderer: 'canvas',
        fitView: false,
        modes: {
          default: [ 'drag-canvas', 'drag-node' ]
        },
        layout: {
          type: 'concentric',
          maxLevelDiff: 0.5,
          sortBy: 'degree'
        },
        animate: true,
        defaultNode: {
          size: 5,
          style: {
            fill: '#C6E5FF',
            stroke: '#5B8FF9'
          }
        },
        defaultEdge: {
          size: 1,
          color: '#e2e2e2',
        },
      };
      this.setState({ graph });
    });
  }

  render() {
    const { graph } = this.state;
    if(Object.keys(graph).length === 0) {
      return null;
    }
    
    return (
      <div>
        <Graph {...graph}/>
      </div>
    );
  }
}
