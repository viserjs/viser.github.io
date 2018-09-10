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
        dataKey: 'mean',
        tickCount: 5,
        sync: true,
    }, {
        dataKey: 'cut',
        sync: true,
    }];
var views = function (view, facet) {
    var data = facet.data;
    var dv = new DataView();
    dv.source(data).transform({
        type: 'aggregate',
        fields: ['price'],
        operations: ['mean'],
        as: ['mean'],
        groupBy: ['cut']
    });
    return {
        data: dv,
        series: {
            quickType: 'bar',
            position: 'cut*mean',
            color: 'cut',
        }
    };
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.lineSmooth = true;
        this.height = 400;
        this.data = [];
        this.scale = scale;
        this.fields = ['clarity'];
        this.line = { stroke: '#c0d0e0' };
        this.views = views;
        $.getJSON('/assets/data/diamond.json', function (data) {
            _this.data = data;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"400\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip [crosshairs]=\"false\"></v-tooltip>\n      <v-legend dataKey=\"cut\" position=\"top\"></v-legend>\n      <v-axis dataKey=\"cut\" [label]=\"null\" [tickLine]=\"null\"></v-axis>\n      <v-facet type=\"tree\" [fields]=\"fields\" [line]=\"line\" [lineSmooth]=\"lineSmooth\" [views]=\"views\"></v-facet>\n    </v-chart>\n  </div>\n  "
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