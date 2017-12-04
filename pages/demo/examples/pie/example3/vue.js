export const template =
`<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :data-pre="dataPre" :scale="scale">
      <v-tooltip :show-title="false" :data-key="'item*percent'"/>
      <v-axis />
      <v-legend :data-key="'item'"/>
      <v-pie
        :position="'percent'"
        :color="'item'"
        :v-style="pieStyle"
        :label="labelConfig"
      />
      <v-coord :radius="0.75" :inner-radius="0.6" />
      <v-guide
        :type="'html'"
        :position="['50%', '50%']"
        :html="guideHtml"
        :alignX="'middle'"
        :alignY="'middle'"
      />
    </v-chart>
  </div>
</template>

<script>
  const data = [
    { item: '事例一', count: 40 },
    { item: '事例二', count: 21 },
    { item: '事例三', count: 17 },
    { item: '事例四', count: 13 },
    { item: '事例五', count: 9 }
  ];

  const dataPre = {
    transform: [{
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent'
    }]
  };

  const scale = [{
    dataKey: 'percent',
    min: 0,
    formatter: '.0%',
  }];

  export default {
    data() {
      return {
        data,
        dataPre,
        scale,
        height: 500,
        pieStyle: {
          stroke: "#fff",
          lineWidth: 1
        },
        labelConfig: ['percent', {
          formatter: (val, item) => {
            console.log(item);
            return item.point.item + ': ' + val;
          }
        }],
        guideHtml: '< div style = "color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;" > 主机 < br > <span style="color:#8c8c8c;font-size:20px">200</span>台</div>',
      };
    }
  };
</script>
`;