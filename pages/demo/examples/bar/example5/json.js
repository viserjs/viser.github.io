const allData = require('./data');
const { data } = allData;

export const config = {
  data: data,
  axis: true,
  tooltip: true,
  series: [{
    quickType: 'bar',
    position: 'x*y',
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};