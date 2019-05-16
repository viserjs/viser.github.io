<template>
  <div>
    <v-chart :forceFit="true" :height="400" :data="data" :scale="scale" :padding="[50, 20, 50, 50]">
      <v-tooltip />
      <v-legend />
      <v-axis dataKey="year" :label="labelX" :grid="grid"/>
      <v-axis dataKey="value" :label="label"/>

      <v-facet type="rect" :fields="['country']" :colTitle="colTitle" :padding="5">
        <v-facet-view>
          <v-line position="year*value" :opacity="0.8" shape="smooth"/>
        </v-facet-view>
      </v-facet>
    </v-chart>
  </div>
</template>

<script>
  import * as $ from 'jquery';
  const DataSet = require('@antv/data-set');

  const scale = [{
    dataKey: 'value',
    max: 9,
    min: 1
  }, {
    dataKey: 'year',
    range: [0, 1],
    tickCount: 2
  }];

  const label = {
    textStyle: {
      fill: '#aaaaaa'
    }
  }

  const labelX = {
    textStyle: function textStyle(text) {
      if (text === '1950') {
        return {
          textAlign: 'start',
          fontSize: 14,
          fill: '#aaaaaa'
        };
      } else {
        return {
          textAlign: 'end',
          fontSize: 14,
          fill: '#aaaaaa'
        };
      }
    }
  }

const grid = {
  lineStyle: {
    lineDash: [0, 0],
    lineWidth: 1,
    stroke: '#e9e9e9'
  }
}

const colTitle = {
  offsetY: -15,
  style: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 300,
    fill: '#8d8d8d'
  }
};

  export default {
    mounted() {
      $.getJSON('/assets/data/fertility.json', (data) => {
        var ds = new DataSet();
        var dv = ds.createView().source(data);
        dv.transform({
          type: 'sort',
          callback: function callback(a, b) {
            return a.year - b.year;
          }
        });

        this.$data.data = dv.rows;
      });
    },
    data() {
      return {
        data: [],
        scale,
        labelX,
        label,
        grid,
        colTitle
      };
    },
  };
</script>