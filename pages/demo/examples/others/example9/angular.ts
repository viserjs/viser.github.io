import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const DataSet = require('@antv/data-set');

const text = [ 'MIDNIGHT', '3 AM', '6 AM', '9 AM', 'NOON', '3 PM', '6 PM', '9 PM' ];

const data = [];
for (let i = 0; i < 24; i++) {
  const item = {} as any;
  item.type = i + '';
  item.value = 10;
  data.push(item);
}

const dv = new DataSet.View().source(data).transform({
  type: 'percent',
  field: 'value',
  dimension: 'type',
  as: 'percent'
});

const stackInterval1Opts = {
  position: 'percent',
  color: ['type', ['rgba(255, 255, 255, 0)']],
  style: {
    stroke: '#444',
    lineWidth: 1
  },
  tooltip: false,
  select: false,
};

const guideOpts = {
  type: 'text',
  position: [ '50%', '50%' ],
  content: '24 hours',
  style: {
    lineHeight: '240px',
    fontSize: '30',
    fill: '#262626',
    textAlign: 'center',
  },
};

const stackInterval2Opts = {
  position: 'type*value',
  size: ['type', function(val) {
    if (val % 3 === 0) {
      return 4;
    } else {
      return 0;
    }
  }],
  color: '#444',
  tooltip: false,
  label: ['type', function(val: any) {
    if (val % 3 === 0) {
      return text[val / 3];
    }
    return '';
  }, {
    offset: 15,
    textStyle: {
      fontSize: 12,
      fontWeight: 'bold',
      fill: '#bfbfbf'
    }
  }]
};

const userData = [
  { type: '睡眠', value: 70 },
  { type: '淡茶 & 烟斗 & 冥想', value: 10 },
  { type: '写作', value: 10 },
  { type: '教课', value: 40 },
  { type: '酒吧吃肉配白酒', value: 40 },
  { type: '散步', value: 10 },
  { type: '拜访马大大', value: 30 },
  { type: '阅读', value: 30 },
];

const userDv = new DataSet.View().source(userData).transform({
  type: 'percent',
  field: 'value',
  dimension: 'type',
  as: 'percent'
});

const userScale = [{
  dataKey: 'percent',
  formatter: (val: any) => {
    return (val * 100).toFixed(2) + '%';
  }
}];

const stackInterval3Opts = {
  position: 'percent',
  color: 'type',
  label: ['type', {
    offset: 40,
  }],
  select: false,
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [padding]="80">
      <v-tooltip [showTitle]="false"></v-tooltip>
      <v-view [data]="dv">
        <v-coord type="theta" [innerRadius]="0.9"></v-coord>
        <v-stack-interval [position]="stackInterval1Opts.position" [color]="stackInterval1Opts.color"
          [style]="stackInterval1Opts.style" [tooltip]="stackInterval1Opts.tooltip"
          [select]="stackInterval1Opts.select"></v-stack-interval>
        <v-guide [type]="guideOpts.type" [position]="guideOpts.position"
          [content]="guideOpts.content" [style]="guideOpts.style"></v-guide>
      </v-view>
      <v-view [data]="dv">
        <v-coord type="polar" [innerRadius]="0.9"></v-coord>
        <v-stack-interval [position]="stackInterval2Opts.position" [size]="stackInterval2Opts.size"
          [color]="stackInterval2Opts.color" [tooltip]="stackInterval2Opts.tooltip"
          [label]="stackInterval2Opts.label"></v-stack-interval>
      </v-view>
      <v-view [data]="userDv" [scale]="userScale">
        <v-coord type="theta" [innerRadius]="0.75"></v-coord>
        <v-stack-interval [position]="stackInterval3Opts.position" [color]="stackInterval3Opts.color"
          [label]="stackInterval3Opts.label"
          [select]="stackInterval3Opts.select"></v-stack-interval>
      </v-view>
    </v-chart>
  </div>
  `
})

class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  dv = dv;
  stackInterval1Opts = stackInterval1Opts;
  guideOpts = guideOpts;
  stackInterval2Opts = stackInterval2Opts;
  userDv = userDv;
  userScale = userScale;
  stackInterval3Opts = stackInterval3Opts;
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

