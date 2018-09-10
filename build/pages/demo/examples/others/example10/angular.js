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
viser_ng_1.registerShape('interval', 'burstPie', {
    getPoints: function (cfg) {
        var width = cfg.size;
        var x = cfg.x;
        var min = cfg.y[0];
        var max = cfg.y[1];
        var res = [];
        for (var i = 0; i < max; i += 0.1) {
            if (min > i) {
                continue;
            }
            else if (min < i && min > i - 0.1) {
                res.push({ x: x - width / 2, y: min }, { x: x - width / 2, y: i - 0.01 }, { x: x + width / 2, y: i - 0.01 }, { x: x + width / 2, y: min });
            }
            var start = i;
            var end = parseFloat((i + 0.1) > max ? max : i + 0.09);
            res.push({ x: x - width / 2, y: start }, { x: x - width / 2, y: end }, { x: x + width / 2, y: end }, { x: x + width / 2, y: start });
        }
        return res;
    },
    draw: function (cfg, container) {
        // 将归一化后的数据转换为画布上的坐标
        var points = cfg.origin.points;
        var path = [];
        for (var i = 0; i < cfg.origin.points.length; i += 4) {
            path.push(['M', points[i].x, points[i].y]);
            path.push(['L', points[i + 1].x, points[i + 1].y]);
            path.push(['L', points[i + 2].x, points[i + 2].y]);
            path.push(['L', points[i + 3].x, points[i + 3].y]);
            path.push(['L', points[i].x, points[i].y]);
            path.push(['z']);
        }
        path = this.parsePath(path, true);
        var shape = container.addShape('path', {
            attrs: {
                fill: cfg.color || '#00D9DF',
                path: path,
            },
        });
        return shape;
    }
});
var data = [
    { value: 0.5, key: '男' },
    { value: 0.4, key: '女' },
    { value: 0.1, key: '未知' },
];
var dv = new DataSet.View().source(data).transform({
    type: 'percent',
    field: 'value',
    dimension: 'key',
    as: 'percent'
});
var scale = [{
        dataKey: 'percent',
        formatter: function (val) {
            return val * 100 + '%';
        }
    }];
var stackInterval1Opts = {
    shape: 'burstPie',
    position: 'percent',
    color: ['key', ['#1890ff', '#f04864', '#bfbfbf']],
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.dv = dv;
        this.scale = scale;
        this.stackInterval1Opts = stackInterval1Opts;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"80\" [data]=\"dv\" [scale]=\"scale\">\n      <v-tooltip [showTitle]=\"false\"></v-tooltip>\n      <v-coord type=\"theta\" [radius]=\"0.8\" [innerRadius]=\"0.7\"></v-coord>\n      <v-axis dataKey=\"percent\" [title]=\"{offset: 40, text: '\u767E\u5206\u6BD4'}\"></v-axis>\n      <v-legend dataKey=\"percent\"></v-legend>\n      <v-stack-interval [shape]=\"stackInterval1Opts.shape\" [position]=\"stackInterval1Opts.position\"\n        [color]=\"stackInterval1Opts.color\"></v-stack-interval>\n    </v-chart>\n  </div>\n  "
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