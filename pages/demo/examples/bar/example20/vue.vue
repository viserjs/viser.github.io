<template>
  <div v-if="data.length">
    <v-chart
      :forceFit="true"
      height="400"
      :data="data"
      :scale="scale"
      padding="auto"
    >
      <v-tooltip></v-tooltip>
      <v-interval 
        position="year*value"
        opacity="1"
        :color="color"
        :label="labelInterval"
      >
      </v-interval>
      <v-axis
        dataKey="year"
        :label="label"
        :tickLine="tickLine"
      >
      </v-axis>
      <v-axis
        dataKey="value"
        :label="null"
        :title="title"
      >
      </v-axis>
    </v-chart>
  </div>
</template>

<script>
const data =[{
  year: '2013',
  value: -3.1
}, {
  year: '2014',
  value: 0.8
}, {
  year: '2015',
  value: 2.3
}, {
  year: '2016',
  value: 3.5
}, {
  year: '2017',
  value: 5.4
}];

const scale = [{
  dataKey:'value',
  alias: '现金流(亿)'
}]

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const labelInterval = ['year*value', function(year, value) {
  var offset = 15;
  if (value < 0) {
    offset *= -1;
  }
  return {
    useHtml: true,
    htmlTemplate: function htmlTemplate(text, item) {
      var d = item.point;
      if (d.year === '2014') {
        return '<div class="g2-label-spec">新产品上市破局，现金流<span class="g2-label-spec-value"> ' + d.value + ' </span>亿</div>';
      }
      return '<span class="g2-label">' + d.value + '</span>';
    },
    offset: offset
  };
}]

const tickLine = {
  alignWithLabel: false,
  length: 0
}

const title = {
  offset: 30
}

const color = ['year', function(val) {
  if (val === '2013') {
    return '#36c361';
  }
  return '#ff5957';
}]
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
        .g2-label {
            font-size: 12px;
            text-align: center;
            line-height: 0.5;
            color: #595959;
        }

        .g2-label-spec {
            font-size: 12px;
            text-align: center;
            line-height: 0.5;
            color: #595959;
            width: 400px !important;
        }

        .g2-label-spec-value {
            color: #ff5250;
            font-weight: bold;
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
      data,
      scale,
      label,
      labelInterval,
      tickLine,
      title,
      color
    }
  }
};
</script>

