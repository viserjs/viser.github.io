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
var scale = [{
        dataKey: 'year',
        tickInterval: 10
    }];
var legendOpts = {
    useHtml: true,
    position: 'right',
    legendMarker: {
        'g2-legend-marker': {
            borderRadius: 'none'
        },
        'g2-legend-title': {
            fontSize: '12px',
            fontWeight: 500,
            margin: 0,
            color: '#ff8800'
        }
    }
};
var axisOpts = {
    dataKey: 'count',
    line: {
        lineWidth: 1,
        stroke: '#BFBFBF'
    },
    tickLine: {
        length: 8,
        stroke: '#ddd'
    },
    grid: null
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 400;
        this.data = [];
        this.legendOpts = legendOpts;
        this.axisOpts = axisOpts;
        $.getJSON('/assets/data/baby-names.json', function (sourceData) {
            var dv = new DataSet.View().source(sourceData)
                .transform({
                type: 'fill-rows',
                groupBy: ['name'],
                orderBy: ['year']
            })
                .transform({
                type: 'impute',
                field: 'n',
                method: 'value',
                value: 0
            })
                .transform({
                type: 'aggregate',
                fields: ['n'],
                operations: ['sum'],
                groupBy: ['year', 'name'],
                orderBy: ['year'],
                as: ['count']
            });
            _this.data = dv.rows;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [animate]=\"false\" [height]=\"height\" [padding]=\"[20, 140, 60, 50]\" [data]=\"data\" [scale]=\"scale\">\n      <v-legend [position]=\"legendOpts.position\" [useHtml]=\"legendOpts.useHtml\" [legendMarker]=\"legendOpts.legendMarker\"></v-legend>\n      <v-axis [dataKey]=\"axisOpts.dataKey\" [line]=\"axisOpts.line\"\n        [tickLine]=\"axisOpts.tickLine\" [grid]=\"axisOpts.grid\"></v-axis>\n      <v-area position=\"year*count\" [adjust]=\"['stack', 'symmetric']\"\n        color=\"name\" [opacity]=\"1\"></v-area>\n    </v-chart>\n  </div>\n  "
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