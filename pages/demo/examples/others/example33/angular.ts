import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerShape, ViserModule } from 'viser-ng';

registerShape('interval', 'borderRadius', {
  draw(cfg, container) {
    const points = cfg.points;
    let path = [];
    path.push(['M', points[0].x, points[0].y]);
    path.push(['L', points[1].x, points[1].y]);
    path.push(['L', points[2].x, points[2].y]);
    path.push(['L', points[3].x, points[3].y]);
    path.push('Z');
    path = this.parsePath(path); // 将 0 - 1 转化为画布坐标
    return container.addShape('rect', {
      attrs: {
        x: path[1][1], // 矩形起始点为左上角
        y: path[1][2],
        width: path[2][1] - path[1][1],
        height: path[0][2] - path[1][2],
        fill: cfg.color,
        radius: (path[2][1] - path[1][1]) / 2,
      }
    });
  }
});

const activeData = [
  { date: '2017年3月2日', actual: 175, expected: 900 },
  { date: '2017年3月3日', actual: 137, expected: 900 },
  { date: '2017年3月4日', actual: 240, expected: 900 },
  { date: '2017年3月5日', actual: 726, expected: 900 },
  { date: '2017年3月6日', actual: 968, expected: 900 },
  { date: '2017年3月7日', actual: 702, expected: 900 },
  { date: '2017年3月8日', actual: 655, expected: 900 },
  { date: '2017年3月9日', actual: 463, expected: 900 },
  { date: '2017年3月10日', actual: 464, expected: 900 },
  { date: '2017年3月12日', actual: 0, expected: 900 },
  { date: '2017年3月13日', actual: 638, expected: 900 },
  { date: '2017年3月14日', actual: 0, expected: 900 },
  { date: '2017年3月15日', actual: 0, expected: 900 },
  { date: '2017年3月16日', actual: 509, expected: 900 },
  { date: '2017年3月17日', actual: 269, expected: 900 },
  { date: '2017年3月18日', actual: 321, expected: 900 },
  { date: '2017年3月19日', actual: 0, expected: 900 },
  { date: '2017年3月20日', actual: 399, expected: 900 },
  { date: '2017年3月21日', actual: 662, expected: 900 },
  { date: '2017年3月22日', actual: 689, expected: 900 },
  { date: '2017年3月23日', actual: 347, expected: 900 },
  { date: '2017年3月24日', actual: 0, expected: 900 },
  { date: '2017年3月26日', actual: 428, expected: 900 },
  { date: '2017年3月27日', actual: 749, expected: 900 },
  { date: '2017年3月28日', actual: 0, expected: 900 },
  { date: '2017年3月29日', actual: 0, expected: 900 },
  { date: '2017年3月30日', actual: 69.1, expected: 900 },
];

const scale = [{
  dataKey: 'expected',
  ticks: [0, 900, 1200]
}];

const axisOpts = {
  dataKey: 'expected',
  line: null,
  tickLine: null,
  position: 'right',
  label: {
    formatter: function(val) {
      if (val === '1200') {
        return '';
      }
      return val;
    }
  }
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [padding]="[20, 80, 80, 80]" [data]="data" [scale]="scale">
      <v-tooltip></v-tooltip>
      <v-axis dataKey="date" [show]="false"></v-axis>
      <v-axis dataKey="actual" [show]="false"></v-axis>
      <v-axis [dataKey]="axisOpts.dataKey" [line]="axisOpts.line" [tickLine]="axisOpts.tickLine"
        [position]="axisOpts.position" [label]="axisOpts.label"></v-axis>
      <v-interval position="date*expected" color="#752136" shape="borderRadius"
        tooltip="expected" opacity="0.6"></v-interval>
      <v-interval position="date*actual" color="#db0d2d" tooltip="actual"
        [shape]="shape"></v-interval>
      <v-guide type="text" [position]="['min', 'max']" content="活动"
        [style]="{
          fill: '#ff2c55',
          fontSize: 20,
          fontWeight: 'bold',
          textBaseline: 'top'
        }"></v-guide>
      <v-guide type="text" [position]="['max', 'max']" content="67 / 900 千卡"
        [style]="{
          fill: '#cbcbcb',
          fontSize: 20,
          textAlign: 'end',
          textBaseline: 'top'
        }"></v-guide>
    </v-chart>
  </div>
  `
})

class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = activeData;
  scale = scale;
  axisOpts = axisOpts;
  shape = ['date*actual', function(date, val) {
    if (val === 0) {
      return;
    } else {
      return 'borderRadius';
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

