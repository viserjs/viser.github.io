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
var data = [
    { time: '10:10', call: 4, waiting: 2, people: 2 },
    { time: '10:15', call: 2, waiting: 6, people: 3 },
    { time: '10:20', call: 13, waiting: 2, people: 5 },
    { time: '10:25', call: 9, waiting: 9, people: 1 },
    { time: '10:30', call: 5, waiting: 2, people: 3 },
    { time: '10:35', call: 8, waiting: 2, people: 1 },
    { time: '10:40', call: 13, waiting: 1, people: 2 }
];
var scale = [{
        dataKey: 'call',
        min: 0
    }, {
        dataKey: 'people',
        min: 0
    }, {
        dataKey: 'waiting',
        min: 0
    }];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = data;
        this.scale = scale;
        this.axisLabel = {
            textStyle: {
                fill: '#fdae6b'
            }
        };
        this.axisGrid = null;
        this.gemoSize = 3;
        this.legendCustom = true;
        this.legendAllowAllCanceled = true;
        this.legendItems = [
            { value: 'waiting', marker: { symbol: 'square', fill: '#3182bd', radius: 5 } },
            { value: 'people', marker: { symbol: 'hyphen', stroke: '#fdae6b', radius: 5, lineWidth: 3 } }
        ];
        this.legendOnClick = function (ev, chart) {
            var item = ev.item;
            var value = item.value;
            var checked = ev.checked;
            var geoms = chart.getAllGeoms();
            for (var i = 0; i < geoms.length; i++) {
                var geom = geoms[i];
                if (geom.getYScale().field === value) {
                    if (checked) {
                        geom.show();
                    }
                    else {
                        geom.hide();
                    }
                }
            }
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip></v-tooltip>\n      <v-legend\n        [custom] = \"legendCustom\"\n        [allowAllCanceled]=\"legendAllowAllCanceled\"\n        [items]=\"legendItems\"\n        [onClick]=\"legendOnClick\"\n      ></v-legend>\n      <v-axis\n        [dataKey]=\"people\"\n        [grid]=\"axisGrid\"\n        [label]=\"axisLabel\"\n      ></v-axis>\n      <v-bar position=\"time*waiting\" color=\"#3182bd\"></v-bar>\n      <v-smooth-line position=\"time*people\" color=\"#fdae6b\" [size]=\"gemoSize\"></v-smooth-line>\n      <v-point shape=\"circle\" position=\"time*people\" color=\"#fdae6b\" [size]=\"gemoSize\"></v-point>\n    </v-chart>\n  </div>\n  "
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