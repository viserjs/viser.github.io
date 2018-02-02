import { Chart, Axis, Legend, Point, View, Heatmap } from 'viser-react';
import * as React from 'react';
import * as $ from 'jquery';
import * as _ from 'lodash';
const DataSet = require('@antv/data-set');

export default class App extends React.Component {
  state = {
    data: [],
    dv: []
  };

  componentDidMount() {
    $.getJSON('/assets/data/diamond.json', (data) => {
      const dv = new DataSet.View().source(data);
      dv.transform({
        type: 'kernel-smooth.density',
        fields: [ 'carat', 'price' ],
        as: [ 'carat', 'price', 'density' ]
      });
      this.setState({data, dv});
    })
  }

  render() {
    const  { data, dv } = this.state;
    return (
      <div>
        <Chart forceFit height={400} data={data}>
          <Legend offset={45} />
          <Axis />
          <Point position="carat*price" />
          <View data={dv}>
            <Heatmap position="carat*price" color={['density', 'blue-cyan-lime-yellow-red']}/>
          </View>
        </Chart>
      </div>
    );
  }
}


