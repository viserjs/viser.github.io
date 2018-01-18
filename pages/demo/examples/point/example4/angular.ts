import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule, Global } from 'viser-ng';
import * as $ from 'jquery';

const scale = [{
  dataKey: 'LifeExpectancy',
  alias: '人均寿命（年）'
}, {
  dataKey: 'Population',
  type: 'pow',
  alias: '人口总数'
}, {
  dataKey: 'GDP',
  alias: '人均国内生产总值($)'
}, {
  dataKey: 'Country',
  alias: '国家/地区'
}];

const colorMap = {
  'Asia': Global.colors[0],
  'Americas': Global.colors[1],
  'Europe': Global.colors[2],
  'Oceania': Global.colors[3]
};

const laeblFormatter = (value) => {
  return (value / 1000).toFixed(0) + 'k';
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="true" [height]="400" [data]="data" [scale]="scale">
      <v-tooltip [showTitle]="false"></v-tooltip>
      <v-axis
        dataKey="GDP"
        [label]="axisLabel"
      ></v-axis>
      <v-legend dataKey="Population" [show]="false"></v-legend>
      <v-point
        position="GDP*LifeExpectancy"
        [color]="pointColor"
        [size]="pointSize"
        [style]="pointStyle"
        tooltip="Country*Population*GDP*LifeExpectancy"
        shape="circle"
      ></v-point>
    </v-chart>
  </div>
  `
})
class AppComponent {
  data = [];
  scale = scale;
  axisLabel = {
    formatter: laeblFormatter,
  };
  pointColor = ['continent', val => colorMap[val]];
  pointSize = ['Population', [4, 65]];
  pointStyle = ['continent', {
    lineWidth: 1,
    strokeOpacity: 1,
    fillOpacity: 0.3,
    opacity: 0.65,
    stroke: val => colorMap[val],
  }];

  constructor() {
    $.getJSON('/assets/data/bubble.json', (data) => {
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
