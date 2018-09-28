import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';

const scale = [
  {
    dataKey: 'time',
    range: [0, 1],
  },
];

const guides = [
  {
    type: 'dataMarker',
    position: ['2014-01-03', 6.763],
    content: '受稳健货币政策影响，协定存款利\n率居高不下,收益率达6.763%',
    style: {
      text: {
        textAlign: 'left',
      },
    },
  },
  {
    type: 'dataMarker',
    position: ['2013-05-31', 2.093],
    content: '余额宝刚成立时，并未达到目标资产\n配置，故收益率较低',
    style: {
      text: {
        textAlign: 'left',
      },
    },
  },
  {
    type: 'dataMarker',
    position: ['2016-09-04', 2.321],
    content: '受积极货币政策的影响，收益率降\n到历史最低2.321%',
    style: {
      text: {
        textAlign: 'left',
      },
    },
  },
  {
    type: 'dataRegion',
    start: ['2016-12-02', 2.517],
    end: ['2017-03-24', 3.83],
    content: '宏观经济过热，受稳健货币政策影\n响，余额宝收益率随之上升',
    lineLength: 50,
  },
];
@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [scale]="scale" [padding]="padding">
      <v-tooltip></v-tooltip>
      <v-axis ></v-axis>
      <v-line position="time*rate" ></v-line>
      <v-guide
        *ngFor="let row of guides"
        [type]="row.type"
        [start]="row.start"
        [end]="row.end"
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
  scale = scale;
  padding = [50];
  guides = guides;
  constructor() {
    $.getJSON('/assets/data/income.json', sourceData => {
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
