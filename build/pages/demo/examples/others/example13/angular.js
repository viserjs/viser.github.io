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
var data = [{ country: '中国', cost: 96 }, { country: '德国', cost: 121 }, { country: '美国', cost: 100 }, { country: '日本', cost: 111 }, { country: '韩国', cost: 102 }, { country: '法国', cost: 124 }, { country: '意大利', cost: 123 }, { country: '荷兰', cost: 111 }, { country: '比利时', cost: 123 }, { country: '英国', cost: 109 }, { country: '加拿大', cost: 115 }, { country: '俄罗斯', cost: 99 }, { country: '墨西哥', cost: 91 }, { country: '印度', cost: 87 }, { country: '瑞士', cost: 125 }, { country: '澳大利亚', cost: 130 }, { country: '西班牙', cost: 109 }, { country: '巴西', cost: 123 }, { country: '泰国', cost: 91 }, { country: '印尼', cost: 83 }, { country: '波兰', cost: 101 }, { country: '瑞典', cost: 116 }, { country: '奥地利', cost: 111 }, { country: '捷克', cost: 107 }];
var scale = [{
        dataKey: 'cost',
        min: 0,
    }];
var axis1Opts = {
    dataKey: 'cost',
    label: null,
    tickLine: null,
    line: {
        stroke: '#E9E9E9',
        lineDash: [3, 3]
    }
};
var axis2Opts = {
    dataKey: 'country',
    grid: {
        align: 'center'
    },
    tickLine: null,
    label: {
        Offset: 10,
        textStyle: {
            textAlign: 'center' // 设置坐标轴 label 的文本对齐方向
        }
    }
};
var interval1Opts = {
    position: 'country*cost',
    color: 'country',
    label: ['cost', {
            offset: -15,
            textStyle: {
                textAlign: 'center',
                fontSize: 11,
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, .45)'
            }
        }],
    style: {
        lineWidth: 1,
        stroke: '#fff',
    },
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = data;
        this.scale = scale;
        this.axis1Opts = axis1Opts;
        this.axis2Opts = axis2Opts;
        this.interval1Opts = interval1Opts;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"[ 40, 40, 130, 40 ]\" [data]=\"data\" [scale]=\"scale\">\n      <v-coord type=\"polar\"></v-coord>\n      <v-axis [dataKey]=\"axis1Opts.dataKey\" [label]=\"axis1Opts.label\"\n        [tickLine]=\"axis1Opts.tickLine\" [line]=\"axis1Opts.line\"></v-axis>\n      <v-axis [dataKey]=\"axis2Opts.dataKey\" [grid]=\"axis2Opts.grid\"\n        [tickLine]=\"axis2Opts.tickLine\" [label]=\"axis2Opts.label\"></v-axis>\n      <v-legend [dataKey]=\"'country'\" [itemWidth]=\"50\"></v-legend>\n      <v-interval [position]=\"interval1Opts.position\" [color]=\"interval1Opts.color\"\n        [label]=\"interval1Opts.label\" [style]=\"interval1Opts.style\"></v-interval>\n    </v-chart>\n  </div>\n  "
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