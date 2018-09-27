<template>
    <div>
        <v-chart :forceFit="true" height="400" :data="data" :padding="[40,0]">
            <v-tooltip></v-tooltip>
            <v-legend dataKey="type"></v-legend>
            <v-coord type="theta" startAngle="180" endAngle="270"></v-coord>
            <v-pie position="value" color="type" label="type"></v-pie>
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

