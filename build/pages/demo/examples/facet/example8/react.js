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
var scale = [{
        dataKey: 'age',
        sync: true,
        tickCount: 11,
    }, {
        dataKey: 'total_percentage',
        sync: true,
        formatter: function (v) {
            return v + '%';
        }
    }, {
        dataKey: 'gender',
        sync: true,
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
        $.getJSON('/assets/data/population.json', function (sourceData) {
            var tmp = [];
            var dates = [];
            sourceData.male.values.forEach(function (obj) {
                if (dates.indexOf(obj.date) === -1) {
                    dates.push(obj.date);
                }
                obj.age_groups.forEach(function (subObject) {
                    subObject.gender = 'male';
                    subObject.date = obj.date;
                    tmp.push(subObject);
                });
            });
            sourceData.female.values.forEach(function (obj) {
                obj.age_groups.forEach(function (subObject) {
                    subObject.gender = 'female';
                    subObject.date = obj.date;
                    tmp.push(subObject);
                });
            });
            var dv = new DataSet.View().source(tmp);
            dv.transform({
                type: 'filter',
                callback: function (row) {
                    return new Date(row.date * 1000).getFullYear() === new Date(dates[0] * 1000).getFullYear();
                }
            });
            _this.setState({ data: dv.rows });
        });
    };
    App.prototype.render = function () {
        var data = this.state.data;
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, scale: scale },
            React.createElement(viser_react_1.Tooltip, null),
            React.createElement(viser_react_1.Legend, null),
            React.createElement(viser_react_1.Axis, null),
            React.createElement(viser_react_1.Facet, { type: "mirror", fields: ['gender'], transpose: true },
                React.createElement(viser_react_1.FacetView, null,
                    React.createElement(viser_react_1.Bar, { position: "age*total_percentage", color: ['gender', ['#1890ff', '#f04864']] })))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map