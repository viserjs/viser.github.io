import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Global, ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const REGRESSION_METHODS = [
  'boxcar',
  'cosine',
  'epanechnikov',
  'gaussian',
  'quartic',
  'triangular',
  'tricube',
  'triweight',
  'uniform'
];

const scale = [{
  dataKey: 'x',
  alias: 'depth',
  min: 50,
  max: 70,
  sync: true,
}, {
  dataKey: 'y',
  alias: '概率密度分布',
  sync: true
}];

@Component({
  selector: '#mount',
  template: `
  <div *ngIf="data.length">
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [scale]="scale">
      <v-axis></v-axis>
      <v-tooltip></v-tooltip>
      <v-view *ngFor="let method of REGRESSION_METHODS;let i = index;" [data]="this.getData(method, i)" [scale]="scale">
        <v-line position="x*y" [color]="Global.colors_16[i]"></v-line>
      </v-view>
    </v-chart>
  </div>
  `
})

class AppComponent {
  forceFit: boolean= true;
  height: number = 400;
  data = [];
  scale = scale;
  REGRESSION_METHODS = REGRESSION_METHODS;
  Global = Global;

  constructor() {
    $.getJSON('/assets/data/diamond.json', (data) => {
      this.data = data;
    });
  }

  getData(method: any, i: number) {
    const dv = new DataSet.View().source(this.data);
    dv.transform({
      type: 'kernel-smooth.regression',
      method,
      field: 'depth',
      extent: [ 50, 70 ]
    });
    return dv;
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

