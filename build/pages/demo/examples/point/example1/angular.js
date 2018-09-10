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
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.data = [];
        this.pointTooltip = ['gender*height*weight', function (gender, height, weight) {
                return {
                    name: gender,
                    value: height + '(cm), ' + weight + '(kg)'
                };
            }];
        this.tooltipCrosshairs = { type: 'cross' };
        this.tooltipItemTpl = "\n    <li data-index={index} style=\"margin-bottom:4px;\">\n      <span style=\"background-color:{color};\" class=\"g2-tooltip-marker\"></span>\n      {name}<br />{value}\n    </li>\n  ";
        $.getJSON('/assets/data/scatter.json', function (data) {
            _this.data = data;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div >\n    <v-chart [forceFit]=\"true\" [height]=\"400\" [data]=\"data\">\n      <v-tooltip [showTitle]=\"false\" [crosshairs]=\"tooltipCrosshairs\" [itemTpl]=\"tooltipItemTpl\"></v-tooltip>\n      <v-axis></v-axis>\n      <v-point position=\"height*weight\" [size]=\"4\" [opacity]=\"0.65\" [tooltip]=\"pointTooltip\" shape=\"circle\"></v-point>\n    </v-chart>\n  </div>\n  "
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