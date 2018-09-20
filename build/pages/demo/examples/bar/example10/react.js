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
    { country: '中国', population: 131744 },
    { country: '印度', population: 104970 },
    { country: '美国', population: 29034 },
    { country: '印尼', population: 23489 },
    { country: '巴西', population: 18203 },
];
var dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'sort',
    callback: function (a, b) {
        return a.population - b.population > 0;
    },
});
var data = dv.rows;
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data },
            React.createElement(viser_react_1.Coord, { type: "rect", direction: "LB" }),
            React.createElement(viser_react_1.Tooltip, null),
            React.createElement(viser_react_1.Axis, { dataKey: "country", label: { offset: 12 } }),
            React.createElement(viser_react_1.Bar, { position: "country*population" })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map