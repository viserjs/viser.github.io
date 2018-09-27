import * as React from 'react';
import { Chart, Coord, registerShape, Tooltip, Pie, Legend } from 'viser-react';

const data = [
  {
    type: '分类一',
    value: 27,
  },
  {
    type: '分类二',
    value: 25,
  },
  {
    type: '分类三',
    value: 18,
  },
  {
    type: '分类四',
    value: 15,
  },
  {
    type: '分类五',
    value: 10,
  },
  {
    type: 'Other',
    value: 5,
  },
];

let max = 0;
data.forEach(function(obj) {
  if (obj.value > max) {
    max = obj.value;
  }
});
// 自定义 other 的图形，增加两条线
registerShape('interval', 'sliceShape', {
  draw: function draw(cfg, container) {
    var points = cfg.points;
    var origin = cfg.origin._origin;
    var percent = origin.value / max;
    var xWidth = points[2].x - points[1].x;
    var width = xWidth * percent;
    var path = [];
    path.push(['M', points[0].x, points[0].y]);
    path.push(['L', points[1].x, points[1].y]);
    path.push(['L', points[0].x + width, points[2].y]);
    path.push(['L', points[0].x + width, points[3].y]);
    path.push('Z');
    path = this.parsePath(path);
    return container.addShape('path', {
      attrs: {
        fill: cfg.color,
        path: path,
      },
    });
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Chart forceFit={true} height={400} data={data}>
        <Tooltip />
        <Legend dataKey="type" />
        <Coord type="theta" radius={0.8} />
        <Pie position="value" color="type" shape="sliceShape" label="type" />
      </Chart>
    );
  }
}
