import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerShape, ViserModule } from 'viser-ng';
const DataSet = require('@antv/data-set');

registerShape('interval', 'burstPie', {
  getPoints(cfg) {
    const width = cfg.size;
    const x = cfg.x;
    const min = cfg.y[0];
    const max = cfg.y[1];
    const res = [];
    for (let i = 0; i < max; i += 0.1) {
      if (min > i) {
        continue;
      } else if (min < i && min > i - 0.1) {
        res.push(
          { x: x - width / 2, y: min },
          { x: x - width / 2, y: i - 0.01 },
          { x: x + width / 2, y: i - 0.01 },
          { x: x + width / 2, y: min }
        );
      }
      const start = i;
      const end = parseFloat((i + 0.1) > max ? max : i + 0.09);
      res.push(
        { x: x - width / 2, y: start },
        { x: x - width / 2, y: end },
        { x: x + width / 2, y: end },
        { x: x + width / 2, y: start }
      );
    }
    return res;
  },
  draw(cfg, container) {
    // 将归一化后的数据转换为画布上的坐标
    const points = cfg.origin.points;
    let path = [];
    for (let i = 0; i < cfg.origin.points.length; i += 4) {
      path.push([ 'M', points[i].x, points[i].y ]);
      path.push([ 'L', points[i + 1].x, points[i + 1].y ]);
      path.push([ 'L', points[i + 2].x, points[i + 2].y ]);
      path.push([ 'L', points[i + 3].x, points[i + 3].y ]);
      path.push([ 'L', points[i].x, points[i].y ]);
      path.push([ 'z' ]);
    }
    path = this.parsePath(path, true);
    const shape = container.addShape('path', {
      attrs: {
        fill: cfg.color || '#00D9DF',
        path,
      },
    });
    return shape;
  }
});

const data = [
  { value: 0.5, key: '男' },
  { value: 0.4, key: '女' },
  { value: 0.1, key: '未知' },
];

const dv = new DataSet.View().source(data).transform({
  type: 'percent',
  field: 'value',
  dimension: 'key',
  as: 'percent'
});

const scale = [{
  dataKey: 'percent',
  formatter: (val) => {
    return val * 100 + '%';
  }
}];

const stackInterval1Opts = {
  shape: 'burstPie',
  position: 'percent',
  color: ['key', [ '#1890ff', '#f04864', '#bfbfbf']],
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [padding]="80" [data]="dv" [scale]="scale">
      <v-tooltip [showTitle]="false"></v-tooltip>
      <v-coord type="theta" [radius]="0.8" [innerRadius]="0.7"></v-coord>
      <v-axis dataKey="percent" [title]="{offset: 40, text: '百分比'}"></v-axis>
      <v-legend dataKey="percent"></v-legend>
      <v-stack-interval [shape]="stackInterval1Opts.shape" [position]="stackInterval1Opts.position"
        [color]="stackInterval1Opts.color"></v-stack-interval>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  dv = dv;
  scale = scale;
  stackInterval1Opts = stackInterval1Opts;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ViserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export default class AppModule { }

