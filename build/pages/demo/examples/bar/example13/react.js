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
    { profession: '两年制副学士学位', highest: 110000, minimum: 23000, mean: 56636 },
    { profession: '执法与救火', highest: 120000, minimum: 18000, mean: 66625 },
    { profession: '教育学', highest: 125000, minimum: 24000, mean: 72536 },
    { profession: '心理学', highest: 130000, minimum: 22500, mean: 75256 },
    { profession: '计算机科学', highest: 131000, minimum: 23000, mean: 77031 }
];
var dv = new DataSet.View().source(sourceData);
dv.transform({
    type: 'map',
    callback: function (row) {
        row.range = [row.minimum, row.highest];
        return row;
    }
});
var data = dv.rows;
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, padding: [20, 80, 50, 110], data: data },
            React.createElement(viser_react_1.Coord, { type: "rect", direction: "LB" }),
            React.createElement(viser_react_1.Tooltip, null),
            React.createElement(viser_react_1.Legend, null),
            React.createElement(viser_react_1.Axis, { dataKey: "profession", label: { offset: 12 } }),
            React.createElement(viser_react_1.Bar, { position: "profession*range" })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map