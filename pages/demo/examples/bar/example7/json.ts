const allData = require('./data');
const { data, dataPre, scale } = allData;

export const config = {
  data,
  dataPre,
  scale,
  axis: {
    dataKey: 'value',
    label: {
      formatter: val => {
        if ((val % 2)) {
          return val;
        }
        return '';
      }
    },
  },
  tooltip: {
    crosshairs: false,
    inPlot: false,
    position: 'top',
  },
  series: [{
    quickType: 'bar',
    position: 'value*count',
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};