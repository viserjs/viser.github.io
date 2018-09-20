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
var data = [
    { "title": "Revenue", "subtitle": "US$, in thousands", "ranges": [150, 225, 300], "actual": 270, "target": 250 },
    { "title": "Profit", "subtitle": "%", "ranges": [20, 25, 30], "actual": 23, "target": 26 },
    { "title": "Order Size", "subtitle": "US$, average", "ranges": [350, 500, 600], "actual": 100, "target": 550 },
    { "title": "New Customers", "subtitle": "count", "ranges": [1400, 2000, 2500], "actual": 1650, "target": 2100 },
    { "title": "Satisfaction", "subtitle": "out of 5", "ranges": [3.5, 4.25, 5], "actual": 3.2, "target": 4.4 }
];
var scale = [{
        dataKey: 'population',
        tickInterval: 1000000,
    }];
var colorMap = {
    'Under 5 Years': '#E3F4BF',
    '5 to 13 Years': '#BEF7C8',
    '14 to 17 Years': '#86E6C8',
    '18 to 24 Years': '#36CFC9',
    '25 to 44 Years': '#209BDD',
    '45 to 64 Years': '#1581E6',
    '65 Years and Over': '#0860BF'
};
var legendItems = [
    {
        value: '差',
        marker: { symbol: 'square', fill: '#FFA39E', radius: 5 }
    },
    {
        value: '良',
        marker: { symbol: 'square', fill: '#FFD591', radius: 5 }
    },
    {
        value: '优',
        marker: { symbol: 'square', fill: '#A7E8B4', radius: 5 }
    },
    {
        value: '实际值',
        marker: { symbol: 'square', fill: '#223273', radius: 5 }
    },
    {
        value: '目标值',
        marker: {
            symbol: 'line',
            stroke: '#262626',
            radius: 5
        }
    },
];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = data;
        this.scale = scale;
        this.colorMap = colorMap;
        this.legendItems = legendItems;
        this.y = 0;
        this.yGap = 0.1;
    }
    AppComponent.prototype.getStart = function (i) {
        var _a = this, y = _a.y, yGap = _a.yGap;
        return { x: 0, y: y + i * yGap + i * 0.125 };
    };
    AppComponent.prototype.getEnd = function (i) {
        var _a = this, y = _a.y, yGap = _a.yGap;
        return { x: 1, y: y + (i + 1) * yGap + i * 0.125 };
    };
    AppComponent.prototype.getScale = function (item, i) {
        var ranges = item.ranges;
        return [{
                dataKey: 'actual',
                min: 0,
                max: ranges[2],
                nice: false
            }, {
                dataKey: 'target',
                min: 0,
                max: ranges[2],
                nice: false
            }];
    };
    AppComponent.prototype.getGuide = function (viewData, guideIndex, position) {
        var ranges = viewData.ranges;
        var guide = [
            { start: [-1, 0], end: [1, ranges[0]] },
            { start: [-1, ranges[0]], end: [1, ranges[1]] },
            { start: [-1, ranges[1]], end: [1, ranges[2]] }
        ];
        return guide[guideIndex][position];
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"[100, 150]\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip></v-tooltip>\n      <v-legend [custom]=\"true\" [clickable]=\"false\" [items]=\"legendItems\" ></v-legend>\n      <v-view *ngFor=\"let item of data; let i = index;\" [start]=\"getStart(i)\" [end]=\"getEnd(i)\"\n        [data]=\"[item]\" [scale]=\"this.getScale(item, i)\">\n        <v-coord type=\"rect\" direction='LB'></v-coord>\n        <v-axis dataKey=\"target\" [show]=\"false\"></v-axis>\n        <v-axis dataKey=\"actual\" position=\"right\"></v-axis>\n        <v-point position=\"title*target\" color=\"#square\" shape=\"line\" [size]=\"12\" [style]=\"{lineWidth: 2}\"></v-point>\n        <v-interval position=\"title*actual\" color=\"#223273\" [size]=\"15\"></v-interval>\n        <v-guide type=\"region\" [start]=\"this.getGuide(item, 0, 'start')\" [end]=\"this.getGuide(item, 0, 'end')\"\n          [style]=\"{\n            fill: '#FFA39E',\n            fillOpacity: 0.85\n          }\"></v-guide>\n        <v-guide type=\"region\" [start]=\"this.getGuide(item, 1, 'start')\" [end]=\"this.getGuide(item, 1, 'end')\"\n          [style]=\"{\n            fill: '#FFD591',\n            fillOpacity: 0.85\n          }\"></v-guide>\n        <v-guide type=\"region\" [start]=\"this.getGuide(item, 2, 'start')\" [end]=\"this.getGuide(item, 2, 'end')\"\n          [style]=\"{\n            fill: '#A7E8B4',\n            fillOpacity: 0.85\n          }\"></v-guide>\n      </v-view>\n\n    </v-chart>\n  </div>\n  "
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