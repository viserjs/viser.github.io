<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :data-pre="dataPre" :scale="scale">
      <v-tooltip :crosshairs="false" :in-plot="false" :position="'top'" />
      <v-axis />
      <v-bar :position="'depth*count'" />
    </v-chart>
  </div>
</template>

<script>
  import * as $ from 'jquery';

  const dataPre = {
    transform: {
      type: 'bin.histogram',
      field: 'depth',
      binWidth: 4,
      as: ['depth', 'count'],
    },
  };

  const scale = [{
    dataKey: 'depth',
    tickInterval: 4,
  }];

  export default {
    mounted() {
      $.getJSON('/data/diamond.json', (data) => {
        this.$data.data = data;
      });
    },
    data() {
      return {
        data: [],
        dataPre,
        scale,
        height: 400,
      };
    }
  };
</script>