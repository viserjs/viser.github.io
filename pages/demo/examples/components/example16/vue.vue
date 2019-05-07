<template>
  <div>
    <select id="position-selector" :value="position" @change="handleChange">
        <option value="top-left">top-left</option><option value="top-center">top-center</option><option value="top-right">top-right</option><option value="bottom-left">bottom-left</option><option value="bottom-center">bottom-center</option><option value="bottom-right">bottom-right</option> <option value="left-top">left-top</option><option value="left-center">left-center</option><option value="left-bottom">left-bottom</option><option value="right-top">right-top</option><option value="right-center">right-center</option><option value="right-bottom">right-bottom</option>
    </select>
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale" :padding="padding">
      <v-tooltip />
      <v-axis dataKey="value" :show="false"/>
      <v-legend :position="position" />
      <v-area position="year*range" color="#045493" :opacity="0.05" :tooltip="false" />
      <v-line position="year*range" :color="color"
        :size="3"
        :v-style="style"
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
      position: 'top-left',
      color:['type', ['#d97841', '#4495c2']],
      style:{
        opacity: 0.7,
      },
    };
  },
  methods:{
      handleChange(e){
          this.$data.position=e.target.value;
      }
  }
};

</script>
