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
viser_react_1.registerShape('line', 'lineWidthArrow', {
    draw: function (cfg, container) {
        var points = cfg.points;
        var attrs = Object.assign({}, {
            stroke: cfg.color,
            lineWidth: cfg.size,
        }, cfg.style);
        var pathGroup = container.addGroup();
        for (var i = 0; i < points.length; i++) {
            var path = [];
            path.push(['M', points[i].x, points[i].y]);
            if (i !== points.length - 1) {
                path.push(['L', points[i + 1].x, points[i + 1].y]);
            }
            pathGroup.addShape('path', {
                attrs: Object.assign({
                    path: path,
                    endArrow: true,
                    arrowLength: 10,
                    arrowAngle: 45
                }, attrs)
            });
        }
        return pathGroup;
    }
});
var data = [
    { consumption: 0.65, price: 1, year: 1965 },
    { consumption: 0.66, price: 1.05, year: 1966 },
    { consumption: 0.64, price: 1.1, year: 1967 },
    { consumption: 0.63, price: 1.12, year: 1968 },
    { consumption: 0.55, price: 1.15, year: 1969 },
    { consumption: 0.57, price: 1.19, year: 1970 },
    { consumption: 0.58, price: 1.14, year: 1971 },
    { consumption: 0.59, price: 1, year: 1972 },
    { consumption: 0.57, price: 0.96, year: 1973 },
    { consumption: 0.55, price: 0.92, year: 1974 },
    { consumption: 0.54, price: 0.88, year: 1975 },
    { consumption: 0.55, price: 0.87, year: 1976 },
    { consumption: 0.42, price: 0.89, year: 1977 },
    { consumption: 0.28, price: 1, year: 1978 },
    { consumption: 0.15, price: 1.1, year: 1979 }
];
var tooltipOpts = {
    showTitle: false,
    itemTpl: '<li data-index={index}>'
        + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
        + '<span>{year}</span></br>'
        + '<span style="padding-left: 16px">consumption: {consumption}</span></br>'
        + '<span style="padding-left: 16px">price: {price}</span></br>'
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var y = 0;
        var yGap = 0.1;
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data },
                React.createElement(viser_react_1.Tooltip, __assign({}, tooltipOpts)),
                React.createElement(viser_react_1.Axis, null),
                React.createElement(viser_react_1.Path, { position: "price*consumption", shape: "lineWidthArrow", color: "#1890ff", label: ['year', {
                            offset: 16,
                            textStyle: {
                                fill: '#8c8c8c'
                            }
                        }, function (val) {
                            return val + '年';
                        }], size: 2, tooltip: false }),
                React.createElement(viser_react_1.Point, { position: "price*consumption", shape: "circle", size: 10, active: false, tooltip: ['year*consumption*price', function (year, consumption, price) {
                            return {
                                year: year,
                                consumption: consumption,
                                price: price
                            };
                        }], style: {
                        fill: '#fff',
                        fillOpacity: 0
                    } }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map