import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import { data } from './data'

const tmp = [];
const dates = [];
data.male.values.forEach((obj: any) => {
  if (dates.indexOf(obj.date) === -1) {
    dates.push(obj.date);
  }
  obj.age_groups.forEach((subObject: any) => {
    subObject.gender = 'male';
    subObject.date = obj.date;
    tmp.push(subObject);
  });
});
data.female.values.forEach((obj: any) => {
  obj.age_groups.forEach((subObject: any) => {
    subObject.gender = 'female';
    subObject.date = obj.date;
    tmp.push(subObject);
  });
});

const tmpData = tmp;

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

const dataPre = {
  transform: {
    type: 'filter',
    callback(row) {
      return new Date(row.date * 1000).getFullYear() === new Date(dates[0] * 1000).getFullYear();
    }
  }
};

@Component({
  selector: '#mount',
  template: `
  <div>
    <Chart [forceFit]="forceFit" [height]="600" [data]="data" [dataPre]="dataPre" [scale]="scale">
      <Tooltip></Tooltip>
      <Legend></Legend>
      <Axis></Axis>
      <Facet type="mirror" [fields]="fields" line="{ stroke: '#c0d0e0' }" lineSmooth="true">
        <FacetView>
          <Bar position="age*total_percentage" color="['gender', [ '#1890ff', '#f04864' ]]"></Bar>
        </FacetView>
      </Facet>
    </Chart>
  </div>
  `
})
export class AppComponent {
  forceFit: boolean= true;
  height: number = 600;
  data = tmpData;
  dataPre = dataPre;
  scale = scale;
  fields = ['gender'];
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
