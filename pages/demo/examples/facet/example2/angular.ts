import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import { data } from './data'

const scale = [{
  dataKey: 'mean',
  sync: true
}, {
  dataKey: 'cut',
  sync: true,
}];

const viewDataPre = {
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
    <Chart [forceFit]="forceFit" [height]="600" [data]="data" [scale]="scale">
      <Tooltip></Tooltip>
      <Legend></Legend>
      <Facet type="circle" [fields]="fields">
        <FacetView [dataPre]="viewDataPre">
          <Tooltip></Tooltip>
          <Bar position="cut*mean" color="cut"></Bar>
        </FacetView>
      </Facet>
    </Chart>
  </div>
  `
})
export class AppComponent {
  forceFit: boolean= true;
  height: number = 600;
  data = data;
  scale = scale;
  fields = ['clarity'];
  viewDataPre = viewDataPre;
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
