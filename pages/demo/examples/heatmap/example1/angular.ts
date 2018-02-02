import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';

const scale = [{
  dataKey: 'name',
  type: 'cat',
  values: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura'],
}, {
  dataKey: 'day',
  type: 'cat',
  values: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
}];

const axis1Opts = {
  dataKey: 'name',
  tickLine: null,
  grid: {
    align: 'center',
    lineStyle: {
      lineWidth: 1,
      lineDash: null,
      stroke: '#f0f0f0',
    }
  }
};

const axis2Opts = {
  dataKey: 'day',
  title: null,
  grid: {
    align: 'center',
    lineStyle: {
      lineWidth: 1,
      lineDash: null,
      stroke: '#f0f0f0',
    },
    showFirstLine: true,
  }
};

const seriesOpts = {
  quickType: 'polygon',
  color: ['sales', '#BAE7FF-#1890FF-#0050B3'],
  position: 'name*day',
  label: ['sales', {
    offset: -2,
    textStyle: {
      fill: '#fff',
      shadowBlur: 2,
      shadowColor: 'rgba(0, 0, 0, .45)',
    },
  }],
  style: {
    lineWidth: 1,
    stroke: '#fff',
  }
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [scale]="scale">
      <v-legend></v-legend>
      <v-tooltip></v-tooltip>
      <v-axis [tickLine]="axis1Opts.tickLine" [grid]="axis1Opts.grid"></v-axis>
      <v-axis [tickLine]="axis2Opts.tickLine" [grid]="axis2Opts.grid"></v-axis>
      <v-polygon [position]="seriesOpts.position" [color]="seriesOpts.color" [label]="seriesOpts.label" [style]="seriesOpts.style"></v-polygon>
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
  axis2Opts = axis2Opts;
  seriesOpts = seriesOpts;

  constructor() {
    $.getJSON('/assets/data/heatmap-1.json', (data) => {
      const source = [];
      for (let i = 0; i < data.length; i ++) {
        const item = data[i];
        const obj = {} as any;
        obj.name = item[0];
        obj.day = item[1];
        obj.sales = item[2];
        source.push(obj);
      }
      this.data = source;
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

