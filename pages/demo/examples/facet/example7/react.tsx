import { Chart, Facet, View, Tooltip, Legend, Axis, StackBar, FacetView, Coord } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');
const { DataView } = DataSet;

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
  {gender:'女',count:36,'class': '三班',grade: '二年级'},
];

const views = (view, facet) => {
  const data = facet.data;
  const dv = new DataView();
  dv.source(data).transform({
    type: 'percent',
    field: 'count',
    dimension: 'gender',
    as: 'percent',
  });

  return {
    data: dv,
    scale: {
      dataKey: 'percent',
      formatter: '.2%',
    },
    series: {
      quickType: 'stackBar',
      position: 'percent',
      color: 'gender',
    }
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Chart forceFit={true} height={400} data={data} padding={[60, 90, 80, 80]}>
        <Tooltip showTitle={false} />
        <Coord type="theta" />
        <Legend dataKey="cut" position="top" />
        <Facet type="tree" fields={['grade', 'class']} line={{ stroke: '#00a3d7' }} lineSmooth={true} views={views}></Facet>
      </Chart>
    );
  }
}




