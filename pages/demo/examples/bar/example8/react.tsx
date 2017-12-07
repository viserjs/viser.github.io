import { Chart, Tooltip, Axis, Legend, StackBar } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data } from './data';

const dataPre = {
  transform: {
    type: 'bin.histogram',
    field: 'depth',
    binWidth: 1,
    groupBy: ['cut'],
    as: ['depth', 'count'],
  },
};

class App extends React.Component {
  render() {
    return (
      <Chart forceFit height={400} data={data} dataPre={dataPre}>
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
