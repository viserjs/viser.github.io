<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data">
      <v-tooltip :crosshairs="false" :in-plot="false" :position="'top'" />
      <v-axis />
      <v-legend />
      <v-stack-bar :position="'depth*count'" :color="'cut'" />
    </v-chart>
  </div>
</template>

<script>
  import * as $ from 'jquery';

  export default {
    mounted() {
      $.getJSON('/data/diamond.json', (sourceData) => {
        const dv = new DataSet.View().source(sourceData);
        dv.transform({
          type: 'bin.histogram',
          field: 'depth',
          binWidth: 1,
          groupBy: ['cut'],
          as: ['depth', 'count'],
        });
        this.$data.data = dv.rows;
      });
    },
    data() {
      return {
        data: [],
        height: 400,
      };
    }
  };
</script>