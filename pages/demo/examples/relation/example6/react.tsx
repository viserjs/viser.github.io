import { Chart, Tooltip, Polygon } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data } from './data'

const dataPre = {
  connector: {
    type: 'hierarchy',
  },
  transform: {
    type: 'hierarchy.partition',
  },
};

const dataView = [
  'nodes', nodes => {
    return nodes.map((node: any) => ({
      name: node.data.name,
      value: node.value,
      depth: node.depth,
      x: node.x,
      y: node.y,
    }));
  },
];

class App extends React.Component {
  render() {
    return (
      <Chart forceFit height={500} data={data} dataPre={dataPre} dataView={dataView} padding={0}>
        <Tooltip showTitle={false} />
        <Polygon position="x*y" color="name" />
      </Chart>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));