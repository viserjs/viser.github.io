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
    { x: '职业 A', low: 20000, q1: 26000, median: 27000, q3: 32000, high: 38000, outliers: [50000, 52000] },
    { x: '职业 B', low: 40000, q1: 49000, median: 62000, q3: 73000, high: 88000, outliers: [32000, 29000, 106000] },
    { x: '职业 C', low: 52000, q1: 59000, median: 65000, q3: 74000, high: 83000, outliers: [91000] },
    { x: '职业 D', low: 58000, q1: 96000, median: 130000, q3: 170000, high: 200000, outliers: [42000, 210000, 215000] },
    { x: '职业 E', low: 24000, q1: 28000, median: 32000, q3: 38000, high: 42000, outliers: [48000] },
    { x: '职业 F', low: 47000, q1: 56000, median: 69000, q3: 85000, high: 100000, outliers: [110000, 115000, 32000] },
    { x: '职业 G', low: 64000, q1: 74000, median: 83000, q3: 93000, high: 100000, outliers: [110000] },
    { x: '职业 H', low: 67000, q1: 72000, median: 84000, q3: 95000, high: 110000, outliers: [57000, 54000] }
];
var dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'map',
    callback: function (obj) {
        obj.range = [obj.low, obj.q1, obj.median, obj.q3, obj.high];
        return obj;
    }
});
var data = dv.rows;
var scale = [{
        dataKey: 'range',
        min: 0,
        max: 240000,
    }, {
        dataKey: 'outliers',
        min: 0,
        max: 240000,
    }];
var tooltipOpts = {
    showTitle: false,
    crosshairs: {
        type: 'rect'
    },
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
var boxStyle = {
    stroke: '#545454',
    fill: '#1890FF',
    fillOpacity: 0.3
};
var boxTooltip = ['x*low*q1*median*q3*high', function (x, low, q1, median, q3, high) {
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
        this.data = data;
        this.scale = scale;
        this.tooltipOpts = tooltipOpts;
        this.boxStyle = boxStyle;
        this.boxTooltip = boxTooltip;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\">\n      <v-tooltip [showTitle]=\"tooltipOpts.showTitle\" [crosshairs]=\"tooltipOpts.crosshairs\" [itemTpl]=\"tooltipOpts.itemTpl\"></v-tooltip>\n      <v-view [data]=\"data\" [scale]=\"scale\">\n        <v-tooltip></v-tooltip>\n        <v-axis></v-axis>\n        <v-box position=\"x*range\" [style]=\"boxStyle\" [tooltip]=\"boxTooltip\"></v-box>\n      </v-view>\n      <v-view [data]=\"data\" [scale]=\"scale\">\n        <v-tooltip></v-tooltip>\n        <v-point position=\"x*outliers\" [size]=\"3\" [active]=\"false\" shape=\"circle\"></v-point>\n      </v-view>\n    </v-chart>\n  </div>\n  "
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