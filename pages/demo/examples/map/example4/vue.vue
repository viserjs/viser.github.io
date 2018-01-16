<template>
  <div>
    <v-chart :force-fit="true" :height="400" :padding="20" :scale="scale">
      <v-tooltip :show-title="false" />
      <v-coord/>
      <v-view :data="bgData">
        <v-polygon :position="'x*y'" :color="'grey'" :opacity="0.5"
          :v-style="{
            stroke: 'white',
            lineWidth: 1
          }" :tooltip="'key'"
        />
      </v-view>
      <v-view :data="data">
        <v-polygon :position="'x*y'" :color="'#2FC25B'"
          :v-style="{
            stroke: 'white',
            lineWidth: 5
          }"
          :label="['key', {
            offset: 0,
            textStyle: {
                fontSize: 14,
                fontWeight: 500
            }
          }]"
          :tooltip="'capital'" />
      </v-view>
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'x',
  nice: false,
  sync: true
}, {
  dataKey: 'y',
  nice: false,
  sync: true
}];

export default {
  mounted() {
    $.getJSON('/assets/data/us-states.hex.json', (data) => {
      const dv = new DataSet.View().source(data, {
          type: 'hex',
          width: 100,
          height: 100,
      });
      this.$data.bgData = dv._gridRows;
      this.$data.data = dv;
    });
  },
  data() {
    return {
      bgData: [],
      data: [],
      scale,
    };
  },
};
</script>
