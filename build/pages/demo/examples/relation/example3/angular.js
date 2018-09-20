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
        dataKey: 'x',
        sync: true,
    }, {
        dataKey: 'y',
        sync: true,
    }];
var label = ['name', {
        labelEmit: true,
        textStyle: {
            fill: '#8c8c8c',
        },
    }];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 500;
        this.edgesData = [];
        this.nodesData = [];
        this.scale = scale;
        this.label = label;
        $.getJSON('/assets/data/relationship-with-weight.json', function (sourceData) {
            var dv = new DataSet.View().source(sourceData, {
                type: 'graph',
                edges: function (d) { return d.links; },
            });
            dv.transform({
                type: 'diagram.arc',
                sourceWeight: function (e) { return e.sourceWeight; },
                targetWeight: function (e) { return e.targetWeight; },
                weight: true,
                marginRatio: 0.3,
            });
            _this.edgesData = dv.edges;
            _this.nodesData = dv.nodes;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div >\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [scale]=\"scale\">\n      <v-view  [data]=\"edgesData\">\n        <v-coord type=\"polar\" direction=\"yReverse\"></v-coord>\n        <v-edge position=\"x*y\" color=\"source\" shape=\"arc\" [opacity]=\"0.5\" tooltip=\"source*target*value\"></v-edge>\n      </v-view>\n      <v-view [data]=\"nodesData\">\n        <v-coord type=\"polar\" direction=\"yReverse\"></v-coord>\n        <v-polygon position=\"x*y\" color=\"id\" [label]=\"label\"></v-polygon>\n      </v-view>\n    </v-chart>\n  </div>\n  "
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