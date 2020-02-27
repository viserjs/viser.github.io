import 'zone.js';
import 'reflect-metadata';
import * as $ from 'jquery';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

@Component({
  selector: '#mount',
  template: `
    <div *ngIf="data.length">
        <div id="canvas">
          <v-chart
            [forceFit]="true"
            height="400"
            [data]="data"
            [scale]="scale"
            [padding]="padding"
          >
          <v-tooltip crosshairs="y" [shared]="true"></v-tooltip>
          <v-line 
            position="date*price"
            color="country"
            shape='hv'
          >
          </v-line>
          <v-axis
            dataKey="date"
            [label]="label"
          >
          </v-axis>
          <v-axis
            dataKey="price"
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
  label={
    textStyle: {
      fill: '#aaaaaa'
    }
  };
  scale=[{
    dataKey: 'date',
    range: [0, 1],
    tickCount: 10,
    type: 'timeCat'
  }];
  padding=[20, 110, 70, 35];
  
  constructor(){
    $.getJSON('/assets/data/oil-price.json',data=>{
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
export default class AppModule {}
