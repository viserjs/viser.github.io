<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale" >
      <v-tooltip />
      <v-axis dataKey="type" :label="label" :tickLine="tickLine"></v-axis>
      <v-axis dataKey="value" :label="labelFormat" :title="title"></v-axis>
      <v-interval position="type*value" color="cat" :opcaity="1"></v-interval> 
      <v-guide 
        type="text" 
        :top="true"
        :position="pos1"
        content='家具'
        :style="style"
        :offsetY="40"
      />
      <v-guide  
        type="text" 
        :top="true"
        :position="pos2"
        content='技术'
        :style="style"
        :offsetY="40"
      />
      <v-guide  
        type="text" 
        :top="true" 
        :position="pos3"
        content='办公用品'
        :style="style"
        :offsetY="40"
        :offsetX="20"
      />
      <v-guide  
        type="line" 
        :start="start1"
        :end="end1"
        :lineStyle="lineStyle"
      />
      <v-guide  
        type="line" 
        :start="start2"
        :end="end2"
        :lineStyle="lineStyle"
      />
    </v-chart>
  </div>
</template>

<script>
  const data = [{
    type: '书架',
    value: 48000,
    cat: '家具'
  }, {
    type: '椅子',
    value: 36000,
    cat: '家具'
  }, {
    type: '桌子',
    value: 9000,
    cat: '家具'
  }, {
    type: '复印机',
    value: 30500,
    cat: '技术'
  }, {
    type: '电话',
    value: 22000,
    cat: '技术'
  }, {
    type: '配件',
    value: 12000,
    cat: '技术'
  }, {
    type: '纸张',
    value: 25000,
    cat: '办公用品'
  }, {
    type: '笔',
    value: 17000,
    cat: '办公用品'
  }, {
    type: '美术',
    value: 8000,
    cat: '办公用品'
  }, {
    type: '收纳',
    value: 2000,
    cat: '办公用品'
  }];

  const scale = [{
    dataKey: 'value',
    alias: '占比（%）'
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

  const labelFormat = {
    textStyle: {
      fill: '#aaaaaa'
    },
    formatter: function formatter(text) {
      return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    }
  }

  const title = {
    offset: 70
  }

  const lineStyle = {
    stroke: '#d9d9d9',
    lineDash: [0, 0]
  }

  const style = {
    fill: '#c0c0c0', 
    fontSize: 12, 
    fontWeight: '300',
    textAlign: 'center'
  }

  export default {
    data() {
      return {
        data,
        scale,
        height: 400,
        style,
        label,
        tickLine,
        labelFormat,
        title,
        lineStyle,
        pos1:['椅子', 'min'],
        pos2:['电话', 'min'],
        pos3:['笔', 'min'],
        start1:['30%', '100%'],
        end1:['30%', '120%'],
        start2:['60%', '100%'],
        end2:['60%', '120%']
      };
    }
  };
</script>