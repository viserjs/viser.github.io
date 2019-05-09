<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale" :padding="[20, 0, 50, 80]">
      <v-tooltip />
      <v-axis dataKey="type" :label="label" :tickLine="tickLine" :line="line"></v-axis>
      <v-axis dataKey="value" :label="null" :title="title" :grid="grid"></v-axis>
      <v-interval position="type*value" :color="color" :opcaity="1" :size="26" :label="labelInterval"></v-interval> 
      <v-coord direction='LB' type='rect'/>
      <v-guide 
        type="text" 
        :top="true"
        :position="['椅子', 'min']"
        content='家具'
        :style="style"
        :offsetX="-70"
      />
      <v-guide  
        type="text" 
        :top="true"
        :position="['电话', 'min']"
        content='技术'
        :style="style"
        :offsetX="-70"
      />
      <v-guide  
        type="text" 
        :top="true" 
        :position="['笔', 'min']"
        content='办公用品'
        :style="style"
        :offsetX="-70"
      />
      <v-guide  
        type="line" 
        :start="['-20%', '33.2%']"
        :end="['100%', '33.2%']"
        :lineStyle="lineStyle"
      />
      <v-guide  
        type="line" 
        :start="['-20%', '66.8%']"
        :end="['100%', '66.8%']"
        :lineStyle="lineStyle"
      />
    </v-chart>
  </div>
</template>

<script>
const data = [{
  type: '收纳',
  value: 340,
  cat: '办公用品'
}, {
  type: '笔',
  value: 20760,
  cat: '办公用品'
}, {
  type: '纸张',
  value: 28750,
  cat: '办公用品'
}, {
  type: '配件',
  value: 4090,
  cat: '技术'
}, {
  type: '电话',
  value: 9880,
  cat: '技术'
}, {
  type: '复印机',
  value: 40988,
  cat: '技术'
}, {
  type: '桌子',
  value: 14870,
  cat: '家具'
}, {
  type: '椅子',
  value: 37098,
  cat: '家具'
}, {
  type: '书架',
  value: 49099,
  cat: '家具'
}];

const scale = [{
  dataKey: 'value',
  ax: 55000,
  min: 0,
  nice: false,
  alias: '金额（元）'
}];

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const tickLine = {
  alignWithLabel: false,
  length: 0
}

const line = {
  lineWidth: 0
}

const grid = {
  lineStyle: {
    lineWidth: 0
  }
}

const title = {
  offset: 30,
  textStyle: {
    fontSize: 12,
    fontWeight: 300
  }
}

const lineStyle = {
  stroke: '#c0c0c0',
  lineDash: [2, 2]
}

const style = {
  fill: '#c0c0c0', 
  fontSize: 12, 
  fontWeight: '300',
  textAlign: 'center',
  rotate: -90
}

const labelInterval = ['value', {
  textStyle: {
    fill: '#8d8d8d'
  },
  offset: 10,
  formatter: function formatter(text) {
    return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  }
}]

const color = ['cat', ['#face1d', '#37c461', '#2194ff']]


  export default {
    data() {
      return {
        data,
        scale,
        height: 400,
        style,
        label,
        tickLine,
        labelInterval,
        title,
        lineStyle,
        line,
        grid,
        color
      };
    }
  };
</script>