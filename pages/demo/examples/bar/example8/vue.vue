<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :data-pre="dataPre">
      <v-tooltip :crosshairs="false" :in-plot="false" :position="'top'" />
      <v-axis />
      <v-legend />
      <v-stack-bar :position="'depth*count'" :color="'cut'" />
    </v-chart>
  </div>
</template>

<script>
  import * as $ from 'jquery';

  const dataPre = {
    transform: {
      type: 'bin.histogram',
      field: 'depth',
      binWidth: 1,
      groupBy: ['cut'],
      as: ['depth', 'count'],
    },
  };

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
        height: 400,
      };
    }
  };
</script>