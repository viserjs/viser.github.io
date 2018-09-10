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
var sourceData = [
    { value: 251, type: '大事例一', name: '子事例一' },
    { value: 1048, type: '大事例一', name: '子事例二' },
    { value: 610, type: '大事例二', name: '子事例三' },
    { value: 434, type: '大事例二', name: '子事例四' },
    { value: 335, type: '大事例三', name: '子事例五' },
    { value: 250, type: '大事例三', name: '子事例六' },
];
var dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'percent',
    field: 'value',
    dimension: 'type',
    as: 'percent',
});
var data = dv.rows;
var viewDv = new DataSet.View().source(sourceData);
viewDv.transform({
    type: 'percent',
    field: 'value',
    dimension: 'name',
    as: 'percent'
});
var viewData = viewDv.rows;
var scale = {
    dataType: 'percent',
    formatter: '.2%',
};
var itemTpl = '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>';
var style = {
    lineWidth: 1,
    stroke: '#fff',
};
var label = ['type', { offset: -10 }];
var tooltip = [
    'name*percent', function (item, percent) {
        percent = (percent * 100).toFixed(2) + '%';
        return {
            name: item,
            value: percent,
        };
    },
];
var color = ['name', ['#BAE7FF', '#7FC9FE', '#71E3E3', '#ABF5F5', '#8EE0A1', '#BAF5C4']];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.forceFit = true;
        this.height = 400;
        this.data = data;
        this.scale = scale;
        this.viewData = viewData;
        this.itemTpl = itemTpl;
        this.tooltip = tooltip;
        this.color = color;
        this.label = label;
        this.style = style;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"true\" [height]=\"height\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip [showTitle]=\"false\" [itemTpl]=\"itemTpl\"></v-tooltip>\n      <v-coord type=\"theta\" [radius]=\"0.5\"></v-coord>\n      <v-pie position=\"percent\" color=\"type\" [label]=\"label\" [select]=\"false\" [style]=\"style\" [tooltip]=\"tooltip\"></v-pie>\n      <v-view [data]=\"viewData\" [scale]=\"scale\">\n        <v-coord type=\"theta\" [radius]=\"0.75\" innerRadius=\"{{0.5 / 0.75}}\"></v-coord>\n        <v-pie position=\"percent\" [color]=\"color\" label=\"name\" [select]=\"false\" [style]=\"style\" [tooltip]=\"tooltip\"></v-pie>\n      </v-view>\n    </v-chart>\n  </div>\n  "
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