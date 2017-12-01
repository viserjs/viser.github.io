export const template =
`import { Chart, Tooltip, Axis, Bar, Coord } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

const data = [
  { country: '中国', population: 131744 },
  { country: '印度', population: 104970 },
  { country: '美国', population: 29034 },
  { country: '印尼', population: 23489 },
  { country: '巴西', population: 18203 }
];

const dataPre = {
  transform: {
    type: 'sort',
    callback(a, b) {
      return a.population - b.population > 0;
    },
  },
};

class App extends React.Component {
  render() {
    return (
      <Chart forceFit height={400} data={data} dataPre={dataPre}>
        <Coord type="rect" direction="LB" />
        <Tooltip />
        <Axis dataKey="country" label={{ offset: 12 }} />
        <Bar position="country*population" />
      </Chart>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);
`;
