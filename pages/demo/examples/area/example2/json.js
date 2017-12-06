// const allData = require('./data');
// const { data, dataPre, scale } = allData;

export const config = {
  data,
  dataPre,
  scale,
  axis: true,
  legend: true,
  tooltip: {
    crosshairs: {
      type: 'y'
    }
  },
  series: [{
    quickType: 'area',
    position: 'year*value',
    color: 'type',
  }, {
    quickType: 'line',
    position: 'year*value',
    color: 'type',
    size: 2,
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};
