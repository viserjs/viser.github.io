import 'zone.js';
import 'reflect-metadata';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data = [
  {
    type: '分类一',
    value: 27,
  },
  {
    type: '分类二',
    value: 25,
  },
  {
    type: '分类三',
    value: 18,
  },
  {
    type: '分类四',
    value: 15,
  },
  {
    type: '分类五',
    value: 10,
  },
  {
    type: 'Other',
    value: 5,
  },
];

@Component({
  selector: '#mount',
  template: `
    <div>
      <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [padding]="padding">
        <v-tooltip></v-tooltip>
        <v-axis></v-axis>
        <v-legend dataKey="type"></v-legend>
        <v-coord type="polar" startAngle="180" endAngle="270"></v-coord>
        <v-stack-interval position="type*value" [color]="color" [label]="label" [style]="style"></v-stack-interval>
      </v-chart>
    </div>
  `,
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data: any = data;
  padding: any = [50, 40];
  color: any = ['type', 'rgb(252,143,72)-rgb(255,215,135)'];
  label: any = [
    'value',
    { offset: -15, label: { textAlign: 'center', fill: '#000' } },
  ];
  style: any = { lineWidth: 1, stroke: '#fff' };
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ViserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
