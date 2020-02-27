import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data = [{
  "month": "Jan",
  "city": "Tokyo",
  "temperature": 7
}, {
  "month": "Jan",
  "city": "London",
  "temperature": 3.9
}, {
  "month": "Feb",
  "city": "Tokyo",
  "temperature": 6.9
}, {
  "month": "Feb",
  "city": "London",
  "temperature": 4.2
}, {
  "month": "Mar",
  "city": "Tokyo",
  "temperature": 9.5
}, {
  "month": "Mar",
  "city": "London",
  "temperature": 5.7
}, {
  "month": "Apr",
  "city": "Tokyo",
  "temperature": 14.5
}, {
  "month": "Apr",
  "city": "London",
  "temperature": 8.5
}, {
  "month": "May",
  "city": "Tokyo",
  "temperature": 18.4
}, {
  "month": "May",
  "city": "London",
  "temperature": 11.9
}, {
  "month": "Jun",
  "city": "Tokyo",
  "temperature": 21.5
}, {
  "month": "Jun",
  "city": "London",
  "temperature": 15.2
}, {
  "month": "Jul",
  "city": "Tokyo",
  "temperature": 25.2
}, {
  "month": "Jul",
  "city": "London",
  "temperature": 17
}, {
  "month": "Aug",
  "city": "Tokyo",
  "temperature": 26.5
}, {
  "month": "Aug",
  "city": "London",
  "temperature": 16.6
}, {
  "month": "Sep",
  "city": "Tokyo",
  "temperature": 23.3
}, {
  "month": "Sep",
  "city": "London",
  "temperature": 14.2
}, {
  "month": "Oct",
  "city": "Tokyo",
  "temperature": 18.3
}, {
  "month": "Oct",
  "city": "London",
  "temperature": 10.3
}, {
  "month": "Nov",
  "city": "Tokyo",
  "temperature": 13.9
}, {
  "month": "Nov",
  "city": "London",
  "temperature": 6.6
}, {
  "month": "Dec",
  "city": "Tokyo",
  "temperature": 9.6
}, {
  "month": "Dec",
  "city": "London",
  "temperature": 4.8
}];

const scale = [{
  dataKey: 'month',
  range: [0, 1]
}];

const crosshairs = {
  type: 'line'
}

const label = {
  formatter: function formatter(val) {
    return val + '°C';
  }
}

const style = {
  stroke: '#fff',
  lineWidth: 1
}


@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [scale]="scale">
      <v-tooltip [crosshairs]="crosshairs"></v-tooltip>
      <v-axis dataKey="temperature" [label]="label"></v-axis>
      <v-line position="month*temperature" color='city'></v-line>
      <v-point position="month*temperature" color='city' size='4' shape='circle' [style]="style"></v-point>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean= true;
  height: number = 400;
  data = data;
  scale = scale;
  crosshairs = crosshairs;
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
export default class AppModule { }

