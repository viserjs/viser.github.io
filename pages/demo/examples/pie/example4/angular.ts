import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const DataSet = require('@antv/data-set');

const sourceData = [
  { value: 251, type: '大事例一', name: '子事例一' },
  { value: 1048, type: '大事例一', name: '子事例二' },
  { value: 610, type: '大事例二', name: '子事例三' },
  { value: 434, type: '大事例二', name: '子事例四' },
  { value: 335, type: '大事例三', name: '子事例五' },
  { value: 250, type: '大事例三', name: '子事例六' },
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'percent',
  field: 'value',
  dimension: 'type',
  as: 'percent',
});
const data = dv.rows;

const viewDv = new DataSet.View().source(sourceData);
viewDv.transform({
  type: 'percent',
  field: 'value',
  dimension: 'name',
  as: 'percent'
});
const viewData = viewDv.rows;

const scale = {
  dataType: 'percent',
  formatter: '.2%',
};

const itemTpl = '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>';

const style = {
  lineWidth: 1,
  stroke: '#fff',
};

const label = ['type', { offset: -10 }];

const tooltip = [
  'name*percent', (item, percent) => {
    percent = (percent * 100).toFixed(2) + '%';
    return {
      name: item,
      value: percent,
    };
  },
];

const color = ['name', ['#BAE7FF', '#7FC9FE', '#71E3E3', '#ABF5F5', '#8EE0A1', '#BAF5C4']];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="true" [height]="height" [data]="data" [scale]="scale">
      <v-tooltip [showTitle]="false" [itemTpl]="itemTpl"></v-tooltip>
      <v-coord type="theta" [radius]="0.5"></v-coord>
      <v-pie position="percent" color="type" [label]="label" [select]="false" [style]="style" [tooltip]="tooltip"></v-pie>
      <v-view [data]="viewData" [scale]="scale">
        <v-coord type="theta" [radius]="0.75" innerRadius="{{0.5 / 0.75}}"></v-coord>
        <v-pie position="percent" [color]="color" label="name" [select]="false" [style]="style" [tooltip]="tooltip"></v-pie>
      </v-view>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = data;
  scale = scale;
  viewData = viewData;
  itemTpl = itemTpl;
  tooltip = tooltip;
  color = color;
  label = label;
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
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
