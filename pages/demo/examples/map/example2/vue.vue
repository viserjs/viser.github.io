<template>
  <div v-if="data">
    <v-chart :force-fit="true" height="400" :padding="[20, 20]" :scale="scale">
      <v-tooltip :show-title="false" />
      <v-legend data-key="trend" position="left" />
      <v-view :data="data" :scale="userDataScale">
        <v-polygon :position="view2Opts.position" :opacity="view2Opts.opacity" :color="view2Opts.color" :animate="view2Opts.animate" :tooltip="view2Opts.tooltip" />
      </v-view>
      <v-view :data="geoData" :scale="scale">
        <v-polygon :position="view1Opts.position" :v-style="view1Opts.style" :tooltip="view1Opts.tooltip" />
      </v-view>
    </v-chart>
  </div>
  <div v-else>
    Loading ...
  </div>
</template>

<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'longitude',
  sync: true,
}, {
  dataKey: 'latitude',
  sync: true,
}];

const userDataScale = [{
  dataKey: 'trend',
  alias: '每100位女性对应的男性数量',
}];

const view1Opts = {
  quickType: 'polygon',
  position: 'longitude*latitude',
  style: {
    fill: '#fff',
    stroke: '#ccc',
    lineWidth: 1
  },
  tooltip: false,
};

const view2Opts = {
  quickType: 'polygon',
  position: 'longitude*latitude',
  opacity: 'value',
  color: ['trend', [ '#F51D27', '#0A61D7' ]],
  tooltip: 'name*trend',
  animate: {
    leave: {
      animation: 'fadeOut'
    }
  },
};

export default {
  mounted() {
    $.when(
      $.getJSON('/assets/data/worldGeo.json'),
      $.getJSON('/assets/data/map-2.json')
    ).then((geoData, data) => {
      const worldMap = new DataSet.View().source(geoData[0], {
        type: 'GeoJSON',
      });

      const userDv = new DataSet.View().source(data[0]).transform({
        geoDataView: worldMap,
        field: 'name',
        type: 'geo.region',
        as: ['longitude', 'latitude'],
      }).transform({
        type: 'map',
        callback: (obj) => {
          obj.trend = (obj.value > 100) ? '男性更多' : '女性更多';
          return obj;
        }
      });

      this.$data.geoData = worldMap;
      this.$data.data = userDv;
    });
  },
  data() {
    return {
      data: [],
      geoData: [],
      scale,
      userDataScale,
      view1Opts,
      view2Opts,
    };
  },
};
</script>
