<template>
  <div>
    <v-chart forceFit="true" :height="400" :padding="10" :data="data">
      <v-tooltip showTitle="false"/>
      <v-polygon position="x*y" color="category" :v-style="{
        stroke: 'white',
        lineWidth: 2
      }" :label="['symbol', {
        offset: 0,
        textStyle: {
          fontSize: 14,
          fontWeight: 500
        }
      }]" :tooltip="'symbol*name*number*atomic_mass*category'"/>
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

export default {
  mounted() {
    $.getJSON('/assets/data/periodic-table.hex.json', (data) => {
      const dv = new DataSet.View().source(data, {
        type: 'hex'
      });
      this.$data.data = dv;
    })
  },
  data() {
    return {
      height: 400,
      data: [],
    };
  }
};
</script>
