const data = [
  { area: '亚太地区', profit: 7860 * 0.189 },
  { area: '非洲及中东', profit: 7860 * 0.42 },
  { area: '拉丁美洲', profit: 7860 * 0.25 },
  { area: '中欧和东欧', profit: 7860 * 0.18 },
  { area: '西欧', profit: 7860 * 0.462 },
  { area: '北美', profit: 7860 * 0.265 },
];

const dataPre= {
  transform: [
    { type: 'sort-by', field: 'profit' }
  ],
};

const dataMapping = [
  {
    dataKey: 'area',
    mark: ['column', 'color'],
    scale: {},
  }, {
    dataKey: 'profit',
    mark: 'row',
    scale: {},
  }
];


export const config = {
  data,
  dataMapping,
  dataPre,
  coord: {
    type: 'polar',
    radius: 0.8,
  },
  tooltip: {
    offset: 0,
    crossHairs: {
      show: false,
    },
  },
  legend: true,
  series: [{
    position: ['area', 'profit'],
    gemo: 'interval',
    fill: ['#CB5050', '#A72023', '#9D1F22', '#70171A', '#461012'],
    label: true,
  }],
  chart: {
    container: 'example1',
    forceFit: true,
    height: 400,
  },
};

