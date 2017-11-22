const data = [
  ['Europe', 'Europe', 'Europe', 'Asia', 'Asia', 'Asia'],
  ['1750', '1800', '1850', '1750', '1800', '1850'],
  [163, 203, 276, 502, 635, 809],
];

const dataPre = {
  transform: [{
    exchangeType: 'type-3',
    fields: ['country', 'year', 'value'],
  },{
    type: 'percent',
    field: 'value',
    dimension: 'country',
    groupBy: ['year'],
    as: 'percent'
  }]
};

const dataMapping = [{
  dataKey: 'year',
  mark: 'column',
}, {
  dataKey: 'percent',
  mark: 'row',
}, {
  dataKey: 'country',
  mark: 'color',
}];

const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.2%',
}];

export const config = {
  data,
  dataPre,
  dataMapping,
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
    container: 'example1',
    forceFit: true,
    height: 400,
  },
};

