import 'zone.js';
import 'reflect-metadata';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';



@Component({
    selector: '#mount',
    template: `
  <div>
    <v-chart [data]="data" [forceFit]="true" [height]="500" padding="auto">
        <v-tooltip type="mini" ></v-tooltip>
        <v-axis></v-axis>
        <v-point
            position="height*weight"
            [size]="4"
            shape="circle"
            [opacity]="0.65"
            [label]="label"
        ></v-point>
    </v-chart>
  </div>
  `,
})
class AppComponent {
    public data: any = [];
    public label: any[] = [
        'weight',
        {
            type: 'scatter',
            offset: 0,
            textStyle: {
                fill: 'rgba(0, 0, 0, 0.65)',
                stroke: '#fff',
                lineWidth: 2
            }
        }
    ];
    public constructor() {
        $.getJSON('/assets/data/scatter.json', data => {
            this.data = data;
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
