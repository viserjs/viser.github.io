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
  coord: {
    radius: 0.75,
    innerRadius: 0.6,
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
      formatter: (val, item) => {
        return item.point.item + ': ' + val;
      }
    }],
  }],
  guide: [{
    type: 'html',
    position: ['50%', '50%'],
    html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">主机<br><span style="color:#8c8c8c;font-size:20px">200</span>台</div>',
    alignX: 'middle',
    alignY: 'middle',
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 500,
  },
};

