const data = [
  { item: '事例一', count: 40 },
  { item: '事例二', count: 21 },
  { item: '事例三', count: 17 },
  { item: '事例四', count: 13 },
  { item: '事例五', count: 9 }
];

const dataPre = {
  transform: [{
    type: 'percent',
    field: 'count',
    dimension: 'item',
    as: 'percent'
  }]
};

const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%',
}];

export const config = {
  data: data,
  dataPre,
  scale: scale,
  axis: true,
  legend: {
    dataKey: 'item',
  },
  tooltip: {
    showTitle: false,
    dataKey: 'item*percent',
  },
  series: [{
    quickType: 'pie',
    position: 'percent',
    style: {
      lineWidth: 1,
      stroke: '#fff',
    },
    color: 'item',
    label: ['percent', {
      offset: -40,
      textStyle: {
        rotate: 0,
        textAlign: 'center',
        shadowBlur: 2,
        shadowColor: 'rgba(0, 0, 0, .45)'
      }
    }],
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 500,
  },
};

