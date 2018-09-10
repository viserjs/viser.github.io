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
var $ = require("jquery");
var DataSet = require('@antv/data-set');
var REGRESSION_METHODS = [
    'linear',
    'exponential',
    'logarithmic',
    'power',
    'polynomial'
];
var scale = [{
        dataKey: 'carat',
        sync: true,
    }, {
        dataKey: 'price',
        sync: true,
    }];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 400;
        this.data = [];
        this.scale = scale;
        this.REGRESSION_METHODS = REGRESSION_METHODS;
        this.Global = viser_ng_1.Global;
        $.getJSON('/assets/data/diamond.json', function (data) {
            _this.data = data;
        });
    }
    AppComponent.prototype.getData = function (method, i) {
        var dv = new DataSet.View().source(this.data)
            .transform({
            type: 'regression',
            method: method,
            fields: ['carat', 'price'],
            bandwidth: 0.1,
            extent: [0, 4],
            as: ['carat', 'price']
        });
        return dv;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\" [scale]=\"scale\">\n      <v-axis></v-axis>\n      <v-tooltip></v-tooltip>\n      <v-view [data]=\"data\" [scale]=\"scale\">\n        <v-point position=\"carat*price\"></v-point>\n      </v-view>\n      <v-view *ngFor=\"let method of REGRESSION_METHODS;let i = index;\" [data]=\"this.getData(method, i)\" [scale]=\"scale\">\n        <v-axis dataKey='price' [show]=\"false\"></v-axis>\n        <v-line position=\"carat*price\" [size]=\"1\" [color]=\"Global.colors_16[i]\"></v-line>\n      </v-view>\n    </v-chart>\n  </div>\n  "
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