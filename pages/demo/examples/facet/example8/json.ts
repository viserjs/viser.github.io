const allData = require('./data');
const { tmpData, scale, dataPre } = allData;

export const config = {
  data: tmpData,
  scale,
  dataPre,
  tooltip: true,
  legend: true,
  facet: {
    type: 'mirror',
    fields: ['gender'],
    transpose: true,
    views: {
      axis: true,
      tooltip: true,
      series: {
        quickType: 'bar',
        position: 'age*total_percentage',
        color: ['gender', [ '#1890ff', '#f04864' ]],
      },
    }
  },
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};
