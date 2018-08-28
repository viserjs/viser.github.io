import { Chart, Axis, Legend, Area } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
import * as _ from 'lodash';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'year',
  tickInterval: 10
}];

const legendOpts = {
  useHtml: true,
  position: "right",
  legendMarker: {
    'g2-legend-marker': {
      borderRadius: 'none'
    },
    'g2-legend-title': {
      fontSize: '12px',
      fontWeight: 500,
      margin: 0,
      color: '#ff8800'
    }
  }
};

const axisOpts = {
  dataKey: 'count',
  line: {
    lineWidth: 1,
    stroke: '#BFBFBF'
  },
  tickLine: {
    length: 8,
    stroke: '#ddd'
  },
  grid: null
};

export default class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/baby-names.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData)
        .transform({
          type: 'fill-rows',
          groupBy: ['name'],
          orderBy: ['year']
        })
        .transform({
          type: 'impute',
          field: 'n',
          method: 'value',
          value: 0
        })
        .transform({
          type: 'aggregate',
          fields: ['n'],
          operations: ['sum'],
          groupBy: ['year', 'name'],
          orderBy: ['year'],
          as: ['count']
        });
      this.setState({ data: dv });
    })
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Chart forceFit height={400} animate={false} padding={[20, 140, 60, 50]} data={data} scale={scale}>
          <Legend {...legendOpts} />
          <Axis {...axisOpts} />
          <Area position='year*count' adjust={['stack', 'symmetric']} color='name' opacity={1} />
        </Chart>
      </div>
    );
  }
}


