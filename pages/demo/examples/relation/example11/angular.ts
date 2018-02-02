import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const nodesLabel = [
  'name', {
    offset: 0,
    textStyle: (text, item) => {
      if (item.point.hasChildren) {
        return {
          opacity: 0
        };
      }
      return {
        textBaseline: 'middle',
        fill: 'grey',
        fontSize: 9,
        textAlign: 'center'
      };
    }
  },
];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [height]="height" [width]="height" [data]="data" [padding]="0">
      <v-tooltip [showTitle]="false"></v-tooltip>
      <v-point position="x*y" shape="circle" tooltip="name" [size]="size" [color]="color" [style]="style" [label]="label"></v-point>
    </v-chart>
  </div>
  `
})
export class AppComponent {
  height: number = 400;
  width: number = 400;
  padding = [ 60, 0, 40, 0 ];
  data = {};
  size = ['r', r => r * 400];
  style = { stroke: 'rgb(183, 55, 121)' };
  color = ['r', 'rgb(252, 253, 191)-rgb(231, 82, 99)-rgb(183, 55, 121)'];
  label = nodesLabel;

  constructor() {
    $.getJSON('/assets/data/flare.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData, {
        type: 'hierarchy',
      });
      dv.transform({
        type: 'hierarchy.circle-packing',
      });

      this.data = dv.getAllNodes().map(node => ({
        hasChildren: !!(node.data.children && node.data.children.length),
        name: node.data.name.split(/(?=[A-Z][^A-Z])/g).join('\n'),
        value: node.value,
        depth: node.depth,
        x: node.x,
        y: node.y,
        r: node.r
      }));
    });
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
  bootstrap: [AppComponent]
})

export default class AppModule { }
