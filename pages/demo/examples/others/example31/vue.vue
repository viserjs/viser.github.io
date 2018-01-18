<template>
  <div>
    <v-chart :force-fit="true" :animate="false" :height="height" :padding="[20, 140, 60, 50]" :data="data" :scale="scale" >
      <v-legend :position="legendOpts.position" :use-html="legendOpts.useHtml" :legend-marker="legendOpts.legendMarker"/>
      <v-axis :data-key="axisOpts.dataKey" :line="axisOpts.line" :tick-line="axisOpts.tickLine" :grid="axisOpts.grid"/>
      <v-area position="year*count" :adjust="['stack', 'symmetric']" color="name" :opacity="1"/>
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'year',
  tickInterval: 10
}];

const legendOpts = {
  useHtml: true,
  position: "right",
  legendMarker: {
    'g2-legend-marker': {
      borderRadius: 'none'
    },
    'g2-legend-title': {
      fontSize: '12px',
      fontWeight: 500,
      margin: 0,
      color: '#ff8800'
    }
  }
};

const axisOpts = {
  dataKey: 'count',
  line: {
    lineWidth: 1,
    stroke: '#BFBFBF'
  },
  tickLine: {
    length: 8,
    stroke: '#ddd'
  },
  grid: null
};

export default {
  mounted() {
    $.getJSON('/assets/data/baby-names.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData)
        .transform({
          type: 'fill-rows',
          groupBy: [ 'name' ],
          orderBy: [ 'year' ]
        })
        .transform({
          type: 'impute',
          field: 'n',
          method: 'value',
          value: 0
        })
        .transform({
          type: 'aggregate',
          fields: [ 'n' ],
          operations: [ 'sum' ],
          groupBy: [ 'year', 'name' ],
          orderBy: [ 'year' ],
          as: [ 'count' ]
        });
      this.$data.data = dv;
    });
  },
  data() {
    return {
      data: [],
      scale,
      height: 400,
      legendOpts,
      axisOpts,
    };
  }
};
</script>
