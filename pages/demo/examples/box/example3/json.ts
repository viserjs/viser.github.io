import viser from 'viser';
import { data, dataPre, scale } from './data'

const colorMap = {
  'I. setosa': 'red',
  'I. versicolor': 'blue',
  'I. virginica': 'green'
}

viser({
  data: data,
  dataPre,
  scale: scale,
  axis: true,
  tooltip: {
    crosshairs: {
      type: 'rect'
    }
  },
  legend: {
    marker: 'circle'
  },
  series: [{
    quickType: 'box',
    position: 'type*_bin',
    adjust: 'dodge',
    color: ['Species', val => {
      return colorMap[val];
    }],
    style: ['Species', {
      stroke: '#545454',
      fill: val => {
        return colorMap[val];
      },
      fillOpacity: 0.3
    }]
  }],
  chart: {
    container: 'mount',
    forceFit: true,
    height: 400,
  },
});
