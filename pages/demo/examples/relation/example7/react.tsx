import { Chart, Tooltip, Coord, Polygon } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

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
    $.getJSON('/data/sunburst.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData, {
        type: 'hierarchy',
      });
      dv.transform({
        type: 'hierarchy.partition',
        field: 'sum',
        as: ['x', 'y'],
      });
      this.setState({
        data: dv.getAllNodes().filter((node: any) => {
          return node.depth !== 0;
        }).map((node: any) => {
          return {
            label: node.data.label,
            sum: node.data.sum,
            uv: node.data.uv,
            value: node.value,
            x: node.x,
            y: node.y,
          };
        }),
      });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Chart forceFit height={500} data={data} padding={0}>
        <Coord type="polar" innerRadius={0.3} />
        <Tooltip showTitle={false} />
        <Polygon position="x*y" color={color} active={false} style={style} tooltip="label*sum" />
      </Chart>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));