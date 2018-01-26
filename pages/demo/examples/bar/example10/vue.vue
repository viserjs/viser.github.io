<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data">
      <v-coord type="rect" direction="LB" />
      <v-tooltip />
      <v-axis dataKey="country" :label="label" />
      <v-bar position="country*population" />
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');

  const sourceData = [
    { country: '中国', population: 131744 },
    { country: '印度', population: 104970 },
    { country: '美国', population: 29034 },
    { country: '印尼', population: 23489 },
    { country: '巴西', population: 18203 },
  ];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'sort',
    callback(a, b) {
      return a.population - b.population > 0;
    },
  });
  const data = dv.rows;

  const label = { offset: 12 };

  export default {
    data() {
      return {
        data,
        height: 400,
        label: label,
      };
    }
  };
</script>