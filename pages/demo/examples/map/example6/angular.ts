import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');
const scale = [{
  dataKey: 'latitude',
  sync: true,
  nice: false,
}, {
  dataKey: 'longitude',
  sync: true,
  nice: false,
}];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [padding]="[0, 20, 0]" [scale]="scale">
      <v-view [data]="geoData" [scale]="scale">
        <v-polygon [position]="'longitude*latitude'" [color]="'gray'" [label]="['name', {offset: 0}]"></v-polygon>
      </v-view>
      <v-view [data]="data">
        <v-heatmap [position]="pointOpts.position" [size]="pointOpts.size" [color]="pointOpts.color" [style]="pointOpts.style"></v-heatmap>
      </v-view>
    </v-chart>
  </div>
  `
})

class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  geoData = {};
  data = null;
  scale = scale;
  pointOpts = {
    position: 'longitude*latitude',
    size: 18,
    color: ['value', '#F51D27-#FA541C-#FF8C12-#FFC838-#FAFFA8-#80FF73-#12CCCC-#1890FF-#6E32C2'],
    style: {
      blur: 23,
    }
  };

  constructor() {
    $.getJSON('/assets/data/usa.geo.json').then((geoData) => {
      const userData = [];
      const geoDv = new DataSet.View().source(geoData, {
          type: 'GeoJSON'
      }).transform({
          type: 'map',
          callback(row) {
              userData.push({
                  longitude: row.centroidX,
                  latitude: row.centroidY,
                  name: row.name,
                  value: Math.random() * (1000 - 1)
              });
              return row;
          }
      });

      this.geoData = geoDv;
      this.data = userData;
    });
  }
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

