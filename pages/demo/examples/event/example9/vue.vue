<template>
  <div v-if="data.length">
    <v-chart :force-fit="true" :height="400" :animate="false" :padding="pad1" :data="chartDv" :scale="scale">
      <v-axis />
      <v-facet type="mirror" :fields="fields" :show-title="false" :padding="pad2" :views="facetOpts.views"/>
    </v-chart>
    <v-plugin>
      <v-slider width="auto" :height="26"
        container='viser-slider-1'
        :start="start" :end="end"
        :data="originDv" x-axis="time" y-axis="value" :scales="scales"
        :background-chart="bgchart"
        :on-change="slideChange"/>
    </v-plugin>
  </div>
</template>

<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'time',
  type: 'time',
  tickCount: 10,
  mask: 'M/DD H:mm'
}];

const facetOpts = {
  views: (view, facet) => {
    const { colValue, data } = facet;
    let color;
    let alias;
    if (colValue === 'rain') {
      color = '#1890ff';
      alias = '降雨量(mm)';

    } else if (colValue === 'flow') {
      color = '#2FC25B';
      alias = '流量(m^3/s)';
    }

    return {
      data,
      scale: [{
        dataKey: colValue,
        alias,
      }],
      series: [{
        quickType: 'line',
        position: `time*${colValue}`,
        color,
      }]
    };
  }
};

export default {
  mounted() {
    $.getJSON('/assets/data/rain-flow.json', (sourceData) => {
      this.$data.data = sourceData;
      const data = this.getData();
      this.$data.originDv = data.originDv;
      this.$data.chartDv = data.chartDv;
    });
  },
  methods: {
    getData() {
      const { start, end, data } = this;
      const startTime = new Date(start).getTime();
      const endTime = new Date(end).getTime();
      const ds = new DataSet({
        state: {
          start,
          end,
        }
      });
      const originDv = ds.createView();
      originDv.source(data)
        .transform({
          type: 'fold',
          fields: [ 'rain', 'flow' ],
          key: 'type',
          value: 'value',
          retains: [ 'rain', 'flow', 'time' ]
        });

      const chartDv = ds.createView();
      chartDv.source(originDv)
        .transform({
          type: 'fold',
          fields: [ 'rain', 'flow' ],
          key: 'type',
          value: 'value',
          retains: [ 'rain', 'flow', 'time' ]
        })
        .transform({
          type: 'filter',
          callback(obj) {
            const time = new Date(obj.time).getTime(); // !注意：时间格式，建议转换为时间戳进行比较
            return time >= startTime && time <= endTime;
          }
        });
      return { originDv, chartDv };
    },
    slideChange (opts) {
      this.start = opts.startValue;
      this.end = opts.endValue;
      const data = this.getData();
      this.originDv = data.originDv;
      this.chartDv = data.chartDv;
    },
  },
  data() {
    return {
      data: [],
      pad1:[ 20, 20, 0, 80],
      pad2:[ 0, 0, 40, 0],
      fields:['type'],
      scales:{
        time: {
          type: 'time',
          tickCount: 10,
          mask: 'M/DD H:mm'
        }
      },
      bgchart:{
        type: 'line'
      },
      scale,
      originDv: [],
      chartDv: [],
      start: '2009/7/20 0:00',
      end: '2009/7/25 0:00',
      facetOpts,
    };
  },
};

</script>
