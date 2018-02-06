import { Chart, Legend, Tooltip, Facet, FacetView } from 'viser-react';
import * as React from 'react';
import * as _ from 'lodash';
const DataSet = require('@antv/data-set');
const { DataView } = DataSet;

const data = [
  {year:2007, area:'亚太地区', profit: 7860*0.189},
  {year:2007, area:'非洲及中东', profit: 7860*0.042},
  {year:2007, area:'拉丁美洲', profit: 7860*0.025},
  {year:2007, area:'中欧和东欧', profit: 7860*0.018},
  {year:2007, area:'西欧', profit: 7860*0.462},
  {year:2007, area:'北美', profit: 7860*0.265},
  {year:2011, area:'亚太地区', profit: 7620*0.539},
  {year:2011, area:'非洲及中东', profit: 7620*0.065},
  {year:2011, area:'拉丁美洲', profit: 7620*0.065},
  {year:2011, area:'中欧和东欧', profit: 7620*0.034},
  {year:2011, area:'西欧', profit: 7620*0.063},
  {year:2011, area:'北美', profit: 7620*0.234}
];

const views = (view, facet) => {
  const data = facet.data;
  const dv = new DataView();
  dv.source(data)
    .transform({
      type: 'percent',
      field: 'profit',
      dimension: 'area',
      as: 'percent'
    });

  return {
    data: dv,
    scale: {
      dataKey: 'percent',
      formatter: '.2%',
    },
    coord: {
      type: 'theta',
      innerRadius: 0.35,
    },
    series: {
      quickType: 'stackBar',
      position: 'percent',
      color: 'area',
      label: ['percent', {
        offset: -8,
      }],
      style: {
        lineWidth: 1,
        stroke: '#fff',
      }
    }
  }
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Chart forceFit height={400} padding={80} data={data}>
          <Tooltip showTitle={false} />
          <Legend dataKey="area" offset={20} />
          <Facet type="rect" fields={['year']} padding={20} rowTitle={null} colTitle={{
            offsetY: -30,
            style: {
              fontSize: 18,
              textAlign: 'center',
              fill: '#999'
            }
          }} views={views} />
        </Chart>
      </div>
    );
  }
}


