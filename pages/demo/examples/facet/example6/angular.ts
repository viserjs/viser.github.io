import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import { data } from './data'

const scale = [{
  dataKey: 'mean',
  tickCount: 5,
  sync: true,
}, {
  dataKey: 'cut',
  sync: true,
}];

const facetDataPre = {
  transform: {
    type: 'aggregate',
    fields: ['price'],
    operations: ['mean'],
    as: ['mean'],
    groupBy: ['cut'],
  },
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="600" [data]="data" [scale]="scale">
      <v-tooltip crosshairs="false"></v-tooltip>
      <v-legend dataKey="cut" position="top"></v-legend>
      <v-axis dataKey="cut" [label]="axisNull" [tickLine]="axisNull"></v-axis>
      <v-facet type="tree" [fields]="fields" [line]="line" [lineSmooth]="lineSmooth">
        <v-facet-view [dataPre]="facetDataPre">
          <v-bar position="cut*mean" color="cut"></v-bar>
        </v-facet-view>
      </v-facet>
    </v-chart>
  </div>
  `
})
export class AppComponent {
  forceFit: boolean = true;
  lineSmooth: boolean = true;
  axisNull: null;
  height: number = 600;
  data = data;
  scale = scale;
  fields = ['clarity'];
  line = { stroke: '#c0d0e0' };
  facetDataPre = facetDataPre;
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
