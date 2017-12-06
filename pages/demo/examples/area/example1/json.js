// const allData = require('./data');
// const { data, scale } = allData;

export const config = {
  data,
  scale,
  axis: [{
    dataKey: 'value',
    label: {
      formatter: val => {
        return (val / 10000).toFixed(1) + 'k';
      }
    }
  }],
  tooltip: {
    crosshairs: {
      type: 'y'
    }
  },
  series: [{
    quickType: 'line',
    position: 'year*value',
    size: 2,
  },{
    quickType: 'area',
    position: 'year*value',
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};
