export const template =
`import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data = [
  {gender:'男',count:40,'class': '一班',grade: '一年级'},
  {gender:'女',count:30,'class': '一班',grade: '一年级'},
  {gender:'男',count:35,'class': '二班',grade: '一年级'},
  {gender:'女',count:45,'class': '二班',grade: '一年级'},
  {gender:'男',count:20,'class': '三班',grade: '一年级'},
  {gender:'女',count:35,'class': '三班',grade: '一年级'},
  {gender:'男',count:30,'class': '一班',grade: '二年级'},
  {gender:'女',count:40,'class': '一班',grade: '二年级'},
  {gender:'男',count:25,'class': '二班',grade: '二年级'},
  {gender:'女',count:32,'class': '二班',grade: '二年级'},
  {gender:'男',count:28,'class': '三班',grade: '二年级'},
  {gender:'女',count:36,'class': '三班',grade: '二年级'}
];

const facetDataPre = {
  transform: {
    type: 'percent',
    field: 'count',
    dimension: 'gender',
    as: 'percent'
  },
};

@Component({
  selector: '#mount',
  template: \`
  <div>
    <Chart [forceFit]="forceFit" [height]="600" [data]="data" [scale]="scale">
      <Tooltip showTitle="false"></Tooltip>
      <Legend dataKey="cut" position="top"></Legend>
      <Coord type="theta"></Axis>
      <Facet type="tree" [fields]="fields" line="{ stroke: '#00a3d7' }" lineSmooth="true">
        <FacetView dataPre="facetDataPre">
          <StackBar position="percent" color="gender"></StackBar>
        </FacetView>
      </Facet>
    </Chart>
  </div>
  \`
})

export class AppComponent {
  forceFit: boolean= true;
  height: number = 600;
  data = data;
  fields = ['grade', 'class'];
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
`;
