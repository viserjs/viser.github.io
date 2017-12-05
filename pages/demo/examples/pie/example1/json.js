import { data, dataPre, scale } from './data'

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
      formatter: (val, item) => {
        return item.point.item + ': ' + val;
      }
    }],
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 500,
  },
};

