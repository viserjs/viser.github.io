const data = [
  {gender: 'female', height: 42.2, weight: 51.6, value: 2},
  {gender: 'female', height: 181.2, weight: 61.6, value: 22},
  {gender: 'female', height: 161.2, weight: 51.6, value: 2},
  {gender: 'female', height: 171.2, weight: 51.6, value: 2},
  {gender: 'male', height: 179.2, weight: 69.3, value: 42},
  {gender: 'male', height: 190.2, weight: 82.3, value: 2},
  {gender: 'male', height: 170.2, weight: 62.3, value: 12},
  {gender: 'male', height: 168.2, weight: 56.3, value: 2},
  {gender: 'male', height: 188.2, weight: 72.3, value: 2},
];

const dataMapping = [
  {
    dataKey: 'gender',
    mark: 'color',
  }, {
    dataKey: 'height',
    mark: 'column',
  }, {
    dataKey: 'weight',
    mark: 'row',
  }, {
    dataKey: 'value',
    mark: 'size',
  }
];

export const config = {
  data,
  dataMapping,
  tooltip: true,
  legend: {
    dataKey: 'gender',
    marker: 'circle',
  },
  series: [{
    position: ['height', 'weight'],
    quickType: 'point',
  }],
  axis: [{
    dataKey: 'weight',
    show: true,
    position: 'left',
  }, {
    dataKey: 'height',
    show: true,
    position: 'bottom',
  }],
  chart: {
    container: 'example1',
    forceFit: true,
    height: 400,
  },
};

