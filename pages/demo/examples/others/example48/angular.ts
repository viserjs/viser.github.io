import 'zone.js';
import 'reflect-metadata';
import * as $ from 'jquery';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const DataSet = require('@antv/data-set');

const data = [
  {
    sex: '男',
    sold: 0.45,
  },
  {
    sex: '女',
    sold: 0.55,
  },
];

@Component({
  selector: '#mount',
  template: `
    <div>
      <v-chart [forceFit]="true" height="500" [data]="dv" >
          <v-axis></v-axis>
          <v-legend></v-legend>
          <v-polygon
            position="x*y"
            [color]="['count', '#BAE7FF-#1890FF-#0050B3']">
          </v-polygon>
      </v-chart>
    </div>
  `,
})
class AppComponent {
  dv:any={};
  constructor(){
    $.getJSON('/assets/data/gaussion-distribution.json', (data) => {
      const dv = new DataSet.View().source(data);
      dv.transform({
        sizeByCount: true, // calculate bin size by binning count
        type: 'bin.rectangle',
        fields: ['x', 'y'], // 对应坐标轴上的一个点
        bins: [20, 10],
      });
      this.dv=dv;
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
