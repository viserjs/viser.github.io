import { Chart, Tooltip, View, Edge, Point } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

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
  state = {
    data: {},
  };

  componentDidMount() {
    $.getJSON('/data/relationship-with-weight.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData, {
        type: 'graph',
        edges: d => d.links,
      });
      dv.transform({
        type: 'diagram.arc',
        marginRatio: 0.5,
      });
      this.setState({ data: dv.rows});
    });
  }

  render() {
    const { data } = this.state;

    return (
      <Chart forceFit={true} height={500} data={data}>
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