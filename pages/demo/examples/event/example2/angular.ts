import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [
    {
        dataKey: 'year',
        type: 'linear',
        tickInterval: 10,
    },
    {
        dataKey: 'range',
        type: 'linear',
        min: 10,
        max: 45,
        tickInterval: 5,
    },
    {
        dataKey: 'value',
        type: 'linear',
        min: 10,
        max: 45,
        tickInterval: 5,
    },
];

@Component({
    selector: '#mount',
    template: `
  <div>
    <select id="position-selector" [value]="position" (change)="handleChange($event)">
        <option value="top-left">top-left</option><option value="top-center">top-center</option><option value="top-right">top-right</option><option value="bottom-left">bottom-left</option><option value="bottom-center">bottom-center</option><option value="bottom-right">bottom-right</option> <option value="left-top">left-top</option><option value="left-center">left-center</option><option value="left-bottom">left-bottom</option><option value="right-top">right-top</option><option value="right-center">right-center</option><option value="right-bottom">right-bottom</option>
    </select>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [scale]="scale" [padding]="padding">
      <v-tooltip></v-tooltip>
      <v-axis dataKey="value" [show]="false"></v-axis>
      <v-legend [position]="position" ></v-legend>
      <v-area position="year*range" color="#045493" [opacity]="0.05" [tooltip]="false"></v-area>
      <v-line position="year*range" [color]="['type', ['#d97841', '#4495c2']]"
        [size]="3" [style]="style"
      ></v-line>
    </v-chart>
  </div>
  `,
})
class AppComponent {
    forceFit: boolean = true;
    height: number = 440;
    data = [];
    scale = scale;
    padding = 'auto';
    style = {
        opacity: 0.7,
    };
    // 可手动变更legend position 位置， 可选值
    // left-top,left-center,left-bottom,right-top,right-top,right-bottom,top-left,
    // top-center,top-bottom,bottom-left,bottom-center,bottom-right
    position = 'top-left';
    handleChange = (e) => {
        this.position = e.target.value;
    }
    constructor() {
        $.getJSON('/assets/data/data-RgqdN.json', sourceData => {
            var ds = new DataSet();
            var dv = ds.createView().source(sourceData);
            dv.transform({
                type: 'map',
                callback: function callback(row) {
                    row.range = [row.younger, row.older];
                    return row;
                },
            });
            dv.transform({
                type: 'fold',
                fields: ['younger', 'older'], // 展开字段集
                key: 'type', // key字段
                value: 'value', // value字段
            });
            this.data = dv;
        });
    }
}

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ViserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export default class AppModule { }
