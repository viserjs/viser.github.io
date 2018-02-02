import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Global, ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const REGRESSION_METHODS = [
  'linear',
  'exponential',
  'logarithmic',
  'power',
  'polynomial'
];

const scale = [{
  dataKey: 'carat',
  sync: true,
}, {
  dataKey: 'price',
  sync: true,
}];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [scale]="scale">
      <v-axis></v-axis>
      <v-tooltip></v-tooltip>
      <v-view [data]="data" [scale]="scale">
        <v-point position="carat*price"></v-point>
      </v-view>
      <v-view *ngFor="let method of REGRESSION_METHODS;let i = index;" [data]="this.getData(method, i)" [scale]="scale">
        <v-axis dataKey='price' [show]="false"></v-axis>
        <v-line position="carat*price" [size]="1" [color]="Global.colors_16[i]"></v-line>
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
    const dv = new DataSet.View().source(this.data)
      .transform({
        type: 'regression',
        method,
        fields: [ 'carat', 'price' ],
        bandwidth: 0.1,
        extent: [ 0, 4 ],
        as: [ 'carat', 'price' ]
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

