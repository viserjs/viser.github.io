<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale" :padding="padding">
      <v-tooltip />
      <v-axis dataKey="value" :show="false"/>
      <v-legend :position="position" />
      <v-area position="year*range" color="#045493" :opacity="0.05" :tooltip="false" />
      <v-line position="year*range" :color="['type', ['#d97841', '#4495c2']]"
        :size="3"
        :v-style="{
          opacity: 0.7,
        }"
      />
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
const scale = [
  {
    dataKey: 'year',
    type: 'linear',
    tickInterval: 10,
  },
  {
    dataKey: 'range',
    type: 'linear',
    min: 10,
    max: 45,
    tickInterval: 5,
  },
  {
    dataKey: 'value',
    type: 'linear',
    min: 10,
    max: 45,
    tickInterval: 5,
  },
];

export default {
  mounted() {
    $.getJSON('/assets/data/data-RgqdN.json', (sourceData) => {
      var ds = new DataSet();
      var dv = ds.createView().source(sourceData);
      dv.transform({
        type: 'map',
        callback: function callback(row) {
          row.range = [row.younger, row.older];
          return row;
        },
      });
      dv.transform({
        type: 'fold',
        fields: ['younger', 'older'], // 展开字段集
        key: 'type', // key字段
        value: 'value', // value字段
      });
      this.$data.data = dv;
    });
  },
  data() {
    // 可手动变更legend position 位置， 可选值
    // left-top,left-center,left-bottom,right-top,right-top,right-bottom,top-left,
    // top-center,top-bottom,bottom-left,bottom-center,bottom-right
    return {
      data: [],
      scale,
      height: 440,
      padding: 'auto',

      position: 'top-left'
    };
  }
};

</script>
