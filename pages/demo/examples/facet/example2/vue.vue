<template>
  <div>
    <v-chart :force-fit="true" :height="600" :data="data" :scale="scale">
      <v-tooltip />
      <v-legend />
      <v-facet :type="'circle'" :fields="['clarity']">
        <v-facet-view :data-pre="viewDataPre">
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
    sync: true
  }, {
    dataKey: 'cut',
    sync: true,
  }];
  
  const viewDataPre = {
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
        dataPre: viewDataPre,
      };
    },
  };
</script>
