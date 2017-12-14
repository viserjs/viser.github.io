const allData = require('./data');
const { data, dataPre } = allData;

export const config = {
  data: data,
  dataPre: dataPre,
  axis: true,
  tooltip: true,
  legend: true,
  series: [{
    quickType: 'stackBar',
    position: '月份*月均降雨量',
    color: 'name',
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};