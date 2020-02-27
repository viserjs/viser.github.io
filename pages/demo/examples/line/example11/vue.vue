<template>
  <div v-if="data.length">
    <v-chart
      :forceFit="true"
      height="400"
      :data="data"
      :scale="scale"
      :padding="padding"
    >
      <v-tooltip :crosshairs="false"></v-tooltip>
      <v-legend position="top-center"></v-legend>
      <v-line 
        position="date*blockchain"
        color="#1890ff"
      >
      </v-line>
      <v-line 
        position="date*nlp"
        color="#2fc25b"
      >
      </v-line>
      <v-axis
        dataKey="tdateime"
        :label="label"
      >
      </v-axis>
      <v-axis
        dataKey="blockchain"
        :label="label"
      >
      </v-axis>
      <v-axis
        dataKey="nlp"
        :show="false"
      >
      </v-axis>
      <v-guide
        type="dataMarker" 
        :top="true"
        :position="position1"
        :content="content1"
        :style="style"
        :lineLength="30"
      >
      </v-guide>
      <v-guide
        type="dataMarker" 
        :top="true" 
        :position="position2"
        :content="content2"
        :style="style2"
        :lineLength="30"
      >
      </v-guide>
    </v-chart>
  </div>
</template>

<script>
export default {
  mounted(){
    $.getJSON('/assets/data/blockchain.json',data=>{
      this.$data.data = data;
    });
  },
  methods:{ 
    
  },
  data() {
    return {
      data:[],
      position1:['2016-02-28', 9],
      position2:['2017-12-17', 100],
      content1:'Blockchain 首超 NLP',
      content2:'2017-12-17, 受比特币影响，\n blockchain搜索热度达到顶峰\n峰值：100',
      label:{
        textStyle: {
          fill: '#aaaaaa'
        }
      },
      style:{
        text: {
          textAlign: 'left',
          fontSize: 12,
          stroke: 'white',
          lineWidth: 2,
          fontWeight: 10
        },
        point: {
          stroke: '#2fc25b',
          r: 4
        }
      },
      style2:{
        text: {
          textAlign: 'right',
          fontSize: 12,
          stroke: 'white',
          lineWidth: 2,
          fontWeight: 10
        },
        point: {
          r: 4
        },
        line: {
          stroke: '#A3B1BF',
          lineWidth: 2
        }
      },
      scale:[{
        dataKey:'nlp',
        min: 0,
        max: 100
      },{
        dataKey:'blockchain',
        min: 0,
        max: 100
      }],
      padding:[30, 20, 70, 30],
    };
  }
};
</script>

