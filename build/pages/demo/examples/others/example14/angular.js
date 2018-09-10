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
    { "question": "问题 1", "percent": 0.21 },
    { "question": "问题 2", "percent": 0.40 },
    { "question": "问题 3", "percent": 0.49 },
    { "question": "问题 4", "percent": 0.52 },
    { "question": "问题 5", "percent": 0.53 },
    { "question": "问题 6", "percent": 0.84 },
    { "question": "问题 7", "percent": 1.0 },
    { "question": "问题 8", "percent": 1.2 }
];
var scale = [{
        dataKey: 'percent',
        min: 0,
        max: 2,
    }];
var interval1Opts = {
    position: 'question*percent',
    color: ['percent', '#BAE7FF-#1890FF-#0050B3'],
    tooltip: ['percent', function (val) {
            return {
                name: '占比',
                value: val * 100 + '%'
            };
        }],
    label: ['percent', {
            offset: -5
        }],
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 500;
        this.data = data;
        this.scale = scale;
        this.interval1Opts = interval1Opts;
        this.getPosition = function (obj) {
            return [obj.question, 0];
        };
        this.getContent = function (obj) {
            return obj.question + ' ';
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"[ 40, 40, 130, 40 ]\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip title=\"question\"></v-tooltip>\n      <v-coord type=\"polar\" innerRadius=\"0.1\" direction=\"rotate\"></v-coord>\n      <v-interval [position]=\"interval1Opts.position\" [color]=\"interval1Opts.color\"\n        [tooltip]=\"interval1Opts.tooltip\" [label]=\"interval1Opts.label\"></v-interval>\n      <v-guide *ngFor=\"let obj of data\"\n        type=\"text\"\n        [position]=\"this.getPosition(obj)\"\n        [content]=\"this.getContent(obj)\"\n        [style]=\"{\n          textAlign: 'right'\n        }\">\n      </v-guide>\n    </v-chart>\n  </div>\n  "
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