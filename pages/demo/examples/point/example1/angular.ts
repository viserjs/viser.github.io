import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';

@Component({
  selector: '#mount',
  template: `
  <div >
    <v-chart [forceFit]="true" [height]="400" [data]="data">
      <v-tooltip [showTitle]="false" [crosshairs]="tooltipCrosshairs" [itemTpl]="tooltipItemTpl"></v-tooltip>
      <v-axis></v-axis>
      <v-point position="height*weight" [size]="4" [opacity]="0.65" [tooltip]="pointTooltip" shape="circle"></v-point>
    </v-chart>
  </div>
  `
})
class AppComponent {
  data = [];
  pointTooltip = ['gender*height*weight', (gender, height, weight) => {
    return {
      name: gender,
      value: height + '(cm), ' + weight + '(kg)'
    };
  }];
  tooltipCrosshairs = { type: 'cross' };
  tooltipItemTpl = `
    <li data-index={index} style="margin-bottom:4px;">
      <span style="background-color:{color};" class="g2-tooltip-marker"></span>
      {name}<br />{value}
    </li>
  `;

  constructor() {
    $.getJSON('/assets/data/scatter.json', (data) => {
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

