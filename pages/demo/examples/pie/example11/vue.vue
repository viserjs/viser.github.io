<template>
  <div v-if="data.length">
    <v-chart
      :forceFit="true"
      height="400"
      :data="data"
      padding="auto"
    >
      <v-tooltip></v-tooltip>
      <v-coord type='theta' :radius="0.5" :innerRadius="0.3"/>
      <v-stack-bar position='percent' :color="color" :opacity="1" :label="label" :style="style"/>
      <v-view :data="dataView">
        <v-tooltip></v-tooltip>
        <v-coord type='theta' :radius="0.8" :innerRadius="0.5 / 0.8"/>
        <v-stack-bar position='percent' :color="color" :opacity="1" :label="labelView" :style="style"/>
      </v-view>
    </v-chart>
  </div>
</template>

<script>

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

const color = ['type', ['#1890ff', '#13c2c2', '#ffc53d', '#73d13d']];

const label = ['type', {
  offset: -5,
  textStyle: {
    fill: 'white',
    shadowBlur: 2,
    shadowColor: 'rgba(0, 0, 0, .45)'
  }
}];

const labelView = ['name', {
  offset: -10,
  textStyle: {
    fill: 'white',
    shadowBlur: 2,
    shadowColor: 'rgba(0, 0, 0, .45)'
  }
}]

const style = {
  stroke: 'white',
  lineWidth: 1
}

export default {
  data() {
    return {
      data: dv.rows,
      dataView: dv2.rows,
      color,
      label,
      labelView,
      style
    }
  }
};
</script>

