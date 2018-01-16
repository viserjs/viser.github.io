<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip :crosshairs="tooltipOpts.crosshairs" />
      <v-axis data-key="mean" :show="false" />
      <v-axis data-key="stockRange" :show="false" />
      <v-area position="date*range" />
      <v-candle position="date*stockRange" :color="color" tooltip="start*end*highest*lowest" />
      <v-line position="date*mean" color="#FACC14" />
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'date',
  type: 'time',
  nice: false,
  mask: 'MM-DD',
  tickCount: 10,
}, {
  dataKey: 'range',
  min: 20,
  max: 35,
  nice: false,
  tickInterval: 2,
}, {
  dataKey: 'mean',
  min: 20,
  max: 35,
  nice: false,
}, {
  dataKey: 'stockRange',
  min: 20,
  max: 35,
  nice: false,
}];

const tooltipOpts = {
  crosshairs: {
    type: 'line',
  },
};

const color = ['trend', val => {
  if (val === 'up') {
    return '#f04864';
  }

  if (val === 'down') {
    return '#2fc25b';
  }
}];

export default {
  mounted() {
    $.getJSON('/assets/data/stock-2.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData);
      dv.transform({
        type: 'map',
        callback: (obj) => {
          obj.stockRange = [obj.start, obj.end, obj.highest, obj.lowest];
          return obj;
        }
      });
      this.$data.data = dv.rows;
    });
  },
  data() {
    return {
      height: 400,
      data: [],
      scale,
      tooltipOpts,
      color,
    };
  },
};
</script>
