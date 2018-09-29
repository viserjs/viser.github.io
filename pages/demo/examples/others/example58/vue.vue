<template>
  <div v-if="Object.keys(graph).length">
    <v-chart
      :forceFit="true"
      height="400"
      :scale="scale"
    >
      <v-tooltip :showTitle="false"></v-tooltip>
      <v-view :data="dv.edges">
        <v-sankey position="x*y" shape="arc" color="#bbb" opacity="0.6" tooltip="value"></v-sankey>
      </v-view>
      <v-view :data="dv.nodes">
        <v-polygon position="x*y" color="name" :v-style="{stroke:'#ccc'}"></v-polygon>
      </v-view>
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
const DataSet=require('@antv/data-set');

export default {
  mounted(){
    $.getJSON('/assets/data/energy.json',data=>{
      const edges = data.links;
      const graph = {
        nodes: [],
        edges: edges
      };
      const nodeById = {};

      function addNode(id) {
        if (!nodeById[id]) {
          const node = {
            id: id,
            name: id
          };
          nodeById[id] = node;
          graph.nodes.push(node);
        }
      }

      edges.forEach(function(edge) {
        addNode(edge.source);
        addNode(edge.target);
      });
      this.$data.graph=graph;
      this.$data.dv=this.getData();
    });
  },
  methods:{
    getData(){
      const { graph }=this;
      const dv = new DataSet.View().source(graph, {
        type: 'graph'
      });
      dv.transform({
        type: 'diagram.sankey',
        nodeId: function nodeId(node) {
          return node.id;
        },
        nodeAlign: 'sankeyLeft',  // change nodeAlign  , available option sankeyLeft / sankeyRight / sankeyCenter / sankeyJustify
      });
      return dv;
    },
  },
  data() {
    return {
      graph:{},
      scale:[
        {
          dataKey:'x',
          sync:true
        },
        {
          dataKey:'y',
          sync:true
        }
      ],
      dv:{}
    };
  }
};
</script>

