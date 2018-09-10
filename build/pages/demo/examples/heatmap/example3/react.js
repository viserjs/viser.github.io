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
var $ = require("jquery");
var DataSet = require('@antv/data-set');
var DataView = DataSet.DataView;
function getMonthWeek(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    var monthFirst = new Date(year, month, 0);
    var intervalDays = Math.round((date.getTime() - monthFirst.getTime()) / 86400000);
    var index = Math.floor((intervalDays + monthFirst.getDay()) / 7);
    return index;
}
var scale = [{
        dataKey: 'month',
        type: 'cat',
        values: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", 'December']
    }, {
        dataKey: 'day',
        type: 'cat',
    }, {
        dataKey: 'week',
        type: 'cat',
        values: ['5', '4', '3', '2', '1', '0'],
    }, {
        dataKey: '涨跌幅',
        type: 'linear',
        min: -10,
        max: 10,
        sync: true,
    }, {
        dataKey: 'time',
        type: 'time',
    }, {
        dataKey: '日期',
        type: 'time',
    }];
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
        $.getJSON('/assets/data/stock-calendar.json', function (sourceData) {
            sourceData.forEach(function (obj) {
                var date = new Date(obj['日期']);
                var month = date.getMonth();
                obj.month = month;
                obj.day = date.getDay();
                obj.week = getMonthWeek(date).toString();
            });
            var dv = new DataView();
            dv.source(sourceData)
                .transform({
                type: 'sort-by',
                fields: ['day'],
                order: 'DESC',
            });
            _this.setState({ data: dv });
        });
    };
    App.prototype.render = function () {
        var data = this.state.data;
        var colTitle = {
            offsetY: -10,
            style: {
                fontSize: 12,
                textAlign: 'center',
                fill: '#666',
            },
        };
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: [20, 120, 50, 120], data: data, scale: scale },
                React.createElement(viser_react_1.Legend, { dataKey: "\u6DA8\u8DCC\u5E45", offset: 0 }),
                React.createElement(viser_react_1.Tooltip, { title: "\u65E5\u671F" }),
                React.createElement(viser_react_1.Facet, { type: "list", fields: ['month'], cols: 3, padding: [0, 15, 30, 15], colTitle: colTitle },
                    React.createElement(viser_react_1.FacetView, null,
                        React.createElement(viser_react_1.Polygon, { position: "day*week*\u65E5\u671F", color: ['涨跌幅', '#F51D27-#FA541C-#FFBE15-#FFF2D1-#E3F6FF-#85C6FF-#0086FA-#0A61D7'], style: {
                                lineWidth: 1,
                                stroke: '#fff',
                            } }))))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map