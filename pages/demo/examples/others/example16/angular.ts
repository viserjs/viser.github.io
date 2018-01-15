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
    <v-chart [forceFit]="forceFit" [height]="height" padding="40" [data]="data">
      <v-tooltip [showTitle]="null"></v-tooltip>
      <v-coord type="polar" innerRadius="0.2"></v-coord>
      <v-axis [dataKey]="'week'" [grid]="null" [line]="null" [tickLine]="null" [label]="null"></v-axis>
      <v-axis [dataKey]="'time'" [line]="null" [tickLine]="null"
        [grid]="null" [label]="{label: {offset: 3}}"></v-axis>
      <v-polygon [position]="'time*week'" [color]="['value', '#BAE7FF-#1890FF-#0050B3']"
        [tooltip]="'week*time*value'" [style]="{
          stroke: '#fff',
          lineWidth: 1
        }"></v-polygon>
      <v-guide *ngFor="let val of values; index as idx;"
        type="text" [top]="true"
        [position]="this.getPosition(idx)" [content]="val"
        [style]="{
          fill: '#fff',
          textAlign: 'center',
          shadowBlur: 2,
          shadowColor: 'rgba(0, 0, 0, .45)'
        }">
      </v-guide>
    </v-chart>
  </div>
  `
})

class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = [];
  values = [ 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'];

  constructor() {
    $.getJSON('/assets/data/polar-heatmap.json', (data) => {
      this.data = data;
    });
  }

  getPosition = (idx: number) => {
    return [ 0, idx ];
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
