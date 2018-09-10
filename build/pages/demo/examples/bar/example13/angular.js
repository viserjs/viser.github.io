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
    { profession: '两年制副学士学位', highest: 110000, minimum: 23000, mean: 56636 },
    { profession: '执法与救火', highest: 120000, minimum: 18000, mean: 66625 },
    { profession: '教育学', highest: 125000, minimum: 24000, mean: 72536 },
    { profession: '心理学', highest: 130000, minimum: 22500, mean: 75256 },
    { profession: '计算机科学', highest: 131000, minimum: 23000, mean: 77031 }
];
var dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'map',
    callback: function (row) {
        row.range = [row.minimum, row.highest];
        return row;
    }
});
var data = dv.rows;
var label = { offset: 12 };
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = data;
        this.label = label;
        this.padding = [20, 80, 50, 110];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [padding]=\"padding\" [height]=\"height\" [data]=\"data\">\n      <v-coord type=\"rect\" direction=\"LB\"></v-coord>\n      <v-tooltip></v-tooltip>\n      <v-legend></v-legend>\n      <v-axis dataKey=\"profession\" [label]=\"label\"></v-axis>\n      <v-bar position=\"profession*range\"></v-bar>\n    </v-chart>\n  </div>\n  "
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