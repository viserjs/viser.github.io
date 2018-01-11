<template>
  <div>
    <v-chart :force-fit="true" :height="500" :data="data" :data-view="dataView" :padding="0">
      <v-tooltip :show-title="false" />
      <v-coord :type="'polar'" :inner-radius="0.3" />
      <v-polygon :position="'x*y'" :color="color" :active="false" :style="style" :tooltip="'label*sum'" />
    </v-chart>
  </div>
</template>

<script>
  import * as $ from 'jquery';
  const DataSet = require('@antv/data-set');

  const dataView = [
    'nodes', nodes => {
      const source = [];
      nodes.map((node) => {
        if (node.depth === 0) {
          return;
        }
        const obj = {};
        obj.label = node.data.label;
        obj.sum = node.data.sum;
        obj.uv = node.data.uv;
        obj.value = node.value;
        obj.x = node.x;
        obj.y = node.y;
        source.push(obj);
        return node;
      });
      return source;
    },
  ];

  const style = {
    stroke: '#FFF',
    lineWidth: 1,
  };

  const color = ['value', '#BAE7FF-#1890FF-#0050B3'];

  export default {
    mounted() {
      $.getJSON('/data/sunburst.json', (sourceData) => {
        const dv = new DataSet.View().source(sourceData, {
          type: 'hierarchy',
        });
        dv.transform({
          type: 'hierarchy.partition',
          field: 'sum',
          as: ['x', 'y'],
        });
        this.$data.data = dv.rows;
      });
    },
    data() {
      return {
        data: {},
        dataView,
        style,
        color,
      };
    },
  };
</script>