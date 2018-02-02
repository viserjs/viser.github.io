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
    <v-chart [forceFit]="forceFit" [height]="height" padding="10" [data]="data">
      <v-tooltip showTitle="false"></v-tooltip>
      <v-polygon position="x*y" color="category" [style]="{
        stroke: 'white',
        lineWidth: 2
      }" [label]="['symbol', {
        offset: 0,
        textStyle: {
          fontSize: 14,
          fontWeight: 500
        }
      }]" tooltip="symbol*name*number*atomic_mass*category"></v-polygon>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = [];

  constructor() {
    $.getJSON('/assets/data/periodic-table.hex.json', (data) => {
      const dv = new DataSet.View().source(data, {
        type: 'hex'
      });
      this.data = dv;
    })
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

