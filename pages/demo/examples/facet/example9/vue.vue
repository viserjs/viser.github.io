<template>
  <div>
    <v-chart :forceFit="true" :height="400" :data="data">
      <v-tooltip />
      <v-legend />
      <v-axis />
      <v-facet type="matrix" :fields="fields" :views="views" />
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');
const { DataView } = DataSet;

const scale = [{
  dataKey: 'Species',
  sync: true,
}];

const views = (view, facet) => {
  let obj = {};

  if (facet.rowIndex === facet.colIndex) {
    const dv = new DataView();
    dv.source(facet.data)
      .transform({
        type: 'bin.histogram',
        field: facet.colField,
        bins: 30,
        as: [ facet.colField, 'count' ],
        groupBy: [ 'Species' ]
      });

    obj = {
      data: dv.rows,
      series: {
        quickType: 'stackBar',
        position: facet.colField + '*count',
        color: 'Species',
        opacity: 0.85,
      }
    }
  } else {
    obj = {
      series: {
        quickType: 'point',
        shape: 'circle',
        color: 'Species',
        position: [ facet.colField, facet.rowField ],
        opacity: 0.3,
        size: 3,
      }
    }
  }

  return obj;
}

export default {
  mounted() {
    $.getJSON('/assets/data/iris.json', (sourceData) => {
      this.$data.data = sourceData;
    });
  },

  data() {
    return {
      data: [],
      views,
      fields: ['SepalLength', 'SepalWidth', 'PetalLength', 'PetalWidth'],
    };
  },
};
</script>
