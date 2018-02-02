<template>
  <div>
    <v-chart :force-fit="true" :height="height" :padding="[ 20, 80, 150 ]" :data="data" :scale="scale">
      <v-tooltip />
      <v-legend :slidable="false" :width="165" :item-formatter="itemFormatter" />
      <v-axis data-key="name" :grid="null" />
      <v-axis data-key="time" :line="null" :tick-line="null" />
      <v-polygon position="time*name"
        :color="['value','rgb(215, 25, 28)-rgb(231, 104, 24)-rgb(242, 158, 46)-rgb(249, 208, 87)-rgb(255, 255, 140)-rgb(144, 235, 157)-rgb(0, 204, 188)-rgb(0, 166, 202)-rgb(44, 123, 182)']"
        :size="['value', function(size) {
          return size;
        }]"
        shape="custom"
        :v-style="{
          lineWidth:1,
          stroke: '#fff'
        }"
      />
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
import { registerShape } from 'viser-vue';
const DataSet = require('@antv/data-set');

registerShape('polygon', 'custom', {
  draw: function(cfg, container) {
    const points = this.parsePoints(cfg.points);
    const startX = points[1].x;
    const startY = points[1].y;
    const size = cfg.size || 1;
    const width = (points[2].x - points[1].x);
    const height = Math.abs(points[1].y - points[0].y);
    // 绘制背景
    container.addShape('rect', {
      attrs: {
        x: startX,
        y: startY,
        width: width,
        height: height
      }
    });
    // 绘制色块
    return container.addShape('rect', {
      attrs: {
        x: startX,
        y: startY,
        width: width * size,
        height: height,
        fill: cfg.color,
        stroke: '#fff'
      }
    });
  }
});

// 模拟各个系统的单元测试覆盖率数据
const data = [];
// 生成数据
for(let i = 0; i < 15; i++){
  const name = '系统'+i;
  const value = Math.random() * 90;
  for(let j =1; j < 10;j++){
    const obj = {};
    obj.name = name;
    obj.value = (value + Math.random() * 10) / 100;
    obj.time = '10-0' + j;
    data.push(obj);
  }
}

const scale = [{
  dataKey: 'time',
  type: 'cat'
}, {
  dataKey: 'value',
  alias: '覆盖率',
  type: 'linear',
  formatter:function(value){
    return (value * 100).toFixed(2) + '%';
  },
  min:0,
  max: 1
}];

const itemFormatter = val => {
  return val.slice(0, val.indexOf('.')) + '%';
};

export default {
  data() {
    return {
      data,
      height: 400,
      scale,
      itemFormatter,
    };
  }
};
</script>
