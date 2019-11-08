import 'zone.js';
import 'reflect-metadata';
import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ViserModule } from 'viser-ng';
import * as $ from 'jquery';
const DataSet = require('@antv/data-set');

const scale = [{
  dataKey: 'longitude',
  max: -66,
  min:-125,
  sync: true
}, {
  dataKey: 'latitude',
  max: 50,
  min:24,
  sync: true
}];

@Component({
  selector: '#mount',
  template: `
  <div>
    <v-chart [forceFit]="forceFit" [height]="height" [padding]="0" [scale]="scale"
     [onPlotMove]="plotMove" [onPlotLeave]="plotLeave"
    >
      <v-tooltip [showTitle]="false"></v-tooltip>
      <v-legend data-key="trend" position="left"></v-legend>
      <v-view [data]="mapDv">
        <v-polygon [position]="'longitude*latitude'" [style]="{
            fill: '#DDDDDD',
            stroke: '#b1b1b1',
            lineWidth: 0.5,
            fillOpacity: 0.85
        }"></v-polygon>
      </v-view>
      <v-view [data]="airports">
        <v-point [position]="'longitude*latitude'" shape="circle" [color]="'rgb(97,145,185)'"
          [style]="{
            stroke: '#eee',
            lineWidth: 1
        }" [size]="['count', [ 3, 18 ]]" tooltip="iata*count"></v-point>
      </v-view>
      <v-view [data]="subFlights">
        <v-tooltip [showTitle]="false"></v-tooltip>
        <v-edge [position]="'longitude*latitude'"></v-edge>
      </v-view>
    </v-chart>
  </div>
  `
})

class AppComponent {
  forceFit: boolean = true;
  height: number = 400;
  scale = scale;
  mapDv = [];
  airports = [];
  subFlights = [];
  flights = [];
  preId = '';
  airView = '';
  plotMove = (ev, chart) => {
    if (chart && chart._attrs && (chart._attrs.views.length === 3)) {
      const airView = chart._attrs.views[1];
      const flightView = chart._attrs.views[2];
      var preId = this.preId;
      var records = airView.getSnapRecords({
          x: ev.x,
          y: ev.y
      });
      var subFlights = [];
      if (records.length) {
          var obj = records[0]._origin;
          var iata = obj.iata;
          if (preId !== iata) {
              subFlights = this.getFlights(iata);
              flightView.changeData(subFlights);
              preId = iata;
          }
      }
      this.preId = preId;
      this.subFlights = subFlights;
    }
  };
  plotLeave = (ev, chart) => {
    if (chart && chart._attrs && (chart._attrs.views.length === 3)) {
      const subFlights = this.subFlights;
      const flightView = chart._attrs.views[2];
      if (subFlights.length) {
        this.subFlights = [];
        flightView.changeData([]);
      }
    }
  };

  constructor() {
    $.when($.getJSON('/assets/data/usa.geo.json'),
      $.getJSON('/assets/data/flights-airport.json'),
      $.getJSON('/assets/data/airport.json'))
    .then((mapData, flights, airports) => {
      mapData = mapData[0];
      flights = flights[0];
      airports = airports[0];

      var map = [];
      var features = mapData.features;
      // 获取出所有的地图区域名称
      for (var i = 0; i < features.length; i++) {
          var name = features[i].properties.name;
          map.push({
              "name": name
          });
      }

      var mapDv = new DataSet.View().source(mapData, {
          type: 'GeoJSON'
      });
      mapDv.transform({
          type: 'map',
          callback: function(row) {
              row.code = row.properties.code;
              return row;
          }
      });

      var countByAirport = {};
      var subFlights = [];
      // 计算飞机的起飞、降落数
      flights.forEach(function (flight) {
          var origin = flight.origin,
              destination = flight.destination;
          countByAirport[origin] = (countByAirport[origin] || 0) + 1;
          countByAirport[destination] = (countByAirport[destination] || 0) + 1;
      });

      // Only consider airports with at least one flight.
      var airportByIata = {};
      airports = airports.filter(function (airport) {
          airportByIata[airport.iata] = airport;
          if (countByAirport[airport.iata]) {
              airport.count = countByAirport[airport.iata]; // 加入班次数量
              airport.id = airport.iata;
              return true;
          }
      });
      flights.forEach(function(flight) {
          var origin = airportByIata[flight.origin];
          var destination = airportByIata[flight.destination];
          flight.longitude = [origin.longitude, destination.longitude];
          flight.latitude = [origin.latitude, destination.latitude];
      });

      this.mapDv = mapDv;
      this.airports = airports;
      this.subFlights = subFlights;
      this.flights = flights;
    });
  }

  getFlights(iata) {
    const flights = this.flights;
    var rst = [];
    flights.forEach(function (flight) {
        if (flight.origin === iata || flight.destination === iata) {
            rst.push(flight);
        }
    });
    return rst;
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

