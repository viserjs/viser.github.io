import viser from '../../../packages/viser/src/index';

const expectData = [
  {value: 100, name: '展现'},
  {value: 80, name: '点击'},
  {value: 60, name: '访问'},
  {value: 40, name: '咨询'},
  {value: 30, name: '订单'}
];
const actualData = [
  {value: 80, name: '展现'},
  {value: 50, name: '点击'},
  {value: 30, name: '访问'},
  {value: 10, name: '咨询'},
  {value: 5, name: '订单'}
];


viser({
  data: expectData,
  axis: false,
  tooltip: {
    showTitle: false,
    itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
  },
  legend: false,
  coord: {
    type: 'rect',
    direction: 'LT',
  },
  series: [{
    quickType: 'pyramid',
    position: 'name*value',
    color: ['name', [ '#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF' ]],
    label: ['name', {
      offset: 35,
      labelLine: {
        lineWidth: 1,
        stroke: 'rgba(0, 0, 0, 0.15)'
      }
    }],
    tooltip: ['name*value', (name, value) => {
      return {
        name: '预期' + name,
        value
      };
    }],
    opacity: 0.65,
  }],
  views: [{
    viewId: 1,
    data: actualData,
    coord: {
      type: 'rect',
      direction: 'LT',
    },
    tooltip: true,
    series: [{
      quickType: 'pyramid',
      position: 'name*value',
      color: ['name', [ '#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF' ]],
      tooltip: ['name*value', (name, value) => {
        return {
          name: '实际' + name,
          value
        };
      }],
      style: {
        lineWidth: 1,
        stroke: '#fff'
      },
      opacity: 1,
    }],
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
});
