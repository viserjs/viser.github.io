import { Chart, Tooltip, Axis, Line, Guide, View } from 'viser-react';
import * as $ from 'jquery';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const tooltipOpts = {
  crosshairs: false
};
const axis1 = {
  dataKey: 'Year',
  subTickCount: 3,
  subTickLine: {
    length: 3,
    stroke: '#bfbfbf',
    lineWidth: 1
  },
  tickLine: {
    length: 6,
    lineWidth: 1,
    stroke: '#bfbfbf'
  },
  label: {
    textStyle: {
      fill: '#aaaaaa'
    }
  }
}
const axis2 = {
  dataKey: 'Deaths',
  label: {
    textStyle: {
      fill: '#aaaaaa'
    },
    formatter: function formatter(text) {
      return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    }
  }
}

export default class App extends React.Component {
  state = {
    dv1: [],
    dv2: []
  };
  componentDidMount() {
    $.getJSON('/assets/data/terrorism.json', data => {
      const ds = new DataSet();
      const dv1 = ds.createView().source(data);
      dv1.transform({
        type: 'map',
        callback: function callback(row) {
          if (typeof row.Deaths === 'string') {
            row.Deaths = row.Deaths.replace(',', '');
          }
          row.Deaths = parseInt(row.Deaths);
          row.death = row.Deaths;
          row.year = row.Year;
          return row;
        }
      });
      const dv2 = ds.createView().source(dv1.rows);
      dv2.transform({
        type: 'regression',
        method: 'polynomial',
        fields: ['year', 'death'],
        bandwidth: .1,
        as: ['year', 'death']
      });

      this.setState({ dv1:dv1.rows, dv2:dv2.rows });
    });
  }
  render() {
    const { dv1, dv2 } = this.state;
    return (
      <Chart forceFit height={400} padding={[20, 20, 50, 50]}>
        <Tooltip {...tooltipOpts} />
        <View data={dv1}>
          <Axis {...axis1}/>
          <Axis {...axis2}/>
          <Line position="Year*Deaths"/>
          <Guide type="text" content="趋势线" position={['1970', 12000]} style={{
            fill: '#8c8c8c',
            fontSize: 14,
            fontWeight: 300
          }}/>
        </View>
        <View data={dv2}>
          <Line position="year*death" tooltip={false} style={{
            stroke: '#969696',
            lineDash: [3, 3]
          }}/>
        </View>
      </Chart>
    );
  }
}
