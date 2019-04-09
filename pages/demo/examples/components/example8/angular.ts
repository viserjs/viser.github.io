import 'zone.js';
import 'reflect-metadata';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
const DataSet = require('@antv/data-set');

const data = [{
    country: 'Asia',
    year: '1750',
    value: 502
}, {
    country: 'Asia',
    year: '1800',
    value: 635
}, {
    country: 'Asia',
    year: '1850',
    value: 809
}, {
    country: 'Asia',
    year: '1900',
    value: 947
}, {
    country: 'Asia',
    year: '1950',
    value: 1402
}, {
    country: 'Asia',
    year: '1999',
    value: 3634
}, {
    country: 'Asia',
    year: '2050',
    value: 5268
}, {
    country: 'Africa',
    year: '1750',
    value: 106
}, {
    country: 'Africa',
    year: '1800',
    value: 107
}, {
    country: 'Africa',
    year: '1850',
    value: 111
}, {
    country: 'Africa',
    year: '1900',
    value: 133
}, {
    country: 'Africa',
    year: '1950',
    value: 221
}, {
    country: 'Africa',
    year: '1999',
    value: 767
}, {
    country: 'Africa',
    year: '2050',
    value: 1766
}, {
    country: 'Europe',
    year: '1750',
    value: 163
}, {
    country: 'Europe',
    year: '1800',
    value: 203
}, {
    country: 'Europe',
    year: '1850',
    value: 276
}, {
    country: 'Europe',
    year: '1900',
    value: 408
}, {
    country: 'Europe',
    year: '1950',
    value: 547
}, {
    country: 'Europe',
    year: '1999',
    value: 729
}, {
    country: 'Europe',
    year: '2050',
    value: 628
}, {
    country: 'Oceania',
    year: '1750',
    value: 200
}, {
    country: 'Oceania',
    year: '1800',
    value: 200
}, {
    country: 'Oceania',
    year: '1850',
    value: 200
}, {
    country: 'Oceania',
    year: '1900',
    value: 300
}, {
    country: 'Oceania',
    year: '1950',
    value: 230
}, {
    country: 'Oceania',
    year: '1999',
    value: 300
}, {
    country: 'Oceania',
    year: '2050',
    value: 460
}];
const ds = new DataSet();
const dv = ds.createView('demo').source(data).transform({
    type: 'percent',
    field: 'value', // 统计销量
    dimension: 'country', // 每年的占比
    groupBy: ['year'], // 以不同产品类别为分组
    as: 'percent'
});

@Component({
    selector: '#mount',
    template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" [padding]="padding" [scale]="scale">
      <v-legend></v-legend>
      <v-tooltip></v-tooltip>
      <v-axis dataKey="year"></v-axis>
      <v-stack-interval
        position="year*percent"
        [label]="label"
        [color]="color"
        shape="top-line"
      >
      </v-stack-interval>
    </v-chart>
  </div>
  `,
})
class AppComponent {
    public forceFit: boolean = true;
    public height: number = 500;
    public data: any = dv;
    public padding: any[] = ['auto'];
    public label: any[] = [
        'percent',
        {
            position: 'middle',
            offset: 0,
            textStyle: {
                fill: '#fff'
            }
        }
    ];
    public color: any[] = [
        'country',
        ['#FF6A84', '#30A4EB', '#45BFC0', '#FFCC55']
    ];
    public scale: any[] = [
        {
            dataKey: 'percent',
            min: 0,
            formatter: function formatter(val) {
                return (val * 100).toFixed(2) + '%';
            }
        }
    ];
}

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ViserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export default class AppModule { }
