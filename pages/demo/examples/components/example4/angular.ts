import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const DataSet = require('@antv/data-set');

const data = [
  {
    year: 1700,
    exports: 35,
    imports: 70,
  },
  {
    year: 1710,
    exports: 59,
    imports: 81,
  },
  {
    year: 1720,
    exports: 76,
    imports: 96,
  },
  {
    year: 1730,
    exports: 65,
    imports: 97,
  },
  {
    year: 1740,
    exports: 67,
    imports: 93,
  },
  {
    year: 1750,
    exports: 79,
    imports: 90,
  },
  {
    year: 1760,
    exports: 115,
    imports: 79,
  },
  {
    year: 1770,
    exports: 163,
    imports: 85,
  },
  {
    year: 1780,
    exports: 185,
    imports: 93,
  },
];

const scale = [
  {
    dataKey: 'value',
    min: 0,
    max: 200,
  },
  {
    dataKey: 'range',
    min: 0,
    max: 200,
  },
];

var ds = new DataSet();
var dv = ds.createView().source(data);
dv.transform({
  type: 'map',
  callback: function callback(row) {
    row.range = [row.exports, row.imports];
    return row;
  }
});
dv.transform({
  type: 'fold',
  fields: ['exports', 'imports'], // 展开字段集
  key: 'type', // key字段
  value: 'value' // value字段
});

const guides = [{
  type: 'regionFilter',
  top: true,
  start: [1700, 'min'],
  end: [1753, 'max'],
  color: '#F5222D',
  apply: ['area']
}, {
  type: 'regionFilter',
  top: true,
  start: [1753, 'min'],
  end: [1780, 'max'],
  color: '#FAAD14',
  apply: ['area']
}, {
  type: 'dataMarker',
  position: [1753, 87],
  content: '1755 年在印度周边建立诸多殖民\n地与附属国，垄断出口贸易，导致\n出品总额激增。',
  lineLength: 50,
  style: {
    text: {
      textAlign: 'left',
      fontSize: 13
    },
    point: {
      stroke: '#FF4D4F'
    }
  },
  direction: 'downward'
}, {
  type: 'text',
  top: false,
  position: [1730, 80],
  content: '贸易赤字',
  style: {
    fontSize: 14,
    fill: '#666666',
    opacity: 0.8
  }
}, {
  type: 'text',
  top: false,
  position: [1765, 110],
  content: '贸易盈余',
  style: {
    fontSize: 14,
    fill: '#666666',
    opacity: 0.8
  }
}];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [scale]="scale" [padding]="padding">
      <v-tooltip></v-tooltip>
      <v-axis dataKey="value" ></v-axis>
      <v-axis dataKey="range" [show]="false"></v-axis>
      <v-line
        shape="smooth"
        position="year*value"
        [color]="['type', ['#F5222D', '#FAAD14']]"
        [size]="2.5"
      ></v-line>
      <v-area
        shape="smooth"
        position="year*range"
        color="#ffffff"
        [tooltip]="false"
      ></v-area>
      <v-guide
        *ngFor="let row of guides"
        [type]="row.type"
        [top]="row.top"
        [start]="row.start"
        [end]="row.end"
        [color]="row.color"
        [apply]="row.apply"
        [position]="row.position"
        [content]="row.content"
        [lineLength]="row.lineLength"
        [style]="row.style"
        [direction]="row.direction"
      ></v-guide>
    </v-chart>
  </div>
  `
})

class AppComponent {
  forceFit: boolean = true;
  height: number = 440;
  data = dv;
  scale = scale;
  padding = [20, 20, 120, 50];
  guides = guides;
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

