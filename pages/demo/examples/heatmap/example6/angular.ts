import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [padding]="padding">
      <v-legend [offset]="10"></v-legend>
      <v-tooltip [showTitle]="showTitle" ></v-tooltip>
      <v-heatmap [position]="seriesOpts.position" [color]="seriesOpts.color" ></v-heatmap>
      <v-guide [type]="guideOpts.type" [start]="guideOpts.start" [end]="guideOpts.end" [src]="guideOpts.src"></v-guide>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit = true;
  height = 400;
  offset = 10;
  showTitle = false;
  padding = [ 0, 30, 60, 30 ];
  data = [];
  seriesOpts = {
    color: ['tmp', '#F51D27-#FA541C-#FF8C12-#FFC838-#FAFFA8-#80FF73-#12CCCC-#1890FF-#6E32C2'],
    position: 'g*l',
  };
  guideOpts = {
    type: 'image',
    start: [ 'min', 'max' ],
    end: [ 'max', 'min' ],
    src: 'https://gw.alipayobjects.com/zos/rmsportal/NeUTMwKtPcPxIFNTWZOZ.png'
  };

  constructor() {
    $.getJSON('/assets/data/heatmap-4.json', (data) => {
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

