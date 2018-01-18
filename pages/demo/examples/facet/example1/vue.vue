<template>
  <div>
    <v-chart :force-fit="true" :height="400" :data="data" :scale="scale">
      <v-tooltip />
      <v-legend />
      <v-axis />
      <v-facet type="rect" :fields="['cut', 'clarity']">
        <v-facet-view>
          <v-point position="carat*price" color="cut" opacity="0.3" size="3" shape="circle"/>
        </v-facet-view>
      </v-facet>
    </v-chart>
  </div>
</template>

<script>
  import * as $ from 'jquery';

  const scale = [{
    dataKey: 'carat',
    sync: true,
  }, {
    dataKey: 'price',
    sync: true,
    tickCount: 3,
  }, {
    dataKey: 'cut',
    sync: true,
  }];

  export default {
    mounted() {
      $.getJSON('/assets/data/diamond.json', (data) => {
        this.$data.data = data;
      });
    },
    data() {
      return {
        data: [],
        scale,
      };
    },
  };
</script>
