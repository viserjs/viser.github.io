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
var viser_react_1 = require("viser-react");
var React = require("react");
var $ = require("jquery");
var DataSet = require('@antv/data-set');
var scale = [{
        dataKey: 'year',
        tickInterval: 10
    }];
var legendOpts = {
    useHtml: true,
    position: "right",
    legendMarker: {
        'g2-legend-marker': {
            borderRadius: 'none'
        },
        'g2-legend-title': {
            fontSize: '12px',
            fontWeight: 500,
            margin: 0,
            color: '#ff8800'
        }
    }
};
var axisOpts = {
    dataKey: 'count',
    line: {
        lineWidth: 1,
        stroke: '#BFBFBF'
    },
    tickLine: {
        length: 8,
        stroke: '#ddd'
    },
    grid: null
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
        $.getJSON('/assets/data/baby-names.json', function (sourceData) {
            var dv = new DataSet.View().source(sourceData)
                .transform({
                type: 'fill-rows',
                groupBy: ['name'],
                orderBy: ['year']
            })
                .transform({
                type: 'impute',
                field: 'n',
                method: 'value',
                value: 0
            })
                .transform({
                type: 'aggregate',
                fields: ['n'],
                operations: ['sum'],
                groupBy: ['year', 'name'],
                orderBy: ['year'],
                as: ['count']
            });
            _this.setState({ data: dv });
        });
    };
    App.prototype.render = function () {
        var data = this.state.data;
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, animate: false, padding: [20, 140, 60, 50], data: data, scale: scale },
                React.createElement(viser_react_1.Legend, __assign({}, legendOpts)),
                React.createElement(viser_react_1.Axis, __assign({}, axisOpts)),
                React.createElement(viser_react_1.Area, { position: 'year*count', adjust: ['stack', 'symmetric'], color: 'name', opacity: 1 }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map