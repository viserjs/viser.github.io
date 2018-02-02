import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const DataSet = require('@antv/data-set');

const sourceData = [
  { action: '浏览网站', pv: 50000 },
  { action: '放入购物车', pv: 35000 },
  { action: '生成订单', pv: 25000 },
  { action: '支付订单', pv: 15000 },
  { action: '完成交易', pv: 8000 },
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'percent',
  field: 'pv',
  dimension: 'action',
  as: 'percent'
});
const data = dv.rows;

const scale = {
  dataKey: 'percent',
  nice: false,
};

const tooltipOpts = {
  showTitle: false,
  itemTpl: '<li data-index={index} style="margin-bottom:4px;">'
      + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
      + '{name}<br/>'
      + '<span style="padding-left: 16px">浏览人数：{pv}</span><br/>'
      + '<span style="padding-left: 16px">占比：{percent}</span><br/>'
      + '</li>'
};

const funnelOpts = {
  position: 'action*percent',
  color: ['action', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF']],
  label: ['action*pv', (action: any, pv: any) => {
    return action + ' ' + pv;
  }, {
    offset: 35,
    labelLine: {
      lineWidth: 1,
      stroke: 'rgba(0, 0, 0, 0.15)',
    }
  }],
  tooltip: ['action*pv*percent', (action: any, pv: any, percent: any) => ({
    name: action,
    percent: Math.floor(percent * 100) + '%',
    pv: pv,
  })]
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [padding]="[20, 120, 95]" [data]="data" [scale]="scale">
      <v-tooltip [showTitle]="showTitle" [itemTpl]="tooltipOpts.itemTpl"></v-tooltip>
      <v-legend></v-legend>
      <v-coord type="rect" direction="LT"></v-coord>
      <v-pyramid [position]="funnelOpts.position" [color]="funnelOpts.color" [label]="funnelOpts.label" [tooltip]="funnelOpts.tooltip"></v-pyramid>
      <v-guide *ngFor="let obj of data"
        type="text"
        [top]="true"
        [position]="this.getPosition(obj)" [content]="this.getContent(obj)"
        [style]="{
          fill: '#fff',
          fontSize: '12',
          textAlign: 'center',
          shadowBlur: 2,
          shadowColor: 'rgba(0, 0, 0, .45)'
        }">
      </v-guide>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = data;
  scale = scale;
  tooltipOpts = tooltipOpts;
  funnelOpts = funnelOpts;
  showTitle = false;

  getPosition = (obj) => {
    return {
      action: obj.action,
      percent: 'median'
    };
  }
  getContent = (obj) => {
    return parseInt(String(obj.percent * 100)) + '%';
  }
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

