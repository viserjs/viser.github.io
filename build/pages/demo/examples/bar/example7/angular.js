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
var values = [
    1.2, 3.4, 3.7, 4.3, 5.2, 5.8, 6.1, 6.5, 6.8, 7.1, 7.3, 7.7,
    8.3, 8.6, 8.8, 9.1, 9.2, 9.4, 9.5, 9.7, 10.5, 10.7, 10.8, 11.0,
    11.0, 11.1, 11.2, 11.3, 11.4, 11.4, 11.7, 12.0, 12.9, 12.9,
    13.3, 13.7, 13.8, 13.9, 14.0, 14.2, 14.5, 15, 15.2, 15.6, 16.0,
    16.3, 17.3, 17.5, 17.9, 18.0, 18.0, 20.6, 21, 23.4
];
var sourceData = values.map(function (value) { return ({ value: value }); });
var dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'bin.histogram',
    field: 'value',
    binWidth: 2,
    as: ['value', 'count'],
});
var data = dv.rows;
var scale = [{
        dataKey: 'value',
        nice: false,
        min: 0,
        tickInterval: 1,
    }, {
        dataKey: 'count',
        max: 14,
    }];
var formatter = function (val) {
    if ((val % 2)) {
        return val;
    }
    return '';
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.scale = scale;
        this.data = data;
        this.label = { formatter: formatter };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip [crosshairs]=\"false\" [inPlot]=\"false\" position=\"top\"></v-tooltip>\n      <v-axis dataKey=\"value\" [label]=\"label\"></v-axis>\n      <v-bar position=\"value*count\"></v-bar>\n    </v-chart>\n  </div>\n  "
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