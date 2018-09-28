import 'zone.js';
import 'reflect-metadata';
import * as $ from 'jquery';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule, registerShape } from 'viser-ng';
const DataSet = require('@antv/data-set');

const ticks = [0, 50, 100, 150, 200, 300, 500];
const colors = [
  '#5AC405',
  '#F9C709',
  '#FD942C',
  '#e4440D',
  '#810043',
  '#45001B',
];

@Component({
  selector: '#mount',
  template: `
    <div *ngIf="data.length">
      <div id="mountNode">
      <h4 style="text-align:center;margin-bottom:5px;">北京市 2010-2015 年 AQI 指数</h4>
        <v-chart [forceFit]="forceFit" height="400" [padding]="padding" [data]="dv" [scale]="scale">
          <v-tooltip></v-tooltip>
          <v-axis></v-axis>
          <v-line position="date*aqi" opacity="0.75"></v-line>
          <v-guide *ngFor="let tick of ticks; index as i;" type="region"
            [start]="this.getStart(tick, i)"
            [end]="this.getEnd(tick, i)"
            [style]="this.getContent(tick, i)"></v-guide>
        </v-chart>
      </div>
      <div id="slider">
        <v-plugin>
          <v-slider
            width="auto"
            height="26"
            [start]="start"
            [end]="end"
            xAxis="date"
            yAxis="aqi"
            [data]="data"
            [backgroundChart]="{type:'line'}"
            [onChange]="onChange"
          ></v-slider>
        </v-plugin>
      </div>
    </div>
  `,
})
class AppComponent {
  forceFit: boolean = true;
  padding: any = [20, 20, 40, 80];
  data: any = [];
  dv: any = {};
  start: string = '2000-06-05';
  end: string = '2000-12-29';
  ticks: any = [];
  colors: any = [];
  scale: any = [];
  getContent(tick, i) {
    return { fill: colors[i], fillOpacity: 0.4 };
  }
  getStart(tick, i) {
    return ['min', tick];
  }
  getEnd(tick, i) {
    return ['max', this.ticks[i + 1]];
  }
  constructor() {
    $.getJSON('/assets/data/peking-aqi.json', data => {
      this.ticks = ticks;
      this.colors = colors;
      this.scale = [
        {
          dataKey: 'date',
          type: 'time',
          mask: 'YYYY-MM-DD',
          tickCount: 4,
          alias: '日期',
          nice: false,
        },
        {
          dataKey: 'aqi',
          min: 0,
          ticks: ticks,
          alias: 'AQI(空气质量指数)',
        },
      ];
      this.data = data;
      this.dv = this.getData();
    });
  }
  getData = () => {
    const { data, start, end } = this;
    const ds = new DataSet({
      state: {
        start: new Date(start).getTime(),
        end: new Date(end).getTime(),
      },
    });
    const dv = ds.createView().source(data);
    dv.transform({
      type: 'filter',
      callback: function callback(obj) {
        var time = new Date(obj.date).getTime(); // !注意：时间格式，建议转换为时间戳进行比较
        return time >= ds.state.start && time <= ds.state.end;
      },
    });
    return dv;
  };
  onChange = _ref => {
    const startValue = _ref.startValue,
      endValue = _ref.endValue;
    this.start = startValue;
    this.end = endValue;
    this.dv = this.getData();
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ViserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
