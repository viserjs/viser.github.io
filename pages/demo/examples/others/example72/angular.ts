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
                [padding]="padding"
            >
                <v-legend position="top"></v-legend>
                <v-axis
                    dataKey="date"
                    [line]="axisxLine"
                    [label]="axisxLabel"
                >
                </v-axis>
                <v-axis
                    dataKey="value"
                    [line]="axisxLine"
                    [label]="axisyLabel"
                >
                </v-axis>
                <v-tooltip></v-tooltip>
                <v-line 
                    position="date*value"
                    color="city"
                    shape="spline"
                >
                </v-line>
                <v-brush [style]="brushStyle"></v-brush>
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
  padding=[60, 30, 30];
  axisxLine={
    stroke: '#000'
  };
  axisxLabel={
    textStyle: {
      textAlign: 'start'
    }
  };
  axisyLabel={
    textStyle: {
      fill: '#000'
    }
  };
  brushStyle={
    fill: '#ccc',
    fillOpacity: 0.4
  };
  constructor(){
    $.getJSON('/assets/data/avg-temp.json',data=>{
      const ds = new DataSet();
      const scale=[
        {
          dataKey: 'date',
          type: 'time'
        },
        {
          dataKey: 'value',
          alias: 'Temperature, ºF'
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
      type: 'fold',
      key: 'city',
      value: 'value',
      fields: ['New York', 'San Francisco', 'Austin']
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
