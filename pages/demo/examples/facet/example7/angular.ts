import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const DataSet = require('@antv/data-set');
const { DataView } = DataSet;

const sourceData = [
  {gender:'男',count:40,'class': '一班',grade: '一年级'},
  {gender:'女',count:30,'class': '一班',grade: '一年级'},
  {gender:'男',count:35,'class': '二班',grade: '一年级'},
  {gender:'女',count:45,'class': '二班',grade: '一年级'},
  {gender:'男',count:20,'class': '三班',grade: '一年级'},
  {gender:'女',count:35,'class': '三班',grade: '一年级'},
  {gender:'男',count:30,'class': '一班',grade: '二年级'},
  {gender:'女',count:40,'class': '一班',grade: '二年级'},
  {gender:'男',count:25,'class': '二班',grade: '二年级'},
  {gender:'女',count:32,'class': '二班',grade: '二年级'},
  {gender:'男',count:28,'class': '三班',grade: '二年级'},
  {gender:'女',count:36,'class': '三班',grade: '二年级'},
];

const views = (view, facet) => {
  const data = facet.data;
  const dv = new DataView();
  dv.source(data).transform({
    type: 'percent',
    field: 'count',
    dimension: 'gender',
    as: 'percent',
  });

  return {
    data: dv,
    scale: {
      dataKey: 'percent',
      formatter: '.2%',
    },
    series: {
      quickType: 'stackBar',
      position: 'percent',
      color: 'gender',
    }
  }
}

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="600" [data]="data" [padding]="padding">
      <v-tooltip showTitle="false"></v-tooltip>
      <v-legend dataKey="cut" position="top"></v-legend>
      <v-coord type="theta"></v-coord>
      <v-facet type="tree" [fields]="fields" [line]="line" lineSmooth="true" [views]="views"></v-facet>
    </v-chart>
  </div>
  `
})
export class AppComponent {
  forceFit: boolean = true;
  height: number = 600;
  data = sourceData;
  line = { stroke: '#00a3d7' };
  padding = [60, 90, 80, 80];
  fields = ['grade', 'class'];
  views = views;
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

export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
