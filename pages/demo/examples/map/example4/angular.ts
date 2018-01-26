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
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [padding]="20" [scale]="scale">
      <v-tooltip [showTitle]="showTitle"></v-tooltip>
      <v-coord></v-coord>
      <v-view [data]="bgData">
        <v-polygon position="x*y" color="grey" [opacity]="0.5"
          [style]="{
            stroke: 'white',
            lineWidth: 1
          }"
          tooltip="key"
        ></v-polygon>
      </v-view>
      <v-view [data]="data">
        <v-polygon position="x*y" color="#2FC25B"
          [style]="{
            stroke: 'white',
            lineWidth: 5
          }"
          [label]="['key', {
            offset: 0,
            textStyle: {
                fontSize: 14,
                fontWeight: 500
            }
          }]"
          tooltip="capital"
        ></v-polygon>
      </v-view>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  showTitle = false;
  data = [];
  bgData = [];
  scale = [{
    dataKey: 'x',
    nice: false,
    sync: true
  }, {
    dataKey: 'y',
    nice: false,
    sync: true
  }];

  constructor() {
    $.getJSON('/assets/data/us-states.hex.json', (data) => {
      const dv = new DataSet.View().source(data, {
          type: 'hex',
          width: 100,
          height: 100,
      });
      this.bgData = dv._gridRows;
      this.data = dv;
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
