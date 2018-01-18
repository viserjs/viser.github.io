import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const scale = [{
  dataKey: 'type',
  range: [0, 1],
}, {
  dataKey: 'value',
  sync: true,
}];

const dataBackground = [];
for (let i = 0; i < 50; i++) {
  dataBackground.push({
    type: i + '',
    value: 10,
  });
}
const dataFront = [];
for (let i = 0; i < 50; i++) {
  const item = {
    type: i + '',
    value: 10,
  };
  if (i === 25) {
    item.value = 14;
  }
  if (i > 25) {
    item.value = 0;
  }
  dataFront.push(item);
}

const insideScale = [{
  dataKey: 'type',
  tickCount: 3
}];
const insideAxisLabel = {
  offset: -15,
  textStyle: {
    textAlign: 'center',
    fill: '#CBCBCB',
    fontSize: 18
  },
  formatter: val => {
    if (val === '49') {
      return 50;
    }

    return val;
  }
};

const frontIntervalColor = ['value', '#3023AE-#53A0FD'];
const frontGuidePosition = ['50%', '65%'];
const frontGuideStyle = {
  fill: '#CBCBCB',
  fontSize: 64,
  textAlign: 'center',
  textBaseline: 'middle',
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" height="400" [scale]="scale">
      <v-view [data]="dataBackground">
        <v-coord
          type="polar"
          startAngle="-202.5"
          endAngle="22.5"
          innerRadius="0.75"
          radius="0.8"
        ></v-coord>
        <v-interval
          position="type*value"
          color="#CBCBCB"
          size="6"
        ></v-interval>
      </v-view>
      <v-view [data]="dataBackground" [scale]="insideScale">
        <v-axis dataKey="value" show="false"></v-axis>
        <v-axis
          dataKey="type"
          grid="null"
          line="null"
          tickLine="null"
          [label]="insideAxisLabel"
        ></v-axis>
        <v-coord
          type="polar"
          startAngle="-202.5"
          endAngle="22.5"
          innerRadius="0.95"
          radius="0.55"
        ></v-coord>
        <v-interval
          position="type*value"
          color="#CBCBCB"
          size="6"
        ></v-interval>
      </v-view>
      <v-view [data]="dataFront">
        <v-coord
          type="polar"
          startAngle="-202.5"
          endAngle="22.5"
          innerRadius="0.75"
          radius="0.8"
        ></v-coord>
        <v-interval
          position="type*value"
          [color]="frontIntervalColor"
          opacity="1"
          size="6"
        ></v-interval>
        <v-guide
          type="text"
          [position]="frontGuidePosition"
          content="26°"
          [style]="frontGuideStyle"
        ></v-guide>
      </v-view>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  scale = scale;
  dataBackground = dataBackground;
  dataFront = dataFront;
  insideScale = insideScale;
  insideAxisLabel = insideAxisLabel;
  frontIntervalColor = frontIntervalColor;
  frontGuidePosition = frontGuidePosition;
  frontGuideStyle = frontGuideStyle;
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
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
