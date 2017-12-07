import viser from 'viser';
import { data, dataPre, scale } from './data'

viser({
  data: data,
  dataPre,
  scale: scale,
  axis: true,
  tooltip: {
    showTitle: false,
    crosshairs: {
      type: 'rect'
    },
    itemTpl: '<li data-index={index} style="margin-bottom:4px;">'
        + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
        + '{name}<br/>'
        + '<span style="padding-left: 16px">最大值：{high}</span><br/>'
        + '<span style="padding-left: 16px">上四分位数：{q3}</span><br/>'
        + '<span style="padding-left: 16px">中位数：{median}</span><br/>'
        + '<span style="padding-left: 16px">下四分位数：{q1}</span><br/>'
        + '<span style="padding-left: 16px">最小值：{low}</span><br/>'
        + '</li>'
  },
  legend: false,
  series: [{
    quickType: 'box',
    style: {
      stroke: '#545454',
      fill: '#1890FF',
      fillOpacity: 0.3
    },
    position: 'x*range',
    tooltip: ['x*low*q1*median*q3*high', (x, low, q1, median, q3, high) => {
      return {
        name: x,
        low,
        q1,
        median,
        q3,
        high
      };
    }]
  }],
  views: [{
    viewId: 4,
    axis: false,
    tooltip: false,
    scale: scale,
    series: [{
      quickType: 'point',
      position: 'x*outliers',
      size: 3,
      active: false,
    }],
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
});
