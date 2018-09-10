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
var text = ['MIDNIGHT', '3 AM', '6 AM', '9 AM', 'NOON', '3 PM', '6 PM', '9 PM'];
var data = [];
for (var i = 0; i < 24; i++) {
    var item = {};
    item.type = i + '';
    item.value = 10;
    data.push(item);
}
var dv = new DataSet.View().source(data).transform({
    type: 'percent',
    field: 'value',
    dimension: 'type',
    as: 'percent'
});
var stackInterval1Opts = {
    position: 'percent',
    color: ['type', ['rgba(255, 255, 255, 0)']],
    style: {
        stroke: '#444',
        lineWidth: 1
    },
    tooltip: false,
    select: false,
};
var guideOpts = {
    type: 'text',
    position: ['50%', '50%'],
    content: '24 hours',
    style: {
        lineHeight: '240px',
        fontSize: '30',
        fill: '#262626',
        textAlign: 'center',
    },
};
var stackInterval2Opts = {
    position: 'type*value',
    size: ['type', function (val) {
            if (val % 3 === 0) {
                return 4;
            }
            else {
                return 0;
            }
        }],
    color: '#444',
    tooltip: false,
    label: ['type', function (val) {
            if (val % 3 === 0) {
                return text[val / 3];
            }
            return '';
        }, {
            offset: 15,
            textStyle: {
                fontSize: 12,
                fontWeight: 'bold',
                fill: '#bfbfbf'
            }
        }]
};
var userData = [
    { type: '睡眠', value: 70 },
    { type: '淡茶 & 烟斗 & 冥想', value: 10 },
    { type: '写作', value: 10 },
    { type: '教课', value: 40 },
    { type: '酒吧吃肉配白酒', value: 40 },
    { type: '散步', value: 10 },
    { type: '拜访马大大', value: 30 },
    { type: '阅读', value: 30 },
];
var userDv = new DataSet.View().source(userData).transform({
    type: 'percent',
    field: 'value',
    dimension: 'type',
    as: 'percent'
});
var userScale = [{
        dataKey: 'percent',
        formatter: function (val) {
            return (val * 100).toFixed(2) + '%';
        }
    }];
var stackInterval3Opts = {
    position: 'percent',
    color: 'type',
    label: ['type', {
            offset: 40,
        }],
    select: false,
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.dv = dv;
        this.stackInterval1Opts = stackInterval1Opts;
        this.guideOpts = guideOpts;
        this.stackInterval2Opts = stackInterval2Opts;
        this.userDv = userDv;
        this.userScale = userScale;
        this.stackInterval3Opts = stackInterval3Opts;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"80\">\n      <v-tooltip [showTitle]=\"false\"></v-tooltip>\n      <v-view [data]=\"dv\">\n        <v-coord type=\"theta\" [innerRadius]=\"0.9\"></v-coord>\n        <v-stack-interval [position]=\"stackInterval1Opts.position\" [color]=\"stackInterval1Opts.color\"\n          [style]=\"stackInterval1Opts.style\" [tooltip]=\"stackInterval1Opts.tooltip\"\n          [select]=\"stackInterval1Opts.select\"></v-stack-interval>\n        <v-guide [type]=\"guideOpts.type\" [position]=\"guideOpts.position\"\n          [content]=\"guideOpts.content\" [style]=\"guideOpts.style\"></v-guide>\n      </v-view>\n      <v-view [data]=\"dv\">\n        <v-coord type=\"polar\" [innerRadius]=\"0.9\"></v-coord>\n        <v-stack-interval [position]=\"stackInterval2Opts.position\" [size]=\"stackInterval2Opts.size\"\n          [color]=\"stackInterval2Opts.color\" [tooltip]=\"stackInterval2Opts.tooltip\"\n          [label]=\"stackInterval2Opts.label\"></v-stack-interval>\n      </v-view>\n      <v-view [data]=\"userDv\" [scale]=\"userScale\">\n        <v-coord type=\"theta\" [innerRadius]=\"0.75\"></v-coord>\n        <v-stack-interval [position]=\"stackInterval3Opts.position\" [color]=\"stackInterval3Opts.color\"\n          [label]=\"stackInterval3Opts.label\"\n          [select]=\"stackInterval3Opts.select\"></v-stack-interval>\n      </v-view>\n    </v-chart>\n  </div>\n  "
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