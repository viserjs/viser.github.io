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
var data = [];
var n = 31;
for (var i = 0; i < 372; i++) {
    var now = Date();
    data[i] = {};
    data[i].time = new Date(now).getTime() + i * 1000 * 3600 * 24;
    var random = Math.floor(Math.random() * 10);
    if (((i % n > 2) && (i % n < 4)) || ((i % n >= 6) && (i % n < 7))) {
        data[i].value = 30 + random * 7;
    }
    else if ((i % n >= 4) && (i % n < 6)) {
        data[i].value = 60 + random * 8;
    }
    else {
        data[i].value = 10 + random * 5;
    }
}
var scale = [{
        dataKey: 'time',
        type: 'timeCat',
        mask: 'YYYY.MM.DD'
    }, {
        dataKey: 'value',
        min: 0,
    }];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = data;
        this.scale = scale;
        this.startAngle = 0.5 * Math.PI;
        this.endAngle = 12.5 * Math.PI;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"[0, 60, 30, 0]\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip [showTitle]=\"null\"></v-tooltip>\n      <v-coord type=\"helix\" [startAngle]=\"startAngle\" [endAngle]=\"endAngle\"></v-coord>\n      <v-axis dataKey=\"time\" [line]=\"null\"></v-axis>\n      <v-interval position=\"time*value\" [color]=\"['value', '#ffffff-#1890FF']\" [size]=\"0.45\"></v-interval>\n    </v-chart>\n  </div>\n  "
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