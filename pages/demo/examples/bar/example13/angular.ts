import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const DataSet = require('@antv/data-set');

const sourceData = [
  { profession: '两年制副学士学位', highest: 110000, minimum: 23000, mean: 56636 },
  { profession: '执法与救火', highest: 120000, minimum: 18000, mean: 66625 },
  { profession: '教育学', highest: 125000, minimum: 24000, mean: 72536 },
  { profession: '心理学', highest: 130000, minimum: 22500, mean: 75256 },
  { profession: '计算机科学', highest: 131000, minimum: 23000, mean: 77031 }
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'map',
  callback(row) {
    row.range = [row.minimum, row.highest];
    return row;
  }
});
const data = dv.rows;

const label = { offset: 12 };

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [padding]="padding" [height]="height" [data]="data">
      <v-coord type="rect" direction="LB"></v-coord>
      <v-tooltip></v-tooltip>
      <v-legend></v-legend>
      <v-axis dataKey="profession" [label]="label"></v-axis>
      <v-bar position="profession*range"></v-bar>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = data;
  label = label;
  padding = [20, 80, 50, 110];
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

