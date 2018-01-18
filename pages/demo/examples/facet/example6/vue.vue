<template>
  <div>
    <v-chart :force-fit="true" :height="400" :data="data" :scale="scale">
      <v-tooltip :crosshairs="false" />
      <v-legend data-key="cut" position="top" />
      <v-axis data-key="cut" :label="null" :tick-line="null" />
      <v-facet type="tree" :fields="['clarity']" :line="{ stroke: '#c0d0e0' }" :line-smooth="true" :views="views" />
    </v-chart>
  </div>
</template>

<script>
  import * as $ from 'jquery';
  const DataSet = require('@antv/data-set');
  const { DataView } = DataSet;

  const scale = [{
    dataKey: 'mean',
    tickCount: 5,
    sync: true,
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
    mounted() {
      $.getJSON('/assets/data/diamond.json', (data) => {
        this.$data.data = data;
      });
    },
    data() {
      return {
        data: [],
        scale,
        views,
      };
    },
  };
</script>
