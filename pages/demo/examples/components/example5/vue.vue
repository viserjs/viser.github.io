<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale" :padding="padding">
      <v-tooltip />
      <v-axis />
      <v-legend :attachLast="true" />
      <v-legend dataKey="predict" :show="false" />
      <v-line position="time*value" shape="smooth" :color="color"
        :size="2"
        :animate="animate"
      />
      <v-guide
        type="line"
        :top="true"
        :start="start1"
        :end="end1"
        :lineStyle="linestyle"
        :text="text"
      />
      <v-guide
        type="regionFilter"
        :top="true"
        :start="start2"
        :end="end2"
        color="#F5222D"
        :apply="apply"
      />
      <v-guide
        type="dataMarker"
        :top="true"
        content="当前最大峰值"
        :position="getDataMarkerOptsposition(data)"
        style="dataMarkerOpts.style"
        :lineLength="50"
      />
    </v-chart>
  </div>
</template>

<script>
function findMax(data) {
  var maxValue = 0;
  var maxObj = null;
  for (var i = 0; i < data.length; i++) {
    var d = data[i];
    if (d.value > maxValue /* && d.type === 'today'*/) {
      maxValue = d.value;
      maxObj = d;
    }
  }
  return maxObj;
}

const scale = [
  {
    dataKey: 'time',
    alias: '时间',
    type: 'time',
    mask: 'MM:ss',
    nice: false,
  },
  {
    dataKey: 'value',
    alias: '占用率',
    min: 0,
    max: 120,
  },
  {
    dataKey: 'type',
    type: 'cat',
  },
];

export default {
  mounted() {
    setInterval(() => {
      const data = this.$data.data;
      var now = new Date();
      var time = now.getTime();
      var value1 = ~~30 + Math.random() * 50;
      var direction = Math.random() > 0.5 ? 1 : -1;
      var value2 = value1 + Math.random() * 20 * direction;
      if (data.length >= 200) {
        data.shift();
        data.shift();
      }
      data.push({
        time: time,
        value: value2,
        type: 'yesterday',
      });
      data.push({
        time: time,
        value: value1,
        type: 'today',
      });

      if (data.length > 20) {
        data.shift();
        data.shift();
      }
    }, 1000);
  },
  methods: {
    getDataMarkerOptsposition: (data) => {
      var obj = findMax(data);
      if (obj) {
        return [obj.time, obj.value];
      }
      return [0, 0];
    },
  },
  data() {
    return {
      data: [],
      scale,
      height: 440,
      padding: [10, 100, 50, 50],
      color:['type', ['#cccccc', '#2593fc']],
      start1:['min', 60],
      end1:['max', 60],
      start2:['min', 60],
      end2:['max', 60],
      apply:['line'],
      animate:{
        update: {
          duration: 0,
        },
      },
      linestyle:{
        stroke: '#F5222D',
        lineWidth: 2,
      },
      text:{
        content: '预警线',
        position: 'start',
        offsetX: 20,
        offsetY: -5,
      },
      dataMarkerOpts:{
        style: {
          text: {
            fontSize: 13,
          },
          point: {
            stroke: '#606060',
          },
        }
      }
    };
  }
};

</script>
