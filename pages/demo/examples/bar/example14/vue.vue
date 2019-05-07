<template>
  <div v-if="data.length">
    <v-chart
      :forceFit="true"
      height="400"
      :data="data"
      :scale="scale"
      :padding="padding"
    >
      <v-tooltip :shared="true"></v-tooltip>
      <v-interval 
        position="type*value"
        opacity="1"
      >
      </v-interval>
      <v-axis
        dataKey="type"
        :label="label"
        :tickLine="tickLine"
      >
      </v-axis>
      <v-axis
        dataKey="value"
        :label="labelFormat"
        :title="title"
      >
      </v-axis>
      <v-guide
        type='dataMarker'
        :top="true"
        content='因政策调整导致销量下滑'
        :position="position"
        :style="style"
        lineLength="30"
      >
      </v-guide>
    </v-chart>
  </div>
</template>

<script>
const data = [{
  type: '家具家电',
  value: 34000
}, {
  type: '粮油副食',
  value: 25000
}, {
  type: '生鲜水果',
  value: 11000
}, {
  type: '美容洗护',
  value: 9000
}, {
  type: '母婴用品',
  value: 7000
}, {
  type: '进口食品',
  value: 6000
}, {
  type: '食品饮料',
  value: 4800
}, {
  type: '家庭清洁',
  value: 500
}];

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

const tickLine = {
  alignWithLabel: false,
  length: 0
}

const title = {
  offset: 70
}

const style = {
  text: {
    fontSize: 13
  }
}

function sortData(sortType) {
  if (sortType === 'positive') {
    data.sort(function(a, b) {
      return b.value - a.value;
    });
  } else {
    data.sort(function(a, b) {
      return a.value - b.value;
    });
  }
}
export default {
  mounted(){
    this.setStyle();
    const that = this;
    $('.sort-button').click(function() {
      const sortTypeOri = that.$data.sortType;
      const sortType = sortTypeOri === 'positive' ? 'negative' : 'positive';
      that.$data.sortType = sortType;
      sortData(sortType);
    });
  },
  methods:{ 
    setStyle(){
      const id = 'legend-html';
      if (document.getElementById(id)) {
          return;
      }
      const styleTxt = `
        .left-tool-box {
          position: absolute; 
          top:0px; left: 0px; 
          width: 40px; 
          height:100%; 
          z-index:1000;
        }
        .left-tool-box .sort-button {
          width: 70%; 
          height:auto; 
          position: absolute; 
          left:25%; 
          top:30%;
        }
      `;
      const style = document.createElement('style');
      style.setAttribute('id', id);
      style.innerHTML = styleTxt;
      document.getElementsByTagName('head')[0].appendChild(style);
      const leftBox = document.createElement('div');
      leftBox.setAttribute('class', 'left-tool-box');
      leftBox.innerHTML =  `<img class="sort-button" src="/assets/image/sortbar.png">`;
      document.getElementsByTagName('body')[0].appendChild(leftBox);
    }
  },
  data() {
    return {
      data: data,
      sortType: 'positive',
      padding: [20, 20, 30, 140],
      scale: [{
        dataKey:'value',
        tickCount: 5,
        alias: '销售额(万)'
      }],
      label,
      labelFormat,
      tickLine,
      title,
      style,
      position:['2014-01', 1750],
    }
  }
};
</script>

