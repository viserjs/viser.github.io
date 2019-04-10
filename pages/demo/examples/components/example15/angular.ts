import 'zone.js';
import 'reflect-metadata';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');


@Component({
    selector: '#mount',
    template: `
  <div>
    <v-chart
        [data]="data"
        [forceFit]="true"
        [height]="500"
        [padding]="[20,180,50,50]"
        [plotBackground]="{ stroke: '#ccc' }"
        [scale]="scale"
    >
        <v-tooltip
            [shared]="false"
            [crosshairs]="false"
        ></v-tooltip>
        <v-legend
            [useHtml]="true"
            [flipPage]="true"
            position="right"
            [title]="{text:'图例可滚动'}"
        ></v-legend>
        <v-axis
            dataKey="year"
            [title]="null"
            [line]="null"
            [tickLine]="null"
        ></v-axis>
        <v-axis
            dataKey="count"
            [title]="null"
            [line]="null"
            [tickLine]="{length:8}"
            [subTickCount]="10"
            [subTickLine]="{ lineWidth: 1, stroke: '#ddd', length: 5 }"
            [grid]="null"
        ></v-axis>
        <v-area
            position="year*count"
            [adjust]="['stack', 'symmetric']"
            color="name"
            shape="smooth"
            [opacity]="1"
        ></v-area>
    </v-chart>
  </div>
  `,
})
class AppComponent {
    public data: any = [];
    public scale: any[] = [
        {
            dataKey: 'year',
            tickInterval: 10,
            nice: false
        },
        {
            dataKey: 'count',
            nice: false
        }
    ];
    public constructor() {
        $.getJSON('/assets/data/baby-names.json', (data) => {
            var ds = new DataSet();
            var dv = ds.createView('demo').source(data).transform({
                type: 'fill-rows',
                groupBy: ['name'],
                orderBy: ['year']
            }).transform({
                type: 'impute',
                field: 'n',
                method: 'value',
                value: 0
            }).transform({
                type: 'aggregate',
                fields: ['n'],
                operations: ['sum'],
                groupBy: ['year', 'name'],
                orderBy: ['year'],
                as: ['count']
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
