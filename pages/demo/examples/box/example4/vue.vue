<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip :crosshairs="tooltipOpts.crosshairs" />
      <v-axis />
      <v-box position="range*1" tooltip="x*low*q1*median*q3*high" :vStyle="style" />
    </v-chart>
  </div>
</template>


<script>
const DataSet = require('@antv/data-set');
const { DataView } = DataSet;

const data = [
  { low: 1, q1: 9, median: 16, q3: 22, high: 24 }
];

const dv = new DataView().source(data);
dv.transform({
  type: 'map',
  callback: (obj) => {
    obj.range = [ obj.low, obj.q1, obj.median, obj.q3, obj.high ];
    return obj;
  }
});

const scale = [{
  dataKey: 'range',
  max: 35,
}];

const tooltipOpts = {
  crosshairs: false
};

const style = {
  stroke: '#545454',
  fill: '#1890FF',
  fillOpacity: 0.3
};

export default {
  data() {
    return {
      data: dv,
      scale,
      height: 400,
      tooltipOpts,
      style,
    };
  },
};
</script>
