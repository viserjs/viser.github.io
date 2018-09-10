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
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 400;
        this.data = [];
        this.scale = [{
                dataKey: 'date',
                type: 'time',
                nice: false,
                mask: 'MM-DD',
                tickCount: 10,
            }, {
                dataKey: 'range',
                min: 20,
                max: 35,
                nice: false,
                tickInterval: 2,
            }, {
                dataKey: 'mean',
                min: 20,
                max: 35,
                nice: false,
            }, {
                dataKey: 'stockRange',
                min: 20,
                max: 35,
                nice: false,
            }];
        this.tooltip = {
            crosshairs: {
                type: 'line',
            },
        };
        this.color = ['trend', function (val) {
                if (val === 'up') {
                    return '#f04864';
                }
                if (val === 'down') {
                    return '#2fc25b';
                }
            }];
        $.getJSON('/assets/data/stock-2.json', function (sourceData) {
            var dv = new DataSet.View().source(sourceData);
            dv.transform({
                type: 'map',
                callback: function (obj) {
                    obj.stockRange = [obj.start, obj.end, obj.highest, obj.lowest];
                    return obj;
                }
            });
            _this.data = dv.rows;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip [crosshairs]=\"tooltip.crosshairs\"></v-tooltip>\n      <v-axis dataKey=\"mean\" [show]=\"false\"></v-axis>\n      <v-axis dataKey=\"stockRange\" [show]=\"false\"></v-axis>\n      <v-area position=\"date*range\"></v-area>\n      <v-candle position=\"date*stockRange\" [color]=\"color\" tooltip=\"start*end*highest*lowest\"></v-candle>\n      <v-line position=\"date*mean\" color=\"#FACC14\"></v-line>\n    </v-chart>\n  </div>\n  "
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