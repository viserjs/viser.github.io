"use strict";
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
var sourceData = [
    { item: 'Design', a: 70, b: 30 },
    { item: 'Development', a: 60, b: 70 },
    { item: 'Marketing', a: 50, b: 60 },
    { item: 'Users', a: 40, b: 50 },
    { item: 'Test', a: 60, b: 70 },
    { item: 'Language', a: 70, b: 50 },
    { item: 'Technology', a: 50, b: 40 },
    { item: 'Support', a: 30, b: 40 },
    { item: 'Sales', a: 60, b: 40 },
    { item: 'UX', a: 50, b: 60 },
];
var dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'fold',
    fields: ['a', 'b'],
    key: 'user',
    value: 'score',
});
var data = dv.rows;
var scale = [{
        dataKey: 'score',
        min: 0,
        max: 80,
    }];
var axis1GridOpts = {
    lineStyle: {
        lineDash: null
    },
    hideFirstLine: false
};
var axis2GridOpts = {
    type: 'polygon',
    lineStyle: {
        lineDash: null,
    },
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 500;
        this.data = data;
        this.padding = [20, 20, 95, 20];
        this.scale = scale;
        this.axis1GridOpts = axis1GridOpts;
        this.axis2GridOpts = axis2GridOpts;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\" [padding]=\"padding\" [scale]=\"scale\">\n      <v-tooltip></v-tooltip>\n      <v-axis dataKey=\"item\" line=\"null\" tickLine=\"null\" [grid]=\"axis1GridOpts\"></v-axis>\n      <v-axis dataKey=\"score\" line=\"null\" tickLine=\"null\" [grid]=\"axis2GridOpts\"></v-axis>\n      <v-legend dataKey=\"user\" marker=\"circle\" [offset]=\"30\"></v-legend>\n      <v-coord type=\"polar\" [radius]=\"0.8\"></v-coord>\n      <v-line position=\"item*score\" color=\"user\" [size]=\"2\"></v-line>\n      <v-point position=\"item*score\" color=\"user\" [size]=\"4\" shape=\"circle\"></v-point>\n    </v-chart>\n  </div>\n  "
        })
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