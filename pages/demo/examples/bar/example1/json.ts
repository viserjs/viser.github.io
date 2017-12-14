const allData = require('./data');
const { data, scale } = allData;

export const config = {
  data: data,
  scale: scale,
  axis: true,
  tooltip: true,
  series: [{
    quickType: 'stackBar',
    position: 'year*sales',
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};