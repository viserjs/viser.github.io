<template>
  <div>
    <v-chart
      :forceFit="true"
      height="400"
      :data="data"
      :scale="scale"
      :padding="[20, 100, 50, 30]"
    >
      <v-tooltip :crosshairs="crosshairs"></v-tooltip>
      <v-legend :attachLast="true"></v-legend>
      <v-line position="year*value" :color="color" :size="2.5" shape="smooth"></v-line>
      <v-area position="year*range" color="#ffffff" :opacity="0.4" shape="smooth"></v-area>
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
        type="regionFilter" 
        :top="true"
        :start="[1700, 'min']"
        :end="[1753, 'max']"
        color="#F5222D"
        :apply="['area']"
      >
      </v-guide>
      <v-guide
        type="regionFilter" 
        :top="true"
        :start="[1753, 'min']"
        :end="[1780, 'max']"
        color="#FAAD14"
        :apply="['area']"
      >
      </v-guide>
      <v-guide
        type="dataMarker"  
        :position="[1753, 87]"
        :content="content"
        :v-style="style"
        :lineLength="50"
        direction="downward"
      >
      </v-guide>
      <v-guide
        type="text"
        :top="true"  
        :position="[1730, 80]"
        :content="content2"
        :v-style="style2"
        :lineLength="20"
      >
      </v-guide>
      <v-guide
        type="text" 
        :top="true" 
        :position="[1765, 110]"
        :content="content3"
        :v-style="style2"
        :lineLength="20"
      >
      </v-guide>
    </v-chart>
  </div>
</template>

<script>
const DataSet = require('@antv/data-set');

const data = [{
  year: 1700,
  exports: 35,
  imports: 70
}, {
  year: 1710,
  exports: 59,
  imports: 81
}, {
  year: 1720,
  exports: 76,
  imports: 96
}, {
  year: 1730,
  exports: 65,
  imports: 97
}, {
  year: 1740,
  exports: 67,
  imports: 93
}, {
  year: 1750,
  exports: 79,
  imports: 90
}, {
  year: 1760,
  exports: 115,
  imports: 79
}, {
  year: 1770,
  exports: 163,
  imports: 85
}, {
  year: 1780,
  exports: 185,
  imports: 93
}];

const ds = new DataSet();
const dv = ds.createView().source(data);
dv.transform({
  type: 'map',
  callback: function callback(row) {
    row.range = [row.exports, row.imports];
    return row;
  }
});
dv.transform({
  type: 'fold',
  fields: ['exports', 'imports'],
  key: 'type',
  value: 'value'
});

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const crosshairs = {
  type: 'line'
}

const style = {
  text: {
    textAlign: 'left',
    fontSize: 12
  },
  point: {
    stroke: '#FF4D4F'
  }
}

const style2 = {
  fontSize: 14,
  fontWeight: 'normal',
  fill: 'rgba(0,0,0,0.45)'
}

const color = ['type', ['#F5222D', '#FAAD14']];

const scale = [{
  dataKey:'value',
  min: 0,
  max: 200
},{
  dataKey:'range',
  min: 0,
  max: 200
}];

export default {
  mounted(){

  },
  methods:{

  },
  data() {
    return {
      data:dv.rows,
      label,
      style,
      style2,
      scale,
      crosshairs,
      color,
      content:'1755 年在印度周边建立诸多殖民\n地与附属国，垄断出口贸易，导致\n出品总额激增。',
      content2:'贸易赤字',
      content3:'贸易盈余',
    };
  }
};
</script>

