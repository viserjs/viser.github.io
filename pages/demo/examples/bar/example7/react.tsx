import { Chart, Tooltip, Axis, Bar } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

const values = [1.2, 3.4, 3.7, 4.3, 5.2, 5.8, 6.1, 6.5, 6.8, 7.1, 7.3, 7.7, 8.3, 8.6, 8.8, 9.1, 9.2, 9.4, 9.5, 9.7, 10.5, 10.7, 10.8, 11.0, 11.0, 11.1, 11.2, 11.3, 11.4, 11.4, 11.7, 12.0, 12.9, 12.9, 13.3, 13.7, 13.8, 13.9, 14.0, 14.2, 14.5, 15, 15.2, 15.6, 16.0, 16.3, 17.3, 17.5, 17.9, 18.0, 18.0, 20.6, 21, 23.4];

const data = [];
for (let i = 0; i < values.length; i++) {
  const obj: any = {};
  obj.value = values[i];
  data.push(obj);
}

const dataPre = {
  transform: {
    type: 'bin.histogram',
    field: 'value',
    binWidth: 2,
    as: ['value', 'count'],
  },
};

const scale = [{
  dataKey: 'value',
  nice: false,
  min: 0,
  tickInterval: 1,
}, {
  dataKey: 'count',
  max: 14,
}];

class App extends React.Component {
  render() {
    const formatter = val => {
      if ((val % 2)) {
       return val;
      }
      return '';
    };

    return (
      <Chart forceFit height={400} data={data} dataPre={dataPre} scale={scale}>
        <Tooltip crosshairs={false} inPlot={false} position="top" />
        <Axis dataKey="value" label={{ formatter: formatter }} />
        <Bar position="value*count" />
      </Chart>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);
