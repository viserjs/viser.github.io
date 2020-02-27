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
            <v-tooltip [crosshairs]="false"></v-tooltip>
            <v-line 
              position="time*UV"
            >
            </v-line>
            <v-axis
              dataKey="time"
              [label]="label"
            >
            </v-axis>
            <v-axis
              dataKey="UV"
              [label]="label"
            >
            </v-axis>
            <v-guide
              type="dataMarker"  
              [top]="true"
              [position]="position1"
              [content]="content1"
              [style]="style"
              [lineLength]="30"
            >
            </v-guide>
            <v-guide
              type="dataMarker"  
              [top]="true"
              [position]="position2"
              [content]="content2"
              [style]="style"
              [lineLength]="50"
            >
            </v-guide>
            <v-guide
              type="region"  
              [start]="start1"
              [end]="end1"
            >
            </v-guide>
            <v-guide
              type="region"  
              [start]="start2"
              [end]="end2"
            >
            </v-guide>
            <v-guide
              type="region"  
              [start]="start3"
              [end]="end3"
            >
            </v-guide>
            <v-guide
              type="region"  
              [start]="start4"
              [end]="end4"
            >
            </v-guide>
          </v-chart>
        </div>
    </div>
  `,
})
class AppComponent {
  data:any=[];
  position1:any=[];
  position2:any=[];
  content1:any='';
  content2:any='';
  label={
    textStyle: {
      fill: '#aaaaaa'
    }
  };
  style={
    text: {
      fontSize: 13,
      stroke: 'white',
      lineWidth: 2
    }
  };
  scale=[{
    dataKey:'time',
    tickCount: 5
  },{
    dataKey:'UV',
    tickCount: 5
  }];
  padding=[20, 50, 50, 50];
  start1=['2018-09-01', 'min'];
  end1=['2018-09-02', 'max'];
  start2=['2018-09-08', 'min'];
  end2=['2018-09-09', 'max'];
  start3=['2018-09-15', 'min'];
  end3=['2018-09-16', 'max'];
  start4=['2018-09-22', 'min'];
  end4=['2018-09-24', 'max'];
  constructor(){
    $.getJSON('/assets/data/basement.json',data=>{
      this.findMaxMin(data).then(max_min => {
        const max = max_min.max;
        const min = max_min.min;
        this.data=data;
        this.position1=[max.time, max.UV];
        this.position2=[min.time, min.UV];
        this.content1='峰值：' + max.UV;
        this.content2='谷值：' + min.UV;
      }); 
    });
  }
  findMaxMin=(data)=>{
    let maxValue = 0;
    let minValue = 50000;
    let maxObj = null;
    let minObj = null;
    for (var i = 0; i < data.length; i++) {
      var d = data[i];
      if (d.UV > maxValue) {
        maxValue = d.UV;
        maxObj = d;
      }
      if (d.UV < minValue) {
        minValue = d.UV;
        minObj = d;
      }
    }
    return Promise.resolve ({
      max: maxObj,
      min: minObj
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
