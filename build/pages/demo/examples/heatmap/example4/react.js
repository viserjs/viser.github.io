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
var $ = require("jquery");
viser_react_1.registerShape('polygon', 'boundary-polygon', {
    draw: function (cfg, container) {
        if (cfg.points && cfg.points.length) {
            var attrs = {
                stroke: '#fff',
                lineWidth: 1,
                fill: cfg.color,
                fillOpacity: cfg.opacity,
            };
            var points = cfg.points;
            var path = [
                ['M', points[0].x, points[0].y],
                ['L', points[1].x, points[1].y],
                ['L', points[2].x, points[2].y],
                ['L', points[3].x, points[3].y],
                ['Z']
            ];
            attrs.path = this.parsePath(path);
            var polygon = container.addShape('path', {
                attrs: attrs
            });
            if (cfg.origin._origin.lastWeek) {
                var linePath = [
                    ['M', points[2].x, points[2].y],
                    ['L', points[3].x, points[3].y],
                ];
                // 最后一周的多边形添加右侧边框
                container.addShape('path', {
                    zIndex: 1,
                    attrs: {
                        path: this.parsePath(linePath),
                        lineWidth: 1,
                        stroke: '#404040'
                    }
                });
                if (cfg.origin._origin.lastDay) {
                    container.addShape('path', {
                        zIndex: 1,
                        attrs: {
                            path: this.parsePath([
                                ['M', points[1].x, points[1].y],
                                ['L', points[2].x, points[2].y],
                            ]),
                            lineWidth: 1,
                            stroke: '#404040'
                        }
                    });
                }
            }
            container.sort();
            return polygon;
        }
    }
});
var scale = [{
        dataKey: 'day',
        type: 'cat',
        values: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    }, {
        dataKey: 'week',
        type: 'cat'
    }, {
        dataKey: 'commits',
        sync: true
    }];
var axis1Opts = {
    dataKey: 'week',
    position: 'top',
    tickLine: null,
    line: null,
    label: {
        offset: 12,
        textStyle: {
            fontSize: 12,
            fill: '#666',
            textBaseline: 'top'
        },
        formatter: function (val) {
            if (val === '2') {
                return 'MAY';
            }
            else if (val === '6') {
                return 'JUN';
            }
            else if (val === '10') {
                return 'JUL';
            }
            else if (val === '15') {
                return 'AUG';
            }
            else if (val === '19') {
                return 'SEP';
            }
            else if (val === '24') {
                return 'OCT';
            }
            return '';
        }
    }
};
var axis2Opts = {
    dataKey: 'day',
    grid: null,
};
var tooltipOpts = {
    title: 'date',
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: [],
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        $.getJSON('/assets/data/heatmap-6.json', function (data) {
            _this.setState({ data: data });
        });
    };
    App.prototype.render = function () {
        var data = this.state.data;
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, scale: scale },
                React.createElement(viser_react_1.Tooltip, __assign({}, tooltipOpts)),
                React.createElement(viser_react_1.Axis, __assign({}, axis1Opts)),
                React.createElement(viser_react_1.Axis, __assign({}, axis2Opts)),
                React.createElement(viser_react_1.Coord, { type: "rect", direction: "TL" }),
                React.createElement(viser_react_1.Polygon, { color: ['commits', '#BAE7FF-#1890FF-#0050B3'], position: "week*day*date", shape: "boundary-polygon" }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map