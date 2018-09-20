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
var DataSet = require('@antv/data-set');
var scale = [
    { dataKey: 'x', nice: false },
    { dataKey: 'y', nice: false },
];
viser_react_1.registerShape('point', 'cloud', {
    draw: function (cfg, container) {
        return container.addShape('text', {
            attrs: __assign({ fillOpacity: cfg.opacity, fontSize: cfg.origin._origin.size, rotate: cfg.origin._origin.rotate, text: cfg.origin._origin.text, textAlign: 'center', fontFamily: cfg.origin._origin.font, fill: cfg.color, textBaseline: 'Alphabetic' }, cfg.style, { x: cfg.x, y: cfg.y }),
        });
    }
});
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
        $.getJSON('/assets/data/antv-keywords.json', function (data) {
            var dv = new DataSet.View().source(data);
            var range = dv.range('value');
            var min = range[0];
            var max = range[1];
            var imageMask = new Image();
            imageMask.crossOrigin = '';
            imageMask.src = '/assets/image/logo-mask-16x9.png';
            imageMask.onload = function () {
                dv.transform({
                    type: 'tag-cloud',
                    fields: ['name', 'value'],
                    size: [640, 400],
                    imageMask: imageMask,
                    font: 'Verdana',
                    padding: 0,
                    timeInterval: 5000,
                    rotate: function () {
                        var random = ~~(Math.random() * 4) % 4;
                        if (random == 2) {
                            random = 0;
                        }
                        return random * 90; // 0, 90, 270
                    },
                    fontSize: function (d) {
                        if (d.value) {
                            return ((d.value - min) / (max - min)) * (32 - 8) + 8;
                        }
                        return 0;
                    }
                });
                _this.setState({ data: dv.rows });
            };
        });
    };
    App.prototype.render = function () {
        var data = this.state.data;
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { width: 640, height: 400, data: data, scale: scale, padding: [0] },
                React.createElement(viser_react_1.Tooltip, { showTitle: false }),
                React.createElement(viser_react_1.Coord, { type: "rect", direction: "TL" }),
                React.createElement(viser_react_1.Point, { position: "x*y", color: "text", shape: "cloud", tooltip: "value*category" }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map