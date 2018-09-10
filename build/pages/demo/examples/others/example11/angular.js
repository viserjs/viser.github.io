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
var DataView = DataSet.DataView;
var data = [
    { year: 2007, area: '亚太地区', profit: 7860 * 0.189 },
    { year: 2007, area: '非洲及中东', profit: 7860 * 0.042 },
    { year: 2007, area: '拉丁美洲', profit: 7860 * 0.025 },
    { year: 2007, area: '中欧和东欧', profit: 7860 * 0.018 },
    { year: 2007, area: '西欧', profit: 7860 * 0.462 },
    { year: 2007, area: '北美', profit: 7860 * 0.265 },
    { year: 2011, area: '亚太地区', profit: 7620 * 0.539 },
    { year: 2011, area: '非洲及中东', profit: 7620 * 0.065 },
    { year: 2011, area: '拉丁美洲', profit: 7620 * 0.065 },
    { year: 2011, area: '中欧和东欧', profit: 7620 * 0.034 },
    { year: 2011, area: '西欧', profit: 7620 * 0.063 },
    { year: 2011, area: '北美', profit: 7620 * 0.234 }
];
var views = function (view, facet) {
    var data = facet.data;
    var dv = new DataView();
    dv.source(data)
        .transform({
        type: 'percent',
        field: 'profit',
        dimension: 'area',
        as: 'percent'
    });
    return {
        data: dv,
        scale: {
            dataKey: 'percent',
            formatter: '.2%',
        },
        coord: {
            type: 'theta',
            innerRadius: 0.35,
        },
        series: {
            quickType: 'stackBar',
            position: 'percent',
            color: 'area',
            label: ['percent', {
                    offset: -8,
                }],
            style: {
                lineWidth: 1,
                stroke: '#fff',
            }
        }
    };
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.data = data;
        this.height = 400;
        this.padding = 80;
        this.tooltipShowFalse = false;
        this.legendOffset = 20;
        this.facetViews = views;
        this.facetFields = ['year'];
        this.facetPadding = 20;
        this.facetRowTitle = null;
        this.facetColTitle = {
            offsetY: -30,
            style: {
                fontSize: 18,
                textAlign: 'center',
                fill: '#999'
            }
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\" [padding]=\"padding\">\n      <v-tooltip :[showTitle]=\"tooltipShowFalse\"></v-tooltip>\n      <v-legend dataKey=\"area\" [offset]=\"legendOffset\"></v-legend>\n      <v-facet\n        type=\"rect\"\n        [fields]=\"facetFields\"\n        [padding]=\"facetPadding\"\n        [rowTitle]=\"facetRowTitle\"\n        [colTitle]=\"facetColTitle\"\n        [views]=\"facetViews\"\n      ></v-facet>\n    </v-chart>\n  </div>\n  "
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