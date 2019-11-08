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
        position="name*value"
        opacity="1"
        :label="barLabel"
      >
      </v-interval>
      <v-axis
        dataKey="name"
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
      <v-guide
        type='text'
        :top="true"
        content='达标区间'
        :position="['end', 'max']"
        :v-style="style2"
        :offsetX="-10"
        :offsetY="6"
      >
      </v-guide>
      <v-guide
        type='region'
        :start="['start', 'max']"
        :end="['end', 80]"
        :style="style1"
      >
      </v-guide>
    </v-chart>
  </div>
</template>

<script>
const data = [{
  name: '张伟',
  value: 95
}, {
  name: '王秀英',
  value: 94
}, {
  name: '李明',
  value: 92
}, {
  name: '王丽',
  value: 89
}, {
  name: '刘洋',
  value: 80
}, {
  name: '何勇',
  value: 80
}, {
  name: '王强',
  value: 78
}, {
  name: '林杰',
  value: 76
}, {
  name: '李桂英',
  value: 75
}, {
  name: '何秀兰',
  value: 73
}, {
  name: '卢芳',
  value: 68
}, {
  name: '张德',
  value: 61
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

const title = {
  offset: 20
}

const style1 = {
  lineWidth: 0,
  fill: '#dcdcdc',
  fillOpacity: 0.3,
  stroke: '#ccc'
}

const style2 = {
  fill: '#aaaaaa',
  textAlign: 'end',
  textBaseline: 'top',
  fontWeight: 300
}
const barLabel = ['value', {
  offset: 10,
  textStyle: {
    fill: '#595959',
    fontSize: 12
  }
}];

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
      padding: [20, 20, 50, 100],
      scale: [{
        dataKey:'value',
        alias: '体能分'
      }],
      label,
      barLabel,
      tickLine,
      title,
      style1,
      style2
    }
  }
};
</script>

