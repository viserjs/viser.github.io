<style>
  .g2-tooltip-title[data-v-gtlv] {
    margin-top: 12px;
  }
  .g2-tooltip-list td[data-v-gtlv] {
    border: 1px solid #cdcdcd;
    padding: 5px 8px;
    font-size: 12px;
  }
</style>

<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data">
      <v-tooltip
        :default-point="defaultPoint"
        :g2-tooltip="g2Tooltip"
        :g2-tooltip-list="g2TooltipList"
        :container-tpl="containerTpl"
        :item-tpl="itemTpl"
        :offset="offset"
      ></v-tooltip>
      <v-axis></v-axis>
      <v-line position="month*tem"></v-line>
    </v-chart>
  </div>
</template>

<script>
const data = [
  { "month": '一月', "tem": 7, "city": "tokyo" },
  { "month": '二月', "tem": 6.9, "city": "tokyo" },
  { "month": '三月', "tem": 9.5, "city": "tokyo" },
  { "month": '四月', "tem": 14.5, "city": "tokyo" },
  { "month": '五月', "tem": 18.2, "city": "tokyo" },
  { "month": '六月', "tem": 21.5, "city": "tokyo" },
  { "month": '七月', "tem": 25.2, "city": "tokyo" },
  { "month": '八月', "tem": 26.5, "city": "tokyo" },
  { "month": '九月', "tem": 23.3, "city": "tokyo" },
  { "month": '十月', "tem": 18.3, "city": "tokyo" },
  { "month": '十一月', "tem": 13.9, "city": "tokyo" }
];

export default {
  data() {
    return {
      data,
      height: 400,
      containerTpl: `
        <div class="g2-tooltip">
          <p data-v-gtlv class="g2-tooltip-title"></p>
          <table class="g2-tooltip-list"></table>
        </div>
      `,
      itemTpl: `
        <tr class="g2-tooltip-list-item">
          <td data-v-gtlv style="color:{color}">{name}</td>
          <td data-v-gtlv>{value}</td>
        </tr>
      `,
      offset: 50,
      g2TooltipList: {
        margin: '10px'
      },
      g2Tooltip: {
        position: 'absolute',
        visibility: 'hidden',
        border : '1px solid #efefef',
        backgroundColor: 'white',
        color: '#000',
        opacity: "0.8",
        padding: '5px 15px',
        transition: 'top 200ms,left 200ms'
      },
      defaultPoint: { month: '七月', tem: 25.2 },
    };
  }
};
</script>
