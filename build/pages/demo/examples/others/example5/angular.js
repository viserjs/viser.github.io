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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js");
require("reflect-metadata");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var viser_ng_1 = require("viser-ng");
var $ = require("jquery");
var DataSet = require('@antv/data-set');
viser_ng_1.registerShape('point', 'cloud', {
    draw: function (cfg, container) {
        return container.addShape('text', {
            attrs: __assign({ fillOpacity: cfg.opacity, fontSize: cfg.origin._origin.size, rotate: cfg.origin._origin.rotate, text: cfg.origin._origin.text, textAlign: 'center', fontFamily: cfg.origin._origin.font, fill: cfg.color, textBaseline: 'Alphabetic' }, cfg.style, { x: cfg.x, y: cfg.y }),
        });
    }
});
var scale = [
    { dataKey: 'x', nice: false },
    { dataKey: 'y', nice: false },
];
var padding = [0];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.scale = scale;
        this.data = [];
        $.getJSON('/assets/data/world-population.json', function (data) {
            var dv = new DataSet.View().source(data);
            var range = dv.range('value');
            var min = range[0];
            var max = range[1];
            dv.transform({
                type: 'tag-cloud',
                fields: ['x', 'value'],
                size: [640, 400],
                font: 'Verdana',
                padding: 0,
                timeInterval: 5000,
                rotate: function () {
                    var random = ~~(Math.random() * 4) % 4;
                    if (random == 2) {
                        random = 0;
                    }
                    return random * 90; // 0, 90, 270
                },
                fontSize: function (d) {
                    if (d.value) {
                        return ((d.value - min) / (max - min)) * (80 - 24) + 24;
                    }
                    return 0;
                }
            });
            _this.data = dv.rows;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div >\n    <v-chart [width]=\"640\" [height]=\"400\" [data]=\"data\" [scale]=\"scale\" [padding]=\"padding\">\n      <v-tooltip [showTitle]=\"false\"></v-tooltip>\n      <v-coord type=\"rect\" direction=\"TL\"></v-coord>\n      <v-point position=\"x*y\" [color]=\"'category'\" shape=\"cloud\" tooltip=\"value*category\"></v-point>\n    </v-chart>\n  </div>\n  "
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