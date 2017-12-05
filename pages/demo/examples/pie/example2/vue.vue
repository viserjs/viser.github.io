export const template =
`<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :data-pre="dataPre" :scale="scale">
      <v-tooltip :show-title="false" :data-key="'item*percent'"/>
      <v-axis />
      <v-legend :data-key="'item'"/>
      <v-pie
        :position="'percent'"
        :color="'item'"
        :v-style="pieStyle"
        :label="labelConfig"
      />
    </v-chart>
  </div>
</template>

<script>
  const data = [
    { item: '事例一', count: 40 },
    { item: '事例二', count: 21 },
    { item: '事例三', count: 17 },
    { item: '事例四', count: 13 },
    { item: '事例五', count: 9 }
  ];

  const dataPre = {
    transform: [{
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent'
    }]
  };

  const scale = [{
    dataKey: 'percent',
    min: 0,
    formatter: '.0%',
  }];

  export default {
    data() {
      return {
        data,
        dataPre,
        scale,
        height: 500,
        pieStyle: {
          stroke: "#fff",
          lineWidth: 1
        },
        labelConfig: ['percent', {
          offset: -40,
          textStyle: {
            rotate: 0,
            textAlign: 'center',
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)'
          }
        }],
      };
    }
  };
</script>
`;