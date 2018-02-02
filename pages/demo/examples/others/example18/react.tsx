import { Chart, Axis, Tooltip, Coord, Interval, Legend, Guide } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'date',
  type: 'cat',
}, {
  dataKey: 'range',
  max: 30,
  min: -25,
}, {
  dataKey: 'mean_temp',
  alias: 'Average Daily Temperature',
}];

const legendOpt = {
  offset: 25,
  title: {
    fontSize: 12,
    fill: '#4F4F4F',
    fontWeight: 300,
    textAlign: 'start'
  },
  slidable: false,
  position: 'bottom' as any,
  offsetX: 25,
};

const guideLineOpt = {
  start: {
    date: 'min',
    range: 'min'
  },
  end: {
    date: 'min',
    range: 'max'
  },
  lineStyle: {
    stroke: '#aaa',
    lineWidth: 1,
    lineDash: null
  },
  text: {
    position: 1 as any,
    offsetY: -6,
    autoRotate: false,
    style: {
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 100,
      fill: '#aaa'
    },
    content: 'January'
  }
};

export default class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/daily-temp-in-boston.json', (data) => {
      const ds = new DataSet();
      const dv = ds.createView()
      .source(data)
      .transform({
        type: 'map',
        callback(row) {
          row.range = [row.min_temp, row.max_temp];
          return row;
        }
      });
      this.setState({ data: dv });
    });
  }

  render() {
    const { data } = this.state;
    const color = ['mean_temp', 'rgb(44, 123, 182)-rgb(0, 166, 202)-rgb(0, 204, 188)-rgb(144, 235, 157)-rgb(255, 255, 140)-rgb(249, 208, 87)-rgb(242, 158, 46)-rgb(231, 104, 24)-rgb(215, 25, 28)'];

    return (
      <div>
        <Chart forceFit height={400} padding={[ 20, 0, 105 ]} data={data} scale={scale}>
          <Legend {...legendOpt} />
          <Tooltip />
          <Coord type="polar" innerRadius={0.35} />
          <Axis dataKey="date" show={false} />
          <Axis dataKey="range" line={null} tickLine={null} label={null} />
          <Interval position="date*range" color={color} size={2.5} opacity={1} />
          <Guide type="line" {...guideLineOpt} />
          {
            [ -20, -10, 0, 10, 20, 30 ].map((entry, i) => {
              const start = {
                date: '2015-7-1',
                range: entry,
              };

              return (
                <Guide type="text" key={i} start={start} content={`${entry}°C`} style={{
                  fill: '#C4C4C4',
                  fontSize: 12,
                  fontWeight: 100,
                  textAlign: 'center',
                  textBaseline: 'middle'
                }} />
              )
            })
          }
        </Chart>
      </div>
    );
  }
}


