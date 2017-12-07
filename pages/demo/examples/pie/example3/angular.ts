import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data = [
  { item: '事例一', count: 40 },
  { item: '事例二', count: 21 },
  { item: '事例三', count: 17 },
  { item: '事例四', count: 13 },
  { item: '事例五', count: 9 },
];

const dataPre = {
  transform: [{
    type: 'percent',
    field: 'count',
    dimension: 'item',
    as: 'percent',
  }]
};

const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%',
}];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [dataPre]="dataPre" [scale]="scale">
      <v-tooltip></v-tooltip>
      <v-axis></v-axis>
      <v-pie position="percent" color="item" [style]="pieStyle" [label]="labelConfig"></v-pie>
      <v-coord radius="0.75" innerRadius="0.6"></v-coord>
      <v-legend dataKey="item"></v-legend>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 500;
  data = data;
  dataPre = dataPre;
  scale = scale;
  pieStyle = {
    stroke: "#fff",
    lineWidth: 1,
  };
  labelConfig = ['percent', {
    formatter: (val, item) => {
      return item.point.item + ': ' + val;
    },
  }];
  guideHtml = '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">主机<br><span style="color:#8c8c8c;font-size:20px">200</span>台</div>';
  guidePosition = ['50%', '50%'];
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
