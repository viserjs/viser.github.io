import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';

const values = ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" padding="40" [data]="data">
      <v-tooltip [showTitle]="null"></v-tooltip>
      <v-coord type="polar" innerRadius="0.2"></v-coord>
      <v-axis dataKey="week" [grid]="null" [line]="null" [tickLine]="null" [label]="null"></v-axis>
      <v-axis dataKey="time" [grid]="null" [line]="null" [tickLine]="null" [label]="timeAxis"></v-axis>
      <v-polygon
        position="time*week"
        [color]="['value', '#BAE7FF-#1890FF-#0050B3']"
        tooltip="week*time*value"
        [style]="polygonStyle">
      </v-polygon>
      <v-guide *ngFor="let val of values; let idx = index;"
        type="text"
        top="true"
        [position]="[0, idx]"
        [content]="val"
        [style]="guideStyle">
      </v-guide>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  values = values;
  data = [];
  polygonStyle = {
    stroke: '#fff',
    lineWidth: 1,
  };
  timeAxis = { offset: 3 };
  guideStyle = {
    fill: '#fff',
    textAlign: 'center',
    shadowBlur: 2,
    shadowColor: 'rgba(0, 0, 0, .45)'
  };

  constructor() {
    $.getJSON('/assets/data/polar-heatmap.json', (data) => {
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
export default class AppModule { }
