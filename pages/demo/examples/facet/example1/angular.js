export const template =
`import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import { chartData } from './data'

const scale = [{
  dataKey: 'carat',
  sync: true
}, {
  dataKey: 'price',
  sync: true,
  tickCount: 3
}, {
  dataKey: 'cut',
  sync: true,
}];

@Component({
  selector: '#mount',
  template: \`
  <div>
    <Chart [forceFit]="forceFit" [height]="600" [data]="chartData" [scale]="scale">
      <Tooltip></Tooltip>
      <Legend></Legend>
      <Facet type="rect" [fields]="fields">
        <FacetView>
          <Axis></Axis>
          <Tooltip></Tooltip>
          <Point position="carat*price" color="cut" opacity="0.3" size="3"></Point>
        </FacetView>
      </Facet>
    </Chart>
  </div>
  \`
})

export class AppComponent {
  forceFit: boolean= true;
  height: number = 600;
  chartData = chartData;
  scale = scale;
  fields = ['cut', 'clarity'];
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
  bootstrap: [AppComponent]
})

export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
`;
