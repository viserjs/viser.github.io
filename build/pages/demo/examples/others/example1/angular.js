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
var scale = [{
        dataKey: 'exp_dat',
        type: 'time',
        mask: 'M/YY',
        tickCount: 14
    }, {
        dataKey: 'exp_amo',
        type: 'log',
        ticks: [225, 1000000, 2000000, 4000000, 6000000]
    }];
var axis1Opts = {
    dataKey: 'exp_dat',
    tickLine: null,
    label: {
        textStyle: {
            fontSize: 14
        }
    }
};
var axis2Opts = {
    dataKey: 'exp_amo',
    tickLine: null,
    line: null,
    grid: {
        lineStyle: {
            lineDash: null,
            stroke: '#999'
        }
    },
    label: {
        formatter: function (val) {
            var formatted;
            if (+val === 225) {
                formatted = 0;
            }
            else {
                formatted = val / 1000000;
            }
            return '$' + formatted + 'M';
        }
    }
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 400;
        this.data = [];
        this.scale = scale;
        this.axis1Opts = axis1Opts;
        this.axis2Opts = axis2Opts;
        $.getJSON('/assets/data/time-scatter.json', function (sourceData) {
            var dv = new DataSet.View().source(sourceData);
            dv.transform({
                type: 'map',
                callback: function (obj) {
                    obj.exp_amo = obj.exp_amo * 1;
                    return obj;
                }
            });
            _this.data = dv.rows;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip [showTitle]=\"false\"></v-tooltip>\n      <v-axis [dataKey]=\"axis1Opts.dataKey\" [tickLine]=\"axis1Opts.tickLine\" [label]=\"axis1Opts.label\"></v-axis>\n      <v-axis [dataKey]=\"axis2Opts.dataKey\" [tickLine]=\"axis2Opts.tickLine\" [line]=\"axis2Opts.line\" [grid]=\"axis2Opts.grid\"\n        [grid]=\"axis2Opts.grid\" [label]=\"axis2Opts.label\"></v-axis>\n      <v-point position=\"exp_dat*exp_amo\" [size]=\"['exp_amo', [ 1, 10 ]]\" [size]=\"pointOpts.size\" opacity=\"exp_amo\" shape=\"circle\" tooltip=\"exp_dat*can_nam*spe_nam*exp_amo\"></v-point>\n    </v-chart>\n  </div>\n  "
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