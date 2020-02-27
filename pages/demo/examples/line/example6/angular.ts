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
    <div>
        <div id="canvas">
            <v-chart
                [forceFit]="true"
                height="400"
                [padding]="padding"
            >
              <v-tooltip crosshairs="false" ></v-tooltip>
              <v-view [data]="dv1">
                <v-axis
                  dataKey="Year"
                  [subTickCount]="3"
                  [subTickLine]="subTickLine"
                  [tickLine]="tickLine" 
                  [label]="label"
                >
                </v-axis>
                <v-axis
                  dataKey="Deaths"
                  [label]="label2"
                >
                </v-axis>
                <v-line
                  position="Year*Deaths"
                >
                </v-line>
                <v-guide
                  type="text" 
                  content="趋势线" 
                  position="['1970', 12000]" 
                  [style]="style"
                >
                </v-guide>
              </v-view>
              <v-view [data]="dv2">
                <v-line position="year*death" tooltip="false" [style]="style2"></v-line>
              </v-view>  
            </v-chart>
        </div>
    </div>
  `,
})
class AppComponent {
  dv1:any=[];
  dv2:any=[];
  padding=[20, 20, 50, 50];
  subTickLine={
    length: 3,
    stroke: '#bfbfbf',
    lineWidth: 1
  };
  tickLine={
    length: 6,
    lineWidth: 1,
    stroke: '#bfbfbf'
  };
  label={
    textStyle: {
      fill: '#aaaaaa'
    }
  };
  label2={
    textStyle: {
      fill: '#aaaaaa'
    },
    formatter: function formatter(text) {
      return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
    }
  };
  style={
    fill: '#8c8c8c',
    fontSize: 14,
    fontWeight: 300
  };
  style2={
    stroke: '#969696',
    lineDash: [3, 3]
  };
  constructor(){
    $.getJSON('/assets/data/terrorism.json',data=>{
      const ds = new DataSet();
      const dv1 = ds.createView().source(data);
      dv1.transform({
        type: 'map',
        callback: function callback(row) {
          if (typeof row.Deaths === 'string') {
            row.Deaths = row.Deaths.replace(',', '');
          }
          row.Deaths = parseInt(row.Deaths);
          row.death = row.Deaths;
          row.year = row.Year;
          return row;
        }
      });
      const dv2 = ds.createView().source(dv1.rows);
      dv2.transform({
        type: 'regression',
        method: 'polynomial',
        fields: ['year', 'death'],
        bandwidth: .1,
        as: ['year', 'death']
      });
      this.dv1=dv1.rows;
      this.dv2=dv2.rows;
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
