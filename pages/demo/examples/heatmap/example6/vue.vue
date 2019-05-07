<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :padding="padding">
      <v-legend :offset="10" />
      <v-tooltip :show-title="false" />
      <v-heatmap :position="'g*l'" :color="color" />
      <v-guide type="image" :start="start" :end="end" src="https://gw.alipayobjects.com/zos/rmsportal/NeUTMwKtPcPxIFNTWZOZ.png" />
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';

export default {
  mounted() {
    $.getJSON('/assets/data/heatmap-4.json', (data) => {
      this.$data.data = data;
    });
  },
  data() {
    return {
      data: [],
      padding:[ 0, 30, 60, 30 ],
      height: 400,
      start:[ 'min', 'max' ],
      end:[ 'max', 'min' ],
      color:['tmp', '#F51D27-#FA541C-#FF8C12-#FFC838-#FAFFA8-#80FF73-#12CCCC-#1890FF-#6E32C2']
    };
  },
};
</script>
