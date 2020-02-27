import { Chart, Tooltip, Coord, StackBar, View } from 'viser-react';
import * as $ from 'jquery';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const data = [{
  name: '狮子',
  type: '火象星座',
  value: 11
}, {
  name: '白羊',
  type: '火象星座',
  value: 10
}, {
  name: '射手',
  type: '火象星座',
  value: 10
}, {
  name: '水瓶',
  type: '风向星座',
  value: 14
}, {
  name: '双子',
  type: '风向星座',
  value: 7
}, {
  name: '天平',
  type: '风向星座',
  value: 7
}, {
  name: '摩羯',
  type: '土象星座',
  value: 14
}, {
  name: '金牛',
  type: '土象星座',
  value: 3
}, {
  name: '处女',
  type: '土象星座',
  value: 3
}, {
  name: '天蝎',
  type: '水象星座',
  value: 11
}, {
  name: '巨蟹',
  type: '水象星座',
  value: 5
}, {
  name: '双鱼',
  type: '水象星座',
  value: 5
}];

var ds = new DataSet();
var dv = ds.createView();
dv.source(data).transform({
  type: 'percent',
  field: 'value',
  dimension: 'type',
  as: 'percent'
});

var ds2 = new DataSet();
var dv2 = ds2.createView();
dv2.source(data).transform({
  type: 'percent',
  field: 'value',
  dimension: 'name',
  as: 'percent'
});

export default class App extends React.Component {

  render() {
    return (
      <Chart forceFit data={dv.rows} height={400} padding='auto'>
        <Tooltip />
        <Coord type='theta' radius={0.5} innerRadius={0.3}/>
        <StackBar 
          position='percent'
          color={['type', ['#1890ff', '#13c2c2', '#ffc53d', '#73d13d']]}
          opacity={1}
          style={{
            stroke: 'white',
            lineWidth: 1
          }}
          label={['type', {
            offset: -5,
            textStyle: {
              fill: 'white',
              shadowBlur: 2,
              shadowColor: 'rgba(0, 0, 0, .45)'
            }
          }]}
        />
        <View data={dv2.rows}>
          <Tooltip />
          <Coord type='theta' radius={0.8} innerRadius={0.5 / 0.8}/>
          <StackBar 
          position='percent'
          color={['type', ['#1890ff', '#13c2c2', '#ffc53d', '#73d13d']]}
          opacity={1}
          style={{
            stroke: 'white',
            lineWidth: 1
          }}
          label={['name', {
            offset: -10,
            textStyle: {
              fill: 'white',
              shadowBlur: 2,
              shadowColor: 'rgba(0, 0, 0, .45)'
            }
          }]}
        />
        </View>
      </Chart>
    );
  }
}
