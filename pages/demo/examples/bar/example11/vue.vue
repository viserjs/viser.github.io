<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :data-pre="dataPre">
      <v-coord :type="'rect'" :direction="'LT'" />
      <v-tooltip />
      <v-legend />
      <v-axis :data-key="'value'" :position="right" />
      <v-axis :data-key="'label'" :label="label" />
      <v-bar :position="'label*value'" :adjust="adjust" />
    </v-chart>
  </div>
</template>

<script>
  const data = [
    { label: 'Mon.', series1: 2800, series2: 2260 },
    { label: 'Tues.', series1: 1800, series2: 1300 },
    { label: 'Wed.', series1: 950, series2: 900 },
    { label: 'Thur.', series1: 500, series2: 390 },
    { label: 'Fri.', series1: 170, series2: 100 },
  ];

  const dataPre = {
    transform: {
      type: 'fold',
      fields: [ 'series1', 'series2' ],
      key: 'type',
      value: 'value',
    },
  };

  const label = { offset: 12 };
  const adjust = [{ type: 'dodge', marginRatio: 1 / 32 }];

  export default {
    data() {
      return {
        data,
        dataPre,
        height: 400,
        label: label,
        adjust: adjust,
      };
    }
  };
</script>