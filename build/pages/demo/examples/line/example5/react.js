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
    { month: 'Jan', series2: 51, series1: 125 },
    { month: 'Feb', series2: 91, series1: 132 },
    { month: 'Mar', series2: 34, series1: 141 },
    { month: 'Apr', series2: 47, series1: 158 },
    { month: 'May', series2: 63, series1: 133 },
    { month: 'June', series2: 58, series1: 143 },
    { month: 'July', series2: 56, series1: 176 },
    { month: 'Aug', series2: 77, series1: 194 },
    { month: 'Sep', series2: 99, series1: 115 },
    { month: 'Oct', series2: 106, series1: 134 },
    { month: 'Nov', series2: 88, series1: 110 },
    { month: 'Dec', series2: 56, series1: 91 },
];
var dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'fold',
    fields: ['series1', 'series2'],
    key: 'key',
    value: 'value',
});
var data = dv.rows;
var scale = [{
        dataKey: 'month',
        min: 0,
        max: 1,
    }];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, scale: scale },
            React.createElement(viser_react_1.Tooltip, null),
            React.createElement(viser_react_1.Axis, null),
            React.createElement(viser_react_1.Legend, null),
            React.createElement(viser_react_1.Line, { position: "month*value", shape: "hv", color: "key" })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map