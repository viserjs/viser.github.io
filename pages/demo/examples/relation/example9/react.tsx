import { Chart, Tooltip, Legend, Polygon, Coord, View, Point, Edge } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data } from './data'

const dataPre = {
  connector: {
    type: 'hierarchy',
  },
  transform: {
    type: 'hierarchy.cluster',
  },
};

const nodesDataView = ['nodes', nodes => {
  return nodes.map((node: any) => ({
    hasChildren: !!(node.data.children && node.data.children.length),
    name: node.data.name,
    value: node.value,
    depth: node.depth,
    x: node.x,
    y: node.y
  }));
}];

const nodesLabel = [
  'name', {
    offset: 0,
    labelEmit: true,
    textStyle: (text, item) => {
      let textAlign = item.textAlign;
      if (item.point.hasChildren) {
        textAlign = textAlign === 'left' ? 'right' : 'left';
      }
      return {
        fill: 'grey',
        fontSize: 9,
        textAlign,
      };
    },
  },
];

const edgesDataView = ['edges', (edges) => {
  return edges.map(link => ({
    x: [ link.source.x, link.target.x ],
    y: [ link.source.y, link.target.y ],
    source: link.source.id,
    target: link.target.id
  }));
}];

class App extends React.Component {
  render() {
    return (
      <Chart forceFit={true} height={600} data={data} dataPre={dataPre} padding={[ 60, 0, 40, 0 ]}>
        <Coord type="polar" />
        <View dataView={edgesDataView}>
          <Edge position="x*y" shape="smooth" color="grey" opacity={0.5} tooltip="source*target" />
        </View>
        <View dataView={nodesDataView}>
          <Point position="x*y" color="hasChildren" label={nodesLabel} />
        </View>
      </Chart>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);