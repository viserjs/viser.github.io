<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data">
      <v-legend :offset="40" />
      <v-axis />
      <v-polygon :position="seriesOpts.position" :color="seriesOpts.color" />
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const seriesOpts = {
  quickType: 'polygon',
  color: ['count', '#BAE7FF-#1890FF-#0050B3'],
  position: 'x*y',
};

export default {
  mounted() {
    $.getJSON('/data/heatmap-2.json', (sourceData) => {
      const ds = new DataSet({
        state: {
          sizeEncoding: false
        }
      });

      const dv = ds.createView('diamond').source(sourceData);
      dv.transform({
        sizeByCount: '$state.sizeEncoding',
        type: 'bin.rectangle',
        fields: [ 'x', 'y' ],
        bins: [ 20, 10 ]
      });
      this.$data.data = dv;
    });
  },
  data() {
    return {
      data: [],
      height: 400,
      seriesOpts,
    };
  },
};
</script>
