const allData = require('./data');
const { data, scale } = allData;

export const config = {
  data,
  scale,
  tooltip: true,
  legend: true,
  coord: { type: 'polar' },
  facet: {
    type: 'circle',
    fields: ['clarity'],
    views: {
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
    height: 600,
    padding: [30, 90, 80, 80],
  },
};
