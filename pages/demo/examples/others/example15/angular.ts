import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';

const data = [
  { "term":"Zombieland","count":9 },
  { "term":"Wieners","count":8 },
  { "term":"Toy Story","count":8 },
  { "term":"trashkannon","count":7 },
  { "term":"the GROWLERS","count":6 },
  { "term":"mudweiser","count":6 },
  { "term":"ThunderCats","count":4 },
  { "term":"The Taqwacores - Motion Picture","count":4 },
  { "term":"The Shawshank Redemption","count":2 },
  { "term":"The Olivia Experiment","count":1 },
];

const scale = [{
  dataKey: 'count',
  max: 2,
}];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [padding]="[20, 80]" [data]="data" [scale]="scale">
      <v-tooltip></v-tooltip>
      <v-coord type="theta" innerRadius="0.2" startAngle="-90" endAngle="180"></v-coord>
      <v-bar position="term*count" color="#8543e0" shape="line" select="false" [style]="barStyle"></v-bar>
      <v-point position="term*count" color="#8543e0" shape="circle"></v-point>
      <v-guide *ngFor="let obj of data"
        type="text"
        [position]="this.getPosition(obj)" [content]="this.getContent(obj)"
        [style]="{
          textAlign: 'right'
        }">
      </v-guide>
      <v-guide type="text" [position]="guideTextPosition" content="Music" [style]="guideTextStyle"></v-guide>
    </v-chart>
  </div>
  `
})
class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  data = data;
  scale = scale;
  guideTextStyle = {
    textAlign: 'center',
    fontSize: 24,
    fill: '#8543e0',
  };
  guideTextPosition = ['50%', '50%'];
  barStyle = { lineAppendWidth: 10 };

  getPosition = (obj) => {
    return [obj.term, 0];
  }
  getContent = (obj) => {
    return obj.term.toString();
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
  bootstrap: [
    AppComponent
  ]
})
export default class AppModule { }

