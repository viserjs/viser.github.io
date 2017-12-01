const allData = require('./data');
const { data, dataPre } = allData;

export const config = {
  data,
  dataPre,
  axis: true,
  tooltip: {
    crosshairs: false,
    inPlot: false,
    position: 'top',
  },
  series: [{
    quickType: 'stackBar',
    position: 'depth*count',
    color: 'cut',
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};