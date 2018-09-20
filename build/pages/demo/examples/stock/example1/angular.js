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
var scale1 = [{
        dataKey: 'time',
        type: 'timeCat',
        nice: false,
        range: [0, 1]
    }, {
        dataKey: 'trend',
        values: ['上涨', '下跌'],
    }, {
        dataKey: 'volumn',
        alias: '成交量'
    }, {
        dataKey: 'start',
        alias: '开盘价'
    }, {
        dataKey: 'end',
        alias: '收盘价'
    }, {
        dataKey: 'max',
        alias: '最高价'
    }, {
        dataKey: 'min',
        alias: '最低价'
    }, {
        dataKey: 'range',
        alias: '股票价格'
    }];
var scale2 = [{
        dataKey: 'volumn',
        tickCount: 2
    }];
var tooltipOpts = {
    showTitle: false,
    itemTpl: '<li data-index={index}>'
        + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
        + '{name}{value}</li>',
};
var candleOpts = {
    color: ['trend', function (val) {
            if (val === '上涨') {
                return '#f04864';
            }
            if (val === '下跌') {
                return '#2fc25b';
            }
        }],
    tooltip: ['time*start*end*max*min', function (time, start, end, max, min) {
            return {
                name: time,
                value: '<br><span style="padding-left: 16px">开盘价：' + start + '</span><br/>'
                    + '<span style="padding-left: 16px">收盘价：' + end + '</span><br/>'
                    + '<span style="padding-left: 16px">最高价：' + max + '</span><br/>'
                    + '<span style="padding-left: 16px">最低价：' + min + '</span>'
            };
        }],
};
var axis1Opts = {
    label: {
        formatter: function (val) {
            return parseInt(String(val / 1000), 10) + 'k';
        }
    }
};
var barOpts = {
    color: ['trend', function (val) {
            if (val === '上涨') {
                return '#f04864';
            }
            if (val === '下跌') {
                return '#2fc25b';
            }
        }],
    tooltip: ['time*volumn', function (time, volumn) {
            return {
                name: time,
                value: '<br/><span style="padding-left: 16px">成交量：' + volumn + '</span><br/>'
            };
        }]
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 600;
        this.data = [];
        this.dv = [];
        this.scale1 = scale1;
        this.scale2 = scale2;
        this.start = '2015-07-07';
        this.end = '2015-07-28';
        this.tooltipOpts = tooltipOpts;
        this.candleOpts = candleOpts;
        this.axis1Opts = axis1Opts;
        this.barOpts = barOpts;
        this.scales = {
            time: {
                type: 'timeCat',
                nice: false,
            }
        };
        this.getData = function () {
            var _a = _this, start = _a.start, end = _a.end, data = _a.data;
            var ds = new DataSet({
                state: {
                    start: start,
                    end: end,
                }
            });
            var dv = ds.createView();
            dv.source(data)
                .transform({
                type: 'filter',
                callback: function (obj) {
                    var date = obj.time;
                    return date <= end && date >= start;
                }
            })
                .transform({
                type: 'map',
                callback: function (obj) {
                    obj.trend = (obj.start <= obj.end) ? '上涨' : '下跌';
                    obj.range = [obj.start, obj.end, obj.max, obj.min];
                    return obj;
                }
            });
            return dv;
        };
        this.slideChange = function (opts) {
            _this.start = opts.startText;
            _this.end = opts.endText;
            _this.dv = _this.getData();
        };
        $.getJSON('/assets/data/candle-sticks.json', function (sourceData) {
            _this.data = sourceData;
            _this.dv = _this.getData();
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div *ngIf=\"data.length\">\n    <v-chart [forceFit]=\"forceFit\" [height]=\"400\" [animate]=\"false\" [padding]=\"[ 10, 40, 40, 40 ]\"\n      [data]=\"dv\" [scale]=\"scale1\">\n      <v-tooltip [showTitle]=\"tooltipOpts.showTitle\" [itemTpl]=\"tooltipOpts.itemTpl\"></v-tooltip>\n      <v-axis></v-axis>\n      <v-legend [offset]=\"20\"></v-legend>\n      <v-view [data]=\"dv\" [end]=\"{x: 1, y: 0.5}\">\n        <v-candle position=\"time*range\" [color]=\"candleOpts.color\" [tooltip]=\"candleOpts.tooltip\"></v-candle>\n      </v-view>\n      <v-view [data]=\"dv\" [scale]=\"scale2\" [start]=\"{x: 0, y: 0.65}\" >\n        <v-axis dataKey=\"time\" [tickLine]=\"null\" [label]=\"null\"></v-axis>\n        <v-axis dataKey=\"volumn\" [label]=\"axis1Opts.label\"></v-axis>\n        <v-bar position=\"time*volumn\" [color]=\"barOpts.color\" [tooltip]=\"barOpts.tooltip\"></v-bar>\n      </v-view>\n    </v-chart>\n    <v-plugin>\n      <v-slider [width]=\"'auto'\" [height]=\"26\"\n        [padding]=\"[ 20, 40, 20, 40 ]\" [start]=\"start\" [end]=\"end\" [data]=\"data\"\n        [xAxis]=\"'time'\" [yAxis]=\"'volumn'\" [scales]=\"scales\" [onChange]=\"this.slideChange\"\n      ></v-slider>\n    </v-plugin>\n  </div>\n  "
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