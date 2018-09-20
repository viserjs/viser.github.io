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
var style = {
    stroke: '#FFF',
    lineWidth: 1,
};
var color = ['value', '#BAE7FF-#1890FF-#0050B3'];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 500;
        this.data = [];
        this.style = style;
        this.color = color;
        $.getJSON('/assets/data/sunburst.json', function (sourceData) {
            var dv = new DataSet.View().source(sourceData, {
                type: 'hierarchy',
            });
            dv.transform({
                type: 'hierarchy.partition',
                field: 'sum',
                as: ['x', 'y'],
            });
            _this.data = dv.getAllNodes().filter(function (node) {
                return node.depth !== 0;
            }).map(function (node) {
                return {
                    label: node.data.label,
                    sum: node.data.sum,
                    uv: node.data.uv,
                    value: node.value,
                    x: node.x,
                    y: node.y,
                };
            });
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\" [padding]=\"0\">\n      <v-tooltip [showTitle]=\"false\"></v-tooltip>\n      <v-coord type=\"polar\" [innerRadius]=\"0.3\"></v-coord>\n      <v-polygon position=\"x*y\" [color]=\"color\" active=\"false\" [style]=\"style\" tooltip=\"label*sum\"></v-polygon>\n    </v-chart>\n  </div>\n  "
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