<template>
  <div>
    <v-chart :forceFit="true" height="500" :data="dv" >
        <v-axis></v-axis>
        <v-legend></v-legend>
        <v-polygon
          position="x*y"
          :color="['count', '#BAE7FF-#1890FF-#0050B3']">
        </v-polygon>
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

export default {
  mounted() {
    $.getJSON('/assets/data/gaussion-distribution.json', (data) => {
      const dv = new DataSet.View().source(data);
      dv.transform({
        sizeByCount: true, // calculate bin size by binning count
        type: 'bin.rectangle',
        fields: ['x', 'y'], // 对应坐标轴上的一个点
        bins: [20, 10],
      });
      this.dv=dv;
    });
  },
  data() {
    return {
      dv: {}
    };
  }
};
</script>

