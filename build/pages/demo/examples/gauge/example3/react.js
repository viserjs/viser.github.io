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
viser_react_1.registerShape('point', 'pointer', {
    draw: function (cfg, container) {
        var point = cfg.points[0]; // 获取第一个标记点
        point = this.parsePoint(point);
        var center = this.parsePoint({
            x: 0,
            y: 0
        });
        // 绘制指针
        container.addShape('line', {
            attrs: {
                x1: center.x,
                y1: center.y,
                x2: point.x,
                y2: point.y + 15,
                stroke: cfg.color,
                lineWidth: 5,
                lineCap: 'round'
            }
        });
        return container.addShape('circle', {
            attrs: {
                x: center.x,
                y: center.y,
                r: 9.75,
                stroke: cfg.color,
                lineWidth: 4.5,
                fill: '#fff'
            }
        });
    }
});
var GAUGE_MAX = 9;
var GAUGE_MIN = 0;
var scale = [{
        dataKey: 'value',
        min: GAUGE_MIN,
        max: GAUGE_MAX,
        tickInterval: 1,
        nice: false
    }];
var color = ['#0086FA', '#FFBF00', '#F5222D'];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: [{
                    value: 0,
                }],
            trend: 'up',
        };
        _this.setData = function () {
            if (_this.timer) {
                clearTimeout(_this.timer);
            }
            var delta = Math.random();
            var prevVal = _this.state.data[0].value;
            if (_this.state.trend === 'up') {
                var nextVal = prevVal + delta;
                if (nextVal > 9) {
                    _this.setState({ trend: 'down' });
                }
                else {
                    _this.setState({ data: [{ value: nextVal }] });
                }
            }
            else {
                var nextVal = prevVal - delta;
                if (nextVal < 0) {
                    _this.setState({ trend: 'up' });
                }
                else {
                    _this.setState({ data: [{ value: nextVal }] });
                }
            }
            _this.timer = setTimeout(_this.setData, 1000);
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        this.timer = setTimeout(this.setData, 0);
    };
    App.prototype.componentWillUnmount = function () {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    };
    App.prototype.render = function () {
        var data = this.state.data;
        var val = data[0].value;
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, scale: scale, animate: false },
                React.createElement(viser_react_1.Coord, { type: "polar", startAngle: -202.5, endAngle: 22.5, radius: 0.75 }),
                React.createElement(viser_react_1.Axis, { dataKey: "value", zIndex: 2, line: null, label: {
                        offset: -16,
                        textStyle: {
                            fontSize: 18,
                            textAlign: 'center',
                            textBaseline: 'middle'
                        }
                    }, subTickCount: 4, subTickLine: {
                        length: -8,
                        stroke: '#fff',
                        strokeOpacity: 1,
                    }, tickLine: {
                        length: -17,
                        stroke: '#fff',
                        strokeOpacity: 1,
                    }, grid: null }),
                React.createElement(viser_react_1.Axis, { dataKey: "1", show: false }),
                React.createElement(viser_react_1.Series, { gemo: "point", position: "value*1", shape: "pointer", color: "#8C8C8C", active: false }),
                React.createElement(viser_react_1.Guide, { type: "arc", zIndex: 0, top: false, start: [0, 0.945], end: [9, 0.945], style: {
                        stroke: '#CBCBCB',
                        lineWidth: 18,
                    } }),
                React.createElement(viser_react_1.Guide, { type: "arc", zIndex: 1, start: [0, 0.945], end: [Math.max(0, Math.min(3, val)), 0.945], style: {
                        stroke: color[0],
                        lineWidth: 18,
                    } }),
                React.createElement(viser_react_1.Guide, { type: "arc", zIndex: 1, start: [3, 0.945], end: [Math.max(3, Math.min(6, val)), 0.945], style: {
                        stroke: color[1],
                        lineWidth: 18,
                    } }),
                React.createElement(viser_react_1.Guide, { type: "arc", zIndex: 1, start: [6, 0.945], end: [Math.max(6, Math.min(9, val)), 0.945], style: {
                        stroke: color[2],
                        lineWidth: 18,
                    } }),
                React.createElement(viser_react_1.Guide, { type: "html", position: ['50%', '95%'], html: "\n              <div style=\"width: 300px;text-align: center;\">\n                <p style=\"font-size: 20px; color: #545454;margin: 0;\">\u5408\u683C\u7387</p>\n                <p style=\"font-size: 36px;color: #545454;margin: 0;\">" + Math.ceil(val * 10) + "%</p>\n              </div>\n            " }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map