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
  constructor() {
    $.getJSON('/assets/data/energy.json', (data) => {
      const edges = data.links;
      const graph = {
        nodes: [],
        edges: edges
      };
      const nodeById = {};

      function addNode(id) {
        if (!nodeById[id]) {
          const node = {
            id: id,
            name: id
          };
          nodeById[id] = node;
          graph.nodes.push(node);
        }
      }

      edges.forEach(function(edge) {
        addNode(edge.source);
        addNode(edge.target);
      });
      this.graph = graph;
      this.dv=this.getData();
    });
  }
  getData: any = (): any => {
    const { graph } = this;
    const dv: any = new DataSet.View().source(graph, {
      type: 'graph',
    });
    dv.transform({
      type: 'diagram.sankey',
      nodeId: function nodeId(node) {
        return node.id;
      },
      nodeAlign: 'sankeyLeft',  // change nodeAlign  , available option sankeyLeft / sankeyRight / sankeyCenter / sankeyJustify
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
