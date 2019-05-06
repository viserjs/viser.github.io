<template>
  <div>
    <v-chart :forceFit="true" :height="height" :data="data" :scale="scale" :padding="padding">
      <v-tooltip :shared="true"/>
      <v-axis dataKey="type" :label="label" :tickLine="tickLine"></v-axis>
      <v-interval position="type*value" :label="labelInterval" :opcaity="1"></v-interval> 
      <v-guide 
        type="dataMarker" 
        :top="true"
        :position="pos"
        content='因政策调整导致销量下滑'
        :style="style"
        :lineLength="30"
      />
    </v-chart>
  </div>
</template>

<script>
  const data = [{
    type: '未知',
    value: 654,
    percent: 0.02
  }, {
    type: '17 岁以下',
    value: 654,
    percent: 0.02
  }, {
    type: '18-24 岁',
    value: 4400,
    percent: 0.2
  }, {
    type: '25-29 岁',
    value: 5300,
    percent: 0.24
  }, {
    type: '30-39 岁',
    value: 6200,
    percent: 0.28
  }, {
    type: '40-49 岁',
    value: 3300,
    percent: 0.14
  }, {
    type: '50 岁以上',
    value: 1500,
    percent: 0.06
  }];

  const scale = [{
    dataKey: 'value',
    alias: '销售额(万)'
  }];

  const label = {
    textStyle: {
      fill: '#aaaaaa'
    }
  }

  const tickLine = {
    alignWithLabel: false,
    length: 0
  }

  const style = {
    text: {
      fontSize: 13
    }
  }

  const labelInterval = ['value', {
    useHtml: true,
    htmlTemplate: function htmlTemplate(text, item) {
      var a = item.point;
      a.percent = String(Math.round(a.percent * 100)) + "%";
      return '<span class="g2-label-item"><p class="g2-label-item-value">' + a.value + '</p><p class="g2-label-item-percent">' + a.percent + '</p></div>';
    }
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
          .g2-label-item {
              font-size: 12px;
              text-align: center;
              line-height: 1.5;
          }

          .g2-label-item-value {
              color: #595959;
          }

          .g2-label-item-percent {
              color: #8c8c8c;
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
        height: 400,
        padding:[20, 20, 50, 50],
        style,
        label,
        tickLine,
        labelInterval,
        pos:['2014-01', 1750]
      };
    }
  };
</script>