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
        dataKey: 'range',
        min: 0,
        max: 240000,
    }, {
        dataKey: 'outliers',
        min: 0,
        max: 240000,
    }];
var colorMap = {
    'I. setosa': 'red',
    'I. versicolor': 'blue',
    'I. virginica': 'green',
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
        $.getJSON('/assets/data/box-3.json', function (sourceData) {
            var dv = new DataSet.View().source(sourceData);
            dv.transform({
                type: 'fold',
                fields: ['SepalLength', 'SepalWidth', 'PetalLength', 'PetalWidth'],
                key: 'type',
                value: 'value'
            })
                .transform({
                type: 'bin.quantile',
                field: 'value',
                as: '_bin',
                groupBy: ['Species', 'type'],
            });
            _this.setState({ data: dv.rows });
        });
    };
    App.prototype.render = function () {
        var data = this.state.data;
        var tooltipOpts = {
            crosshairs: {
                type: 'rect',
            },
        };
        var seriesColor = ['Species', function (val) {
                return colorMap[val];
            }];
        var seriesStyle = ['Species', {
                stroke: '#545454',
                fill: function (val) {
                    return colorMap[val];
                },
                fillOpacity: 0.3
            }];
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, scale: scale },
                React.createElement(viser_react_1.Tooltip, __assign({}, tooltipOpts)),
                React.createElement(viser_react_1.Axis, null),
                React.createElement(viser_react_1.Legend, { marker: "circle" }),
                React.createElement(viser_react_1.Box, { position: "type*_bin", adjust: "dodge", style: seriesStyle, color: seriesColor }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map