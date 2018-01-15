<template>
  <div>
    <v-chart :forceFit="true" :height="400" :padding="40" :data="data">
      <v-tooltip :show-title="null"/>
      <v-coord :type="'polar'" :inner-radius="0.2" />
      <v-axis :data-key="'week'" :grid="null" :line="null" :tick-line="null" :lable="null"/>
      <v-axis :data-key="'time'" :line="null" :tick-line="null" :grid="null" :label="{label: {offset: 3}}"/>
      <v-polygon :position="'time*week'" :color="['value', '#BAE7FF-#1890FF-#0050B3']" :tooltip="'week*time*value'"
        :v-style="{
          stroke: '#fff',
          lineWidth: 1
        }" />
      <v-guide v-for="(val, idx) in values"
        :type="'text'" :top="true"
        :position="getPosition(idx)"
        :content="val"
        :v-style="{
          fill: '#fff',
          textAlign: 'center',
          shadowBlur: 2,
          shadowColor: 'rgba(0, 0, 0, .45)'
        }"
      />
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';

export default {
  mounted() {
    $.getJSON('/assets/data/polar-heatmap.json', (data) => {
      this.$data.data = data;
    });
  },
  methods: {
    getPosition: (idx) => {
      return [ 0, idx ];
    }
  },
  data() {
    return {
      height: 600,
      data: [],
      values: [ 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'],
    };
  }
};
</script>
