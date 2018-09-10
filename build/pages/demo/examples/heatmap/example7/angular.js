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
var axis1Opts = {
    dataKey: 'x',
    grid: {
        lineStyle: {
            stroke: '#d9d9d9',
            lineWidth: 1,
            lineDash: [2, 2]
        }
    }
};
var seriesOpts = {
    quickType: 'polygon',
    color: ['count', '#BAE7FF-#1890FF-#0050B3'],
    position: 'x*y',
    style: {
        lineWidth: 1,
        stroke: '#fff'
    }
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 400;
        this.data = [];
        this.axis1Opts = axis1Opts;
        this.seriesOpts = seriesOpts;
        $.getJSON('/assets/data/heatmap-7.json', function (sourceData) {
            var ds = new DataSet({
                state: {
                    sizeEncoding: false
                }
            });
            var dv = ds.createView().source(sourceData);
            dv.transform({
                sizeByCount: '$state.sizeEncoding',
                type: 'bin.hexagon',
                fields: ['x', 'y'],
                bins: [10, 5],
            });
            _this.data = dv.rows;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\">\n      <v-legend [offset]=\"40\"></v-legend>\n      <v-axis [dataKey]=\"axis1Opts.dataKey\" [grid]=\"axis1Opts.grid\"></v-axis>\n      <v-tooltip showTitle=\"false\" crosshairs=\"false\"></v-tooltip>\n      <v-polygon [position]=\"seriesOpts.position\" [color]=\"seriesOpts.color\" [style]=\"seriesOpts.style\"></v-polygon>\n    </v-chart>\n  </div>\n  "
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