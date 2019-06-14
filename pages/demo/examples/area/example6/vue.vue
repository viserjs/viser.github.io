<template>
  <div v-if="data.length">
    <v-chart
      :forceFit="true"
      height="400"
      :data="data"
      :scale="scale"
      :padding="[20, 40, 50, 50]"
    >
      <v-tooltip crosshairs="y" :shared="true"></v-tooltip>
      <v-legend :attachLast="true"></v-legend>
      <v-line position="Data*sales"></v-line>
      <v-area position="Data*sales"></v-area>
      <v-axis
        dataKey="Data"
        :label="label"
      >
      </v-axis>
      <v-axis
        dataKey="sales"
        :label="labelFormat"
      >
      </v-axis>
      <v-guide
        type="dataMarker"  
        :top="true"
        :position="['2014-01', 1750]"
        content="因政策调整导致销量下滑"
        :style="style"
        :lineLength="30"
      >
      </v-guide>
    </v-chart>
  </div>
</template>

<script>
const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}
const style = {
  text: {
    fontSize: 13
  }
}

const labelFormat = {
  textStyle: {
    fill: '#aaaaaa'
  },
  formatter: function formatter(text) {
    return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  }
}

const scale = [{
  dataKey:'Data',
  range: [0, 1],
  tickCount: 10,
  type: 'timeCat'
}];
export default {
  mounted(){
    $.getJSON('/assets/data/fireworks-sales.json',data=>{
      this.$data.data=data;
    });
  },
  methods:{ 
    
  },
  data() {
    return {
      data:[],
      label,
      labelFormat,
      style,
      scale
    };
  }
};
</script>

