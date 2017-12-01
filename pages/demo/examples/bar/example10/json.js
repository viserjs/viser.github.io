const allData = require('./data');
const { data, dataPre } = allData;

export const config = {
  data,
  dataPre,
  axis: {
    dataKey: 'country',
    label: {
      offset: 12,
    },
  },
  coord: {
    type: 'rect',
    direction: 'LB',
  },
  tooltip: true,
  series: [{
    quickType: 'stackBar',
    position: 'country*population',
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};