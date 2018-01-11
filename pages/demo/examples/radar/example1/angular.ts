import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const DataSet = require('@antv/data-set');

const sourceData = [
  { item: 'Design', a: 70, b: 30 },
  { item: 'Development', a: 60, b: 70 },
  { item: 'Marketing', a: 50, b: 60 },
  { item: 'Users', a: 40, b: 50 },
  { item: 'Test', a: 60, b: 70 },
  { item: 'Language', a: 70, b: 50 },
  { item: 'Technology', a: 50, b: 40 },
  { item: 'Support', a: 30, b: 40 },
  { item: 'Sales', a: 60, b: 40 },
  { item: 'UX', a: 50, b: 60 },
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'fold',
  fields: ['a', 'b'],
  key: 'user',
  value: 'score',
});
const data = dv.rows;

const scale = [{
  dataKey: 'score',
  min: 0,
  max: 80,
}];

const axis1GridOpts = {
  lineStyle: {
    lineDash: null
  },
  hideFirstLine: false
};

const axis2GridOpts =  {
  type: 'polygon',
  lineStyle: {
    lineDash: null
  }
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [scale]="scale">
      <v-tooltip></v-tooltip>
      <v-axis dataKey="item" line="null" tickLine="null" [grid]="axis1GridOpts"></v-axis>
      <v-axis dataKey="score" line="null" tickLine="null" [grid]="axis2GridOpts"></v-axis>
      <v-legend></v-legend>
      <v-coord type="polar" radius="0.8"></v-coord>
      <v-line position="item*score" color="user" size="2"></v-line>
      <v-point position="item*score" color="user" size="4"></v-point>
      <v-area position="item*score" color="user"></v-area>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean= true;
  height: number = 400;
  data = data;
  scale = scale;
  axis1GridOpts = axis1GridOpts;
  axis2GridOpts = axis2GridOpts;
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
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
