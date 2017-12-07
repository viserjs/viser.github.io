import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import { data } from './data';

const dataPre = {
  transform: {
    type: 'bin.histogram',
    field: 'depth',
    binWidth: 1,
    groupBy: [ 'cut' ],
    as: ['depth', 'count'],
  },
};

const scale = [{
  dataKey: 'depth',
  tickInterval: 4,
}];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [dataPre]="dataPre" [scale]="scale">
      <v-tooltip crosshairs="false" inPlot="false" position="top"></v-tooltip>
      <v-axis></v-axis>
      <v-bar position="depth*count"></v-bar>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean= true;
  height: number = 400;
  data = data;
  dataPre = dataPre;
  scale = scale;
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