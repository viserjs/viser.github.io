import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'exp_dat',
  type: 'time',
  mask: 'M/YY',
  tickCount: 14
}, {
  dataKey: 'exp_amo',
  type: 'log',
  ticks: [225, 1000000 ,2000000 , 4000000, 6000000]
}];

const axis1Opts = {
  dataKey: 'exp_dat',
  tickLine: null,
  label: {
    textStyle: {
      fontSize: 14
    }
  }
};

const axis2Opts = {
  dataKey: 'exp_amo',
  tickLine: null,
  line: null,
  grid: {
    lineStyle: {
      lineDash: null,
      stroke: '#999'
    }
  },
  label: {
    formatter: function(val) {
      let formatted;
      if (+val === 225) {
        formatted = 0;
      } else {
        formatted = val / 1000000;
      }
      return '$' + formatted + 'M';
    }
  }
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [scale]="scale">
      <v-tooltip [showTitle]="false"></v-tooltip>
      <v-axis [dataKey]="axis1Opts.dataKey" [tickLine]="axis1Opts.tickLine" [label]="axis1Opts.label"></v-axis>
      <v-axis [dataKey]="axis2Opts.dataKey" [tickLine]="axis2Opts.tickLine" [line]="axis2Opts.line" [grid]="axis2Opts.grid"
        [grid]="axis2Opts.grid" [label]="axis2Opts.label"></v-axis>
      <v-point position="exp_dat*exp_amo" [size]="['exp_amo', [ 1, 10 ]]" [size]="pointOpts.size" opacity="exp_amo" shape="circle" tooltip="exp_dat*can_nam*spe_nam*exp_amo"></v-point>
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

  constructor() {
    $.getJSON('/assets/data/time-scatter.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData);
      dv.transform({
        type: 'map',
        callback: obj => {
          obj.exp_amo = obj.exp_amo * 1;
          return obj;
        }
      });
      this.data = dv.rows;
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

