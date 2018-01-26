import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [padding]="[0, 20, 0]" [scale]="scale">
      <v-coord type="rect" direction="TL" ></v-coord>
      <v-tooltip [showTitle]="tooltipOpts.showTitle" [containerTpl]="tooltipOpts.containerTpl" [itemTpl]="tooltipOpts.itemTpl" [g2Tooltip]="tooltipOpts.g2Tooltip"></v-tooltip>
      <v-view [data]="geoData" [scale]="scale">
        <v-polygon [position]="view1Opts.position" [style]="view1Opts.style" [tooltip]="view1Opts.tooltip"></v-polygon>
      </v-view>
      <v-view [data]="data">
        <v-point [position]="view2Opts.position" [size]="view2Opts.size" [opacity]="view2Opts.opacity" [color]="view2Opts.color" [tooltip]="view2Opts.tooltip" shape="circle"></v-point>
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
  tooltipOpts = {
    showTitle: false,
    containerTpl: '<div class="g2-tooltip">'
      + '<table class="g2-tooltip-list"></table></div>',
    itemTpl: '<tr data-index={index}><td style="padding: 5px; background-color:#545454">{name}</td><td style="padding: 5px; background-color:#fff;color: #000">{value}</td></tr>',
    g2Tooltip: {
      borderRadius: '2px',
      backgroundColor: '#DDDDDD',
      padding: 0,
      border: '1px solid #333'
    }
  };

  scale = [{
    dataKey: 'x',
    sync: true,
    nice: false,
  }, {
    dataKey: 'y',
    sync: true,
    nice: false,
  }];

  view1Opts = {
    quickType: 'polygon',
    position: 'x*y',
    style: {
      fill: '#ddd',
      stroke: '#b1b1b1',
      lineWidth: 0.5,
      fillOpacity: 0.85,
    },
    tooltip: false,
  };
  view2Opts = {
    quickType: 'point',
    position: 'x*y',
    size: ['deaths', [2, 30]],
    opacity: 0.45,
    color: '#FF2F29',
    tooltip: 'date*location*lat*lng*deaths*magnitude',
  };

  constructor() {
    $.when($.getJSON('/assets/data/worldGeo.json'),$.getJSON('/assets/data/map-1.json')).then((geoData, data) => {
      const dv = new DataSet.View().source(geoData[0], {
          type: 'GeoJSON'
      }).transform({
        type: 'geo.projection',
        projection: 'geoMercator',
        as: ['x', 'y', 'centroidX', 'centroidY'],
      });

      const userData = new DataSet.View().source(data[0]).transform({
        type: 'map',
        callback: (obj) => {
          const projectedCoord = dv.geoProjectPosition([obj.lng * 1, obj.lat * 1], 'geoMercator');
          obj.x = projectedCoord[0];
          obj.y = projectedCoord[1];
          obj.deaths = obj.deaths * 1;
          obj.magnitude = obj.magnitude * 1;
          return obj;
        }
      });

      this.geoData = dv;
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
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
