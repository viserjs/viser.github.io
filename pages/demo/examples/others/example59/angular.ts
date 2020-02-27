import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

var data = [{"sets":["A"],"size":12,"label":"A"},{"sets":["B"],"size":12,"label":"B"},{"sets":["C"],"size":12,"label":"C"},{"sets":["A","B"],"size":2,"label":"A&B"},{"sets":["A","C"],"size":2,"label":"A&C"},{"sets":["B","C"],"size":2,"label":"B&C"},{"sets":["A","B","C"],"size":1}];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [data]="data" >
      <v-venn label="sets" size="size" color="id"
      shape="hollow"
        [style]="{
          lineWidth: 10,
          padding: 10,
          textStyle: {
            textAlign: 'center',
            fontSize: 32
          }
        }">
      </v-venn>
    </v-chart>
  </div>
  `,
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 600;
  data: any = data;
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ViserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
