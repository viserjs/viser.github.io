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
        dataKey: 'x',
        sync: true,
    }, {
        dataKey: 'y',
        sync: true,
    }];
var tooltip = [
    'target*source*value', function (target, source, value) { return ({
        name: source.name + ' to ' + target.name + '</span>',
        value: value,
    }); },
];
var polygonLabel = [
    'name', {
        textStyle: {
            fill: '#545454',
            textAlign: 'start',
        },
        offset: 0,
        formatter: function (val) {
            return '  ' + val;
        },
    }
];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.forceFit = true;
        this.height = 400;
        this.edgesData = [];
        this.nodesData = [];
        this.scale = scale;
        this.padding = [40, 80];
        this.tooltip = tooltip;
        this.polygonLabel = polygonLabel;
        this.sankeyStyle = { curvature: 0.5 };
        this.polygonStyle = { stroke: '#ccc' };
        $.getJSON('/assets/data/energy.json', function (sourceData) {
            var dv = new DataSet.View().source(sourceData, {
                type: 'graph',
                edges: function (d) { return d.links; },
            });
            dv.transform({
                type: 'diagram.sankey',
                nodeWidth: 0.015,
                nodePadding: 0.02,
            });
            _this.edgesData = dv.edges;
            _this.nodesData = dv.nodes;
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [forceFit]=\"forceFit\" [height]=\"height\" [scale]=\"scale\" [padding]=\"padding\">\n      <v-tooltip showTitle=\"false\"></v-tooltip>\n      <v-view [data]=\"edgesData\" [scale]=\"scale\">\n        <v-sankey position=\"x*y\" color=\"#bbb\" [opacity]=\"0.6\" [tooltip]=\"tooltip\" [style]=\"sankeyStyle\"></v-sankey>\n      </v-view>\n      <v-view [data]=\"nodesData\" [scale]=\"scale\">\n        <v-polygon position=\"x*y\" color=\"name\" [style]=\"polygonStyle\" [label]=\"polygonLabel\" tooltip=\"false\"></v-polygon>\n      </v-view>\n    </v-chart>\n  </div>\n  "
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