import * as React from 'react';
import { Axis, Area, Chart, Line, Tooltip } from 'viser-react';
const DataSet = require('@antv/data-set');

const data = [
  {
    year: '1986',
    ACME: 162,
    Compitor: 42,
  },
  {
    year: '1987',
    ACME: 134,
    Compitor: 54,
  },
  {
    year: '1988',
    ACME: 116,
    Compitor: 26,
  },
  {
    year: '1989',
    ACME: 122,
    Compitor: 32,
  },
  {
    year: '1990',
    ACME: 178,
    Compitor: 68,
  },
  {
    year: '1991',
    ACME: 144,
    Compitor: 54,
  },
  {
    year: '1992',
    ACME: 125,
    Compitor: 35,
  },
  {
    year: '1993',
    ACME: 176,
    Compitor: 66,
  },
  {
    year: '1994',
    ACME: 156,
  },
  {
    year: '1995',
    ACME: 195,
  },
  {
    year: '1996',
    ACME: 215,
  },
  {
    year: '1997',
    ACME: 176,
    Compitor: 36,
  },
  {
    year: '1998',
    ACME: 167,
    Compitor: 47,
  },
  {
    year: '1999',
    ACME: 142,
  },
  {
    year: '2000',
    ACME: 117,
  },
  {
    year: '2001',
    ACME: 113,
    Compitor: 23,
  },
  {
    year: '2002',
    ACME: 132,
  },
  {
    year: '2003',
    ACME: 146,
    Compitor: 46,
  },
  {
    year: '2004',
    ACME: 169,
    Compitor: 59,
  },
  {
    year: '2005',
    ACME: 184,
    Compitor: 44,
  },
];
const scale = [
  {
    dataKey: 'value',
    alias: 'The Share Price in Dollars',
    formatter: val => '$' + val,
  },
  {
    dataKey: 'year',
    range: [0, 1],
  },
];
const dv = new DataSet.View().source(data);
dv.transform({
  type: 'fold',
  fields: ['ACME', 'Compitor'],
  key: 'type',
  value: 'value',
});

export default class App extends React.Component {
  render() {
    return (
      <Chart forceFit={true} height={400} data={dv} scale={scale}>
        <Axis />
        <Tooltip crosshairs={true} />
        <Area position="year*value" color="type" shape="smooth" />
        <Line position="year*value" color="type" size={2} shape="smooth" />
      </Chart>
    );
  }
}
