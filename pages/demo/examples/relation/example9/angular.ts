import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data = {
  name: 'root',
  children: [
    { name: '分类 1', value: 560 },
    { name: '分类 2', value: 500 },
    { name: '分类 3', value: 150 },
    { name: '分类 4', value: 140 },
    { name: '分类 5', value: 115 },
    { name: '分类 6', value: 95 },
    { name: '分类 7', value: 90 },
    { name: '分类 8', value: 75 },
    { name: '分类 9', value: 98 },
    { name: '分类 10', value: 60 },
    { name: '分类 11', value: 45 },
    { name: '分类 12', value: 40 },
    { name: '分类 13', value: 40 },
    { name: '分类 14', value: 35 },
    { name: '分类 15', value: 40 },
    { name: '分类 16', value: 40 },
    { name: '分类 17', value: 40 },
    { name: '分类 18', value: 30 },
    { name: '分类 19', value: 28 },
    { name: '分类 20', value: 16 }
  ]
};

const dataPre = {
  connector: {
    type: 'hierarchy',
  },
  transform: {
    field: 'value',
    type: 'hierarchy.treemap',
    tile: 'treemapResquarify',
    as: ['x', 'y'],
  },
};

const dataView = ['nodes', node => {
  node.name = node.data.name;
  node.value = node.data.value;
  return node;
}];

const scale = [{
  dataKey: 'value',
  nice: false,
}];

const itemTpl = `<li data-index={index}>
  <span style="background-color:{color};" class="g2-tooltip-marker"></span>
  {name}<br/>
  <span style="padding-left: 16px">浏览人数：{count}</span><br/>
</li>`;

const style = {
  lineWidth: 1,
  stroke: '#fff',
};

const tooltip = ['name', (name, count) => ({ name, count })];

const label = ['name', {
  offset: 0,
  textStyle: {
    textBaseline: 'middle',
  },
  formatter(val) {
    if (val !== 'root') {
      return val;
    }
  }
}];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="600" [data]="data" [dataView]="dataView" [dataPre]="dataPre" [scale]="scale">
      <v-tooltip showTitle="false" itemTpl="itemTpl"></v-tooltip>
      <v-polygon position="x*y" color="name" [tooltip]="tooltip" [style]="style" [label]="label"></v-polygon>
    </v-chart>
  </div>
  `
})
export class AppComponent {
  forceFit: boolean = true;
  height: number = 600;
  data = data;
  dataPre = dataPre;
  dataView = dataView;
  scale = scale;
  tooltip = tooltip;
  style = style;
  label = label;
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

export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);