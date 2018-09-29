import 'zone.js';
import 'reflect-metadata';
import * as $ from 'jquery';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const DataSet = require('@antv/data-set');

@Component({
  selector: '#mount',
  template: `
    <div *ngIf="data.length">
      <v-chart [forceFit]="forceFit" [height]="height" [data]="dv" [padding]="0">
        <v-tooltip></v-tooltip>
        <v-facet
          type="list"
          [fields]="fields"
          [cols]="9"
          [showTitle]="showTitle"
          padding="0"
          [eachView]="eachView"
        ></v-facet>
      </v-chart>
    </div>
  `,
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data: any = [];
  dv: any = {};
  fields: any = ['state'];
  showTitle: boolean = false;
  eachView: any = (view, facet) => {
    view.coord('theta', {
      radius: 0.8,
      innerRadius: 0.6,
    });
    view
      .intervalStack()
      .position('percent')
      .color('age');
    view.guide().html({
      position: ['50%', '50%'],
      html:
        '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">' +
        facet.data[0].state +
        '</div>',
      alignX: 'middle',
      alignY: 'middle',
    });
  };
  constructor() {
    $.getJSON('/assets/data/population-by-age.json', sourceData => {
      const dv = new DataSet.View().source(sourceData);
      dv.transform({
        type: 'fold',
        fields: ['小于5岁', '5至13岁', '14至17岁'], // 展开字段集
        key: 'age',
        value: 'count',
      }).transform({
        type: 'percent',
        field: 'count',
        dimension: 'age',
        groupBy: ['state'],
        as: ['percent'],
      });
      this.data = sourceData;
      this.dv = dv;
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
