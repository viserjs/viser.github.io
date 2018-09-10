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
var label = ['name', {
        offset: -10,
        textStyle: {
            textAlign: 'left',
            rotate: 90
        },
    }];
var style = {
    stroke: 'grey',
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            edgesData: [],
            nodesData: [],
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        $.getJSON('/assets/data/relationship-with-weight.json', function (sourceData) {
            var dv = new DataSet.View().source(sourceData, {
                type: 'graph',
                edges: function (d) { return d.links; },
            });
            dv.transform({
                type: 'diagram.arc',
                marginRatio: 0.5,
            });
            _this.setState({
                edgesData: dv.edges,
                nodesData: dv.nodes,
            });
        });
    };
    App.prototype.render = function () {
        var _a = this.state, edgesData = _a.edgesData, nodesData = _a.nodesData;
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 500 },
            React.createElement(viser_react_1.Tooltip, { showTitle: false }),
            React.createElement(viser_react_1.View, { data: edgesData },
                React.createElement(viser_react_1.Edge, { position: "x*y", shape: "arc", color: "source", opacity: 0.5, tooltip: "source*target" })),
            React.createElement(viser_react_1.View, { data: nodesData },
                React.createElement(viser_react_1.Point, { position: "x*y", size: "value", color: "id", opacity: 0.5, style: style, label: label, shape: "circle" }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map