const allData = require('./data');
const { data, dataPre } = allData;

export const config = {
  data,
  dataPre,
  axis: [{
    dataKey: 'value',
    position: 'right',
  }, {
    dataKey: 'label',
    label: {
      offset: 12,
    },
  }],
  coord: {
    type: 'rect',
    direction: 'LT',
  },
  legend: true,
  tooltip: true,
  series: [{
    quickType: 'bar',
    position: 'label*value',
    color: 'type',
    adjust: [{
      type: 'dodge',
      marginRatio: 1 / 32
    }],
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};