import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'age',
  sync: true,
  tickCount: 11,
}, {
  dataKey: 'total_percentage',
  sync: true,
  formatter(v) {
    return v + '%';
  }
}, {
  dataKey: 'gender',
  sync: true,
}];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="600" [data]="data" [scale]="scale">
      <v-tooltip></v-tooltip>
      <v-legend></v-legend>
      <v-axis></v-axis>
      <v-facet type="mirror" [fields]="fields" transpose="true">
        <v-facet-view>
          <v-bar position="age*total_percentage" [color]="color"></v-bar>
        </v-facet-view>
      </v-facet>
    </v-chart>
  </div>
  `
})
export class AppComponent {
  forceFit: boolean = true;
  height: number = 600;
  data = [];
  scale = scale;
  fields = ['gender'];
  color = ['gender', ['#1890ff', '#f04864']];

  constructor() {
    $.getJSON('/assets/data/population.json', (sourceData) => {
      const tmp = [];
      const dates = [];
      sourceData.male.values.forEach((obj: any) => {
        if (dates.indexOf(obj.date) === -1) {
          dates.push(obj.date);
        }
        obj.age_groups.forEach((subObject: any) => {
          subObject.gender = 'male';
          subObject.date = obj.date;
          tmp.push(subObject);
        });
      });
      sourceData.female.values.forEach((obj: any) => {
        obj.age_groups.forEach((subObject: any) => {
          subObject.gender = 'female';
          subObject.date = obj.date;
          tmp.push(subObject);
        });
      });

      const dv = new DataSet.View().source(tmp);
      dv.transform({
        type: 'filter',
        callback(row) {
          return new Date(row.date * 1000).getFullYear() === new Date(dates[0] * 1000).getFullYear();
        }
      });

      this.data = dv.rows;
    });
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
  bootstrap: [AppComponent]
})

export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
