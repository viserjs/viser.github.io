<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data"  >
      <v-tooltip />
      <v-axis />
      <v-area position="year*change" color="white" shape="smooth" />
      <v-line position="year*change" color="white" shape="smooth" />

      <v-guide v-for="{type, top, start, end, color, position, content, lineLength, style } in guides"
        :type="type"
        :top="top"
        :start="start"
        :end="end"
        :color="color"
        :position="position"
        :content="content"
        :lineLength="lineLength"
        :v-style="style"
      >
      </v-guide>
    </v-chart>
  </div>
</template>

<script>
import * as $ from 'jquery';
const guides = [
  {
    type: 'regionFilter',
    top: true,
    start: ['min', 0],
    end: ['max', 'min'],
    color: '#18a1cd',
  },
  {
    type: 'regionFilter',
    top: true,
    start: ['min', 'max'],
    end: ['max', 0],
    color: '#FF4D4F',
  },
  {
    type: 'region',
    top: false,
    start: [2000, 'max'],
    end: [2016, 'min'],
  },
  {
    type: 'dataMarker',
    top: true,
    position: [1977, 0.18],
    content: '时间进入1977年后，全球气\n温开始呈现整体升高趋势。',
    lineLength: 50,
    style: {
      text: {
        textAlign: 'right',
        fontSize: 13,
      },
      point: {
        stroke: '#FF4D4F',
      },
    },
  },
  {
    type: 'dataMarker',
    top: true,
    position: [1940, 0.08],
    content: '1940年，气温变化首次出现正值。',
    lineLength: 50,
    style: {
      text: {
        textAlign: 'right',
        fontSize: 13,
      },
      point: {
        stroke: '#FF4D4F',
      },
    },
  },
];

export default {
  mounted() {
    $.getJSON('/assets/data/tempChange.json', (sourceData) => {
      this.$data.data = sourceData;
    });
  },
  data() {
    return {
      data: [],
      height: 440,

      guides,
    };
  }
};

</script>
