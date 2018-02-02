import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');
const { DataView } = DataSet;

function getMonthWeek(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const monthFirst = new Date(year, month, 0);
  const intervalDays = Math.round((date.getTime() - monthFirst.getTime()) / 86400000);
  const index = Math.floor((intervalDays + monthFirst.getDay()) / 7);
  return index;
}

const scale = [{
  dataKey: 'month',
  type: 'cat',
  values: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", 'December']
}, {
  dataKey: 'day',
  type: 'cat',
}, {
  dataKey: 'week',
  type: 'cat',
  values: ['5', '4', '3', '2', '1', '0'],
}, {
  dataKey: '涨跌幅',
  type: 'linear',
  min: -10,
  max: 10,
  sync: true,
}, {
  dataKey: 'time',
  type: 'time',
}, {
  dataKey: '日期',
  type: 'time',
}];

@Component({
  selector: '#mount',
  template: `
  <div *ngIf="data; else loading">
    <v-chart [forceFit]="forceFit" [height]="height" [padding]="padding" [data]="data" [scale]="scale">
      <v-legend dataKey="涨跌幅" [offset]="0"></v-legend>
      <v-tooltip title="日期"></v-tooltip>
      <v-facet type="list" [fields]="fields" [cols]="3" [padding]="facetPadding" [colTitle]="colTitle">
        <v-facet-view>
          <v-polygon position="day*week*日期" [color]="color" [style]="style"></v-polygon>
        </v-facet-view>
      </v-facet>
    </v-chart>
  </div>
  <ng-template #loading>Loading ...</ng-template>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = [];
  scale = scale;
  padding = [20, 120, 50, 120];
  facetPadding = [0, 15, 30, 15];
  fields = ['month'];
  colTitle = {
    offsetY: -10,
    style: {
      fontSize: 12,
      textAlign: 'center',
      fill: '#666',
    },
  };
  color = ['涨跌幅', '#F51D27-#FA541C-#FFBE15-#FFF2D1-#E3F6FF-#85C6FF-#0086FA-#0A61D7'];
  style = {
    lineWidth: 1,
    stroke: '#fff',
  };

  constructor() {
    $.getJSON('/assets/data/stock-calendar.json', (sourceData) => {
      sourceData.forEach(function(obj) {
        const date = new Date(obj['日期']);
        const month = date.getMonth();
        obj.month = month;
        obj.day = date.getDay();
        obj.week = getMonthWeek(date).toString();
      });

      const dv = new DataView();
      dv.source(sourceData)
        .transform({
          type: 'sort-by',
          fields: ['day'],
          order: 'DESC',
        });

      this.data = dv;
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

