const allData = require('./data');
const { data, dataMapping, dataPre, scale } = allData;

export const config = {
  data: data,
  dataPre: {
    transform: [
    // {
    //   exchangeType: 'type-3',
    //   fields: ['country', 'year', 'value'],
    // },
    {
      type: 'percent',
      field: 'value',
      dimension: 'country',
      groupBy: ['year'],
      as: 'percent'
    }]
  },
  dataMapping: dataMapping,
  scale: scale,
  axis: true,
  tooltip: true,
  series: [{
    quickType: 'stackBar',
    style: {
      stroke: '#fff',
      lineWidth: 1
    }
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
};
