<template>
  <div v-if="data.length">
    <v-chart
      :forceFit="true"
      height="400"
      :data="data"
      :padding="padding"
    >
      <v-tooltip
        :x="x"
        :y="100"
        :follow="false"
        crosshairs='y'
        :htmlContent="htmlContent"
      ></v-tooltip>
      <v-line 
        position="date*value"
        color='type'
      >
      </v-line>
      <v-axis
        dataKey="date"
        :label="label"
      >
      </v-axis>
      <v-axis
        dataKey="value"
        :label="labelFormat"
      >
      </v-axis>
    </v-chart>
  </div>
</template>

<script>
const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const labelFormat = {
  textStyle: {
    fill: '#aaaaaa'
  },
  formatter: function formatter(text) {
    return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  }
}

const data = [{
  date: '2018/8/1',
  type: 'download',
  value: 4623
}, {
  date: '2018/8/1',
  type: 'register',
  value: 2208
}, {
  date: '2018/8/1',
  type: 'bill',
  value: 182
}, {
  date: '2018/8/2',
  type: 'download',
  value: 6145
}, {
  date: '2018/8/2',
  type: 'register',
  value: 2016
}, {
  date: '2018/8/2',
  type: 'bill',
  value: 257
}, {
  date: '2018/8/3',
  type: 'download',
  value: 508
}, {
  date: '2018/8/3',
  type: 'register',
  value: 2916
}, {
  date: '2018/8/3',
  type: 'bill',
  value: 289
}, {
  date: '2018/8/4',
  type: 'download',
  value: 6268
}, {
  date: '2018/8/4',
  type: 'register',
  value: 4512
}, {
  date: '2018/8/4',
  type: 'bill',
  value: 428
}, {
  date: '2018/8/5',
  type: 'download',
  value: 6411
}, {
  date: '2018/8/5',
  type: 'register',
  value: 8281
}, {
  date: '2018/8/5',
  type: 'bill',
  value: 619
}, {
  date: '2018/8/6',
  type: 'download',
  value: 1890
}, {
  date: '2018/8/6',
  type: 'register',
  value: 2008
}, {
  date: '2018/8/6',
  type: 'bill',
  value: 87
}, {
  date: '2018/8/7',
  type: 'download',
  value: 4251
}, {
  date: '2018/8/7',
  type: 'register',
  value: 1963
}, {
  date: '2018/8/7',
  type: 'bill',
  value: 706
}, {
  date: '2018/8/8',
  type: 'download',
  value: 2978
}, {
  date: '2018/8/8',
  type: 'register',
  value: 2367
}, {
  date: '2018/8/8',
  type: 'bill',
  value: 387
}, {
  date: '2018/8/9',
  type: 'download',
  value: 3880
}, {
  date: '2018/8/9',
  type: 'register',
  value: 2956
}, {
  date: '2018/8/9',
  type: 'bill',
  value: 488
}, {
  date: '2018/8/10',
  type: 'download',
  value: 3606
}, {
  date: '2018/8/10',
  type: 'register',
  value: 678
}, {
  date: '2018/8/10',
  type: 'bill',
  value: 507
}, {
  date: '2018/8/11',
  type: 'download',
  value: 4311
}, {
  date: '2018/8/11',
  type: 'register',
  value: 3188
}, {
  date: '2018/8/11',
  type: 'bill',
  value: 548
}, {
  date: '2018/8/12',
  type: 'download',
  value: 4116
}, {
  date: '2018/8/12',
  type: 'register',
  value: 3491
}, {
  date: '2018/8/12',
  type: 'bill',
  value: 456
}, {
  date: '2018/8/13',
  type: 'download',
  value: 6419
}, {
  date: '2018/8/13',
  type: 'register',
  value: 2852
}, {
  date: '2018/8/13',
  type: 'bill',
  value: 689
}, {
  date: '2018/8/14',
  type: 'download',
  value: 1643
}, {
  date: '2018/8/14',
  type: 'register',
  value: 4788
}, {
  date: '2018/8/14',
  type: 'bill',
  value: 280
}, {
  date: '2018/8/15',
  type: 'download',
  value: 445
}, {
  date: '2018/8/15',
  type: 'register',
  value: 4319
}, {
  date: '2018/8/15',
  type: 'bill',
  value: 176
}];
const x = $("#mountNode").width() - 20;
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
        .custom-tooltip {
            width: 100% !important;
            height: 10% !important;
            position: absolute;
            top: 0px;
            left: 0px
        }

        .custom-tooltip-item {
            width: 150px;
            height: 50px;
            position: relative;
            float: left;
            margin-left: 20px;
            border-left-style: solid;
            border-left-width: 5px
        }

        .custom-tooltip-item:first-child {
            margin-left: 0
        }

        .custom-tooltip-item-name {
            width: 80%;
            height: 20px;
            position: absolute;
            top: 0px;
            left: 10px;
            color: rgba(0, 0, 0, 0.45);
            font-size: 14px
        }

        .custom-tooltip-item-value {
            width: 80%;
            height: 30px;
            position: absolute;
            bottom: 0px;
            left: 10px;
            color: #262626;
            font-size: 22px;
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
      data: data,
      padding: [100, 20, 30, 45],
      x,
      label,
      labelFormat,
      htmlContent: (title, items) => {
        var alias = {
          download: '当日累计下载量',
          register: '当日累计注册量',
          bill: '当日累计成交量'
        };
        var html = '<div class="custom-tooltip">';
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          var color = item.color;
          var name = alias[item.name];
          var value = item.value;
          var domHead = '<div class="custom-tooltip-item" style="border-left-color:' + color + '">';
          var domName = '<div class="custom-tooltip-item-name">' + name + '</div>';
          var domValue = '<div class="custom-tooltip-item-value">' + value + '</div>';
          var domTail = '</div>';
          html += domHead + domName + domValue + domTail;
        }
        return html + '</div>';
      }
    }
  }
};
</script>

