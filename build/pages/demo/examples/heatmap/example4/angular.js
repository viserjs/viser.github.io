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
viser_ng_1.registerShape('polygon', 'boundary-polygon', {
    draw: function (cfg, container) {
        if (cfg.points && cfg.points.length) {
            var attrs = {
                stroke: '#fff',
                lineWidth: 1,
                fill: cfg.color,
                fillOpacity: cfg.opacity
            };
            var points = cfg.points;
            var path = [
                ['M', points[0].x, points[0].y],
                ['L', points[1].x, points[1].y],
                ['L', points[2].x, points[2].y],
                ['L', points[3].x, points[3].y],
                ['Z']
            ];
            attrs.path = this.parsePath(path);
            var polygon = container.addShape('path', {
                attrs: attrs
            });
            if (cfg.origin._origin.lastWeek) {
                var linePath = [
                    ['M', points[2].x, points[2].y],
                    ['L', points[3].x, points[3].y],
                ];
                // 最后一周的多边形添加右侧边框
                container.addShape('path', {
                    zIndex: 1,
                    attrs: {
                        path: this.parsePath(linePath),
                        lineWidth: 1,
                        stroke: '#404040'
                    }
                });
                if (cfg.origin._origin.lastDay) {
                    container.addShape('path', {
                        zIndex: 1,
                        attrs: {
                            path: this.parsePath([
                                ['M', points[1].x, points[1].y],
                                ['L', points[2].x, points[2].y],
                            ]),
                            lineWidth: 1,
                            stroke: '#404040'
                        }
                    });
                }
            }
            container.sort();
            return polygon;
        }
    }
});
var scale = [{
        dataKey: 'day',
        type: 'cat',
        values: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    }, {
        dataKey: 'week',
        type: 'cat'
    }, {
        dataKey: 'commits',
        sync: true
    }];
var axis1Opts = {
    dataKey: 'week',
    position: 'top',
    tickLine: null,
    line: null,
    label: {
        offset: 12,
        textStyle: {
            fontSize: 12,
            fill: '#666',
            textBaseline: 'top'
        },
        formatter: function (val) {
            if (val === '2') {
                return 'MAY';
            }
            else if (val === '6') {
                return 'JUN';
            }
            else if (val === '10') {
                return 'JUL';
            }
            else if (val === '15') {
                return 'AUG';
            }
            else if (val === '19') {
                return 'SEP';
            }
            else if (val === '24') {
                return 'OCT';
            }
            return '';
        }
    }
};
var axis2Opts = {
    dataKey: 'day',
    grid: null,
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
        this.seriesOpts = {
            color: ['commits', '#BAE7FF-#1890FF-#0050B3'],
            position: 'week*day*date',
            shape: 'boundary-polygon',
        };
        $.getJSON('/assets/data/heatmap-6.json', function (data) {
            _this.data = data;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip showTitle=\"false\"></v-tooltip>\n      <v-axis [dataKey]=\"axis1Opts.dataKey\" [position]=\"axis1Opts.position\" [tickLine]=\"axis1Opts.tickLine\" [line]=\"axis1Opts.line\" [label]=\"axis1Opts.label\"></v-axis>\n      <v-axis [dataKey]=\"axis2Opts.dataKey\" [grid]=\"axis2Opts.grid\"></v-axis>\n      <v-coord type=\"rect\" direction=\"TL\"></v-coord>\n      <v-polygon [position]=\"seriesOpts.position\" [color]=\"seriesOpts.color\" [shape]=\"seriesOpts.shape\"></v-polygon>\n    </v-chart>\n  </div>\n  "
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