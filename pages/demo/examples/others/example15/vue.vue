<template>
  <div>
    <v-chart :forceFit="true" :height="400" :padding="[20, 80]" :data="data" :scale="scale">
      <v-tooltip />
      <v-coord type="theta" inner-radius="0.2" start-angle="-90" end-angle="180" />
      <v-bar position="term*count" color="#8543e0" shape="line" :select="false" :v-style="barStyle" />
      <v-point position="term*count" color="#8543e0" shape="circle"/>
      <v-guide v-for="(obj) in data"
        :type="'text'" :key="obj.term"
        :position="getPosition(obj)"
        :content="getContent(obj)"
        :v-style="{
          textAlign: 'right',
        }"
      />
      <v-guide :type="'text'" :position="guideTextPosition" :content="'Music'" :v-style="guideTextStyle" />
    </v-chart>
  </div>
</template>

<script>
const data = [
  { "term":"Zombieland","count":9 },
  { "term":"Wieners","count":8 },
  { "term":"Toy Story","count":8 },
  { "term":"trashkannon","count":7 },
  { "term":"the GROWLERS","count":6 },
  { "term":"mudweiser","count":6 },
  { "term":"ThunderCats","count":4 },
  { "term":"The Taqwacores - Motion Picture","count":4 },
  { "term":"The Shawshank Redemption","count":2 },
  { "term":"The Olivia Experiment","count":1 },
];

const scale = [{
  dataKey: 'count',
  max: 2,
}];

export default {
  methods: {
    getPosition: (obj) => {
      return [obj.term, 0];
    },
    getContent: (obj) => {
      return obj.term.toString();
    },
  },
  data() {
    return {
      height: 600,
      data,
      scale,
      guideTextStyle: {
        textAlign: 'center',
        fontSize: 24,
        fill: '#8543e0',
      },
      guideTextPosition: ['50%', '50%'],
      barStyle: { lineAppendWidth: 10 },
    };
  }
};
</script>
