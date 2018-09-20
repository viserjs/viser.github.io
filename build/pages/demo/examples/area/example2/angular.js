"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js");
require("reflect-metadata");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var viser_ng_1 = require("viser-ng");
var DataSet = require('@antv/data-set');
var sourceData = [
    { year: '1996', north: 322, south: 162 },
    { year: '1997', north: 324, south: 90 },
    { year: '1998', north: 329, south: 50 },
    { year: '1999', north: 342, south: 77 },
    { year: '2000', north: 348, south: 35 },
    { year: '2001', north: 334, south: -45 },
    { year: '2002', north: 325, south: -88 },
    { year: '2003', north: 316, south: -120 },
    { year: '2004', north: 318, south: -156 },
    { year: '2005', north: 330, south: -123 },
    { year: '2006', north: 355, south: -88 },
    { year: '2007', north: 366, south: -66 },
    { year: '2008', north: 337, south: -45 },
    { year: '2009', north: 352, south: -29 },
    { year: '2010', north: 377, south: -45 },
    { year: '2011', north: 383, south: -88 },
    { year: '2012', north: 344, south: -132 },
    { year: '2013', north: 366, south: -146 },
    { year: '2014', north: 389, south: -169 },
    { year: '2015', north: 334, south: -184 },
];
var dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'fold',
    fields: ['north', 'south'],
    key: 'type',
    value: 'value',
});
var data = dv.rows;
var scale = [{
        dataKey: 'year',
        min: 0,
        max: 1,
    }];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = data;
        this.scale = scale;
        this.crosshairs = { type: 'line' };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip [crosshairs]=\"crosshairs\"></v-tooltip>\n      <v-axis dataKey=\"value\"></v-axis>\n      <v-legend></v-legend>\n      <v-line position=\"year*value\" [size]=\"2\" color=\"type\"></v-line>\n      <v-area position=\"year*value\" color=\"type\"></v-area>\n    </v-chart>\n  </div>\n  "
        })
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