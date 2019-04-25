<template>
  <div v-if="data.length">
    <v-chart
      :forceFit="true"
      height="400"
      :data="data"
      :scale="scale"
      :padding="padding"
    >
      <v-tooltip crosshairs="y" :shared="true"></v-tooltip>
      <v-line 
        position="date*price"
        color="country"
        shape='hv'
      >
      </v-line>
      <v-axis
        dataKey="date"
        :label="label"
      >
      </v-axis>
      <v-axis
        dataKey="price"
        :label="label"
      >
      </v-axis>
    </v-chart>
  </div>
</template>

<script>
export default {
  mounted(){
    $.getJSON('/assets/data/oil-price.json',data=>{
      this.$data.data = data;
    });
  },
  methods:{ 
    
  },
  data() {
    return {
      data:[],
      label:{
        textStyle: {
          fill: '#aaaaaa'
        }
      },
      scale:[{
        dataKey: 'date',
        range: [0, 1],
        tickCount: 10,
        type: 'timeCat'
      }],
      padding:[20, 110, 70, 35],
    };
  }
};
</script>

