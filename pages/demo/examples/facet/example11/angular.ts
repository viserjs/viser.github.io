import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'value',
  max: 9,
  min: 1,
  tickCount: 2,
  sync: true,
  formatter: function formatter(value) {
    return value + '%';
  }
}, {
  dataKey: 'year',
  range: [0, 1]
}];

const labelFormat = {
  textStyle: {
    fontSize: 10,
    fill: '#aaaaaa'
  },
  formatter: function formatter(text) {
    if (window.innerHeight > 600) {
      return text;
    }
  }
}

const tickLine = {
  length: 0
};

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const rowTitle = {
  offsetX: (window.innerWidth - 100) * -1,
  style: {
    fontSize: 12,
    textAlign: 'end',
    rotate: 0,
    fontWeight: 300,
    fill: '#8d8d8d'
  }
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="400" [data]="data" [scale]="scale" [padding]="[50, 20, 50, 100]">
      <v-tooltip></v-tooltip>
      <v-legend></v-legend>
      <v-axis dataKey="year" [tickLine]="tickLine" [label]="label"></v-axis>
      <v-axis dataKey="value" [grid]="null" [label]="labelFormat"></v-axis>
      <v-facet type="rect" [fields]="[null, 'country']" [padding]="10" [rowTitle]="rowTitle">
        <v-facet-view>
          <v-line position="year*value"></v-line>
        </v-facet-view>
      </v-facet>
    </v-chart>
  </div>
  `
})
export class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = [];
  scale = scale;
  labelFormat = labelFormat;
  tickLine = tickLine;
  label = label;
  rowTitle = rowTitle;

  constructor() {
    $.getJSON('/assets/data/fertility.json', (data) => {
      var ds = new DataSet();
      var dv = ds.createView().source(data);
      dv.transform({
        type: 'sort',
        callback: function callback(a, b) {
          return a.year - b.year;
        }
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

export default class AppModule { }

