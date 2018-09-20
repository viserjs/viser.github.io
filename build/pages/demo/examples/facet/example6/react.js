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
var DataView = DataSet.DataView;
var scale = [{
        dataKey: 'mean',
        tickCount: 5,
        sync: true,
    }, {
        dataKey: 'cut',
        sync: true,
    }];
var views = function (view, facet) {
    var data = facet.data;
    var dv = new DataView();
    dv.source(data).transform({
        type: 'aggregate',
        fields: ['price'],
        operations: ['mean'],
        as: ['mean'],
        groupBy: ['cut']
    });
    return {
        data: dv,
        series: {
            quickType: 'bar',
            position: 'cut*mean',
            color: 'cut',
        }
    };
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: [],
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        $.getJSON('/assets/data/diamond.json', function (data) {
            _this.setState({ data: data });
        });
    };
    App.prototype.render = function () {
        var data = this.state.data;
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, scale: scale },
            React.createElement(viser_react_1.Tooltip, { crosshairs: false }),
            React.createElement(viser_react_1.Legend, { dataKey: "cut", position: "top" }),
            React.createElement(viser_react_1.Axis, { dataKey: "cut", label: null, tickLine: null }),
            React.createElement(viser_react_1.Facet, { type: "tree", fields: ['clarity'], line: { stroke: '#c0d0e0' }, lineSmooth: true, views: views })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map