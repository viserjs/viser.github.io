import 'zone.js';
import 'reflect-metadata';
import * as $ from 'jquery';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const DataSet = require('@antv/data-set');

const data = [{
  "Date": "22 February",
  "订阅数": 50000,
  "月收入": 125000
}, {
  "Date": "28 February",
  "订阅数": 60000,
  "月收入": 150000
}, {
  "Date": "3 March",
  "订阅数": 100000,
  "月收入": 250000
}, {
  "Date": "20 March",
  "订阅数": 200000,
  "月收入": 500000
}, {
  "Date": "7 April",
  "订阅数": 250000,
  "月收入": 625000
}, {
  "Date": "13 June",
  "订阅数": 210000,
  "月收入": 525000
}];

const ds = new DataSet();
const dv = ds.createView().source(data).transform({
  type: 'fold',
  fields: ["订阅数", "月收入"],
  key: 'type',
  value: 'value',
  retains: ['Date']
});
const dv2 = ds.createView().source(data).transform({
  type: 'map',
  callback: function callback(row) {
    row.range = [row["订阅数"], row['月收入']];
    return row;
  }
});

const label = {
  textStyle: {
    fill: '#aaaaaa'
  }
}

const labelFormat = {
  textStyle: {
    fill: '#aaaaaa'
  },
  formatter: function formatter(text) {
    return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  }
}

const scale = [{
  dataKey:'Date',
  range: [0, 1],
  tickCount: 10,
  type: 'timeCat'
}];
@Component({
  selector: '#mount',
  template: `
    <div>
        <div id="canvas">
          <v-chart
            [forceFit]="true"
            height="400"
            [scale]="scale"
            [data]="data"
            padding="auto"
          >
            <v-view [data]="viewData2">
              <v-axis [show]="false" dataKey="range"></v-axis>
              <v-area position="Date*range" color="#8d8d8d" [opacity]="0.1"></v-area>
            </v-view>
            <v-view [data]="viewData">
              <v-point position="Date*value" color="type" [opacity]="1" shape="circle"></v-point>
              <v-line position="Date*value" color="type" [opacity]="1"></v-line>
            </v-view>
            <v-tooltip crosshairs="y"></v-tooltip>
            <v-axis
              dataKey="value"
              [label]="labelFormat"
            >
            </v-axis>
            <v-axis
              dataKey="Date"
              [label]="label"
            >
            </v-axis>
          </v-chart>
        </div>
    </div>
  `,
})
class AppComponent {
  data=data;
  label=label;
  scale=scale;
  labelFormat=labelFormat;
  viewData=dv.rows;
  viewData2=dv2.rows;
}
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ViserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}