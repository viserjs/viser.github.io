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
    marginRatio: 0.5,
  },
};

const label = ['name', {
  offset: -10,
  textStyle: {
    textAlign: 'left',
    rotate: 90
  },
}];

const style = {
  stroke: 'grey',
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [dataPre]="dataPre">
      <v-tooltip showTitle="false"></v-tooltip>
      <v-view dataView="edges">
        <v-coord type="polar" direction="yReverse"></v-coord>
        <v-edge position="x*y" shape="arc" color="source" opacity="0.5" tooltip="source*target"></v-edge>
      </v-view>
      <v-view dataView="nodes">
        <v-coord type="polar" direction="yReverse"></v-coord>
        <v-point position="x*y" size="value" color="id" opacity="0.5" [style]="style" [label]="label"></v-point>
      </v-view>
    </v-chart>
  </div>
  `
})
export class AppComponent {
  forceFit: boolean = true;
  height: number = 500;
  data = data;
  dataPre = dataPre;
  style = style;
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
  bootstrap: [AppComponent]
})

export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);