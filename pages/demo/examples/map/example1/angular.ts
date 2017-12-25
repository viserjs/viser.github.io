import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';

@Component({
  selector: '#mount',
  template: `
  <div *ngIf="data.length; else loading">
    <v-chart [forceFit]="forceFit" [height]="height" [padding]="[0, 20, 40]" [data]="geoData" [dataPre]="bgDataPre" [scale]="scale">
      <v-coord type="rect" direction="TL" ></v-coord>
      <v-tooltip [showTitle]="tooltipOpts.showTitle" [containerTpl]="tooltipOpts.containerTpl" [itemTpl]="tooltipOpts.itemTpl" [g2Tooltip]="tooltipOpts.g2Tooltip"></v-tooltip>
      <v-view viewId="111" [data]="geoData" [dataPre]="bgDataPre" [scale]="scale">
        <v-polygon [position]="view1Opts.position" [style]="view1Opts.style" viewId="111" [tooltip]="view1Opts.tooltip"></v-polygon>
      </v-view>
      <v-view viewId="122" [data]="data" [dataPre]="userDataPre">
        <v-point viewId="122" [position]="view2Opts.position" [size]="view2Opts.size" [opacity]="view2Opts.opacity" [color]="view2Opts.color" [tooltip]="view2Opts.tooltip"></v-point>
      </v-view>
    </v-chart>
  </div>
  <ng-template #loading>Loading ...</ng-template>
  `
})

class AppComponent {
  forceFit: boolean= true;
  height: number = 600;
  geoData = {};
  data = [];
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

  bgDataPre = {
    connector: {
      type: 'GeoJSON'
    },
    transform: {
      type: 'geo.projection',
      projection: 'geoMercator',
      as: ['x', 'y', 'centroidX', 'centroidY'],
    },
  };

  userDataPre = (dv) => {
    const geo = dv['111'];
    return {
      transform: {
        type: 'map',
        callback: (obj) => {
          const projectedCoord = geo.geoProjectPosition([obj.lng * 1, obj.lat * 1], 'geoMercator');
          obj.x = projectedCoord[0];
          obj.y = projectedCoord[1];
          obj.deaths = obj.deaths * 1;
          obj.magnitude = obj.magnitude * 1;
          return obj;
        }
      },
    }
  };

  view1Opts = {
    quickType: 'polygon',
    position: 'x*y',
    style: {
      fill: '#DDDDDD',
      stroke: '#fff',
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
    $.when($.getJSON('/data/worldGeo.json'),$.getJSON('/data/map-1.json')).then((geoData, data) => {
      this.geoData = geoData[0];
      this.data = data[0];
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
