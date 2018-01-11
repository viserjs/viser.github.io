<template>
  <div>
    <v-chart :force-fit="true" :height="600" :data="data" :scale="scale">
      <v-tooltip />
      <v-legend />
      <v-coord :type="'polar'" />
      <v-facet :type="'circle'" :fields="['clarity']" :views="views"></v-facet>
    </v-chart>
  </div>
</template>

<script>
  import { data } from "./data";
  const DataSet = require('@antv/data-set');
  const { DataView } = DataSet;

  const scale = [{
    dataKey: 'mean',
    sync: true
  }, {
    dataKey: 'cut',
    sync: true,
  }];

  const views = (view, facet) => {
    const data = facet.data;
    const dv = new DataView();
    dv.source(data).transform({
      type: 'aggregate',
      fields: ['price'],
      operations: ['mean'],
      as: ['mean'],
      groupBy: ['cut']
    });

    return {
      data: dv,
      series: {
        quickType: 'bar',
        position: 'cut*mean',
        color: 'cut',
      }
    }
  }

  export default {
    data() {
      return {
        data,
        scale,
        views,
      };
    },
  };
</script>
