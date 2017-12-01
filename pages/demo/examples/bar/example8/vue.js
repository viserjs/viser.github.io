export const template =
`<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :data-pre="dataPre">
      <v-tooltip :crosshairs="false" :in-plot="false" :position="'top'" />
      <v-axis />
      <v-stack-bar :position="'depth*count'" :color="'cut'" />
    </v-chart>
  </div>
</template>

<script>
  // https://antv.alipay.com/assets/data/diamond.json
  const data = [];

  const dataPre = {
    transform: {
      type: 'bin.histogram',
      field: 'depth',
      binWidth: 1,
      groupBy: [ 'cut' ],
      as: ['depth', 'count'],
    },
  };

  export default {
    data() {
      return {
        data,
        dataPre,
        height: 400,
      };
    }
  };
</script>
`;