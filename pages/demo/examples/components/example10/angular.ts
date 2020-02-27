import 'zone.js';
import 'reflect-metadata';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');


@Component({
    selector: '#mount',
    template: `
  <div>
    <v-chart [data]="data" [forceFit]="true" [height]="500" [padding]="0" [animate]="false" [scale]="scale">
        <v-coord direction="lT" ></v-coord>
        <v-polygon
            position="x*y"
            color="brand"
            [style]="style"
            [label]="label"
        ></v-polygon>
    </v-chart>
  </div>
  `,
})
class AppComponent {
    public data: any = [];
    public label: any[] = [
        'brand*depth*name',
        function(brand, depth, name) {
            if (depth !== 1 || name === '其他') {
                // 只有第一级显示文本，数值太小时不显示文本
                return name;
            }
        },
        {
            type: 'treemap',
            textStyle: {
                shadowColor: 'rgba(0,0,0,0.5)',
                shadowBlur: 3,
                fill: 'white'
            },
            offset: 0
        }
    ];
    public scale: any[] = [
        {
            dataKey: 'x',
            nice: false
        },
        {
            dataKey: 'y',
            nice: false
        }
    ];
    public style: any = {
        lineWidth: 0.5,
        stroke: 'rgba(255,255,255,0.65)'
    };
    public constructor() {
        $.getJSON('/assets/data/mobile.json', mobiles => {
            const _DataSet = DataSet,
                DataView = _DataSet.DataView;
            // 会通过子节点累加 value 值，所以设置为 0

            mobiles.forEach(function(mobile) {
                mobile.value = null;
            });
            const data = {
                name: 'root',
                children: mobiles
            };
            const dv = new DataView();
            dv.source(data, {
                type: 'hierarchy'
            }).transform({
                field: 'value',
                type: 'hierarchy.treemap',
                tile: 'treemapResquarify',
                as: ['x', 'y']
            });
            const nodes = dv.getAllNodes();
            nodes.map(function(node) {
                node.name = node.data.name;
                if (!node.data.brand && node.parent) {
                    node.brand = node.parent.data.brand;
                } else {
                    node.brand = node.data.brand;
                }
                //node.value = node.data.value;
                return node;
            });
            this.data = nodes;
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
