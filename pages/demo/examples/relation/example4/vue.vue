<template>
  <div>
    <v-chart :force-fit="true" :height="500" :data="data" :data-pre="dataPre" :scale="scale" :padding="padding">
      <v-tooltip :show-title="false" />
      <v-view :view-id="1" :data-view="'edges'">
        <v-sankey :position="'x*y'" :color="'#bbb'" :opacity="0.6" :tooltip="tooltip" :v-style="sankeyStyle" />
      </v-view>
      <v-view :view-id="2" :data-view="'nodes'">
        <v-polygon :position="'x*y'" :color="'name'" :style="polygonStyle" :label="polygonLabel" tooltip="false" />
      </v-view>
    </v-chart>
  </div>
</template>

<script>
  import { data } from './data';

  const dataPre = {
    connector: {
      type: 'graph',
      edges: d => d.links,
    },
    transform: {
      type: 'diagram.sankey',
      nodeWidth: 0.015,
      nodePadding: 0.02,
    },
  };

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
    data() {
      return {
        data,
        dataPre,
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