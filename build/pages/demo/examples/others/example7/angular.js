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
var scale = [{
        dataKey: 'type',
        range: [0, 1]
    }];
var axis1Opts = {
    dataKey: 'clarity',
    grid: {
        align: 'center',
        lineStyle: {
            lineDash: [0, 0]
        }
    }
};
var jitterPointOpts = {
    gemo: 'pointJitter',
    position: 'clarity*type',
    color: 'clarity',
    shape: 'circle',
    opacity: 0.65,
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 400;
        this.data = [];
        this.scale = scale;
        this.axis1Opts = axis1Opts;
        this.jitterPointOpts = jitterPointOpts;
        $.getJSON('/assets/data/diamond.json', function (data) {
            data.forEach(function (obj) {
                obj.type = '1';
            });
            _this.data = data;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"[ 40, 100, 80, 80 ]\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip></v-tooltip>\n      <v-coord type=\"polar\"></v-coord>\n      <v-axis [dataKey]=\"axis1Opts.dataKey\" [grid]=\"axis1Opts.grid\"></v-axis>\n      <v-jitter-point [position]=\"jitterPointOpts.position\" [color]=\"jitterPointOpts.color\" [shape]=\"jitterPointOpts.shape\" [opacity]=\"jitterPointOpts.opacity\"></v-jitter-point>\n    </v-chart>\n  </div>\n  "
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