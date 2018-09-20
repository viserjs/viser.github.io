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
var sourceData = [
    { action: '浏览网站', pv: 50000 },
    { action: '放入购物车', pv: 35000 },
    { action: '生成订单', pv: 25000 },
    { action: '支付订单', pv: 15000 },
    { action: '完成交易', pv: 8000 },
];
var dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'percent',
    field: 'pv',
    dimension: 'action',
    as: 'percent'
});
var data = dv.rows;
var scale = {
    dataKey: 'percent',
    nice: false,
};
var tooltipOpts = {
    showTitle: false,
    itemTpl: '<li data-index={index} style="margin-bottom:4px;">'
        + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
        + '{name}<br/>'
        + '<span style="padding-left: 16px">浏览人数：{pv}</span><br/>'
        + '<span style="padding-left: 16px">占比：{percent}</span><br/>'
        + '</li>'
};
var funnelOpts = {
    position: 'action*percent',
    color: ['action', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF']],
    label: ['action*pv', function (action, pv) {
            return action + ' ' + pv;
        }, {
            offset: 35,
            labelLine: {
                lineWidth: 1,
                stroke: 'rgba(0, 0, 0, 0.15)',
            }
        }],
    tooltip: ['action*pv*percent', function (action, pv, percent) { return ({
            name: action,
            percent: Math.floor(percent * 100) + '%',
            pv: pv,
        }); }]
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = data;
        this.scale = scale;
        this.tooltipOpts = tooltipOpts;
        this.funnelOpts = funnelOpts;
        this.showTitle = false;
        this.getPosition = function (obj) {
            return {
                action: obj.action,
                percent: 'median'
            };
        };
        this.getContent = function (obj) {
            return parseInt(String(obj.percent * 100)) + '%';
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"[20, 120, 95]\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip [showTitle]=\"showTitle\" [itemTpl]=\"tooltipOpts.itemTpl\"></v-tooltip>\n      <v-legend></v-legend>\n      <v-coord type=\"rect\" direction=\"LT\"></v-coord>\n      <v-pyramid [position]=\"funnelOpts.position\" [color]=\"funnelOpts.color\" [label]=\"funnelOpts.label\" [tooltip]=\"funnelOpts.tooltip\"></v-pyramid>\n      <v-guide *ngFor=\"let obj of data\"\n        type=\"text\"\n        [top]=\"true\"\n        [position]=\"this.getPosition(obj)\" [content]=\"this.getContent(obj)\"\n        [style]=\"{\n          fill: '#fff',\n          fontSize: '12',\n          textAlign: 'center',\n          shadowBlur: 2,\n          shadowColor: 'rgba(0, 0, 0, .45)'\n        }\">\n      </v-guide>\n    </v-chart>\n  </div>\n  "
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