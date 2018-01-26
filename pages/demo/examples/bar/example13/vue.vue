<template>
  <div>
    <v-chart :forceFit="true" :padding="padding" :height="height" :data="data">
      <v-coord type="rect" direction="LB" />
      <v-tooltip />
      <v-legend />
      <v-axis dataKey="profession" :label="label" />
      <v-bar position="profession*range" />
    </v-chart>
  </div>
</template>

<script>
  const DataSet = require('@antv/data-set');

  const sourceData = [
    { profession: '两年制副学士学位', highest: 110000, minimum: 23000, mean: 56636 },
    { profession: '执法与救火', highest: 120000, minimum: 18000, mean: 66625 },
    { profession: '教育学', highest: 125000, minimum: 24000, mean: 72536 },
    { profession: '心理学', highest: 130000, minimum: 22500, mean: 75256 },
    { profession: '计算机科学', highest: 131000, minimum: 23000, mean: 77031 }
  ];

  const dv = new DataSet.View().source(sourceData);
  dv.transform({
  type: 'map',
  callback(row) {
    row.range = [row.minimum, row.highest];
    return row;
  }
});
  const data = dv.rows;

  const label = { offset: 12 };

  export default {
    data() {
      return {
        data,
        height: 400,
        label: label,
        padding: [20, 80, 50, 110],
      };
    }
  };
</script>