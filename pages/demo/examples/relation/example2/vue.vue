<template>
  <div>
    <v-chart :force-fit="true" height="400">
      <v-tooltip :show-title="false" />
      <v-view :data="edgesData">
        <v-coord type="polar" direction="yReverse" />
        <v-edge position="x*y" shape="arc" color="source" opacity="0.5" tooltip="source*target" />
      </v-view>
      <v-view :data="nodesData">
        <v-coord type="polar" direction="yReverse" />
        <v-point position="x*y" size="value" color="id" opacity="0.5" :v-style="style" :label="label" />
      </v-view>
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const label = ['name', {
  labelEmit: true,
}];

const style = {
  stroke: 'grey'
};

export default {
  mounted() {
    $.getJSON('/assets/data/relationship-with-weight.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData, {
        type: 'graph',
        edges: d => d.links,
      });
      dv.transform({
        type: 'diagram.arc',
        marginRatio: 0.5,
      });
      this.$data.edgesData = dv.edges;
      this.$data.nodesData = dv.nodes;
    });
  },
  data() {
    return {
      edgesData: [],
      nodesData: [],
      style,
      label,
    };
  },
};
</script>