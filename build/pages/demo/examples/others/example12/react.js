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
var data = [
    { year: '2000', '类型 A': 21.0, '类型 B': 16, '类型 C': 8 },
    { year: '2001', '类型 A': 25.0, '类型 B': 16, '类型 C': 8 },
    { year: '2002', '类型 A': 25.0, '类型 B': 15, '类型 C': 8 },
    { year: '2003', '类型 A': 25.0, '类型 B': 14, '类型 C': 7 },
    { year: '2004', '类型 A': 25.0, '类型 B': 14, '类型 C': 7 },
    { year: '2005', '类型 A': 24.0, '类型 B': 13, '类型 C': 8 },
    { year: '2006', '类型 A': 24.0, '类型 B': 14, '类型 C': 7 },
    { year: '2007', '类型 A': 26.0, '类型 B': 16, '类型 C': 7 },
    { year: '2008', '类型 A': 26.0, '类型 B': 15.2, '类型 C': 8 },
    { year: '2009', '类型 A': 27.1, '类型 B': 15.2, '类型 C': 10 },
    { year: '2010', '类型 A': 27.5, '类型 B': 15.4, '类型 C': 8 },
    { year: '2011', '类型 A': 26.4, '类型 B': 15.2, '类型 C': 9 },
    { year: '2012', '类型 A': 28.8, '类型 B': 15.4, '类型 C': 9 },
    { year: '2013', '类型 A': 33.3, '类型 B': 16.7, '类型 C': 12 },
    { year: '2014', '类型 A': 38.2, '类型 B': 19.5, '类型 C': 18 }
];
var dv = new DataSet.View().source(data).transform({
    type: 'fold',
    fields: ['类型 A', '类型 B', '类型 C'],
    key: '难民类型',
    value: 'count',
    remains: 'year'
});
var stackInterval1Opts = {
    position: 'year*count',
    color: '难民类型',
    style: {
        lineWidth: 1,
        stroke: '#fff'
    }
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: 80, data: dv },
                React.createElement(viser_react_1.Coord, { type: "polar", innerRadius: 0.1 }),
                React.createElement(viser_react_1.Legend, { dataKey: "\u96BE\u6C11\u7C7B\u578B", position: "bottom" }),
                React.createElement(viser_react_1.Axis, { dataKey: "percent", title: { offset: 40, text: '百分比' } }),
                React.createElement(viser_react_1.StackInterval, __assign({}, stackInterval1Opts)))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map