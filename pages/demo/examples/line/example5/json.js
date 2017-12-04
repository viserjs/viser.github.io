const allData = require('./data');
const { data, dataPre, scale } = allData;

export const config = {
  data,
  dataPre,
  scale,
  axis: true,
  tooltip: true,
  legend: true,
  series: [{
    quickType: 'line',
    position: 'month*value',
    shape: 'hv',
    color: 'key',
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};
