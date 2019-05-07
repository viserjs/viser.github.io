import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data = [{
  type: '未知',
  value: 654,
  percent: 0.02
}, {
  type: '17 岁以下',
  value: 654,
  percent: 0.02
}, {
  type: '18-24 岁',
  value: 4400,
  percent: 0.2
}, {
  type: '25-29 岁',
  value: 5300,
  percent: 0.24
}, {
  type: '30-39 岁',
  value: 6200,
  percent: 0.28
}, {
  type: '40-49 岁',
  value: 3300,
  percent: 0.14
}, {
  type: '50 岁以上',
  value: 1500,
  percent: 0.06
}];

const scale = [{
  dataKey: 'value',
  alias: '销售额(万)'
}];

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const tickLine = {
  alignWithLabel: false,
  length: 0
}

const style = {
  text: {
    fontSize: 13
  }
}

const labelInterval = ['value', {
  useHtml: true,
  htmlTemplate: function htmlTemplate(text, item) {
    var a = item.point;
    if(typeof(a.percent) === 'number') {
      a.percent = String(Math.round(a.percent * 100)) + "%" 
    }
    return '<span class="g2-label-item"><p class="g2-label-item-value">' + a.value + '</p><p class="g2-label-item-percent">' + a.percent + '</p></div>';
  }
}]

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [scale]="scale" [padding]="padding">
      <v-tooltip [shared]="true"></v-tooltip>
      <v-axis dataKey="type" [label]="label" [tickLine]="tickLine"></v-axis>
      <v-interval position="type*value" [label]="labelInterval"></v-interval> 
      <v-guide 
        type="dataMarker" 
        [top]="true"
        [position]="['2014-01', 1750]"
        content='因政策调整导致销量下滑'
        [style]="style"
        [lineLength]="30"
      ></v-guide>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  padding = [20, 20, 50, 50];
  data = data;
  scale = scale;
  style = style;
  label = label;
  tickLine = tickLine;
  labelInterval = labelInterval;
  constructor(){
    this.setStyle();     
  }
  setStyle(){
    const id = 'legend-html';
    if (document.getElementById(id)) {
        return;
    }
    const styleTxt = `
      .g2-label-item {
          font-size: 12px;
          text-align: center;
          line-height: 1.5;
      }

      .g2-label-item-value {
          color: #595959;
      }

      .g2-label-item-percent {
          color: #8c8c8c;
      }
    `;
    const style = document.createElement('style');
    style.setAttribute('id', id);
    style.innerHTML = styleTxt;
    document.getElementsByTagName('head')[0].appendChild(style);
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

