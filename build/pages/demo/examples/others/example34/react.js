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
function getFillAttrs(cfg) {
    var attrs = __assign({
        fill: cfg.color,
        fillOpacity: cfg.opacity
    }, cfg.style);
    return attrs;
}
function getRectPath(points) {
    var path = [];
    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        if (point) {
            var action = i === 0 ? 'M' : 'L';
            path.push([action, point.x, point.y]);
        }
    }
    var first = points[0];
    path.push(['L', first.x, first.y]);
    path.push(['z']);
    return path;
}
viser_react_1.registerShape('interval', 'top', {
    draw: function (cfg, container) {
        var attrs = getFillAttrs(cfg);
        var path = getRectPath(cfg.points);
        path = this.parsePath(path); // 将 0 - 1 的值转换为画布坐标
        var radius = (path[2][1] - path[1][1]) / 2;
        var temp = [];
        temp.push(['M', path[0][1], path[0][2]]);
        temp.push(['L', path[1][1], path[1][2] + radius]);
        temp.push(['A', radius, radius, 90, 0, 1, path[1][1] + radius, path[1][2]]);
        temp.push(['L', path[2][1] - radius, path[2][2]]);
        temp.push(['A', radius, radius, 90, 0, 1, path[2][1], path[2][2] + radius]);
        temp.push(['L', path[3][1], path[3][2]]);
        temp.push(['Z']);
        return container.addShape('path', {
            attrs: __assign({}, attrs, {
                path: temp,
            })
        });
    }
});
viser_react_1.registerShape('interval', 'bottom', {
    draw: function (cfg, container) {
        var attrs = getFillAttrs(cfg);
        var path = getRectPath(cfg.points);
        path = this.parsePath(path);
        var radius = (path[2][1] - path[1][1]) / 2;
        var temp = [];
        temp.push(['M', path[0][1] + radius, path[0][2]]);
        temp.push(['A', radius, radius, 90, 0, 1, path[0][1], path[0][2] - radius]);
        temp.push(['L', path[1][1], path[1][2]]);
        temp.push(['L', path[2][1], path[2][2]]);
        temp.push(['L', path[3][1], path[3][2] - radius]);
        temp.push(['A', radius, radius, 90, 0, 1, path[3][1] - radius, path[3][2]]);
        temp.push(['Z']);
        return container.addShape('path', {
            attrs: __assign({}, attrs, {
                path: temp,
            })
        });
    }
});
var data = [
    { year: '2014', type: 'Sales', sales: 1000 },
    { year: '2015', type: 'Sales', sales: 1170 },
    { year: '2016', type: 'Sales', sales: 660 },
    { year: '2017', type: 'Sales', sales: 1030 },
    { year: '2014', type: 'Expenses', sales: 400 },
    { year: '2015', type: 'Expenses', sales: 460 },
    { year: '2016', type: 'Expenses', sales: 1120 },
    { year: '2017', type: 'Expenses', sales: 540 },
    { year: '2014', type: 'Profit', sales: 300 },
    { year: '2015', type: 'Profit', sales: 300 },
    { year: '2016', type: 'Profit', sales: 300 },
    { year: '2017', type: 'Profit', sales: 350 }
];
var scale = [{
        dataKey: 'sales',
        max: 2400,
        tickInterval: 600
    }];
var axis1Opts = {
    dataKey: 'year',
    label: {
        textStyle: {
            fontFamily: 'Monospace',
            fontWeight: 700,
            fontSize: 14,
            fill: '#545454'
        }
    },
    grid: {
        lineStyle: {
            lineDash: [0, 0],
            stroke: '#545454'
        }
    }
};
var axis2Opts = {
    dataKey: 'sales',
    label: {
        textStyle: {
            fontFamily: 'Monospace',
            fontWeight: 700,
            fontSize: 14,
            fill: '#545454'
        }
    },
    grid: {
        lineStyle: {
            lineDash: [0, 0],
            stroke: '#545454'
        }
    },
    line: null,
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: [20, 80, 80, 80], data: data, scale: scale },
                React.createElement(viser_react_1.Legend, null),
                React.createElement(viser_react_1.Axis, __assign({}, axis1Opts)),
                React.createElement(viser_react_1.Axis, __assign({}, axis2Opts)),
                React.createElement(viser_react_1.StackInterval, { position: 'year*sales', color: 'type', size: 35, shape: ['type', function (val) {
                            if (val === 'Profit') { // 顶部圆角
                                return 'bottom';
                            }
                            else if (val === 'Sales') { // 底部圆角
                                return 'top';
                            }
                            else {
                                return; // 其他默认
                            }
                        }], style: {
                        stroke: '#545454',
                        lineWidth: 2
                    } }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map