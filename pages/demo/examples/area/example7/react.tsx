import { Chart, Tooltip, Axis, Line, Guide, Legend, Area } from 'viser-react';
import * as $ from 'jquery';
import * as React from 'react';

const data = [{
  'month': '1',
  value: 1078
}, {
  'month': '2',
  value: 1216
}, {
  'month': '3',
  value: 758
}, {
  'month': '4',
  value: 623
}, {
  'month': '5',
  value: 319
}, {
  'month': '6',
  value: 422
}, {
  'month': '7',
  value: -4
}, {
  'month': '8',
  value: -217
}, {
  'month': '9',
  value: -358
}, {
  'month': '10',
  value: 1513
}, {
  'month': '11',
  value: 1388
}, {
  'month': '12',
  value: 597
}];

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}
const style2 = {
  text: {
    textAlign: 'right',
    stroke: '#fff',
    lineWidth: 2
  },
  point: {
    stroke: '#f5222d'
  }
}
const style3 = {
  text: {
    textAlign: 'right',
    stroke: '#fff',
    lineWidth: 2
  },
  point: {
    stroke: '#2fc25b'
  }
}
const style = {
  text: {
    textAlign: 'left',
    stroke: '#fff',
    lineWidth: 2
  },
  point: {
    stroke: '#f5222d'
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
  render() {
    const Vguide:any=Guide;
    return (
      <Chart forceFit data={data} height={400} padding='auto' scale={[{
        dataKey:'value',
        max: 2000,
        min: -1000
      },{
        dataKey:'month',
        type: 'cat'
      }]}>
        <Tooltip/>
        <Axis dataKey="month" label={labelFormat}/>
        <Axis dataKey="value" label={label}/>
        <Line position="month*value" color='white' size={2}/>
        <Area position="month*value" color='white' opacity={0.3}/>
        <Vguide 
          type="regionFilter" 
          top
          start={['min', 'max']} 
          end={['max', 0]}
          color='#f5222d'
        />
        <Vguide 
          type="regionFilter" 
          top
          start={['min', 0]} 
          end={['max', 'min']}
          color='#2fc25b'
        />
        <Vguide 
          type="dataMarker" 
          top
          position={['2', 1216]} 
          content={'2月份因逢春节水产销售需求旺盛，\n需求大增'}
          style={style}
          lineLength={20}
          autoAdjust={false}
        />
        <Vguide 
          type="dataMarker" 
          position={['10', 1513]} 
          content={'开渔后产品销售双增，利润达到\n全年新高'}
          style={style2}
          lineLength={20}
          autoAdjust={false}
          direction='downward'
        />
        <Vguide 
          type="dataMarker" 
          position={['9', -358]} 
          content={'因休渔期无新进货源，成本摊销\n下来有亏损'}
          style={style3}
          lineLength={20}
          autoAdjust={false}
          direction='downward'
        />
        <Vguide 
          type="region" 
          start={['7', 'min']} 
          end={['9', 'max']}
        />
      </Chart>
    );
  }
}
