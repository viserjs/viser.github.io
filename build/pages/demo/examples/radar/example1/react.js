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
    { item: 'Design', a: 70, b: 30 },
    { item: 'Development', a: 60, b: 70 },
    { item: 'Marketing', a: 50, b: 60 },
    { item: 'Users', a: 40, b: 50 },
    { item: 'Test', a: 60, b: 70 },
    { item: 'Language', a: 70, b: 50 },
    { item: 'Technology', a: 50, b: 40 },
    { item: 'Support', a: 30, b: 40 },
    { item: 'Sales', a: 60, b: 40 },
    { item: 'UX', a: 50, b: 60 }
];
var dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'fold',
    fields: ['a', 'b'],
    key: 'user',
    value: 'score',
});
var data = dv.rows;
var scale = [{
        dataKey: 'score',
        min: 0,
        max: 80,
    }];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var axis1Opts = {
            dataKey: 'item',
            line: null,
            tickLine: null,
            grid: {
                lineStyle: {
                    lineDash: null
                },
                hideFirstLine: false,
            }
        };
        var axis2Opts = {
            dataKey: 'score',
            line: null,
            tickLine: null,
            grid: {
                type: 'polygon',
                lineStyle: {
                    lineDash: null,
                },
            },
        };
        var coordOpts = {
            type: "polar",
            radius: "0.8",
        };
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 500, data: data, padding: [20, 20, 95, 20], scale: scale },
            React.createElement(viser_react_1.Tooltip, null),
            React.createElement(viser_react_1.Axis, __assign({}, axis1Opts)),
            React.createElement(viser_react_1.Axis, __assign({}, axis2Opts)),
            React.createElement(viser_react_1.Legend, { dataKey: "user", marker: "circle", offset: 30 }),
            React.createElement(viser_react_1.Coord, __assign({}, coordOpts)),
            React.createElement(viser_react_1.Line, { position: "item*score", color: "user", size: 2 }),
            React.createElement(viser_react_1.Point, { position: "item*score", color: "user", size: 4, shape: "circle" }),
            React.createElement(viser_react_1.Area, { position: "item*score", color: "user" })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map