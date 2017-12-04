const allData = require('./data');
const { data, dataPre } = allData;

export const config = {
  data,
  dataPre,
  axis: [{
    dataKey: 'State',
    label: {
      offset: 12,
    },
  }],
  coord: {
    type: 'rect',
    direction: 'LB',
  },
  legend: true,
  tooltip: true,
  series: [{
    quickType: 'stackBar',
    position: 'State*人口数量',
    color: '年龄段',
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};