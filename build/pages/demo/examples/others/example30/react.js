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
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: [],
            dv: []
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        $.getJSON('/assets/data/diamond.json', function (data) {
            var dv = new DataSet.View().source(data);
            dv.transform({
                type: 'kernel-smooth.density',
                fields: ['carat', 'price'],
                as: ['carat', 'price', 'density']
            });
            _this.setState({ data: data, dv: dv });
        });
    };
    App.prototype.render = function () {
        var _a = this.state, data = _a.data, dv = _a.dv;
        return (React.createElement("div", null,
            React.createElement(viser_react_1.Chart, { forceFit: true, height: 400, data: data },
                React.createElement(viser_react_1.Legend, { offset: 45 }),
                React.createElement(viser_react_1.Axis, null),
                React.createElement(viser_react_1.Point, { position: "carat*price" }),
                React.createElement(viser_react_1.View, { data: dv },
                    React.createElement(viser_react_1.Heatmap, { position: "carat*price", color: ['density', 'blue-cyan-lime-yellow-red'] })))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=react.js.map