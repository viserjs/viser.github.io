<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip :crosshairs="false" :in-plot="false" :position="'top'" />
      <v-axis />
      <v-bar :position="'depth*count'" />
    </v-chart>
  </div>
</template>

<script>
  import * as $ from 'jquery';
  const DataSet = require('@antv/data-set');

  const scale = [{
    dataKey: 'depth',
    tickInterval: 4,
  }];

  export default {
    mounted() {
      $.getJSON('/data/diamond.json', (sourceData) => {
        const dv = new DataSet.View().source(sourceData);
        dv.transform({
          type: 'bin.histogram',
          field: 'depth',
          binWidth: 4,
          as: ['depth', 'count'],
        });
        this.$data.data = dv.rows;
      });
    },
    data() {
      return {
        data: [],
        scale,
        height: 400,
      };
    }
  };
</script>