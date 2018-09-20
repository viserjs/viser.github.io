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
var expectData = [
    { value: 100, name: '展现' },
    { value: 80, name: '点击' },
    { value: 60, name: '访问' },
    { value: 40, name: '咨询' },
    { value: 30, name: '订单' }
];
var actualData = [
    { value: 80, name: '展现' },
    { value: 50, name: '点击' },
    { value: 30, name: '访问' },
    { value: 10, name: '咨询' },
    { value: 5, name: '订单' },
];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var tooltipOpts = {
            showTitle: false,
            itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
        };
        var pyramidOpts = {
            position: 'name*value',
            color: ['name', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF']],
            label: ['name', {
                    offset: 35,
                    labelLine: {
                        lineWidth: 1,
                        stroke: 'rgba(0, 0, 0, 0.15)',
                    }
                }],
            tooltip: ['name*value', function (name, value) {
                    return {
                        name: '预期' + name,
                        value: value,
                    };
                }],
            opacity: 0.65,
        };
        var pyramidOpts1 = {
            quickType: 'pyramid',
            position: 'name*value',
            color: ['name', ['#0050B3', '#1890FF', '#40A9FF', '#69C0FF', '#BAE7FF']],
            tooltip: ['name*value', function (name, value) {
                    return {
                        name: '实际' + name,
                        value: value,
                    };
                }],
            style: {
                lineWidth: 1,
                stroke: '#fff',
            },
            opacity: 1,
        };
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: expectData },
                React.createElement(viser_react_1.Tooltip, __assign({}, tooltipOpts)),
                React.createElement(viser_react_1.Coord, { type: "rect", direction: "LT" }),
                React.createElement(viser_react_1.Pyramid, __assign({}, pyramidOpts)),
                React.createElement(viser_react_1.View, { data: actualData },
                    React.createElement(viser_react_1.Tooltip, null),
                    React.createElement(viser_react_1.Coord, { type: "rect", direction: "LT" }),
                    React.createElement(viser_react_1.Pyramid, __assign({}, pyramidOpts1))))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map