import viser from 'viser';
import { data, dataPre } from './data';

viser({
  data,
  dataPre,
  legend: {
    offset: 40
  },
  tooltip: false,
  axis: true,
  series: [{
    quickType: 'polygon',
    color: ['count', '#BAE7FF-#1890FF-#0050B3'],
    position: 'x*y',
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
});
