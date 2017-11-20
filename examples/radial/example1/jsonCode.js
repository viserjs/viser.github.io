const data = [
  { city: '上海', pv: 0.1 },
  { city: '浙江', pv: 0.8 },
  { city: '江苏', pv: 0.4 },
  { city: '江西', pv: 0.5 },
];

const dataPre = {
  transform: [
    { type: 'sort-by', field: 'pv' }
  ],
};

const dataMapping = [
  {
    dataKey: 'city',
    mark: 'column',
  }, {
    dataKey: 'pv',
    mark: 'row',
  }
];

export const config = {
  data,
  dataPre,
  dataMapping,
  coord: {
    type: 'polar',
    direction: 'rotate',
    startAngle: -90,
    endAngle: 180,
  },
  series: [{
    position: ['city', 'pv'],
    quickType: 'bar',
    color: 'blue',
    style: {
      background: '#ddd',
    }
  }],
  chart: {
    container: 'example1',
    forceFit: true,
    height: 400,
  },
};
