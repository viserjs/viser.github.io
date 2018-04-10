import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const DataSet = require('@antv/data-set');
const { DataView } = DataSet;

const data = [
  { low: 1, q1: 9, median: 16, q3: 22, high: 24 }
];

const dv = new DataView().source(data);
dv.transform({
  type: 'map',
  callback: (obj) => {
    obj.range = [ obj.low, obj.q1, obj.median, obj.q3, obj.high ];
    return obj;
  }
});

const scale = [{
  dataKey: 'range',
  max: 35,
}];

const tooltipOpts = {
  crosshairs: false
};

const style = {
  stroke: '#545454',
  fill: '#1890FF',
  fillOpacity: 0.3
};


@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [scale]="scale">
      <v-tooltip [crosshairs]="tooltipOpts.crosshairs"></v-tooltip>
      <v-axis></v-axis>
      <v-box position="range*1" [style]="style" [tooltip]="'x*low*q1*median*q3*high'"></v-box>
    </v-chart>
  </div>
  `
})

class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = dv;
  scale = scale;
  tooltipOpts = tooltipOpts;
  style = style;
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

