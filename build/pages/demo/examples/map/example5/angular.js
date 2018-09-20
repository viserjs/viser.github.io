"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js");
require("reflect-metadata");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var viser_ng_1 = require("viser-ng");
var $ = require("jquery");
var DataSet = require('@antv/data-set');
var scale = [{
        dataKey: 'longitude',
        max: -66,
        min: -125,
        sync: true
    }, {
        dataKey: 'latitude',
        max: 50,
        min: 24,
        sync: true
    }];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 400;
        this.scale = scale;
        this.mapDv = [];
        this.airports = [];
        this.subFlights = [];
        this.flights = [];
        this.preId = '';
        this.airView = '';
        this.plotMove = function (ev, chart) {
            if (chart && chart._attrs && (chart._attrs.views.length === 3)) {
                var airView = chart._attrs.views[1];
                var flightView = chart._attrs.views[2];
                var preId = _this.preId;
                var records = airView.getSnapRecords({
                    x: ev.x,
                    y: ev.y
                });
                var subFlights = [];
                if (records.length) {
                    var obj = records[0]._origin;
                    var iata = obj.iata;
                    if (preId !== iata) {
                        subFlights = _this.getFlights(iata);
                        flightView.changeData(subFlights);
                        preId = iata;
                    }
                }
                _this.preId = preId;
                _this.subFlights = subFlights;
            }
        };
        this.plotLeave = function (ev, chart) {
            if (chart && chart._attrs && (chart._attrs.views.length === 3)) {
                var subFlights = _this.subFlights;
                var flightView = chart._attrs.views[2];
                if (subFlights.length) {
                    _this.subFlights = [];
                    flightView.changeData([]);
                }
            }
        };
        $.when($.getJSON('/assets/data/usa.geo.json'), $.getJSON('/assets/data/flights-airport.json'), $.getJSON('/assets/data/airport.json'))
            .then(function (mapData, flights, airports) {
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
                callback: function (row) {
                    row.code = row.properties.code;
                    return row;
                }
            });
            var countByAirport = {};
            var subFlights = [];
            // 计算飞机的起飞、降落数
            flights.forEach(function (flight) {
                var origin = flight.origin, destination = flight.destination;
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
            flights.forEach(function (flight) {
                var origin = airportByIata[flight.origin];
                var destination = airportByIata[flight.destination];
                flight.longitude = [origin.longitude, destination.longitude];
                flight.latitude = [origin.latitude, destination.latitude];
            });
            console.log(_this);
            _this.mapDv = mapDv;
            _this.airports = airports;
            _this.subFlights = subFlights;
            _this.flights = flights;
        });
    }
    AppComponent.prototype.getFlights = function (iata) {
        var flights = this.flights;
        var rst = [];
        flights.forEach(function (flight) {
            if (flight.origin === iata || flight.destination === iata) {
                rst.push(flight);
            }
        });
        return rst;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"0\" [scale]=\"scale\"\n     [onPlotMove]=\"plotMove\" [onPlotLeave]=\"plotLeave\"\n    >\n      <v-tooltip [showTitle]=\"false\"></v-tooltip>\n      <v-legend data-key=\"trend\" position=\"left\"></v-legend>\n      <v-view [data]=\"mapDv\">\n        <v-polygon [position]=\"'longitude*latitude'\" [style]=\"{\n            fill: '#DDDDDD',\n            stroke: '#b1b1b1',\n            lineWidth: 0.5,\n            fillOpacity: 0.85\n        }\"></v-polygon>\n      </v-view>\n      <v-view [data]=\"airports\">\n        <v-point [position]=\"'longitude*latitude'\" shape=\"circle\" [color]=\"'rgb(97,145,185)'\"\n          [style]=\"{\n            stroke: '#eee',\n            lineWidth: 1\n        }\" [size]=\"['count', [ 3, 18 ]]\" tooltip=\"iata*count\"></v-point>\n      </v-view>\n      <v-view [data]=\"subFlights\">\n        <v-tooltip [showTitle]=\"false\"></v-tooltip>\n        <v-edge [position]=\"'longitude*latitude'\"></v-edge>\n      </v-view>\n    </v-chart>\n  </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                viser_ng_1.ViserModule
            ],
            providers: [],
            bootstrap: [
                AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.default = AppModule;
//# sourceMappingURL=angular.js.map