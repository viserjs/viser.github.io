const allData = require('./data');
const { data, scale } = allData;

export const config = {
  data,
  scale,
  tooltip: true,
  legend: true,
  axis: true,
  facet: {
    type: 'list',
    fields: ['cut'],
    cols: 3,
    padding: 30,
    views: {
      axis: true,
      tooltip: true,
      series: {
        quickType: 'point',
        position: 'carat*price',
        color: 'cut',
        opacity: 0.3,
        size: 3,
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
