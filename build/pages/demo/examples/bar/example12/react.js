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
var DataSet = require('@antv/data-set');
var sourceData = [
    { 'State': 'WY', '小于5岁': 25635, '5至13岁': 1890, '14至17岁': 9314 },
    { 'State': 'DC', '小于5岁': 30352, '5至13岁': 20439, '14至17岁': 10225 },
    { 'State': 'VT', '小于5岁': 38253, '5至13岁': 42538, '14至17岁': 15757 },
    { 'State': 'ND', '小于5岁': 51896, '5至13岁': 67358, '14至17岁': 18794 },
    { 'State': 'AK', '小于5岁': 72083, '5至13岁': 85640, '14至17岁': 22153 }
];
var dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'fold',
    fields: ['小于5岁', '5至13岁', '14至17岁'],
    key: '年龄段',
    value: '人口数量',
    retains: ['State'],
});
var data = dv.rows;
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data },
            React.createElement(viser_react_1.Coord, { type: "rect", direction: "LB" }),
            React.createElement(viser_react_1.Tooltip, null),
            React.createElement(viser_react_1.Legend, null),
            React.createElement(viser_react_1.Axis, { dataKey: "State", label: { offset: 12 } }),
            React.createElement(viser_react_1.StackBar, { position: "State*\u4EBA\u53E3\u6570\u91CF", color: "\u5E74\u9F84\u6BB5" })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map