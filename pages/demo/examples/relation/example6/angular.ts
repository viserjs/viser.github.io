import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import { data } from './data';

const dataPre = {
  connector: {
    type: 'hierarchy',
  },
  transform: {
    type: 'hierarchy.partition',
  },
};

const dataView = [
  'nodes', nodes => {
    return nodes.map((node: any) => ({
      name: node.data.name,
      value: node.value,
      depth: node.depth,
      x: node.x,
      y: node.y,
    }));
  },
];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [dataPre]="dataPre" [dataView]="dataView" padding="0">
      <v-tooltip showTitle="false"></v-tooltip>
      <v-polygon position="x*y" color="name"></v-polygon>
    </v-chart>
  </div>
  `
})
export class AppComponent {
  forceFit: boolean = true;
  height: number = 500;
  data = data;
  dataView = dataView;
  dataPre = dataPre;
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