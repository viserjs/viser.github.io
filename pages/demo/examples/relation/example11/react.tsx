import { Chart, Tooltip, Legend, Polygon, Coord, View, Point, Edge } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const nodesLabel = [
  'name', {
    offset: 0,
    textStyle: (text, item) => {
      if (item.point.hasChildren) {
        return {
          opacity: 0
        };
      }
      return {
        textBaseline: 'middle',
        fill: 'grey',
        fontSize: 9,
        textAlign: 'center'
      };
    }
  },
];

export default class App extends React.Component {
  state = {
    data: {},
  };

  componentDidMount() {
    $.getJSON('/assets/data/flare.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData, {
        type: 'hierarchy',
      });
      dv.transform({
        type: 'hierarchy.circle-packing',
      });

      const data = dv.getAllNodes().map(node => ({
        hasChildren: !!(node.data.children && node.data.children.length),
        name: node.data.name.split(/(?=[A-Z][^A-Z])/g).join('\n'),
        value: node.value,
        depth: node.depth,
        x: node.x,
        y: node.y,
        r: node.r
      }));

      this.setState({
        data,
      })
    });
  }

  render() {
    const { data } = this.state;

    return (
      <Chart height={400} width={400} data={data} padding={0}>
        <Tooltip showTitle={false} />
        <Point position="x*y" shape="circle" tooltip="name" 
          size={['r', r => r * 400]}
          color={['r', 'rgb(252, 253, 191)-rgb(231, 82, 99)-rgb(183, 55, 121)']}
          style={{ stroke: 'rgb(183, 55, 121)' }}
          label={nodesLabel} />
      </Chart>
    );
  }
}




