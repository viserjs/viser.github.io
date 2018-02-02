import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data = [
  {country: 'Asia', year: '1750', value: 502},
  {country: 'Asia', year: '1800', value: 635},
  {country: 'Asia', year: '1850', value: 809},
  {country: 'Asia', year: '1900', value: 5268},
  {country: 'Asia', year: '1950', value: 4400},
  {country: 'Asia', year: '1999', value: 3634},
  {country: 'Asia', year: '2050', value: 947},
  {country: 'Africa', year: '1750', value: 106},
  {country: 'Africa', year: '1800', value: 107},
  {country: 'Africa', year: '1850', value: 111},
  {country: 'Africa', year: '1900', value: 1766},
  {country: 'Africa', year: '1950', value: 221},
  {country: 'Africa', year: '1999', value: 767},
  {country: 'Africa', year: '2050', value: 133},
  {country: 'Europe', year: '1750', value: 163},
  {country: 'Europe', year: '1800', value: 203},
  {country: 'Europe', year: '1850', value: 276},
  {country: 'Europe', year: '1900', value: 628},
  {country: 'Europe', year: '1950', value: 547},
  {country: 'Europe', year: '1999', value: 729},
  {country: 'Europe', year: '2050', value: 408},
  {country: 'Oceania', year: '1750', value: 200},
  {country: 'Oceania', year: '1800', value: 200},
  {country: 'Oceania', year: '1850', value: 200},
  {country: 'Oceania', year: '1900', value: 460},
  {country: 'Oceania', year: '1950', value: 230},
  {country: 'Oceania', year: '1999', value: 300},
  {country: 'Oceania', year: '2050', value: 300},
];

const scale = [{
  dataKey: 'year',
  type: 'linear',
  tickInterval: 50,
}];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [scale]="scale">
      <v-tooltip></v-tooltip>
      <v-axis></v-axis>
      <v-legend></v-legend>
      <v-line position="year*value" [size]="2" color="country" adjust="stack"></v-line>
      <v-stack-area position="year*value" color="country"></v-stack-area>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = data;
  scale = scale;
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

