<template>
  <div>
    <v-chart :forceFit="true" height="400" :data="data" :padding="[50,40]">
        <v-axis></v-axis>
        <v-tooltip></v-tooltip>
        <v-legend dataKey="type"></v-legend>
        <v-coord type="polar" startAngle="180" endAngle="270"></v-coord>
        <v-stack-interval
          position="type*value"
          :color="['type', 'rgb(252,143,72)-rgb(255,215,135)']"
          :label="['value', { offset: -15, label: { textAlign: 'center', fill: '#000' } }]"
          :style="{ lineWidth: 1, stroke: '#fff' }">
        </v-stack-interval>
    </v-chart>
  </div>
</template>

<script>
const data = [
  {
    type: "分类一",
    value: 27
  },
  {
    type: "分类二",
    value: 25
  },
  {
    type: "分类三",
    value: 18
  },
  {
    type: "分类四",
    value: 15
  },
  {
    type: "分类五",
    value: 10
  },
  {
    type: "Other",
    value: 5
  }
];

export default {
  data() {
    return {
      data: data
    };
  }
};
</script>

