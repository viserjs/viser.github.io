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
        dataKey: 'date',
        type: 'cat',
    }, {
        dataKey: 'range',
        max: 30,
        min: -25,
    }, {
        dataKey: 'mean_temp',
        alias: 'Average Daily Temperature',
    }];
var legendOpt = {
    offset: 25,
    title: {
        fontSize: 12,
        fill: '#4F4F4F',
        fontWeight: 300,
        textAlign: 'start'
    },
    slidable: false,
    position: 'bottom',
    offsetX: 25,
};
var guideLineOpt = {
    start: {
        date: 'min',
        range: 'min'
    },
    end: {
        date: 'min',
        range: 'max'
    },
    lineStyle: {
        stroke: '#aaa',
        lineWidth: 1,
        lineDash: null
    },
    text: {
        position: 1,
        offsetY: -6,
        autoRotate: false,
        style: {
            fontSize: 16,
            textAlign: 'center',
            fontWeight: 100,
            fill: '#aaa'
        },
        content: 'January'
    }
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 400;
        this.padding = [20, 0, 105];
        this.data = [];
        this.scale = scale;
        this.color = ['mean_temp', 'rgb(44, 123, 182)-rgb(0, 166, 202)-rgb(0, 204, 188)-rgb(144, 235, 157)-rgb(255, 255, 140)-rgb(249, 208, 87)-rgb(242, 158, 46)-rgb(231, 104, 24)-rgb(215, 25, 28)'];
        this.legendOpt = legendOpt;
        this.guideLineOpt = guideLineOpt;
        this.guideTextData = [-20, -10, 0, 10, 20, 30];
        $.getJSON('/assets/data/daily-temp-in-boston.json', function (data) {
            var ds = new DataSet();
            var dv = ds.createView()
                .source(data)
                .transform({
                type: 'map',
                callback: function (row) {
                    row.range = [row.min_temp, row.max_temp];
                    return row;
                }
            });
            _this.data = dv;
        });
    }
    AppComponent.prototype.getStart = function (entry) {
        return {
            date: '2015-7-1',
            range: entry,
        };
    };
    AppComponent.prototype.getContent = function (entry) {
        return entry + "\u00B0C";
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"padding\" [data]=\"data\">\n      <v-legend\n        [offset]=\"legendOpt.offset\"\n        [title]=\"legendOpt.title\"\n        [slidable]=\"legendOpt.slidable\"\n        [position]=\"legendOpt.position\"\n        [offsetX]=\"legendOpt.offsetX\"\n      ></v-legend>\n      <v-tooltip></v-tooltip>\n      <v-coord type=\"polar\" [innerRadius]=\"0.35\"></v-coord>\n      <v-axis dataKey=\"date\" [show]=\"false\"></v-axis>\n      <v-axis dataKey=\"range\" [line]=\"null\" [tickLine]=\"null\" [label]=\"null\"></v-axis>\n      <v-interval position=\"date*range\" [color]=\"color\" [size]=\"2.5\" [opacity]=\"1\"></v-interval>\n      <v-guide\n        type=\"line\"\n        [start]=\"guideLineOpt.start\"\n        [end]=\"guideLineOpt.end\"\n        [lineStyle]=\"guideLineOpt.lineStyle\"\n        [text]=\"guideLineOpt.text\"\n        content=\"January\"\n      ></v-guide>\n      <v-guide\n        *ngFor=\"let entry of guideTextData\"\n        type=\"text\"\n        [start]=\"this.getStart(entry)\"\n        [content]=\"this.getContent(entry)\"\n        [style]=\"{\n          fill: '#C4C4C4',\n          fontSize: 12,\n          fontWeight: 100,\n          textAlign: 'center',\n          textBaseline: 'middle'\n        }\"\n      ></v-guide>\n    </v-chart>\n  </div>\n  "
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