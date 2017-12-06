import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data = [
  { country: '中国', population: 131744 },
  { country: '印度', population: 104970 },
  { country: '美国', population: 29034 },
  { country: '印尼', population: 23489 },
  { country: '巴西', population: 18203 },
];

const dataPre = {
  transform: {
    type: 'sort',
    callback(a, b) {
      return a.population - b.population > 0;
    },
  },
};

const label = { offset: 12 };

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [dataPre]="dataPre">
      <v-coord type="rect" direction="LB"></v-coord>
      <v-tooltip></v-tooltip>
      <v-axis dataKey="coutry" [label]="label"></v-axis>
      <v-bar position="country*population"></v-ar>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean= true;
  height: number = 400;
  data = data;
  dataPre = dataPre;
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
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);