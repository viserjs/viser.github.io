import 'zone.js';
import 'reflect-metadata';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const DataSet = require('@antv/data-set');

const setStyle = () => {
    const id = 'legend-html';
    if (document.getElementById(id)) {
        return;
    }
    const styleTxt = `
        #canvas .g2-tooltip {
        position:absolute;
        visibility:hidden;
        border-style:solid;
        white-space:nowrap;
        z-index:9;
        transition:left 0.4s cubic-bezier(0.23, 1, 0.32, 1), top 0.4s cubic-bezier(0.23, 1, 0.32, 1);
        background-color:rgb(255, 255, 255);
        border-width:1px;
        border-color: #999;
        border-radius:4px;
        color: #444;
        font-style:normal;
        font-variant:normal;
        font-weight:normal;
        font-stretch:normal;
        font-size:14px;
        font-family:sans-serif;
        line-height:21px;
        padding:5px;
        }

        #canvas .g2-tooltip-list {
        margin: 5px ;
        list-style-type:none;
        padding:0;
        }
        #canvas .g2-legend {
        top: 45%!important;
        }
        .g2-legend{
            position:absolute;
        }
        .g2-legend-list{
            list-style:none;
            margin:0;
            padding:0;
        }
        .g2-legend-list-item{
            cursor:pointer;
            font-size:14px;
        }
    `;
    const style = document.createElement('style');
    style.setAttribute('id', id);
    style.innerHTML = styleTxt;
    document.getElementsByTagName('head')[0].appendChild(style);
};
setStyle();

const data = [{
    country: 'Lithuania',
    litres: 501.9
}, {
    country: 'Czech',
    litres: 301.9
}, {
    country: 'Ireland',
    litres: 201.1
}, {
    country: 'Germany',
    litres: 165.8
}, {
    country: 'Australia',
    litres: 139.9
}, {
    country: 'Austria',
    litres: 128.3
}, {
    country: 'UK',
    litres: 99
}, {
    country: 'Belgium',
    litres: 60
}, {
    country: 'Netherlands',
    litres: 50
}];

const ds = new DataSet();
const dv = ds.createView().source(data).transform({
    type: 'percent',
    field: 'litres',
    dimension: 'country',
    as: 'percent'
});



@Component({
    selector: '#mount',
    template: `
  <div>
    <v-chart 
        [forceFit]="true" 
        [height]="500" 
        [padding]="[80,300,80,80]" 
        [data]="data" 
        [scale]="scale" 
        [filter]="filter"
    >
        <v-coord 
            type="theta" 
            [innerRadius]=".3" 
            [radius]=".95"
        ></v-coord>
        <v-tooltip 
            [showTitle]="false" 
            [containerTpl]="containerTplTooltip" 
            [itemTpl]="itemTplTooltip"
        ></v-tooltip>
        <v-legend 
            [useHtml]="true" 
            position="right" 
            [reactive]="true" 
            [containerTpl]="containerTplLegend" 
            [itemTpl]="itemTplLegend" 
            [offset]="[15,0]" 
        ></v-legend>
        <v-stack-interval
            position="percent"
            [color]="color"
            [label]="label"
            [style]="style"
        ></v-stack-interval>
    </v-chart>
  </div>
  `,
})
class AppComponent {
    public data: any = dv;
    public scale: any[] = [
        {
            dataKey: 'percent',
            formatter: function formatter(val) {
                val = (val * 100).toFixed(2) + '%';
                return val;
            },
            nice: false
        }
    ];
    public filter: any = {
        dataKey: 'country',
        callback: function(val) {
            return val !== 'UK';
        }
    };
    public containerTplTooltip: string = `<div class="g2-tooltip"><ul class="g2-tooltip-list"></ul></div>`;
    public itemTplTooltip: string = '<li data-index={index}><span style="color:{color}">{name}:</span>{value}</li>';
    public containerTplLegend: string = `<div class="g2-legend"> <table class="g2-legend-list"></table> </div>`;
    public itemTplLegend: any = function itemTpl(value, color, checked, index) {
        const obj = dv.rows[index];
        const percent = (obj.percent * 100).toFixed(2) + '%';
        checked = checked ? 'checked' : 'unChecked';
        return '<tr class="g2-legend-list-item item-' + index + ' ' + checked + '" data-value="' + value + '" data-color=' + color + ' >' + '<td style="width:120px;"><i class="g2-legend-marker" style="width:10px;height:10px;display:inline-block;margin-right:10px;background-color:' + color + ';"></i>' + '<span class="g2-legend-text" style="color: #666">' + value + '</span></td>' + '<td style="text-align: right">' + percent + '</td>' + '<td style="text-align: right;color: #666;width:80px">' + obj.litres + '</td>' + '</tr>';
    };
    public color: any[] = [
        'country',
        ['#67b7dc', '#84b761', '#fdd400', '#cc4748', '#cd82ad', '#2f4074', '#448e4d', '#b7b83f', '#b9783f']
    ];
    public label: any[] = [
        'percent',
        {
            formatter: function formatter(val, item) {
                return item.country + ': ' + val;
            }
        }
    ];
    public style: any = {
        lineWidth: 2,
        stroke: '#fff'
    };
}

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ViserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export default class AppModule { }
