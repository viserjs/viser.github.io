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
  dataKey: 'carat',
  alias: '克拉数',
  min: 0,
  max: 4,
  sync: true
}, {
  dataKey: 'price',
  alias: '价格',
  sync: true,
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
    return (
      <div>
        <Chart forceFit height={400} data={data} scale={scale}>
          <Axis />
          <Tooltip />
          <Point position="carat*price" />
          {
            REGRESSION_METHODS.map((method: any, i: number) => {
              const dv = new DataSet.View().source(data);
              dv.transform({
                type: 'kernel-smooth.regression',
                method,
                fields: [ 'carat', 'price' ],
                as: [ 'carat', 'price' ],
                bandwidth: 0.5,
                extent: [ 0, 4 ]
              });
              return (
                <View data={dv} scale={scale} key={`view-${i}`}>
                  <Axis dataKey='price' show={false}/>
                  <Line position="carat*price" color={Global.colors_16[i]}/>
                </View>
              );
            })
          }
        </Chart>
      </div>
    );
  }
}


