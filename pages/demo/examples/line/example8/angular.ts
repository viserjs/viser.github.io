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
            <v-tooltip></v-tooltip>
            <v-line 
              position="time*rate"
            >
            </v-line>
            <v-axis
              dataKey="time"
              [label]="label"
            >
            </v-axis>
            <v-axis
              dataKey="rate"
              [label]="label"
            >
            </v-axis>
            <v-guide
              type="dataMarker"  
              [position]="position1"
              [content]="content1"
              [style]="style"
            >
            </v-guide>
            <v-guide
              type="dataMarker"  
              [position]="position2"
              [content]="content2"
              [style]="style"
            >
            </v-guide>
            <v-guide
              type="dataMarker"  
              [position]="position3"
              [content]="content3"
              [style]="styleR"
              [lineLength]="30"
            >
            </v-guide>
            <v-guide
              type="dataRegion"  
              [start]="position4"
              [end]="position5"
              content=""
              [lineLength]="50"
            >
            </v-guide>
            <v-guide
              type="dataMarker"  
              [position]="position4"
              [content]="content4"
              [style]="style"
              [lineLength]="130"
            >
            </v-guide><v-guide
              type="dataMarker"  
              [position]="position5"
              content=""
              [lineLength]="50"
            >
            </v-guide>
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
  style={
    text: {
      textAlign: 'left',
      stroke: '#fff',
      lineWidth: 2
    }
  };
  styleR={
    text: {
      textAlign: 'right',
      stroke: '#fff',
      lineWidth: 2
    }
  };
  scale=[{
    dataKey:'time',
    range: [0, 1]
  }];
  padding=[20, 20, 70, 20];
  position1=['2014-01-03', 6.763];
  content1='受稳健货币政策影响，协定存款利\n率居高不下,收益率达6.763%';
  position2=['2013-05-31', 2.093];
  content2='余额宝刚成立时，并未达到目标资产\n配置，故收益率较低';
  position3=['2016-09-04', 2.321];
  content3='受积极货币政策的影响，收益率降\n到历史最低2.321%';
  position4=['2016-12-02', 2.517];
  content4='宏观经济过热，受稳健货币政策影\n响，余额宝收益率随之上升';
  position5=['2017-03-24', 3.83];
  constructor(){
    $.getJSON('/assets/data/income.json',data=>{
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
