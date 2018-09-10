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
var DataSet = require('@antv/data-set');
var data = [
    { year: '2000', '类型 A': 21.0, '类型 B': 16, '类型 C': 8 },
    { year: '2001', '类型 A': 25.0, '类型 B': 16, '类型 C': 8 },
    { year: '2002', '类型 A': 25.0, '类型 B': 15, '类型 C': 8 },
    { year: '2003', '类型 A': 25.0, '类型 B': 14, '类型 C': 7 },
    { year: '2004', '类型 A': 25.0, '类型 B': 14, '类型 C': 7 },
    { year: '2005', '类型 A': 24.0, '类型 B': 13, '类型 C': 8 },
    { year: '2006', '类型 A': 24.0, '类型 B': 14, '类型 C': 7 },
    { year: '2007', '类型 A': 26.0, '类型 B': 16, '类型 C': 7 },
    { year: '2008', '类型 A': 26.0, '类型 B': 15.2, '类型 C': 8 },
    { year: '2009', '类型 A': 27.1, '类型 B': 15.2, '类型 C': 10 },
    { year: '2010', '类型 A': 27.5, '类型 B': 15.4, '类型 C': 8 },
    { year: '2011', '类型 A': 26.4, '类型 B': 15.2, '类型 C': 9 },
    { year: '2012', '类型 A': 28.8, '类型 B': 15.4, '类型 C': 9 },
    { year: '2013', '类型 A': 33.3, '类型 B': 16.7, '类型 C': 12 },
    { year: '2014', '类型 A': 38.2, '类型 B': 19.5, '类型 C': 18 }
];
var dv = new DataSet.View().source(data).transform({
    type: 'fold',
    fields: ['类型 A', '类型 B', '类型 C'],
    key: '难民类型',
    value: 'count',
    remains: 'year'
});
var stackInterval1Opts = {
    position: 'year*count',
    color: '难民类型',
    style: {
        lineWidth: 1,
        stroke: '#fff'
    }
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.dv = dv;
        this.stackInterval1Opts = stackInterval1Opts;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"80\" [data]=\"dv\">\n      <v-coord type=\"polar\" [innerRadius]=\"0.1\"></v-coord>\n      <v-axis dataKey=\"percent\" [title]=\"{offset: 40, text: '\u767E\u5206\u6BD4'}\"></v-axis>\n      <v-legend dataKey=\"\u96BE\u6C11\u7C7B\u578B\" position=\"bottom\"></v-legend>\n      <v-stack-interval [position]=\"stackInterval1Opts.position\" [color]=\"stackInterval1Opts.color\"\n        [style]=\"stackInterval1Opts.style\"></v-stack-interval>\n    </v-chart>\n  </div>\n  "
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