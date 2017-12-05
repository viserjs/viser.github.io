import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data = [
  { year: '1996',  north: 322, south: 162 },
  { year: '1997',  north: 324, south: 90 },
  { year: '1998',  north: 329, south: 50 },
  { year: '1999',  north: 342, south: 77 },
  { year: '2000',  north: 348, south: 35 },
  { year: '2001',  north: 334, south: -45 },
  { year: '2002',  north: 325, south: -88 },
  { year: '2003',  north: 316, south: -120 },
  { year: '2004',  north: 318, south: -156 },
  { year: '2005',  north: 330, south: -123 },
  { year: '2006',  north: 355, south: -88 },
  { year: '2007',  north: 366, south: -66 },
  { year: '2008',  north: 337, south: -45 },
  { year: '2009',  north: 352, south: -29 },
  { year: '2010',  north: 377, south: -45 },
  { year: '2011',  north: 383, south: -88 },
  { year: '2012',  north: 344, south: -132 },
  { year: '2013',  north: 366, south: -146 },
  { year: '2014',  north: 389, south: -169 },
  { year: '2015',  north: 334, south: -184 },
];

const dataPre = {
  transform: {
    type: 'fold',
    fields: ['north', 'south'],
    key: 'type',
    value: 'value',
  },
};

const scale = [{
  dataKey: 'year',
  min: 0,
  max: 1,
}];

@Component({
  selector: '#mount',
  template: `
  <div>
    <Chart [forceFit]="forceFit" [height]="height" [data]="data" [dataPre]="dataPre" [scale]="scale">
      <Tooltip [crosshairs]="crosshairs"></Tooltip>
      <Axis dataKey="value"></Axis>
      <Legend></Legend>
      <Line position="year*value" size="2" color="type"></Line>
      <Area position="year*value" color="type" />
    </Chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean= true;
  height: number = 400;
  data = data;
  dataPre = dataPre;
  scale = scale;
  crosshairs = { type: 'line' };
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
