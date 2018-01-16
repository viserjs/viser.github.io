import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const style = {
  stroke: '#FFF',
  lineWidth: 1,
};

const color = ['value', '#BAE7FF-#1890FF-#0050B3'];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" padding="0">
      <v-tooltip showTitle="false"></v-tooltip>
      <v-coord type="polar" innerRadius="0.3"></v-coord>
      <v-polygon position="x*y" [color]="color" active="false" [style]="style" tooltip="label*sum"></v-polygon>
    </v-chart>
  </div>
  `
})
export class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = [];
  style = style;
  color = color;

  constructor() {
    $.getJSON('/assets/data/sunburst.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData, {
        type: 'hierarchy',
      });
      dv.transform({
        type: 'hierarchy.partition',
        field: 'sum',
        as: ['x', 'y'],
      });
      this.data = dv.getAllNodes().filter((node: any) => {
        return node.depth !== 0;
      }).map((node: any) => {
        return {
          label: node.data.label,
          sum: node.data.sum,
          uv: node.data.uv,
          value: node.value,
          x: node.x,
          y: node.y,
        };
      });
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