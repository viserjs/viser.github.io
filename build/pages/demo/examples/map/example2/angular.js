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
        this.showTitle = false;
        this.data = null;
        this.geoData = [];
        this.scale = [{
                dataKey: 'longitude',
                sync: true,
            }, {
                dataKey: 'latitude',
                sync: true,
            }];
        this.userDataScale = [{
                dataKey: 'trend',
                alias: '每100位女性对应的男性数量',
            }];
        this.view1Opts = {
            quickType: 'polygon',
            position: 'longitude*latitude',
            style: {
                fill: '#fff',
                stroke: '#ccc',
                lineWidth: 1
            },
            tooltip: false,
        };
        this.view2Opts = {
            quickType: 'polygon',
            position: 'longitude*latitude',
            opacity: 'value',
            color: ['trend', ['#F51D27', '#0A61D7']],
            tooltip: 'name*trend',
            animate: {
                leave: {
                    animation: 'fadeOut'
                }
            },
        };
        $.when($.getJSON('/assets/data/worldGeo.json'), $.getJSON('/assets/data/map-2.json')).then(function (geoData, data) {
            var worldMap = new DataSet.View().source(geoData[0], {
                type: 'GeoJSON',
            });
            var userDv = new DataSet.View().source(data[0]).transform({
                geoDataView: worldMap,
                field: 'name',
                type: 'geo.region',
                as: ['longitude', 'latitude'],
            }).transform({
                type: 'map',
                callback: function (obj) {
                    obj.trend = (obj.value > 100) ? '男性更多' : '女性更多';
                    return obj;
                }
            });
            _this.geoData = worldMap;
            _this.data = userDv;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"[20, 20]\" [scale]=\"scale\">\n      <v-tooltip [showTitle]=\"showTitle\"></v-tooltip>\n      <v-legend dataKey=\"trend\" position=\"left\"></v-legend>\n      <v-view [data]=\"geoData\" [scale]=\"scale\">\n        <v-polygon [position]=\"view1Opts.position\" [style]=\"view1Opts.style\" [tooltip]=\"view1Opts.tooltip\"></v-polygon>\n      </v-view>\n      <v-view [data]=\"data\" [scale]=\"userDataScale\">\n        <v-polygon [position]=\"view2Opts.position\" [opacity]=\"view2Opts.opacity\" [color]=\"view2Opts.color\" [animate]=\"view2Opts.animate\" [tooltip]=\"view2Opts.tooltip\"></v-polygon>\n      </v-view>\n    </v-chart>\n  </div>\n  "
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