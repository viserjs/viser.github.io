import { Chart, Legend, Tooltip, Facet, FacetView, Polygon } from 'viser-react';

import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');
const { DataView } = DataSet;

function getMonthWeek(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const monthFirst = new Date(year, month, 0);
  const intervalDays = Math.round((date.getTime() - monthFirst.getTime()) / 86400000);
  const index = Math.floor((intervalDays + monthFirst.getDay()) / 7);
  return index;
}

const scale = [{
  dataKey: 'month',
  type: 'cat',
  values: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", 'December']
}, {
  dataKey: 'day',
  type: 'cat',
}, {
  dataKey: 'week',
  type: 'cat',
  values: ['5', '4', '3', '2', '1', '0'],
}, {
  dataKey: '涨跌幅',
  type: 'linear',
  min: -10,
  max: 10,
  sync: true,
}, {
  dataKey: 'time',
  type: 'time',
}, {
  dataKey: '日期',
  type: 'time',
}];

export default class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/stock-calendar.json', (sourceData) => {
      sourceData.forEach(function(obj) {
        const date = new Date(obj['日期']);
        const month = date.getMonth();
        obj.month = month;
        obj.day = date.getDay();
        obj.week = getMonthWeek(date).toString();
      });

      const dv = new DataView();
      dv.source(sourceData)
        .transform({
          type: 'sort-by',
          fields: ['day'],
          order: 'DESC',
        });

      this.setState({ data: dv });
    });
  }

  render() {
    const { data } = this.state;
    const colTitle = {
      offsetY: -10,
      style: {
        fontSize: 12,
        textAlign: 'center',
        fill: '#666',
      },
    };

    return (
      <div>
        <Chart forceFit height={400} padding={[20, 120, 50, 120]} data={data} scale={scale}>
          <Legend dataKey="涨跌幅" offset={0} />
          <Tooltip title="日期" />
          <Facet type="list" fields={['month']} cols={3} padding={[0, 15, 30, 15]} colTitle={colTitle}>
            <FacetView>
              <Polygon
                position="day*week*日期"
                color={['涨跌幅', '#F51D27-#FA541C-#FFBE15-#FFF2D1-#E3F6FF-#85C6FF-#0086FA-#0A61D7']}
                style={{
                  lineWidth: 1,
                  stroke: '#fff',
                }}
               />
            </FacetView>
          </Facet>
        </Chart>
      </div>
    );
  }
}



