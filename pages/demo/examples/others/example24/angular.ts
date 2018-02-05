import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const data = [
  {"title":"Revenue","subtitle":"US$, in thousands","ranges":[150,225,300],"actual":270,"target":250},
  {"title":"Profit","subtitle":"%","ranges":[20,25,30],"actual":23,"target":26},
  {"title":"Order Size","subtitle":"US$, average","ranges":[350,500,600],"actual":100,"target":550},
  {"title":"New Customers","subtitle":"count","ranges":[1400,2000,2500],"actual":1650,"target":2100},
  {"title":"Satisfaction","subtitle":"out of 5","ranges":[3.5,4.25,5],"actual":3.2,"target":4.4}
];

const scale = [{
  dataKey: 'population',
  tickInterval: 1000000,
}];

const colorMap = {
  'Under 5 Years': '#E3F4BF',
  '5 to 13 Years': '#BEF7C8',
  '14 to 17 Years': '#86E6C8',
  '18 to 24 Years': '#36CFC9',
  '25 to 44 Years': '#209BDD',
  '45 to 64 Years': '#1581E6',
  '65 Years and Over': '#0860BF'
};

const legendItems = [
  {
    value: '差',
    marker: {symbol: 'square', fill: '#FFA39E', radius: 5}
  },
  {
    value: '良',
    marker: {symbol: 'square', fill: '#FFD591', radius: 5}
  },
  {
    value: '优',
    marker: {symbol: 'square', fill: '#A7E8B4', radius: 5}
  },
  {
    value: '实际值',
    marker: {symbol: 'square', fill: '#223273', radius: 5}
  },
  {
    value: '目标值',
    marker: {
      symbol: 'line',
      stroke: '#262626',
      radius: 5
    }
  },
];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [padding]="[100, 150]" [data]="data" [scale]="scale">
      <v-tooltip></v-tooltip>
      <v-legend [custom]="true" [clickable]="false" [items]="legendItems" ></v-legend>
      <v-view *ngFor="let item of data; let i = index;" [start]="getStart(i)" [end]="getEnd(i)"
        [data]="[item]" [scale]="this.getScale(item, i)">
        <v-coord type="rect" direction='LB'></v-coord>
        <v-axis dataKey="target" [show]="false"></v-axis>
        <v-axis dataKey="actual" position="right"></v-axis>
        <v-point position="title*target" color="#square" shape="line" [size]="12" [style]="{lineWidth: 2}"></v-point>
        <v-interval position="title*actual" color="#223273" [size]="15"></v-interval>
        <v-guide type="region" [start]="this.getGuide(item, 0, 'start')" [end]="this.getGuide(item, 0, 'end')"
          [style]="{
            fill: '#FFA39E',
            fillOpacity: 0.85
          }"></v-guide>
        <v-guide type="region" [start]="this.getGuide(item, 1, 'start')" [end]="this.getGuide(item, 1, 'end')"
          [style]="{
            fill: '#FFD591',
            fillOpacity: 0.85
          }"></v-guide>
        <v-guide type="region" [start]="this.getGuide(item, 2, 'start')" [end]="this.getGuide(item, 2, 'end')"
          [style]="{
            fill: '#A7E8B4',
            fillOpacity: 0.85
          }"></v-guide>
      </v-view>

    </v-chart>
  </div>
  `
})

class AppComponent {
  forceFit: boolean= true;
  height: number = 400;
  data = data;
  scale = scale;
  colorMap = colorMap;
  legendItems = legendItems;
  y = 0;
  yGap = 0.1;
  getStart(i) {
    const { y, yGap } = this;
    return {x:0, y: y + i * yGap + i * 0.125};
  }
  getEnd(i) {
    const { y, yGap } = this;
    return {x: 1, y: y + (i+1) * yGap + i * 0.125};
  }
  getScale (item, i) {
    const ranges = item.ranges;
    return [{
      dataKey: 'actual',
      min: 0,
      max: ranges[2],
      nice: false
    }, {
      dataKey: 'target',
      min: 0,
      max: ranges[2],
      nice: false
    }];
  }
  getGuide(viewData, guideIndex, position) {
    const ranges = viewData.ranges;
    const guide = [
      {start: [-1, 0], end:[1, ranges[0]]},
      {start: [-1, ranges[0]], end: [1, ranges[1]]},
      {start: [-1, ranges[1]], end: [1, ranges[2]]}
    ];
    return guide[guideIndex][position];
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

