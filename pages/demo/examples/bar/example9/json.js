const allData = require('./data');
const { data, dataPre, scale } = allData;

export const config = {
  data,
  dataPre,
  scale,
  axis: true,
  tooltip: {
    crosshairs: false,
    inPlot: false,
    position: 'top',
  },
  series: [{
    quickType: 'bar',
    position: 'depth*count',
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};