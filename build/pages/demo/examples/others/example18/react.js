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
var scale = [{
        dataKey: 'date',
        type: 'cat',
    }, {
        dataKey: 'range',
        max: 30,
        min: -25,
    }, {
        dataKey: 'mean_temp',
        alias: 'Average Daily Temperature',
    }];
var legendOpt = {
    offset: 25,
    title: {
        fontSize: 12,
        fill: '#4F4F4F',
        fontWeight: 300,
        textAlign: 'start'
    },
    slidable: false,
    position: 'bottom',
    offsetX: 25,
};
var guideLineOpt = {
    start: {
        date: 'min',
        range: 'min'
    },
    end: {
        date: 'min',
        range: 'max'
    },
    lineStyle: {
        stroke: '#aaa',
        lineWidth: 1,
        lineDash: null
    },
    text: {
        position: 1,
        offsetY: -6,
        autoRotate: false,
        style: {
            fontSize: 16,
            textAlign: 'center',
            fontWeight: 100,
            fill: '#aaa'
        },
        content: 'January'
    }
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
        $.getJSON('/assets/data/daily-temp-in-boston.json', function (data) {
            var ds = new DataSet();
            var dv = ds.createView()
                .source(data)
                .transform({
                type: 'map',
                callback: function (row) {
                    row.range = [row.min_temp, row.max_temp];
                    return row;
                }
            });
            _this.setState({ data: dv });
        });
    };
    App.prototype.render = function () {
        var data = this.state.data;
        var color = ['mean_temp', 'rgb(44, 123, 182)-rgb(0, 166, 202)-rgb(0, 204, 188)-rgb(144, 235, 157)-rgb(255, 255, 140)-rgb(249, 208, 87)-rgb(242, 158, 46)-rgb(231, 104, 24)-rgb(215, 25, 28)'];
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: [20, 0, 105], data: data, scale: scale },
                React.createElement(viser_react_1.Legend, __assign({}, legendOpt)),
                React.createElement(viser_react_1.Tooltip, null),
                React.createElement(viser_react_1.Coord, { type: "polar", innerRadius: 0.35 }),
                React.createElement(viser_react_1.Axis, { dataKey: "date", show: false }),
                React.createElement(viser_react_1.Axis, { dataKey: "range", line: null, tickLine: null, label: null }),
                React.createElement(viser_react_1.Interval, { position: "date*range", color: color, size: 2.5, opacity: 1 }),
                React.createElement(viser_react_1.Guide, __assign({ type: "line" }, guideLineOpt)),
                [-20, -10, 0, 10, 20, 30].map(function (entry, i) {
                    var start = {
                        date: '2015-7-1',
                        range: entry,
                    };
                    return (React.createElement(viser_react_1.Guide, { type: "text", key: i, start: start, content: entry + "\u00B0C", style: {
                            fill: '#C4C4C4',
                            fontSize: 12,
                            fontWeight: 100,
                            textAlign: 'center',
                            textBaseline: 'middle'
                        } }));
                }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map