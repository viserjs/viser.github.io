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
        :label="label"
        :title="title"
      >
      </v-axis>
      <v-guide
        type='dataMarker'
        :top="true"
        :content="content1"
        :position="position1"
        :v-style="style"
        :display="display"
      >
      </v-guide>
      <v-guide
        type='dataMarker'
        :top="true"
        :content="content2"
        :position="position2"
        :v-style="style"
        :display="display"
      >
      </v-guide>
    </v-chart>
  </div>
</template>

<script>
const data = [{
  type: '销售部',
  value: 2250
}, {
  type: '市场部',
  value: 1700
}, {
  type: '电子商务部',
  value: 800
}, {
  type: '后勤部',
  value: 300
}, {
  type: '客户服务部',
  value: 240
}];

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const display = {
  point: false,
  line: false
}


const tickLine = {
  alignWithLabel: false,
  length: 0
}

const title = {
  offset: 60
}

const style = {
  text: {
    fontSize: 12,
    textAlign: 'center'
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

function findMaxMin() {
  var maxValue = 0;
  var minValue = 50000;
  var maxObj = null;
  var minObj = null;
  for (var i = 0; i < data.length; i++) {
    var d = data[i];
    if (d.value > maxValue) {
      maxValue = d.value;
      maxObj = d;
    }
    if (d.value < minValue) {
      minValue = d.value;
      minObj = d;
    }
  }
  return {
    max: maxObj,
    min: minObj
  };
}

const max_min = findMaxMin();
const max = max_min.max;
const min = max_min.min;
const content1 = '最高值：' + max.value;
const content2 = '最低值：' + min.value;
const position1 = [max.type, max.value];
const position2 = [min.type, min.value];

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
      padding: [20, 20, 50, 120],
      scale: [{
        dataKey:'value',
        alias: '订单金额(万)'
      }],
      label,
      display,
      tickLine,
      title,
      style,
      content1,
      content2,
      position1,
      position2
    }
  }
};
</script>

