<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :data-pre="dataPre" :scale="scale">
      <v-tooltip :show-title="false" :item-tpl="tooltipOpts.itemTpl"/>
      <v-legend />
      <v-coord type='rect' direction='LT' />
      <v-pyramid :position="funnelOpts.position" :color="funnelOpts.color" :label="funnelOpts.label" :tooltip="funnelOpts.tooltip" :shape="funnelOpts.shape"/>
    </v-chart>
  </div>
</template>

<script>
const data = [
  { action: '浏览网站', pv: 50000 },
  { action: '放入购物车', pv: 35000 },
  { action: '生成订单', pv: 25000 },
  { action: '支付订单', pv: 15000 },
  { action: '完成交易', pv: 8000 },
];

const dataPre = {
  transform: {
    type: 'percent',
    field: 'pv',
    dimension: 'action',
    as: 'percent',
  },
};

const scale = {
  dataKey: 'percent',
  nice: false,
};

const tooltipOpts = {
  showTitle: false,
  itemTpl: '<li data-index={index} style="margin-bottom:4px;">'
      + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
      + '{name}<br/>'
      + '<span style="padding-left: 16px">浏览人数：{pv}</span><br/>'
      + '<span style="padding-left: 16px">占比：{percent}</span><br/>'
      + '</li>'
};
const funnelOpts = {
  shape: 'pyramid',
  color: ['action', [ '#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF' ]],
  position: 'action*pv',
  label: ['action*pv', (action, pv) => {
    return action + ' ' + pv;
  }, {
    offset: 35,
    labelLine: {
      lineWidth: 1,
      stroke: 'rgba(0, 0, 0, 0.15)'
    }
  }],
  tooltip: ['action*pv*percent', (action, pv, percent) => ({
    name: action,
    percent: Math.floor(percent * 100) + '%',
    pv: pv,
  })]
};

export default {
  data() {
    return {
      data,
      dataPre,
      scale,
      height: 400,
      tooltipOpts,
      funnelOpts,
    };
  },
};
</script>
