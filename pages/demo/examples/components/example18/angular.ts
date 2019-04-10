import 'zone.js';
import 'reflect-metadata';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

var valueMap = {};
@Component({
    selector: '#mount',
    template: `
  <div>
    <div ng-if="dv.length||data.length">
        <v-chart
            [forceFit]="true"
            [height]="600"
            [padding]="[10,200,50,50]"
            [data]="data"
        >
            <v-tooltip></v-tooltip>
            <v-legend
                [attachLast]="true"
            ></v-legend>
            <v-line
               position="year*value"
                color="country" 
                [size]="sizeLine"
                [label]="labelLine"
                [style]="styleLine"
            ></v-line>
            <v-point
                position="year*value"
                color="country"
                [style]="stylePoint"
                [size]="sizePoint"
            ></v-point>
        </v-chart>
    </div>
  </div>
  `,
})
class AppComponent {
    public data: any = [];
    public dv: any = [];
    public sizeLine: any[] = [
        'country',
        function(country) {
            if (country === 'China') return 5;
            return 2;
        }
    ];
    public labelLine: any[] = [
        'country*value*year',
        (country, value, year) => {
            var result = null;
            for (var i = 0; i < this.dv.length; i++) {
                if (this.dv[i].country === country) {
                    if (this.dv[i].min === value && !valueMap[country + 'min']) {
                        valueMap[country + 'min'] = year;
                        result = value;
                        break;
                    }

                    if (this.dv[i].max === value && !valueMap[country + 'max']) {
                        valueMap[country + 'max'] = year;
                        result = value;
                        break;
                    }
                }
            }
            return result;
        },
        {
            labelLine: false,
            offset: 10,
            textStyle: {
                stroke: '#fff',
                lineWidth: 2
            }
        }
    ];
    public styleLine: any = {
        lineCap: 'round'
    };
    public stylePoint: any = {
        lineWidth: 2
    };
    public sizePoint: any[] = [
        'country*value*year',
        (country, value, year) => {
            if (valueMap[country + 'min'] === year || valueMap[country + 'max'] === year) {
                return 3;
            }
            return 0;
        }
    ];
    public constructor() {
        $.getJSON('/assets/data/fertility2.json', data => {
            var dv = new DataSet.View().source(data).transform({
                type: 'aggregate',
                fields: ['value', 'value'],
                operations: ['min', 'max'],
                as: ['min', 'max'],
                groupBy: ['country'],
                orderBy: ['year']
            }).rows;

            data = new DataSet.View().source(data).transform({
                type: 'sort-by',
                field: 'year',
                orderBy: 'ASC'
            });
            this.data = data;
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
export default class AppModule { }
