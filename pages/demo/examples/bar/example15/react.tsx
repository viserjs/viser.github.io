import { Chart, Tooltip, Axis, Interval, Guide } from 'viser-react';
import * as React from 'react';

const data = [{
  type: '书架',
  value: 48000,
  cat: '家具'
}, {
  type: '椅子',
  value: 36000,
  cat: '家具'
}, {
  type: '桌子',
  value: 9000,
  cat: '家具'
}, {
  type: '复印机',
  value: 30500,
  cat: '技术'
}, {
  type: '电话',
  value: 22000,
  cat: '技术'
}, {
  type: '配件',
  value: 12000,
  cat: '技术'
}, {
  type: '纸张',
  value: 25000,
  cat: '办公用品'
}, {
  type: '笔',
  value: 17000,
  cat: '办公用品'
}, {
  type: '美术',
  value: 8000,
  cat: '办公用品'
}, {
  type: '收纳',
  value: 2000,
  cat: '办公用品'
}];

const scale = [{
  dataKey: 'value',
  alias: '占比（%）'
}];

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const tickLine = {
  alignWithLabel: false,
  length: 0
}

const labelFormat = {
  textStyle: {
    fill: '#aaaaaa'
  },
  formatter: function formatter(text) {
    return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  }
}

const title = {
  offset: 70
}

const lineStyle = {
  stroke: '#d9d9d9',
  lineDash: [0, 0]
}

const style = {
  fill: '#c0c0c0', 
  fontSize: 12, 
  fontWeight: '300',
  textAlign: 'center'
}

export default class App extends React.Component {
  render() {
    return (
      <Chart forceFit height={400} data={data} scale={scale} padding="auto">
        <Tooltip />
        <Axis dataKey="type" label={label} tickLine={tickLine}/>
        <Axis dataKey="value" label={labelFormat} title={title}/>
        <Interval position="type*value" color="cat" opacity={1}/>
        <Guide 
          type="text" 
          top={true} 
          position={['椅子', 'min']}
          content='家具'
          style={style}
          offsetY={40}
        />
        <Guide 
          type="text" 
          top={true} 
          position={['电话', 'min']}
          content='技术'
          style={style}
          offsetY={40}
        />
        <Guide 
          type="text" 
          top={true} 
          position={['笔', 'min']}
          content='办公用品'
          style={style}
          offsetY={40}
          offsetX={20}
        />
        <Guide 
          type="line" 
          start={['30%', '100%']}
          end={['30%', '120%']}
          lineStyle={lineStyle}
        />
        <Guide 
          type="line" 
          start={['60%', '100%']}
          end={['60%', '120%']}
          lineStyle={lineStyle}
        />
      </Chart>
    );
  }
}

