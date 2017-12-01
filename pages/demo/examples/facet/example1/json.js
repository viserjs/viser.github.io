const allData = require('./data');
const { chartData, scale } = allData;

export const config = {
  data: chartData,
  tooltip: true,
  scale,
  legend: true,
  facet: {
    type: 'rect',
    fields: ['cut', 'clarity'],
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
  },
};
