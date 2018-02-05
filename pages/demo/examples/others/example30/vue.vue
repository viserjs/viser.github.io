<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data">
      <v-axis />
      <v-legend :offset="45"/>
      <v-point position="carat*price" />
      <v-view :data="dv" >
        <v-legend :offset="45" />
        <v-heatmap position="carat*price" :color="['density', 'blue-cyan-lime-yellow-red']" />
      </v-view>
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

export default {
  mounted() {
    $.getJSON('/assets/data/diamond.json', (data) => {
      const dv = new DataSet.View().source(data);
      dv.transform({
        type: 'kernel-smooth.density',
        fields: [ 'carat', 'price' ],
        as: [ 'carat', 'price', 'density' ]
      });
      this.$data.data = data;
      this.$data.dv = dv;
    });
  },
  data() {
    return {
      data: [],
      dv: [],
      height: 400,
    };
  }
};
</script>
