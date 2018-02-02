import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule, registerShape } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

registerShape('point', 'cloud', {
  draw(cfg, container) {
    return container.addShape('text', {
      attrs: {
        fillOpacity: cfg.opacity,
        fontSize: cfg.origin._origin.size,
        rotate: cfg.origin._origin.rotate,
        text: cfg.origin._origin.text,
        textAlign: 'center',
        fontFamily: cfg.origin._origin.font,
        fill: cfg.color,
        textBaseline: 'Alphabetic',
        ...cfg.style,
        x: cfg.x,
        y: cfg.y,
      },
    });
  }
});

const scale = [
  { dataKey: 'x', nice: false },
  { dataKey: 'y', nice: false },
];

const padding = [0];

@Component({
  selector: '#mount',
  template: `
  <div >
    <v-chart [width]="640" [height]="400" [data]="data" [scale]="scale" [padding]="padding">
      <v-tooltip [showTitle]="false"></v-tooltip>
      <v-coord type="rect" direction="TL"></v-coord>
      <v-point position="x*y" [color]="'category'" shape="cloud" tooltip="value*category"></v-point>
    </v-chart>
  </div>
  `
})
class AppComponent {
  scale = scale;
  data = [];

  constructor() {
    $.getJSON('/assets/data/world-population.json', (data) => {
      const dv = new DataSet.View().source(data);
      const range = dv.range('value');
      const min = range[0];
      const max = range[1];
      dv.transform({
        type: 'tag-cloud',
        fields: ['x', 'value'],
        size: [640, 400],
        font: 'Verdana',
        padding: 0,
        timeInterval: 5000, // max execute time
        rotate() {
          let random = ~~(Math.random() * 4) % 4;
          if (random == 2) {
            random = 0;
          }
          return random * 90; // 0, 90, 270
        },
        fontSize(d) {
          if (d.value) {
            return ((d.value - min) / (max - min)) * (80 - 24) + 24;
          }
          return 0;
        }
      });

      this.data = dv.rows;
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
  bootstrap: [
    AppComponent
  ]
})
export default class AppModule { }

