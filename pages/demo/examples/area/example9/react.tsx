import { Chart, Tooltip, Axis, Legend, StackArea } from 'viser-react';
import * as $ from 'jquery';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const scale = [{
  dataKey: 'percent',
  max: 1.0,
  min: 0.0,
  nice: false,
  formatter: function formatter(value) {
    value = value || 0;
    value = value * 100;
    return parseInt(value) + '%';
  }
},{
  dataKey: 'Year',
  tickCount: 10,
  nice: false
}]

export default class App extends React.Component {
  state = {
    data:[]
  };
  componentDidMount() {
    $.getJSON('/assets/data/area.json', data => {
      const ds = new DataSet();
      const dv = ds.createView().source(data).transform({
        type: 'fold',
        fields: ['Democracy', 'Colony', 'No Data', 'Open Anocracy', 'Closed Anocracy', 'Monarchy'],
        key: 'type',
        value: 'value',
        retains: ['Year']
      }).transform({
        type: 'percent',
        field: 'value',
        dimension: 'type',
        groupBy: ['Year'],
        as: 'percent'
      });
      this.setState({ data:dv.rows });
    });
  }
  render() {
    const {data} = this.state;
    if (!data.length) {
      return null;
    }
    return (
      <Chart forceFit data={data} height={400} padding='auto' scale={scale}>
        <Tooltip/>
        <Axis dataKey="Year" label={label}/>
        <Axis dataKey="percent" label={label}/>
        <Legend position='top-center'/>
        <StackArea position="Year*percent" color='type' opacity={0.8}/>
      </Chart>
    );
  }
}
