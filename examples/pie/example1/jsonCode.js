const data = [
  { area: '亚太地区', profit: 7860 * 0.189 },
  { area: '非洲及中东', profit: 7860 * 0.042 },
  { area: '拉丁美洲', profit: 7860 * 0.025 },
  { area: '中欧和东欧', profit: 7860 * 0.018 },
  { area: '西欧', profit: 7860 * 0.462 },
  { area: '北美', profit: 7860 * 0.265 },
];
const dataMapping = [
  {
    dataKey: 'area',
    mark: ['column', 'color'],
  }, {
    dataKey: 'profit',
    mark: 'row',
  }
];

export const config = {
  data,
  dataMapping,
  coord: {
    // type: 'theta',
    radius: 1, // 外半径
    innerRadius: 0.6, // 内半径
  },
  legend: true,
  tooltip: {
    title: 'hahah',
    offset: 0,
    crossHairs: {
      show: false,
    },
  },
  series: [{
    position: 'profit',
    quickType: 'pie',
    label: true,
  }],
  chart: {
    container: 'example1',
    forceFit: true,
    height: 400,
  },
};

