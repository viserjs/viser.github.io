<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data" :data-pre="dataPre" :scale="scale">
      <v-tooltip :crosshairs="tooltipOpts.crosshairs"/>
      <v-axis />
      <v-legend :marker="'circle'" />
      <v-box :position="'type*_bin'" :adjust="'dodge'" :vStyle="seriesStyle" :color="seriesColor" />
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
const dataPre = {
  transform: [{
      type: 'fold',
      fields: ['SepalLength','SepalWidth','PetalLength','PetalWidth'],
      key: 'type',
      value: 'value'
  }, {
      type: 'bin.quantile',
      field: 'value',
      as: '_bin',
      groupBy: ['Species', 'type'],
  }]
};

const scale = [{
  dataKey: 'range',
  min: 0,
  max: 240000,
}, {
  dataKey: 'outliers',
  min: 0,
  max: 240000,
}];

const colorMap = {
  'I. setosa': 'red',
  'I. versicolor': 'blue',
  'I. virginica': 'green'
};

const tooltipOpts = {
  crosshairs: {
    type: 'rect',
  },
};

const seriesColor = ['Species', val => {
  return colorMap[val];
}];

const seriesStyle = ['Species', {
  stroke: '#545454',
  fill: val => {
    return colorMap[val];
  },
  fillOpacity: 0.3
}];

export default {
  mounted() {
    $.getJSON('/data/box-3.json', (data) => {
      this.$data.data = data;
    });
  },
  data() {
    return {
      data: [],
      dataPre,
      scale,
      height: 400,
      colorMap,
      tooltipOpts,
      seriesColor,
      seriesStyle,
    };
  },
};
</script>
