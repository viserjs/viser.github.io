import { Global, Chart, Axis, Legend, Point, View, Line, Tooltip } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
import * as _ from 'lodash';
const DataSet = require('@antv/data-set');

const REGRESSION_METHODS = [
  'linear',
  'exponential',
  'logarithmic',
  'power',
  'polynomial'
];

const scale = [{
  dataKey: 'carat',
  sync: true,
}, {
  dataKey: 'price',
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
          <View data={data} scale={scale}>
            <Point position="carat*price"/>
          </View>
          {
            REGRESSION_METHODS.map((method: any, i: number) => {
              const dv = new DataSet.View().source(data)
              .transform({
                type: 'regression',
                method,
                fields: [ 'carat', 'price' ],
                bandwidth: 0.1,
                extent: [ 0, 4 ],
                as: [ 'carat', 'price' ]
              });
              return (
                <View data={dv} scale={scale} key={`view-${i}`}>
                  <Axis dataKey='price' show={false}/>
                  <Line position="carat*price" size={1} color={Global.colors_16[i]}/>
                </View>
              );
            })
          }
        </Chart>
      </div>
    );
  }
}


