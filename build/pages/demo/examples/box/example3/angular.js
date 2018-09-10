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
        dataKey: 'range',
        min: 0,
        max: 240000,
    }, {
        dataKey: 'outliers',
        min: 0,
        max: 240000,
    }];
var colorMap = {
    'I. setosa': 'red',
    'I. versicolor': 'blue',
    'I. virginica': 'green',
};
var tooltipOpts = {
    crosshairs: {
        type: 'rect',
    },
};
var seriesColor = ['Species', function (val) {
        return colorMap[val];
    }];
var seriesStyle = ['Species', {
        stroke: '#545454',
        fill: function (val) {
            return colorMap[val];
        },
        fillOpacity: 0.3,
    }];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 400;
        this.data = [];
        this.scale = scale;
        this.colorMap = colorMap;
        this.tooltipOpts = tooltipOpts;
        this.seriesColor = seriesColor;
        this.seriesStyle = seriesStyle;
        $.getJSON('/assets/data/box-3.json', function (sourceData) {
            var dv = new DataSet.View().source(sourceData);
            dv.transform({
                type: 'fold',
                fields: ['SepalLength', 'SepalWidth', 'PetalLength', 'PetalWidth'],
                key: 'type',
                value: 'value'
            })
                .transform({
                type: 'bin.quantile',
                field: 'value',
                as: '_bin',
                groupBy: ['Species', 'type'],
            });
            _this.data = dv.rows;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip [crosshairs]=\"tooltipOpts.crosshairs\"></v-tooltip>\n      <v-axis></v-axis>\n      <v-legend marker=\"circle\"></v-legend>\n      <v-box position=\"type*_bin\" adjust=\"dodge\" [style]=\"seriesStyle\" [color]=\"seriesColor\"></v-box>\n    </v-chart>\n  </div>\n  "
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