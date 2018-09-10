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
var DataSet = require('@antv/data-set');
var sourceData = [
    { x: 'Oceania', low: 1, q1: 9, median: 16, q3: 22, high: 24 },
    { x: 'East Europe', low: 1, q1: 5, median: 8, q3: 12, high: 16 },
    { x: 'Australia', low: 1, q1: 8, median: 12, q3: 19, high: 26 },
    { x: 'South America', low: 2, q1: 8, median: 12, q3: 21, high: 28 },
    { x: 'North Africa', low: 1, q1: 8, median: 14, q3: 18, high: 24 },
    { x: 'North America', low: 3, q1: 10, median: 17, q3: 28, high: 30 },
    { x: 'West Europe', low: 1, q1: 7, median: 10, q3: 17, high: 22 },
    { x: 'West Africa', low: 1, q1: 6, median: 8, q3: 13, high: 16 },
];
var dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'map',
    callback: function (obj) {
        obj.range = [obj.low, obj.q1, obj.median, obj.q3, obj.high];
        return obj;
    },
});
var data = dv.rows;
var scale = [{
        dataKey: 'range',
        max: 35,
    }];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.render = function () {
        var tooltipOpts = {
            showTitle: false,
            crosshairs: {
                type: 'rect'
            },
            itemTpl: '<li data-index={index} style="margin-bottom:4px;">'
                + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
                + '{name}<br/>'
                + '<span style="padding-left: 16px">最大值：{high}</span><br/>'
                + '<span style="padding-left: 16px">上四分位数：{q3}</span><br/>'
                + '<span style="padding-left: 16px">中位数：{median}</span><br/>'
                + '<span style="padding-left: 16px">下四分位数：{q1}</span><br/>'
                + '<span style="padding-left: 16px">最小值：{low}</span><br/>'
                + '</li>'
        };
        var boxStyle = {
            stroke: '#545454',
            fill: '#1890FF',
            fillOpacity: 0.3
        };
        var boxTooltip = ['x*low*q1*median*q3*high', function (x, low, q1, median, q3, high) {
                return {
                    name: x,
                    low: low,
                    q1: q1,
                    median: median,
                    q3: q3,
                    high: high
                };
            }];
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, scale: scale },
                React.createElement(viser_react_1.Tooltip, __assign({}, tooltipOpts)),
                React.createElement(viser_react_1.Axis, null),
                React.createElement(viser_react_1.Box, { position: 'x*range', style: boxStyle, tooltip: boxTooltip }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map