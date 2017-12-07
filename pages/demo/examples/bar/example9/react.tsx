import { Chart, Tooltip, Axis, Bar } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data } from './data';

const dataPre = {
  transform: {
    type: 'bin.histogram',
    field: 'depth',
    binWidth: 4,
    as: ['depth', 'count'],
  },
};

const scale = [{
  dataKey: 'depth',
  tickInterval: 4
}];

class App extends React.Component {
  render() {
    return (
      <Chart forceFit height={400} data={data} dataPre={dataPre} scale={scale}>
        <Tooltip crosshairs={false} inPlot={false} position="top" />
        <Axis />
        <Bar position="depth*count" />
      </Chart>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);
