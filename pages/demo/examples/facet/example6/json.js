const allData = require('./data');
const { data, scale } = allData;

export const config = {
  data,
  scale,
  tooltip: {
    crosshairs: false
  },
  legend: {
    dataKey: 'cut',
    position: 'top',
  },
  axis: {
    dataKey: 'cut',
    label: null,
    tickLine: null
  },
  facet: {
    type: 'tree',
    fields: ['clarity'],
    line: {
      stroke: '#c0d0e0'
    },
    lineSmooth: true,
    views: {
      axis: true,
      tooltip: true,
      dataPre: {
        transform: {
          type: 'aggregate',
          fields: [ 'price' ],
          operations: [ 'mean' ],
          as: [ 'mean' ],
          groupBy: [ 'cut' ]
        },
      },
      series: {
        quickType: 'bar',
        position: 'cut*mean',
        color: 'cut',
      }
    }
  },
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
    padding: [20, 80],
  },
};
