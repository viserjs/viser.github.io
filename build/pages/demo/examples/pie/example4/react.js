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
var DataSet = require('@antv/data-set');
var sourceData = [
    { value: 251, type: '大事例一', name: '子事例一' },
    { value: 1048, type: '大事例一', name: '子事例二' },
    { value: 610, type: '大事例二', name: '子事例三' },
    { value: 434, type: '大事例二', name: '子事例四' },
    { value: 335, type: '大事例三', name: '子事例五' },
    { value: 250, type: '大事例三', name: '子事例六' },
];
var dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'percent',
    field: 'value',
    dimension: 'type',
    as: 'percent',
});
var data = dv.rows;
var viewDv = new DataSet.View().source(sourceData);
viewDv.transform({
    type: 'percent',
    field: 'value',
    dimension: 'name',
    as: 'percent'
});
var viewData = viewDv.rows;
var scale = {
    dataKey: 'percent',
    formatter: '.2%',
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var itemTpl = '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>';
        var style = {
            lineWidth: 1,
            stroke: '#fff'
        };
        var tooltip = [
            'name*percent', function (item, percent) {
                percent = (percent * 100).toFixed(2) + '%';
                return {
                    name: item,
                    value: percent
                };
            },
        ];
        var color = ['#BAE7FF', '#7FC9FE', '#71E3E3', '#ABF5F5', '#8EE0A1', '#BAF5C4'];
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, scale: scale },
            React.createElement(viser_react_1.Tooltip, { showTitle: false, itemTpl: itemTpl }),
            React.createElement(viser_react_1.Coord, { type: "theta", radius: 0.5 }),
            React.createElement(viser_react_1.Pie, { position: "percent", color: "type", label: ['type', { offset: -10, }], tooltip: tooltip, select: false, style: style }),
            React.createElement(viser_react_1.View, { data: viewData, scale: scale },
                React.createElement(viser_react_1.Coord, { type: "theta", radius: 0.75, innerRadius: 0.5 / 0.75 }),
                React.createElement(viser_react_1.Pie, { position: "percent", color: ["name", color], label: "name", tooltip: tooltip, select: false, style: style }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map