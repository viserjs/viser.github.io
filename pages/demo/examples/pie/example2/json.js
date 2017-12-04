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

