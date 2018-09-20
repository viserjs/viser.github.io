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
        tickInterval: 1,
        nice: false
    }];
var color = ['#0086FA', '#FFBF00', '#F5222D'];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 400;
        this.data = [
            { value: 5.6 }
        ];
        this.scale = scale;
        this.axisLabel = {
            offset: -16,
            textStyle: {
                fontSize: 18,
                textAlign: 'center',
                textBaseline: 'middle'
            }
        };
        this.axisSubTickLine = {
            length: -8,
            stroke: '#fff',
            strokeOpacity: 1,
        };
        this.axisTickLine = {
            length: -17,
            stroke: '#fff',
            strokeOpacity: 1,
        };
        this.arcGuideBgStart = [0, 0.945];
        this.arcGuideBgEnd = [9, 0.945];
        this.arcGuideBgStyle = {
            stroke: '#CBCBCB',
            lineWidth: 18,
        };
        this.arcGuideLowStart = [0, 0.945];
        this.arcGuideLowEnd = [Math.max(0, Math.min(3, this.data[0].value)), 0.945];
        this.arcGuideLowStyle = {
            stroke: color[0],
            lineWidth: 18,
        };
        this.arcGuideMidStart = [3, 0.945];
        this.arcGuideMidEnd = [Math.max(3, Math.min(6, this.data[0].value)), 0.945];
        this.arcGuideMidStyle = {
            stroke: color[1],
            lineWidth: 18,
        };
        this.arcGuideHighStart = [6, 0.945];
        this.arcGuideHighEnd = [Math.max(6, Math.min(9, this.data[0].value)), 0.945];
        this.arcGuideHighStyle = {
            stroke: color[2],
            lineWidth: 18,
        };
        this.htmlGuidePosition = ['50%', '95%'];
        this.htmlGuideHtml = "\n    <div style=\"width: 300px;text-align: center;\">\n      <p style=\"font-size: 20px;color: #545454;margin: 0;\">\u5408\u683C\u7387</p>\n      <p style=\"font-size: 36px;color: #545454;margin: 0;\">" + Math.ceil(this.data[0].value * 10) + "%</p>\n    </div>\n  ";
        this.trend = 'up';
        this.setData = function () {
            if (_this.timer) {
                clearTimeout(_this.timer);
            }
            var delta = Math.random();
            var prevVal = _this.data[0].value;
            if (_this.trend === 'up') {
                var nextVal = prevVal + delta;
                if (nextVal > 9) {
                    _this.trend = 'down';
                }
                else {
                    _this.data = [{ value: nextVal }];
                    _this.arcGuideLowEnd = [Math.max(0, Math.min(3, nextVal)), 0.945];
                    _this.arcGuideMidEnd = [Math.max(3, Math.min(6, nextVal)), 0.945];
                    _this.arcGuideHighEnd = [Math.max(6, Math.min(9, nextVal)), 0.945];
                    _this.htmlGuideHtml = "\n          <div style=\"width: 300px;text-align: center;\">\n            <p style=\"font-size: 20px;color: #545454;margin: 0;\">\u5408\u683C\u7387</p>\n            <p style=\"font-size: 36px;color: #545454;margin: 0;\">" + Math.ceil(nextVal * 10) + "%</p>\n          </div>\n        ";
                }
            }
            else {
                var nextVal = prevVal - delta;
                if (nextVal < 0) {
                    _this.trend = 'up';
                }
                else {
                    _this.data = [{ value: nextVal }];
                    _this.arcGuideLowEnd = [Math.max(0, Math.min(3, nextVal)), 0.945];
                    _this.arcGuideMidEnd = [Math.max(3, Math.min(6, nextVal)), 0.945];
                    _this.arcGuideHighEnd = [Math.max(6, Math.min(9, nextVal)), 0.945];
                    _this.htmlGuideHtml = "\n          <div style=\"width: 300px;text-align: center;\">\n            <p style=\"font-size: 20px;color: #545454;margin: 0;\">\u5408\u683C\u7387</p>\n            <p style=\"font-size: 36px;color: #545454;margin: 0;\">" + Math.ceil(nextVal * 10) + "%</p>\n          </div>\n        ";
                }
            }
            _this.timer = setTimeout(_this.setData, 1000);
        };
        this.timer = setTimeout(this.setData, 0);
    }
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\" [scale]=\"scale\" [animate]=\"false\">\n      <v-coord type=\"polar\" [startAngle]=\"-202.5\" [endAngle]=\"22.5\" [radius]=\"0.75\"></v-coord>\n      <v-axis\n        dataKey=\"value\"\n        [zIndex]=\"2\"\n        [line]=\"null\"\n        [subTickCount]=\"4\"\n        [grid]=\"null\"\n        [label]=\"axisLabel\"\n        [subTickLine]=\"axisSubTickLine\"\n        [tickLine]=\"axisTickLine\"\n      ></v-axis>\n      <v-axis dataKey=\"1\" [show]=\"false\"></v-axis>\n      <v-series\n        gemo=\"point\"\n        position=\"value*1\"\n        shape=\"pointer\"\n        color=\"#8C8C8C\"\n        [active]=\"false\"\n      ></v-series>\n      <v-guide type=\"arc\" [zIndex]=\"0\" [top]=\"false\" [start]=\"arcGuideBgStart\" [end]=\"arcGuideBgEnd\" [style]=\"arcGuideBgStyle\"></v-guide>\n      <v-guide type=\"arc\" [zIndex]=\"1\" [start]=\"arcGuideLowStart\" [end]=\"arcGuideLowEnd\" [style]=\"arcGuideLowStyle\"></v-guide>\n      <v-guide type=\"arc\" [zIndex]=\"1\" [start]=\"arcGuideMidStart\" [end]=\"arcGuideMidEnd\" [style]=\"arcGuideMidStyle\"></v-guide>\n      <v-guide type=\"arc\" [zIndex]=\"1\" [start]=\"arcGuideHighStart\" [end]=\"arcGuideHighEnd\" [style]=\"arcGuideHighStyle\"></v-guide>\n      <v-guide\n        type=\"html\"\n        [position]=\"htmlGuidePosition\"\n        [html]=\"htmlGuideHtml\"\n      ></v-guide>\n    </v-chart>\n  </div>\n  "
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