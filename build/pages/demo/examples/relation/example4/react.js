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
            _this.setState({
                edgesData: dv.edges,
                nodesData: dv.nodes,
            });
        });
    };
    App.prototype.render = function () {
        var _a = this.state, edgesData = _a.edgesData, nodesData = _a.nodesData;
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, scale: scale, padding: [40, 80] },
            React.createElement(viser_react_1.Tooltip, { showTitle: false }),
            React.createElement(viser_react_1.View, { data: edgesData },
                React.createElement(viser_react_1.Sankey, { position: 'x*y', style: { curvature: 0.5 }, color: '#bbb', opacity: 0.6, tooltip: tooltip })),
            React.createElement(viser_react_1.View, { data: nodesData },
                React.createElement(viser_react_1.Polygon, { position: "x*y", color: "name", style: { stroke: '#ccc' }, label: polygonLabel, tooltip: false }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map