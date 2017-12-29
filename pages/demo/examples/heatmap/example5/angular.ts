import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';

const dataPre = {
  transform: {
    type: 'bin.rectangle',
    fields: [ 'carat', 'price' ]
  }
};

const seriesOpts = {
  quickType: 'polygon',
  color: ['count', [ '#BAE7FF', '#1890FF', '#0050B3' ]],
  position: 'x*y',
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [dataPre]="dataPre">
      <v-legend offset="40"></v-legend>
      <v-axis></v-axis>
      <v-tooltip [showTitle]="false"></v-tooltip>
      <v-polygon [position]="seriesOpts.position" [color]="seriesOpts.color" ></v-polygon>
    </v-chart>
  </div>
  `
})

class AppComponent {
  forceFit: boolean= true;
  height: number = 400;
  data = [];
  dataPre = dataPre;
  seriesOpts = seriesOpts;

  constructor() {
    $.getJSON('/data/heatmap-5.json', (data) => {
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
