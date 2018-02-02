import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const expectData = [
  {value: 100, name: '展现'},
  {value: 80, name: '点击'},
  {value: 60, name: '访问'},
  {value: 40, name: '咨询'},
  {value: 30, name: '订单'},
];

const actualData = [
  {value: 80, name: '展现'},
  {value: 50, name: '点击'},
  {value: 30, name: '访问'},
  {value: 10, name: '咨询'},
  {value: 5, name: '订单'},
];

const tooltipOpts = {
  showTitle: false,
  itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
};

const pyramidOpts = {
  position: 'name*value',
  color: ['name', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF']],
  label: ['name', {
    offset: 35,
    labelLine: {
      lineWidth: 1,
      stroke: 'rgba(0, 0, 0, 0.15)',
    }
  }],
  tooltip: ['name*value', (name, value) => {
    return {
      name: '预期' + name,
      value,
    };
  }],
  opacity: 0.65,
};

const pyramidOpts1 = {
  quickType: 'pyramid',
  position: 'name*value',
  color: ['name', [ '#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF' ]],
  tooltip: ['name*value', (name, value) => {
    return {
      name: '实际' + name,
      value,
    };
  }],
  style: {
    lineWidth: 1,
    stroke: '#fff',
  },
  opacity: 1,
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="expectData">
      <v-tooltip [showTitle]="false" [itemTpl]="tooltipOpts.itemTpl"></v-tooltip>
      <v-coord type="rect" direction="LT"></v-coord>
      <v-pyramid [position]="pyramidOpts.position" [color]="pyramidOpts.color"
          [label]="pyramidOpts.label" [tooltip]="pyramidOpts.tooltip" [opacity]="pyramidOpts.opacity"></v-pyramid>
      <v-view [data]="actualData">
        <v-tooltip></v-tooltip>
        <v-coord type="rect" direction="LT"></v-coord>
        <v-pyramid [position]="pyramidOpts1.position" [color]="pyramidOpts1.color"
          [style]="pyramidOpts1.style" [tooltip]="pyramidOpts1.tooltip" [opacity]="pyramidOpts1.opacity"></v-pyramid>
      </v-view>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  showTitle: boolean = false;
  expectData = expectData;
  actualData = actualData;
  tooltipOpts = tooltipOpts;
  pyramidOpts = pyramidOpts;
  pyramidOpts1 = pyramidOpts1;
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

