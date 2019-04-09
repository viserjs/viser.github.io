<template>
    <v-chart :forceFit="true" :height="window.innerHeight" :data="worldMap" :padding="[55,20]">
      <v-legend dataKey="trend" position="left"></v-legend>
      <v-polygon 
        position="longitude*latitude"
        :label="label"
        :vStyle="style"
      >
      </v-polygon>
    </v-chart>
</template>

<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');


export default {
  mounted() {
    $.getJSON('/assets/data/world.geo.json', mapData => {
      const worldMap = new DataSet.View().source(mapData, {
          type: 'GeoJSON'
      });
      this.$data.worldMap = worldMap;
    });
  },
  data() {
    return {
      worldMap: [],
      label:[
        'name',
        {
          type:'map',
          offset:0,
          textStyle:{
            fill:'black',
            stroke:'#fff',
            lineWidth:2
          }
        }
      ],
      style:{
        fill:'#ced4d9',
        stroke:'#f2f4f5',
        lineWidth:0.5
      }
    };
  }
};

</script>
