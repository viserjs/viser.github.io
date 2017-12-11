import viser from 'viser';
import { data, dataPre } from './data';

console.log(viser({
  data,
  dataPre,
  legend: {
    offset: 40
  },
  tooltip: {
    showTitle: false,
    crosshairs: false
  },
  axis: [{
    dataKey: 'x',
    grid: {
      lineStyle: {
        stroke: '#d9d9d9',
        lineWidth: 1,
        lineDash: [ 2, 2 ]
      }
    }
  }],
  series: [{
    quickType: 'polygon',
    color: ['count', '#BAE7FF-#1890FF-#0050B3'],
    position: 'x*y',
    style: {
      lineWidth: 1,
      stroke: '#fff'
    }
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
}));
