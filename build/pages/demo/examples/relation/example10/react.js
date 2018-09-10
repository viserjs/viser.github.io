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
Object.defineProperty(exports, "__esModule", { value: true });
var viser_react_1 = require("viser-react");
var React = require("react");
var $ = require("jquery");
var DataSet = require('@antv/data-set');
var nodesLabel = [
    'name', {
        offset: 0,
        labelEmit: true,
        textStyle: function (text, item) {
            var textAlign = item.textAlign;
            if (item.point.hasChildren) {
                textAlign = textAlign === 'left' ? 'right' : 'left';
            }
            return {
                fill: 'grey',
                fontSize: 9,
                textAlign: textAlign,
            };
        },
    },
];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            edgeSource: {},
            nodeSource: {},
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        $.getJSON('/assets/data/flare.json', function (sourceData) {
            var dv = new DataSet.View().source(sourceData, {
                type: 'hierarchy',
            });
            dv.transform({
                type: 'hierarchy.cluster',
            });
            var edgeSource = dv.getAllLinks().map(function (link) { return ({
                x: [link.source.x, link.target.x],
                y: [link.source.y, link.target.y],
                source: link.source.id,
                target: link.target.id
            }); });
            var nodeSource = dv.getAllNodes().map(function (node) { return ({
                hasChildren: !!(node.data.children && node.data.children.length),
                name: node.data.name,
                value: node.value,
                depth: node.depth,
                x: node.x,
                y: node.y
            }); });
            _this.setState({
                edgeSource: edgeSource,
                nodeSource: nodeSource,
            });
        });
    };
    App.prototype.render = function () {
        var _a = this.state, edgeSource = _a.edgeSource, nodeSource = _a.nodeSource;
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: [60, 0, 40, 0] },
            React.createElement(viser_react_1.Coord, { type: "polar" }),
            React.createElement(viser_react_1.View, { data: edgeSource },
                React.createElement(viser_react_1.Edge, { position: "x*y", shape: "smooth", color: "grey", opacity: 0.5, tooltip: "source*target" })),
            React.createElement(viser_react_1.View, { data: nodeSource },
                React.createElement(viser_react_1.Point, { position: "x*y", color: "hasChildren", label: nodesLabel }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map