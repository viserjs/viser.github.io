import { Chart, Tooltip, Axis, Legend, StackBar } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/diamond.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData);
      dv.transform({
        type: 'bin.histogram',
        field: 'depth',
        binWidth: 1,
        groupBy: ['cut'],
        as: ['depth', 'count'],
      });
      this.setState({ data: dv.rows });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Chart forceFit height={400} data={data}>
        <Tooltip crosshairs={false} inPlot={false} position="top" />
        <Axis />
        <Legend />
        <StackBar position="depth*count" color="cut" />
      </Chart>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);
