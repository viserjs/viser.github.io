<template>
  <div v-if="!$.isEmptyObject(themeData)">
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale" :padding="padding">
      <v-tooltip :showTitle="false" dataKey="item*percent" />
      <v-axis />
      <v-legend dataKey="item" />
      <v-pie position="percent" color="item" :v-style="pieStyle" :label="labelConfig" />
      <v-coord type="theta" />
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');
  import * as $ from 'jquery';
  import { Global } from 'viser-vue';

  const sourceData = [
    { item: '事例一', count: 40 },
    { item: '事例二', count: 21 },
    { item: '事例三', count: 17 },
    { item: '事例四', count: 13 },
    { item: '事例五', count: 9 }
  ];

  const scale = [{
    dataKey: 'percent',
    min: 0,
    formatter: '.0%',
  }];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'percent',
    field: 'count',
    dimension: 'item',
    as: 'percent'
  });
  const data = dv.rows;

  export default {
    mounted(){
      $.getJSON('/assets/data/demo-theme.json',data=>{
        Global.setTheme(data);
        this.$data.themeData = data;
      });
    },
    data() {
      return {
        data,
        themeData: {},
        scale,
        height: 400,
        padding: [40, 20, 40, 20],
        pieStyle: {
          stroke: "#fff",
          lineWidth: 1
        },
        labelConfig: ['percent', {
          formatter: (val, item) => {
            return item.point.item + ': ' + val;
          }
        }],
      };
    }
  };
</script>
