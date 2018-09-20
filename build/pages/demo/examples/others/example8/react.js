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
viser_react_1.registerShape('interval', 'radiusPie', {
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
        var rect = container.addShape('path', {
            attrs: {
                fill: cfg.color || '#00D9DF',
                path: path
            }
        });
        var minH = Math.min(path[1][7], path[2][2]);
        var minW = Math.min(path[1][6], path[2][1]);
        var diffH = Math.abs(path[1][7] - path[2][2]);
        var diffW = Math.abs(path[1][6] - path[2][1]);
        container.addShape('circle', {
            attrs: {
                x: minW + diffW / 2,
                y: minH + diffH / 2,
                fill: cfg.color,
                radius: diffH / 2
            }
        });
        var minHH = Math.min(path[3][7], path[4][2]);
        var minWW = Math.min(path[3][6], path[4][1]);
        var diffHH = Math.abs(path[3][7] - path[4][2]);
        var diffWW = Math.abs(path[3][6] - path[4][1]);
        container.addShape('circle', {
            attrs: {
                x: minWW + diffWW / 2,
                y: minHH + diffHH / 2,
                fill: cfg.color,
                radius: diffH / 2
            }
        });
        return rect;
    }
});
var COLORS = ['#1890ff', '#f04864'];
var data = [
    { sex: '男', sold: 0.45 },
    { sex: '女', sold: 0.55 }
];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: [20, 30, 30, 20], data: data },
                React.createElement(viser_react_1.Tooltip, { showTitle: false }),
                React.createElement(viser_react_1.Coord, { type: "theta", radius: 0.8 }),
                React.createElement(viser_react_1.StackInterval, { position: "sold", shape: "radiusPie", color: ['sex', COLORS], label: ['sold', {
                            custom: true,
                            htmlTemplate: function (text, item) {
                                var isFemale = item.point.sex === '女';
                                var src = isFemale ? 'https://gw.alipayobjects.com/zos/rmsportal/mweUsJpBWucJRixSfWVP.png'
                                    : 'https://gw.alipayobjects.com/zos/rmsportal/oeCxrAewtedMBYOETCln.png';
                                var color = isFemale ? COLORS[1] : COLORS[0];
                                var IMG = "<img style=\"width:40px\" src=\"" + src + "\" /><br/>";
                                return "<div style=\"text-align:center;color:" + color + "\">" + IMG + (text * 100).toFixed(0) + "%</div>";
                            }
                        }] }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map