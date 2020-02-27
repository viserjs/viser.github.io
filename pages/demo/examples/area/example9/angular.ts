import 'zone.js';
import 'reflect-metadata';
import * as $ from 'jquery';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const DataSet = require('@antv/data-set');

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const scale = [{
  dataKey: 'percent',
  max: 1.0,
  min: 0.0,
  nice: false,
  formatter: function formatter(value) {
    value = value || 0;
    value = value * 100;
    return parseInt(value) + '%';
  }
},{
  dataKey: 'Year',
  tickCount: 10,
  nice: false
}];

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
            [scale]="scale"
          >
            <v-tooltip></v-tooltip>
            <v-stack-area position="Year*percent" color="type" [opacity]="0.8"></v-stack-area>
            <v-axis
              dataKey="Year"
              [label]="label"
            >
            </v-axis>
            <v-axis
              dataKey="percent"
              [label]="label"
            >
            </v-axis>
          </v-chart>
        </div>
    </div>
  `,
})
class AppComponent {
  data:any=[];
  label=label;
  scale=scale;
  constructor(){
    $.getJSON('/assets/data/area.json',data=>{
      const ds = new DataSet();
      const dv = ds.createView().source(data).transform({
        type: 'fold',
        fields: ['Democracy', 'Colony', 'No Data', 'Open Anocracy', 'Closed Anocracy', 'Monarchy'],
        key: 'type',
        value: 'value',
        retains: ['Year']
      }).transform({
        type: 'percent',
        field: 'value',
        dimension: 'type',
        groupBy: ['Year'],
        as: 'percent'
      });
      this.data=dv.rows;
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
