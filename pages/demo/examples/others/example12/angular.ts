import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const DataSet = require('@antv/data-set');

const data = [
  {year: '2000','类型 A':21.0 ,'类型 B':16 ,'类型 C': 8},
  {year: '2001','类型 A':25.0 ,'类型 B':16 ,'类型 C': 8},
  {year: '2002','类型 A':25.0 ,'类型 B':15 ,'类型 C': 8},
  {year: '2003','类型 A':25.0 ,'类型 B':14 ,'类型 C': 7},
  {year: '2004','类型 A':25.0 ,'类型 B':14 ,'类型 C': 7},
  {year: '2005','类型 A':24.0 ,'类型 B':13 ,'类型 C': 8},
  {year: '2006','类型 A':24.0 ,'类型 B':14 ,'类型 C': 7},
  {year: '2007','类型 A':26.0 ,'类型 B':16 ,'类型 C': 7},
  {year: '2008','类型 A':26.0 ,'类型 B':15.2 ,'类型 C': 8},
  {year: '2009','类型 A':27.1 ,'类型 B':15.2 ,'类型 C': 10},
  {year: '2010','类型 A':27.5 ,'类型 B':15.4 ,'类型 C': 8},
  {year: '2011','类型 A':26.4 ,'类型 B':15.2 ,'类型 C': 9},
  {year: '2012','类型 A':28.8 ,'类型 B':15.4 ,'类型 C': 9},
  {year: '2013','类型 A':33.3 ,'类型 B':16.7 ,'类型 C': 12},
  {year: '2014','类型 A':38.2 ,'类型 B':19.5 ,'类型 C': 18}
];

const dv = new DataSet.View().source(data).transform({
  type: 'fold',
  fields: ['类型 A', '类型 B', '类型 C'],
  key: '难民类型',
  value: 'count',
  remains: 'year'
});

const stackInterval1Opts = {
  position: 'year*count',
  color: '难民类型',
  style: {
    lineWidth: 1,
    stroke: '#fff'
  }
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [padding]="80" [data]="dv">
      <v-coord type="polar" [innerRadius]="0.1"></v-coord>
      <v-axis dataKey="percent" [title]="{offset: 40, text: '百分比'}"></v-axis>
      <v-legend dataKey="难民类型" position="bottom"></v-legend>
      <v-stack-interval [position]="stackInterval1Opts.position" [color]="stackInterval1Opts.color"
        [style]="stackInterval1Opts.style"></v-stack-interval>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  dv = dv;
  stackInterval1Opts = stackInterval1Opts;
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

