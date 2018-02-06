import { Chart, Axis, Legend, Tooltip, Coord, StackInterval } from 'viser-react';
import * as React from 'react';
import * as _ from 'lodash';
const DataSet = require('@antv/data-set');

const data = [
  {year: '2000','类型 A':21.0 ,'类型 B':16 ,'类型 C': 8},
  {year: '2001','类型 A':25.0 ,'类型 B':16 ,'类型 C': 8},
  {year: '2002','类型 A':25.0 ,'类型 B':15 ,'类型 C': 8},
  {year: '2003','类型 A':25.0 ,'类型 B':14 ,'类型 C': 7},
  {year: '2004','类型 A':25.0 ,'类型 B':14 ,'类型 C': 7},
  {year: '2005','类型 A':24.0 ,'类型 B':13 ,'类型 C': 8},
  {year: '2006','类型 A':24.0 ,'类型 B':14 ,'类型 C': 7},
  {year: '2007','类型 A':26.0 ,'类型 B':16 ,'类型 C': 7},
  {year: '2008','类型 A':26.0 ,'类型 B':15.2 ,'类型 C': 8},
  {year: '2009','类型 A':27.1 ,'类型 B':15.2 ,'类型 C': 10},
  {year: '2010','类型 A':27.5 ,'类型 B':15.4 ,'类型 C': 8},
  {year: '2011','类型 A':26.4 ,'类型 B':15.2 ,'类型 C': 9},
  {year: '2012','类型 A':28.8 ,'类型 B':15.4 ,'类型 C': 9},
  {year: '2013','类型 A':33.3 ,'类型 B':16.7 ,'类型 C': 12},
  {year: '2014','类型 A':38.2 ,'类型 B':19.5 ,'类型 C': 18}
];

const dv = new DataSet.View().source(data).transform({
  type: 'fold',
  fields: ['类型 A', '类型 B', '类型 C'],
  key: '难民类型',
  value: 'count',
  remains: 'year'
});

const stackInterval1Opts = {
  position: 'year*count',
  color: '难民类型',
  style: {
    lineWidth: 1,
    stroke: '#fff'
  }
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Chart forceFit height={400} padding={80} data={dv}>
          <Coord type="polar" innerRadius={0.1} />
          <Legend dataKey="难民类型" position="bottom" />
          <Axis dataKey="percent" title={{ offset: 40, text: '百分比'}} />
          <StackInterval {...stackInterval1Opts} />
        </Chart>
      </div>
    );
  }
}


