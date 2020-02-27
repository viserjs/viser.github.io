<template>
  <div v-if="data.length">
    <v-chart
      :forceFit="true"
      height="400"
      :data="data"
      :padding="[50, 20, 30, 30]"
    >
      <v-tooltip crosshairs="y" :shared="true"></v-tooltip>
      <v-stack-line position="year*value" :color="colorline" :size="1" :opacity="0.2"></v-stack-line>
      <v-stack-area position="year*value" :color="color" :opacity="1"></v-stack-area>
      <v-axis
        dataKey="year"
        :label="label"
      >
      </v-axis>
      <v-axis
        dataKey="value"
        :label="label"
      >
      </v-axis>
      <v-guide
        type="text"  
        :position="[2015, 8]"
        content="万立方/英尺"
        :style="style1"
        :offsetY="-30"
        :offsetX="-20"
      >
      </v-guide>
      <v-guide
        type="text"  
        :top="true"
        :position="[2040, 6.3]"
        content="出口至墨西哥"
        :style="style2"
        :offsetX="-10"
      >
      </v-guide>
      <v-guide
        type="text"  
        :top="true"
        :position="[2040, 5]"
        content="出口至加拿大"
        :style="style2"
        :offsetX="-10"
      >
      </v-guide>
      <v-guide
        type="text"  
        :top="true"
        :position="[2040, 2]"
        content="来自40个州的液化天然气出口"
        :style="style2"
        :offsetX="-10"
      >
      </v-guide>
      <v-guide
        type="text"  
        :top="true"
        :position="[2015, -1.5]"
        content="从加拿大进口"
        :style="style3"
        :offsetX="10"
      >
      </v-guide>
      <v-guide
        type="region"  
        :start="[2019, 8]"
        :end="[2040, -4]"
        :style="style4"
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

const style1 = {
  fill: '#8c8c8c',
  fontSize: 12,
  fontWeight: 300
}

const style2 = {
  fill: 'white',
  fontSize: 12,
  fontWeight: 300,
  textAlign: 'end',
  textBaseline: 'center'
}

const style3 = {
  fill: 'white',
  fontSize: 12,
  fontWeight: 300,
  textAlign: 'start',
  textBaseline: 'center'
}

const style4 = {
  lineWidth: 0,
  fill: '#dcdcdc',
  fillOpacity: 0.3,
  stroke: '#ccc'
}

const colorline = ['type', ['white']];

const color = ['type', ['#1890ff', '#40a9ff', '#0050b3', '#003a8c', '#002766']];

export default {
  mounted(){
    $.getJSON('/assets/data/gas-import-export.json',data=>{
      this.$data.data=data;
    });
  },
  methods:{ 
    
  },
  data() {
    return {
      data:[],
      label,
      color,
      style1,
      style2,
      style3,
      style4,
      colorline
    };
  }
};
</script>

