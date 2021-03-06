import * as React from 'react';
import { Graph, GlobalG6  } from 'viser-graph-react';

GlobalG6.registerNode('my-rect', {
  getAnchorPoints: function getAnchorPoints() {
    return [[ 0.5, 0 ], [ 0.5, 1 ]];
  }
}, 'rect');

const data = {
  nodes: [{
    id: 'node0',
    x: 200,
    y: 10,
    size: 20
  }, {
    id: 'node1',
    x: 200,
    y: 50,
    label: '1222',
    shape: 'my-rect'
  }, {
    id: 'node2',
    x: 150,
    y: 150,
    shape: 'my-rect'
  }, {
    id: 'node3',
    x: 250,
    y: 150,
    shape: 'my-rect'
  }, {
    id: 'node4',
    x: 200,
    y: 250,
    shape: 'my-rect'
  }],
  edges: [{
    source: 'node0',
    target: 'node1'
  }, {
    source: 'node1',
    target: 'node2'
  }, {
    source: 'node1',
    target: 'node3'
  }, {
    source: 'node2',
    target: 'node4'
  }, {
    source: 'node3',
    target: 'node4'
  }]
};

const graph = {
  data,
  type: 'graph',
  container: 'mount',
  width: 500,
  height: 500,
  pixelRatio: 2,
  renderer: 'svg',
  fitView: true,
  modes: {
    default: [ 'drag-node' ]
  },
  defaultNode: {
    style: {
      fill: '#DEE9FF',
      stroke: '#5B8FF9'
    }
  },
  defaultEdge: {
    shape: 'cubic-vertical',
    style: {
      stroke: '#F6BD16'
    }
  },
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Graph {...graph}/>
      </div>
    );
  }
}
