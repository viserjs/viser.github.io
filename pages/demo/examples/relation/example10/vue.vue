<template>
  <div>
    <v-chart :forceFit="true" :height="400" :padding="padding">
      <v-coord type="polar" />
      <v-view :data="edgeSource">
        <v-edge position="x*y" shape="smooth" color="grey" :opacity="0.5" tooltip="source*target" />
      </v-view>
      <v-view :data="nodeSource">
        <v-point position="x*y" color="hasChildren" :label="label" />
      </v-view>
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const nodesLabel = [
  'name', {
    offset: 0,
    labelEmit: true,
    textStyle: (text, item) => {
      let textAlign = item.textAlign;
      if (item.point.hasChildren) {
        textAlign = textAlign === 'left' ? 'right' : 'left';
      }
      return {
        fill: 'grey',
        fontSize: 9,
        textAlign,
      };
    },
  },
];

export default {
  mounted() {
    $.getJSON('/assets/data/flare.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData, {
        type: 'hierarchy',
      });
      dv.transform({
        type: 'hierarchy.cluster',
      });

      this.$data.edgeSource = dv.getAllLinks().map(link => ({
          x: [ link.source.x, link.target.x ],
          y: [ link.source.y, link.target.y ],
          source: link.source.id,
          target: link.target.id
      }));

      this.$data.nodeSource = dv.getAllNodes().map(node => ({
        hasChildren: !!(node.data.children && node.data.children.length),
        name: node.data.name,
        value: node.value,
        depth: node.depth,
        x: node.x,
        y: node.y
      }));
    });
  },

  data() {
    return {
      edgeSource: [],
      nodeSource: [],
      padding: [ 60, 0, 40, 0 ],
      label: nodesLabel,
    };
  },
};
</script>