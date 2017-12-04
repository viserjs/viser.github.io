export const template =
`import { Chart, Tooltip, Axis, Area, Line } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';

const data = [
  { item: 'Design', a: 70, b: 30 },
  { item: 'Development', a: 60, b: 70 },
  { item: 'Marketing', a: 50, b: 60 },
  { item: 'Users', a: 40, b: 50 },
  { item: 'Test', a: 60, b: 70 },
  { item: 'Language', a: 70, b: 50 },
  { item: 'Technology', a: 50, b: 40 },
  { item: 'Support', a: 30, b: 40 },
  { item: 'Sales', a: 60, b: 40 },
  { item: 'UX', a: 50, b: 60 }
];

const dataPre = {
  transform: {
    type: 'fold',
    fields: [ 'a', 'b' ], // 展开字段集
    key: 'user', // key字段
    value: 'score', // value字段
  }
};

const scale = [{
  dataKey: 'score',
  min: 0,
  max: 80,
}];


class App extends React.Component {
  render() {
    const crosshairs: any = {
      type: 'y',
      style: {}
    };
    return (
      <Chart forceFit height={400} data={data} scale={scale}>
        <Tooltip crosshairs={crosshairs}/>
        <Axis dataKey="value" />
        <Line position="year*value" size="2"/>
        <Area position="year*value" />
      </Chart>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);

`;
