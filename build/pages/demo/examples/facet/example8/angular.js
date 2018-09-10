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
var scale = [{
        dataKey: 'age',
        sync: true,
        tickCount: 11,
    }, {
        dataKey: 'total_percentage',
        sync: true,
        formatter: function (v) {
            return v + '%';
        }
    }, {
        dataKey: 'gender',
        sync: true,
    }];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 400;
        this.data = [];
        this.scale = scale;
        this.fields = ['gender'];
        this.color = ['gender', ['#1890ff', '#f04864']];
        $.getJSON('/assets/data/population.json', function (sourceData) {
            var tmp = [];
            var dates = [];
            sourceData.male.values.forEach(function (obj) {
                if (dates.indexOf(obj.date) === -1) {
                    dates.push(obj.date);
                }
                obj.age_groups.forEach(function (subObject) {
                    subObject.gender = 'male';
                    subObject.date = obj.date;
                    tmp.push(subObject);
                });
            });
            sourceData.female.values.forEach(function (obj) {
                obj.age_groups.forEach(function (subObject) {
                    subObject.gender = 'female';
                    subObject.date = obj.date;
                    tmp.push(subObject);
                });
            });
            var dv = new DataSet.View().source(tmp);
            dv.transform({
                type: 'filter',
                callback: function (row) {
                    return new Date(row.date * 1000).getFullYear() === new Date(dates[0] * 1000).getFullYear();
                }
            });
            _this.data = dv.rows;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"400\" [data]=\"data\" [scale]=\"scale\">\n      <v-tooltip></v-tooltip>\n      <v-legend></v-legend>\n      <v-axis></v-axis>\n      <v-facet type=\"mirror\" [fields]=\"fields\" [transpose]=\"true\">\n        <v-facet-view>\n          <v-bar position=\"age*total_percentage\" [color]=\"color\"></v-bar>\n        </v-facet-view>\n      </v-facet>\n    </v-chart>\n  </div>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
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
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.default = AppModule;
//# sourceMappingURL=angular.js.map