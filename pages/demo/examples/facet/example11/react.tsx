import { Chart, Facet, Tooltip, Legend, Axis, Line, FacetView } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'value',
  max: 9,
  min: 1,
  tickCount: 2,
  sync: true,
  formatter: function formatter(value) {
    return value + '%';
  }
}, {
  dataKey: 'year',
  range: [0, 1]
}];

const labelFormat = {
  textStyle: {
    fontSize: 10,
    fill: '#aaaaaa'
  },
  formatter: function formatter(text) {
    if (window.innerHeight > 600) {
      return text;
    }
  }
}

const tickLine = {
  length: 0
};

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const rowTitle = {
  offsetX: (window.innerWidth - 100) * -1,
  style: {
    fontSize: 12,
    textAlign: 'end',
    rotate: 0,
    fontWeight: 300,
    fill: '#8d8d8d'
  }
};

export default class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/fertility.json', (data) => {
      var ds = new DataSet();
      var dv = ds.createView().source(data);
      dv.transform({
        type: 'sort',
        callback: function callback(a, b) {
          return a.year - b.year;
        }
      });

      this.setState({ data: dv.rows });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Chart forceFit={true} height={400} data={data} scale={scale} padding={[50, 20, 50, 100]}>
        <Tooltip />
        <Legend />
        <Axis dataKey="value" grid={null} label={labelFormat}/>
        <Axis dataKey="year" tickLine={tickLine} label={label}/>
        <Facet type="rect" fields={[null, 'country']} padding={10} rowTitle={rowTitle}>
          <FacetView>
            <Line position="year*value" />
          </FacetView>
        </Facet>
      </Chart>
    );
  }
}




