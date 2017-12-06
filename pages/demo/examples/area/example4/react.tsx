import { Chart, Tooltip, Axis, Legend, StackArea, Line } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

const data = [
  {country: 'Asia', year: '1750', value: 502},
  {country: 'Asia', year: '1800', value: 635},
  {country: 'Asia', year: '1850', value: 809},
  {country: 'Asia', year: '1900', value: 947},
  {country: 'Asia', year: '1950', value: 1402},
  {country: 'Asia', year: '1999', value: 3634},
  {country: 'Asia', year: '2050', value: 5268},
  {country: 'Africa', year: '1750', value: 106},
  {country: 'Africa', year: '1800', value: 107},
  {country: 'Africa', year: '1850', value: 111},
  {country: 'Africa', year: '1900', value: 133},
  {country: 'Africa', year: '1950', value: 221},
  {country: 'Africa', year: '1999', value: 767},
  {country: 'Africa', year: '2050', value: 1766},
  {country: 'Europe', year: '1750', value: 163},
  {country: 'Europe', year: '1800', value: 203},
  {country: 'Europe', year: '1850', value: 276},
  {country: 'Europe', year: '1900', value: 408},
  {country: 'Europe', year: '1950', value: 547},
  {country: 'Europe', year: '1999', value: 729},
  {country: 'Europe', year: '2050', value: 628},
];

const dataPre = {
  transform: {
    type: 'percent',
    field: 'value',
    dimension: 'country',
    groupBy: [ 'year' ],
    as: 'percent',
  }
};

const scale = [{
  dataKey: 'year',
  type: 'linear',
  tickInterval: 50,
}, {
  dataKey: 'percent',
  formatter: (value: any) => {
    value = value || 0;
    value = value * 100;
    return parseInt(value);
  },
  alias: 'percent(%)',
}];


class App extends React.Component {
  render() {
    return (
      <Chart forceFit height={400} data={data} dataPre={dataPre} scale={scale}>
        <Tooltip />
        <Axis dataKey="value" />
        <Legend />
        <Line position="year*percent" size="2" color="country" adjust="stack" />
        <StackArea position="year*percent" color="country"/>
      </Chart>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);
