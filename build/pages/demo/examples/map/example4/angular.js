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
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 400;
        this.showTitle = false;
        this.data = [];
        this.bgData = [];
        this.scale = [{
                dataKey: 'x',
                nice: false,
                sync: true
            }, {
                dataKey: 'y',
                nice: false,
                sync: true
            }];
        $.getJSON('/assets/data/us-states.hex.json', function (data) {
            var dv = new DataSet.View().source(data, {
                type: 'hex',
                width: 100,
                height: 100,
            });
            _this.bgData = dv._gridRows;
            _this.data = dv;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"20\" [scale]=\"scale\">\n      <v-tooltip [showTitle]=\"showTitle\"></v-tooltip>\n      <v-coord></v-coord>\n      <v-view [data]=\"bgData\">\n        <v-polygon position=\"x*y\" color=\"grey\" [opacity]=\"0.5\"\n          [style]=\"{\n            stroke: 'white',\n            lineWidth: 1\n          }\"\n          tooltip=\"key\"\n        ></v-polygon>\n      </v-view>\n      <v-view [data]=\"data\">\n        <v-polygon position=\"x*y\" color=\"#2FC25B\"\n          [style]=\"{\n            stroke: 'white',\n            lineWidth: 5\n          }\"\n          [label]=\"['key', {\n            offset: 0,\n            textStyle: {\n                fontSize: 14,\n                fontWeight: 500\n            }\n          }]\"\n          tooltip=\"capital\"\n        ></v-polygon>\n      </v-view>\n    </v-chart>\n  </div>\n  "
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