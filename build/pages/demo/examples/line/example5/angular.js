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
    { month: 'Jan', series2: 51, series1: 125 },
    { month: 'Feb', series2: 91, series1: 132 },
    { month: 'Mar', series2: 34, series1: 141 },
    { month: 'Apr', series2: 47, series1: 158 },
    { month: 'May', series2: 63, series1: 133 },
    { month: 'June', series2: 58, series1: 143 },
    { month: 'July', series2: 56, series1: 176 },
    { month: 'Aug', series2: 77, series1: 194 },
    { month: 'Sep', series2: 99, series1: 115 },
    { month: 'Oct', series2: 106, series1: 134 },
    { month: 'Nov', series2: 88, series1: 110 },
    { month: 'Dec', series2: 56, series1: 91 },
];
var dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'fold',
    fields: ['series1', 'series2'],
    key: 'key',
    value: 'value',
});
var data = dv.rows;
var scale = [{
        dataKey: 'month',
        min: 0,
        max: 1,
    }];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = data;
        this.scale = scale;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip></v-tooltip>\n      <v-axis></v-axis>\n      <v-legend></v-legend>\n      <v-line position=\"month*value\" shape=\"hv\" color=\"key\"></v-line>\n    </v-chart>\n  </div>\n  "
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