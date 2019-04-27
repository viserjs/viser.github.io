import { Chart, Tooltip, Axis, Line, Legend, Point } from 'viser-react';
import * as $ from 'jquery';
import * as React from 'react';

function getYearsum() {
  var sum = 0;
  for (var i = 0; i < data.length; i++) {
    var d = data[i];
    if (d.year === 2016) {
      sum += d.value;
    }
  }
  return sum;
}

function getYearPercent(sum) {
  var percentage = {};
  for (var i = 0; i < data.length; i++) {
    var d = data[i];
    if (d.year === 2016) {
      percentage[d.type] = {
        percent: d.value / sum,
        value: d.value
      };
    }
  }
  return percentage;
}

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
  year: 2013,
  type: '食品烟酒',
  value: 4127
}, {
  year: 2013,
  type: '衣着',
  value: 1027
}, {
  year: 2013,
  type: '居住',
  value: 2999
}, {
  year: 2013,
  type: '生活用品',
  value: 806
}, {
  year: 2013,
  type: '交通通行',
  value: 1627
}, {
  year: 2013,
  type: '文教娱',
  value: 1398
}, {
  year: 2013,
  type: '医疗保健',
  value: 912
}, {
  year: 2013,
  type: '其他',
  value: 325
}, {
  year: 2014,
  type: '食品烟酒',
  value: 4494
}, {
  year: 2014,
  type: '衣着',
  value: 1099
}, {
  year: 2014,
  type: '居住',
  value: 3201
}, {
  year: 2014,
  type: '生活用品',
  value: 890
}, {
  year: 2014,
  type: '交通通行',
  value: 1869
}, {
  year: 2014,
  type: '文教娱',
  value: 1536
}, {
  year: 2014,
  type: '医疗保健',
  value: 1045
}, {
  year: 2014,
  type: '其他',
  value: 358
}, {
  year: 2015,
  type: '食品烟酒',
  value: 4814
}, {
  year: 2015,
  type: '衣着',
  value: 1164
}, {
  year: 2015,
  type: '居住',
  value: 3419
}, {
  year: 2015,
  type: '生活用品',
  value: 951
}, {
  year: 2015,
  type: '交通通行',
  value: 2087
}, {
  year: 2015,
  type: '文教娱',
  value: 1723
}, {
  year: 2015,
  type: '医疗保健',
  value: 1165
}, {
  year: 2015,
  type: '其他',
  value: 389
}, {
  year: 2016,
  type: '食品烟酒',
  value: 5151
}, {
  year: 2016,
  type: '衣着',
  value: 1203
}, {
  year: 2016,
  type: '居住',
  value: 3746
}, {
  year: 2016,
  type: '生活用品',
  value: 1044
}, {
  year: 2016,
  type: '交通通行',
  value: 2338
}, {
  year: 2016,
  type: '文教娱',
  value: 1915
}, {
  year: 2016,
  type: '医疗保健',
  value: 1307
}, {
  year: 2016,
  type: '其他',
  value: 406
}];

const yearSum = getYearsum();
const yearPercent = getYearPercent(yearSum);

const containerTpl = '<div class="g2-legend">2016 年支出排行<div class="g2-legend-list"></div></div>';

const itemTpl = function itemTpl(value, color, checked, index) {
  var markerDom = '<div class="g2-legend-marker" style="background-color:' + color + '">' + (index + 1) + '</div>';
  var nameDom = '<div class="legend-item-name">' + value + '</div>';
  var percentDom = '<div class="legend-item-percent">' + yearPercent[value].percent.toFixed(2) + '</div>';
  var valueDom = '<div class="legend-item-value">' + yearPercent[value].value + '</div>';
  return '<div class="g2-legend-list-item" data-value="' + value + '">' + markerDom + nameDom + percentDom + valueDom + '</div>';
}

export default class App extends React.Component {
  componentDidMount() {
    this.setStyle();
  }

  setStyle = () => {
    const id = 'legend-html';
    if (document.getElementById(id)) {
        return;
    }
    const styleTxt = `
      .g2-legend {
          width: 250px !important;
          height: 100%;
          font-size: 14px;
          color: #595959;
      }

      .g2-legend-title {
          color: #5a5a5a;
          font-size: 14px;
      }

      .g2-legend-list {
          margin-top: 10px;
      }

      .g2-legend-list-item {
          width: 100%;
          height: 30px;
          margin-bottom: 10px;
      }

      .legend-item-name {
          min-width:60px;
          height: 100%;
          float: left;
          margin-left: 8px;
          font-size: 10px;
          color: #595959;
          text-align: left;
      }

      .legend-item-name:after {
          display: inline-block;
          width: 0;
          height: 100%;
          vertical-align: middle;
          content: '';
      }

      .legend-item-percent {
          min-width: 30px;
          height: 100%;
          float: left;
          margin-left: 10px;
          font-size: 10px;
          color: #949494;
          text-align: left;
      }

      .legend-item-percent:after {
          display: inline-block;
          width: 0;
          height: 100%;
          vertical-align: middle;
          content: '';
      }

      .legend-item-value {
          min-width: 80px;
          height: 100%;
          float: left;
          margin-left: 10px;
          font-size: 10px;
          color: #595959;
          text-align: left;
      }

      .legend-item-value:after {
          display: inline-block;
          width: 0;
          height: 100%;
          vertical-align: middle;
          content: '';
      }
    `;
    const style = document.createElement('style');
    style.setAttribute('id', id);
    style.innerHTML = styleTxt;
    document.getElementsByTagName('head')[0].appendChild(style);
  }

  render() {
    return (
      <Chart forceFit data={data} height={400} padding={[20, 210, 30, 50]} scale={[{
        dataKey:'year',
        type: 'timeCat',
        range: [0, 1]
      }]}>
        <Tooltip />
        <Legend
          useHtml={true}
          position='right'
          // reactive={true}
          // legendStyle={{
          //   MARKER_CLASS: {
          //     width: '18px',
          //     height: '18px',
          //     lineHeight: '18px',
          //     borderRadius: '50px',
          //     display: 'inline-block',
          //     marginRight: '4px',
          //     textAlign: 'center',
          //     fontZize: '10px',
          //     marginTop: '3px',
          //     color: 'white',
          //     float: 'left',
          //     borderStyle: 'solid',
          //     borderWidth: '1px',
          //     borderColor: '#ccc'
          //   }
          // }}
          containerTpl={containerTpl}
          itemTpl={itemTpl}
        />
        <Axis dataKey="year" label={label}/>
        <Axis dataKey="value" label={labelFormat}/>
        <Line 
          position="year*value" 
          color={['type', ['#ff4d4f', '#ff7a45', '#ffa940', '#facc14', '#bae637', '#73d13d', '#36cfc9', '#40a9ff']]} 
        />
      </Chart>
    );
  }
}
