<template>
  <div>
    <v-chart :force-fit="true" :height="500" :data="data" :data-pre="dataPre" :padding="0">
      <v-tooltip :show-title="false" />
      <v-polygon :position="'_x*_y'" :color="'value'" :label="label" />
    </v-chart>
  </div>
</template>

<script>
  import { data } from './data';

  const dataPre = {
    transform: {
      type: 'diagram.voronoi',
      fields: ['x', 'y'],
      size: [800, 600],
      as: ['_x', '_y'],
    },
  };
  
  const label = [
    'value', {
      offset: 0,
      textStyle: {
        fill: '#fff',
        fontSize: '12',
        textAlign: 'center',
        shadowBlur: 2,
        shadowColor: 'rgba(0, 0, 0, .45)'
      },
    },
  ];

  export default {
    data() {
      return {
        data,
        dataPre,
        label,
      };
    },
  };
</script>