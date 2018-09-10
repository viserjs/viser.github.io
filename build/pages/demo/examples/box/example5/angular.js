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
var DataView = DataSet.DataView;
var data = [
    { x: 'Oceania', low: 1, q1: 9, median: 16, q3: 22, high: 24 },
    { x: 'East Europe', low: 1, q1: 5, median: 8, q3: 12, high: 16 },
    { x: 'Australia', low: 1, q1: 8, median: 12, q3: 19, high: 26 },
    { x: 'South America', low: 2, q1: 8, median: 12, q3: 21, high: 28 },
    { x: 'North Africa', low: 1, q1: 8, median: 14, q3: 18, high: 24 },
    { x: 'North America', low: 3, q1: 10, median: 17, q3: 28, high: 30 },
    { x: 'West Europe', low: 1, q1: 7, median: 10, q3: 17, high: 22 },
    { x: 'West Africa', low: 1, q1: 6, median: 8, q3: 13, high: 16 }
];
var dv = new DataView().source(data);
dv.transform({
    type: 'map',
    callback: function (obj) {
        obj.range = [obj.low, obj.q1, obj.median, obj.q3, obj.high];
        return obj;
    }
});
var scale = [{
        dataKey: 'range',
        max: 35,
    }];
var tooltipOpts = {
    showTitle: false,
    itemTpl: '<li data-index={index} style="margin-bottom:4px;">'
        + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
        + '{name}<br/>'
        + '<span style="padding-left: 16px">最大值：{high}</span><br/>'
        + '<span style="padding-left: 16px">上四分位数：{q3}</span><br/>'
        + '<span style="padding-left: 16px">中位数：{median}</span><br/>'
        + '<span style="padding-left: 16px">下四分位数：{q1}</span><br/>'
        + '<span style="padding-left: 16px">最小值：{low}</span><br/>'
        + '</li>'
};
var seriesTooltip = ['x*low*q1*median*q3*high', function (x, low, q1, median, q3, high) {
        return {
            name: x,
            low: low,
            q1: q1,
            median: median,
            q3: q3,
            high: high
        };
    }];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = dv;
        this.scale = scale;
        this.tooltipOpts = tooltipOpts;
        this.seriesTooltip = seriesTooltip;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip [showTitle]=\"tooltipOpts.showTitle\" [itemTpl]=\"tooltipOpts.itemTpl\"></v-tooltip>\n      <v-coord type=\"polar\" [innerRadius]=\"0.5\" ></v-coord>\n      <v-axis></v-axis>\n      <v-legend></v-legend>\n      <v-box position=\"x*range\" [active]=\"true\" [size]=\"60\" color=\"x\" [tooltip]=\"seriesTooltip\"></v-box>\n    </v-chart>\n  </div>\n  "
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