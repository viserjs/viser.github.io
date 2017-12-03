export const template = `
<template>
  <div>
    <v-chart :force-fit="true" :height="600" :data="data" :scale="scale">
      <v-tooltip />
      <v-legend />
      <v-axis />
      <v-facet :type="'list'" :fields="['cut']" :cols="3" :padding="30">
        <v-facet-view>
          <v-point :position="'carat*price'" :color="'cut'" :opacity="0.3" :size="3" />
        </v-facet-view>
      </v-facet>
    </v-chart>
  </div>
</template>

<script>
  import { data } from "./data";

  const scale = [{
    dataKey: 'carat',
    sync: true
  }, {
    dataKey: 'price',
    sync: true,
  }, {
    dataKey: 'cut',
    sync: true,
  }];

  export default {
    data() {
      return {
        data,
        scale,
      };
    },
  };
</script>
`;
