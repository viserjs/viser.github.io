import { Chart, Tooltip, Legend, Polygon, Coord, View, Point, Edge } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

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

export default class App extends React.Component {
  state = {
    edgeSource: {},
    nodeSource: {},
  };

  componentDidMount() {
    $.getJSON('/assets/data/flare.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData, {
        type: 'hierarchy',
      });
      dv.transform({
        type: 'hierarchy.cluster',
      });

      const edgeSource = dv.getAllLinks().map(link => ({
          x: [ link.source.x, link.target.x ],
          y: [ link.source.y, link.target.y ],
          source: link.source.id,
          target: link.target.id
      }));

      const nodeSource = dv.getAllNodes().map(node => ({
        hasChildren: !!(node.data.children && node.data.children.length),
        name: node.data.name,
        value: node.value,
        depth: node.depth,
        x: node.x,
        y: node.y
      }));

      this.setState({
        edgeSource,
        nodeSource,
      })
    });
  }

  render() {
    const { edgeSource, nodeSource } = this.state;

    return (
      <Chart forceFit={true} height={400} padding={[ 60, 0, 40, 0 ]}>
        <Coord type="polar" />
        <View data={edgeSource}>
          <Edge position="x*y" shape="smooth" color="grey" opacity={0.5} tooltip="source*target" />
        </View>
        <View data={nodeSource}>
          <Point position="x*y" color="hasChildren" label={nodesLabel} />
        </View>
      </Chart>
    );
  }
}




