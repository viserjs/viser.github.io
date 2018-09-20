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
var DataView = DataSet.DataView;
var data = [
    { gender: '男', count: 40, 'class': '一班', grade: '一年级' },
    { gender: '女', count: 30, 'class': '一班', grade: '一年级' },
    { gender: '男', count: 35, 'class': '二班', grade: '一年级' },
    { gender: '女', count: 45, 'class': '二班', grade: '一年级' },
    { gender: '男', count: 20, 'class': '三班', grade: '一年级' },
    { gender: '女', count: 35, 'class': '三班', grade: '一年级' },
    { gender: '男', count: 30, 'class': '一班', grade: '二年级' },
    { gender: '女', count: 40, 'class': '一班', grade: '二年级' },
    { gender: '男', count: 25, 'class': '二班', grade: '二年级' },
    { gender: '女', count: 32, 'class': '二班', grade: '二年级' },
    { gender: '男', count: 28, 'class': '三班', grade: '二年级' },
    { gender: '女', count: 36, 'class': '三班', grade: '二年级' },
];
var views = function (view, facet) {
    var data = facet.data;
    var dv = new DataView();
    dv.source(data).transform({
        type: 'percent',
        field: 'count',
        dimension: 'gender',
        as: 'percent',
    });
    return {
        data: dv,
        scale: {
            dataKey: 'percent',
            formatter: '.2%',
        },
        series: {
            quickType: 'stackBar',
            position: 'percent',
            color: 'gender',
        }
    };
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, padding: [60, 90, 80, 80] },
            React.createElement(viser_react_1.Tooltip, { showTitle: false }),
            React.createElement(viser_react_1.Coord, { type: "theta" }),
            React.createElement(viser_react_1.Legend, { dataKey: "cut", position: "top" }),
            React.createElement(viser_react_1.Facet, { type: "tree", fields: ['grade', 'class'], line: { stroke: '#00a3d7' }, lineSmooth: true, views: views })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map