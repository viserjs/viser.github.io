<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :padding="[ 0, 30, 60, 30 ]">
      <v-legend :offset="10"/>
      <v-tooltip :show-title="false"/>
      <v-heatmap :position="'g*l'" :color="['tmp', '#F51D27-#FA541C-#FF8C12-#FFC838-#FAFFA8-#80FF73-#12CCCC-#1890FF-#6E32C2']"/>
      <v-guide :type="'image'" :start="[ 'min', 'max' ]" :end="[ 'max', 'min' ]" :src="'https://gw.alipayobjects.com/zos/rmsportal/NeUTMwKtPcPxIFNTWZOZ.png'"/>
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';

export default {
  mounted() {
    $.getJSON('/data/heatmap-4.json', (data) => {
      this.$data.data = data;
    });
  },
  data() {
    return {
      data: [],
      height: 400,
    };
  },
};
</script>
