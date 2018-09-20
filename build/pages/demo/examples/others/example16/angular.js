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
var values = ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 400;
        this.values = values;
        this.data = [];
        this.polygonStyle = {
            stroke: '#fff',
            lineWidth: 1,
        };
        this.timeAxis = { offset: 3 };
        this.guideStyle = {
            fill: '#fff',
            textAlign: 'center',
            shadowBlur: 2,
            shadowColor: 'rgba(0, 0, 0, .45)'
        };
        $.getJSON('/assets/data/polar-heatmap.json', function (data) {
            _this.data = data;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" padding=\"40\" [data]=\"data\">\n      <v-tooltip [showTitle]=\"null\"></v-tooltip>\n      <v-coord type=\"polar\" innerRadius=\"0.2\"></v-coord>\n      <v-axis dataKey=\"week\" [grid]=\"null\" [line]=\"null\" [tickLine]=\"null\" [label]=\"null\"></v-axis>\n      <v-axis dataKey=\"time\" [grid]=\"null\" [line]=\"null\" [tickLine]=\"null\" [label]=\"timeAxis\"></v-axis>\n      <v-polygon\n        position=\"time*week\"\n        [color]=\"['value', '#BAE7FF-#1890FF-#0050B3']\"\n        tooltip=\"week*time*value\"\n        [style]=\"polygonStyle\">\n      </v-polygon>\n      <v-guide *ngFor=\"let val of values; let idx = index;\"\n        type=\"text\"\n        top=\"true\"\n        [position]=\"[0, idx]\"\n        [content]=\"val\"\n        [style]=\"guideStyle\">\n      </v-guide>\n    </v-chart>\n  </div>\n  "
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