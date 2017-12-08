import { Chart, Tooltip, View, Edge, Point, Coord } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data } from './data';

const dataPre = {
  connector: {
    type: 'graph',
    edges: d => d.links,
  },
  transform: {
    type: 'diagram.arc',
    marginRatio: 0.5,
  },
};

const label = ['name', {
  labelEmit: true,
}];

const style = {
  stroke: 'grey',
};

class App extends React.Component {
  render() {
    return (
      <Chart forceFit={true} height={500} data={data} dataPre={dataPre}>
        <Tooltip showTitle={false} />
        <View dataView="edges">
          <Coord type="polar" direction="yReverse" />
          <Edge position="x*y" shape="arc" color="source" opacity={0.5} tooltip="source*target" />
        </View>
        <View dataView="nodes">
          <Coord type="polar" direction="yReverse" />
          <Point position="x*y" size="value" color="id" opacity={0.5} style={style} label={label} />
        </View>
      </Chart>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);