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
viser_ng_1.registerShape('point', 'pointer', {
    draw: function (cfg, container) {
        var point = cfg.points[0]; // 获取第一个标记点
        point = this.parsePoint(point);
        var center = this.parsePoint({
            x: 0,
            y: 0
        });
        // 绘制指针
        container.addShape('line', {
            attrs: {
                x1: center.x,
                y1: center.y,
                x2: point.x,
                y2: point.y + 15,
                stroke: cfg.color,
                lineWidth: 5,
                lineCap: 'round'
            }
        });
        return container.addShape('circle', {
            attrs: {
                x: center.x,
                y: center.y,
                r: 9.75,
                stroke: cfg.color,
                lineWidth: 4.5,
                fill: '#fff'
            }
        });
    }
});
var scale = [{
        dataKey: 'value',
        min: 0,
        max: 9,
        ticks: [2.25, 3.75, 5.25, 6.75],
        nice: false
    }];
var data = [
    { value: 6 }
];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = data;
        this.scale = scale;
        this.axisLabel = {
            offset: -20,
            formatter: function (val) {
                if (val === '2.25') {
                    return '差';
                }
                else if (val === '3.75') {
                    return '中';
                }
                else if (val === '5.25') {
                    return '良';
                }
                return '优';
            },
            textStyle: {
                fontSize: 18,
                textAlign: 'center'
            }
        };
        this.lineGuide1Start = [3, 0.905];
        this.lineGuide1End = [3.0035, 0.85];
        this.lineGuide1LineStyle = {
            stroke: '#19AFFA',
            lineDash: null,
            lineWidth: 3
        };
        this.lineGuide2Start = [4.5, 0.905];
        this.lineGuide2End = [4.5, 0.85];
        this.lineGuide2LineStyle = {
            stroke: '#19AFFA',
            lineDash: null,
            lineWidth: 3
        };
        this.lineGuide3Start = [6, 0.905];
        this.lineGuide3End = [6.0035, 0.85];
        this.lineGuide3LineStyle = {
            stroke: '#19AFFA',
            lineDash: null,
            lineWidth: 3
        };
        this.arcGuide1Start = [0, 0.945];
        this.arcGuide1End = [9, 0.945];
        this.arcGuide1Style = {
            stroke: '#CBCBCB',
            lineWidth: 18,
        };
        this.arcGuide2Start = [0, 0.945];
        this.arcGuide2End = [data[0].value, 0.945];
        this.arcGuide2Style = {
            stroke: '#1890FF',
            lineWidth: 18,
        };
        this.htmlGuidePosition = ['50%', '95%'];
        this.htmlGuideHtml = "\n    <div style=\"width: 300px;text-align: center;\">\n      <p style=\"font-size: 20px;color: #545454;margin: 0;\">\u5408\u683C\u7387</p>\n      <p style=\"font-size: 36px;color: #545454;margin: 0;\">" + data[0].value * 10 + "%</p>\n    </div>\n  ";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\" [scale]=\"scale\">\n      <v-coord type=\"polar\" [startAngle]=\"-202.5\" [endAngle]=\"22.5\" [radius]=\"0.75\"></v-coord>\n      <v-axis\n        dataKey=\"value\"\n        [zIndex]=\"2\"\n        [line]=\"null\"\n        [label]=\"axisLabel\"\n        [tickLine]=\"null\"\n        [grid]=\"null\"\n      ></v-axis>\n      <v-axis dataKey=\"1\" [show]=\"false\"></v-axis>\n      <v-series\n        gemo=\"point\"\n        position=\"value*1\"\n        shape=\"pointer\"\n        color=\"#1890FF\"\n        [active]=\"false\"\n      ></v-series>\n      <v-guide\n        type=\"line\"\n        [start]=\"lineGuide1Start\"\n        [end]=\"lineGuide1End\"\n        [lineStyle]=\"lineGuide1LineStyle\"\n      ></v-guide>\n      <v-guide\n        type=\"line\"\n        [start]=\"lineGuide2Start\"\n        [end]=\"lineGuide2End\"\n        [lineStyle]=\"lineGuide2LineStyle\"\n      ></v-guide>\n      <v-guide\n        type=\"line\"\n        [start]=\"lineGuide3Start\"\n        [end]=\"lineGuide3End\"\n        [lineStyle]=\"lineGuide3LineStyle\"\n      ></v-guide>\n\n      <v-guide\n        type=\"arc\"\n        [zIndex]=\"0\"\n        [top]=\"false\"\n        [start]=\"arcGuide1Start\"\n        [end]=\"arcGuide1End\"\n        [style]=\"arcGuide1Style\"\n      ></v-guide>\n      <v-guide\n        type=\"arc\"\n        [zIndex]=\"1\"\n        [start]=\"arcGuide2Start\"\n        [end]=\"arcGuide2End\"\n        [style]=\"arcGuide2Style\"\n      ></v-guide>\n      <v-guide\n        type=\"html\"\n        [position]=\"htmlGuidePosition\"\n        [html]=\"htmlGuideHtml\"\n      ></v-guide>\n    </v-chart>\n  </div>\n  "
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