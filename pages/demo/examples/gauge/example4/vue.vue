<template>
  <div>
    <v-chart :force-fit="true" :height="400" :scale="scale" :animate="false">
      <v-view :data="dataBackground" :animate="false">
        <v-coord
          type="polar"
          :startAngle="-202.5"
          :endAngle="22.5"
          :innerRadius="0.75"
          :radius="0.8"
        />
        <v-interval
          :position="'type*value'"
          :color="'#CBCBCB'"
          :size="6"
        />
      </v-view>
      <v-view :data="dataBackground" :scale="insideScale" :animate="false">
        <v-axis dataKey="value" :show="false" />
        <v-axis
          dataKey="type"
          :grid="null"
          :line="null"
          :tickLine="null"
          :label="insideAxisLabel"
        />
        <v-coord
          type="polar"
          :startAngle="-202.5"
          :endAngle="22.5"
          :innerRadius="0.95"
          :radius="0.55"
        />
        <v-interval
          :position="'type*value'"
          :color="'#CBCBCB'"
          :size="6"
        />
      </v-view>
      <v-view :data="dataFront" :animate="false">
        <v-coord
          :type="'polar'"
          :startAngle="-202.5"
          :endAngle="22.5"
          :innerRadius="0.75"
          :radius="0.8"
        />
        <v-interval
          :position="'type*value'"
          :color="frontIntervalColor"
          :opacity="1"
          :size="6"
        />
        <v-guide
          :type="'text'"
          :position="frontGuidePosition"
          :content="'26°'"
          :vStyle="frontGuideStyle"
        />
      </v-view>
    </v-chart>
  </div>
</template>

<script>
const scale = [{
  dataKey: 'type',
  range: [0, 1],
}, {
  dataKey: 'value',
  sync: true,
}];

const dataBackground = [];
for (let i = 0; i < 50; i++) {
  dataBackground.push({
    type: i + '',
    value: 10,
  });
}
const dataFront = [];
for (let i = 0; i < 50; i++) {
  const item = {
    type: i + '',
    value: 10,
  };
  if (i === 25) {
    item.value = 14;
  }
  if (i > 25) {
    item.value = 0;
  }
  dataFront.push(item);
}

const insideScale = [{
  dataKey: 'type',
  tickCount: 3
}];
const insideAxisLabel = {
  offset: -15,
  textStyle: {
    textAlign: 'center',
    fill: '#CBCBCB',
    fontSize: 18
  },
  formatter: val => {
    if (val === '49') {
      return 50;
    }

    return val;
  }
};

const frontIntervalColor = ['value', '#3023AE-#53A0FD'];
const frontGuidePosition = ['50%', '65%'];
const frontGuideStyle = {
  fill: '#CBCBCB',
  fontSize: 64,
  textAlign: 'center',
  textBaseline: 'middle',
};

export default {
  data() {
    return {
      height: 400,
      scale,
      dataBackground,
      dataFront,
      insideScale,
      insideAxisLabel,
      frontIntervalColor,
      frontGuidePosition,
      frontGuideStyle,
    };
  },
};
</script>
