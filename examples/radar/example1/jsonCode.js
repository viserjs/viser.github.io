const data = [
  { item: 'Design', a: 70, b: 30 },
  { item: 'Development', a: 60, b: 70 },
  { item: 'Marketing', a: 50, b: 60 },
  { item: 'Users', a: 40, b: 50 },
  { item: 'Test', a: 60, b: 70 },
  { item: 'Language', a: 70, b: 50 },
  { item: 'Technology', a: 50, b: 40 },
  { item: 'Support', a: 30, b: 40 },
  { item: 'Sales', a: 60, b: 40 },
  { item: 'UX', a: 50, b: 60 }
];

const dataPre = {
  transform: [{
    type: 'fold',
    fields: [ 'a', 'b' ],
    key: 'user',
    value: 'score',
  }]
};

const dataMapping = [
  {
    dataKey: 'item',
    mark: 'column',
  }, {
    dataKey: 'user',
    mark: 'color',
  }, {
    dataKey: 'score',
    mark: 'row',
  }
];

const scale = [{
  dataKey: 'score',
  min: 0,
}];


export const config = {
  data,
  dataPre,
  dataMapping,
  scale,
  tooltip: true,
  legend: {
    dataKey: 'user',
    marker: 'circle',
    offset: 30,
  },
  series: [{
    position: ['item', 'score'],
    gemo: 'line',
    size: 2,
  }, {
    position: ['item', 'score'],
    gemo: 'line',
    size: 2,
  }, {
    position: ['item', 'score'],
    gemo: 'point',
    shape: 'circle',
    style: {
      // stroke: '#fff',
      lineWidth: 1,
      fillOpacity: 1,
    },
  }],
  axis: [{
    dataKey: 'item',
    show: true,
    line: null,
    tickLine: null,
    grid: {
      lineStyle: {
        lineDash: null
      },
      hideFirstLine: false
    },
  }, {
    dataKey: 'score',
    show: true,
    tickLine: null,
    grid: {
      type: 'polygon',
      lineStyle: {
        lineDash: null
      },
      alternateColor: 'rgba(0, 0, 0, 0.04)',
    },
  }],
  coord: {
    type: 'polar'
  },
  chart: {
    container: 'example1',
    forceFit: true,
    height: 400,
  },
};

