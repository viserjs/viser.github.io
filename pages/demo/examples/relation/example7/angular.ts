import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const dataView = [
  'nodes', nodes => {
    const source = [];
    nodes.map((node: any) => {
      if (node.depth === 0) {
        return;
      }
      const obj: any = {};
      obj.label = node.data.label;
      obj.sum = node.data.sum;
      obj.uv = node.data.uv;
      obj.value = node.value;
      obj.x = node.x;
      obj.y = node.y;
      source.push(obj);
      return node;
    });
    return source;
  },
];

const style = {
  stroke: '#FFF',
  lineWidth: 1,
};

const color = ['value', '#BAE7FF-#1890FF-#0050B3'];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [dataView]="dataView" padding="0">
      <v-tooltip showTitle="false"></v-tooltip>
      <v-coord type="polar" innerRadius="0.3"></v-coord>
      <v-polygon position="x*y" [color]="color" active="false" [style]="style" tooltip="label*sum"></v-polygon>
    </v-chart>
  </div>
  `
})
export class AppComponent {
  forceFit: boolean = true;
  height: number = 500;
  data = {};
  dataView = dataView;
  style = style;
  color = color;

  constructor() {
    $.getJSON('/data/sunburst.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData, {
        type: 'hierarchy',
      });
      dv.transform({
        type: 'hierarchy.partition',
        field: 'sum',
        as: ['x', 'y'],
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
  bootstrap: [AppComponent]
})

export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);