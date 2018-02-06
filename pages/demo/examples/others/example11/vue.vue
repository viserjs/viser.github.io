<template>
  <div>
    <v-chart :force-fit="forceFit" :height="height" :data="data" :padding="padding">
      <v-tooltip :show-title="tooltipShowFalse" />
      <v-legend data-key="area" :offset="legendOffset" />
      <v-facet
        type="rect"
        :fields="facetFields"
        :padding="facetPadding"
        :row-title="facetRowTitle"
        :col-title="facetColTitle"
        :views="facetViews"
      ></v-facet>
    </v-chart>
  </div>
</template>

<script>
const DataSet = require('@antv/data-set');
const { DataView } = DataSet;

const data = [
  {year:2007, area:'亚太地区', profit: 7860*0.189},
  {year:2007, area:'非洲及中东', profit: 7860*0.042},
  {year:2007, area:'拉丁美洲', profit: 7860*0.025},
  {year:2007, area:'中欧和东欧', profit: 7860*0.018},
  {year:2007, area:'西欧', profit: 7860*0.462},
  {year:2007, area:'北美', profit: 7860*0.265},
  {year:2011, area:'亚太地区', profit: 7620*0.539},
  {year:2011, area:'非洲及中东', profit: 7620*0.065},
  {year:2011, area:'拉丁美洲', profit: 7620*0.065},
  {year:2011, area:'中欧和东欧', profit: 7620*0.034},
  {year:2011, area:'西欧', profit: 7620*0.063},
  {year:2011, area:'北美', profit: 7620*0.234}
];

const views = (view, facet) => {
  const data = facet.data;
  const dv = new DataView();
  dv.source(data)
    .transform({
      type: 'percent',
      field: 'profit',
      dimension: 'area',
      as: 'percent'
    });

  return {
    data: dv,
    scale: {
      dataKey: 'percent',
      formatter: '.2%',
    },
    coord: {
      type: 'theta',
      innerRadius: 0.35,
    },
    series: {
      quickType: 'stackBar',
      position: 'percent',
      color: 'area',
      label: ['percent', {
        offset: -8,
      }],
      style: {
        lineWidth: 1,
        stroke: '#fff',
      }
    }
  }
};

export default {
  data() {
    return {
      forceFit: true,
      data,
      height: 400,
      padding: 80,

      tooltipShowFalse: false,
      legendOffset: 20,

      facetViews: views,
      facetFields: ['year'],
      facetPadding: 20,
      facetRowTitle: null,
      facetColTitle: {
        offsetY: -30,
        style: {
          fontSize: 18,
          textAlign: 'center',
          fill: '#999'
        }
      },
    };
  }
};
</script>
