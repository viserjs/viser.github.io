const allData = require('./data');
const { data, scale } = allData;

export const config = {
  data,
  scale,
  axis: true,
  legend: true,
  tooltip: {
    crosshairs: {
      type: 'y'
    }
  },
  series: [{
    quickType: 'stackArea',
    position: 'year*value',
    color: 'country',
  }, {
    quickType: 'line',
    adjust: 'stack',
    position: 'year*value',
    color: 'country',
    size: 2,
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};
