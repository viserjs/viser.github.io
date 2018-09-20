"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js");
require("reflect-metadata");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var viser_ng_1 = require("viser-ng");
var DataSet = require('@antv/data-set');
var sourceData = {
    name: 'root',
    children: [
        { name: '分类 1', value: 560 },
        { name: '分类 2', value: 500 },
        { name: '分类 3', value: 150 },
        { name: '分类 4', value: 140 },
        { name: '分类 5', value: 115 },
        { name: '分类 6', value: 95 },
        { name: '分类 7', value: 90 },
        { name: '分类 8', value: 75 },
        { name: '分类 9', value: 98 },
        { name: '分类 10', value: 60 },
        { name: '分类 11', value: 45 },
        { name: '分类 12', value: 40 },
        { name: '分类 13', value: 40 },
        { name: '分类 14', value: 35 },
        { name: '分类 15', value: 40 },
        { name: '分类 16', value: 40 },
        { name: '分类 17', value: 40 },
        { name: '分类 18', value: 30 },
        { name: '分类 19', value: 28 },
        { name: '分类 20', value: 16 }
    ]
};
var dv = new DataSet.View().source(sourceData, {
    type: 'hierarchy',
});
dv.transform({
    field: 'value',
    type: 'hierarchy.treemap',
    tile: 'treemapResquarify',
    as: ['x', 'y'],
});
var data = dv.getAllNodes().map(function (node) { return (__assign({}, node, { name: node.data.name, value: node.data.value })); });
var scale = [{
        dataKey: 'value',
        nice: false,
    }];
var itemTpl = "<li data-index={index}>\n  <span style=\"background-color:{color};\" class=\"g2-tooltip-marker\"></span>\n  {name}<br/>\n  <span style=\"padding-left: 16px\">\u6D4F\u89C8\u4EBA\u6570\uFF1A{count}</span><br/>\n</li>";
var style = {
    lineWidth: 1,
    stroke: '#fff',
};
var tooltip = ['name', function (name, count) { return ({ name: name, count: count }); }];
var label = ['name', {
        offset: 0,
        textStyle: {
            textBaseline: 'middle',
        },
        formatter: function (val) {
            if (val !== 'root') {
                return val;
            }
        }
    }];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 600;
        this.data = data;
        this.scale = scale;
        this.tooltip = tooltip;
        this.style = style;
        this.label = label;
        this.itemTpl = itemTpl;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"400\" [data]=\"data\" [scale]=\"scale\" padding=\"0\">\n      <v-tooltip [showTitle]=\"false\" [itemTpl]=\"itemTpl\"></v-tooltip>\n      <v-polygon position=\"x*y\" color=\"name\" [tooltip]=\"tooltip\" [style]=\"style\" [label]=\"label\"></v-polygon>\n    </v-chart>\n  </div>\n  "
        })
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