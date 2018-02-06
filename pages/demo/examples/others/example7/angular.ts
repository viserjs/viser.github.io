import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';

const scale = [{
  dataKey: 'type',
  range: [0, 1]
}];

const axis1Opts = {
  dataKey: 'clarity',
  grid: {
    align: 'center',
    lineStyle: {
      lineDash: [0, 0]
    }
  }
};

const jitterPointOpts = {
  gemo: 'pointJitter',
  position: 'clarity*type',
  color: 'clarity',
  shape: 'circle',
  opacity: 0.65,
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [padding]="[ 40, 100, 80, 80 ]" [data]="data" [scale]="scale">
      <v-tooltip></v-tooltip>
      <v-coord type="polar"></v-coord>
      <v-axis [dataKey]="axis1Opts.dataKey" [grid]="axis1Opts.grid"></v-axis>
      <v-jitter-point [position]="jitterPointOpts.position" [color]="jitterPointOpts.color" [shape]="jitterPointOpts.shape" [opacity]="jitterPointOpts.opacity"></v-jitter-point>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = [];
  scale = scale;
  axis1Opts = axis1Opts;
  jitterPointOpts = jitterPointOpts;
  constructor() {
    $.getJSON('/assets/data/diamond.json', (data) => {
      data.forEach((obj: any) => {
        obj.type = '1';
      });
      this.data = data;
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

