"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var viser_graph_react_1 = require("viser-graph-react");
var React = require("react");
var getTreeData = function getTreeData(x1, y1, angle, depth, nodes, edges) {
    var nodes = nodes && arguments[4] !== undefined ? arguments[4] : [];
    var edges = edges && arguments[5] !== undefined ? arguments[5] : [];
    var deg_to_rad = Math.PI / 180;
    if (depth !== 0) {
        var x2 = x1 + Math.cos(angle * deg_to_rad) * depth * 10.0;
        var y2 = y1 + Math.sin(angle * deg_to_rad) * depth * 10.0;
        var id1 = viser_graph_react_1.Util.guid();
        var id2 = viser_graph_react_1.Util.guid();
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
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_graph_react_1.Graph, __assign({}, graph),
                React.createElement(viser_graph_react_1.Node, __assign({}, node)))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map