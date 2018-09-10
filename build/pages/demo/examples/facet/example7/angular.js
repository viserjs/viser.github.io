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
var sourceData = [
    { gender: '男', count: 40, 'class': '一班', grade: '一年级' },
    { gender: '女', count: 30, 'class': '一班', grade: '一年级' },
    { gender: '男', count: 35, 'class': '二班', grade: '一年级' },
    { gender: '女', count: 45, 'class': '二班', grade: '一年级' },
    { gender: '男', count: 20, 'class': '三班', grade: '一年级' },
    { gender: '女', count: 35, 'class': '三班', grade: '一年级' },
    { gender: '男', count: 30, 'class': '一班', grade: '二年级' },
    { gender: '女', count: 40, 'class': '一班', grade: '二年级' },
    { gender: '男', count: 25, 'class': '二班', grade: '二年级' },
    { gender: '女', count: 32, 'class': '二班', grade: '二年级' },
    { gender: '男', count: 28, 'class': '三班', grade: '二年级' },
    { gender: '女', count: 36, 'class': '三班', grade: '二年级' },
];
var views = function (view, facet) {
    var data = facet.data;
    var dv = new DataView();
    dv.source(data).transform({
        type: 'percent',
        field: 'count',
        dimension: 'gender',
        as: 'percent',
    });
    return {
        data: dv,
        scale: {
            dataKey: 'percent',
            formatter: '.2%',
        },
        series: {
            quickType: 'stackBar',
            position: 'percent',
            color: 'gender',
        }
    };
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = sourceData;
        this.line = { stroke: '#00a3d7' };
        this.padding = [60, 90, 80, 80];
        this.fields = ['grade', 'class'];
        this.views = views;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"400\" [data]=\"data\" [padding]=\"padding\">\n      <v-tooltip [showTitle]=\"false\"></v-tooltip>\n      <v-legend dataKey=\"cut\" position=\"top\"></v-legend>\n      <v-coord type=\"theta\"></v-coord>\n      <v-facet type=\"tree\" [fields]=\"fields\" [line]=\"line\" [lineSmooth]=\"true\" [views]=\"views\"></v-facet>\n    </v-chart>\n  </div>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
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
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.default = AppModule;
//# sourceMappingURL=angular.js.map