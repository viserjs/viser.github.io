<template>
  <div>
    <v-chart :forceFit="true" :height="400" :padding="[0, 60, 30, 0]" :data="data" :scale="scale">
      <v-tooltip :show-title="null" />
      <v-coord type="helix" :start-angle="0.5 * Math.PI" :end-angle="12.5 * Math.PI" />
      <v-axis data-key="time" :line="null" />
      <v-interval position="time*value" :color="['value', '#ffffff-#1890FF']" :size="0.45" />
    </v-chart>
  </div>
</template>

<script>
const data = [];
const n = 31;
for (let i = 0; i < 372; i++) {
  const now = Date();
  data[i] = {};
  data[i].time = new Date(now).getTime() + i * 1000 * 3600 * 24;
  const random = Math.floor(Math.random() * 10);
  if (((i % n > 2) && (i % n < 4)) || ((i % n >= 6) && (i % n < 7))) {
    data[i].value = 30 + random * 7;
  } else if ((i % n >= 4) && (i % n < 6)) {
    data[i].value = 60 + random * 8;
  } else {
    data[i].value = 10 + random * 5;
  }
}

const scale = [{
  dataKey: 'time',
  type: 'timeCat',
  mask: 'YYYY.MM.DD'
}, {
  dataKey: 'value',
  min: 0,
}];

export default {
  methods: {
    getPosition: (idx) => {
      return [ 0, idx ];
    }
  },
  data() {
    return {
      height: 400,
      data,
      scale,
    };
  }
};
</script>
