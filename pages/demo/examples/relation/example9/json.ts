const allData = require('./data');
const { data, scale, dataPre } = allData;

export const config = {
  data,
  dataPre,
  scale,
  dataView: 'treeNodes',
  tooltip: {
    showTitle: false,
    itemTpl: '<li data-index={index}>'
        + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
        + '{name}<br/>'
        + '<span style="padding-left: 16px">浏览人数：{count}</span><br/>'
        + '</li>',
  },
  series: {
    quickType: 'polygon',
    position: 'x*y',
    color: 'name',
    tooltip: ['name', (name, count) => {
      return {
        name,
        count,
      };
    }],
    style: {
      lineWidth: 1,
      stroke: '#fff',
    },
    label: ['name', {
      offset: 0,
      textStyle: {
        textBaseline: 'middle',
      },
      formatter(val) {
        if (val !== 'root') {
          return val;
        }
      }
    }],
  },
  chart: {
    container: 'mount',
    forceFit: true,
    height: 600,
    padding: 0,
  },
};
