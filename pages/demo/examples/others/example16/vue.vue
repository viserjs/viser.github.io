<template>
  <div>
    <v-chart :force-fit="true" :height="height" padding="40" :data="data">
      <v-tooltip show-title="null" />
      <v-coord type="polar" :inner-radius="0.2" />
      <v-axis dataKey="week" :grid="null" :line="null" :tick-line="null" :label="null" />
      <v-axis dataKey="time" :grid="null" :line="null" :tick-line="null" :label="label" />
      <v-polygon
        position="time*week"
        :color="color"
        tooltip="week*time*value"
        :v-style="style" />
      <v-guide v-for="(val, idx) in values"
        :key="val"
        type="text"
        :top="true"
        :position="[0, idx]"
        :content="val"
        :v-style="style2" />
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';

const values = ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'];

export default {
  mounted() {
    $.getJSON('/assets/data/polar-heatmap.json', (data) => {
      this.$data.data = data;
    });
  },
  data() {
    return {
      height: 400,
      data: [],
      values: values,
      label:{ offset: 3 },
      color:['value', '#BAE7FF-#1890FF-#0050B3'],
      style:{
        stroke: '#fff',
        lineWidth: 1,
      },
      style2:{
        fill: '#fff',
        textAlign: 'center',
        shadowBlur: 2,
        shadowColor: 'rgba(0, 0, 0, .45)'
      },
    };
  }
};
</script>