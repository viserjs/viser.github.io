import { Chart, Tooltip, Axis, Interval, Guide } from 'viser-react';
import * as React from 'react';

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
  render() {
    const Iguide:any = Guide;
    return (
      <Chart forceFit height={400} data={data} scale={scale} padding={[20, 20, 50, 50]}>
        <Tooltip shared={true}/>
        <Axis dataKey="type" label={label} tickLine={tickLine}/>
        <Interval position="type*value" opacity={1}
        label={['value', {
          useHtml: true,
          htmlTemplate: function htmlTemplate(text, item) {
            var a = item.point;
            a.percent = String(Math.round(a.percent * 100)) + "%";
            return '<span class="g2-label-item"><p class="g2-label-item-value">' + a.value + '</p><p class="g2-label-item-percent">' + a.percent + '</p></div>';
          }
        }]}
        />
        <Iguide 
          type="dataMarker" 
          top={true} 
          position={['2014-01', 1750]}
          content='因政策调整导致销量下滑'
          style={style}
          lineLength={30}
        />
      </Chart>
    );
  }
}

