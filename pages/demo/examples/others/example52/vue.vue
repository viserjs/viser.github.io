<template>
  <div v-if="data.length">
    <v-chart :forceFit="true" height="400" :data="dv" :padding="[40,40,40,80]" :scale="scale" :animate="false">
      <v-tooltip></v-tooltip>
      <v-axis dataKey="rain" :grid="null"></v-axis>
      <v-axis dataKey="flow" :title="true"></v-axis>
      <v-legend
        :custom="true"
        position="top"
        :items="[
            {
                value: 'flow',
                marker: {
                    symbol: 'circle',
                    fill: 'l(100) 0:#a50f15 1:#fee5d9',
                    radius: 5
                }
            },
            {
                value: 'rain',
                marker: {
                    symbol: 'circle',
                    fill: 'l(100) 0:#293c55 1:#f7f7f7',
                    radius: 5
                }
            }
        ]"
      ></v-legend>
      <v-area position="time*flow" color="l(100) 0:#a50f15 1:#fee5d9" opacity="0.85"></v-area>
      <v-area position="time*rain" color="l(100) 0:#293c55 1:#f7f7f7" opacity="0.85"></v-area>
    </v-chart>
    <v-plugin>
        <v-slider
            width="auto"
            height="26"
            :start="start"
            :end="end"
            xAxis="time"
            yAxis="flow"
            :scales="{
                time: {
                    type: 'time',
                    tickCount: 10,
                    mask: 'M/DD H:mm'
                }
            }"
            :data="data"
            :backgroundChart="{type:'line'}"
            :onChange="onChange"
        ></v-slider>
    </v-plugin>
  </div>
</template>

<script>
const getJSON = src =>
  new Promise(resolve => $.getJSON(src, data => resolve(data)));

export default {
  async mounted() {
    const data = await getJSON("/assets/data/rain-flow.json");
    this.$data.data = data;
    const { dv, ds } = this.getData();
    this.$data.dv = dv;
    this.$data.start = ds.state.start;
    this.$data.end = ds.state.end;
  },
  methods: {
    onChange(_ref) {
      var startValue = _ref.startValue,
        endValue = _ref.endValue;
      this.dv = this.getData().dv;
      this.start = startValue;
      this.end = endValue;
    },
    getData() {
      const { data, start, end } = this;
      const ds = new DataSet({
        state: {
          start: new Date(start).getTime(),
          end: new Date(end).getTime()
        }
      });
      const dv = ds.createView("origin").source(data);
      dv.transform({
        type: "filter",
        callback: function callback(obj) {
          const time = new Date(obj.time).getTime(); // !注意：时间格式，建议转换为时间戳进行比较
          return time >= ds.state.start && time <= ds.state.end;
        }
      });
      return { dv, ds };
    }
  },
  data() {
    return {
      data: [],
      start: "2009/7/20 0:00",
      end: "2009/9/9 0:00",
      dv: {},
      scale: [
        {
          dataKey: "time",
          type: "time",
          tickCount: 8,
          mask: "m/dd hh:MM"
        },
        {
          dataKey: "flow",
          alias: "流量(m^3/s)"
        },
        {
          dataKey: "rain",
          alias: "降雨量(mm)"
        }
      ]
    };
  }
};
</script>