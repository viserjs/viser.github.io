import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule, registerShape } from 'viser-ng';

registerShape('point', 'pointer', {
  draw(cfg, container) {
    let point = cfg.points[0]; // 获取第一个标记点
    point = this.parsePoint(point);
    const center = this.parsePoint({ // 获取极坐标系下画布中心点
      x: 0,
      y: 0
    });
    // 绘制指针
    container.addShape('line', {
      attrs: {
        x1: center.x,
        y1: center.y,
        x2: point.x,
        y2: point.y + 15,
        stroke: cfg.color,
        lineWidth: 5,
        lineCap: 'round'
      }
    });
    return container.addShape('circle', {
      attrs: {
        x: center.x,
        y: center.y,
        r: 9.75,
        stroke: cfg.color,
        lineWidth: 4.5,
        fill: '#fff'
      }
    });
  }
});

const scale = [{
  dataKey: 'value',
  min: 0,
  max: 9,
  ticks: [2.25, 3.75, 5.25, 6.75],
  nice: false
}];

const data = [
  { value: 6 }
];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [scale]="scale">
      <v-coord type="polar" [startAngle]="-202.5" [endAngle]="22.5" [radius]="0.75"></v-coord>
      <v-axis
        dataKey="value"
        [zIndex]="2"
        [line]="null"
        [label]="axisLabel"
        [tickLine]="null"
        [grid]="null"
      ></v-axis>
      <v-axis dataKey="1" [show]="false"></v-axis>
      <v-series
        gemo="point"
        position="value*1"
        shape="pointer"
        color="#1890FF"
        [active]="false"
      ></v-series>

      <v-guide
        type="line"
        [start]="lineGuide1Start"
        [end]="lineGuide1End"
        [lineStyle]="lineGuide1LineStyle"
      ></v-guide>
      <v-guide
        type="line"
        [start]="lineGuide2Start"
        [end]="lineGuide2End"
        [lineStyle]="lineGuide2LineStyle"
      ></v-guide>
      <v-guide
        type="line"
        [start]="lineGuide3Start"
        [end]="lineGuide3End"
        [lineStyle]="lineGuide3LineStyle"
      ></v-guide>

      <v-guide
        type="arc"
        [zIndex]="0"
        [top]="false"
        [start]="arcGuide1Start"
        [end]="arcGuide1End"
        [style]="arcGuide1Style"
      ></v-guide>
      <v-guide
        type="arc"
        [zIndex]="1"
        [start]="arcGuide2Start"
        [end]="arcGuide2End"
        [style]="arcGuide2Style"
      ></v-guide>
      <v-guide
        type="html"
        [position]="htmlGuidePosition"
        [html]="htmlGuideHtml"
      ></v-guide>
    </v-chart>
  </div>
  `
})

class AppComponent {
  forceFit: boolean = true;
  height = 400;
  data = data;
  scale = scale;

  axisLabel = {
    offset: -20,
    formatter: (val: string) => {
      if (val === '2.25') {
        return '差';
      } else if (val === '3.75') {
        return '中';
      } else if (val === '5.25') {
        return '良';
      }
      return '优';
    },
    textStyle: {
      fontSize: 18,
      textAlign: 'center'
    }
  };

  lineGuide1Start = [3, 0.905];
  lineGuide1End = [3.0035, 0.85];
  lineGuide1LineStyle = {
    stroke: '#19AFFA',
    lineDash: null,
    lineWidth: 3
  };

  lineGuide2Start = [4.5, 0.905];
  lineGuide2End = [4.5, 0.85];
  lineGuide2LineStyle = {
    stroke: '#19AFFA',
    lineDash: null,
    lineWidth: 3
  };

  lineGuide3Start = [6, 0.905];
  lineGuide3End = [6.0035, 0.85];
  lineGuide3LineStyle = {
    stroke: '#19AFFA',
    lineDash: null,
    lineWidth: 3
  };

  arcGuide1Start = [0, 0.945];
  arcGuide1End = [9, 0.945];
  arcGuide1Style = {
    stroke: '#CBCBCB',
    lineWidth: 18,
  };

  arcGuide2Start = [0, 0.945];
  arcGuide2End = [data[0].value, 0.945];
  arcGuide2Style = {
    stroke: '#1890FF',
    lineWidth: 18,
  };

  htmlGuidePosition = ['50%', '95%'];
  htmlGuideHtml = `
    <div style="width: 300px;text-align: center;">
      <p style="font-size: 20px;color: #545454;margin: 0;">合格率</p>
      <p style="font-size: 36px;color: #545454;margin: 0;">${data[0].value * 10}%</p>
    </div>
  `;
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
