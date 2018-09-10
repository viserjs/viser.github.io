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
var scale1 = [{
        dataKey: 'time',
        type: 'timeCat',
        nice: false,
        range: [0, 1]
    }, {
        dataKey: 'trend',
        values: ['上涨', '下跌'],
    }, {
        dataKey: 'volumn',
        alias: '成交量'
    }, {
        dataKey: 'start',
        alias: '开盘价'
    }, {
        dataKey: 'end',
        alias: '收盘价'
    }, {
        dataKey: 'max',
        alias: '最高价'
    }, {
        dataKey: 'min',
        alias: '最低价'
    }, {
        dataKey: 'range',
        alias: '股票价格'
    }];
var scale2 = [{
        dataKey: 'volumn',
        tickCount: 2
    }];
var tooltipOpts = {
    showTitle: false,
    itemTpl: '<li data-index={index}>'
        + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
        + '{name}{value}</li>',
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: [],
            start: '2015-07-07',
            end: '2015-07-28',
        };
        _this.slideChange = function (opts) {
            _this.setState({
                start: opts.startText, end: opts.endText,
            });
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        $.getJSON('/assets/data/candle-sticks.json', function (sourceData) {
            _this.setState({ data: sourceData });
        });
    };
    App.prototype.getData = function () {
        var _a = this.state, start = _a.start, end = _a.end, data = _a.data;
        var ds = new DataSet({
            state: {
                start: start,
                end: end,
            }
        });
        var dv = ds.createView();
        dv.source(data)
            .transform({
            type: 'filter',
            callback: function (obj) {
                var date = obj.time;
                return date <= end && date >= start;
            }
        })
            .transform({
            type: 'map',
            callback: function (obj) {
                obj.trend = (obj.start <= obj.end) ? '上涨' : '下跌';
                obj.range = [obj.start, obj.end, obj.max, obj.min];
                return obj;
            }
        });
        return dv;
    };
    App.prototype.render = function () {
        var _a = this.state, start = _a.start, end = _a.end, data = _a.data;
        var dv = this.getData();
        if (!data.length) {
            return (React.createElement("div", null));
        }
        var sliderOpts = {
            width: 'auto',
            height: 26,
            padding: [20, 40, 20, 40],
            start: start,
            end: end,
            data: data,
            xAxis: 'time',
            yAxis: 'volumn',
            scales: {
                time: {
                    type: 'timeCat',
                    nice: false,
                }
            },
            onChange: this.slideChange.bind(this)
        };
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, animate: false, padding: [10, 40, 40, 40], data: dv, scale: scale1 },
                React.createElement(viser_react_1.Tooltip, __assign({}, tooltipOpts)),
                React.createElement(viser_react_1.Axis, null),
                React.createElement(viser_react_1.Legend, { offset: 20 }),
                React.createElement(viser_react_1.View, { data: dv, end: { x: 1, y: 0.5 } },
                    React.createElement(viser_react_1.Candle, { position: 'time*range', color: ['trend', function (val) {
                                if (val === '上涨') {
                                    return '#f04864';
                                }
                                if (val === '下跌') {
                                    return '#2fc25b';
                                }
                            }], tooltip: ['time*start*end*max*min', function (time, start, end, max, min) {
                                return {
                                    name: time,
                                    value: '<br><span style="padding-left: 16px">开盘价：' + start + '</span><br/>'
                                        + '<span style="padding-left: 16px">收盘价：' + end + '</span><br/>'
                                        + '<span style="padding-left: 16px">最高价：' + max + '</span><br/>'
                                        + '<span style="padding-left: 16px">最低价：' + min + '</span>'
                                };
                            }] })),
                React.createElement(viser_react_1.View, { data: dv, scale: scale2, start: { x: 0, y: 0.65 } },
                    React.createElement(viser_react_1.Axis, { dataKey: 'time', tickLine: null, label: null }),
                    React.createElement(viser_react_1.Axis, { dataKey: 'volumn', label: {
                            formatter: function (val) {
                                return parseInt(String(val / 1000), 10) + 'k';
                            }
                        } }),
                    React.createElement(viser_react_1.Bar, { position: 'time*volumn', color: ['trend', function (val) {
                                if (val === '上涨') {
                                    return '#f04864';
                                }
                                if (val === '下跌') {
                                    return '#2fc25b';
                                }
                            }], tooltip: ['time*volumn', function (time, volumn) {
                                return {
                                    name: time,
                                    value: '<br/><span style="padding-left: 16px">成交量：' + volumn + '</span><br/>'
                                };
                            }] }))),
            React.createElement(viser_react_1.Plugin, null,
                React.createElement(viser_react_1.Slider, __assign({}, sliderOpts)))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map