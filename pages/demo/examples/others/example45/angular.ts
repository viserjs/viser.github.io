import 'zone.js';
import 'reflect-metadata';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data = [
  {
    sex: '男',
    sold: 0.45,
  },
  {
    sex: '女',
    sold: 0.55,
  },
];

@Component({
  selector: '#mount',
  template: `
    <div>
      <v-chart [forceFit]="forceFit" [height]="height" [data]="data">
        <v-tooltip [showTitle]="showTitle"></v-tooltip>
        <v-legend dataKey="type"></v-legend>
        <v-coord type="theta" radius="0.8"></v-coord>
        <v-pie position="sold" label="sex" [style]="style"></v-pie>
      </v-chart>
    </div>
  `,
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data: any = data;
  showTitle: boolean = false;
  style: any = [
    'sex',
    {
      fill: sex =>
        sex === '男'
          ? 'p(a)https://gw.alipayobjects.com/zos/rmsportal/nASTPWDPJDMgkDRlAUmw.jpeg'
          : 'p(a)https://gw.alipayobjects.com/zos/rmsportal/ziMWHpHSTlTzURSzCarw.jpeg',
    },
  ];
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ViserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
