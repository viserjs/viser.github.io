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
    <v-chart [forceFit]="forceFit" [height]="height" [data]="worldMap" [padding]="padding">
      <v-legend dataKey="trend" position="left" ></v-legend>
      <v-polygon 
        position="longitude*latitude"
        [label]="label"
        [style]="style"
      >
      </v-polygon>
    </v-chart>
  </div>
  `,
})
class AppComponent {
    public forceFit: boolean = true;
    public height: number = window.innerHeight;
    public worldMap: any = [];
    public padding: any[] = [50, 20];
    public label: any[] = [
        'name',
        {
            type: 'map',
            offset: 0,
            textStyle: {
                fill: 'black',
                stroke: '#fff',
                lineWidth: 2
            }
        }
    ];
    public style: any = {
        fill: '#ced4d9',
        stroke: '#f2f4f5',
        lineWidth: 0.5
    };
    constructor() {
        $.getJSON('/assets/data/world.geo.json', mapData => {
            const worldMap = new DataSet.View().source(mapData, {
                type: 'GeoJSON'
            });
            this.worldMap = worldMap;
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
