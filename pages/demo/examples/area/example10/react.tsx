import { Chart, Tooltip, Axis, Line, Guide, Legend, Area } from 'viser-react';
import * as $ from 'jquery';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const data = [{
  year: 1700,
  exports: 35,
  imports: 70
}, {
  year: 1710,
  exports: 59,
  imports: 81
}, {
  year: 1720,
  exports: 76,
  imports: 96
}, {
  year: 1730,
  exports: 65,
  imports: 97
}, {
  year: 1740,
  exports: 67,
  imports: 93
}, {
  year: 1750,
  exports: 79,
  imports: 90
}, {
  year: 1760,
  exports: 115,
  imports: 79
}, {
  year: 1770,
  exports: 163,
  imports: 85
}, {
  year: 1780,
  exports: 185,
  imports: 93
}];

const ds = new DataSet();
const dv = ds.createView().source(data);
dv.transform({
  type: 'map',
  callback: function callback(row) {
    row.range = [row.exports, row.imports];
    return row;
  }
});
dv.transform({
  type: 'fold',
  fields: ['exports', 'imports'],
  key: 'type',
  value: 'value'
});

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const crosshairs = {
  type: 'line'
}

const style = {
  text: {
    textAlign: 'left',
    fontSize: 12
  },
  point: {
    stroke: '#FF4D4F'
  }
}

const style2 = {
  fontSize: 14,
  fontWeight: 'normal',
  fill: 'rgba(0,0,0,0.45)'
}

const color = ['type', ['#F5222D', '#FAAD14']];

export default class App extends React.Component {
  render() {
    const Vguide:any=Guide;
    return (
      <Chart forceFit data={dv.rows} height={400} padding={[20, 100, 50, 30]} scale={[{
        dataKey:'value',
        min: 0,
        max: 200
      },{
        dataKey:'range',
        min: 0,
        max: 200
      }]}>
        <Tooltip crosshairs={crosshairs}/>
        <Legend attachLast/>
        <Axis dataKey="year" label={label}/>
        <Axis dataKey="value" label={label}/>
        <Line position="year*value" color={color} size={2.5} shape='smooth'/>
        <Area position="year*range" color='#ffffff' opacity={0.4} shape='smooth'/>
        <Vguide 
          type="regionFilter" 
          top
          start={[1700, 'min']} 
          end={[1753, 'max']}
          color='#F5222D'
          apply={['area']}
        />
        <Vguide 
          type="regionFilter" 
          top
          start={[1753, 'min']} 
          end={[1780, 'max']}
          color='#FAAD14'
          apply={['area']}
        />
        <Vguide 
          type="dataMarker" 
          position={[1753, 87]} 
          content={'1755 年在印度周边建立诸多殖民\n地与附属国，垄断出口贸易，导致\n出品总额激增。'}
          style={style}
          lineLength={50}
          direction='downward'
        />
        <Vguide 
          type="text" 
          top
          position={[1730, 80]} 
          content={'贸易赤字'}
          style={style2}
          lineLength={20}
        />
        <Vguide 
          type="text" 
          top
          position={[1765, 110]} 
          content={'贸易盈余'}
          style={style2}
          lineLength={20}
        />
      </Chart>
    );
  }
}
