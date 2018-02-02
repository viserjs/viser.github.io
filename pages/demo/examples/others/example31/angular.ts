import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'year',
  tickInterval: 10
}];

const legendOpts = {
  useHtml: true,
  position: 'right' as any,
  legendMarker: {
    'g2-legend-marker': {
      borderRadius: 'none'
    },
    'g2-legend-title': {
      fontSize: '12px',
      fontWeight: 500,
      margin: 0,
      color: '#ff8800'
    }
  }
};

const axisOpts = {
  dataKey: 'count',
  line: {
    lineWidth: 1,
    stroke: '#BFBFBF'
  },
  tickLine: {
    length: 8,
    stroke: '#ddd'
  },
  grid: null
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [animate]="false" [height]="height" [padding]="[20, 140, 60, 50]" [data]="data" [scale]="scale">
      <v-legend [position]="legendOpts.position" [useHtml]="legendOpts.useHtml" [legendMarker]="legendOpts.legendMarker"></v-legend>
      <v-axis [dataKey]="axisOpts.dataKey" [line]="axisOpts.line"
        [tickLine]="axisOpts.tickLine" [grid]="axisOpts.grid"></v-axis>
      <v-area position="year*count" [adjust]="['stack', 'symmetric']"
        color="name" [opacity]="1"></v-area>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = [];
  legendOpts = legendOpts;
  axisOpts = axisOpts;

  constructor() {
    $.getJSON('/assets/data/baby-names.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData)
        .transform({
          type: 'fill-rows',
          groupBy: [ 'name' ],
          orderBy: [ 'year' ]
        })
        .transform({
          type: 'impute',
          field: 'n',
          method: 'value',
          value: 0
        })
        .transform({
          type: 'aggregate',
          fields: [ 'n' ],
          operations: [ 'sum' ],
          groupBy: [ 'year', 'name' ],
          orderBy: [ 'year' ],
          as: [ 'count' ]
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
  bootstrap: [
    AppComponent
  ]
})
export default class AppModule { }

