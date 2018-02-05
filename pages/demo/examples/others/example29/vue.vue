<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :scale="scale">
      <v-axis />
      <v-tooltip />
      <v-view :data="data" :scale="scale">
        <v-point position="carat*price" />
      </v-view>
      <v-view v-for="(method, i) in REGRESSION_METHODS" :key="i" :data="getData(method, i)" :scale="scale">
        <v-axis :data-key="'price'" :show="false" />
        <v-line position="carat*price" :size="1" :color="Global.colors_16[i]" />
      </v-view>
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
import { Global } from 'viser-vue';
const DataSet = require('@antv/data-set');

const REGRESSION_METHODS = [
  'linear',
  'exponential',
  'logarithmic',
  'power',
  'polynomial'
];

const scale = [{
  dataKey: 'carat',
  sync: true,
}, {
  dataKey: 'price',
  sync: true,
}];

export default {
  mounted() {
    $.getJSON('/assets/data/diamond.json', (data) => {
      this.$data.data = data;
    });
  },
  methods: {
    getData(method, i) {
      const dv = new DataSet.View().source(this.data)
        .transform({
          type: 'regression',
          method,
          fields: [ 'carat', 'price' ],
          bandwidth: 0.1,
          extent: [ 0, 4 ],
          as: [ 'carat', 'price' ]
        });
      return dv;
    }
  },
  data() {
    return {
      data: [],
      height: 400,
      scale,
      REGRESSION_METHODS,
      Global,
    };
  }
};
</script>
