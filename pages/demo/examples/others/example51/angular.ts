import 'zone.js';
import 'reflect-metadata';
import * as $ from 'jquery';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const DataSet = require('@antv/data-set');

@Component({
  selector: '#mount',
  template: `
    <div>
      <v-chart [forceFit]="forceFit" [height]="height" padding="0" [scale]="scale">
        <v-view [data]="dv">
            <v-polygon position="longitude*latitude" color="#ddd" [style]="style"></v-polygon>
        </v-view>
        <v-view [data]="airports.slice(1,100)">
            <v-point position="longitude*latitude" [shape]="shape" size="40" color="#666"></v-point>
        </v-view>
      </v-chart>
    </div>
  `,
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 500;
  dv: any = {};
  airports: any = [];
  scale: any = [
    {
      dataKey: 'longitude',
      max: -66,
      min: -125,
      // sync: true
    },
    {
      dataKey: 'latitude',
      max: 50,
      min: 24,
      // sync: true
    },
  ];
  style: any = { stroke: '#666', lineWidth: 1 };
  shape: any = [
    'iata',
    () => [
      'path',
      'M15 0C6.716 0 0 6.656 0 14.866c0 8.211 15 35.135 15 35.135s15-26.924 15-35.135C30 6.656 23.284 0 15 0zm-.049 19.312c-2.557 0-4.629-2.055-4.629-4.588 0-2.535 2.072-4.589 4.629-4.589 2.559 0 4.631 2.054 4.631 4.589 0 2.533-2.072 4.588-4.631 4.588z',
    ],
  ];
  constructor() {
    $.getJSON('/assets/data/usa.geo-1.json', data => {
      $.getJSON('/assets/data/airport-1.json', airports => {
        const dv = new DataSet.View().source(data).source(data, {
          type: 'GeoJSON',
        });
        this.dv = dv;
        this.airports = airports;
      });
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
