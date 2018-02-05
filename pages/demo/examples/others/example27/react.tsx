import { Global, Chart, Axis, Legend, Point, View, Line, Tooltip } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
import * as _ from 'lodash';
const DataSet = require('@antv/data-set');

const REGRESSION_METHODS = [
  'boxcar',
  'cosine',
  'epanechnikov',
  'gaussian',
  'quartic',
  'triangular',
  'tricube',
  'triweight',
  'uniform'
];

const scale = [{
  dataKey: 'x',
  alias: 'depth',
  min: 50,
  max: 70,
  sync: true,
}, {
  dataKey: 'y',
  alias: '概率密度分布',
  sync: true
}];

export default class App extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    $.getJSON('/assets/data/diamond.json', (data) => {
      this.setState({data});
    })
  }

  render() {
    const  { data } = this.state;
    if (!data.length) {
      return (<div></div>);
    }
    return (
      <div>
        <Chart forceFit height={400} data={data} scale={scale}>
          <Axis />
          <Tooltip />
          {
            REGRESSION_METHODS.map((method: any, i: number) => {
              if (!data.length) {
                return null;
              }
              const dv = new DataSet.View().source(data);
              dv.transform({
                type: 'kernel-smooth.regression',
                method,
                field: 'depth',
                extent: [ 50, 70 ]
              });
              return (
                <View data={dv} scale={scale} key={`view-${i}`}>
                  <Line position="x*y" color={Global.colors_16[i]} />
                </View>
              );
            })
          }
        </Chart>
      </div>
    );
  }
}


