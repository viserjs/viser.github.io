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
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [padding]="0">
      <v-tooltip [showTitle]="false"></v-tooltip>
      <v-polygon position="x*y" color="name"></v-polygon>
    </v-chart>
  </div>
  `
})
export class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = [];

  constructor() {
    $.getJSON('/assets/data/flare.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData, {
        type: 'hierarchy',
      });
      dv.transform({
        type: 'hierarchy.partition',
      });
      this.data = dv.getAllNodes().map((node: any) => ({
        name: node.data.name,
        value: node.value,
        depth: node.depth,
        x: node.x,
        y: node.y,
      }));
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
  bootstrap: [AppComponent]
})

export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);