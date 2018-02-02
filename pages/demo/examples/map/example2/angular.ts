import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [padding]="[20, 20]" [scale]="scale">
      <v-tooltip [showTitle]="showTitle"></v-tooltip>
      <v-legend dataKey="trend" position="left"></v-legend>
      <v-view [data]="geoData" [scale]="scale">
        <v-polygon [position]="view1Opts.position" [style]="view1Opts.style" [tooltip]="view1Opts.tooltip"></v-polygon>
      </v-view>
      <v-view [data]="data" [scale]="userDataScale">
        <v-polygon [position]="view2Opts.position" [opacity]="view2Opts.opacity" [color]="view2Opts.color" [animate]="view2Opts.animate" [tooltip]="view2Opts.tooltip"></v-polygon>
      </v-view>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  showTitle = false;
  data = null;
  geoData = [];
  scale = [{
    dataKey: 'longitude',
    sync: true,
  }, {
    dataKey: 'latitude',
    sync: true,
  }];

  userDataScale = [{
    dataKey: 'trend',
    alias: '每100位女性对应的男性数量',
  }];

  view1Opts = {
    quickType: 'polygon',
    position: 'longitude*latitude',
    style: {
      fill: '#fff',
      stroke: '#ccc',
      lineWidth: 1
    },
    tooltip: false,
  };

  view2Opts = {
    quickType: 'polygon',
    position: 'longitude*latitude',
    opacity: 'value',
    color: ['trend', [ '#F51D27', '#0A61D7' ]],
    tooltip: 'name*trend',
    animate: {
      leave: {
        animation: 'fadeOut'
      }
    },
  };

  constructor() {
    $.when(
      $.getJSON('/assets/data/worldGeo.json'),
      $.getJSON('/assets/data/map-2.json')
    ).then((geoData, data) => {
      const worldMap = new DataSet.View().source(geoData[0], {
        type: 'GeoJSON',
      });

      const userDv = new DataSet.View().source(data[0]).transform({
        geoDataView: worldMap,
        field: 'name',
        type: 'geo.region',
        as: ['longitude', 'latitude'],
      }).transform({
        type: 'map',
        callback: function(obj) {
          obj.trend = (obj.value > 100) ? '男性更多' : '女性更多';
          return obj;
        }
      });

      this.geoData = worldMap;
      this.data = userDv;
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

