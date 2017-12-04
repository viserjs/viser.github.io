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
    position: 'month*temperature',
    color: 'city',
    shape: 'smooth',
  },{
    quickType: 'point',
    position: 'month*temperature',
    color: 'city',
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};
