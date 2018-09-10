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
viser_react_1.registerShape('interval', 'burstPie', {
    getPoints: function (cfg) {
        var width = cfg.size;
        var x = cfg.x;
        var min = cfg.y[0];
        var max = cfg.y[1];
        var res = [];
        for (var i = 0; i < max; i += 0.1) {
            if (min > i) {
                continue;
            }
            else if (min < i && min > i - 0.1) {
                res.push({ x: x - width / 2, y: min }, { x: x - width / 2, y: i - 0.01 }, { x: x + width / 2, y: i - 0.01 }, { x: x + width / 2, y: min });
            }
            var start = i;
            var end = parseFloat((i + 0.1) > max ? max : i + 0.09);
            res.push({ x: x - width / 2, y: start }, { x: x - width / 2, y: end }, { x: x + width / 2, y: end }, { x: x + width / 2, y: start });
        }
        return res;
    },
    draw: function (cfg, container) {
        // 将归一化后的数据转换为画布上的坐标
        var points = cfg.origin.points;
        var path = [];
        for (var i = 0; i < cfg.origin.points.length; i += 4) {
            path.push(['M', points[i].x, points[i].y]);
            path.push(['L', points[i + 1].x, points[i + 1].y]);
            path.push(['L', points[i + 2].x, points[i + 2].y]);
            path.push(['L', points[i + 3].x, points[i + 3].y]);
            path.push(['L', points[i].x, points[i].y]);
            path.push(['z']);
        }
        path = this.parsePath(path, true);
        var shape = container.addShape('path', {
            attrs: {
                fill: cfg.color || '#00D9DF',
                path: path,
            },
        });
        return shape;
    }
});
var data = [
    { value: 0.5, key: '男' },
    { value: 0.4, key: '女' },
    { value: 0.1, key: '未知' },
];
var dv = new DataSet.View().source(data).transform({
    type: 'percent',
    field: 'value',
    dimension: 'key',
    as: 'percent'
});
var scale = [{
        dataKey: 'percent',
        formatter: function (val) {
            return val * 100 + '%';
        }
    }];
var stackInterval1Opts = {
    shape: 'burstPie',
    position: 'percent',
    color: ['key', ['#1890ff', '#f04864', '#bfbfbf']],
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: 80, data: dv, scale: scale },
                React.createElement(viser_react_1.Tooltip, { showTitle: false }),
                React.createElement(viser_react_1.Coord, { type: "theta", radius: 0.8, innerRadius: 0.7 }),
                React.createElement(viser_react_1.Legend, null),
                React.createElement(viser_react_1.Axis, { dataKey: "percent", title: { offset: 40, text: '百分比' } }),
                React.createElement(viser_react_1.StackInterval, __assign({}, stackInterval1Opts)))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map