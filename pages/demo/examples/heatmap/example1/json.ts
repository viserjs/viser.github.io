import viser from 'viser';
import { source, scale } from './data';

viser({
  data: source,
  scale,
  legend: true,
  tooltip: true,
  axis: [{
    dataKey: 'name',
    tickLine: null,
    grid: {
      align: 'center',
      lineStyle: {
        lineWidth: 1,
        lineDash: null,
        stroke: '#f0f0f0'
      }
    }
  }, {
    dataKey: 'day',
    title: null,
    grid: {
      align: 'center',
      lineStyle: {
        lineWidth: 1,
        lineDash: null,
        stroke: '#f0f0f0'
      },
      showFirstLine: true
    }
  }],
  series: [{
    quickType: 'polygon',
    color: ['sales', '#BAE7FF-#1890FF-#0050B3'],
    position: 'name*day',
    label: ['sales', {
      offset: -2,
      textStyle: {
        fill: '#fff',
        shadowBlur: 2,
        shadowColor: 'rgba(0, 0, 0, .45)'
      }
    }],
    style: {
      lineWidth: 1,
      stroke: '#fff'
    }
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
});
