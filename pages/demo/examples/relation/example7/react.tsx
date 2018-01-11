import { Chart, Tooltip, Coord, Polygon } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const dataView = [
  'nodes', nodes => {
    const source = [];
    nodes.map((node: any) => {
      if (node.depth === 0) {
        return;
      }
      const obj: any = {};
      obj.label = node.data.label;
      obj.sum = node.data.sum;
      obj.uv = node.data.uv;
      obj.value = node.value;
      obj.x = node.x;
      obj.y = node.y;
      source.push(obj);
      return node;
    });
    return source;
  },
];

const style = {
  stroke: '#FFF',
  lineWidth: 1,
};

const color = ['value', '#BAE7FF-#1890FF-#0050B3'];

class App extends React.Component {
  state = {
    data: {},
  };

  componentDidMount() {
    $.getJSON('/data/flare.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData, {
        type: 'hierarchy',
      });
      dv.transform({
        type: 'hierarchy.partition',
        field: 'sum',
        as: ['x', 'y'],
      });
      this.setState({ data: dv.rows });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Chart forceFit height={500} data={data} dataView={dataView} padding={0}>
        <Coord type="polar" innerRadius={0.3} />
        <Tooltip showTitle={false} />
        <Polygon position="x*y" color={color} active={false} style={style} tooltip="label*sum" />
      </Chart>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));