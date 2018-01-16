import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

@Component({
  selector: '#mount',
  template: `
  <div *ngIf="data.length; else loading">
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data">
      <v-tooltip crosshairs="false" inPlot="false" position="top"></v-tooltip>
      <v-axis></v-axis>
      <v-legend></v-legend>
      <v-stack-bar position="depth*count" color="cut"></v-stack-bar>
    </v-chart>
  </div>
  <ng-template #loading>Loading ...</ng-template>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = [];

  constructor() {
    $.getJSON('/assets/data/diamond.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData);
      dv.transform({
        type: 'bin.histogram',
        field: 'depth',
        binWidth: 1,
        groupBy: ['cut'],
        as: ['depth', 'count'],
      });
      this.data = dv.rows;
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
