import { registerShape, Chart, Axis, Legend, Tooltip, Coord, Facet } from 'viser-react';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as _ from 'lodash';

const data = [
  { action: '访问', visitor: 500, site: '站点1' },
  { action: '浏览', visitor: 400, site: '站点1' },
  { action: '交互', visitor: 300, site: '站点1' },
  { action: '下单', visitor: 200, site: '站点1' },
  { action: '完成', visitor: 100, site: '站点1' },
  { action: '访问', visitor: 550, site: '站点2' },
  { action: '浏览', visitor: 420, site: '站点2' },
  { action: '交互', visitor: 280, site: '站点2' },
  { action: '下单', visitor: 150, site: '站点2' },
  { action: '完成', visitor: 80, site: '站点2' }
];

data.sort(function(obj1: any, obj2: any){ // 从小到大
  return obj1.visitor - obj2.visitor;
});

const scale = [{
  dataKey: 'percent',
  formatter: (val: any) => {
    return val * 100 + '%';
  }
}];

const tooltipOpts = {
  crosshairs: false,
  showTitle: false,
  itemTpl: '<li data-index={index} style="margin-bottom:4px;">'
      + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
      + '{name}<br/>'
      + '<span style="padding-left: 16px">{value}</span>'
      + '</li>'
};

const facetOpts = {
  type: 'mirror',
  fields: [ 'site' ],
  transpose: true,
  padding: 0,
  eachView(view: any, facet: any) {
    view.interval()
      .position('action*visitor')
      .color('action', [ '#BAE7FF', '#69C0FF', '#40A9FF', '#1890FF', '#0050B3' ])
      .shape('funnel')
      .tooltip('site*action*visitor', (site, action, visitor) => {
        return {
          name: site,
          value: action + ': ' + visitor
        };
      })
      .style({
        lineWidth: 1,
        stroke: '#fff'
      });

    data.map((obj: any) => {
      if (obj.site === facet.colValue) {
        view.guide().text({
          top: true,
          position: [obj.action, 'min'],
          content: obj.visitor,
          style: {
            fill: '#fff',
            fontSize: '12',
            textAlign: facet.colIndex ? 'start' : 'end',
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)'
          },
          offsetX: facet.colIndex ? 10 : -10
        });
      }
    });
  }
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Chart forceFit height={400} padding={[ 30, 120, 95 ]} data={data} scale={scale}>
          <Tooltip {...tooltipOpts} />
          <Coord type="theta" radius={0.8} innerRadius={0.7} />
          <Legend reversed={true} />
          <Facet {...facetOpts}></Facet>
        </Chart>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));
