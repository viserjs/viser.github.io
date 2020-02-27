import { Chart, Tooltip, Axis, Line, Guide, Point } from 'viser-react';
import * as $ from 'jquery';
import * as React from 'react';

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}
const style = {
  text: {
    fontSize: 13,
    stroke: 'white',
    lineWidth: 2
  }
}

export default class App extends React.Component {
  state = {
    data:[]
  };
  componentDidMount() {
    $.getJSON('/assets/data/basement.json', data => {
      this.setState({ data });
    });
  }
  findMaxMin = (data:any) => {
    let maxValue = 0;
    let minValue = 50000;
    let maxObj = null;
    let minObj = null;
    for (var i = 0; i < data.length; i++) {
      var d = data[i];
      if (d.UV > maxValue) {
        maxValue = d.UV;
        maxObj = d;
      }
      if (d.UV < minValue) {
        minValue = d.UV;
        minObj = d;
      }
    }
    return {
      max: maxObj,
      min: minObj
    };
  }
  render() {
    const {data} = this.state;
    if (!data.length) {
      return null;
    }
    const Vguide:any=Guide;
    const max_min = this.findMaxMin(data);
    const max = max_min.max;
    const min = max_min.min;
    return (
      <Chart forceFit data={data} height={400} padding={[20, 50, 50, 50]} scale={[{
        dataKey:'time',
        tickCount: 5
      },{
        dataKey:'UV',
        tickCount: 5
      }]}>
        <Tooltip crosshairs={false}/>
        <Axis dataKey="time" label={label}/>
        <Axis dataKey="UV" label={label}/>
        <Line position="time*UV"/>
        <Vguide 
          type="dataMarker" 
          top={true}
          position={[max.time, max.UV]} 
          content={'峰值：' + max.UV}
          style={style}
          lineLength={30}
        />
        <Vguide 
          type="dataMarker"
          top={true} 
          position={[min.time, min.UV]} 
          content={'谷值：' + min.UV}
          style={style}
          lineLength={50}
        />
        <Vguide 
          type="region" 
          start={['2018-09-01', 'min']}
          end={['2018-09-02', 'max']}
        />
        <Vguide 
          type="region" 
          start={['2018-09-08', 'min']}
          end={['2018-09-09', 'max']}
        />
        <Vguide 
          type="region" 
          start={['2018-09-15', 'min']}
          end={['2018-09-16', 'max']}
        />
        <Vguide 
          type="region" 
          start={['2018-09-22', 'min']}
          end={['2018-09-24', 'max']}
        />
      </Chart>
    );
  }
}
