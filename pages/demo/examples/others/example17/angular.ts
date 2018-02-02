import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';

const data = [];
const n = 31;
for (let i = 0; i < 372; i++) {
  const now = Date();
  data[i] = {};
  data[i].time = new Date(now).getTime() + i * 1000 * 3600 * 24;
  const random = Math.floor(Math.random() * 10);
  if (((i % n > 2) && (i % n < 4)) || ((i % n >= 6) && (i % n < 7))) {
    data[i].value = 30 + random * 7;
  } else if ((i % n >= 4) && (i % n < 6)) {
    data[i].value = 60 + random * 8;
  } else {
    data[i].value = 10 + random * 5;
  }
}

const scale = [{
  dataKey: 'time',
  type: 'timeCat',
  mask: 'YYYY.MM.DD'
}, {
  dataKey: 'value',
  min: 0,
}];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [padding]="[0, 60, 30, 0]" [data]="data" [scale]="scale">
      <v-tooltip [showTitle]="null"></v-tooltip>
      <v-coord type="helix" [startAngle]="startAngle" [endAngle]="endAngle"></v-coord>
      <v-axis dataKey="time" [line]="null"></v-axis>
      <v-interval position="time*value" [color]="['value', '#ffffff-#1890FF']" [size]="0.45"></v-interval>
    </v-chart>
  </div>
  `
})

class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = data;
  scale = scale;
  startAngle = 0.5 * Math.PI;
  endAngle = 12.5 * Math.PI;
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

