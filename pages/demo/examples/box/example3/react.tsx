import { Chart, Tooltip, Axis, Box, Legend, Point } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'range',
  min: 0,
  max: 240000,
}, {
  dataKey: 'outliers',
  min: 0,
  max: 240000,
}];

const colorMap = {
  'I. setosa': 'red',
  'I. versicolor': 'blue',
  'I. virginica': 'green',
}

export default class App extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    $.getJSON('/assets/data/box-3.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData);
      dv.transform({
        type: 'fold',
        fields: ['SepalLength','SepalWidth','PetalLength','PetalWidth'],
        key: 'type',
        value: 'value'
      })
      .transform({
        type: 'bin.quantile',
        field: 'value',
        as: '_bin',
        groupBy: ['Species', 'type'],
      });
      this.setState({ data: dv.rows });
    });
  }
  render() {
    const { data } = this.state;
    const tooltipOpts = {
      crosshairs: {
        type: 'rect',
      },
    };
    const seriesColor = ['Species', val => {
      return colorMap[val];
    }];
    const seriesStyle = ['Species', {
      stroke: '#545454',
      fill: val => {
        return colorMap[val];
      },
      fillOpacity: 0.3
    }];

    return (
      <div>
        <Chart forceFit height={400} data={data} scale={scale}>
          <Tooltip {...tooltipOpts} />
          <Axis />
          <Legend marker="circle" />
          <Box position="type*_bin" adjust="dodge" style={seriesStyle} color={seriesColor} />
        </Chart>
      </div>
    );
  }
}


