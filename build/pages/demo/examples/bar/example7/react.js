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
var values = [
    1.2, 3.4, 3.7, 4.3, 5.2, 5.8, 6.1, 6.5, 6.8, 7.1, 7.3, 7.7,
    8.3, 8.6, 8.8, 9.1, 9.2, 9.4, 9.5, 9.7, 10.5, 10.7, 10.8, 11.0,
    11.0, 11.1, 11.2, 11.3, 11.4, 11.4, 11.7, 12.0, 12.9, 12.9,
    13.3, 13.7, 13.8, 13.9, 14.0, 14.2, 14.5, 15, 15.2, 15.6, 16.0,
    16.3, 17.3, 17.5, 17.9, 18.0, 18.0, 20.6, 21, 23.4
];
var sourceData = values.map(function (value) { return ({ value: value }); });
var dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'bin.histogram',
    field: 'value',
    binWidth: 2,
    as: ['value', 'count'],
});
var data = dv.rows;
var scale = [{
        dataKey: 'value',
        nice: false,
        min: 0,
        tickInterval: 1,
    }, {
        dataKey: 'count',
        max: 14,
    }];
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var formatter = function (val) {
            if ((val % 2)) {
                return val;
            }
            return '';
        };
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data, scale: scale },
            React.createElement(viser_react_1.Tooltip, { crosshairs: false, inPlot: false, position: "top" }),
            React.createElement(viser_react_1.Axis, { dataKey: "value", label: { formatter: formatter } }),
            React.createElement(viser_react_1.Bar, { position: "value*count" })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map