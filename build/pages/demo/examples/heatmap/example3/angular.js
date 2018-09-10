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
var DataView = DataSet.DataView;
function getMonthWeek(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    var monthFirst = new Date(year, month, 0);
    var intervalDays = Math.round((date.getTime() - monthFirst.getTime()) / 86400000);
    var index = Math.floor((intervalDays + monthFirst.getDay()) / 7);
    return index;
}
var scale = [{
        dataKey: 'month',
        type: 'cat',
        values: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", 'December']
    }, {
        dataKey: 'day',
        type: 'cat',
    }, {
        dataKey: 'week',
        type: 'cat',
        values: ['5', '4', '3', '2', '1', '0'],
    }, {
        dataKey: '涨跌幅',
        type: 'linear',
        min: -10,
        max: 10,
        sync: true,
    }, {
        dataKey: 'time',
        type: 'time',
    }, {
        dataKey: '日期',
        type: 'time',
    }];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 400;
        this.data = [];
        this.scale = scale;
        this.padding = [20, 120, 50, 120];
        this.facetPadding = [0, 15, 30, 15];
        this.fields = ['month'];
        this.colTitle = {
            offsetY: -10,
            style: {
                fontSize: 12,
                textAlign: 'center',
                fill: '#666',
            },
        };
        this.color = ['涨跌幅', '#F51D27-#FA541C-#FFBE15-#FFF2D1-#E3F6FF-#85C6FF-#0086FA-#0A61D7'];
        this.style = {
            lineWidth: 1,
            stroke: '#fff',
        };
        $.getJSON('/assets/data/stock-calendar.json', function (sourceData) {
            sourceData.forEach(function (obj) {
                var date = new Date(obj['日期']);
                var month = date.getMonth();
                obj.month = month;
                obj.day = date.getDay();
                obj.week = getMonthWeek(date).toString();
            });
            var dv = new DataView();
            dv.source(sourceData)
                .transform({
                type: 'sort-by',
                fields: ['day'],
                order: 'DESC',
            });
            _this.data = dv;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div *ngIf=\"data; else loading\">\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [padding]=\"padding\" [data]=\"data\" [scale]=\"scale\">\n      <v-legend dataKey=\"\u6DA8\u8DCC\u5E45\" [offset]=\"0\"></v-legend>\n      <v-tooltip title=\"\u65E5\u671F\"></v-tooltip>\n      <v-facet type=\"list\" [fields]=\"fields\" [cols]=\"3\" [padding]=\"facetPadding\" [colTitle]=\"colTitle\">\n        <v-facet-view>\n          <v-polygon position=\"day*week*\u65E5\u671F\" [color]=\"color\" [style]=\"style\"></v-polygon>\n        </v-facet-view>\n      </v-facet>\n    </v-chart>\n  </div>\n  <ng-template #loading>Loading ...</ng-template>\n  "
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