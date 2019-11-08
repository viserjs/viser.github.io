import { Chart, Tooltip, Axis, Interval, Guide } from 'viser-react';
import * as $ from 'jquery';
import * as React from 'react';

const oriData = [{
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
}]

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
    return (
      <Chart forceFit data={trueData} height={400} padding={[20, 20, 50, 100]} scale={[{
        dataKey:'value',
        alias: '体能分'
      }]}>
        <Tooltip shared={true}/>
        <Axis dataKey="name" label={label} tickLine={tickLine}/>
        <Axis dataKey="value" label={null} title={title}/>
        <Interval 
          position="name*value" 
          opacity={1}
          label={barLabel} 
        />
        <Iguide
          type='region'
          start={['start', 'max']}
          end={['end', 80]}
          style={style1}
        />
        <Iguide
          type='text'
          top={true}
          position={['end', 'max']}
          content='达标区间'
          style={style2}
          offsetX={-10}
          offsetY={6}
        />
      </Chart>
    );
  }
}
