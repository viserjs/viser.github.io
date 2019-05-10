import 'zone.js';
import 'reflect-metadata';
import * as $ from 'jquery';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data = [{
  type: '男性',
  value: 56.4
}, {
  type: '女性',
  value: 43.6
}];

const eachView = function (view, facet) {
  var data = facet.data;
  var color = void 0;
  if (data[0].type === '男性') {
    color = '#0a9afe';
  } else {
    color = '#f0657d';
  }
  data.push({
    type: '其他',
    value: 100 - data[0].value
  });
  view.source(data);
  view.coord('theta', {
    radius: 0.8,
    innerRadius: 0.5
  });
  view.intervalStack().position('value').color('type', [color, '#eceef1']).opacity(1);
  view.guide().html({
    position: ['50%', '50%'],
    html: '<div class="g2-guide-html"><p class="title">' + data[0].type + '</p><p class="value">' + (data[0].value + '%') + '</p></div>'
  });
}
@Component({
  selector: '#mount',
  template: `
    <div *ngIf="data.length">
        <div id="canvas">
          <v-chart
            [forceFit]="true"
            height="400"
            [data]="data"
            [padding]="padding"
          >
            <v-tooltip></v-tooltip>
            <v-facet 
              type="rect"
              [fields]="['type']"
              [padding]="20"
              [showTitle]="false"
              [eachView]="eachView"
            >
            </v-facet>
          </v-chart>
        </div>
    </div>
  `,
})
class AppComponent {
  data=data;
  eachView=eachView;
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
        width: 50px;
        height: 50px;
        vertical-align: middle;
        text-align: center;
        line-height: 1.5
    }

    .g2-guide-html .title {
        font-size: 12px;
        color: #8c8c8c;
        font-weight: 300;
    }

    .g2-guide-html .value {
        font-size: 18px;
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
