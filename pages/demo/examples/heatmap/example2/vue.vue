<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :dataPre="dataPre">
      <v-legend :offset="40"/>
      <v-axis />
      <v-polygon :position="seriesOpts.position" :color="seriesOpts.color"/>
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';

const dataPre = {
  transform: {
    sizeByCount: '$state.sizeEncoding', // calculate bin size by binning count
    type: 'bin.rectangle',
    fields: [ 'x', 'y' ], // 对应坐标轴上的一个点
    bins: [ 20, 10 ]
  }
};

const seriesOpts = {
  quickType: 'polygon',
  color: ['count', '#BAE7FF-#1890FF-#0050B3'],
  position: 'x*y',
};

export default {
  mounted() {
    $.getJSON('/data/heatmap-2.json', (data) => {
      this.$data.data = data;
    });
  },
  data() {
    return {
      data: [],
      dataPre,
      height: 400,
      seriesOpts,
    };
  },
};
</script>
