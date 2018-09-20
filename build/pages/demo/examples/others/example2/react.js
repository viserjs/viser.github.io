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
viser_react_1.registerShape('point', 'image', {
    drawShape: function (cfg, container) {
        cfg.points = this.parsePoints(cfg.points);
        var coord = this._coord;
        container.addShape('line', {
            attrs: {
                x1: cfg.points[0].x,
                y1: cfg.points[0].y,
                x2: cfg.points[0].x,
                y2: coord.start.y,
                stroke: '#ccc',
                lineWidth: 1,
                lineDash: [4, 2]
            }
        });
        return container.addShape('image', {
            attrs: {
                x: cfg.points[0].x - (12 * cfg.size / 2),
                y: cfg.points[0].y - 12 * cfg.size,
                width: 12 * cfg.size,
                height: 12 * cfg.size,
                img: cfg.shape[1]
            }
        });
    }
});
var data = [
    { name: 'Internet Explorer', value: 26 },
    { name: 'Chrome', value: 40 },
    { name: 'Firefox', value: 30 },
    { name: 'Safari', value: 24 },
    { name: 'Opera', value: 15 },
    { name: 'Undetectable', value: 8 }
];
var imageMap = {
    'Internet Explorer': 'https://gw.alipayobjects.com/zos/rmsportal/eOYRaLPOmkieVvjyjTzM.png',
    'Chrome': 'https://gw.alipayobjects.com/zos/rmsportal/dWJWRLWfpOEbwCyxmZwu.png',
    'Firefox': 'https://gw.alipayobjects.com/zos/rmsportal/ZEPeDluKmAoTioCABBTc.png',
    'Safari': 'https://gw.alipayobjects.com/zos/rmsportal/eZYhlLzqWLAYwOHQAXmc.png',
    'Opera': 'https://gw.alipayobjects.com/zos/rmsportal/vXiGOWCGZNKuVVpVYQAw.png',
    'Undetectable': 'https://gw.alipayobjects.com/zos/rmsportal/NjApYXminrnhBgOXyuaK.png'
};
var scale = [{
        dataKey: 'value',
        nice: false,
        max: 60,
        min: 0
    }];
var seriesOpts = {
    gemo: 'point',
    position: 'name*value',
    size: 'value',
    color: 'name',
    shape: ['name', function (name) {
            return ['image', imageMap[name]];
        }],
    label: ['value', {
            offset: -20,
            textStyle: {
                fontSize: 16,
            }
        }]
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, scale: scale },
                React.createElement(viser_react_1.Tooltip, null),
                React.createElement(viser_react_1.Axis, { dataKey: "value", show: false }),
                React.createElement(viser_react_1.Series, __assign({}, seriesOpts)))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map