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
viser_react_1.registerShape('polygon', 'custom', {
    draw: function (cfg, container) {
        var points = this.parsePoints(cfg.points);
        var startX = points[1].x;
        var startY = points[1].y;
        var size = cfg.size || 1;
        var width = (points[2].x - points[1].x);
        var height = Math.abs(points[1].y - points[0].y);
        // 绘制背景
        container.addShape('rect', {
            attrs: {
                x: startX,
                y: startY,
                width: width,
                height: height
            }
        });
        // 绘制色块
        return container.addShape('rect', {
            attrs: {
                x: startX,
                y: startY,
                width: width * size,
                height: height,
                fill: cfg.color,
                stroke: '#fff'
            }
        });
    }
});
// 模拟各个系统的单元测试覆盖率数据
var data = [];
// 生成数据
for (var i = 0; i < 15; i++) {
    var name_1 = '系统' + i;
    var value = Math.random() * 90;
    for (var j = 1; j < 10; j++) {
        var obj = {};
        obj.name = name_1;
        obj.value = (value + Math.random() * 10) / 100;
        obj.time = '10-0' + j;
        data.push(obj);
    }
}
var scale = [{
        dataKey: 'time',
        type: 'cat'
    }, {
        dataKey: 'value',
        alias: '覆盖率',
        type: 'linear',
        formatter: function (value) {
            return (value * 100).toFixed(2) + '%';
        },
        min: 0,
        max: 1
    }];
var itemFormatter = function (val) {
    return val.slice(0, val.indexOf('.')) + '%';
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: [20, 80, 150], data: data, scale: scale },
                React.createElement(viser_react_1.Tooltip, null),
                React.createElement(viser_react_1.Legend, { slidable: false, width: 165, itemFormatter: itemFormatter }),
                React.createElement(viser_react_1.Axis, { dataKey: "name", grid: null }),
                React.createElement(viser_react_1.Axis, { dataKey: "time", line: null, tickLine: null }),
                React.createElement(viser_react_1.Polygon, { position: "time*name", color: ['value', 'rgb(215, 25, 28)-rgb(231, 104, 24)-rgb(242, 158, 46)-rgb(249, 208, 87)-rgb(255, 255, 140)-rgb(144, 235, 157)-rgb(0, 204, 188)-rgb(0, 166, 202)-rgb(44, 123, 182)'], size: ['value', function (size) {
                            return size;
                        }], shape: "custom", style: {
                        lineWidth: 1,
                        stroke: '#fff'
                    } }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map