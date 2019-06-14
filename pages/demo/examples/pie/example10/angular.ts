import 'zone.js';
import 'reflect-metadata';
import * as $ from 'jquery';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data = [{
  location: '三亚',
  value: 44.9
}, {
  location: '千岛湖',
  value: 19.7
}, {
  location: '柬埔寨',
  value: 17.3
}, {
  location: '呼伦贝尔',
  value: 14.4
}, {
  location: '苏梅岛',
  value: 2.5
}, {
  location: '塞班岛',
  value: 2.5
}];

const color = ['location', ['#1890ff', '#37c661', '#fbce1e', '#2b3b79', '#8a4be2', '#1dc5c5']];

const label = ['value', function(val) {
  if (val < 3) {
    return null;
  } else {
    return {
      offset: -30,
      textStyle: {
        fill: 'white',
        fontSize: 14,
        shadowBlur: 2,
        shadowColor: 'rgba(0, 0, 0, .45)'
      },
      formatter: function formatter(text) {
        return text + '%';
      }
    };
  }
}];

const style = {
  stroke: 'white',
  lineWidth: 1
}

@Component({
  selector: '#mount',
  template: `
    <div *ngIf="data.length">
        <div id="canvas">
          <v-chart
            [forceFit]="true"
            height="400"
            [data]="data"
            padding="auto"
          >
            <v-tooltip></v-tooltip>
            <v-legend position='right-center' [offsetX]="-100"></v-legend>
            <v-coord type='theta' [radius]="0.75"></v-coord>
            <v-stack-bar position='value' [color]="color" [style]="style" [label]="label"></v-stack-bar>
          </v-chart>
        </div>
    </div>
  `,
})
class AppComponent {
  data=data;
  color=color;
  label=label;
  style=style;
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ViserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
