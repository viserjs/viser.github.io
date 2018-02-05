<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :scale="scale">
      <v-axis />
      <v-tooltip />
      <v-point position="carat*price" />
      <v-view v-for="(method, i) in REGRESSION_METHODS" :key="i" :data="getData(method, i)" :scale="scale">
        <v-axis :data-key="'price'" :show="false" />
        <v-line position="carat*price" :color="Global.colors_16[i]" />
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
  dataKey: 'carat',
  alias: '克拉数',
  min: 0,
  max: 4,
  sync: true
}, {
  dataKey: 'price',
  alias: '价格',
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
      const dv = new DataSet.View().source(this.data);
      dv.transform({
        type: 'kernel-smooth.regression',
        method,
        fields: [ 'carat', 'price' ],
        as: [ 'carat', 'price' ],
        bandwidth: 0.5,
        extent: [ 0, 4 ]
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
