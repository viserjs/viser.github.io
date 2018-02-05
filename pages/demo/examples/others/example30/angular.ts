import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data">
      <v-axis></v-axis>
      <v-legend [offset]="45"></v-legend>
      <v-point position="carat*price"></v-point>
      <v-view [data]="dv">
        <v-legend [offset]="45"></v-legend>
        <v-heatmap position="carat*price" [color]="['density', 'blue-cyan-lime-yellow-red']"></v-heatmap>
      </v-view>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean= true;
  height: number = 400;
  data = [];
  dv = [];

  constructor() {
    $.getJSON('/assets/data/diamond.json', (data) => {
      const dv = new DataSet.View().source(data);
      dv.transform({
        type: 'kernel-smooth.density',
        fields: [ 'carat', 'price' ],
        as: [ 'carat', 'price', 'density' ]
      });
      this.data = data;
      this.dv = dv;
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

