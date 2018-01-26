import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');
const { DataView } = DataSet;

const scale = [{
  dataKey: 'mean',
  tickCount: 5,
  sync: true,
}, {
  dataKey: 'cut',
  sync: true,
}];

const views = (view, facet) => {
  const data = facet.data;
  const dv = new DataView();
  dv.source(data).transform({
    type: 'aggregate',
    fields: ['price'],
    operations: ['mean'],
    as: ['mean'],
    groupBy: ['cut']
  });

  return {
    data: dv,
    series: {
      quickType: 'bar',
      position: 'cut*mean',
      color: 'cut',
    }
  }
}

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="400" [data]="data" [scale]="scale">
      <v-tooltip [crosshairs]="false"></v-tooltip>
      <v-legend dataKey="cut" position="top"></v-legend>
      <v-axis dataKey="cut" [label]="null" [tickLine]="null"></v-axis>
      <v-facet type="tree" [fields]="fields" [line]="line" [lineSmooth]="lineSmooth" [views]="views"></v-facet>
    </v-chart>
  </div>
  `
})
export class AppComponent {
  forceFit: boolean = true;
  lineSmooth: boolean = true;
  axisNull: null;
  height: number = 400;
  data = [];
  scale = scale;
  fields = ['clarity'];
  line = { stroke: '#c0d0e0' };
  views = views;

  constructor() {
    $.getJSON('/assets/data/diamond.json', (data) => {
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
  bootstrap: [AppComponent]
})

export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
