<template>
  <div>
    <v-chart :force-fit="true" :height="500" :scale="scale" :padding="padding">
      <v-tooltip :show-title="false" />
      <v-view :view-id="1" :data="edgesData">
        <v-sankey :position="'x*y'" :color="'#bbb'" :opacity="0.6" :tooltip="tooltip" :v-style="sankeyStyle" />
      </v-view>
      <v-view :view-id="2" :data="nodesData">
        <v-polygon :position="'x*y'" :color="'name'" :v-style="polygonStyle" :label="polygonLabel" tooltip="false" />
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
  }, {
    dataKey: 'y',
    sync: true,
  }];

  const tooltip = [
    'target*source*value', (target, source, value) => ({
      name: source.name + ' to ' + target.name + '</span>',
      value,
    }),
  ];

  const polygonLabel = [
    'name', {
      textStyle: {
        fill: '#545454',
        textAlign: 'start',
      },
      offset: 0,
      formatter: val => {
        return '  ' + val;
      },
    }
  ];

  export default {
    mounted() {
      $.getJSON('/data/energy.json', (sourceData) => {
        const dv = new DataSet.View().source(sourceData, {
          type: 'graph',
          edges: d => d.links,
        });
        dv.transform({
          type: 'diagram.sankey',
          nodeWidth: 0.015,
          nodePadding: 0.02,
        });
        this.$data.edgesData = dv.edges;
        this.$data.nodesData = dv.nodes;
      });
    },
    data() {
      return {
        edgesData: [],
        nodesData: [],
        scale,
        padding: [40, 80],
        tooltip,
        polygonLabel,
        sankeyStyle: { curvature: 0.5 },
        polygonStyle: { stroke: '#ccc' },
      };
    },
  };
</script>