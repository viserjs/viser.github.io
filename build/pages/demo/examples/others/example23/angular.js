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
viser_ng_1.registerShape('line', 'lineWidthArrow', {
    draw: function (cfg, container) {
        var points = cfg.points;
        var attrs = Object.assign({}, {
            stroke: cfg.color,
            lineWidth: cfg.size,
        }, cfg.style);
        var pathGroup = container.addGroup();
        for (var i = 0; i < points.length; i++) {
            var path = [];
            path.push(['M', points[i].x, points[i].y]);
            if (i !== points.length - 1) {
                path.push(['L', points[i + 1].x, points[i + 1].y]);
            }
            pathGroup.addShape('path', {
                attrs: Object.assign({
                    path: path,
                    endArrow: true,
                    arrowLength: 10,
                    arrowAngle: 45
                }, attrs)
            });
        }
        return pathGroup;
    }
});
var data = [
    { consumption: 0.65, price: 1, year: 1965 },
    { consumption: 0.66, price: 1.05, year: 1966 },
    { consumption: 0.64, price: 1.1, year: 1967 },
    { consumption: 0.63, price: 1.12, year: 1968 },
    { consumption: 0.55, price: 1.15, year: 1969 },
    { consumption: 0.57, price: 1.19, year: 1970 },
    { consumption: 0.58, price: 1.14, year: 1971 },
    { consumption: 0.59, price: 1, year: 1972 },
    { consumption: 0.57, price: 0.96, year: 1973 },
    { consumption: 0.55, price: 0.92, year: 1974 },
    { consumption: 0.54, price: 0.88, year: 1975 },
    { consumption: 0.55, price: 0.87, year: 1976 },
    { consumption: 0.42, price: 0.89, year: 1977 },
    { consumption: 0.28, price: 1, year: 1978 },
    { consumption: 0.15, price: 1.1, year: 1979 }
];
var tooltipOpts = {
    showTitle: false,
    itemTpl: '<li data-index={index}>'
        + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
        + '<span>{year}</span></br>'
        + '<span style="padding-left: 16px">consumption: {consumption}</span></br>'
        + '<span style="padding-left: 16px">price: {price}</span></br>'
};
var pathOpts = {
    label: ['year', {
            offset: 16,
            textStyle: {
                fill: '#8c8c8c'
            }
        }, function (val) {
            return val + '年';
        }]
};
var pointOpts = {
    tooltip: ['year*consumption*price', function (year, consumption, price) {
            return {
                year: year,
                consumption: consumption,
                price: price
            };
        }],
    style: {
        fill: '#fff',
        fillOpacity: 0
    },
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = data;
        this.tooltipOpts = tooltipOpts;
        this.pathOpts = pathOpts;
        this.pointOpts = pointOpts;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\" >\n      <v-tooltip [showTitle]=\"tooltipOpts.showTitle\" [itemTpl]=\"tooltipOpts.itemTpl\"></v-tooltip>\n      <v-axis></v-axis>\n      <v-path position=\"price*consumption\" shape=\"lineWidthArrow\" color=\"#1890ff\"\n        [label]=\"pathOpts.label\" [size]=\"2\" [tooltip]=\"false\"\n      ></v-path>\n      <v-point position=\"price*consumption\" shape=\"circle\" [size]=\"10\" [active]=\"false\"\n        [tooltip]=\"pointOpts.tooltip\" [style]=\"pointOpts.style\"\n      >\n      </v-point>\n    </v-chart>\n  </div>\n  "
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