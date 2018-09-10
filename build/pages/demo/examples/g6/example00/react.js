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
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_graph_react_1.Graph, __assign({}, graph),
                React.createElement(viser_graph_react_1.Zoom, __assign({}, zoom)))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map