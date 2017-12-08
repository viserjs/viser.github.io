<template>
  <div>
    <v-chart :force-fit="true" :height="500" :data="data" :data-pre="dataPre" :data-view="dataView" :padding="0">
      <v-tooltip :show-title="false" />
      <v-polygon :position="'x*y'" :color="'name'" />
    </v-chart>
  </div>
</template>

<script>
  import { data } from './data';

  const dataPre = {
    connector: {
      type: 'hierarchy',
    },
    transform: {
      type: 'hierarchy.partition',
    },
  };

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
    data() {
      return {
        data,
        dataPre,
        dataView,
      };
    },
  };
</script>