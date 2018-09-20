"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
function getFillAttrs(cfg) {
    var attrs = __assign({
        fill: cfg.color,
        fillOpacity: cfg.opacity
    }, cfg.style);
    return attrs;
}
function getRectPath(points) {
    var path = [];
    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        if (point) {
            var action = i === 0 ? 'M' : 'L';
            path.push([action, point.x, point.y]);
        }
    }
    var first = points[0];
    path.push(['L', first.x, first.y]);
    path.push(['z']);
    return path;
}
viser_ng_1.registerShape('interval', 'top', {
    draw: function (cfg, container) {
        var attrs = getFillAttrs(cfg);
        var path = getRectPath(cfg.points);
        path = this.parsePath(path); // 将 0 - 1 的值转换为画布坐标
        var radius = (path[2][1] - path[1][1]) / 2;
        var temp = [];
        temp.push(['M', path[0][1], path[0][2]]);
        temp.push(['L', path[1][1], path[1][2] + radius]);
        temp.push(['A', radius, radius, 90, 0, 1, path[1][1] + radius, path[1][2]]);
        temp.push(['L', path[2][1] - radius, path[2][2]]);
        temp.push(['A', radius, radius, 90, 0, 1, path[2][1], path[2][2] + radius]);
        temp.push(['L', path[3][1], path[3][2]]);
        temp.push(['Z']);
        return container.addShape('path', {
            attrs: __assign({}, attrs, {
                path: temp,
            })
        });
    }
});
viser_ng_1.registerShape('interval', 'bottom', {
    draw: function (cfg, container) {
        var attrs = getFillAttrs(cfg);
        var path = getRectPath(cfg.points);
        path = this.parsePath(path);
        var radius = (path[2][1] - path[1][1]) / 2;
        var temp = [];
        temp.push(['M', path[0][1] + radius, path[0][2]]);
        temp.push(['A', radius, radius, 90, 0, 1, path[0][1], path[0][2] - radius]);
        temp.push(['L', path[1][1], path[1][2]]);
        temp.push(['L', path[2][1], path[2][2]]);
        temp.push(['L', path[3][1], path[3][2] - radius]);
        temp.push(['A', radius, radius, 90, 0, 1, path[3][1] - radius, path[3][2]]);
        temp.push(['Z']);
        return container.addShape('path', {
            attrs: __assign({}, attrs, {
                path: temp,
            })
        });
    }
});
var data = [
    { year: '2014', type: 'Sales', sales: 1000 },
    { year: '2015', type: 'Sales', sales: 1170 },
    { year: '2016', type: 'Sales', sales: 660 },
    { year: '2017', type: 'Sales', sales: 1030 },
    { year: '2014', type: 'Expenses', sales: 400 },
    { year: '2015', type: 'Expenses', sales: 460 },
    { year: '2016', type: 'Expenses', sales: 1120 },
    { year: '2017', type: 'Expenses', sales: 540 },
    { year: '2014', type: 'Profit', sales: 300 },
    { year: '2015', type: 'Profit', sales: 300 },
    { year: '2016', type: 'Profit', sales: 300 },
    { year: '2017', type: 'Profit', sales: 350 }
];
var scale = [{
        dataKey: 'sales',
        max: 2400,
        tickInterval: 600
    }];
var axis1Opts = {
    dataKey: 'year',
    label: {
        textStyle: {
            fontFamily: 'Monospace',
            fontWeight: 700,
            fontSize: 14,
            fill: '#545454'
        }
    },
    grid: {
        lineStyle: {
            lineDash: [0, 0],
            stroke: '#545454'
        }
    }
};
var axis2Opts = {
    dataKey: 'sales',
    label: {
        textStyle: {
            fontFamily: 'Monospace',
            fontWeight: 700,
            fontSize: 14,
            fill: '#545454'
        }
    },
    grid: {
        lineStyle: {
            lineDash: [0, 0],
            stroke: '#545454'
        }
    },
    line: null,
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = data;
        this.scale = scale;
        this.axis1Opts = axis1Opts;
        this.axis2Opts = axis2Opts;
        this.shape = ['type', function (val) {
                if (val === 'Profit') { // 顶部圆角
                    return 'bottom';
                }
                else if (val === 'Sales') { // 底部圆角
                    return 'top';
                }
                else {
                    return; // 其他默认
                }
            }];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"[20, 80, 80, 80]\" [data]=\"data\" [scale]=\"scale\">\n      <v-legend ></v-legend>\n      <v-axis [dataKey]=\"axis1Opts.dataKey\" [grid]=\"axis1Opts.grid\" [label]=\"axis1Opts.label\"></v-axis>\n      <v-axis [dataKey]=\"axis2Opts.dataKey\" [grid]=\"axis2Opts.grid\" [label]=\"axis2Opts.label\" [line]=\"axis2Opts.line\"></v-axis>\n      <v-stack-interval position=\"year*sales\" color=\"type\" size=\"35\"\n        [shape]=\"shape\"\n        [style]=\"{\n          stroke: '#545454',\n          lineWidth: 2\n        }\" ></v-stack-interval>\n    </v-chart>\n  </div>\n  "
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