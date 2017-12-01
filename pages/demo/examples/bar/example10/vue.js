export const template =
`<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :data-pre="dataPre">
      <v-coord :type="'rect'" :direction="'LB'" />
      <v-tooltip />
      <v-axis :data-key="'country'" :label="label" />
      <v-bar :position="'country*population'" />
    </v-chart>
  </div>
</template>

<script>
  const data = [
    { country: '中国', population: 131744 },
    { country: '印度', population: 104970 },
    { country: '美国', population: 29034 },
    { country: '印尼', population: 23489 },
    { country: '巴西', population: 18203 },
  ];

  const dataPre = {
    transform: {
      type: 'sort',
      callback(a, b) {
        return a.population - b.population > 0;
      },
    },
  };

  const label = { offset: 12 };

  export default {
    data() {
      return {
        data,
        dataPre,
        height: 400,
        label: label,
      };
    }
  };
</script>
`;