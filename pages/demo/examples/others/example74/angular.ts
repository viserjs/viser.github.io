import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data:any = [{
  name: '类别一',
  value: 150,
  error: 6
}, {
  name: '类别二',
  value: 120,
  error: 10
}, {
  name: '类别三',
  value: 170,
  error: 5
}, {
  name: '类别四',
  value: 170,
  error: 5
  }];
data.forEach(function(obj) {
  obj.range = [obj.value - obj.error, obj.value + obj.error];
});

@Component({
  selector: '#mount',
  template: `
  <div>
  <v-chart [forceFit]="true" [height]="400" [data]="data" [scale]="scale" padding="auto">
    <v-tooltip></v-tooltip>
    <v-axis></v-axis>
    <v-interval
      position="name*value"
      color="name"
      [opacity]="0.7"
    ></v-interval>
    <v-interval
      position="name*range"
        color="name"
        [size]="40"
        shape="tick"
    ></v-interval>
  </v-chart>
  </div>
  `,
})
class AppComponent {
  public data: any = data;
  public scale: any = [
    {
      dataKey: 'value',
      min: 0,
      max: 200
    },
    {
      dataKey: 'range',
      min: 0,
      mx: 200
    }
  ];
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ViserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
