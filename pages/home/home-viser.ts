import Viser from 'viser';

const GDP_JSON = [
  { year: '2006', gdp: 21.94385 },
  { year: '2007', gdp: 27.02323 },
  { year: '2008', gdp: 31.95155 },
  { year: '2009', gdp: 34.90814 },
  { year: '2010', gdp: 41.30303 },
  { year: '2011', gdp: 48.93006 },
  { year: '2012', gdp: 54.03674 },
  { year: '2013', gdp: 59.52444 },
  { year: '2014', gdp: 64.39740 },
  { year: '2015', gdp: 68.90521 }
];

document.getElementById('viser-mount-1-1').innerHTML = '';
document.getElementById('viser-mount-2-1').innerHTML = '';
document.getElementById('viser-mount-2-2').innerHTML = '';
document.getElementById('viser-mount-2-3').innerHTML = '';
document.getElementById('viser-mount-2-4').innerHTML = '';

Viser({
  data: GDP_JSON,
  tooltip: true,
  axis: true,
  series: [{ quickType: 'bar', color: '#0088fe', position: 'year*gdp' }],
  chart: { width: 700, height: 400, container: 'viser-mount-1-1' },
});

Viser({
  data: GDP_JSON,
  tooltip: true,
  axis: true,
  series: [{ quickType: 'line', color: '#0088fe', position: 'year*gdp' }],
  chart: { width: 380, height: 230, container: 'viser-mount-2-1' },
});

Viser({
  data: GDP_JSON,
  tooltip: true,
  axis: true,
  series: [{ quickType: 'area', color: '#0088fe', position: 'year*gdp' }],
  chart: { width: 380, height: 230, container: 'viser-mount-2-3' },
});

Viser({
  data: GDP_JSON,
  tooltip: { showTitle: false },
  axis: true,
  coord: { type: 'theta' },
  series: [{
    quickType: 'pie',
    position: 'gdp',
    style: {
      lineWidth: 1,
      stroke: '#fff',
      fill: '#0088fe',
    },
    tooltip: 'year*gdp'
  }],
  chart: { width: 380, height: 280, container: 'viser-mount-2-2' },
});

Viser({
  data: GDP_JSON,
  tooltip: true,
  axis: false,
  coord: { type: 'polar' },
  series: [{
    quickType: 'sector',
    color: '#0088fe',
    style: {
      lineWidth: 1,
      stroke: '#fff',
      fill: '#0088fe',
    },
    position: 'year*gdp',
  }],
  chart: { width: 380, height: 310, container: 'viser-mount-2-4' },
});