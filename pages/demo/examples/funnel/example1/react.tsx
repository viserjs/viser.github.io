import { Chart, Tooltip, Axis, Box, Legend, Pyramid, Coord, Guide } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const sourceData = [
  { action: '浏览网站', pv: 50000 },
  { action: '放入购物车', pv: 35000 },
  { action: '生成订单', pv: 25000 },
  { action: '支付订单', pv: 15000 },
  { action: '完成交易', pv: 8000 },
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'percent',
  field: 'pv',
  dimension: 'action',
  as: 'percent'
});
const data = dv.rows;

const scale = {
  dataKey: 'percent',
  nice: false,
};

const tooltipOpts = {
  showTitle: false,
  itemTpl: '<li data-index={index} style="margin-bottom:4px;">'
      + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
      + '{name}<br/>'
      + '<span style="padding-left: 16px">浏览人数：{pv}</span><br/>'
      + '<span style="padding-left: 16px">占比：{percent}</span><br/>'
      + '</li>'
};

const funnelOpts = {
  position: 'action*percent',
  color: ['action', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF']],
  label: ['action*pv', (action: any, pv: any) => {
    return action + ' ' + pv;
  }, {
    offset: 35,
    labelLine: {
      lineWidth: 1,
      stroke: 'rgba(0, 0, 0, 0.15)',
    }
  }],
  tooltip: ['action*pv*percent', (action: any, pv: any, percent: any) => ({
    name: action,
    percent: Math.floor(percent * 100) + '%',
    pv: pv,
  })]
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Chart forceFit height={400} padding={[ 20, 120, 95 ]} data={data} scale={scale}>
          <Tooltip {...tooltipOpts} />
          <Legend />
          <Coord type='rect' direction='LT' />
          <Pyramid {...funnelOpts} />
          {
            data.map((obj: any) => {
              console.log(obj);
              const content = parseInt(String(obj.percent * 100)) + '%';
              return (<Guide type="text" top={true} position={{
                action: obj.action,
                percent: 'median'
              }} content={content} style={{
                fill: '#fff',
                fontSize: '12',
                textAlign: 'center',
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, .45)'
              }}/>);
            })
          }
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));

