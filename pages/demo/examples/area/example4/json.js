const allData = require('./data');
const { data, dataPre, scale } = allData;

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
    quickType: 'stackArea',
    position: 'year*percent',
    color: 'country',
  }, {
    quickType: 'line',
    adjust: 'stack',
    position: 'year*percent',
    color: 'country',
    size: 2,
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};
