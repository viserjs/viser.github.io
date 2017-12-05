export const template =
`import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data = [
  { item: 'Design', a: 70, b: 30 },
  { item: 'Development', a: 60, b: 70 },
  { item: 'Marketing', a: 50, b: 60 },
  { item: 'Users', a: 40, b: 50 },
  { item: 'Test', a: 60, b: 70 },
  { item: 'Language', a: 70, b: 50 },
  { item: 'Technology', a: 50, b: 40 },
  { item: 'Support', a: 30, b: 40 },
  { item: 'Sales', a: 60, b: 40 },
  { item: 'UX', a: 50, b: 60 }
];

const dataPre = {
  transform: {
    type: 'fold',
    fields: [ 'a', 'b' ], // 展开字段集
    key: 'user', // key字段
    value: 'score', // value字段
  }
};

const scale = [{
  dataKey: 'score',
  min: 0,
  max: 80,
}];

const axis1GridOpts = {
  lineStyle: {
    lineDash: null
  },
  hideFirstLine: false
};
const axis2GridOpts =  {
  type: 'polygon',
  lineStyle: {
    lineDash: null
  }
};

@Component({
  selector: '#mount',
  template: \`
  <div>
    <Chart [forceFit]="forceFit" [height]="height" [data]="data" [dataPre]="dataPre" [scale]="scale">
      <Tooltip></Tooltip>
      <Axis dataKey="item" line="null" tickLine="null" [grid]="axis1GridOpts"></Axis>
      <Axis dataKey="score" line="null" tickLine="null" [grid]="axis2GridOpts"></Axis>
      <Legend></Legend>
      <Coord type="polar" radius="0.8" ></Coord>
      <Line position="item*score" color="user" size="2"></Line>
      <Point position="item*score" color="user" size="4"></Point>
    </Chart>
  </div>
  \`
})

class AppComponent {
  forceFit: boolean= true;
  height: number = 400;
  data = data;
  dataPre = dataPre;
  scale = scale;
  axis1GridOpts = axis1GridOpts;
  axis2GridOpts = axis2GridOpts;
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
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
`;
