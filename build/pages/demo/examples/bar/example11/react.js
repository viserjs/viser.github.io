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
    { label: 'Mon.', series1: 2800, series2: 2260 },
    { label: 'Tues.', series1: 1800, series2: 1300 },
    { label: 'Wed.', series1: 950, series2: 900 },
    { label: 'Thur.', series1: 500, series2: 390 },
    { label: 'Fri.', series1: 170, series2: 100 },
];
var dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'fold',
    fields: ['series1', 'series2'],
    key: 'type',
    value: 'value',
});
var data = dv.rows;
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data },
            React.createElement(viser_react_1.Coord, { type: "rect", direction: "LT" }),
            React.createElement(viser_react_1.Tooltip, null),
            React.createElement(viser_react_1.Legend, null),
            React.createElement(viser_react_1.Axis, { dataKey: "value", position: "right" }),
            React.createElement(viser_react_1.Axis, { dataKey: "label", label: { offset: 12 } }),
            React.createElement(viser_react_1.Bar, { position: "label*value", color: "type", adjust: [{ type: 'dodge', marginRatio: 1 / 32 }] })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map