import { Chart, Tooltip, Axis, Box, Legend, Point } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const { DataView } = DataSet;
const data = [
  { low: 1, q1: 9, median: 16, q3: 22, high: 24 }
];

const dv = new DataView().source(data);
dv.transform({
  type: 'map',
  callback: (obj) => {
    obj.range = [ obj.low, obj.q1, obj.median, obj.q3, obj.high ];
    return obj;
  }
});

const scale = [{
  dataKey: 'range',
  max: 35,
}];

const tooltipOpts: any = {
  crosshairs: false
};

export default class App extends React.Component {

  render() {

    return (
      <div>
        <Chart forceFit height={400} data={dv} scale={scale}>
          <Tooltip {...tooltipOpts} />
          <Axis />
          <Box position="range*1" tooltip="x*low*q1*median*q3*high" style={{
            stroke: '#545454',
            fill: '#1890FF',
            fillOpacity: 0.3
          }} />
        </Chart>
      </div>
    );
  }
}


