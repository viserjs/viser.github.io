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
    { label: 'Mon.', series1: 2800, series2: 2260 },
    { label: 'Tues.', series1: 1800, series2: 1300 },
    { label: 'Wed.', series1: 950, series2: 900 },
    { label: 'Thur.', series1: 500, series2: 390 },
    { label: 'Fri.', series1: 170, series2: 100 },
];
var dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'fold',
    fields: ['series1', 'series2'],
    key: 'type',
    value: 'value',
});
var data = dv.rows;
var label = { offset: 12 };
var adjust = [{ type: 'dodge', marginRatio: 1 / 32 }];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = data;
        this.label = label;
        this.adjust = adjust;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\">\n      <v-coord type=\"rect\" direction=\"LT\"></v-coord>\n      <v-tooltip></v-tooltip>\n      <v-legend></v-legend>\n      <v-axis dataKey=\"value\" position=\"right\"></v-axis>\n      <v-axis dataKey=\"label\" [label]=\"label\"></v-axis>\n      <v-bar position=\"label*value\" color=\"type\" [adjust]=\"adjust\"></v-bar>\n    </v-chart>\n  </div>\n  "
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