const allData = require('./data');
const { data, scale } = allData;

export const config = {
  data,
  scale,
  axis: true,
  tooltip: true,
  series: [{
    quickType: 'line',
    position: 'year*value',
  },{
    quickType: 'point',
    position: 'year*value',
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};
