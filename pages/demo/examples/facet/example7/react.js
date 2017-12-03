export const template =
`import { Chart, Facet, View, Tooltip, Legend, Axis, StackBar, FacetView, Coord } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { data } from './data'

const data = [
  {gender:'男',count:40,'class': '一班',grade: '一年级'},
  {gender:'女',count:30,'class': '一班',grade: '一年级'},
  {gender:'男',count:35,'class': '二班',grade: '一年级'},
  {gender:'女',count:45,'class': '二班',grade: '一年级'},
  {gender:'男',count:20,'class': '三班',grade: '一年级'},
  {gender:'女',count:35,'class': '三班',grade: '一年级'},
  {gender:'男',count:30,'class': '一班',grade: '二年级'},
  {gender:'女',count:40,'class': '一班',grade: '二年级'},
  {gender:'男',count:25,'class': '二班',grade: '二年级'},
  {gender:'女',count:32,'class': '二班',grade: '二年级'},
  {gender:'男',count:28,'class': '三班',grade: '二年级'},
  {gender:'女',count:36,'class': '三班',grade: '二年级'}
];

const facetDataPre = {
  transform: {
    type: 'percent',
    field: 'count',
    dimension: 'gender',
    as: 'percent'
  },
};

class App extends React.Component {
  render() {
    return (
      <Chart forceFit={true} height={600} data={data} scale={scale} padding={[60, 90, 80, 80]}>
        <Tooltip showTitle={false} />
        <Coord type="theta" />
        <Legend dataKey="cut" position="top />
        <Facet type="tree" fields={['grade', 'class']} line={{ stroke: '#00a3d7' }} lineSmooth={true}>
          <FacetView dataPre={facetDataPre}>
            <Scale dataKey="percent" formatter=".2%" />
            <StackBar position="percent" color="gender" />
          </FacetView>
        </Facet>
      </Chart>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('mount')
);
`;

