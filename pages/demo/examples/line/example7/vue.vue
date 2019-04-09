<template>
  <div v-if="data.length">
    <v-chart
      :forceFit="true"
      height="400"
      :data="data"
      :scale="scale"
      :padding="padding"
    >
      <v-tooltip></v-tooltip>
      <v-line 
        position="date*buyin"
      >
      </v-line>
      <v-axis
        dataKey="buyin"
        :show="false"
      >
      </v-axis>
      <v-axis
        dataKey="date"
        :label="label"
      >
      </v-axis>
      <v-point
        position="date*buyin"  
        :size="size"
        :label="label2"
        :style="style"
      >
      </v-point>
      <v-guide
        type="line"  
        :top="true"
        :start="start"
        :end="end"
        :lineStyle="lineStyle"
        :text="text"
      >
      </v-guide>
    </v-chart>
  </div>
</template>

<script>
const TICKS = ["2012-09", "2013-05", "2014-01", "2014-09", "2015-05", "2016-01", "2016-09", "2017-05", "2018-02"];
export default {
  mounted(){
    $.getJSON('/assets/data/salesTrend.json',data=>{
      this.$data.data=data;
    });
  },
  methods:{ },
  data() {
    return {
      data:[],
      label:{
        textStyle: {
          fill: '#aaaaaa'
        }
      }, 
      scale:[{
        dataKey:'date',
        ticks: TICKS
      }],
      padding:[50, 20, 50, 20],
      size:['date',function(val) {
        if (TICKS.indexOf(val) >= 0) {
          return 3;
        }
        return 0;
      }],
      label2:['date*buyin', function(date, buyin) {
        if (TICKS.indexOf(date) >= 0) {
          return buyin + '万';
        }
        return '';
      }, {
        textStyle: {
          fill: '#7a7a7a',
          fontSize: 12,
          stroke: 'white',
          lineWidth: 2,
          fontWeight: 300
        }
      }],
      style:{
        lineWidth: 2
      },
      start:['2012-09', 5396],
      end:['2018-02', 5396],
      lineStyle:{
        stroke: '#595959',
        lineWidth: 1,
        lineDash: [3, 3]
      },
      text:{
        position: 'start',
        style: {
          fill: '#8c8c8c',
          fontSize: 12,
          fontWeight: 300
        },
        content: '均值线 5,396万',
        offsetY: -5
      }
    };
  }
};
</script>

