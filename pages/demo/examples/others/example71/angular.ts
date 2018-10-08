import 'zone.js';
import 'reflect-metadata';
import * as $ from 'jquery';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const DataSet=require('@antv/data-set');
@Component({
  selector: '#mount',
  template: `
    <div *ngIf="data.length">
        <div id="canvas">
            <v-chart
                [forceFit]="true"
                height="400"
                [data]="dv"
                [scale]="scale"
            >
            <v-axis></v-axis>
            <v-tooltip></v-tooltip>
            <v-interval 
                position="release*count"
                color="#e50000"
            >
            </v-interval>
            <v-brush type="x"></v-brush>
            </v-chart>
        </div>
    </div>
  `,
})
class AppComponent {
  data:any=[];
  ds:any={};
  scale:any=[];
  dv:any={};
  constructor(){
    $.getJSON('/assets/data/top2000.json',data=>{
      const ds = new DataSet();
      const scale=[
        {
          dataKey: 'count',
          alias: 'top2000 唱片总量'
        },
        {
          dataKey: 'release',
          tickInterval: 5,
          alias: '唱片发行年份'
        }
      ];
      this.data=data;
      this.ds=ds;
      this.scale=scale;
      this.getDv();
    });
  }
  getDv=()=>{
    const {ds,data}=this;
    const dv = ds.createView();
    dv.source(data).transform({
        as: ['count'],
        groupBy: ['release'],
        operations: ['count'],
        type: 'aggregate'
    });
    this.dv=dv;
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ViserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
