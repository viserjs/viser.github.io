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
  <div *ngIf="this.valid(graph)">
    <div class="toolbar" style="text-align:center;">
      <label>Select nodeAlign style: </label>
      <select name="node-align" [value]="select" (change)="handleChange">
          <option value="sankeyLeft">sankeyLeft</option>
          <option value="sankeyRight">sankeyRight</option>
          <option value="sankeyCenter">sankeyCenter</option>
          <option value="sankeyJustify">sankeyJustify</option>
      </select>
    </div>
    <v-chart
      [forceFit]="true"
      height="400"
      [scale]="scale"
    >
      <v-tooltip [showTitle]="false"></v-tooltip>
      <v-view [data]="dv.edges">
        <v-sankey position="x*y" shape="arc" color="#bbb" opacity="0.6" tooltip="value"></v-sankey>
      </v-view>
      <v-view [data]="dv.nodes">
        <v-polygon position="x*y" color="name" [style]="{stroke:'#ccc'}"></v-polygon>
      </v-view>
    </v-chart>
  </div>
  `,
})
class AppComponent {
  graph: any = {};
  select: string = 'sankeyLeft';
  scale: any = [
    {
      dataKey: 'x',
      sync: true,
    },
    {
      dataKey: 'y',
      sync: true,
    },
  ];
  dv: any = {};
  handleChange: any = (e: any) => {
    const value: string = e.target.value;
    this.select = value;
    this.dv = this.getData();
  };
  getData: any = (): any => {
    const { graph, select } = this;
    const dv: any = new DataSet.View().source(graph, {
      type: 'graph',
    });
    dv.transform({
      type: 'diagram.sankey',
      nodeId: function nodeId(node) {
        return node.id;
      },
      nodeAlign: select,
    });
    return dv;
  };
  valid: any = (data): boolean => {
    return !!Object.keys(data).length;
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ViserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
