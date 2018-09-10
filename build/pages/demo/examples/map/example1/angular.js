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
        this.geoData = {};
        this.data = null;
        this.tooltipOpts = {
            showTitle: false,
            containerTpl: '<div class="g2-tooltip">'
                + '<table class="g2-tooltip-list"></table></div>',
            itemTpl: '<tr data-index={index}><td style="padding: 5px; background-color:#545454">{name}</td><td style="padding: 5px; background-color:#fff;color: #000">{value}</td></tr>',
            g2Tooltip: {
                borderRadius: '2px',
                backgroundColor: '#DDDDDD',
                padding: 0,
                border: '1px solid #333'
            }
        };
        this.scale = [{
                dataKey: 'x',
                sync: true,
                nice: false,
            }, {
                dataKey: 'y',
                sync: true,
                nice: false,
            }];
        this.view1Opts = {
            quickType: 'polygon',
            position: 'x*y',
            style: {
                fill: '#ddd',
                stroke: '#b1b1b1',
                lineWidth: 0.5,
                fillOpacity: 0.85,
            },
            tooltip: false,
        };
        this.view2Opts = {
            quickType: 'point',
            position: 'x*y',
            size: ['deaths', [2, 30]],
            opacity: 0.45,
            color: '#FF2F29',
            tooltip: 'date*location*lat*lng*deaths*magnitude',
        };
        $.when($.getJSON('/assets/data/worldGeo.json'), $.getJSON('/assets/data/map-1.json')).then(function (geoData, data) {
            var dv = new DataSet.View().source(geoData[0], {
                type: 'GeoJSON'
            }).transform({
                type: 'geo.projection',
                projection: 'geoMercator',
                as: ['x', 'y', 'centroidX', 'centroidY'],
            });
            var userData = new DataSet.View().source(data[0]).transform({
                type: 'map',
                callback: function (obj) {
                    var projectedCoord = dv.geoProjectPosition([obj.lng * 1, obj.lat * 1], 'geoMercator');
                    obj.x = projectedCoord[0];
                    obj.y = projectedCoord[1];
                    obj.deaths = obj.deaths * 1;
                    obj.magnitude = obj.magnitude * 1;
                    return obj;
                }
            });
            _this.geoData = dv;
            _this.data = userData;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"[0, 20, 0]\" [scale]=\"scale\">\n      <v-coord type=\"rect\" direction=\"TL\" ></v-coord>\n      <v-tooltip [showTitle]=\"tooltipOpts.showTitle\" [containerTpl]=\"tooltipOpts.containerTpl\" [itemTpl]=\"tooltipOpts.itemTpl\" [g2Tooltip]=\"tooltipOpts.g2Tooltip\"></v-tooltip>\n      <v-view [data]=\"geoData\" [scale]=\"scale\">\n        <v-polygon [position]=\"view1Opts.position\" [style]=\"view1Opts.style\" [tooltip]=\"view1Opts.tooltip\"></v-polygon>\n      </v-view>\n      <v-view [data]=\"data\">\n        <v-point [position]=\"view2Opts.position\" [size]=\"view2Opts.size\" [opacity]=\"view2Opts.opacity\" [color]=\"view2Opts.color\" [tooltip]=\"view2Opts.tooltip\" shape=\"circle\"></v-point>\n      </v-view>\n    </v-chart>\n  </div>\n  "
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