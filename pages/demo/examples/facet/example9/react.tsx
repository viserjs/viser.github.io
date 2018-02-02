import { Chart, Facet, View, Tooltip, Legend, Axis, Bar, FacetView } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');
const { DataView } = DataSet;

const scale = [{
  dataKey: 'Species',
  sync: true,
}];

const views = (view, facet) => {
  let obj = {};

  if (facet.rowIndex === facet.colIndex) {
    const dv = new DataView();
    dv.source(facet.data)
      .transform({
        type: 'bin.histogram',
        field: facet.colField,
        bins: 30,
        as: [ facet.colField, 'count' ],
        groupBy: [ 'Species' ]
      });

    obj = {
      data: dv.rows,
      series: {
        quickType: 'stackBar',
        position: facet.colField + '*count',
        color: 'Species',
        opacity: 0.85,
      }
    }
  } else {
    obj = {
      series: {
        quickType: 'point',
        shape: 'circle',
        color: 'Species',
        position: [ facet.colField, facet.rowField ],
        opacity: 0.3,
        size: 3,
      }
    }
  }

  return obj;
}

export default class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/iris.json', (sourceData) => {
      this.setState({ data: sourceData });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Chart forceFit={true} height={400} data={data} scale={scale}>
        <Tooltip />
        <Legend />
        <Axis />
        <Facet type="matrix" fields={['SepalLength', 'SepalWidth', 'PetalLength', 'PetalWidth']} views={views} />
      </Chart>
    );
  }
}




