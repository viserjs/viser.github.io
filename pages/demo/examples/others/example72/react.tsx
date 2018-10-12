import * as React from 'react';
import * as $ from 'jquery';
import { Axis, Chart, Tooltip, Brush, Legend, Line } from 'viser-react';
const DataSet = require('@antv/data-set');

export default class App extends React.Component {
  state = {
    data: [],
    scale: [],
    ds: null,
  };
  getDv = () => {
    const { ds, data } = this.state;
    const dv = ds.createView();
    dv.source(data).transform({
      type: 'fold',
      key: 'city',
      value: 'value',
      fields: ['New York', 'San Francisco', 'Austin'],
    });
    return dv;
  };
  componentDidMount() {
    $.getJSON('/assets/data/avg-temp.json', data => {
      const ds = new DataSet();
      const scale = [
        {
          dataKey: 'date',
          type: 'time',
        },
        {
          dataKey: 'value',
          alias: 'Temperature, ºF',
        },
      ];
      this.setState({ scale, data, ds });
    });
  }
  render() {
    const { data, scale } = this.state;
    if (!data.length) {
      return null;
    }
    const dv = this.getDv();
    return (
      <Chart
        container="mountNode"
        forceFit={true}
        height={400}
        data={dv}
        scale={scale}
        padding={[60, 30, 30]}
      >
        <Tooltip />
        <Legend position="top" />
        <Axis
          dataKey="date"
          line={{
            stroke: '#000',
          }}
          tickLine={{
            stroke: '#000',
          }}
          label={{
            textStyle: {
              textAlign: 'start',
            },
          }}
        />
        <Axis
          dataKey="value"
          line={{
            stroke: '#000',
          }}
          tickLine={{
            stroke: '#000',
          }}
          label={{
            textStyle: {
              fill: '#000',
            },
          }}
        />
        <Line position="date*value" color="city" shape="spline" />
        <Brush
          canvas={null}
          style={{
            fill: '#ccc',
            fillOpacity: 0.4,
          }}
        />
      </Chart>
    );
  }
}
