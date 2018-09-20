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
    { year: '1996', north: 322, south: 162 },
    { year: '1997', north: 324, south: 90 },
    { year: '1998', north: 329, south: 50 },
    { year: '1999', north: 342, south: 77 },
    { year: '2000', north: 348, south: 35 },
    { year: '2001', north: 334, south: -45 },
    { year: '2002', north: 325, south: -88 },
    { year: '2003', north: 316, south: -120 },
    { year: '2004', north: 318, south: -156 },
    { year: '2005', north: 330, south: -123 },
    { year: '2006', north: 355, south: -88 },
    { year: '2007', north: 366, south: -66 },
    { year: '2008', north: 337, south: -45 },
    { year: '2009', north: 352, south: -29 },
    { year: '2010', north: 377, south: -45 },
    { year: '2011', north: 383, south: -88 },
    { year: '2012', north: 344, south: -132 },
    { year: '2013', north: 366, south: -146 },
    { year: '2014', north: 389, south: -169 },
    { year: '2015', north: 334, south: -184 },
];
var dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'fold',
    fields: ['north', 'south'],
    key: 'type',
    value: 'value',
});
var data = dv.rows;
var scale = [{
        dataKey: 'year',
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
            React.createElement(viser_react_1.Tooltip, { crosshairs: { type: 'line' } }),
            React.createElement(viser_react_1.Axis, { dataKey: "value" }),
            React.createElement(viser_react_1.Legend, null),
            React.createElement(viser_react_1.Line, { position: "year*value", size: 2, color: "type" }),
            React.createElement(viser_react_1.Area, { position: "year*value", color: "type" })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map