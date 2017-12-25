<template>
  <div v-if="data.length">
    <v-chart :force-fit="true" :height="600" :padding="[55, 20]" :data-pre="bgDataPre" :data="geoData" :scale="scale">
      <v-tooltip :show-title="false"/>
      <v-legend :data-key="'trend'" :position="'left'"/>
      <v-view :view-id="'111'" :data="geoData" :data-pre="bgDataPre" :scale="scale">
        <v-polygon :position="view1Opts.position" :v-style="view1Opts.style" :tooltip="view1Opts.tooltip"/>
      </v-view>
      <v-view :view-id="'122'" :data="data" :data-pre="userDataPre" :scale="userDataScale">
        <v-polygon :position="view2Opts.position" :opacity="view2Opts.opacity" :color="view2Opts.color" :animate="view2Opts.animate" :tooltip="view2Opts.tooltip"/>
      </v-view>
    </v-chart>
  </div>
  <div v-else>
    Loading ...
  </div>
</template>

<script>
import * as $ from 'jquery';

const scale = [{
  dataKey: 'longitude',
  sync: true,
}, {
  dataKey: 'latitude',
  sync: true,
}];

const bgDataPre = {
  connector: {
    type: 'GeoJSON'
  }
};

const userDataPre = (dv) => {
  const geo = dv['111'];
  return {
    transform: [{
      geoDataView: geo,
      field: 'name',
      type: 'geo.region',
      as: [ 'longitude', 'latitude' ],
    },
    {
      type: 'map',
      callback: function(obj) {
        obj.trend = (obj.value > 100) ? '男性更多' : '女性更多';
        return obj;
      }
    }
    ],
  };
};

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
    $.when($.getJSON('/data/worldGeo.json'),$.getJSON('/data/map-2.json')).then((geoData, data) => {
      this.$data.geoData = geoData[0];
      this.$data.data = data[0];
    });
  },
  data() {
    return {
      data: [],
      geoData: {},
      scale,
      bgDataPre,
      userDataPre,
      userDataScale,
      view1Opts,
      view2Opts,
    };
  },
};
</script>
