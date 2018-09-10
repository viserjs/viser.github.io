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
        $.getJSON('/assets/data/heatmap-1.json', function (data) {
            var source = [];
            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var obj = {};
                obj.name = item[0];
                obj.day = item[1];
                obj.sales = item[2];
                source.push(obj);
            }
            _this.setState({ data: source });
        });
    };
    App.prototype.render = function () {
        var data = this.state.data;
        var scale = [{
                dataKey: 'name',
                type: 'cat',
                values: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura'],
            }, {
                dataKey: 'day',
                type: 'cat',
                values: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            }];
        var axis1Opts = {
            dataKey: 'name',
            tickLine: null,
            grid: {
                align: 'center',
                lineStyle: {
                    lineWidth: 1,
                    lineDash: null,
                    stroke: '#f0f0f0',
                },
            },
        };
        var axis2Opts = {
            dataKey: 'day',
            title: null,
            grid: {
                align: 'center',
                lineStyle: {
                    lineWidth: 1,
                    lineDash: null,
                    stroke: '#f0f0f0',
                },
                showFirstLine: true,
            },
        };
        var seriesOpts = {
            color: ['sales', '#BAE7FF-#1890FF-#0050B3'],
            position: 'name*day',
            label: ['sales', {
                    offset: -2,
                    textStyle: {
                        fill: '#fff',
                        shadowBlur: 2,
                        shadowColor: 'rgba(0, 0, 0, .45)',
                    }
                }],
            style: {
                lineWidth: 1,
                stroke: '#fff',
            },
        };
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, scale: scale },
                React.createElement(viser_react_1.Legend, null),
                React.createElement(viser_react_1.Tooltip, null),
                React.createElement(viser_react_1.Axis, __assign({}, axis1Opts)),
                React.createElement(viser_react_1.Axis, __assign({}, axis2Opts)),
                React.createElement(viser_react_1.Polygon, __assign({}, seriesOpts)))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map