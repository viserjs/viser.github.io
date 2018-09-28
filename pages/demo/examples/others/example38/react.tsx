import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');
import { Area, Chart, Guide, Tooltip, Interval } from 'viser-react';

const series = {
  0: 'All Industries',
  32229: 'Nonagriculture, Private Wage and Salary Workers',
  32230: 'Mining and Extraction',
  32231: 'Construction',
  32232: 'Manufacturing',
  32233: 'Durable goods manufacturing',
  32234: 'Nondurable goods manufacturing',
  32235: 'Wholesale and Retail Trade',
  32236: 'Transportation and Utilities',
  32237: 'Information',
  32238: 'Finance',
  32239: 'Business services',
  32240: 'Education and Health',
  32241: 'Leisure and hospitality',
  32242: 'Other',
  35109: 'Agriculture',
  28615: 'Government',
  35181: 'Self-employed',
};
export default class App extends React.Component {
  state = {
    data: [],
    scale: [
      {
        dataKey: 'date',
        type: 'time',
      },
      {
        dataKey: 'rate',
        min: 0,
      },
    ],
  };
  componentDidMount() {
    $.getJSON('/assets/data/unemployment.json', sourceData => {
      const dv = new DataSet.View().source(sourceData);
      dv.transform({
        type: 'map',
        callback: function callback(row) {
          row.series = series[row.series];
          return row;
        },
      });
      this.setState({ data: dv });
    });
  }
  render() {
    return (
      <Chart
        container="mountNode"
        forceFit={true}
        height={400}
        padding={[20, 20]}
        scale={this.state.scale}
        data={this.state.data}
      >
        <Area position="date*rate" color="series" opacity={0.85} />
      </Chart>
    );
  }
}
