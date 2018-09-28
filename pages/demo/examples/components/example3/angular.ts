import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const guides = [
  {
    type: 'regionFilter',
    top: true,
    start: ['min', 0],
    end: ['max', 'min'],
    color: '#18a1cd',
  },
  {
    type: 'regionFilter',
    top: true,
    start: ['min', 'max'],
    end: ['max', 0],
    color: '#FF4D4F',
  },
  {
    type: 'region',
    top: false,
    start: [2000, 'max'],
    end: [2016, 'min'],
  },
  {
    type: 'dataMarker',
    top: true,
    position: [1977, 0.18],
    content: '时间进入1977年后，全球气\n温开始呈现整体升高趋势。',
    lineLength: 50,
    style: {
      text: {
        textAlign: 'right',
        fontSize: 13,
      },
      point: {
        stroke: '#FF4D4F',
      },
    },
  },
  {
    type: 'dataMarker',
    top: true,
    position: [1940, 0.08],
    content: '1940年，气温变化首次出现正值。',
    lineLength: 50,
    style: {
      text: {
        textAlign: 'right',
        fontSize: 13,
      },
      point: {
        stroke: '#FF4D4F',
      },
    },
  },
];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data">
      <v-tooltip></v-tooltip>
      <v-axis ></v-axis>
      <v-line position="year*change" color="white" shape="smooth"></v-line>
      <v-area position="year*change" color="white" shape="smooth"></v-area>
      <v-guide
        *ngFor="let row of guides"
        [type]="row.type"
        [top]="row.top"
        [start]="row.start"
        [end]="row.end"
        [color]="row.color"
        [position]="row.position"
        [content]="row.content"
        [lineLength]="row.lineLength"
        [style]="row.style"
      ></v-guide>
    </v-chart>
  </div>
  `,
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 440;
  data = [];
  guides = guides;

  constructor() {
    $.getJSON('/assets/data/tempChange.json', sourceData => {
      this.data = sourceData;
    });
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ViserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
