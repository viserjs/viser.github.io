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
var nodesLabel = [
    'name', {
        offset: 0,
        textStyle: function (text, item) {
            if (item.point.hasChildren) {
                return {
                    opacity: 0
                };
            }
            return {
                textBaseline: 'middle',
                fill: 'grey',
                fontSize: 9,
                textAlign: 'center'
            };
        }
    },
];
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.height = 400;
        this.width = 400;
        this.padding = [60, 0, 40, 0];
        this.data = {};
        this.size = ['r', function (r) { return r * 400; }];
        this.style = { stroke: 'rgb(183, 55, 121)' };
        this.color = ['r', 'rgb(252, 253, 191)-rgb(231, 82, 99)-rgb(183, 55, 121)'];
        this.label = nodesLabel;
        $.getJSON('/assets/data/flare.json', function (sourceData) {
            var dv = new DataSet.View().source(sourceData, {
                type: 'hierarchy',
            });
            dv.transform({
                type: 'hierarchy.circle-packing',
            });
            _this.data = dv.getAllNodes().map(function (node) { return ({
                hasChildren: !!(node.data.children && node.data.children.length),
                name: node.data.name.split(/(?=[A-Z][^A-Z])/g).join('\n'),
                value: node.value,
                depth: node.depth,
                x: node.x,
                y: node.y,
                r: node.r
            }); });
        });
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-chart [height]=\"height\" [width]=\"height\" [data]=\"data\" [padding]=\"0\">\n      <v-tooltip [showTitle]=\"false\"></v-tooltip>\n      <v-point position=\"x*y\" shape=\"circle\" tooltip=\"name\" [size]=\"size\" [color]=\"color\" [style]=\"style\" [label]=\"label\"></v-point>\n    </v-chart>\n  </div>\n  "
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