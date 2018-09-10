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
    { "term": "Zombieland", "count": 9 },
    { "term": "Wieners", "count": 8 },
    { "term": "Toy Story", "count": 8 },
    { "term": "trashkannon", "count": 7 },
    { "term": "the GROWLERS", "count": 6 },
    { "term": "mudweiser", "count": 6 },
    { "term": "ThunderCats", "count": 4 },
    { "term": "The Taqwacores - Motion Picture", "count": 4 },
    { "term": "The Shawshank Redemption", "count": 2 },
    { "term": "The Olivia Experiment", "count": 1 },
];
var scale = [{
        dataKey: 'count',
        max: 2,
    }];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = data;
        this.scale = scale;
        this.guideTextStyle = {
            textAlign: 'center',
            fontSize: 24,
            fill: '#8543e0',
        };
        this.guideTextPosition = ['50%', '50%'];
        this.barStyle = { lineAppendWidth: 10 };
        this.getPosition = function (obj) {
            return [obj.term, 0];
        };
        this.getContent = function (obj) {
            return obj.term.toString();
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"[20, 80]\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip></v-tooltip>\n      <v-coord type=\"theta\" innerRadius=\"0.2\" startAngle=\"-90\" endAngle=\"180\"></v-coord>\n      <v-bar position=\"term*count\" color=\"#8543e0\" shape=\"line\" select=\"false\" [style]=\"barStyle\"></v-bar>\n      <v-point position=\"term*count\" color=\"#8543e0\" shape=\"circle\"></v-point>\n      <v-guide *ngFor=\"let obj of data\"\n        type=\"text\"\n        [position]=\"this.getPosition(obj)\" [content]=\"this.getContent(obj)\"\n        [style]=\"{\n          textAlign: 'right'\n        }\">\n      </v-guide>\n      <v-guide type=\"text\" [position]=\"guideTextPosition\" content=\"Music\" [style]=\"guideTextStyle\"></v-guide>\n    </v-chart>\n  </div>\n  "
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