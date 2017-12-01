const allData = require('./data');
const { data, dataPre } = allData;

export const config = {
  data,
  dataPre,
  axis: [{
    dataKey: 'profession',
    label: {
      offset: 12,
    },
  }],
  coord: {
    type: 'rect',
    direction: 'LB',
  },
  legend: true,
  tooltip: true,
  series: [{
    quickType: 'bar',
    position: 'profession*range',
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
    padding: [20, 80, 50, 110],
  },
};