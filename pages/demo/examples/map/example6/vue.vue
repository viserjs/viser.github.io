<template>
  <div>
    <v-chart :forceFit="true" :height="400" :padding="[0, 20, 0]" :scale="scale">
      <v-view :data="geoData" :scale="scale">
        <v-polygon position="longitude*latitude" color="gray" :label="['name', {offset: 0}]" />
      </v-view>
      <v-view :data="data">
        <v-heatmap :position="'longitude*latitude'" :size="18"
          :color="['value', '#F51D27-#FA541C-#FF8C12-#FFC838-#FAFFA8-#80FF73-#12CCCC-#1890FF-#6E32C2']"
          :vStyle="{
            blur: 23,
          }" />
      </v-view>
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'latitude',
  sync: true,
  nice: false,
}, {
  dataKey: 'longitude',
  sync: true,
  nice: false,
}];

export default {
  mounted() {
    $.getJSON('/assets/data/usa.geo.json').then((geoData) => {
      const userData = [];
      const geoDv = new DataSet.View().source(geoData, {
          type: 'GeoJSON'
      }).transform({
          type: 'map',
          callback(row) {
              userData.push({
                  longitude: row.centroidX,
                  latitude: row.centroidY,
                  name: row.name,
                  value: Math.random() * (1000 - 1)
              });
              return row;
          }
      });

      this.$data.geoData = geoDv;
      this.$data.data = userData;
    });
  },
  data() {
    return {
      data: [],
      geoData: {},
      scale,
    };
  },
};
</script>
