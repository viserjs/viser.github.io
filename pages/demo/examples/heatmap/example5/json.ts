import viser from 'viser';
import { data, dataPre } from './data';

viser({
  data,
  dataPre,
  legend: true,
  tooltip: {
    showTitle: false
  },
  axis: true,
  series: [{
    quickType: 'polygon',
    color: ['count', [ '#BAE7FF', '#1890FF', '#0050B3' ]],
    position: 'x*y',
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
});
