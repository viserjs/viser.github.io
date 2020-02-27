<template>
  <div>
    <v-chart :height="400" :width="400" :data="data" :padding="0">
      <v-tooltip :showTitle="false" />
      <v-point position="x*y" shape="circle" tooltip="name" 
        :size="size"
        :color="color"
        :vStyle="style"
        :label="label" />
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const nodesLabel = [
  'name', {
    offset: 0,
    textStyle: (text, item) => {
      if (item.point.hasChildren) {
        return {
          opacity: 0
        };
      }
      return {
        textBaseline: 'middle',
        fill: 'grey',
        fontSize: 9,
        textAlign: 'center'
      };
    }
  },
];

export default {
  mounted() {
    $.getJSON('/assets/data/flare.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData, {
        type: 'hierarchy',
      });
      dv.transform({
        type: 'hierarchy.circle-packing',
      });

      this.$data.data = dv.getAllNodes().map(node => ({
        hasChildren: !!(node.data.children && node.data.children.length),
        name: node.data.name.split(/(?=[A-Z][^A-Z])/g).join('\n'),
        value: node.value,
        depth: node.depth,
        x: node.x,
        y: node.y,
        r: node.r
      }));
    });
  },

  data() {
    return {
      data: [],
      padding: [ 60, 0, 40, 0 ],
      label: nodesLabel,
      size:['r', r => r * 400],
      style:{ stroke: 'rgb(183, 55, 121)' },
      color:['r', 'rgb(252, 253, 191)-rgb(231, 82, 99)-rgb(183, 55, 121)']
    };
  },
};
</script>