<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data">
      <v-legend :offset="40" />
      <v-axis :data-key="axis1Opts.dataKey" :grid="axis1Opts.grid" />
      <v-tooltip :show-title="false" :crosshairs="false" />
      <v-polygon :position="seriesOpts.position" :color="seriesOpts.color" :v-style="seriesOpts.style" />
    </v-chart>
  </div>
</template>
<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const axis1Opts = {
  dataKey: 'x',
  grid: {
    lineStyle: {
      stroke: '#d9d9d9',
      lineWidth: 1,
      lineDash: [ 2, 2 ]
    }
  }
};
const seriesOpts = {
  quickType: 'polygon',
  color: ['count', '#BAE7FF-#1890FF-#0050B3'],
  position: 'x*y',
  style: {
    lineWidth: 1,
    stroke: '#fff'
  }
};

export default {
  mounted() {
    $.getJSON('/assets/data/heatmap-7.json', (sourceData) => {
      const ds = new DataSet({
        state: {
          sizeEncoding: false
        }
      });
      const dv = ds.createView().source(sourceData);
      dv.transform({
        sizeByCount: '$state.sizeEncoding',
        type: 'bin.hexagon',
        fields: ['x', 'y'],
        bins: [10, 5],
      });
      this.$data.data = dv.rows;
    });
  },
  data() {
    return {
      data: [],
      height: 400,
      axis1Opts,
      seriesOpts,
    };
  },
};
</script>
