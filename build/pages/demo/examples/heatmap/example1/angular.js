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
var scale = [{
        dataKey: 'name',
        type: 'cat',
        values: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura'],
    }, {
        dataKey: 'day',
        type: 'cat',
        values: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    }];
var axis1Opts = {
    dataKey: 'name',
    tickLine: null,
    grid: {
        align: 'center',
        lineStyle: {
            lineWidth: 1,
            lineDash: null,
            stroke: '#f0f0f0',
        }
    }
};
var axis2Opts = {
    dataKey: 'day',
    title: null,
    grid: {
        align: 'center',
        lineStyle: {
            lineWidth: 1,
            lineDash: null,
            stroke: '#f0f0f0',
        },
        showFirstLine: true,
    }
};
var seriesOpts = {
    quickType: 'polygon',
    color: ['sales', '#BAE7FF-#1890FF-#0050B3'],
    position: 'name*day',
    label: ['sales', {
            offset: -2,
            textStyle: {
                fill: '#fff',
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, .45)',
            },
        }],
    style: {
        lineWidth: 1,
        stroke: '#fff',
    }
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 400;
        this.data = [];
        this.scale = scale;
        this.axis1Opts = axis1Opts;
        this.axis2Opts = axis2Opts;
        this.seriesOpts = seriesOpts;
        $.getJSON('/assets/data/heatmap-1.json', function (data) {
            var source = [];
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var obj = {};
                obj.name = item[0];
                obj.day = item[1];
                obj.sales = item[2];
                source.push(obj);
            }
            _this.data = source;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\" [scale]=\"scale\">\n      <v-legend></v-legend>\n      <v-tooltip></v-tooltip>\n      <v-axis [tickLine]=\"axis1Opts.tickLine\" [grid]=\"axis1Opts.grid\"></v-axis>\n      <v-axis [tickLine]=\"axis2Opts.tickLine\" [grid]=\"axis2Opts.grid\"></v-axis>\n      <v-polygon [position]=\"seriesOpts.position\" [color]=\"seriesOpts.color\" [label]=\"seriesOpts.label\" [style]=\"seriesOpts.style\"></v-polygon>\n    </v-chart>\n  </div>\n  "
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