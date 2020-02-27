import { Chart, Tooltip, Axis, Line, Guide, Legend, Area } from 'viser-react';
import * as $ from 'jquery';
import * as React from 'react';

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}
const style = {
  text: {
    fontSize: 13
  }
}

const labelFormat = {
  textStyle: {
    fill: '#aaaaaa'
  },
  formatter: function formatter(text) {
    return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  }
}

export default class App extends React.Component {
  state = {
    data:[]
  };
  componentDidMount() {
    $.getJSON('/assets/data/fireworks-sales.json', data => {
      this.setState({ data });
    });
  }
  render() {
    const {data} = this.state;
    if (!data.length) {
      return null;
    }
    const Vguide:any=Guide;
    return (
      <Chart forceFit data={data} height={400} padding={[20, 40, 50, 50]} scale={[{
        dataKey:'Data',
        range: [0, 1],
        tickCount: 10,
        type: 'timeCat'
      }]}>
        <Tooltip crosshairs='y' shared/>
        <Legend attachLast/>
        <Axis dataKey="Data" label={label}/>
        <Axis dataKey="sales" label={labelFormat}/>
        <Line position="Data*sales"/>
        <Area position="Data*sales"/>
        <Vguide 
          type="dataMarker" 
          top
          position={['2014-01', 1750]} 
          content='因政策调整导致销量下滑'
          style={style}
          lineLength={30}
        />
      </Chart>
    );
  }
}
