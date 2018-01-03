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
    <v-chart [forceFit]="forceFit" [height]="height" [padding]="padding" [data]="geoData" [dataPre]="bgDataPre" [scale]="scale">
      <v-tooltip [showTitle]="showTitle"></v-tooltip>
      <v-legend dataKey="trend" position="left"></v-legend>
      <v-view viewId="111" [data]="geoData" [dataPre]="bgDataPre" [scale]="scale">
        <v-polygon [position]="view1Opts.position" [style]="view1Opts.style" [tooltip]="view1Opts.tooltip"></v-polygon>
      </v-view>
      <v-view viewId="122" [data]="data" [dataPre]="userDataPre" [scale]="userDataScale">
        <v-polygon [position]="view2Opts.position" [opacity]="view2Opts.opacity" [color]="view2Opts.color" [animate]="view2Opts.animate" [tooltip]="view2Opts.tooltip"></v-polygon>
      </v-view>
    </v-chart>
  </div>
  <ng-template #loading>Loading ...</ng-template>
  `
})

class AppComponent {
  showTitle = false;
  forceFit: boolean= true;
  height: number = 600;
  padding = [55, 20];
  data = [];
  geoData = {};
  scale = [{
    dataKey: 'longitude',
    sync: true,
  }, {
    dataKey: 'latitude',
    sync: true,
  }];

  bgDataPre = {
    connector: {
      type: 'GeoJSON'
    }
  };

  userDataPre = (dv) => {
    const geo = dv['111'];
    return {
      transform: [{
        geoDataView: geo,
        field: 'name',
        type: 'geo.region',
        as: [ 'longitude', 'latitude' ],
      },
      {
        type: 'map',
        callback: function(obj) {
          obj.trend = (obj.value > 100) ? '男性更多' : '女性更多';
          return obj;
        }
      }
      ],
    };
  };

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
    $.when($.getJSON('/data/worldGeo.json'),$.getJSON('/data/map-2.json')).then((geoData, data) => {
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
