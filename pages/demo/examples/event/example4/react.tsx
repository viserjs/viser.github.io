import { Chart, Tooltip, Axis, Interval, Guide } from 'viser-react';
import * as $ from 'jquery';
import * as React from 'react';

const oriData = [{
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

export default class App extends React.Component {
  state = {
    sortType: 'positive',
  };
  componentDidMount() {
    this.setStyle();
    const that = this;
    $('.sort-button').click(function() {
      const sortTypeOri = that.state.sortType;
      const sortType = sortTypeOri === 'positive' ? 'negative' : 'positive';
      that.setState({
        sortType
      })
    });
  }

  sortData = (sortType,data) => {
    if (sortType === 'positive') {
      data.sort(function(a, b) {
        return b.value - a.value;
      });
    } else {
      data.sort(function(a, b) {
        return a.value - b.value;
      });
    }
    return data;
  }

  findMaxMin = () => {
    var maxValue = 0;
    var minValue = 50000;
    var maxObj = null;
    var minObj = null;
    for (var i = 0; i < oriData.length; i++) {
      var d = oriData[i];
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

  setStyle = () => {
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

  render() {
    const sortType = this.state.sortType;
    const Iguide:any = Guide;
    const trueData = this.sortData(sortType,oriData);
    const max_min = this.findMaxMin();
    const max = max_min.max;
    const min = max_min.min;
    return (
      <Chart forceFit data={trueData} height={400} padding={[20, 20, 50, 120]} scale={[{
        dataKey:'value',
        alias: '订单金额(万)'
      }]}>
        <Tooltip shared={true}/>
        <Axis dataKey="type" label={label} tickLine={tickLine}/>
        <Axis dataKey="value" label={label} title={title}/>
        <Interval 
          position="type*value" 
          opacity={1} 
        />
        <Iguide
          type='dataMarker'
          top={true}
          content={'最高值：' + max.value}
          position={[max.type, max.value]}
          style={style}
          display={display}
        />
        <Iguide
          type='dataMarker'
          top={true}
          content={'最低值：' + min.value}
          position={[min.type, min.value]}
          style={style}
          display={display}
        />
      </Chart>
    );
  }
}
