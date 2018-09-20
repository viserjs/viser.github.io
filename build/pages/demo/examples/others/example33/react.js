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
viser_react_1.registerShape('interval', 'borderRadius', {
    draw: function (cfg, container) {
        var points = cfg.points;
        var path = [];
        path.push(['M', points[0].x, points[0].y]);
        path.push(['L', points[1].x, points[1].y]);
        path.push(['L', points[2].x, points[2].y]);
        path.push(['L', points[3].x, points[3].y]);
        path.push('Z');
        path = this.parsePath(path); // 将 0 - 1 转化为画布坐标
        return container.addShape('rect', {
            attrs: {
                x: path[1][1],
                y: path[1][2],
                width: path[2][1] - path[1][1],
                height: path[0][2] - path[1][2],
                fill: cfg.color,
                radius: (path[2][1] - path[1][1]) / 2,
            }
        });
    }
});
var activeData = [
    { date: '2017年3月2日', actual: 175, expected: 900 },
    { date: '2017年3月3日', actual: 137, expected: 900 },
    { date: '2017年3月4日', actual: 240, expected: 900 },
    { date: '2017年3月5日', actual: 726, expected: 900 },
    { date: '2017年3月6日', actual: 968, expected: 900 },
    { date: '2017年3月7日', actual: 702, expected: 900 },
    { date: '2017年3月8日', actual: 655, expected: 900 },
    { date: '2017年3月9日', actual: 463, expected: 900 },
    { date: '2017年3月10日', actual: 464, expected: 900 },
    { date: '2017年3月12日', actual: 0, expected: 900 },
    { date: '2017年3月13日', actual: 638, expected: 900 },
    { date: '2017年3月14日', actual: 0, expected: 900 },
    { date: '2017年3月15日', actual: 0, expected: 900 },
    { date: '2017年3月16日', actual: 509, expected: 900 },
    { date: '2017年3月17日', actual: 269, expected: 900 },
    { date: '2017年3月18日', actual: 321, expected: 900 },
    { date: '2017年3月19日', actual: 0, expected: 900 },
    { date: '2017年3月20日', actual: 399, expected: 900 },
    { date: '2017年3月21日', actual: 662, expected: 900 },
    { date: '2017年3月22日', actual: 689, expected: 900 },
    { date: '2017年3月23日', actual: 347, expected: 900 },
    { date: '2017年3月24日', actual: 0, expected: 900 },
    { date: '2017年3月26日', actual: 428, expected: 900 },
    { date: '2017年3月27日', actual: 749, expected: 900 },
    { date: '2017年3月28日', actual: 0, expected: 900 },
    { date: '2017年3月29日', actual: 0, expected: 900 },
    { date: '2017年3月30日', actual: 69.1, expected: 900 },
];
var scale = [{
        dataKey: 'expected',
        ticks: [0, 900, 1200]
    }];
var axisOpts = {
    dataKey: 'expected',
    line: null,
    tickLine: null,
    position: 'right',
    label: {
        formatter: function (val) {
            if (val === '1200') {
                return '';
            }
            return val;
        }
    }
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: [20, 80, 80, 80], data: activeData, scale: scale },
                React.createElement(viser_react_1.Tooltip, null),
                React.createElement(viser_react_1.Axis, __assign({}, axisOpts)),
                React.createElement(viser_react_1.Axis, { dataKey: "date", show: false }),
                React.createElement(viser_react_1.Axis, { dataKey: "actual", show: false }),
                React.createElement(viser_react_1.Interval, { position: "date*expected", color: "#752136", shape: "borderRadius", tooltip: "expected", opacity: 0.6 }),
                React.createElement(viser_react_1.Interval, { position: "date*actual", color: "#db0d2d", tooltip: "actual", shape: ['date*actual', function (date, val) {
                            if (val === 0) {
                                return;
                            }
                            else {
                                return 'borderRadius';
                            }
                        }] }),
                React.createElement(viser_react_1.Guide, { type: "text", position: ['min', 'max'], content: "\u6D3B\u52A8", style: {
                        fill: '#ff2c55',
                        fontSize: 20,
                        fontWeight: 'bold',
                        textBaseline: 'top'
                    } }),
                React.createElement(viser_react_1.Guide, { type: "text", position: ['max', 'max'], content: "67 / 900 \u5343\u5361", style: {
                        fill: '#cbcbcb',
                        fontSize: 20,
                        textAlign: 'end',
                        textBaseline: 'top'
                    } }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map