import 'zone.js';
import 'reflect-metadata';
import * as $ from 'jquery';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const DataSet = require('@antv/data-set');

const data = [{
  type: '评估中',
  percent: 0.23
}, {
  type: '设计中',
  percent: 0.28
}, {
  type: '正在开发',
  percent: 0.30
}, {
  type: '已上线',
  percent: 0.19
}];

const sum = 500;
const ds = new DataSet();
const dv = ds.createView().source(data);
dv.transform({
  type: 'map',
  callback: function callback(row) {
    row.value = parseInt((sum * row.percent).toString());
    return row;
  }
});

const color = ['type', ['#0a7aca', '#0a9afe', '#4cb9ff', '#8ed1ff']];

const label = ['percent', {
  offset: -18,
  textStyle: {
    fill: 'white',
    fontSize: 12,
    shadowBlur: 2,
    shadowColor: 'rgba(0, 0, 0, .45)'
  },
  rotate: 0,
  autoRotate: false,
  formatter: function formatter(text, item) {
    return String(parseInt((item.point.percent * 100).toString())) + '%';
  }
}];

const html = '<div class="g2-guide-html"><p class="title">项目总计</p><p class="value">500</p></div>';

@Component({
  selector: '#mount',
  template: `
    <div *ngIf="data.length">
        <div id="canvas">
          <v-chart
            [forceFit]="true"
            height="400"
            [data]="data"
            padding="auto"
          >
            <v-legend position='right-center' [offsetX]="-100"></v-legend>
            <v-coord type='theta' [radius]="0.75" [innerRadius]="0.6"></v-coord>
            <v-stack-bar position='percent' [color]="color" [opacity]="1" [label]="label"></v-stack-bar>
            <v-guide type='html' [position]="['50%', '50%']" [html]="html"></v-guide>
          </v-chart>
        </div>
    </div>
  `,
})
class AppComponent {
  data=dv.rows;
  color=color;
  label=label;
  html=html;
  constructor(){
    this.setStyle(); 
  }
  setStyle(){
    const id = 'legend-html';
    if (document.getElementById(id)) {
        return;
    }
    const styleTxt = `
      .g2-guide-html {
          width: 100px;
          height: 80px;
          vertical-align: middle;
          text-align: center;
          line-height: 1.5;
      }

      .g2-guide-html .title {
          font-size: 12px;
          color: #8c8c8c;
          font-weight: 300;
      }

      .g2-guide-html .value {
          font-size: 32px;
          color: #000;
          font-weight: bold;
      }
    `;
    const style = document.createElement('style');
    style.setAttribute('id', id);
    style.innerHTML = styleTxt;
    document.getElementsByTagName('head')[0].appendChild(style);
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ViserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
