import { Chart, Facet, View, Tooltip, Legend, Axis, Line, FacetView } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'value',
  max: 9,
  min: 1
}, {
  dataKey: 'year',
  range: [0, 1],
  tickCount: 2
}];

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const labelX = {
  textStyle: function textStyle(text) {
    if (text === '1950') {
      return {
        textAlign: 'start',
        fontSize: 14,
        fill: '#aaaaaa'
      };
    } else {
      return {
        textAlign: 'end',
        fontSize: 14,
        fill: '#aaaaaa'
      };
    }
  }
}

const grid = {
  lineStyle: {
    lineDash: [0, 0],
    lineWidth: 1,
    stroke: '#e9e9e9'
  }
}

const colTitle = {
  offsetY: -15,
  style: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 300,
    fill: '#8d8d8d'
  }
}

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
    const IAxis:any = Axis;
    return (
      <Chart forceFit={true} height={400} data={data} scale={scale} padding={[50, 20, 50, 50]}>
        <Tooltip />
        <Legend />
        <Axis dataKey="value" label={label}/>
        <IAxis dataKey="year" label={labelX} grid={grid}/>
        <Facet type="rect" fields={['country']} colTitle={colTitle} padding={5}>
          <FacetView>
            <Line position="year*value" shape="smooth" opacity={0.8} />
          </FacetView>
        </Facet>
      </Chart>
    );
  }
}




