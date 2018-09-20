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
    { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
    { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
    { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
    { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' },
    { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' },
    { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' },
    { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' },
    { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' },
    { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
    { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
    { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
    { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: 'United States' },
    { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' },
    { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
    { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' },
];
var scale = [{
        dataKey: 'x',
        alias: 'Daily fat intake',
        tickInterval: 5,
        nice: false,
        max: 96,
        min: 62,
    }, {
        dataKey: 'y',
        alias: 'Daily sugar intake',
        tickInterval: 50,
        nice: false,
        max: 165,
        min: 0,
    }, {
        dataKey: 'z',
        alias: 'Obesity(adults) %',
    }];
var plotBackground = {
    stroke: '#ccc',
    lineWidth: 1,
};
var axis1Opts = {
    dataKey: 'x',
    label: {
        formatter: function (val) {
            return val + ' gr';
        },
    },
    grid: {
        lineStyle: {
            stroke: '#d9d9d9',
            lineWidth: 1,
            lineDash: [2, 2],
        },
    },
};
var axis2Opts = {
    dataKey: 'y',
    title: {
        offset: 64,
    },
    label: {
        formatter: function (val) {
            if (val > 0) {
                return val + ' gr';
            }
        },
    }
};
var pointOpts = {
    position: 'x*y',
    color: '#1890ff',
    size: ['z', [10, 40]],
    label: ['name*country', {
            offset: 0,
            textStyle: {
                fill: '#1890FF',
            },
        }],
    opacity: 0.3,
    shape: 'circle',
    tooltip: 'x*y*z',
    style: {
        lineWidth: 1,
        stroke: '#1890ff',
    },
};
var guide1Opts = {
    type: 'line',
    top: true,
    start: [65, 'min'],
    end: [65, 'max'],
    text: {
        content: 'Safe fat intake 65g/day',
        position: 'end',
        autoRotate: false,
        style: {
            textAlign: 'start',
        },
    },
};
var guide2Opts = {
    type: 'line',
    top: true,
    start: ['min', 50],
    end: ['max', 50],
    text: {
        content: 'Safe sugar intake 50g/day',
        position: 'end',
        style: {
            textAlign: 'end',
        },
    },
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = data;
        this.scale = scale;
        this.plotBackground = plotBackground;
        this.axis1Opts = axis1Opts;
        this.axis2Opts = axis2Opts;
        this.pointOpts = pointOpts;
        this.guide1Opts = guide1Opts;
        this.guide2Opts = guide2Opts;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\" [scale]=\"scale\" [plotBackground]=\"plotBackground\">\n      <v-tooltip title=\"country\"></v-tooltip>\n      <v-axis [dataKey]=\"axis1Opts.dataKey\" [label]=\"axis1Opts.label\" [grid]=\"axis1Opts.grid\"></v-axis>\n      <v-axis [dataKey]=\"axis2Opts.dataKey\" [title]=\"axis2Opts.title\" [label]=\"axis2Opts.label\"></v-axis>\n      <v-point [position]=\"pointOpts.position\" [color]=\"pointOpts.color\" [size]=\"pointOpts.size\" [label]=\"pointOpts.label\" [opacity]=\"pointOpts.opacity\" [shape]=\"pointOpts.shape\" [tooltip]=\"pointOpts.tooltip\" [style]=\"pointOpts.style\"></v-point>\n      <v-guide [type]=\"guide1Opts.type\" [top]=\"guide1Opts.top\" [start]=\"guide1Opts.start\" [end]=\"guide1Opts.end\" [text]=\"guide1Opts.text\"></v-guide>\n      <v-guide [type]=\"guide2Opts.type\" [top]=\"guide2Opts.top\" [start]=\"guide2Opts.start\" [end]=\"guide2Opts.end\" [text]=\"guide2Opts.text\"></v-guide>\n    </v-chart>\n  </div>\n  "
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