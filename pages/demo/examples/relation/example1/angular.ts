import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const label = ['name', {
  offset: -10,
  textStyle: {
    textAlign: 'left',
    rotate: 90
  },
}];

const style = {
  stroke: 'grey',
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data">
      <v-tooltip showTitle="false"></v-tooltip>
      <v-view dataView="edges">
        <v-edge position="x*y" shape="arc" color="source" opacity="0.5" tooltip="source*target"></v-edge>
      </v-view>
      <v-view dataView="nodes">
        <v-point position="x*y" size="value" color="id" opacity="0.5" [style]="style" [label]="label"></v-point>
      </v-view>
    </v-chart>
  </div>
  `
})
export class AppComponent {
  forceFit: boolean = true;
  height: number = 500;
  data = {};
  style = style;
  label = label;

  constructor() {
    $.getJSON('/data/relationship-with-weight.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData, {
        type: 'graph',
        edges: d => d.links,
      });
      dv.transform({
        type: 'diagram.arc',
        marginRatio: 0.5,
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