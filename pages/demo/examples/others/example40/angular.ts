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
            <v-legend dataKey="type"></v-legend>
            <v-coord type="theta" startAngle="180" endAngle="270"></v-coord>
            <v-pie position="value" color="type" label="type"></v-pie>
        </v-chart>
    </div>
  `,
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = data;
  padding = [40, 0];
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ViserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
