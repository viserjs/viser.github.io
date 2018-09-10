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
var DataView = DataSet.DataView;
var scale = [{
        dataKey: 'time',
        type: 'time',
        tickCount: 10,
        mask: 'M/DD H:mm'
    }];
var facetOpts = {
    views: function (view, facet) {
        var colValue = facet.colValue, data = facet.data;
        var color;
        var alias;
        if (colValue === 'rain') {
            color = '#1890ff';
            alias = '降雨量(mm)';
        }
        else if (colValue === 'flow') {
            color = '#2FC25B';
            alias = '流量(m^3/s)';
        }
        return {
            data: data,
            scale: [{
                    dataKey: colValue,
                    alias: alias,
                }],
            series: [{
                    quickType: 'line',
                    position: "time*" + colValue,
                    color: color,
                }]
        };
    }
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 600;
        this.data = [];
        this.scale = scale;
        this.originDv = [];
        this.chartDv = [];
        this.start = '2009/7/20 0:00';
        this.end = '2009/7/25 0:00';
        this.facetOpts = facetOpts;
        this.scales = {
            time: {
                type: 'time',
                tickCount: 10,
                mask: 'M/DD H:mm'
            }
        };
        this.getData = function () {
            var _a = _this, start = _a.start, end = _a.end, data = _a.data;
            var startTime = new Date(start).getTime();
            var endTime = new Date(end).getTime();
            var ds = new DataSet({
                state: {
                    start: start,
                    end: end,
                }
            });
            var originDv = ds.createView();
            originDv.source(data)
                .transform({
                type: 'fold',
                fields: ['rain', 'flow'],
                key: 'type',
                value: 'value',
                retains: ['rain', 'flow', 'time']
            });
            var chartDv = ds.createView();
            chartDv.source(originDv)
                .transform({
                type: 'fold',
                fields: ['rain', 'flow'],
                key: 'type',
                value: 'value',
                retains: ['rain', 'flow', 'time']
            })
                .transform({
                type: 'filter',
                callback: function (obj) {
                    var time = new Date(obj.time).getTime(); // !注意：时间格式，建议转换为时间戳进行比较
                    return time >= startTime && time <= endTime;
                }
            });
            return { originDv: originDv, chartDv: chartDv };
        };
        this.slideChange = function (opts) {
            _this.start = opts.startValue;
            _this.end = opts.endValue;
            var data = _this.getData();
            _this.originDv = data.originDv;
            _this.chartDv = data.chartDv;
        };
        $.getJSON('/assets/data/rain-flow.json', function (sourceData) {
            _this.data = sourceData;
            var data = _this.getData();
            _this.originDv = data.originDv;
            _this.chartDv = data.chartDv;
            console.log(_this);
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div *ngIf=\"data.length\">\n    <v-chart [forceFit]=\"forceFit\" [height]=\"400\" [animate]=\"false\" [padding]=\"[ 20, 20, 0, 80]\"\n      [data]=\"chartDv\" [scale]=\"scale\">\n      <v-axis></v-axis>\n      <v-facet type=\"mirror\" [fields]=\"['type']\" [showTitle]=\"false\" [padding]=\"[ 0, 0, 40, 0]\" [views]=\"facetOpts.views\"></v-facet>\n    </v-chart>\n    <v-plugin>\n      <v-slider width=\"auto\" [height]=\"26\"\n        [start]=\"start\" [end]=\"end\" [data]=\"originDv\"\n        [xAxis]=\"'time'\" [yAxis]=\"'value'\" [scales]=\"scales\"\n        [backgroundChart]=\"{\n          type: 'line'\n        }\"\n        [onChange]=\"this.slideChange\"\n      ></v-slider>\n    </v-plugin>\n  </div>\n  "
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