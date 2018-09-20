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
var DataSet = require('@antv/data-set');
var DataView = DataSet.DataView;
var data = [
    { low: 1, q1: 9, median: 16, q3: 22, high: 24 }
];
var dv = new DataView().source(data);
dv.transform({
    type: 'map',
    callback: function (obj) {
        obj.range = [obj.low, obj.q1, obj.median, obj.q3, obj.high];
        return obj;
    }
});
var scale = [{
        dataKey: 'range',
        max: 35,
    }];
var tooltipOpts = {
    crosshairs: false
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: dv, scale: scale },
                React.createElement(viser_react_1.Tooltip, __assign({}, tooltipOpts)),
                React.createElement(viser_react_1.Axis, null),
                React.createElement(viser_react_1.Box, { position: "range*1", tooltip: "x*low*q1*median*q3*high", style: {
                        stroke: '#545454',
                        fill: '#1890FF',
                        fillOpacity: 0.3
                    } }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map