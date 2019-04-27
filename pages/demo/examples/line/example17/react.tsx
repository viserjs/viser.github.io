import { Chart, Tooltip, Axis, Line, Guide, Legend } from 'viser-react';
import * as $ from 'jquery';
import * as React from 'react';

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const labelFormat = {
  textStyle: {
    fill: '#aaaaaa'
  },
  formatter: function formatter(text) {
    var dataStrings = text.split('.');
    return dataStrings[2] + '-' + dataStrings[1] + '-' + dataStrings[0];
  }
}

const style = {
  text: {
    fontSize: 12
  }
}

function findMaxMin(data) {
  var maxValue = 0;
  var minValue = 50000;
  var maxObj = null;
  var minObj = null;
  for (var i = 0; i < data.length; i++) {
    var d = data[i];
    if (d.Close > maxValue) {
      maxValue = d.Close;
      maxObj = d;
    }
    if (d.Close < minValue) {
      minValue = d.Close;
      minObj = d;
    }
  }
  return {
    max: maxObj,
    min: minObj
  };
}

export default class App extends React.Component {
  state = {
    data:[],
    max:{},
    min:{}
  };
  componentDidMount() {
    $.getJSON('/assets/data/nintendo.json', data => {
      const max_min:any = findMaxMin(data);
      const max:any = max_min.max;
      const min:any = max_min.min;
      this.setState({ data,max,min });
    });
  }
  render() {
    const {data} = this.state;
    const max:any = this.state.max;
    const min:any = this.state.min;
    if (!data.length) {
      return null;
    }
    const Vguide:any=Guide;
    return (
      <Chart forceFit data={data} height={400} padding={[30, 20, 50, 30]} scale={[{
        dataKey:'Date',
        tickCount: 10
      }]}>
        <Tooltip crosshairs={false}/>
        <Axis dataKey="Date" label={labelFormat}/>
        <Axis dataKey="Close" label={label}/>
        <Line position="Date*Close"/>
        <Vguide 
          type="dataMarker" 
          top={true}
          position={[max.Date, max.Close]} 
          content={'全部峰值：' + max.Close}
          style={style}
          lineLength={30}
        />
        <Vguide 
          type="dataMarker"
          top={true}
          position={[min.Date, min.Close]} 
          content={'全部谷值：' + min.Close}
          style={style}
          lineLength={50}
        />
      </Chart>
    );
  }
}
