const allData = require('./data');
const { data, dataPre, scale } = allData;

export const config = {
  data,
  dataPre,
  scale,
  axis: [{
    dataKey: 'item',
    line: null,
    tickLine: null,
    grid: {
      lineStyle: {
        lineDash: null
      },
      hideFirstLine: false
    }
  }, {
    dataKey: 'score',
    line: null,
    tickLine: null,
    grid: {
      type: 'polygon',
      lineStyle: {
        lineDash: null
      }
    }
  }],
  coord: {
    type: 'polar',
    radius: 0.8,
  },
  legend: {
    dataKey: 'user',
    marker: 'circle',
    offset: 30
  },
  tooltip: {
    showTitle: false,
    dataKey: 'item*score',
  },
  series: [{
    quickType: 'line',
    position: 'item*score',
    size: 2,
    color: 'user',
  },{
    quickType: 'point',
    position: 'item*score',
    size: 4,
    shape: 'circle',
    color: 'user',
    style: {
      stroke: '#fff',
      lineWidth: 1,
      fillOpacity: 1
    }
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};
