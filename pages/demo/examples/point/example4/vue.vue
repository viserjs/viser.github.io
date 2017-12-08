<template>
  <div>
    <v-chart :force-fit="true" :height="500" :data="data">
      <v-tooltip :showTitle="false" />
      <v-axis
        :data-key="'GDP'"
        :label="axisLabel"
      />
      <v-legend :data-key="'Population'"/>
      <v-point
        :position="'GDP*LifeExpectancy'"
        :color="pointColor"
        :size="pointSize"
        :v-style="pointStyle"
        :tooltip="'Country*Population*GDP*LifeExpectancy'"
      />
    </v-chart>
  </div>
</template>

<script>
  import * as $ from 'jquery';
  import { Global } from 'viser-vue';

  const scale = [{
    dataKey: 'LifeExpectancy',
    alias: '人均寿命（年）'
  }, {
    dataKey: 'Population',
    type: 'pow',
    alias: '人口总数'
  }, {
    dataKey: 'GDP',
    alias: '人均国内生产总值($)'
  }, {
    dataKey: 'Country',
    alias: '国家/地区'
  }];

  const colorMap = {
    'Asia': Global.colors[0],
    'Americas': Global.colors[1],
    'Europe': Global.colors[2],
    'Oceania': Global.colors[3]
  };

  export default {
    mounted() {
      $.getJSON('/data/bubble.json', (data) => {
        this.$data.data = data;
      });
    },
    data() {
      return {
        data: [],
        scale,
        height: 500,
        axisLabel: {
          // formatter: '.0s'
        },
        pointColor: ['continent', val => colorMap[val]],
        pointSize: ['Population', [4, 65]],
        pointStyle: ['continent', {
          lineWidth: 1,
          strokeOpacity: 1,
          fillOpacity: 0.3,
          opacity: 0.65,
          stroke: val => colorMap[val],
        }],
      };
    }
  };
</script>
