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
function getFillAttrs(cfg) {
    var defaultAttrs = viser_react_1.Global.shape.interval;
    var attrs = Object.assign({}, defaultAttrs, {
        fill: cfg.color,
        stroke: cfg.color,
        fillOpacity: cfg.opacity,
    }, cfg.style);
    return attrs;
}
viser_react_1.registerShape('interval', 'waterfall', {
    draw: function (cfg, container) {
        var attrs = getFillAttrs(cfg);
        var rectPath = getRectPath(cfg.points);
        rectPath = this.parsePath(rectPath);
        var interval = container.addShape('path', {
            attrs: Object.assign(attrs, {
                path: rectPath
            }),
        });
        if (cfg.nextPoints) {
            var linkPath = [
                ['M', cfg.points[2].x, cfg.points[2].y],
                ['L', cfg.nextPoints[0].x, cfg.nextPoints[0].y]
            ];
            if (cfg.nextPoints[0].y === 0) {
                linkPath[1] = ['L', cfg.nextPoints[1].x, cfg.nextPoints[1].y];
            }
            linkPath = this.parsePath(linkPath);
            container.addShape('path', {
                attrs: {
                    path: linkPath,
                    stroke: '#8c8c8c',
                    lineDash: [4, 2]
                }
            });
        }
        return interval;
    }
});
var data = [
    { type: '日用品', money: 300 },
    { type: '伙食费', money: 900 },
    { type: '交通费', money: 200 },
    { type: '水电费', money: 300 },
    { type: '房租', money: 1200 },
    { type: '商场消费', money: 1000 },
    { type: '应酬交际', money: 2000 },
    { type: '总费用', money: 5900 },
];
for (var i = 0; i < data.length; i++) {
    var item = data[i];
    if (i > 0 && i < data.length - 1) {
        if (Array.isArray(data[i - 1].money)) {
            item.money = [data[i - 1].money[1], item.money + data[i - 1].money[1]];
        }
        else {
            item.money = [data[i - 1].money, item.money + data[i - 1].money];
        }
    }
}
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var items = [
            { value: '各项花销', fill: '#1890FF', marker: 'square' },
            { value: '总费用', fill: '#8c8c8c', marker: 'square' },
        ];
        var color = ['type', function (type) {
                if (type === '总费用') {
                    return '#8c8c8c';
                }
                return '#1890FF';
            }];
        var tooltip = ['type*money', function (type, money) {
                if (Array.isArray(money)) {
                    return {
                        name: '生活费',
                        value: money[1] - money[0],
                    };
                }
                return {
                    name: '生活费',
                    value: money,
                };
            }];
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data },
            React.createElement(viser_react_1.Legend, { custom: true, clickable: false, items: items }),
            React.createElement(viser_react_1.Axis, null),
            React.createElement(viser_react_1.Tooltip, null),
            React.createElement(viser_react_1.Bar, { position: "type*money", shape: "waterfall", color: color, tooltip: tooltip })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map