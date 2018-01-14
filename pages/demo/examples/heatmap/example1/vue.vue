<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :scale="scale">
      <v-legend />
      <v-tooltip />
      <v-axis :tickLine="axis1Opts.tickLine" :grid="axis1Opts.grid" />
      <v-axis :tickLine="axis2Opts.tickLine" :grid="axis2Opts.grid" />
      <v-polygon :position="seriesOpts.position" :color="seriesOpts.color" :label="seriesOpts.label" :v-style="seriesOpts.style" />
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';

const scale = [{
  dataKey: 'name',
  type: 'cat',
  values: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura'],
}, {
  dataKey: 'day',
  type: 'cat',
  values: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
}];

const axis1Opts = {
  dataKey: 'name',
  tickLine: null,
  grid: {
    align: 'center',
    lineStyle: {
      lineWidth: 1,
      lineDash: null,
      stroke: '#f0f0f0',
    },
  },
};

const axis2Opts = {
  dataKey: 'day',
  title: null,
  grid: {
    align: 'center',
    lineStyle: {
      lineWidth: 1,
      lineDash: null,
      stroke: '#f0f0f0',
    },
    showFirstLine: true,
  },
};

const seriesOpts = {
  quickType: 'polygon',
  color: ['sales', '#BAE7FF-#1890FF-#0050B3'],
  position: 'name*day',
  label: ['sales', {
    offset: -2,
    textStyle: {
      fill: '#fff',
      shadowBlur: 2,
      shadowColor: 'rgba(0, 0, 0, .45)',
    },
  }],
  style: {
    lineWidth: 1,
    stroke: '#fff',
  },
};

export default {
  mounted() {
    $.getJSON('/assets/data/heatmap-1.json', (data) => {
      const source = [];
      for (let i = 0; i < data.length; i ++) {
        const item = data[i];
        const obj = {};
        obj.name = item[0];
        obj.day = item[1];
        obj.sales = item[2];
        source.push(obj);
      }

      this.$data.data = source;
    });
  },
  data() {
    return {
      data: [],
      scale,
      height: 400,
      axis1Opts,
      axis2Opts,
      seriesOpts,
    };
  },
};
</script>
