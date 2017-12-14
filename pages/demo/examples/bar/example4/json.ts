const allData = require('./data');
const { data, dataPre, scale } = allData;

export const config = {
  data: data,
  dataPre: {
    transform: [{
      type: 'percent',
      field: 'value',
      dimension: 'country',
      groupBy: ['year'],
      as: 'percent'
    }]
  },
  scale: scale,
  axis: true,
  tooltip: true,
  legend: true,
  series: [{
    quickType: 'stackBar',
    style: {
      stroke: '#fff',
      lineWidth: 1
    },
    position: 'year*percent',
    color: 'country',
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};