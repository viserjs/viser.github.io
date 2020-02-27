import 'zone.js';
import 'reflect-metadata';
import { Component, NgModule,NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const scale = [
  {
      dataKey: 'time',
      alias: '时间',
      type: 'time',
      mask: 'MM:ss',
      tickCount: 20,
      nice: false 
  },
  {
      dataKey: 'temperature',
      alias: '平均温度(°C)',
      min: 10,
      max: 35 
  },{
      dataKey: 'type',
      type: 'cat',
  }
];

@Component({
  selector: '#mount',
  template: `
    <div *ngIf="data.length">
      <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [scale]="scale">
        <v-tooltip></v-tooltip>
        <v-axis></v-axis>
        <v-line position="time*temperature" [color]="['type',['#ff7f0e', '#2ca02c']]" shape="smooth" ></v-line>
      </v-chart>
    </div>
  `,
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data: any = [];
  scale:any=scale;
  constructor(){
    setInterval(()=>{
      this.updateData();
    },1000);
  }
  updateData=()=>{
    const me = this;
    const now = new Date();
    const time = now.getTime();
    const temperature1 = ~~(Math.random() * 5) + 22;
    const temperature2 = ~~(Math.random() * 7) + 17;
    let newData = me.data.slice();
    if (newData.length >= 200) {
      newData.shift();
      newData.shift();
    }
    newData.push({
      time: time,
      temperature: temperature1,
      type: '记录1'
    });
    newData.push({
      time: time,
      temperature: temperature2,
      type: '记录2'
    });
    this.data=newData;
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ViserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
