<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data-pre="dataPre" :data="data" :scale="scale">
      <v-tooltip :crosshairs="tooltipOpts.crosshairs"/>
      <v-axis :data-key="'mean'" :show="false"/>
      <v-axis :data-key="'stockRange'" :show="false"/>
      <v-area :position="'date*range'" />
      <v-candle :position="'date*stockRange'" :color="color" :tooltip="'start*end*highest*lowest'"/>
      <v-line :position="'date*mean'" :color="'#FACC14'"/>
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';

const scale = [{
  dataKey: 'date',
  type: 'time',
  nice: false,
  mask: 'MM-DD',
  tickCount: 10
}, {
  dataKey: 'range',
  min: 20,
  max: 35,
  nice: false,
  tickInterval: 2
}, {
  dataKey: 'mean',
  min: 20,
  max: 35,
  nice: false
}, {
  dataKey: 'stockRange',
  min: 20,
  max: 35,
  nice: false
}];

const dataPre = {
  transform: [{
    type: 'map',
    callback: obj => {
      obj.stockRange = [ obj.start, obj.end, obj.highest, obj.lowest ];
      return obj;
    }
  }]
};

const tooltipOpts = {
  crosshairs: {
    type: 'line'
  }
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
    $.getJSON('/data/stock-2.json', (data) => {
      this.$data.data = data;
    });
  },
  data() {
    return {
      height: 600,
      data: [],
      scale,
      dataPre,
      tooltipOpts,
      color,
    };
  },
};
</script>
