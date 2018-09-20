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
        dataKey: 'LifeExpectancy',
        alias: '人均寿命（年）'
    }, {
        dataKey: 'Population',
        type: 'pow',
        alias: '人口总数'
    }, {
        dataKey: 'GDP',
        alias: '人均国内生产总值($)'
    }, {
        dataKey: 'Country',
        alias: '国家/地区'
    }];
var colorMap = {
    'Asia': viser_ng_1.Global.colors[0],
    'Americas': viser_ng_1.Global.colors[1],
    'Europe': viser_ng_1.Global.colors[2],
    'Oceania': viser_ng_1.Global.colors[3]
};
var laeblFormatter = function (value) {
    return (value / 1000).toFixed(0) + 'k';
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.data = [];
        this.scale = scale;
        this.axisLabel = {
            formatter: laeblFormatter,
        };
        this.pointColor = ['continent', function (val) { return colorMap[val]; }];
        this.pointSize = ['Population', [4, 65]];
        this.pointStyle = ['continent', {
                lineWidth: 1,
                strokeOpacity: 1,
                fillOpacity: 0.3,
                opacity: 0.65,
                stroke: function (val) { return colorMap[val]; },
            }];
        $.getJSON('/assets/data/bubble.json', function (data) {
            _this.data = data;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"true\" [height]=\"400\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip [showTitle]=\"false\"></v-tooltip>\n      <v-axis\n        dataKey=\"GDP\"\n        [label]=\"axisLabel\"\n      ></v-axis>\n      <v-legend dataKey=\"Population\" [show]=\"false\"></v-legend>\n      <v-point\n        position=\"GDP*LifeExpectancy\"\n        [color]=\"pointColor\"\n        [size]=\"pointSize\"\n        [style]=\"pointStyle\"\n        tooltip=\"Country*Population*GDP*LifeExpectancy\"\n        shape=\"circle\"\n      ></v-point>\n    </v-chart>\n  </div>\n  "
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