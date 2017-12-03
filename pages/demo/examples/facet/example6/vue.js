export const template = `
<template>
  <div>
    <v-chart :force-fit="true" :height="600" :data="data" :scale="scale">
      <v-tooltip :crosshairs="false" />
      <v-legend :data-key="'cut'" position="'top'" />
      <v-axis :data-key="'cut'" :label="null" :tick-line="null" />
      <v-facet :type="'tree'" :fields="['clarity']" :line="{ stroke: '#c0d0e0' }" :line-smooth="true">
        <v-facet-view :data-pre="facetDataPre">
          <v-bar :position="'cut*mean'" :color="'cut'" />
        </v-facet-view>
      </v-facet>
    </v-chart>
  </div>
</template>

<script>
  import { data } from "./data";

  const scale = [{
    dataKey: 'mean',
    tickCount: 5,
    sync: true,
  }, {
    dataKey: 'cut',
    sync: true,
  }];
  
  const facetDataPre = {
    transform: {
      type: 'aggregate',
      fields: ['price'],
      operations: ['mean'],
      as: ['mean'],
      groupBy: ['cut'],
    },
  };

  export default {
    data() {
      return {
        data,
        scale,
        facetDataPre,
      };
    },
  };
</script>
`;
