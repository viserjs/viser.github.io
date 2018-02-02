import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerShape, ViserModule } from 'viser-ng';

function getFillAttrs(cfg: any) {
  const attrs = {
    ...{
      fill: cfg.color,
      fillOpacity: cfg.opacity
    },
    ...cfg.style,
  };
  return attrs;
}
function getRectPath(points: any) {
  const path = [];
  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    if (point) {
      const action = i === 0 ? 'M' : 'L';
      path.push([action, point.x, point.y]);
    }
  }
  const first = points[0];
  path.push(['L', first.x, first.y]);
  path.push(['z']);
  return path;
}

registerShape('interval', 'top', {
  draw(cfg: any, container: any) {
    const attrs = getFillAttrs(cfg);
    let path = getRectPath(cfg.points);
    path = this.parsePath(path); // 将 0 - 1 的值转换为画布坐标
    const radius = (path[2][1] - path[1][1]) / 2;
    const temp = [];
    temp.push(['M', path[0][1], path[0][2]]);
    temp.push(['L', path[1][1], path[1][2] + radius]);
    temp.push(['A', radius, radius, 90, 0, 1, path[1][1] + radius, path[1][2]]);
    temp.push(['L', path[2][1] - radius, path[2][2]]);
    temp.push(['A', radius, radius, 90, 0, 1, path[2][1], path[2][2] + radius]);
    temp.push(['L', path[3][1], path[3][2]]);
    temp.push(['Z']);
    return container.addShape('path', {
      attrs: {
        ...attrs,
        ...{
          path: temp,
        }
      }
    });
  }
});

registerShape('interval', 'bottom', {
  draw(cfg: any, container: any) {
    const attrs = getFillAttrs(cfg);
    let path = getRectPath(cfg.points);
    path = this.parsePath(path);
    const radius = (path[2][1] - path[1][1]) / 2;
    const temp = [];
    temp.push(['M', path[0][1] + radius, path[0][2]]);
    temp.push(['A', radius, radius, 90, 0, 1, path[0][1], path[0][2] - radius]);
    temp.push(['L', path[1][1], path[1][2]]);
    temp.push(['L', path[2][1], path[2][2]]);
    temp.push(['L', path[3][1], path[3][2] - radius]);
    temp.push(['A', radius, radius, 90, 0, 1, path[3][1] - radius, path[3][2]]);
    temp.push(['Z']);
    return container.addShape('path', {
      attrs: {
        ...attrs,
        ...{
          path: temp,
        }
      }
    });
  }
});

const data = [
  {year: '2014', type: 'Sales', sales: 1000},
  {year: '2015', type: 'Sales', sales: 1170},
  {year: '2016', type: 'Sales', sales: 660},
  {year: '2017', type: 'Sales', sales: 1030},
  {year: '2014', type: 'Expenses', sales: 400},
  {year: '2015', type: 'Expenses', sales: 460},
  {year: '2016', type: 'Expenses', sales: 1120},
  {year: '2017', type: 'Expenses', sales: 540},
  {year: '2014', type: 'Profit', sales: 300},
  {year: '2015', type: 'Profit', sales: 300},
  {year: '2016', type: 'Profit', sales: 300},
  {year: '2017', type: 'Profit', sales: 350}
];

const scale = [{
  dataKey: 'sales',
  max: 2400,
  tickInterval: 600
}];

const axis1Opts = {
  dataKey: 'year',
  label: {
    textStyle: {
      fontFamily: 'Monospace',
      fontWeight: 700,
      fontSize: 14,
      fill: '#545454'
    }
  },
  grid: {
    lineStyle: {
      lineDash: [0, 0],
      stroke: '#545454'
    }
  }
};

const axis2Opts = {
  dataKey: 'sales',
  label: {
    textStyle: {
      fontFamily: 'Monospace',
      fontWeight: 700,
      fontSize: 14,
      fill: '#545454'
    }
  },
  grid: {
    lineStyle: {
      lineDash: [0, 0],
      stroke: '#545454'
    }
  },
  line: null,
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [padding]="[20, 80, 80, 80]" [data]="data" [scale]="scale">
      <v-legend ></v-legend>
      <v-axis [dataKey]="axis1Opts.dataKey" [grid]="axis1Opts.grid" [label]="axis1Opts.label"></v-axis>
      <v-axis [dataKey]="axis2Opts.dataKey" [grid]="axis2Opts.grid" [label]="axis2Opts.label" [line]="axis2Opts.line"></v-axis>
      <v-stack-interval position="year*sales" color="type" size="35"
        [shape]="shape"
        [style]="{
          stroke: '#545454',
          lineWidth: 2
        }" ></v-stack-interval>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = data;
  scale = scale;
  axis1Opts = axis1Opts;
  axis2Opts = axis2Opts;
  shape = ['type', function(val) {
    if (val === 'Profit') { // 顶部圆角
      return 'bottom';
    } else if (val === 'Sales') { // 底部圆角
      return 'top';
    } else {
      return; // 其他默认
    }
  }];
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

