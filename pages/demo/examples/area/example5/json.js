const allData = require('./data');
const { data, averages, scale } = allData;

export const config = {
  data: averages,
  scale,
  axis: true,
  legend: true,
  tooltip: {
    crosshairs: {
      type: 'y'
    }
  },
  series: [{
    quickType: 'line',
    position: 'time*temperature',
    size: 2
  }, {
    quickType: 'point',
    position: 'time*temperature',
    size: 4,
    style: {
      stroke: '#fff',
      lineWidth: 1,
      fillOpacity: 1
    }
  }],
  views: [{
    viewId: 2,
    data: data,
    tooltip: false,
    series: [{
      quickType: 'area',
      position: 'time*temperature',
    }]
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};
