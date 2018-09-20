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
        dataKey: 'time',
        type: 'time',
        tickCount: 10,
        mask: 'M/DD H:mm'
    }];
var facetOpts = {
    views: function (view, facet) {
        var colValue = facet.colValue, data = facet.data;
        var color;
        var alias;
        if (colValue === 'rain') {
            color = '#1890ff';
            alias = '降雨量(mm)';
        }
        else if (colValue === 'flow') {
            color = '#2FC25B';
            alias = '流量(m^3/s)';
        }
        return {
            data: data,
            scale: [{
                    dataKey: colValue,
                    alias: alias,
                }],
            series: [{
                    quickType: 'line',
                    position: "time*" + colValue,
                    color: color,
                }]
        };
    }
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            sourceData: [],
            start: '2009/7/20 0:00',
            end: '2009/7/25 0:00',
        };
        _this.slideChange = function (opts) {
            _this.setState({
                start: opts.startValue, end: opts.endValue,
            });
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        $.getJSON('/assets/data/rain-flow.json', function (sourceData) {
            _this.setState({ sourceData: sourceData });
        });
    };
    App.prototype.getDv = function () {
        var _a = this.state, start = _a.start, end = _a.end, sourceData = _a.sourceData;
        var startTime = new Date(start).getTime();
        var endTime = new Date(end).getTime();
        var ds = new DataSet({
            state: {
                start: start,
                end: end,
            }
        });
        var originDv = ds.createView();
        originDv.source(sourceData)
            .transform({
            type: 'fold',
            fields: ['rain', 'flow'],
            key: 'type',
            value: 'value',
            retains: ['rain', 'flow', 'time']
        });
        var chartDv = ds.createView();
        chartDv.source(originDv)
            .transform({
            type: 'fold',
            fields: ['rain', 'flow'],
            key: 'type',
            value: 'value',
            retains: ['rain', 'flow', 'time']
        })
            .transform({
            type: 'filter',
            callback: function (obj) {
                var time = new Date(obj.time).getTime(); // !注意：时间格式，建议转换为时间戳进行比较
                return time >= startTime && time <= endTime;
            }
        });
        return { originDv: originDv, chartDv: chartDv };
    };
    App.prototype.render = function () {
        var _a = this.state, start = _a.start, end = _a.end, sourceData = _a.sourceData;
        if (!sourceData.length) {
            return (React.createElement("div", null));
        }
        var _b = this.getDv(), originDv = _b.originDv, chartDv = _b.chartDv;
        var sliderOpts = {
            width: 'auto',
            height: 26,
            start: start,
            end: end,
            xAxis: 'time',
            yAxis: 'value',
            scales: {
                time: {
                    type: 'time',
                    tickCount: 10,
                    mask: 'M/DD H:mm'
                }
            },
            data: originDv,
            backgroundChart: {
                type: 'line'
            },
            onChange: this.slideChange.bind(this)
        };
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, animate: false, padding: [20, 20, 0, 80], data: chartDv, scale: scale },
                React.createElement(viser_react_1.Axis, null),
                React.createElement(viser_react_1.Facet, __assign({ type: "mirror", fields: ['type'], showTitle: false, padding: [0, 0, 40, 0] }, facetOpts))),
            React.createElement(viser_react_1.Plugin, null,
                React.createElement(viser_react_1.Slider, __assign({}, sliderOpts)))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map