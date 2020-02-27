import { Chart, Tooltip, Axis, Line, Guide, StackArea, StackLine } from 'viser-react';
import * as $ from 'jquery';
import * as React from 'react';

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const style1 = {
  fill: '#8c8c8c',
  fontSize: 12,
  fontWeight: 300
}

const style2 = {
  fill: 'white',
  fontSize: 12,
  fontWeight: 300,
  textAlign: 'end',
  textBaseline: 'center'
}

const style3 = {
  fill: 'white',
  fontSize: 12,
  fontWeight: 300,
  textAlign: 'start',
  textBaseline: 'center'
}

const style4 = {
  lineWidth: 0,
  fill: '#dcdcdc',
  fillOpacity: 0.3,
  stroke: '#ccc'
}

const colorline = ['type', ['white']];

const color = ['type', ['#1890ff', '#40a9ff', '#0050b3', '#003a8c', '#002766']];

export default class App extends React.Component {
  state = {
    data:[]
  };
  componentDidMount() {
    $.getJSON('/assets/data/gas-import-export.json', data => {
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
      <Chart forceFit data={data} height={400} padding={[50, 20, 30, 30]}>
        <Tooltip crosshairs='y' shared/>
        <Axis dataKey="year" label={label}/>
        <Axis dataKey="value" label={label}/>
        <StackArea position="year*value" color={color} opacity={1}/>
        <StackLine position="year*value" color={colorline} size={1} opacity={0.2}/>
        <Vguide 
          type="text" 
          position={[2015, 8]} 
          content='万立方/英尺'
          style={style1}
          offsetY={-30}
          offsetX={-20}
        />
        <Vguide 
          top
          type="text" 
          position={[2040, 6.3]} 
          content='出口至墨西哥'
          style={style2}
          offsetX={-10}
        />
        <Vguide 
          top
          type="text" 
          position={[2040, 5]} 
          content='出口至加拿大'
          style={style2}
          offsetX={-10}
        />
        <Vguide 
          top
          type="text" 
          position={[2040, 2]} 
          content='来自40个州的液化天然气出口'
          style={style2}
          offsetX={-10}
        />
        <Vguide 
          top
          type="text" 
          position={[2015, -1.5]} 
          content='从加拿大进口'
          style={style3}
          offsetX={10}
        />
        <Vguide 
          type="region" 
          start={[2019, 8]} 
          end={[2040, -4]}
          style={style4}
        />
      </Chart>
    );
  }
}
