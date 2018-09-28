import 'zone.js';
import 'reflect-metadata';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const series = {
  0: 'All Industries',
  32229: 'Nonagriculture, Private Wage and Salary Workers',
  32230: 'Mining and Extraction',
  32231: 'Construction',
  32232: 'Manufacturing',
  32233: 'Durable goods manufacturing',
  32234: 'Nondurable goods manufacturing',
  32235: 'Wholesale and Retail Trade',
  32236: 'Transportation and Utilities',
  32237: 'Information',
  32238: 'Finance',
  32239: 'Business services',
  32240: 'Education and Health',
  32241: 'Leisure and hospitality',
  32242: 'Other',
  35109: 'Agriculture',
  28615: 'Government',
  35181: 'Self-employed',
};

@Component({
  selector: '#mount',
  template: `
    <div>
        <v-chart [forceFit]="forceFit" [height]="height" [padding]="20" [scale]="scale" [data]="data">
            <v-area position="date*rate" color="series" [opacity]="0.85"></v-area>
        </v-chart>
    </div>
    `,
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = [];
  scale = [
    {
      dataKey: 'date',
      type: 'time',
    },
    {
      dataKey: 'rate',
      min: 0,
    },
  ];
  series = series;
  constructor() {
    $.getJSON('/assets/data/unemployment.json', sourceData => {
      const dv = new DataSet.View().source(sourceData);
      dv.transform({
        type: 'map',
        callback: function callback(row) {
          row.series = series[row.series];
          return row;
        },
      });
      this.data = dv;
    });
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ViserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
