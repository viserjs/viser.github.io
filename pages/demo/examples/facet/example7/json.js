const allData = require('./data');
const { data } = allData;

export const config = {
  data,
  tooltip: {
    showTitle: false,
  },
  legend: {
    dataKey: 'cut',
    position: 'top',
  },
  coord: {
    type: 'theta',
  },
  facet: {
    type: 'tree',
    fields: ['grade','class'],
    line: {
      stroke: '#00a3d7'
    },
    lineSmooth: true,
    views: {
      axis: true,
      tooltip: true,
      dataPre: {
        transform: {
          type: 'percent',
          field: 'count',
          dimension: 'gender',
          as: 'percent'
        },
      },
      scale: {
        dataKey: 'percent',
        formatter: '.2%',
      },
      series: {
        quickType: 'stackBar',
        position: 'percent',
        color: 'gender',
      }
    }
  },
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
    padding: [60, 90, 80, 80],
  },
};
