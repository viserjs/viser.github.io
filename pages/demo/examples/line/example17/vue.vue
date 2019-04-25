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
      <v-line 
        position="Date*Close"
      >
      </v-line>
      <v-axis
        dataKey="Date"
        :label="labelFormat"
      >
      </v-axis>
      <v-axis
        dataKey="Close"
        :label="label"
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
        :style="style"
        :lineLength="50"
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

const labelFormat = {
  textStyle: {
    fill: '#aaaaaa'
  },
  formatter: function formatter(text) {
    var dataStrings = text.split('.');
    return dataStrings[2] + '-' + dataStrings[1] + '-' + dataStrings[0];
  }
}

const style = {
  text: {
    fontSize: 12
  }
}

function findMaxMin(data) {
  var maxValue = 0;
  var minValue = 50000;
  var maxObj = null;
  var minObj = null;
  for (var i = 0; i < data.length; i++) {
    var d = data[i];
    if (d.Close > maxValue) {
      maxValue = d.Close;
      maxObj = d;
    }
    if (d.Close < minValue) {
      minValue = d.Close;
      minObj = d;
    }
  }
  return {
    max: maxObj,
    min: minObj
  };
}
export default {
  mounted(){
    $.getJSON('/assets/data/nintendo.json',data=>{
      const max_min = findMaxMin(data);
      const max = max_min.max;
      const min = max_min.min;
      this.$data.position1 = [max.Date, max.Close];
      this.$data.position2 = [min.Date, min.Close];
      this.$data.content1 = '全部峰值：' + max.Close
      this.$data.content2 = '全部谷值：' + min.Close
      this.$data.data = data;
    });
  },
  methods:{ 
    
  },
  data() {
    return {
      data:[],
      position1:0,
      position2:0,
      content1:'',
      content2:'',
      label,
      style,
      labelFormat,
      scale:[{
        dataKey:'Date',
        tickCount: 10
      }],
      padding:[30, 20, 50, 30],
    };
  }
};
</script>

