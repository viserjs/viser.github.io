<template>
  <div v-if="data.length">
    <v-chart :force-fit="true" :height="height" :data="data" :scale="scale">
      <v-axis />
      <v-tooltip />
      <v-view v-for="(method, i) in REGRESSION_METHODS" :key="i" :data="getData(method, i)" :scale="scale">
        <v-line position="x*y" :color="Global.colors_16[i]" />
      </v-view>
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
import { Global } from 'viser-vue';
const DataSet = require('@antv/data-set');

const REGRESSION_METHODS = [
  'boxcar',
  'cosine',
  'epanechnikov',
  'gaussian',
  'quartic',
  'triangular',
  'tricube',
  'triweight',
  'uniform'
];

const scale = [{
  dataKey: 'x',
  alias: 'depth',
  min: 50,
  max: 70,
  sync: true,
}, {
  dataKey: 'y',
  alias: '概率密度分布',
  sync: true
}];

export default {
  mounted() {
    $.getJSON('/assets/data/diamond.json', (data) => {
      this.$data.data = data;
    });
  },
  methods: {
    getData(method, i) {
      const dv = new DataSet.View().source(this.data);
      dv.transform({
        type: 'kernel-smooth.regression',
        method,
        field: 'depth',
        extent: [ 50, 70 ]
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
