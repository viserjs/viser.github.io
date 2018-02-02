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
    labelEmit: true,
    textStyle: (text, item) => {
      let textAlign = item.textAlign;
      if (item.point.hasChildren) {
        textAlign = textAlign === 'left' ? 'right' : 'left';
      }
      return {
        fill: 'grey',
        fontSize: 9,
        textAlign,
      };
    },
  },
];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [padding]="padding">
      <v-coord type="polar"></v-coord>
      <v-view [data]="edgeSource">
        <v-edge position="x*y" shape="smooth" color="grey" [opacity]="0.5" tooltip="source*target"></v-edge>
      </v-view>
      <v-view [data]="nodeSource">
        <v-point position="x*y" color="hasChildren" [label]="label"></v-point>
      </v-view>
    </v-chart>
  </div>
  `
})
export class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  padding = [ 60, 0, 40, 0 ];
  edgeSource = {};
  nodeSource = {};
  label = nodesLabel;

  constructor() {
    $.getJSON('/assets/data/flare.json', (sourceData) => {
      const dv = new DataSet.View().source(sourceData, {
        type: 'hierarchy',
      });
      dv.transform({
        type: 'hierarchy.tree',
      });

      this.edgeSource = dv.getAllLinks().map(link => ({
          x: [ link.source.x, link.target.x ],
          y: [ link.source.y, link.target.y ],
          source: link.source.id,
          target: link.target.id
      }));

      this.nodeSource = dv.getAllNodes().map(node => ({
        hasChildren: !!(node.data.children && node.data.children.length),
        name: node.data.name,
        value: node.value,
        depth: node.depth,
        x: node.x,
        y: node.y
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
