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
    type: 'diagram.arc',
    sourceWeight: e => e.sourceWeight,
    targetWeight: e => e.targetWeight,
    weight: true,
    marginRatio: 0.3
  },
};

const scale = [{
  dataKey: 'x',
  sync: true,
}, {
  dataKey: 'y',
  sync: true,
}];

const label = ['name', {
  labelEmit: true,
  textStyle: {
    fill: '#8c8c8c',
  },
}];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [dataPre]="dataPre" [scale]="scale">
      <v-view dataView="edges">
        <v-coord type="polar" direction="yReverse"></v-coord>
        <v-edge position="x*y" color="source" shape="arc" opacity="0.5" tooltip="source*target*value"></v-edge>
      </v-view>
      <v-view dataView="nodes">
        <v-coord type="polar" direction="yReverse"></v-coord>
        <v-polygon position="x*y" color="id" [label]="label"></v-polygon>
      </v-view>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 500;
  data = data;
  dataPre = dataPre;
  scale = scale;
  label = label;
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
