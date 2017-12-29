<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :dataPre="dataPre">
      <v-legend :offset="40" />
      <v-axis :data-key="axis1Opts.dataKey" :grid="axis1Opts.grid" />
      <v-tooltip :show-title="false" :crosshairs="false" />
      <v-polygon :position="seriesOpts.position" :color="seriesOpts.color" :v-style="seriesOpts.style" />
    </v-chart>
  </div>
</template>
<script>
import * as $ from 'jquery';
const dataPre = {
  transform: {
    sizeByCount: '$state.sizeEncoding', // calculate bin size by binning count
    type: 'bin.hexagon',
    fields: [ 'x', 'y' ], // 对应坐标轴上的一个点
    bins: [ 10, 5 ]
  }
};
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
    $.getJSON('/data/heatmap-7.json', (data) => {
      this.$data.data = data;
    });
  },
  data() {
    return {
      data: [],
      dataPre,
      height: 400,
      axis1Opts,
      seriesOpts,
    };
  },
};
</script>
