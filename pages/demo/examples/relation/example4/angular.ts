import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'x',
  sync: true,
}, {
  dataKey: 'y',
  sync: true,
}];

const tooltip = [
  'target*source*value', (target, source, value) => ({
    name: source.name + ' to ' + target.name + '</span>',
    value,
  }),
];

const polygonLabel = [
  'name', {
    textStyle: {
      fill: '#545454',
      textAlign: 'start',
    },
    offset: 0,
    formatter: val => {
      return '  ' + val;
    },
  }
];

@Component({
  selector: '#mount',
  template: `
  <div *ngIf="edgesData.length; else loading">
    <v-chart [forceFit]="forceFit" [height]="height" [scale]="scale" [padding]="padding">
      <v-tooltip showTitle="false"></v-tooltip>
      <v-view viewId="2" [data]="edgesData" [scale]="scale">
        <v-sankey position="x*y" color="#bbb" opacity="0.6" [tooltip]="tooltip" [style]="sankeyStyle"></v-sankey>
      </v-view>
      <v-view viewId="3" [data]="nodesData" [scale]="scale">
        <v-polygon position="x*y" color="name" [style]="polygonStyle" [label]="polygonLabel" tooltip="false"></v-polygon>
      </v-view>
    </v-chart>
  </div>
  <ng-template #loading>Loading ...</ng-template>
  `
})
export class AppComponent {
  forceFit: boolean = true;
  height: number = 500;
  edgesData = [];
  nodesData = [];
  scale = scale;
  padding = [40, 80];
  tooltip = tooltip;
  polygonLabel = polygonLabel;
  sankeyStyle = { curvature: 0.5 };
  polygonStyle = { stroke: '#ccc' };

  constructor() {
    $.getJSON('/data/energy.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData, {
        type: 'graph',
        edges: d => d.links,
      });
      dv.transform({
        type: 'diagram.sankey',
        nodeWidth: 0.015,
        nodePadding: 0.02,
      });
      this.edgesData = dv.edges;
      this.nodesData = dv.nodes;
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
  bootstrap: [AppComponent]
})

export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);