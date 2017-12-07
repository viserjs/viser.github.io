import viser from 'viser';
import { data, dataPre, scale } from './data';

console.log(viser({
  data,
  dataPre,
  scale,
  axis: false,
  tooltip: {
    showTitle: false,
    itemTpl: '<li data-index={index} style="margin-bottom:4px;">'
        + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
        + '{name}<br/>'
        + '<span style="padding-left: 16px">浏览人数：{pv}</span><br/>'
        + '<span style="padding-left: 16px">占比：{percent}</span><br/>'
        + '</li>'
  },
  legend: true,
  coord: {
    type: 'rect',
    direction: 'LT',
  },
  series: [{
    quickType: 'funnel',
    color: ['action', [ '#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF' ]],
    position: 'action*pv',
    label: ['action*pv', (action, pv) => {
      return action + ' ' + pv;
    }, {
      offset: 35,
      labelLine: {
        lineWidth: 1,
        stroke: 'rgba(0, 0, 0, 0.15)'
      }
    }],
    tooltip: ['action*pv*percent', (action, pv, percent) => {
      return {
        name: action,
        percent: parseInt(percent * 100) + '%',
        pv: pv
      };
    }]
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
}));
