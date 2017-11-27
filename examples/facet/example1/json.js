const allData = require('./data');
const { chartData, dataMapping, scale } = allData;

export const config = {
  data: chartData,
  tooltip: true,
  dataMapping,
  scale,
  facet: {
    type: 'rect',
    fields: ['cut', 'clarity'],
    views: {
      axis: true,
      tooltip: true,
      series: {
        quickType: 'point',
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
