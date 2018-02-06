<template>
  <div>
    <v-chart :force-fit="true" :height="height" :padding="[ 40, 40, 130, 40 ]" :data="data" :scale="scale">
      <v-tooltip title="question" />
      <v-coord type="polar" :inner-radius="0.1" direction="rotate" />
      <v-interval
        :position="interval1Opts.position"
        :color="interval1Opts.color"
        :tooltip="interval1Opts.tooltip"
        :label="interval1Opts.label" 
      />
      <v-guide v-for="(obj, index) in data"
        :key="index"
        type="text"
        :top="true"
        :position="getPosition(obj)"
        :content="getContent(obj)"
        :v-style="{
          textAlign: 'right',
        }"
      />
    </v-chart>
  </div>
</template>

<script>
const data = [
  {"question":"问题 1","percent":0.21},
  {"question":"问题 2","percent":0.40},
  {"question":"问题 3","percent":0.49},
  {"question":"问题 4","percent":0.52},
  {"question":"问题 5","percent":0.53},
  {"question":"问题 6","percent":0.84},
  {"question":"问题 7","percent":1.0},
  {"question":"问题 8","percent":1.2}
];

const scale = [{
  dataKey: 'percent',
  min: 0,
  max: 2,
}];

const interval1Opts = {
  position: 'question*percent',
  color: ['percent', '#BAE7FF-#1890FF-#0050B3'],
  tooltip: ['percent', val => {
    return {
      name: '占比',
      value: val * 100 + '%',
    };
  }],
  label: ['percent', {
    offset: -5,
  }],
};

export default {
  methods: {
    getPosition: (obj) => {
      return [ obj.question, 0 ];
    },
    getContent: (obj) => {
      return obj.question + ' ';
    },
  },

  data() {
    return {
      height: 500,
      data,
      scale,
      interval1Opts,
    };
  }
};
</script>
