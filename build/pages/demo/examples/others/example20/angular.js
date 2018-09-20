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
    { "month": '一月', "tem": 7, "city": "tokyo" },
    { "month": '二月', "tem": 6.9, "city": "tokyo" },
    { "month": '三月', "tem": 9.5, "city": "tokyo" },
    { "month": '四月', "tem": 14.5, "city": "tokyo" },
    { "month": '五月', "tem": 18.2, "city": "tokyo" },
    { "month": '六月', "tem": 21.5, "city": "tokyo" },
    { "month": '七月', "tem": 25.2, "city": "tokyo" },
    { "month": '八月', "tem": 26.5, "city": "tokyo" },
    { "month": '九月', "tem": 23.3, "city": "tokyo" },
    { "month": '十月', "tem": 18.3, "city": "tokyo" },
    { "month": '十一月', "tem": 13.9, "city": "tokyo" }
];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = data;
        this.containerTpl = "\n    <div class=\"g2-tooltip\">\n      <p class=\"g2-tooltip-title\"></p>\n      <table class=\"g2-tooltip-list\"></table>\n    </div>\n  ";
        this.itemTpl = "\n    <tr class=\"g2-tooltip-list-item\">\n      <td style=\"color:{color}\">{name}</td>\n      <td>{value}</td>\n    </tr>\n  ";
        this.offset = 50;
        this.g2TooltipList = {
            margin: '10px'
        };
        this.g2Tooltip = {
            position: 'absolute',
            visibility: 'hidden',
            border: '1px solid #efefef',
            backgroundColor: 'white',
            color: '#000',
            opacity: "0.8",
            padding: '5px 15px',
            transition: 'top 200ms,left 200ms'
        };
        this.defaultPoint = { month: '七月', tem: 25.2 };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            styles: ["\n    .g2-tooltip-title {\n      margin-top: 12px;\n    }\n    .g2-tooltip-list td {\n      border: 1px solid #cdcdcd;\n      padding: 5px 8px;\n      font-size: 12px;\n    }\n  "],
            encapsulation: core_1.ViewEncapsulation.None,
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [data]=\"data\">\n      <v-tooltip\n        [defaultPoint]=\"defaultPoint\"\n        [g2Tooltip]=\"g2Tooltip\"\n        [g2TooltipList]=\"g2TooltipList\"\n        [containerTpl]=\"containerTpl\"\n        [itemTpl]=\"itemTpl\"\n        [offset]=\"offset\"\n      ></v-tooltip>\n      <v-axis></v-axis>\n      <v-line position=\"month*tem\"></v-line>\n    </v-chart>\n  </div>\n  "
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