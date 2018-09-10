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
var style = {
    stroke: '#FFF',
    lineWidth: 1,
};
var color = ['value', '#BAE7FF-#1890FF-#0050B3'];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: {},
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        $.getJSON('/assets/data/sunburst.json', function (sourceData) {
            var dv = new DataSet.View().source(sourceData, {
                type: 'hierarchy',
            });
            dv.transform({
                type: 'hierarchy.partition',
                field: 'sum',
                as: ['x', 'y'],
            });
            _this.setState({
                data: dv.getAllNodes().filter(function (node) {
                    return node.depth !== 0;
                }).map(function (node) {
                    return {
                        label: node.data.label,
                        sum: node.data.sum,
                        uv: node.data.uv,
                        value: node.value,
                        x: node.x,
                        y: node.y,
                    };
                }),
            });
        });
    };
    App.prototype.render = function () {
        var data = this.state.data;
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 500, data: data, padding: 0 },
            React.createElement(viser_react_1.Coord, { type: "polar", innerRadius: 0.3 }),
            React.createElement(viser_react_1.Tooltip, { showTitle: false }),
            React.createElement(viser_react_1.Polygon, { position: "x*y", color: color, active: false, style: style, tooltip: "label*sum" })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map