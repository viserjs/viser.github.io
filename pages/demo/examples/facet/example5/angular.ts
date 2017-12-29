import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import { data } from './data'

const scale = [{
  dataKey: 'carat',
  sync: true,
}, {
  dataKey: 'price',
  sync: true,
}, {
  dataKey: 'cut',
  sync: true,
}];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="600" [data]="data" [scale]="scale">
      <v-tooltip></v-tooltip>
      <v-legend></v-legend>
      <v-axis></v-axis>
      <v-facet type="list" [fields]="fields" cols="3" padding="30">
        <v-facet-view>
          <v-point position="carat*price" color="cut" opacity="0.3" size="3"></v-point>
        </v-facet-view>
      </v-facet>
    </v-chart>
  </div>
  `
})
export class AppComponent {
  forceFit: boolean = true;
  height: number = 600;
  data = data;
  scale = scale;
  fields = ['cut'];
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
