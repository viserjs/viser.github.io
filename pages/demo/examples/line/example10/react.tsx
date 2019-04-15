import { Chart, Tooltip, Axis, Line, Guide, Legend } from 'viser-react';
import * as $ from 'jquery';
import * as React from 'react';

const DataSet = require('@antv/data-set');

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}
const labelFormater = {
  textStyle: {
    fill: '#aaaaaa'
  },
  formatter: function formatter(text) {
    return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  }
}
const style = {
  text: {
    textAlign: 'left',
    fontSize: 12,
    stroke: 'white',
    lineWidth: 2
  }
}

export default class App extends React.Component {
  state = {
    data:[]
  };
  componentDidMount() {
    $.getJSON('/assets/data/siteUV.json', data => {
      var ds = new DataSet();
      var dv = ds.createView().source(data);
      dv.transform({
        type: 'map',
        callback: function callback(row) {
          var times = row.Time.split(' ');
          row.date = times[0];
          row.time = times[1];
          return row;
        }
      });
      this.setState({ data:dv.rows });
    });
  }
  render() {
    const {data} = this.state;
    if (!data.length) {
      return null;
    }
    const Vguide:any=Guide;
    return (
      <Chart forceFit data={data} height={400} padding={[20, 90, 50, 50]} scale={[{
        dataKey:'time',
        tickCount: 12
      },{
        dataKey:'date',
        type: 'cat'
      }]}>
        <Tooltip crosshairs={false}/>
        <Legend attachLast={true}/>
        <Axis dataKey="time" label={label}/>
        <Axis dataKey="Count" label={labelFormater}/>
        <Line position="time*Count" color={['date', ['#d9d9d9', '#1890ff']]}/>
        <Vguide 
          type="dataMarker" 
          position={['13:00', 0]} 
          content={'服务器宕机\n低值：0'}
          style={style}
          lineLength={30}
        />
        <Vguide 
          type="dataMarker"
          position={['14:00', 4180]} 
          content={'宕机导致服务积压，恢复后达峰值\n高值：4108'}
          style={style}
          lineLength={20}
        />
      </Chart>
    );
  }
}
