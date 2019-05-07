<template>
  <div>
    <v-chart :forceFit="true" :height="400" :data="data" padding="auto" :scale="scale">
      <v-tooltip/>
      <v-axis dataKey="type" :label="label" :tickLine="tickLine"/>
      <v-axis dataKey="value" :label="label" :title="title"/>
      <v-interval position="type*value" :opacity="1" :adjust="adjust" color="company"/>
    </v-chart>
  </div>
</template>

<script>
const data = [{
  company: 'Apple',
  type: '整体',
  value: 30
}, {
  company: 'Facebook',
  type: '整体',
  value: 35
}, {
  company: 'Google',
  type: '整体',
  value: 28
}, {
  company: 'Apple',
  type: '非技术岗',
  value: 40
}, {
  company: 'Facebook',
  type: '非技术岗',
  value: 65
}, {
  company: 'Google',
  type: '非技术岗',
  value: 47
}, {
  company: 'Apple',
  type: '技术岗',
  value: 23
}, {
  company: 'Facebook',
  type: '技术岗',
  value: 18
}, {
  company: 'Google',
  type: '技术岗',
  value: 20
}, {
  company: 'Apple',
  type: '技术岗',
  value: 35
}, {
  company: 'Facebook',
  type: '技术岗',
  value: 30
}, {
  company: 'Google',
  type: '技术岗',
  value: 25
}];

const scale = [{
  dataKey: 'value',
  alias: '占比（%）',
  max: 75,
  min: 0,
  tickCount: 4 
}];

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const title = {
  offset: 50
}

const tickLine = {
  alignWithLabel: false,
  length: 0
}

const adjust = [{
  type: 'dodge',
  marginRatio: 1 / 32
}]

  export default {
    data() {
      return {
        data,
        scale,
        label,
        tickLine,
        title,
        adjust
      };
    }
  };
</script>