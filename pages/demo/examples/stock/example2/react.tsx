import { Chart, Tooltip, Axis, Area, Candle, Line } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'date',
  type: 'time',
  nice: false,
  mask: 'MM-DD',
  tickCount: 10,
}, {
  dataKey: 'range',
  min: 20,
  max: 35,
  nice: false,
  tickInterval: 2,
}, {
  dataKey: 'mean',
  min: 20,
  max: 35,
  nice: false,
}, {
  dataKey: 'stockRange',
  min: 20,
  max: 35,
  nice: false,
}];

const tooltipOpts = {
  crosshairs: {
    type: 'line',
  },
};

export default class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/stock-2.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData);
      dv.transform({
        type: 'map',
        callback: (obj: any) => {
          obj.stockRange = [obj.start, obj.end, obj.highest, obj.lowest];
          return obj;
        }
      });
      this.setState({ data: dv.rows });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Chart forceFit height={400} data={data} scale={scale}>
          <Tooltip {...tooltipOpts} />
          <Axis dataKey="mean" show={false} />
          <Axis dataKey="stockRange" show={false} />
          <Area position="date*range" />
          <Candle position="date*stockRange" color={['trend', val => {
            if (val === 'up') {
              return '#f04864';
            }

            if (val === 'down') {
              return '#2fc25b';
            }
          }]} tooltip='start*end*highest*lowest' />
          <Line position="date*mean" color="#FACC14" />
        </Chart>
      </div>
    );
  }
}


