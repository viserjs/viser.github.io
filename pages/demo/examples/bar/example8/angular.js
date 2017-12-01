export const template =
`import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

// https://antv.alipay.com/assets/data/diamond.json
const data = [];

const dataPre = {
  transform: {
    type: 'bin.histogram',
    field: 'depth',
    binWidth: 1,
    groupBy: [ 'cut' ],
    as: ['depth', 'count'],
  },
};

@Component({
  selector: '#mount',
  template: \`
  <div>
    <Chart [forceFit]="forceFit" [height]="height" [data]="data" [dataPre]="dataPre">
      <Tooltip crosshairs="false" inPlot="false" position="top"></Tooltip>
      <Axis></Axis>
      <StackBar position="depth*count" color="cut"></StackBar>
    </Chart>
  </div>
  \`
})

class AppComponent {
  forceFit: boolean= true;
  height: number = 400;
  data = data;
  dataPre = dataPre;
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
