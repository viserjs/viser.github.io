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
var label = ['name', {
        offset: -10,
        textStyle: {
            textAlign: 'left',
            rotate: 90
        },
    }];
var style = {
    stroke: 'grey',
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 500;
        this.edgesData = [];
        this.nodesData = [];
        this.style = style;
        this.label = label;
        $.getJSON('/assets/data/relationship-with-weight.json', function (sourceData) {
            var dv = new DataSet.View().source(sourceData, {
                type: 'graph',
                edges: function (d) { return d.links; },
            });
            dv.transform({
                type: 'diagram.arc',
                marginRatio: 0.5,
            });
            _this.edgesData = dv.edges;
            _this.nodesData = dv.nodes;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\">\n      <v-tooltip [showTitle]=\"false\"></v-tooltip>\n      <v-view  [data]=\"edgesData\">\n        <v-edge position=\"x*y\" shape=\"arc\" color=\"source\" [opacity]=\"0.5\" tooltip=\"source*target\"></v-edge>\n      </v-view>\n      <v-view [data]=\"nodesData\">\n        <v-point position=\"x*y\" size=\"value\" color=\"id\" [opacity]=\"0.5\" [style]=\"style\" [label]=\"label\" shape=\"circle\"></v-point>\n      </v-view>\n    </v-chart>\n  </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
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
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.default = AppModule;
//# sourceMappingURL=angular.js.map