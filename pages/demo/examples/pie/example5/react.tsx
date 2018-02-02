import { Chart, Tooltip, Sector, Coord } from 'viser-react';
import * as React from 'react';

const data = [
  { year: '2001', population: 41.8 },
  { year: '2002', population: 38 },
  { year: '2003', population: 33.7 },
  { year: '2004', population: 30.7 },
  { year: '2005', population: 25.8 },
  { year: '2006', population: 31.7 },
  { year: '2007', population: 33 },
  { year: '2008', population: 46 },
  { year: '2009', population: 38.3 },
  { year: '2010', population: 28 },
  { year: '2011', population: 42.5 },
  { year: '2012', population: 30.3 },
];

export default class App extends React.Component {
  render() {
    return (
      <Chart forceFit height={400} data={data}>
        <Tooltip />
        <Coord type="polar" />
        <Sector
          position="year*population"
          style={{ stroke: '#fff', lineWidth: 1 }}
          label={['year', {
            offset: -15,
          }]}
        />
      </Chart>
    );
  }
}





