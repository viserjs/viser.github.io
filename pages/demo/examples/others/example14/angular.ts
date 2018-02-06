import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data = [
  {"question":"问题 1","percent":0.21},
  {"question":"问题 2","percent":0.40},
  {"question":"问题 3","percent":0.49},
  {"question":"问题 4","percent":0.52},
  {"question":"问题 5","percent":0.53},
  {"question":"问题 6","percent":0.84},
  {"question":"问题 7","percent":1.0},
  {"question":"问题 8","percent":1.2}
];

const scale = [{
  dataKey: 'percent',
  min: 0,
  max: 2,
}];

const interval1Opts = {
  position: 'question*percent',
  color: ['percent', '#BAE7FF-#1890FF-#0050B3'],
  tooltip: ['percent', val => {
    return {
      name: '占比',
      value: val * 100 + '%'
    };
  }],
  label: ['percent', {
    offset: -5
  }],
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [padding]="[ 40, 40, 130, 40 ]" [data]="data" [scale]="scale">
      <v-tooltip title="question"></v-tooltip>
      <v-coord type="polar" innerRadius="0.1" direction="rotate"></v-coord>
      <v-interval [position]="interval1Opts.position" [color]="interval1Opts.color"
        [tooltip]="interval1Opts.tooltip" [label]="interval1Opts.label"></v-interval>
      <v-guide *ngFor="let obj of data"
        type="text"
        [position]="this.getPosition(obj)"
        [content]="this.getContent(obj)"
        [style]="{
          textAlign: 'right'
        }">
      </v-guide>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 500;
  data = data;
  scale = scale;
  interval1Opts = interval1Opts;

  getPosition= (obj) => {
    return [ obj.question, 0 ];
  }
  getContent= (obj) => {
    return obj.question + ' ';
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

