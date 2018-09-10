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
var viser_graph_ng_1 = require("viser-graph-ng");
var data = {
    roots: [{
            label: 'root',
            id: 1,
            children: [{
                    label: 'child1',
                    children: [
                        {
                            label: 'child\n1.1'
                        }
                    ]
                }, {
                    label: 'child2'
                }]
        }]
};
var graph = {
    width: 500,
    height: 500,
    fitView: 'cc',
    fitViewPadding: true,
    animate: true,
    type: 'tree',
    data: data,
    onClick: function (ev, graph) {
        console.log('click', ev, graph);
    }
};
var zoom = {
    min: 1,
    max: 10,
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.data = data;
        this.graph = graph;
        this.zoom = zoom;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-graph [width]=\"graph.width\" [height]=\"graph.height\"\n      [fitView]=\"graph.fitView\" [fitViewPadding]=\"graph.fitViewPadding\"\n      [animate]=\"graph.animate\" [type]=\"graph.type\"\n      [data]=\"data\" [onClick]=\"graph.onClick\">\n      <v-zoom [max]=\"zoom.max\" [min]=\"zoom.min\"></v-zoom>\n    </v-graph>\n  </div>\n  "
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
                viser_graph_ng_1.ViserGraphModule
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