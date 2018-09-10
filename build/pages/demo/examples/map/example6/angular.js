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
        dataKey: 'latitude',
        sync: true,
        nice: false,
    }, {
        dataKey: 'longitude',
        sync: true,
        nice: false,
    }];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 400;
        this.geoData = {};
        this.data = null;
        this.scale = scale;
        this.pointOpts = {
            position: 'longitude*latitude',
            size: 18,
            color: ['value', '#F51D27-#FA541C-#FF8C12-#FFC838-#FAFFA8-#80FF73-#12CCCC-#1890FF-#6E32C2'],
            style: {
                blur: 23,
            }
        };
        $.getJSON('/assets/data/usa.geo.json').then(function (geoData) {
            var userData = [];
            var geoDv = new DataSet.View().source(geoData, {
                type: 'GeoJSON'
            }).transform({
                type: 'map',
                callback: function (row) {
                    userData.push({
                        longitude: row.centroidX,
                        latitude: row.centroidY,
                        name: row.name,
                        value: Math.random() * (1000 - 1)
                    });
                    return row;
                }
            });
            _this.geoData = geoDv;
            _this.data = userData;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"[0, 20, 0]\" [scale]=\"scale\">\n      <v-view [data]=\"geoData\" [scale]=\"scale\">\n        <v-polygon [position]=\"'longitude*latitude'\" [color]=\"'gray'\" [label]=\"['name', {offset: 0}]\"></v-polygon>\n      </v-view>\n      <v-view [data]=\"data\">\n        <v-heatmap [position]=\"pointOpts.position\" [size]=\"pointOpts.size\" [color]=\"pointOpts.color\" [style]=\"pointOpts.style\"></v-heatmap>\n      </v-view>\n    </v-chart>\n  </div>\n  "
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