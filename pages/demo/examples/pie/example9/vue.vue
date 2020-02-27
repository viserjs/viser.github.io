<template>
  <div v-if="data.length">
    <v-chart
      :forceFit="true"
      height="400"
      :data="data"
      padding="auto"
    >
      <v-tooltip></v-tooltip>
      <v-coord type='theta' :radius="0.75"/>
      <v-stack-bar position='value' :color="color" :opacity="1" :label="label"/>
    </v-chart>
  </div>
</template>

<script>

const DataSet = require('@antv/data-set');

const data = [{
  type: '硕士',
  value: 0.4
}, {
  type: '本科',
  value: 0.21
}, {
  type: '博士',
  value: 0.17
}, {
  type: '初中',
  value: 0.009
}, {
  type: '专科',
  value: 0.013
}, {
  type: '未知',
  value: 0.08
}]

const color = ['type', ['#2593fc', '#38c060', '#27c1c1', '#705dc8', '#3b4771', '#f9cb34']];

const label = ['value', function(val) {
  var offset = val > 0.02 ? -30 : 30;
  var label_class = val > 0.02 ? "g2-label-item-inner" : "g2-label-item-outer";
  return {
    offset: offset,
    useHtml: true,
    htmlTemplate: function htmlTemplate(text, item) {
      var d = item.point;
      if(typeof(d.percent) === 'number') {
        var percent = String(Math.round(d.percent * 100)) + "%";
      } else {
        var percent = d.percent;
      }
      return '<div class=' + label_class + '>' + d.type + percent + '</div>';
    }
  }
}];

var ds = new DataSet();
var dv = ds.createView().source(data);
dv.transform({
  type: 'percent',
  field: 'value',
  dimension: 'type',
  as: 'percent'
});
export default {
  mounted(){
    this.setStyle();
  },
  methods:{ 
    setStyle(){
      const id = 'legend-html';
      if (document.getElementById(id)) {
          return;
      }
      const styleTxt = `
        .g2-label-item-inner {
            text-align: center;
            font-size: 12px;
            color: #ffffff;
            text-shadow: 0px 0px 2px #595959;
        }

        .g2-label-item-outer {
            width:60px;
            font-size: 12px;
            color: #595959;
        }
      `;
      const style = document.createElement('style');
      style.setAttribute('id', id);
      style.innerHTML = styleTxt;
      document.getElementsByTagName('head')[0].appendChild(style);
    }
  },
  data() {
    return {
      data: dv.rows,
      color,
      label
    }
  }
};
</script>

