<template>
  <div>
    <v-chart :force-fit="true" :height="height" :padding="[ 40, 100, 80, 80 ]" :data="data" :scale="scale">
      <v-tooltip />
      <v-coord type="polar" />
      <v-axis :data-key="axis1Opts.dataKey" :grid="axis1Opts.grid" />
      <v-jitter-point :position="jitterPointOpts.position" :color="jitterPointOpts.color" :shape="jitterPointOpts.shape" :opacity="jitterPointOpts.opacity" />
    </v-chart>
  </div>
</template>
<script>
import * as $ from 'jquery';

const scale = [{
  dataKey: 'type',
  range: [0, 1]
}];

const axis1Opts = {
  dataKey: 'clarity',
  grid: {
    align: 'center',
    lineStyle: {
      lineDash: [0, 0]
    }
  }
};

const jitterPointOpts = {
  position: 'clarity*type',
  color: 'clarity',
  shape: 'circle',
  opacity: 0.65,
};

export default {
  mounted() {
    $.getJSON('/assets/data/diamond.json', (data) => {
      data.forEach((obj) => {
        obj.type = '1';
      });
      this.$data.data = data;
    });
  },

  data() {
    return {
      data: [],
      scale,
      height: 400,
      axis1Opts,
      jitterPointOpts,
    };
  }
};
</script>
