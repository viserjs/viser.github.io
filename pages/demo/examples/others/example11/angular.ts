import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const DataSet = require('@antv/data-set');
const { DataView } = DataSet;

const data = [
  { year: 2007, area: '亚太地区', profit: 7860 * 0.189 },
  { year: 2007, area: '非洲及中东', profit: 7860 * 0.042 },
  { year: 2007, area: '拉丁美洲', profit: 7860 * 0.025 },
  { year: 2007, area: '中欧和东欧', profit: 7860 * 0.018 },
  { year: 2007, area: '西欧', profit: 7860 * 0.462 },
  { year: 2007, area: '北美', profit: 7860 * 0.265 },
  { year: 2011, area: '亚太地区', profit: 7620 * 0.539 },
  { year: 2011, area: '非洲及中东', profit: 7620 * 0.065 },
  { year: 2011, area: '拉丁美洲', profit: 7620 * 0.065 },
  { year: 2011, area: '中欧和东欧', profit: 7620 * 0.034 },
  { year: 2011, area: '西欧', profit: 7620 * 0.063 },
  { year: 2011, area: '北美', profit: 7620 * 0.234 }
];

const views = (view, facet) => {
  const data = facet.data;
  const dv = new DataView();
  dv.source(data)
    .transform({
      type: 'percent',
      field: 'profit',
      dimension: 'area',
      as: 'percent'
    });

  return {
    data: dv,
    scale: {
      dataKey: 'percent',
      formatter: '.2%',
    },
    coord: {
      type: 'theta',
      innerRadius: 0.35,
    },
    series: {
      quickType: 'stackBar',
      position: 'percent',
      color: 'area',
      label: ['percent', {
        offset: -8,
      }],
      style: {
        lineWidth: 1,
        stroke: '#fff',
      }
    }
  }
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [padding]="padding">
      <v-tooltip :[showTitle]="tooltipShowFalse"></v-tooltip>
      <v-legend dataKey="area" [offset]="legendOffset"></v-legend>
      <v-facet
        type="rect"
        [fields]="facetFields"
        [padding]="facetPadding"
        [rowTitle]="facetRowTitle"
        [colTitle]="facetColTitle"
        [views]="facetViews"
      ></v-facet>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit = true;
  data = data;
  height = 400;
  padding = 80;

  tooltipShowFalse = false;
  legendOffset = 20;

  facetViews = views;
  facetFields = ['year'];
  facetPadding = 20;
  facetRowTitle = null;
  facetColTitle = {
    offsetY: -30,
    style: {
      fontSize: 18,
      textAlign: 'center',
      fill: '#999'
    }
  };
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

