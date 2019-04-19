import 'zone.js';
import 'reflect-metadata';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';


if (!$('#tooltip-custom-style').length) {
    $('head').append(`
<style id="tooltip-custom-style">
  #v-container {
    background-color: #ebf0f0
  }

  #v-container .g2-tooltip {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 3px;
    color: rgb(87, 87, 87);
    font-size: 12px;
    line-height: 20px;
    padding: 10px 10px 6px 10px;
  }

  #v-container .g2-tooltip-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  #v-container .g2-tooltip-value {
    margin-left: 30px;
    display: inline;
    float: right;
  }

  #v-container .g2-tooltip-statistic {
    font-size: 14px;
    padding-bottom: 10px;
    margin-top: 10px;
    list-style-type: none;
  }

  #v-container .g2-tooltip-statistic-value {
    font-weight: 'bold';
    display: 'inline-block';
    float: right;
    margin-left: 30px
  }
</style>
    `);
}
const colors = ['#1f9399', '#dcb17f', '#875630', '#fd9833', '#254297', '#d872be', '#185c75', '#52c09c', '#766d58', '#28b8bd', '#f5d08e', '#b68761', '#f69574'];

@Component({
    selector: '#mount',
    template: `
  <div id="v-container">
    <v-chart
        [forceFit]="true"
        [height]="500"
        [data]="data"
        padding="auto"
    >
        <v-tooltip
            crosshairs="y"
            [htmlContent]="htmlContent"
        ></v-tooltip>
        <v-axis></v-axis>
        <v-legend></v-legend>
        <v-stack-area
            position="year*value"
            [color]="color"
        ></v-stack-area>
        <v-line
            position="year*value"
            [color]="color"
            [opacity]="opacity"
            [style]="{lineCap:'round'}"
        ></v-line>
    </v-chart>
  </div>
  `,
})
class AppComponent {
    public data: any[] = [];
    public htmlContent: any = function htmlContent(title, items) {
        var html = '<div class="g2-tooltip">';
        var titleDom = '<div class="g2-tooltip-title" style="margin-bottom: 4px;">' + title + '</div>';
        var listDom = '<ul class="g2-tooltip-list">';
        var sum = 0;
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var itemDom = '<li data-index={index}>' + '<span style="background-color:' + item.color + ';width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>' + item.name + '<span class="g2-tooltip-value">' + item.value + '</span>' + '</li>';
            listDom += itemDom;
            sum += parseFloat(item.value);
        }
        listDom += '</ul>';
        var sumDom = '<li class="g2-tooltip-statistic">总计：<span class="g2-tooltip-statistic-value">' + sum.toFixed(2) + '</span></li>';
        return html + titleDom + sumDom + listDom + '</div>';
    };
    public color: any[] = ["country", colors];
    public opacity: any[] = [
        'country',
        function(country) {
            if (country === 'China') return 1;
            return 0.6;
        }
    ];
    public constructor() {
        $.getJSON('/assets/data/fertility.json', data => {
            this.data = data;
        });
    }
}

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ViserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export default class AppModule { }
