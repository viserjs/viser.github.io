<template>
  <div>
    <v-chart :forceFit="true" :height="400" :padding="padding" :data="data" :scale="scale">
      <v-legend
        :offset="legendOpt.offset"
        :title="legendOpt.title"
        :slidable="legendOpt.slidable"
        :position="legendOpt.position"
        :offsetX="legendOpt.offsetX"
      />
      <v-tooltip />
      <v-coord type="polar" :inner-radius="0.35" />
      <v-axis dataKey="date" :show="false" />
      <v-axis dataKey="range" :line="null" :tick-line="null" :label="null" />
      <v-interval position="date*range" :color="color" :size="2.5" :opacity="1" />
      <v-guide
        type="line"
        :start="guideLineOpt.start"
        :end="guideLineOpt.end"
        :line-style="guideLineOpt.lineStyle"
        :text="guideLineOpt.text"
        content="January"
      />
      <v-guide
        v-for="(entry, index) in data"
        type="text"
        :key="index"
        :start="getStart(entry)"
        :content="getContent(entry)"
        :style="{
          fill: '#C4C4C4',
          fontSize: 12,
          fontWeight: 100,
          textAlign: 'center',
          textBaseline: 'middle'
        }"
      />
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'date',
  type: 'cat',
}, {
  dataKey: 'range',
  max: 30,
  min: -25,
}, {
  dataKey: 'mean_temp',
  alias: 'Average Daily Temperature',
}];

const legendOpt = {
  offset: 25,
  title: {
    fontSize: 12,
    fill: '#4F4F4F',
    fontWeight: 300,
    textAlign: 'start'
  },
  slidable: false,
  position: 'bottom',
  offsetX: 25,
};

const guideLineOpt = {
  start: {
    date: 'min',
    range: 'min'
  },
  end: {
    date: 'min',
    range: 'max'
  },
  lineStyle: {
    stroke: '#aaa',
    lineWidth: 1,
    lineDash: null
  },
  text: {
    position: 1,
    offsetY: -6,
    autoRotate: false,
    style: {
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 100,
      fill: '#aaa'
    },
    content: 'January'
  }
};

export default {
  mounted() {
    $.getJSON('/assets/data/daily-temp-in-boston.json', (data) => {
      const ds = new DataSet();
      const dv = ds.createView()
      .source(data)
      .transform({
        type: 'map',
        callback(row) {
          row.range = [row.min_temp, row.max_temp];
          return row;
        }
      });

      this.$data.data = dv;
    });
  },

  methods: {
    getStart(entry) {
      return {
        date: '2015-7-1',
        range: entry,
      };
    },

    getContent(entry) {
      return `${entry}°C`;
    }
  },

  data() {
    return {
      height: 400,
      data: [],
      scale,
      legendOpt,
      guideLineOpt,
      padding: [20, 0, 105],
      color: ['mean_temp', 'rgb(44, 123, 182)-rgb(0, 166, 202)-rgb(0, 204, 188)-rgb(144, 235, 157)-rgb(255, 255, 140)-rgb(249, 208, 87)-rgb(242, 158, 46)-rgb(231, 104, 24)-rgb(215, 25, 28)'],
      guideTextData: [ -20, -10, 0, 10, 20, 30 ],
    };
  }
};
</script>
