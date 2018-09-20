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
viser_ng_1.registerShape('polygon', 'custom', {
    draw: function (cfg, container) {
        var points = this.parsePoints(cfg.points);
        var startX = points[1].x;
        var startY = points[1].y;
        var size = cfg.size || 1;
        var width = (points[2].x - points[1].x);
        var height = Math.abs(points[1].y - points[0].y);
        // 绘制背景
        container.addShape('rect', {
            attrs: {
                x: startX,
                y: startY,
                width: width,
                height: height
            }
        });
        // 绘制色块
        return container.addShape('rect', {
            attrs: {
                x: startX,
                y: startY,
                width: width * size,
                height: height,
                fill: cfg.color,
                stroke: '#fff'
            }
        });
    }
});
// 模拟各个系统的单元测试覆盖率数据
var data = [];
// 生成数据
for (var i = 0; i < 15; i++) {
    var name_1 = '系统' + i;
    var value = Math.random() * 90;
    for (var j = 1; j < 10; j++) {
        var obj = {};
        obj.name = name_1;
        obj.value = (value + Math.random() * 10) / 100;
        obj.time = '10-0' + j;
        data.push(obj);
    }
}
var scale = [{
        dataKey: 'time',
        type: 'cat'
    }, {
        dataKey: 'value',
        alias: '覆盖率',
        type: 'linear',
        formatter: function (value) {
            return (value * 100).toFixed(2) + '%';
        },
        min: 0,
        max: 1
    }];
var itemFormatter = function (val) {
    return val.slice(0, val.indexOf('.')) + '%';
};
var polygonOpts = {
    color: ['value', 'rgb(215, 25, 28)-rgb(231, 104, 24)-rgb(242, 158, 46)-rgb(249, 208, 87)-rgb(255, 255, 140)-rgb(144, 235, 157)-rgb(0, 204, 188)-rgb(0, 166, 202)-rgb(44, 123, 182)'],
    size: ['value', function (size) {
            return size;
        }],
    style: {
        lineWidth: 1,
        stroke: '#fff'
    },
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = data;
        this.scale = scale;
        this.itemFormatter = itemFormatter;
        this.polygonOpts = polygonOpts;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"[ 20, 80, 150 ]\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip></v-tooltip>\n      <v-legend [slidable]=\"false\" [itemFormatter]=\"itemFormatter\"></v-legend>\n      <v-axis dataKey=\"name\" [grid]=\"null\"></v-axis>\n      <v-axis dataKey=\"time\" [line]=\"null\" [tickLine]=\"null\"></v-axis>\n      <v-polygon position=\"time*name\"\n        [color]=\"polygonOpts.color\"\n        [size]=\"polygonOpts.size\"\n        shape=\"custom\"\n        [style]=\"polygonOpts.style\"\n        ></v-polygon>\n    </v-chart>\n  </div>\n  "
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