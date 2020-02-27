<template>
  <div>
    <v-chart :forceFit="true" :height="400" :data="data" :scale="scale" :padding="[50, 20, 50, 100]">
      <v-tooltip />
      <v-legend />
      <v-axis dataKey="year" :tickLine="tickLine" :label="label"/>
      <v-axis dataKey="value" :grid="null" :label="labelFormat"/>
      <v-facet type="rect" :fields="[null, 'country']" :padding="10" :rowTitle="rowTitle">
        <v-facet-view>
          <v-line position="year*value"/>
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
    min: 1,
    tickCount: 2,
    sync: true,
    formatter: function formatter(value) {
      return value + '%';
    }
  }, {
    dataKey: 'year',
    range: [0, 1]
  }];

  const labelFormat = {
    textStyle: {
      fontSize: 10,
      fill: '#aaaaaa'
    },
    formatter: function formatter(text) {
      if (window.innerHeight > 600) {
        return text;
      }
    }
  }

  const tickLine = {
    length: 0
  };

  const label = {
    textStyle: {
      fill: '#aaaaaa'
    }
  }

  const rowTitle = {
    offsetX: (window.innerWidth - 100) * -1,
    style: {
      fontSize: 12,
      textAlign: 'end',
      rotate: 0,
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
        labelFormat,
        tickLine,
        label,
        rowTitle
      };
    },
  };
</script>