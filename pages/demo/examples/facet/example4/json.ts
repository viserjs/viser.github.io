const allData = require('./data');
const { data, scale } = allData;

export const config = {
  data,
  scale,
  tooltip: true,
  legend: true,
  axis: true,
  facet: {
    type: 'rect',
    fields: ['cut'],
    views: {
      axis: true,
      tooltip: true,
      series: {
        quickType: 'point',
        position: 'carat*price',
        color: 'clarity',
        opacity: 0.3,
        size: 3,
      }
    }
  },
  chart: {
    container: 'mount',
    forceFit: true,
    height: 600,
  },
};
