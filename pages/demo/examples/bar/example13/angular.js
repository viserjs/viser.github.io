export const template =
`import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data = [
  { profession: '两年制副学士学位', highest: 110000, minimum: 23000, mean: 56636 },
  { profession: '执法与救火', highest: 120000, minimum: 18000, mean: 66625 },
  { profession: '教育学', highest: 125000, minimum: 24000, mean: 72536 },
  { profession: '心理学', highest: 130000, minimum: 22500, mean: 75256 },
  { profession: '计算机科学', highest: 131000, minimum: 23000, mean: 77031 }
];

const dataPre = {
  transform: {
    type: 'merge',
    fields: ['minimum', 'highest'],
    as: 'range',
  },
};

const label = { offset: 12 };

@Component({
  selector: '#mount',
  template: \`
  <div>
    <Chart [forceFit]="forceFit" [padding]="padding" [height]="height" [data]="data" [dataPre]="dataPre">
      <Coord type="rect" direction="LB"></Coord>
      <Tooltip></Tooltip>
      <Legend></Legend>
      <Axis dataKey="profession" [label]="label"></Axis>
      <Bar position="profession*range"></Bar>
    </Chart>
  </div>
  \`
})

class AppComponent {
  forceFit: boolean= true;
  height: number = 400;
  data = data;
  dataPre = dataPre;
  label = label;
  padding = [20, 80, 50, 110];
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
