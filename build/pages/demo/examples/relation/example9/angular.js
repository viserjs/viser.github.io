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
var nodesLabel = [
    'name', {
        offset: 0,
        labelEmit: true,
        textStyle: function (text, item) {
            var textAlign = item.textAlign;
            if (item.point.hasChildren) {
                textAlign = textAlign === 'left' ? 'right' : 'left';
            }
            return {
                fill: 'grey',
                fontSize: 9,
                textAlign: textAlign,
            };
        },
    },
];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 400;
        this.padding = [60, 0, 40, 0];
        this.edgeSource = {};
        this.nodeSource = {};
        this.label = nodesLabel;
        $.getJSON('/assets/data/flare.json', function (sourceData) {
            var dv = new DataSet.View().source(sourceData, {
                type: 'hierarchy',
            });
            dv.transform({
                type: 'hierarchy.tree',
            });
            _this.edgeSource = dv.getAllLinks().map(function (link) { return ({
                x: [link.source.x, link.target.x],
                y: [link.source.y, link.target.y],
                source: link.source.id,
                target: link.target.id
            }); });
            _this.nodeSource = dv.getAllNodes().map(function (node) { return ({
                hasChildren: !!(node.data.children && node.data.children.length),
                name: node.data.name,
                value: node.value,
                depth: node.depth,
                x: node.x,
                y: node.y
            }); });
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"padding\">\n      <v-coord type=\"polar\"></v-coord>\n      <v-view [data]=\"edgeSource\">\n        <v-edge position=\"x*y\" shape=\"smooth\" color=\"grey\" [opacity]=\"0.5\" tooltip=\"source*target\"></v-edge>\n      </v-view>\n      <v-view [data]=\"nodeSource\">\n        <v-point position=\"x*y\" color=\"hasChildren\" [label]=\"label\"></v-point>\n      </v-view>\n    </v-chart>\n  </div>\n  "
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