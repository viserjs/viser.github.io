import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');
const { DataView } = DataSet;

const scale = [{
  dataKey: 'Species',
  sync: true,
}];

const views = (view, facet) => {
  let obj = {};

  if (facet.rowIndex === facet.colIndex) {
    const dv = new DataView();
    dv.source(facet.data)
      .transform({
        type: 'bin.histogram',
        field: facet.colField,
        bins: 30,
        as: [ facet.colField, 'count' ],
        groupBy: [ 'Species' ]
      });

    obj = {
      data: dv.rows,
      series: {
        quickType: 'stackBar',
        position: facet.colField + '*count',
        color: 'Species',
        opacity: 0.85,
      }
    }
  } else {
    obj = {
      series: {
        quickType: 'point',
        shape: 'circle',
        color: 'Species',
        position: [ facet.colField, facet.rowField ],
        opacity: 0.3,
        size: 3,
      }
    }
  }

  return obj;
}

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="400" [data]="data">
      <v-tooltip></v-tooltip>
      <v-legend></v-legend>
      <v-axis></v-axis>
      <v-facet type="matrix" [fields]="fields" [views]="views"></v-facet>
    </v-chart>
  </div>
  `
})
export class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = [];
  fields = ['SepalLength', 'SepalWidth', 'PetalLength', 'PetalWidth'];
  views = views;

  constructor() {
    $.getJSON('/assets/data/iris.json', (sourceData) => {
      this.data = sourceData;
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

export default class AppModule { }

