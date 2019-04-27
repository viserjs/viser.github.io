import 'zone.js';
import 'reflect-metadata';
import * as $ from 'jquery';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const DataSet = require('@antv/data-set');

@Component({
  selector: '#mount',
  template: `
    <div *ngIf="data.length">
        <div id="canvas">
          <v-chart
            [forceFit]="true"
            height="400"
            [data]="data"
            [scale]="scale"
            [padding]="padding"
          >
            <v-tooltip 
              crosshairs='y'
              [shared]="shared"
              [htmlContent]="htmlContent"
            >
            </v-tooltip>
            <v-legend></v-legend>
            <v-line 
              position="year*value"
              color='country'
              [size]="size"
              [opacity]='opacity'
            >
            </v-line>
            <v-point 
              position="year*value"
              color='country'
              [size]='size2'
              [style]='style'
            >
            </v-point>
            <v-axis
              dataKey="year"
              [label]="label"
            >
            </v-axis>
            <v-axis
              dataKey="value"
              [label]="label"
            >
            </v-axis>
          </v-chart>
        </div>
    </div>
  `,
})
class AppComponent {
  data:any=[];
  KEY_DOWN=false;
  shared=true;
  label={
    textStyle: {
      fill: '#aaaaaa'
    }
  };
  size=['country', function(val) {
    if (val === 'China') {
      return 4;
    }
    return 2;
  }];
  size2=['country', function(val) {
    if (val === 'China') {
      return 4;
    }
    return 0;
  }];
  style={
    lineWidth: 2
  };
  opacity=['country', function(val) {
    if (val === 'China') {
      return 1;
    }
    return 0.7;
  }];
  scale=[{
    dataKey:'year',
    range: [0, 1]
  }];
  padding=[10, 30, 80, 30];
  htmlContent=(title, items) => {
    var html = '<div class="g2-tooltip">';
    var titleDom = '<div class="g2-tooltip-title" style="margin-bottom: 4px;">' + title + '</div>';
    var listDom = '<ul class="g2-tooltip-list">';
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var itemDom = '<li data-index={index}>' + '<span style="background-color:' + item.color + ';width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>' + item.name + '<span class="g2-tooltip-value">' + item.value + '</span>' + '</li>';
      listDom += itemDom;
    }
    listDom += '</ul>';

    if (this.KEY_DOWN) {
      if (title === '1955' && items[0].name === 'China') {
        var storyDom = '<li class="g2-tooltip-story">中国折线，受三年自然灾害影响，<br/>1959-1961年间出生率锐减。</li>';
        return html + titleDom + listDom + storyDom + '</div>';
      }
      return html + titleDom + listDom + '</div>';
    } else {
      var tailDom = '<li class="g2-tooltip-tail">按住ALT键查看单独数据点</li>';
      return html + titleDom + listDom + tailDom + '</div>';
    }
  };

  constructor(){
    $.getJSON('/assets/data/fertility.json',data=>{
      const ds = new DataSet();
      const dv = ds.createView().source(data);
      dv.transform({
        type: 'sort',
        callback: function callback(a, b) {
          return a.year - b.year;
        }
      });
      this.data = dv.rows;
      this.setStyle();
      const that = this;
      $(document).keydown(function() {
        that.KEY_DOWN = true;
        that.shared = false;
      });

      $(document).keyup(function() {
        that.KEY_DOWN = false;
        that.shared = true;
      });
    });
  }
  setStyle(){
    const id = 'legend-html';
    if (document.getElementById(id)) {
        return;
    }
    const styleTxt = `
        .g2-tooltip {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 3px;
          color: rgb(87, 87, 87);
          font-size: 12px;
          line-height: 20px;
          padding: 10px 10px 6px 10px;
          box-shadow: 0px 0px 10px #aeaeae;
          pointer-events: none;
        }

        .g2-tooltip-list {
          margin: 0;
          padding: 0;
          list-style-type: none;
        }
        .g2-tooltip-value {
          margin-left: 30px;
          display: inline;
          float: right;
        }
        .g2-tooltip-tail {
          background-color: #f9f9f9;
          color: #909090;
          font-size: 14px;
          padding-bottom: 10px;
          margin-top: 10px;
          list-style-type: none;
          text-align: center;
          padding-top: 10px;
        }
        .g2-tooltip-story {
          color: #9b9b9b;
          font-size: 12px;
          padding-bottom: 10px;
          margin-top: 10px;
          list-style-type: none;
          padding-top: 10px;
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
