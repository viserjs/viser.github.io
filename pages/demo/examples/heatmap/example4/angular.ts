import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule, registerShape } from 'viser-ng';
import * as $ from 'jquery';

registerShape('polygon', 'boundary-polygon', {
  draw(cfg, container) {
    if (cfg.points && cfg.points.length) {
      const attrs: any = {
        stroke: '#fff',
        lineWidth: 1,
        fill: cfg.color,
        fillOpacity: cfg.opacity
      };
      const points = cfg.points;
      const path = [
        [ 'M', points[0].x, points[0].y ],
        [ 'L', points[1].x, points[1].y ],
        [ 'L', points[2].x, points[2].y ],
        [ 'L', points[3].x, points[3].y ],
        [ 'Z' ]
      ];
      attrs.path = this.parsePath(path);
      const polygon = container.addShape('path', {
        attrs
      });

      if (cfg.origin._origin.lastWeek) {
        const linePath = [
          [ 'M', points[2].x, points[2].y ],
          [ 'L', points[3].x, points[3].y ],
        ];
        // 最后一周的多边形添加右侧边框
        container.addShape('path', {
          zIndex: 1,
          attrs: {
            path: this.parsePath(linePath),
            lineWidth: 1,
            stroke: '#404040'
          }
        });
        if (cfg.origin._origin.lastDay) {
          container.addShape('path', {
            zIndex: 1,
            attrs: {
              path: this.parsePath([
                [ 'M', points[1].x, points[1].y ],
                [ 'L', points[2].x, points[2].y ],
              ]),
              lineWidth: 1,
              stroke: '#404040'
            }
          });
        }
      }
      container.sort();
      return polygon;
    }
  }
});

const scale = [{
  dataKey: 'day',
  type: 'cat',
  values: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ]
}, {
  dataKey: 'week',
  type: 'cat'
}, {
  dataKey: 'commits',
  sync: true
}];

const axis1Opts = {
  dataKey: 'week',
  position: 'top',
  tickLine: null,
  line: null,
  label: {
    offset: 12,
    textStyle: {
      fontSize: 12,
      fill: '#666',
      textBaseline: 'top'
    },
    formatter: (val) => {
      if (val === '2') {
        return 'MAY';
      } else if (val === '6') {
        return 'JUN';
      } else if (val === '10') {
        return 'JUL';
      } else if (val === '15') {
        return 'AUG';
      } else if (val === '19') {
        return 'SEP';
      } else if (val === '24') {
        return 'OCT';
      }
      return '';
    }
  }
};

const axis2Opts = {
  dataKey: 'day',
  grid: null,
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [scale]="scale">
      <v-tooltip showTitle="false" ></v-tooltip>
      <v-axis [dataKey]="axis1Opts.dataKey" [position]="axis1Opts.position" [tickLine]="axis1Opts.tickLine" [line]="axis1Opts.line" [label]="axis1Opts.label"></v-axis>
      <v-axis [dataKey]="axis2Opts.dataKey" [grid]="axis2Opts.grid"></v-axis>
      <v-coord [type]="'rect'" [direction]="'TL'"></v-coord>
      <v-polygon [position]="seriesOpts.position" [color]="seriesOpts.color" [shape]="seriesOpts.shape"></v-polygon>
    </v-chart>
  </div>
  `
})

class AppComponent {
  forceFit: boolean= true;
  height = 400;
  data = [];
  scale = scale;
  axis1Opts = axis1Opts;
  axis2Opts = axis2Opts;
  seriesOpts = {
    color: ['commits', '#BAE7FF-#1890FF-#0050B3'],
    position: 'week*day*date',
    shape: 'boundary-polygon',
  };

  constructor() {
    $.getJSON('/data/heatmap-6.json', (data) => {
      this.data = data;
    });
  }
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
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
