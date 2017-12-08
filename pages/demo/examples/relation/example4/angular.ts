import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import { data } from './data';

const dataPre = {
  connector: {
    type: 'graph',
    edges: d => d.links,
  },
  transform: {
    type: 'diagram.sankey',
    nodeWidth: 0.015,
    nodePadding: 0.02,
  },
};

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
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [dataPre]="dataPre" [scale]="scale" [padding]="padding">
      <v-tooltip showTitle="false"></v-tooltip>
      <v-view dataView="edges">
        <v-sankey position="x*y" color="#bbb" opacity="0.6" [tooltip]="tooltip" [style]="sankeyStyle"></v-sankey>
      </v-view>
      <v-view dataView="nodes">
        <v-polygon position="x*y" color="name" [style]="polygonStyle" [label]="polygonLabel" tooltip="false"></v-polygon>
      </v-view>
    </v-chart>
  </div>
  `
})
export class AppComponent {
  forceFit: boolean= true;
  height: number = 500;
  data = data;
  dataPre = dataPre;
  scale = scale;
  padding = [40, 80];
  tooltip = tooltip;
  polygonLabel = polygonLabel;
  sankeyStyle = { curvature: 0.5 };
  polygonStyle = { stroke: '#ccc' };
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