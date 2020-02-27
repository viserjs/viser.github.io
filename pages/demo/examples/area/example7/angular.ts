import 'zone.js';
import 'reflect-metadata';
import * as $ from 'jquery';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const data = [{
  'month': '1',
  value: 1078
}, {
  'month': '2',
  value: 1216
}, {
  'month': '3',
  value: 758
}, {
  'month': '4',
  value: 623
}, {
  'month': '5',
  value: 319
}, {
  'month': '6',
  value: 422
}, {
  'month': '7',
  value: -4
}, {
  'month': '8',
  value: -217
}, {
  'month': '9',
  value: -358
}, {
  'month': '10',
  value: 1513
}, {
  'month': '11',
  value: 1388
}, {
  'month': '12',
  value: 597
}];

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
};
const style2 = {
  text: {
    textAlign: 'right',
    stroke: '#fff',
    lineWidth: 2
  },
  point: {
    stroke: '#f5222d'
  }
};
const style3 = {
  text: {
    textAlign: 'right',
    stroke: '#fff',
    lineWidth: 2
  },
  point: {
    stroke: '#2fc25b'
  }
};
const style = {
  text: {
    textAlign: 'left',
    stroke: '#fff',
    lineWidth: 2
  },
  point: {
    stroke: '#f5222d'
  }
};

const labelFormat = {
  textStyle: {
    fill: '#aaaaaa'
  },
  formatter: function formatter(text) {
    return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  }
};

const scale = [{
  dataKey:'value',
  max: 2000,
  min: -1000
},{
  dataKey:'month',
  type: 'cat'
}];
@Component({
  selector: '#mount',
  template: `
    <div *ngIf="data.length">
        <div id="canvas">
          <v-chart
            [forceFit]="true"
            height="400"
            [data]="data"
            [scale]="scale"
            padding="auto"
          >
          <v-tooltip></v-tooltip>
          <v-line position="month*value" color="white" [size]="2"></v-line>
          <v-area position="month*value" color="white" [opacity]="0.3"></v-area>
          <v-axis
            dataKey="value"
            [label]="label"
          >
          </v-axis>
          <v-axis
            dataKey="month"
            [label]="labelFormat"
          >
          </v-axis>
          <v-guide
            type="regionFilter" 
            [top]="true"
            [start]="['min', 'max']"
            [end]="['max', 0]"
            [color]="color"
          >
          </v-guide>
          <v-guide
            type="regionFilter" 
            [top]="true"
            [start]="['min', 0]"
            [end]="['max', 'max']"
            [color]="color2"
          >
          </v-guide>
          <v-guide
            type="dataMarker"  
            [top]="true"
            [position]="['2', 1216]"
            [content]="content"
            [style]="style"
            [lineLength]="20"
          >
          </v-guide>
          <v-guide
            type="dataMarker"  
            direction="downward"
            [position]="['10', 1513]"
            [content]="content2"
            [style]="style2"
            [lineLength]="20"
          >
          </v-guide>
          <v-guide
            type="dataMarker"  
            direction="downward"
            [position]="['9', -358]"
            [content]="content3"
            [style]="style3"
            [lineLength]="20"
          >
          </v-guide>
          <v-guide
            type="region"  
            [start]="['7', 'min']"
            [end]="['9', 'max']"
          >
          </v-guide>
          </v-chart>
        </div>
    </div>
  `,
})
class AppComponent {
  data=data;
  label=label;
  style=style;
  scale=scale;
  labelFormat=labelFormat;
  style2=style2;
  style3=style3;
  content='2月份因逢春节水产销售需求旺盛，\n需求大增';
  content2='开渔后产品销售双增，利润达到\n全年新高';
  content3='因休渔期无新进货源，成本摊销\n下来有亏损';
  color='#f5222d';
  color2='#2fc25b';
}
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ViserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
