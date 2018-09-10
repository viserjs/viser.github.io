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
var expectData = [
    { value: 100, name: '展现' },
    { value: 80, name: '点击' },
    { value: 60, name: '访问' },
    { value: 40, name: '咨询' },
    { value: 30, name: '订单' },
];
var actualData = [
    { value: 80, name: '展现' },
    { value: 50, name: '点击' },
    { value: 30, name: '访问' },
    { value: 10, name: '咨询' },
    { value: 5, name: '订单' },
];
var tooltipOpts = {
    showTitle: false,
    itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
};
var pyramidOpts = {
    position: 'name*value',
    color: ['name', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF']],
    label: ['name', {
            offset: 35,
            labelLine: {
                lineWidth: 1,
                stroke: 'rgba(0, 0, 0, 0.15)',
            }
        }],
    tooltip: ['name*value', function (name, value) {
            return {
                name: '预期' + name,
                value: value,
            };
        }],
    opacity: 0.65,
};
var pyramidOpts1 = {
    quickType: 'pyramid',
    position: 'name*value',
    color: ['name', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF']],
    tooltip: ['name*value', function (name, value) {
            return {
                name: '实际' + name,
                value: value,
            };
        }],
    style: {
        lineWidth: 1,
        stroke: '#fff',
    },
    opacity: 1,
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.showTitle = false;
        this.expectData = expectData;
        this.actualData = actualData;
        this.tooltipOpts = tooltipOpts;
        this.pyramidOpts = pyramidOpts;
        this.pyramidOpts1 = pyramidOpts1;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"expectData\">\n      <v-tooltip [showTitle]=\"false\" [itemTpl]=\"tooltipOpts.itemTpl\"></v-tooltip>\n      <v-coord type=\"rect\" direction=\"LT\"></v-coord>\n      <v-pyramid [position]=\"pyramidOpts.position\" [color]=\"pyramidOpts.color\"\n          [label]=\"pyramidOpts.label\" [tooltip]=\"pyramidOpts.tooltip\" [opacity]=\"pyramidOpts.opacity\"></v-pyramid>\n      <v-view [data]=\"actualData\">\n        <v-tooltip></v-tooltip>\n        <v-coord type=\"rect\" direction=\"LT\"></v-coord>\n        <v-pyramid [position]=\"pyramidOpts1.position\" [color]=\"pyramidOpts1.color\"\n          [style]=\"pyramidOpts1.style\" [tooltip]=\"pyramidOpts1.tooltip\" [opacity]=\"pyramidOpts1.opacity\"></v-pyramid>\n      </v-view>\n    </v-chart>\n  </div>\n  "
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