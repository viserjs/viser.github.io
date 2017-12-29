import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';

const dataPre = {
  transform: [{
    type: 'fold',
    fields: ['SepalLength','SepalWidth','PetalLength','PetalWidth'],
    key: 'type',
    value: 'value'
  }, {
    type: 'bin.quantile',
    field: 'value',
    as: '_bin',
    groupBy: ['Species', 'type'],
  }]
};

const scale = [{
  dataKey: 'range',
  min: 0,
  max: 240000,
}, {
  dataKey: 'outliers',
  min: 0,
  max: 240000,
}];

const colorMap = {
  'I. setosa': 'red',
  'I. versicolor': 'blue',
  'I. virginica': 'green',
};

const tooltipOpts = {
  crosshairs: {
    type: 'rect',
  },
};

const seriesColor = ['Species', val => {
  return colorMap[val];
}];

const seriesStyle = ['Species', {
  stroke: '#545454',
  fill: val => {
    return colorMap[val];
  },
  fillOpacity: 0.3,
}];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [dataPre]="dataPre" [scale]="scale">
      <v-tooltip [crosshairs]="tooltipOpts.crosshairs"></v-tooltip>
      <v-axis></v-axis>
      <v-legend marker="circle"></v-legend>
      <v-box position="type*_bin" adjust="dodge" [style]="seriesStyle" [color]="seriesColor"></v-box>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = [];
  dataPre = dataPre;
  scale = scale;
  colorMap = colorMap;
  tooltipOpts = tooltipOpts;
  seriesColor = seriesColor;
  seriesStyle = seriesStyle;

  constructor() {
    $.getJSON('/data/box-3.json', (data) => {
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
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
