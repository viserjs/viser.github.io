<template>
  <div>
    <v-chart :forceFit="true" height="500" :data="data" padding="0">
      <v-tooltip :showTitle="false" />
      <v-coord type="polar" :innerRadius="0.3" />
      <v-polygon position="x*y" :color="color" active="false" :vStyle="style" tooltip="label*sum" />
    </v-chart>
  </div>
</template>

<script>
  import * as $ from 'jquery';
  const DataSet = require('@antv/data-set');

  const style = {
    stroke: '#FFF',
    lineWidth: 1,
  };

  const color = ['value', '#BAE7FF-#1890FF-#0050B3'];

  export default {
    mounted() {
      $.getJSON('/assets/data/sunburst.json', (sourceData) => {
        const dv = new DataSet.View().source(sourceData, {
          type: 'hierarchy',
        });
        dv.transform({
          type: 'hierarchy.partition',
          field: 'sum',
          as: ['x', 'y'],
        });
        this.$data.data = dv.getAllNodes().filter((node) => {
          return node.depth !== 0;
        }).map((node) => {
          return {
            label: node.data.label,
            sum: node.data.sum,
            uv: node.data.uv,
            value: node.value,
            x: node.x,
            y: node.y,
          };
        });
      });
    },
    data() {
      return {
        data: {},
        style,
        color,
      };
    },
  };
</script>