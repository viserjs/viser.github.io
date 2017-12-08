import { Chart, Tooltip, View, Edge, Point } from 'viser-react';
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
  offset: -10,
  textStyle: {
    textAlign: 'left',
    rotate: 90
  },
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
          <Edge position="x*y" shape="arc" color="source" opacity={0.5} tooltip="source*target" />
        </View>
        <View dataView="nodes">
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