import 'zone.js';
import 'reflect-metadata';
import * as $ from 'jquery';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const style1 = {
  fill: '#8c8c8c',
  fontSize: 12,
  fontWeight: 300
}

const style2 = {
  fill: 'white',
  fontSize: 12,
  fontWeight: 300,
  textAlign: 'end',
  textBaseline: 'center'
}

const style3 = {
  fill: 'white',
  fontSize: 12,
  fontWeight: 300,
  textAlign: 'start',
  textBaseline: 'center'
}

const style4 = {
  lineWidth: 0,
  fill: '#dcdcdc',
  fillOpacity: 0.3,
  stroke: '#ccc'
}

const colorline = ['type', ['white']];

const color = ['type', ['#1890ff', '#40a9ff', '#0050b3', '#003a8c', '#002766']];
@Component({
  selector: '#mount',
  template: `
    <div *ngIf="data.length">
        <div id="canvas">
          <v-chart
            [forceFit]="true"
            height="400"
            [data]="data"
            [padding]="[50, 20, 30, 30]"
          >
            <v-tooltip crosshairs="y" [shared]="true"></v-tooltip>
            <v-line position="year*value" [color]="colorline" [size]="1" [opacity]="0.2"></v-line>
            <v-stack-area position="year*value" [color]="color" [opacity]="1"></v-stack-area>
            <v-axis
              dataKey="year"
              [label]="label"
            >
            </v-axis>
            <v-axis
              dataKey="value"
              [label]="label"
            >
            </v-axis>
            <v-guide
              type="text"  
              [position]="[2015, 8]"
              content="万立方/英尺"
              [style]="style1"
              [offsetY]="-30"
              [offsetX]="-20"
            >
            </v-guide>
            <v-guide
              type="text"  
              [top]="true"
              [position]="[2040, 6.3]"
              content="出口至墨西哥"
              [style]="style2"
              [offsetX]="-10"
            >
            </v-guide>
            <v-guide
              type="text"  
              [top]="true"
              [position]="[2040, 5]"
              content="出口至加拿大"
              [style]="style2"
              [offsetX]="-10"
            >
            </v-guide>
            <v-guide
              type="text"  
              [top]="true"
              [position]="[2040, 2]"
              content="来自40个州的液化天然气出口"
              [style]="style2"
              [offsetX]="-10"
            >
            </v-guide>
            <v-guide
              type="text"  
              [top]="true"
              [position]="[2015, -1.5]"
              content="从加拿大进口"
              [style]="style3"
              [offsetX]="10"
            >
            </v-guide>
            <v-guide
              type="region"  
              [start]="[2019, 8]"
              [end]="[2040, -4]"
              [style]="style4"
            >
            </v-guide>
          </v-chart>
        </div>
    </div>
  `,
})
class AppComponent {
  data:any=[];
  label=label;
  color=color;
  style1=style1;
  style2=style2;
  style3=style3;
  style4=style4;
  colorline=colorline;
  constructor(){
    $.getJSON('/assets/data/gas-import-export.json',data=>{
      this.data=data;
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
