import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule, ViewEncapsulation } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data = [
  { "month": '一月', "tem": 7, "city": "tokyo" },
  { "month": '二月', "tem": 6.9, "city": "tokyo" },
  { "month": '三月', "tem": 9.5, "city": "tokyo" },
  { "month": '四月', "tem": 14.5, "city": "tokyo" },
  { "month": '五月', "tem": 18.2, "city": "tokyo" },
  { "month": '六月', "tem": 21.5, "city": "tokyo" },
  { "month": '七月', "tem": 25.2, "city": "tokyo" },
  { "month": '八月', "tem": 26.5, "city": "tokyo" },
  { "month": '九月', "tem": 23.3, "city": "tokyo" },
  { "month": '十月', "tem": 18.3, "city": "tokyo" },
  { "month": '十一月', "tem": 13.9, "city": "tokyo" }
];

@Component({
  selector: '#mount',
  styles: [`
    .g2-tooltip-title {
      margin-top: 12px;
    }
    .g2-tooltip-list td {
      border: 1px solid #cdcdcd;
      padding: 5px 8px;
      font-size: 12px;
    }
  `],
  encapsulation: ViewEncapsulation.None,
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data">
      <v-tooltip
        [defaultPoint]="defaultPoint"
        [g2Tooltip]="g2Tooltip"
        [g2TooltipList]="g2TooltipList"
        [containerTpl]="containerTpl"
        [itemTpl]="itemTpl"
        [offset]="offset"
      ></v-tooltip>
      <v-axis></v-axis>
      <v-line position="month*tem"></v-line>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean= true;
  height: number = 400;
  data = data;
  containerTpl = `
    <div class="g2-tooltip">
      <p class="g2-tooltip-title"></p>
      <table class="g2-tooltip-list"></table>
    </div>
  `;
  itemTpl = `
    <tr class="g2-tooltip-list-item">
      <td style="color:{color}">{name}</td>
      <td>{value}</td>
    </tr>
  `;
  offset = 50;
  g2TooltipList = {
    margin: '10px'
  };
  g2Tooltip = {
    position: 'absolute',
    visibility: 'hidden',
    border: '1px solid #efefef',
    backgroundColor: 'white',
    color: '#000',
    opacity: "0.8",
    padding: '5px 15px',
    transition: 'top 200ms,left 200ms'
  };
  defaultPoint = { month: '七月', tem: 25.2 };
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

