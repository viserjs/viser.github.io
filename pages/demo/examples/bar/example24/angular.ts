import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data = [{
  city: '石家庄',
  type: '水果',
  value: 14500
}, {
  city: '石家庄',
  type: '米面',
  value: 8500
}, {
  city: '石家庄',
  type: '特产零食',
  value: 10000
}, {
  city: '石家庄',
  type: '茶叶',
  value: 7000
}, {
  city: '深圳',
  type: '水果',
  value: 9000
}, {
  city: '深圳',
  type: '米面',
  value: 8500
}, {
  city: '深圳',
  type: '特产零食',
  value: 11000
}, {
  city: '深圳',
  type: '茶叶',
  value: 6000
}, {
  city: '温州',
  type: '水果',
  value: 16000
}, {
  city: '温州',
  type: '米面',
  value: 5000
}, {
  city: '温州',
  type: '特产零食',
  value: 6000
}, {
  city: '温州',
  type: '茶叶',
  value: 10000
}, {
  city: '宁波',
  type: '水果',
  value: 14000
}, {
  city: '宁波',
  type: '米面',
  value: 9000
}, {
  city: '宁波',
  type: '特产零食',
  value: 10000
}, {
  city: '宁波',
  type: '茶叶',
  value: 9000
}, {
  city: '无锡',
  type: '水果',
  value: 14000
}, {
  city: '无锡',
  type: '米面',
  value: 9000
}, {
  city: '无锡',
  type: '特产零食',
  value: 10000
}, {
  city: '无锡',
  type: '茶叶',
  value: 6000
}, {
  city: '杭州',
  type: '水果',
  value: 9000
}, {
  city: '杭州',
  type: '米面',
  value: 8500
}, {
  city: '杭州',
  type: '特产零食',
  value: 10000
}, {
  city: '杭州',
  type: '茶叶',
  value: 6000
}, {
  city: '北京',
  type: '水果',
  value: 17000
}, {
  city: '北京',
  type: '米面',
  value: 6000
}, {
  city: '北京',
  type: '特产零食',
  value: 7000
}, {
  city: '北京',
  type: '茶叶',
  value: 10000
}, {
  city: '上海',
  type: '水果',
  value: 18000
}, {
  city: '上海',
  type: '米面',
  value: 11000
}, {
  city: '上海',
  type: '特产零食',
  value: 15000
}, {
  city: '上海',
  type: '茶叶',
  value: 14000
}];

const scale = [{
  dataKey: 'value',
  max: 20000,
  min: 0.0,
  nice: false,
  alias: '销售额（万）'
}];

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const tickLine = {
  alignWithLabel: false,
  length: 0
}

const title = {
  offset: 30,
  textStyle: {
    fontSize: 14,
    fontWeight: 300
  }
}

const adjust = [{
  type: 'dodge',
  marginRatio: 0.3
}]

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="true" [height]="400" [data]="data" [padding]="[0, 90, 20, 52]" [scale]="scale">
      <v-tooltip></v-tooltip>
      <v-axis dataKey="city" [label]="label" [tickLine]="tickLine"></v-axis>
      <v-axis dataKey="value" [label]="label" [title]="title"></v-axis>
      <v-coord direction='LB' type='rect'></v-coord>
      <v-legend position='right-bottom'></v-legend>
      <v-interval position="city*value" [opacity]="1" [adjust]="adjust" color="type"></v-interval>
    </v-chart>
  </div>
  `
})
class AppComponent {
  data = data;
  scale = scale;
  label = label;
  tickLine = tickLine;
  title = title;
  adjust = adjust;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ViserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export default class AppModule { }

