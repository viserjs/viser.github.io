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
var getTreeData = function getTreeData(x1, y1, angle, depth, nodes, edges) {
    var nodes = nodes && arguments[4] !== undefined ? arguments[4] : [];
    var edges = edges && arguments[5] !== undefined ? arguments[5] : [];
    var deg_to_rad = Math.PI / 180;
    if (depth !== 0) {
        var x2 = x1 + Math.cos(angle * deg_to_rad) * depth * 10.0;
        var y2 = y1 + Math.sin(angle * deg_to_rad) * depth * 10.0;
        var id1 = viser_graph_ng_1.Util.guid();
        var id2 = viser_graph_ng_1.Util.guid();
        nodes.push({
            id: id1,
            x: x1,
            y: y1
        });
        nodes.push({
            id: id2,
            x: x2,
            y: y2
        });
        edges.push({
            source: id1,
            target: id2
        });
        getTreeData(x2, y2, angle - 30, depth - 1, nodes, edges);
        getTreeData(x2, y2, angle + 30, depth - 1, nodes, edges);
    }
    return {
        nodes: nodes,
        edges: edges
    };
};
var data = getTreeData(0, 0, -90, 9, null, null);
var graph = {
    container: 'mount',
    width: 500,
    height: 500,
    fitView: 'autoZoom',
    fitViewPadding: true,
    animate: true,
    type: 'graph',
    data: data,
};
var node = {
    size: 2
};
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.graph = graph;
        this.node = node;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: '#mount',
            template: "\n  <div>\n    <v-graph [width]=\"graph.width\" [height]=\"graph.height\"\n      [fitView]=\"graph.fitView\" [fitViewPadding]=\"graph.fitViewPadding\"\n      [animate]=\"graph.animate\" [type]=\"graph.type\"\n      [data]=\"graph.data\" >\n      <v-node [size]=\"node.size\" ></v-node>\n    </v-graph>\n  </div>\n  "
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