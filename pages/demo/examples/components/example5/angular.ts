import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

function findMax(data) {
  var maxValue = 0;
  var maxObj = null;
  for (var i = 0; i < data.length; i++) {
    var d = data[i];
    if (d.value > maxValue /* && d.type === 'today'*/) {
      maxValue = d.value;
      maxObj = d;
    }
  }
  return maxObj;
}

const scale = [
  {
    dataKey: 'time',
    alias: '时间',
    type: 'time',
    mask: 'MM:ss',
    nice: false,
  },
  {
    dataKey: 'value',
    alias: '占用率',
    min: 0,
    max: 120,
  },
  {
    dataKey: 'type',
    type: 'cat',
  },
];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [scale]="scale" [padding]="padding">
      <v-tooltip></v-tooltip>
      <v-axis ></v-axis>
      <v-legend [attachLast]="true" ></v-legend>
      <v-legend dataKey="predict" [show]="false" ></v-legend>
      <v-line position="time*value" shape="smooth" [color]="['type', ['#cccccc', '#2593fc']]"
        [size]="2" [animate]="lineAnimate"
      ></v-line>
      <v-guide
        type="line"
        [top]="true"
        [start]="['min', 60]"
        [end]="['max', 60]"
        [lineStyle]="guide1Opts.lineStyle"
        [text]="guide1Opts.text"
      ></v-guide>
      <v-guide
        type="regionFilter"
        [top]="true"
        [start]="['min', 60]"
        [end]="['max', 60]"
        color="#F5222D"
        [apply]="['line']"
      ></v-guide>
      <v-guide
        type="dataMarker"
        [top]="true"
        content="当前最大峰值"
        [position]="this.getDataMarkerOptsposition(data)"
        [style]="dataMarkerOpts.style"
        [lineLength]="50"
      ></v-guide>
    </v-chart>
  </div>
  `,
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 440;
  data = [];
  scale = scale;
  padding = [10, 100, 50, 50];
  lineAnimate = {
    update: {
      duration: 0,
    },
  };
  guide1Opts = {
    lineStyle: {
      stroke: '#F5222D',
      lineWidth: 2,
    },
    text: {
      content: '预警线',
      position: 'start',
      offsetX: 20,
      offsetY: -5,
    },
  };
  dataMarkerOpts = {
    style: {
      text: {
        fontSize: 13,
      },
      point: {
        stroke: '#606060',
      },
    },
  };
  getDataMarkerOptsposition = data => {
    var obj = findMax(data);
    if (obj) {
      return [obj.time, obj.value];
    }
    return [0, 0];
  };
  constructor() {
    setInterval(() => {
      const data = this.data.slice();
      var now = new Date();
      var time = now.getTime();
      var value1 = ~~30 + Math.random() * 50;
      var direction = Math.random() > 0.5 ? 1 : -1;
      var value2 = value1 + Math.random() * 20 * direction;
      if (data.length >= 200) {
        data.shift();
        data.shift();
      }
      data.push({
        time: time,
        value: value2,
        type: 'yesterday',
      });
      data.push({
        time: time,
        value: value1,
        type: 'today',
      });

      if (data.length > 20) {
        data.shift();
        data.shift();
      }
      this.data = data;
    }, 1000);
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ViserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
