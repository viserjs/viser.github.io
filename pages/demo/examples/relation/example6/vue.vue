<template>
  <div>
    <v-chart :force-fit="true" :height="500" :data="data" :data-view="dataView" :padding="0">
      <v-tooltip :show-title="false" />
      <v-polygon :position="'x*y'" :color="'name'" />
    </v-chart>
  </div>
</template>

<script>
  import * as $ from 'jquery';
  const DataSet = require('@antv/data-set');

  const dataView = [
    'nodes', nodes => {
      return nodes.map(node => ({
        name: node.data.name,
        value: node.value,
        depth: node.depth,
        x: node.x,
        y: node.y,
      }));
    },
  ];

  export default {
    mounted() {
      $.getJSON('/data/flare.json', (sourceData) => {
        const dv = new DataSet.View().source(sourceData, {
          type: 'hierarchy',
        });
        dv.transform({
          type: 'hierarchy.partition',
        });
        this.$data.data = dv.rows;
      });
    },
    data() {
      return {
        data: {},
        dataView,
      };
    },
  };
</script>