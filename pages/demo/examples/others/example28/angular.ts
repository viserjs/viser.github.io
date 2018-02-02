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
  dataKey: 'carat',
  alias: '克拉数',
  min: 0,
  max: 4,
  sync: true
}, {
  dataKey: 'price',
  alias: '价格',
  sync: true,
}];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [scale]="scale">
      <v-axis></v-axis>
      <v-tooltip></v-tooltip>
      <v-point position="carat*price"></v-point>
      <v-view *ngFor="let method of REGRESSION_METHODS;let i = index;" [data]="this.getData(method, i)" [scale]="scale">
        <v-axis dataKey='price' [show]="false"></v-axis>
        <v-line position="carat*price" [color]="Global.colors_16[i]"></v-line>
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
      fields: [ 'carat', 'price' ],
      as: [ 'carat', 'price' ],
      bandwidth: 0.5,
      extent: [ 0, 4 ]
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

