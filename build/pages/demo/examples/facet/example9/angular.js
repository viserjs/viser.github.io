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
var DataView = DataSet.DataView;
var scale = [{
        dataKey: 'Species',
        sync: true,
    }];
var views = function (view, facet) {
    var obj = {};
    if (facet.rowIndex === facet.colIndex) {
        var dv = new DataView();
        dv.source(facet.data)
            .transform({
            type: 'bin.histogram',
            field: facet.colField,
            bins: 30,
            as: [facet.colField, 'count'],
            groupBy: ['Species']
        });
        obj = {
            data: dv.rows,
            series: {
                quickType: 'stackBar',
                position: facet.colField + '*count',
                color: 'Species',
                opacity: 0.85,
            }
        };
    }
    else {
        obj = {
            series: {
                quickType: 'point',
                shape: 'circle',
                color: 'Species',
                position: [facet.colField, facet.rowField],
                opacity: 0.3,
                size: 3,
            }
        };
    }
    return obj;
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 400;
        this.data = [];
        this.fields = ['SepalLength', 'SepalWidth', 'PetalLength', 'PetalWidth'];
        this.views = views;
        $.getJSON('/assets/data/iris.json', function (sourceData) {
            _this.data = sourceData;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"400\" [data]=\"data\">\n      <v-tooltip></v-tooltip>\n      <v-legend></v-legend>\n      <v-axis></v-axis>\n      <v-facet type=\"matrix\" [fields]=\"fields\" [views]=\"views\"></v-facet>\n    </v-chart>\n  </div>\n  "
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