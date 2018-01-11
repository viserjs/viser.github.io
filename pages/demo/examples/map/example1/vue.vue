<template>
  <div v-if="data">
    <v-chart :force-fit="true" :height="600" :padding="[0, 20, 40]" :data="geoData" :scale="scale">
      <v-coord :type="'rect'" :direction="'TL'"/>
      <v-tooltip :show-title="tooltipOpts.showTitle" :container-tpl="tooltipOpts.containerTpl" :item-tpl="tooltipOpts.itemTpl" :g2-tooltip="tooltipOpts.g2Tooltip"/>
      <v-view :data="geoData" :scale="scale">
        <v-polygon :position="view1Opts.position" :v-style="view1Opts.style" :tooltip="view1Opts.tooltip"/>
      </v-view>
      <v-view :data="data" >
        <v-point :position="view2Opts.position" :size="view2Opts.size" :opacity="view2Opts.opacity" :color="view2Opts.color" :tooltip="view2Opts.tooltip"/>
      </v-view>
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'x',
  sync: true,
  nice: false,
}, {
  dataKey: 'y',
  sync: true,
  nice: false,
}];

const tooltipOpts = {
  showTitle: false,
  containerTpl: '<div class="g2-tooltip">'
    + '<table class="g2-tooltip-list"></table></div>',
  itemTpl: '<tr data-index={index}><td style="padding: 5px; background-color:#545454">{name}</td><td style="padding: 5px; background-color:#fff;color: #000">{value}</td></tr>',
  g2Tooltip: {
    borderRadius: '2px',
    backgroundColor: '#DDDDDD',
    padding: 0,
    border: '1px solid #333'
  }
};

const view1Opts = {
  quickType: 'polygon',
  position: 'x*y',
  style: {
    fill: '#DDDDDD',
    stroke: '#fff',
    lineWidth: 0.5,
    fillOpacity: 0.85,
  },
  tooltip: false,
};
const view2Opts = {
  quickType: 'point',
  position: 'x*y',
  size: ['deaths', [2, 30]],
  opacity: 0.45,
  color: '#FF2F29',
  tooltip: 'date*location*lat*lng*deaths*magnitude',
};

export default {
  mounted() {
    $.when($.getJSON('/data/worldGeo.json'),$.getJSON('/data/map-1.json')).then((geoData, data) => {
      const dv = new DataSet.View().source(geoData[0], {
          type: 'GeoJSON'
      }).transform({
        type: 'geo.projection',
        projection: 'geoMercator',
        as: ['x', 'y', 'centroidX', 'centroidY'],
      });

      const userData = new DataSet.View().source(data[0]).transform({
        type: 'map',
        callback: (obj) => {
          const projectedCoord = dv.geoProjectPosition([obj.lng * 1, obj.lat * 1], 'geoMercator');
          obj.x = projectedCoord[0];
          obj.y = projectedCoord[1];
          obj.deaths = obj.deaths * 1;
          obj.magnitude = obj.magnitude * 1;
          return obj;
        }
      });

      this.$data.geoData = dv;
      this.$data.data = userData;
    });
  },
  data() {
    return {
      data: null,
      geoData: {},
      scale,
      tooltipOpts,
      view1Opts,
      view2Opts,
    };
  },
};
</script>
