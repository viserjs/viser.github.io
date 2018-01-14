import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="true" [height]="400" [data]="data">
      <v-legend [reversed]="true"></v-legend>
      <v-tooltip [crosshairs]="tooltipCrosshairs"></v-tooltip>
      <v-axis dataKey="Score" [grid]="null"></v-axis>
      <v-axis
        dataKey="Class"
        [tickLine]="null"
        [subTickCount]="1"
        [subTickLine]="axisClassSubTickLine"
        [grid]="axisClassGrid"
      ></v-axis>
      <v-point color="Grade" position="Class*Score" adjust="jitter" [size]="4" [opacity]="0.65"></v-point>
    </v-chart>
  </div>
  `
})
class AppComponent {
  data = [];
  tooltipCrosshairs = { type: 'cross' };
  axisClassGrid = {
    align: 'center',
    lineStyle: {
      stroke: '#8C8C8C',
      lineWidth: 1,
      lineDash: [3, 3],
    }
  };
  axisClassSubTickLine = {
    lineWidth: 1,
    stroke: '#BFBFBF',
    length: 4
  };

  constructor() {
    $.getJSON('/assets/data/dv-grades.json', (data) => {
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
