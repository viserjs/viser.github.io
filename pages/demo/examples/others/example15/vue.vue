<template>
  <div>
    <v-chart :forceFit="true" :height="600" :padding="[ 20, 80 ]" :data="data" :scale="scale">
      <v-tooltip />
      <v-coord :type="'theta'" :inner-radius="0.2" />
      <v-bar :position="'term*count'" :color="'#8543e0'" :shape="'line'" :select="false" :v-style="barStyle" />
      <v-point :position="'term*count'" :color="'#8543e0'" />
      <v-guide :type="'text'" :position="guide_data[0].position" :content="guide_data[0].content" :v-style="guide_data[0].style" />
      <v-guide :type="'text'" :position="guide_data[1].position" :content="guide_data[1].content" :v-style="guide_data[1].style" />
      <v-guide :type="'text'" :position="guide_data[2].position" :content="guide_data[2].content" :v-style="guide_data[2].style" />
      <v-guide :type="'text'" :position="guide_data[3].position" :content="guide_data[3].content" :v-style="guide_data[3].style" />
      <v-guide :type="'text'" :position="guide_data[4].position" :content="guide_data[4].content" :v-style="guide_data[4].style" />
      <v-guide :type="'text'" :position="guide_data[5].position" :content="guide_data[5].content" :v-style="guide_data[5].style" />
      <v-guide :type="'text'" :position="guide_data[6].position" :content="guide_data[6].content" :v-style="guide_data[6].style" />
      <v-guide :type="'text'" :position="guide_data[7].position" :content="guide_data[7].content" :v-style="guide_data[7].style" />
      <v-guide :type="'text'" :position="guide_data[8].position" :content="guide_data[8].content" :v-style="guide_data[8].style" />
      <v-guide :type="'text'" :position="guide_data[9].position" :content="guide_data[9].content" :v-style="guide_data[9].style" />
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

const guide_data = [];
for (let i = 0, l = data.length; i < l; i++) {
  const obj = data[i];
  guide_data.push({
    position: [ obj.term, 0 ],
    content: obj.term + ' ',
    style: {
      textAlign: 'right'
    }
  });
}

const scale = [{
  dataKey: 'count',
  max: 2,
}];

export default {
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
      guide_data: guide_data,
    };
  }
};
</script>
