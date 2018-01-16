<template>
  <div>
    <v-chart force-fit="true" height="500" :scale="scale">
      <v-view :data="edgesData">
        <v-coord type="polar" direction="yReverse" />
        <v-edge position="x*y" color="source" shape="arc" opacity="0.5" tooltip="source*target*value" />
      </v-view>
      <v-view :data="nodesData">
        <v-coord type="polar" direction="yReverse" />
        <v-polygon position="x*y" color="id" :label="label" />
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

const label = ['name', {
  labelEmit: true,
  textStyle: {
    fill: '#8c8c8c',
  },
}];

export default {
  mounted() {
    $.getJSON('/assets/data/relationship-with-weight.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData, {
        type: 'graph',
        edges: d => d.links,
      });
      dv.transform({
        type: 'diagram.arc',
        sourceWeight: e => e.sourceWeight,
        targetWeight: e => e.targetWeight,
        weight: true,
        marginRatio: 0.3,
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
      label,
    };
  },
};
</script>

<style scoped>

</style>
