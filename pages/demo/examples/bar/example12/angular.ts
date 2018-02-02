import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const DataSet = require('@antv/data-set');

const sourceData = [
  { 'State': 'WY', '小于5岁': 25635, '5至13岁': 1890, '14至17岁': 9314 },
  { 'State': 'DC', '小于5岁': 30352, '5至13岁': 20439, '14至17岁': 10225 },
  { 'State': 'VT', '小于5岁': 38253, '5至13岁': 42538, '14至17岁': 15757 },
  { 'State': 'ND', '小于5岁': 51896, '5至13岁': 67358, '14至17岁': 18794 },
  { 'State': 'AK', '小于5岁': 72083, '5至13岁': 85640, '14至17岁': 22153 }
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'fold',
  fields: ['小于5岁', '5至13岁', '14至17岁'],
  key: '年龄段',
  value: '人口数量',
  retains: ['State'],
});
const data = dv.rows;

const label = { offset: 12 };

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data">
      <v-coord type="rect" direction="LB"></v-coord>
      <v-tooltip></v-tooltip>
      <v-legend></v-legend>
      <v-axis dataKey="State" [label]="label"></v-axis>
      <v-stack-bar position="State*人口数量" color="年龄段"></v-stack-bar>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = data;
  label = label;
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

